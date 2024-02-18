import { LoadingBoundary } from "@/components/global/suspense";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Modal, ModalContent } from "@/components/ui/modal";
import { Recipe } from "@/components/ui/moremealsinfo";
import {
  AvatarPlace,
  Logo,
  LogoPart,
  Navbar,
  UserInformation,
  UserName,
} from "@/components/ui/navbar";
import { Meal } from "@/types/Meal";
import { AvatarImage } from "@radix-ui/react-avatar";
import logo from "../../public/vite.svg"

import React, {
  ReactNode,
  Suspense,
  useContext,
  useEffect,
  useState,
} from "react";
import { MealProvider } from "@/providers";
import { MealCard, MealCards } from "@/components/ui/mealcard";

export const RandomeMealsPage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [meal, setMeal] = useState<Meal | null>(null);
  const [refresh, setRefresh] = useState<Object>({});
  const handleOpen = (meal: Meal) => {
    setOpen(true);
    setMeal(meal);
  };
  const handleClose = () => {
    setOpen(false);
    setMeal(null);
  };
  const [meals, setMeals] = useState<[Meal] | null>(null);
  useEffect(() => {
    console.log("fetch");
    MealProvider.findMany("").then((value) => {
      setMeals(value);
    }).catch((e)=>{
      console.log(e);
    });
  }, [refresh]);
  return (
    <>
      <Navbar>
        <LogoPart>
          <Logo src={logo} />
        </LogoPart>
        <UserInformation>
          <UserName>@username</UserName>
          <AvatarPlace>
            <Button className="">
              <Avatar className="bg-[--color-2]">
                <AvatarImage src={logo} />
                <AvatarFallback>IO</AvatarFallback>
              </Avatar>
            </Button>
          </AvatarPlace>
        </UserInformation>
      </Navbar>
      <MealCards>
        <LoadingBoundary<[Meal]> wait={meals}>
          {meals && (
            <>
            {meals.map((meal, i)=>{
              <MealCard key={"cardMeal"+i} handleOpen={handleOpen} meal={meal} />
            })}
            </>
          )}
        </LoadingBoundary>
      </MealCards>

      <Modal open={open}>
        <ModalContent>
          <div className="bg-white p-2 w-[600px] relative rounded-xl overflow-hidden h-[600px]">
            <Button
              onClick={handleClose}
              className="z-10 absolute right-0 top-0 bg-[--color-1]"
            >
              X
            </Button>
            <LoadingBoundary<Meal> wait={meal}>
              <Recipe meal={meal} />
            </LoadingBoundary>
          </div>
        </ModalContent>
      </Modal>
      <Button
        className="bg-[--color-1] fixed p-3 bottom-5 right-5 z-20"
        onClick={() => {
          setRefresh({});
        }}
      >
        Regenerate
      </Button>
    </>
  );
};

import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import image from "../../../public/photo1.png";
import { Button } from "./button";
import { Meal } from "@/types/meal";

export type foodCardProps = {
  meal: Meal;
  handleOpen: (data: Meal) => void;
};

const MealCardImage = ({
  className,
  ...rest
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <img className={cn("", className)} src="" alt="" {...rest} />;
};

const MealName = ({
  className,
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return <h4 className={cn("text-xl", className)} {...rest} />;
};

const MealRegion = ({
  className,
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return <h4 className={cn("", className)} {...rest} />;
};

export const MealCards = ({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("flex p-5 flex-wrap xs:flex-col xl:flex-row", className)}
      {...rest}
    />
  );
};

export const MealCard = ({ meal, handleOpen }: foodCardProps) => {
  return (
    <div className="h-[450ox] p-3 xl:w-1/2 bg-[weat]  w-1/2 ">
      <div className=" shadow-xl h-full w-full relative rounded-xl">
        <div className="p-3 w-full h-full flex flex-col gap-5">
          <div className="w-full h-4/6">
            <div className="bg-gray-600 shadow-xl h-full w-full flex justify-center items-center rounded-xl overflow-hidden">
              <MealCardImage src={meal.image} alt="" />
            </div>
          </div>
          <div className="h-2/6 flex flex-col gap-3">
            <MealName>{meal.name}</MealName>
            <MealRegion>
              <b>Region :</b> {meal.region_id}
            </MealRegion>
          </div>
          <div>
            <Button
              onClick={() => handleOpen(meal)}
              className="bg-[--color-1] absolute right-4 bottom-4 shadow-md"
            >
              recipe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

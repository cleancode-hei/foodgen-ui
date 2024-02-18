import { Dispatch, SetStateAction } from "react";
import { ingredientProvider } from "@/providers";
import { Ingredient } from "@/types";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";

const page = 0;
const page_size = 10;
const { findMany } = ingredientProvider;

type DialogIgProps = {
  text: string;
  setState: Dispatch<SetStateAction<string[]>>;
};

export const DialogIngredient = ({ text, setState }: DialogIgProps) => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const handleDoneClick = () => {
    setState(selected);
    setIsOpen(false);
  };
  useEffect(() => {
    const fetchIg = async () => {
      const result = await findMany({ page, page_size });
      setIngredients(result);
    };
    fetchIg();
  }, []);
  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="py-1 rounded-xl px-2 shadow-md outline-none"
          onClick={() => setIsOpen(true)}
        >
          {text}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>{text}</DialogTitle>
          <DialogDescription>
            Choose from the list of ingredients
          </DialogDescription>
        </DialogHeader>
        {ingredients.map((ingredient) => (
          <div
            key={`${ingredient.id}:${ingredient.name}`}
            className="flex flex-row gap-2 items-center"
          >
            <Checkbox
              id={ingredient.id}
              onCheckedChange={(checked) => {
                return checked
                  ? setSelected([...selected, ingredient.name])
                  : setSelected(
                      selected.filter((value) => value !== ingredient.name),
                    );
              }}
            />
            <label
              htmlFor={ingredient.id}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {ingredient.name}
            </label>
          </div>
        ))}
        <DialogFooter>
          <Button type="button" onClick={handleDoneClick}>
            Done
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

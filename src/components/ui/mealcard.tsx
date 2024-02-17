import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import image from "../../../public/photo1.png";
import { Button } from "./button";

export type Meal = {
  id: string;
  name: string;
  image: string;
  readme: string;
  recipe_id: string;
  region_id: string;
};

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
  return <h4 className={cn("", className)} {...rest} />;
};

const MealDescription = ({
  className,
  ...rest
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return <p className={cn("flex-wrap flex", className)} {...rest} />;
};

export const MealCards = ({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("flex flex-wrap md:flex-col xl:flex-row", className)}
      {...rest}
    />
  );
};

export const MealCard = ({ meal, handleOpen }: foodCardProps) => {
  return (
    <div className="h-[450px] shadows-3 md:w-full xl:w-1/2 rounded-xl w-1/2 relative">
      <div className="p-3 w-full h-full">
        <div className="w-full h-3/6">
          <div className="bg-gray-800 h-full w-full rounded-xl overflow-hidden">
            <MealCardImage src={image} alt="" />
          </div>
        </div>
        <div className="h-2/6 flex flex-col gap-3">
          <MealName>{meal.name}</MealName>
          <MealDescription className="">{meal.readme}</MealDescription>
        </div>
        <div>
          <Button
            onClick={() => handleOpen(meal)}
            className="bg-[--color-1] absolute right-4 bottom-4 rounded-md"
          >
            recipe
          </Button>
        </div>
      </div>
    </div>
  );
};

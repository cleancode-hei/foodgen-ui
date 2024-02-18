import { cn } from "@/lib/utils";
import { Meal } from "@/types/Meal";
import { useEffect, useState } from "react";
import { Button } from "./button";
import { MealProvider, recipeProvider } from "@/providers";
import { Recipe as RecipeType } from "@/types";

type propsType = {
  meal: Meal | null;
};

const RecipeImage = ({
  className,
  ...rest
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <img className={cn("border-0", className)} {...rest} />;
};

export const Recipe = ({ meal }: propsType) => {
  const [recipe, setRecipe] = useState<
    RecipeType | RecipeType[] | null
  >(null);
  useEffect(() => {
    console.log("asldkjf");
    recipeProvider
      .findOne( meal?.recipe_id,"lkjd" )
      .then((value) => {
        setRecipe(value);
      });
  }, []);

  const handlePdf = () => {
    if (meal) {
      MealProvider.saveBy({ token: "", id: meal?.id }).then(() => {});
    }
  };

  return (
    <>
      {!meal ? (
        <></>
      ) : (
        <div className="p-3 w-full h-full flex flex-col gap-3 relative">
          <div className="w-full shadow-xl overflow-hidden rounded-lg h-2/6">
            <div className="w-full h-full bg-gray-600 z-10">
              <RecipeImage className="w-full h-full" src={meal.image} alt="" />
            </div>
          </div>
          <div className="w-full h-3/6">
            <div className="p-3 bg-zinc-50 h-full overflow-auto w-full">
              <h4 className="text-xl fond-bold">{meal.name}</h4>
              <div className="py-2">
                <label htmlFor="" className="underline">
                  ingredients
                </label>
                <ul>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                </ul>
              </div>
              <div className="py-2">
                <label htmlFor="" className="underline">
                  description
                </label>
                <p className="indent-4">
                  {recipe ? recipe.readme : <>alsdkj</>}
                </p>
              </div>
            </div>
          </div>
          <Button
            className="absolute right-4 bottom-4 bg-[--color-1]"
            onClick={handlePdf}
            variant={"secondary"}
          >
            Download
          </Button>
        </div>
      )}
    </>
  );
};

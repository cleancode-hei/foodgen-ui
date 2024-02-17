import { Meal } from "./mealcard";

type propsType = {
  meal: Meal | null;
};

const RecipeImage = ({...rest}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <img {...rest} />
  )
}

export const Recipe = ({ meal }: propsType) => {
  return (
    <>
      {!meal ? (
        <></>
      ) : (
        <div className="p-3 w-full h-full flex flex-col gap-3">
          <div className="w-full overflow-hidden rounded-lg h-1/3 bg-blue-100">
            <div className="w-1/2 h-full bg-gray-100">
              <RecipeImage className="w-full h-full" src="" alt="" />
            </div>
            <div className="w-1/2 h-full bg-gray-200">
            </div>
          </div>
          <div className="w-full h-2/3 bg-blue-300">
            <div className="p-3 bg-green-100 h-full overflow-auto w-full">
              <h4>
                {meal.name}
              </h4>
              <label htmlFor="">ingredients</label>
              <ul>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
              </ul>
              <label htmlFor="">description</label>
              <p>
                {meal.readme}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

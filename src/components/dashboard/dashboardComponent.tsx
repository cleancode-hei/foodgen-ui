import React, { useState } from "react";
import "./style.css";
import { IngredientsList, Meals, Profile } from "./options";
import RegionList from "./options/region";

interface Element {
  content: string;
}

interface ElementProps {
  elements: Element[];
}

interface OptionProps {
  element: Element;
  onClick: (element: Element) => void;
}

const Option: React.FC<OptionProps> = ({ element, onClick }) => {
  const handleOptionClick = () => {
    onClick(element);
  };

  return (
    <div
      onClick={handleOptionClick}
      style={{ cursor: "pointer" }}
      className="_option flex"
    >
      <img
        alt={element.content}
        className="Img"
        src={`/Dashboard/${element.content.toLowerCase()}.png`}
      />
      <p>{element.content}</p>
    </div>
  );
};

export const DashboardComponent: React.FC<ElementProps> = ({ elements }) => {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);

  const handleElementClick = (element: Element) => {
    setSelectedElement(element);
  };

  return (
    <div className="container">
      <div className="left">
        <div className="contLogo flex justify-center items-cente">
          <img className="logo" src="/logo.png" alt="logo" />
        </div>

        {elements.map((element, index) => (
          <Option key={index} element={element} onClick={handleElementClick} />
        ))}
      </div>
      <div className="rightContainer">
         <div className="static fixed">
         Welcome to the Dashboard
   </div>
   <div className="right">

     {selectedElement && (
       <>
         {selectedElement.content === "Profile" && (
           <>
          
             <Profile/>
           </>
         )}
         {selectedElement.content === "Ingredients" && (
           <>
             <IngredientsList/>
           </>
         )}
           {selectedElement.content === "Meals" && (
           <>
             <Meals/>
           </>
         )}
           {selectedElement.content === "Regions" && (
           <>
             <RegionList token=''/>
           </>
         )}
       </>
     )}
   </div>
      </div>
  
     
    </div>
  );
};

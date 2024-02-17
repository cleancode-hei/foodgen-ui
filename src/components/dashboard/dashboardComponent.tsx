import React, { useState } from "react";
import { Element, ElementProps } from "@/types";
import "./style.css"
export const DashboardComponent: React.FC<ElementProps> = ({ elements }) => {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);

  const handleElementClick = (element: Element) => {
    setSelectedElement(element);
  };

  /* 
   const [rightValue, setRightValue] = useState<string>("userInfo");
   const [leftValue, setLeftValue] = useState<string>("userInfo");
  */

  return (
    <>
      <div className="container">
        <div className="left">
          <h2>Left</h2>
          {elements.map((element) => (
            <div
              key={element.name}
              style={{ cursor: "pointer" }}
              onClick={() => handleElementClick(element)}
            >
              {element.name}
            </div>
          ))}
        </div>
        <div className="right">
          <h2>Right</h2>
          {selectedElement && <p>{selectedElement.content}</p>}
        </div>
      </div>
    </>
  );
};

import React, { useState } from "react";
import { Element, ElementProps } from "@/types";
import "./style.css";
export const DashboardComponent: React.FC<ElementProps> = ({ elements }) => {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);

  const handleElementClick = (element: Element) => {
    setSelectedElement(element);
  };
  return (
    <>
      <div className="container">
        <div className="left">
          {elements.map((element) => (
            <div
              className="options"
              key={element.name}
              style={{ cursor: "pointer" }}
              onClick={() => handleElementClick(element)}
            >
              {element.name}
            </div>
          ))}
        </div>
        <div className="right">
          {selectedElement && <p>{selectedElement.content}</p>}
        </div>
      </div>
    </>
  );
};

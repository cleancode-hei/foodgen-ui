import { useState } from "react";
import { Element } from "@/types";
import { DashboardComponent } from "@/components/dashboard/dashboardComponent";
import RegionList from "@/components/dashboard/options/region";
import { IngredientsList } from "@/components/dashboard/options";
import "./dashboard.css";

export const Dashboard = () => {
  const elements: Element[] = [
    {
      name: "Profile",
      content: <p>Profile contents</p>,
    },
    {
      name: "Ingérients",
      content: <IngredientsList />,
    },
    {
      name: "Meals",
      content: <>Meals</>,
    },
    {
      name: "Régions",
      content: <RegionList />,
    },
  ];

  const [selectedElement, setSelectedElement] = useState<Element | null>(
    elements.find((element) => element.name === "Profile") || null,
  );

  const handleElementClick = (element: Element) => {
    setSelectedElement(element);
  };

  return (
    <div>
      <div className="static">
        <p>Welcome to the admin space!</p>
        {selectedElement && selectedElement.name === "Profile" && (
          <div>{selectedElement.content}</div>
        )}
      </div>
      <DashboardComponent
        elements={elements}
        selectedElement={selectedElement}
        handleElementClick={handleElementClick}
      />
    </div>
  );
};

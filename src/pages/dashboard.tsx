import { Element } from "@/types";
import { DashboardComponent } from "@/components/dashboard/dashboardComponent";
import RegionList from "@/components/dashboard/options/region";
import { IngredientsList } from "@/components/dashboard/options";

export const Dashboard = () => {
  const elements: Element[] = [
    {
      name: "Profile",
      content: <p>Profile contents</p>,
    },
    {
      name: "Ingérients",
      content: <IngredientsList/>
    },
    {
      name: "Meals",
      content: <>Meals</>,
    },
    {
      name: "Régions",
      content: <RegionList/>,
    },
  ];

  return (
    <div>
      <DashboardComponent elements={elements} />
    </div>
  );
};

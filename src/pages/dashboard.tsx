import { Element } from "@/types";
import { DashboardComponent } from "@/components/dashboard/dashboardComponent";
import RegionList from "@/components/dashboard/options/region";

export const Dashboard = () => {
  const elements: Element[] = [
    {
      name: "A",
      content: <p>Content for A</p>,
    },
    {
      name: "B",
      content: <>B contents</>,
    },
    {
      name: "C",
      content: <RegionList token="" />,
    },
  ];

  return (
    <div>
      <DashboardComponent elements={elements} />
    </div>
  );
};

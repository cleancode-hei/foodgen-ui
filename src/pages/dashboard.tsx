import { Element } from "@/types";
import { DashboardComponent } from "@/components/dashboard/dashboardComponent";

export const Dashboard = () => {
  const elements: Element[] = [
    {
      name: "A",
      content: "Content for A",
    },
    {
      name: "B",
      content: "Content for B",
    },
    {
      name: "C",
      content: "Content for C",
    },
  ];

  return (
    <div>
      <DashboardComponent elements={elements} />
    </div>
  );
};

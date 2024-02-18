import { DashboardComponent } from "@/components/dashboard/dashboardComponent";
import "./dashboard.css";

export const Dashboard = () => {
  const elements = [
    { content: "Profile" },
    { content: "Ingredients" },
    { content: "Meals" },
    { content: "Regions" },
  ];

  return <DashboardComponent elements={elements} />;
};

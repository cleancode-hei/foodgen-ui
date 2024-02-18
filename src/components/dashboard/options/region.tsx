import React, { useEffect, useState } from "react";
import { Region } from "@/types/region";
import { regionProvider } from "@/providers/region";

const RegionList: React.FC<{ token: string }> = ({ token }) => {
  const [regions, setRegions] = useState<Region[]>([]);

  useEffect(() => {
    getAllRegions(token)
      .then((data) => setRegions(data))
      .catch((error) =>
        console.error(
          "Une erreur s'est produite lors de la récupération des régions:",
          error,
        ),
      );
  }, [token]);

  async function getAllRegions(token: string): Promise<Region[]> {
    try {
      const response = await regionProvider.findMany({
        token,
        page: 1,
        page_size: 100,
      });
      return response;
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la récupération des régions:",
        error,
      );
      throw error;
    }
  }

  return (
    <div>
      <h1>Liste des régions</h1>
      <ul>
        {regions.map((region) => (
          <li key={region.id}>{region.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RegionList;

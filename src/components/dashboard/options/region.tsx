import React, { useEffect, useState } from "react";
import { Region } from "@/types/region";
import { regionProvider } from "@/providers/region";

const RegionList: React.FC<{/* token: string*/ }> = ({/* token */}) => {
  const [regions, setRegions] = useState<Region[]>([]);
  const [newRegionName, setNewRegionName] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const page_size = 10;

  useEffect(() => {
    const params = {
     // token: token,
      page: currentPage,
     page_size: page_size,
    };
  
    getAllRegions(params)
      .then((data) => setRegions(data))
      .catch((error) =>
        console.error(
          "Une erreur s'est produite lors de la récupération des régions:",
          error,
        ),
      );
  }, [currentPage]);
  
  async function getAllRegions(params: {
    //token: string;
    page: number;
    page_size: number;
  }): Promise<Region[]> {
    try {
      const response = await regionProvider.findMany(params);
      return response;
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la récupération des régions:",
        error,
      );
      throw error;
    }
  }

  async function saveRegion() {
    if (newRegionName.trim() === '') {
      return; 
    }

    const newRegion: Region = {
      name: newRegionName,
      id: Math.random().toString(36),
    };

    try {
      await regionProvider.save({
        payload: [newRegion, ...regions],
      });

      setRegions([newRegion, ...regions]);
      setNewRegionName('');
    } catch (error) {
      console.error("Une erreur s'est produite lors de la sauvegarde de la région:", error);
    }
  }
  async function deleteRegion(regionId: string) {
    try {
      await regionProvider.delete(regionId);
      const updatedRegions = regions.filter((region) => region.id !== regionId);
      setRegions(updatedRegions);
    } catch (error) {
      console.error("Une erreur s'est produite lors de la suppression de la région:", error);
    }
  }

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        saveRegion();
      }}>
        <input
          type="text"
          value={newRegionName}
          onChange={(e) => setNewRegionName(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>

      <ul>
        {regions.map((region) => (
          <li key={region.id}>
            {region.name}
            <button
              className="delete-button"
              onClick={(e) => {
                e.preventDefault();
                deleteRegion(region.id)}}
            >
             ... Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegionList;

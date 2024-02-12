import React from "react";
import Search from "@/app/components/food/generator/searchBar/search";
import { useRouter } from "next/navigation";
export default function Form(){
  const router = useRouter();
  return(
    <>
      <Search/>
      <button className="btn-app-2" onClick={() => {router.push("/food/generator")}}>skip</button>
    </>
  )
}
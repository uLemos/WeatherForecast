'use client'
import { WeatherForecast } from "@/types/weatherForecast/types";
import { useState, useEffect } from "react";

const IconCurrent = ({ iconCode }: { iconCode: WeatherForecast }) => {
  const [icon, setIcon] = useState<string | null>("");
  const [description, setDescription] = useState<string | null>("");

  console.log(iconCode);

  useEffect(() => {
    if(iconCode != null){
      setIcon(`https://openweathermap.org/img/wn/${iconCode.weather[0].icon}.png`);
      setDescription(iconCode.weather[0].description);
    }
  }, [iconCode]); 

  return (
    <div className="flex flex-col">
      <img src={icon}/>
      <span className="tracking-tighter font-bold text-xs text-slate-400">{description?.toLocaleUpperCase()}</span>
    </div>
  );
};

export default IconCurrent;
'use-client'

import { WeatherForecast } from "@/types/weatherForecast/types"
import { useEffect, useState } from "react"

export default function Temperature({main}: {main: WeatherForecast}) {
  const [temp, setTemp] = useState<WeatherForecast | null>(null);

  useEffect(() => {
    if(main != null)
      setTemp(main);
  }, [main]);
  
  return temp
}
import DateHourCurrent from "@/components/client-component/hourCurrent";
import IconCurrent from "@/components/client-component/iconCurrent";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SunMoon } from "lucide-react";
import { WeatherForecast } from "@/types/weatherForecast/types";

const token:string = "f3525774a28aaaa7fbd7bfcb155ef4de";

const fetchWeather = async () => {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Boituva,BR&units=metric&appid=${token}&lang=pt_br`);
  if(!res.ok)
    throw new Error(`Falhou: ${await res.json()}`);
  return res.json();
}

const Home = async () => {
  
  const weatherForecast: WeatherForecast = await fetchWeather();

  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <div className="grid grid-cols-2">
              <CardTitle className="flex items-center text-sm lg:text-lg">
                Clima Atual
              </CardTitle>
              <SunMoon className="col-end-4"/>
              <CardDescription>
                <DateHourCurrent />
              </CardDescription>
            </div>
            <CardContent className="px-0 grid grid-cols-1 xl:grid-cols-3 gap-4">
              <div className="flex items-center gap-4">
                <IconCurrent iconCode={weatherForecast}/>
                <div className="flex">
                  <h1 className="font-bold text-7xl text-slate-600">{weatherForecast.main.temp.toString().replace(/[^\d].*/g, "")}</h1>
                  <span className="font-bold text-slate-600">°C</span>
                </div>
              </div>
              <div className="flex flex-col col-span-2 items-center gap-1">
                <h1 className="tracking-tighter font-bold text-lg text-slate-400">{weatherForecast.name}</h1>
                <ul className="flex gap-2">
                  <li>
                    <div className="flex flex-col justify-center items-center font-semibold text-slate-600">
                      <a href="" className="tracking-tighter font-semibold text-sm text-slate-900">Visibilidade</a>
                      {weatherForecast.visibility} m
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-col justify-center items-center font-semibold text-slate-600">
                      <a href="" className="tracking-tighter font-semibold text-sm text-slate-900">Umidade</a>
                      {weatherForecast.main.humidity}%
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-col justify-center items-center font-semibold text-slate-600">
                      <a href="" className="tracking-tighter font-semibold text-sm text-slate-900">Nível do mar</a>
                      {weatherForecast.main.sea_level} m
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-col justify-center items-center font-semibold text-slate-600">
                      <a href="" className="tracking-tighter font-semibold text-sm text-slate-900">Nível do Solo</a>
                      {weatherForecast.main.grnd_level} m
                    </div>
                  </li>
                </ul>
              </div>
            </CardContent>
          </CardHeader>
        </Card>
      </section>
    </main>
  );
};

export default Home;

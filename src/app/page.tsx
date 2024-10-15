import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SunMoon } from "lucide-react";
import Image from "next/image";

export default function Home() {

  const HourCurrent = (): string => {
    const dataCurrent = new Date();
    const dataHour = dataCurrent.getHours().toString().padStart(2, '0');
    const dataMin = dataCurrent.getMinutes().toString().padStart(2, '0');
    const dataSec = dataCurrent.getSeconds().toString().padStart(2, '0');

    return `${dataHour}:${dataMin}`;
  }

  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <div className="grid grid-cols-2">
              <CardTitle className="flex items-center">
                Clima Atual
              </CardTitle>
              <SunMoon className="col-end-4"/>
              <CardDescription>
                {HourCurrent()}
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
      </section>
    </main>
  );
}

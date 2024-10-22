import { Avatar, AvatarImage } from "../../ui/avatar";
import { Badge } from "../../ui/badge";
import { Card, CardContent } from "../../ui/card";

export const SchedulingBarber = () => {
  return (
    <section className="flex w-full flex-col gap-2 px-5 py-3">
      <h3 className="text-sm font-bold text-gray-500">AGENDAMENTOS</h3>

      <Card className="flex">
        <CardContent className="flex-1 space-y-2 p-3">
          <Badge
            variant={"outline"}
            className="flex h-5 w-[80px] items-center justify-center bg-primary/20 text-primary"
          >
            Confirmado
          </Badge>

          <h2 className="font-semibold">Corte de Cabelo</h2>
          <section className="flex w-full items-center gap-3">
            <Avatar>
              <AvatarImage
                src={
                  "https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"
                }
              />
            </Avatar>
            Vintage Barber
          </section>
        </CardContent>

        <section className="flex w-[108px] flex-col items-center justify-center border border-l-2 p-3">
          <p className="text-xs">Outubro</p>
          <p className="text-lg font-semibold">26</p>
          <p className="text-xs">09:45</p>
        </section>
      </Card>
    </section>
  );
};

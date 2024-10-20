import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Input } from "@/components/ui/input";
import { db } from "@/lib/prisma";
import { mdiMustache, mdiRazorDoubleEdge } from "@mdi/js";
import Icon from "@mdi/react";
import { Scissors, Search } from "lucide-react";
import Image from "next/image";

export default async function Home() {
  const barberDb = await db.barbershop.findMany();
  console.log({ barberDb });
  return (
    <>
      <Header />
      <div className="h-full w-full space-y-4">
        <section className="w-full px-5 py-6">
          <article className="flex w-full flex-col gap-1">
            <h2 className="text-lg">
              Olá, <span className="font-semibold">Mário</span>{" "}
            </h2>
            <span className="text-md">Sexta, 25 Outubro</span>
          </article>
        </section>

        <div className="flex w-full items-center gap-2 p-5">
          <Input />
          <Search className="h-[36px] w-[40px] rounded-md bg-primary p-[10px]" />
        </div>

        <div className="flex gap-3 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
          <Button className="flex h-10 items-center gap-2 bg-secondary px-4 py-3 font-semibold antialiased">
            <Scissors size={"24px"} />
            Cabelo
          </Button>

          <Button className="flex h-10 items-center gap-2 bg-secondary px-4 py-3 font-semibold antialiased">
            <Icon path={mdiMustache} size={"24px"} />
            Barba
          </Button>

          <Button className="flex h-10 items-center gap-2 bg-secondary px-4 py-3 font-semibold antialiased">
            <Icon path={mdiRazorDoubleEdge} size={"24px"} />
            Sobrancelhas
          </Button>

          <Button className="flex h-10 items-center gap-2 bg-secondary px-4 py-3 font-semibold antialiased">
            <Scissors size={"24px"} />
            Gelinho
          </Button>
        </div>

        <div className="flex w-full items-center justify-center px-5">
          <Image
            src={"/Banner.png"}
            alt="Um banner Informativo"
            width={150}
            height={150}
            className="h-[150px] w-full rounded-lg object-cover"
          />
        </div>

        <section className="flex w-full flex-col gap-2 px-5 py-3">
          <h3 className="font-medium text-gray-500">AGENDAMENTOS</h3>

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

        <section className="w-full space-y-2 px-5 py-3">
          <h3 className="font-medium text-gray-500">RECOMENDADOS</h3>

          <div>
            {barberDb.map((value) => (
              <Card key={value.id} className="h-[220px] w-[170px]">
                <CardContent className="h-full w-full"></CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

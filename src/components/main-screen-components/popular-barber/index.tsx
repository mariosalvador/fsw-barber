import { Star } from "lucide-react";
import { Badge } from "../../ui/badge";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import Link from "next/link";
import Image from "next/image";
import { db } from "@/lib/prisma";

export const PopularBarber = async () => {
  const populars = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });
  return (
    <section className="w-full space-y-2 px-5 py-3">
      <h3 className="text-sm font-bold text-gray-500">POPULARES</h3>

      <div className="flex w-full gap-5 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
        {populars.map((value) => (
          <Card key={value.id} className="h-[230px] w-[260px]">
            <CardContent className="space-y-5 p-0">
              <div className="relative max-h-max w-[160px] p-1 [&::-webkit-scrollbar]:hidden">
                <Image
                  src={value.imageURL}
                  alt={value.name}
                  width={160}
                  height={160}
                  className="relative rounded-lg"
                />
                <Badge className="absolute left-2 top-2 flex h-5 max-w-max items-center gap-1 bg-secondary/80 p-2">
                  <Star size={12} className="text-primary" />
                  5,0
                </Badge>
              </div>
              <section className="w-[160px] space-y-1.5 px-2">
                <h3 className="text-md truncate font-semibold">{value.name}</h3>
                <p className="truncate text-sm text-gray-500">
                  {value.address}
                </p>
                <Button className="h-[36px] w-full bg-secondary" asChild>
                  <Link href={`/barbershop/details/${value.id}`}>Reservar</Link>
                </Button>
              </section>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

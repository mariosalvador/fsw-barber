import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { db } from "@/lib/prisma";
import { ChevronLeft, MapPin, Menu, Smartphone, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const BarbershopDetails = async ({ params }: { params: { id: string } }) => {
  const barbershopDetails = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  });

  if (!barbershopDetails) {
    return notFound();
  }

  return (
    <main>
      <div className="relative h-[250px] w-full">
        <Image
          alt={barbershopDetails?.name}
          src={barbershopDetails?.imageURL}
          fill
          className="h-[250px] w-[390px] object-cover"
        />

        <Button className="absolute left-4 top-4 bg-secondary" asChild>
          <Link href={"/"}>
            <ChevronLeft className="size-6" />
          </Link>
        </Button>

        <Button className="absolute right-4 top-4 bg-secondary">
          <Menu className="size-6" />
        </Button>
      </div>

      <section className="borber max-h-max w-full space-y-4 border-b px-5 py-4">
        <h1 className="text-xl font-bold antialiased">
          {barbershopDetails?.name}
        </h1>
        <article className="space-y-3">
          <span className="flex items-center gap-2 text-sm">
            <MapPin size={20} className="text-primary" />
            {barbershopDetails?.address}
          </span>

          <span className="flex items-center gap-2 text-sm">
            <Star size={20} className="text-primary" />
            5,0 (500 avaliações)
          </span>
        </article>
      </section>

      <section className="borber max-h-max w-full space-y-4 border-b px-5 py-4">
        <h1 className="text-md font-bold text-gray-500 antialiased">
          Sobre nós
        </h1>
        <article className="text-pretty text-justify">
          {barbershopDetails?.description}
        </article>
      </section>

      <section className="borber max-h-max w-full space-y-4 border-b px-5 py-4">
        <h1 className="text-md font-bold text-gray-500 antialiased">
          Serviços
        </h1>
        {barbershopDetails?.services.map((services) => (
          <Card key={services.id} className="h-[140px]">
            <CardContent className="flex h-full w-full items-center gap-1 p-2">
              <Image
                src={services.imageURL}
                alt={services.name}
                width={160}
                height={160}
                className="h-full rounded-lg"
              />
              <article className="h-full w-full space-y-1 p-2">
                <h2 className="text-md font-bold text-white antialiased">
                  {services.name}
                </h2>
                <p className="text-md font-normal text-gray-500 antialiased">
                  {services.description}
                </p>
                <div className="flex w-full items-center justify-between">
                  <span className="text-md font-bold text-primary antialiased">
                    {" "}
                    R$ {services.price.toString()}
                  </span>
                  <Button className="h-[36px] w-[90px] bg-secondary">
                    Reservar
                  </Button>
                </div>
              </article>
            </CardContent>
          </Card>
        ))}
      </section>

      <div className="max-h-max w-full space-y-4 px-5 py-4">
        <h1 className="text-md font-bold text-gray-500 antialiased">
          Contacto
        </h1>
        {barbershopDetails?.phones.map((phones, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Smartphone />
              {phones}
            </span>

            <Button
              variant={"outline"}
              className="h-[36px] w-[90px] font-semibold"
            >
              Copiar
            </Button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default BarbershopDetails;

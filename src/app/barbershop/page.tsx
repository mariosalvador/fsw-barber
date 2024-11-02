import { Header } from "@/components/main-screen-components/header";
import { SearchInput } from "@/components/search-input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { db } from "@/lib/prisma";
import { StarIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/main-screen-components/footer";

interface BarbershopsProps {
  searchParams: {
    search: string;
  };
}

const BarbershopsPage = async ({ searchParams }: BarbershopsProps) => {
  const barbershop = await db.barbershop.findMany({
    where: {
      name: {
        contains: searchParams?.search,
        mode: "insensitive",
      },
    },
  });

  return (
    <div className="flex h-[100vh] w-full flex-col justify-between space-y-2">
      <Header />

      <div className="h-full w-full space-y-5 overflow-y-scroll py-3 [&::-webkit-scrollbar]:hidden">
        <SearchInput />

        <p className="w-full px-5 text-sm font-semibold text-gray-500">
          RESULTADOS PARA &quot;{searchParams.search}&quot;{" "}
        </p>
        {barbershop.length > 0 ? (
          <div className="flex w-full flex-wrap gap-5 px-5">
            {barbershop.map((value) => (
              <Card key={value.id} className="h-[230px] max-w-max">
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
                      <StarIcon size={12} className="text-primary" />
                      5,0
                    </Badge>
                  </div>

                  <section className="w-[160px] space-y-1.5 px-2">
                    <h3 className="text-md truncate font-semibold">
                      {value.name}
                    </h3>
                    <p className="truncate text-sm text-gray-500">
                      {value.address}
                    </p>
                    <Button className="h-[36px] w-full bg-secondary" asChild>
                      <Link href={`/barbershop/details/${value.id}`}>
                        Reservar
                      </Link>
                    </Button>
                  </section>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="w-full px-5 text-sm font-semibold text-gray-500">
            Nenhum encontrado!
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default BarbershopsPage;

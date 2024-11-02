import { Button } from "@/components/ui/button";
import { Header } from "@/components/main-screen-components/header";
import { mdiMustache, mdiRazorDoubleEdge } from "@mdi/js";
import Icon from "@mdi/react";
import { Scissors } from "lucide-react";
import Image from "next/image";

import { SchedulingBarber } from "@/components/main-screen-components/scheduling-barber";
import { RecommendedBarber } from "@/components/main-screen-components/recommended-barber";
import { PopularBarber } from "@/components/main-screen-components/popular-barber";
import { Footer } from "@/components/main-screen-components/footer";
import { SearchInput } from "@/components/search-input";

export default async function Home() {
  return (
    <>
      <Header />
      <div className="h-full w-full space-y-4">
        <section className="w-full px-5 py-6">
          <article className="flex w-full flex-col gap-1">
            <h2 className="text-lg">
              Olá, <span className="font-semibold">Mário</span>
            </h2>
            <span className="text-md">Sexta, 25 Outubro</span>
          </article>
        </section>

        <SearchInput />

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
            priority
          />
        </div>

        <SchedulingBarber />

        <RecommendedBarber />

        <PopularBarber />

        <Footer />
      </div>
    </>
  );
}

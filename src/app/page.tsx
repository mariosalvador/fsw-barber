import { Header } from "@/components/main-screen-components/header";
import Image from "next/image";

import { SchedulingBarber } from "@/components/main-screen-components/scheduling-barber";
import { RecommendedBarber } from "@/components/main-screen-components/recommended-barber";
import { PopularBarber } from "@/components/main-screen-components/popular-barber";
import { Footer } from "@/components/main-screen-components/footer";
import { SearchInput } from "@/components/search-input";
import { BarberServicesToSearch } from "@/components/main-screen-components/barber-services-to-search";

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
        <BarberServicesToSearch />

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

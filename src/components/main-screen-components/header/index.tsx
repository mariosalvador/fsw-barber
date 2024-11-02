import Image from "next/image";
import { Card, CardContent } from "../../ui/card";
import { SideBarSheet } from "@/components/sidebar-sheet";
import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <Card>
        <CardContent className="flex h-[80px] w-full items-center justify-between px-5 py-6">
          <Link href={"/"}>
            <Image
              src={"/Logo.svg"}
              alt="Logo Babershop FSW"
              width={122}
              height={30}
              className="h-[50px] w-[150px]"
              priority
            />
          </Link>
          <SideBarSheet />
        </CardContent>
      </Card>
    </header>
  );
};

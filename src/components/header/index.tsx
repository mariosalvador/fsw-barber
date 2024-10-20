import { Menu } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";

export const Header = () => {
  return (
    <header>
      <Card>
        <CardContent className="flex h-[80px] w-full items-center justify-between px-5 py-6">
          <Image
            src={"/Logo.svg"}
            alt="Logo Babershop FSW"
            width={122}
            height={30}
            className="h-[50px] w-[150px]"
          />

          <Menu className="size-[28px]" />
        </CardContent>
      </Card>
    </header>
  );
};

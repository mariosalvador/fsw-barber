import { Button } from "@/components/ui/button";
import { mdiMustache, mdiRazorDoubleEdge } from "@mdi/js";
import Icon from "@mdi/react";
import { Scissors } from "lucide-react";

export const BarberServicesToSearch = () => {
  return (
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
  );
};

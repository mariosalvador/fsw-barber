"use client";

import { CalendarDays, Globe, Home, LogOut, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
// import { Avatar, AvatarImage } from "../ui/avatar";

export const SideBarSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="absolute right-4 top-4 bg-secondary">
          <Menu className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="w-full text-start">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <div className="h-full w-full pt-3">
          <div className="mb-3 flex w-full items-center justify-between border-b pb-4">
            <p className="text-md font-semibold text-white antialiased">
              Olá. Faça o seu login
            </p>

            <Dialog>
              <DialogTrigger>
                <Button className="bg-primary">
                  <LogOut size={24} />
                </Button>
              </DialogTrigger>

              <DialogContent className="w-[90%] rounded-lg">
                <DialogHeader>
                  <DialogTitle>Fazer login na App</DialogTitle>

                  <DialogDescription>
                    Conecte-se usando sua conta do Google
                  </DialogDescription>
                </DialogHeader>

                <Button variant={"secondary"} className="">
                  <Globe />
                  Google
                </Button>
              </DialogContent>
            </Dialog>
          </div>

          {/* <div className="flex mb-3  border-b pb-4">
            <Avatar>
              <AvatarImage>OLA</AvatarImage>
            </Avatar>
            <section>
              <h2>Mario Paulo</h2>
              <span>mario@gmail.com</span>
            </section>
          </div> */}

          <div className="mb-3 w-full space-y-2 border-b pb-4">
            <Button className="flex w-full items-center justify-start gap-3 bg-transparent">
              <Home size={18} />
              Inicio
            </Button>

            <Button className="flex w-full items-center justify-start gap-3 bg-transparent">
              <CalendarDays size={18} />
              Angedamento
            </Button>
          </div>

          <div className="mb-3 w-full space-y-2 border-b pb-4">
            <Button className="flex w-full items-center justify-start gap-3 bg-transparent">
              <Home size={18} />
              Acabamento
            </Button>

            <Button className="flex w-full items-center justify-start gap-3 bg-transparent">
              <CalendarDays size={18} />
              Sobrancelhas
            </Button>

            <Button className="flex w-full items-center justify-start gap-3 bg-transparent">
              <CalendarDays size={18} />
              Massagem
            </Button>

            <Button className="flex w-full items-center justify-start gap-3 bg-transparent">
              <CalendarDays size={18} />
              Hidratação
            </Button>
          </div>

          <div className="mb-3 w-full space-y-2 pb-4">
            <Button className="flex w-full items-center justify-start gap-3 bg-transparent">
              <LogOut size={18} />
              Sair conta
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

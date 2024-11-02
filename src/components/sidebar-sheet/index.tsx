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
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const SideBarSheet = () => {
  const { data } = useSession();
  const handleLoginWithGoogleCheck = () => signIn("google");
  const handleLogOutWithGoogle = () => signOut();

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
          {data?.user ? (
            <div className="mb-3 flex gap-2 border-b pb-4">
              <Avatar className="size-14">
                <AvatarFallback className="size-10 bg-gray-300"></AvatarFallback>
                <AvatarImage src={data.user?.image ?? ""}></AvatarImage>
              </Avatar>
              <section>
                <h2 className="text-lg font-semibold">{data.user.name}</h2>
                <span className="text-sm text-gray-300">{data.user.email}</span>
              </section>
            </div>
          ) : (
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

                  <Button
                    variant={"secondary"}
                    onClick={handleLoginWithGoogleCheck}
                  >
                    <Globe />
                    Google
                  </Button>
                </DialogContent>
              </Dialog>
            </div>
          )}

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
            <Button
              onClick={handleLogOutWithGoogle}
              className="flex w-full items-center justify-start gap-3 bg-transparent"
            >
              <LogOut size={18} />
              Sair conta
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

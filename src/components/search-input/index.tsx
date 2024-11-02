"use client";

import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  search: z.string().min(3, {
    message: "",
  }),
});

export const SearchInput = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    router.push(`/barbershop?search=${values.search}`);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full gap-2 px-5"
      >
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  className="w-full"
                  placeholder="Buscar barbearias..."
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="h-[40px] w-[40px] rounded-md bg-primary p-[10px]"
        >
          <Search size={24} />
        </Button>
      </form>
    </Form>
  );
};

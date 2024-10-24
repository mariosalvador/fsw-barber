"use client";
import { Button } from "../ui/button";

interface IPropsCopyButton {
  value: string;
}

export const CopyButton = ({ value }: IPropsCopyButton) => {
  const handleClickCopyButton = (value: string) => {
    navigator.clipboard.writeText(value);
  };
  return (
    <Button
      variant={"outline"}
      className="h-[36px] w-[90px] font-semibold"
      onClick={() => handleClickCopyButton(value)}
    >
      Copiar
    </Button>
  );
};

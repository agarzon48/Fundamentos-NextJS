"use client";

import { useEffect } from "react";

import { Button } from "@nextui-org/react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col gap-8 m-auto">
      <div className="flex flex-col gap-8 m-auto max-w-xl items-center text-center">
        <h2 className="text-4xl">
          ¡Ha habido un problema recuperando los tickets!
        </h2>
        <Button color="primary" onClick={() => reset()}>
          Volver a intentar
        </Button>
      </div>
    </div>
  );
}

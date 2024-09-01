"use client";

export default function Error({
  error,
}: {
  error: Error & { digest?: string; statusCode?: number };
}) {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center p-8">
      <h2 className="text-xl font-bold">{error.message}</h2>
    </div>
  );
}

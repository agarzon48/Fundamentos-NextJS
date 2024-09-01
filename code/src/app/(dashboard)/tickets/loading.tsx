import { Spinner } from "@nextui-org/spinner";

export default function Loading() {
  return (
    <div className="h-screen w-screen flex relative items-center justify-center">
      <Spinner color="primary" />
    </div>
  );
}

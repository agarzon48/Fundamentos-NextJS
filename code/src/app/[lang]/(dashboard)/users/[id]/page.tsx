export default function UserPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  return <h1 className="text-2xl font-bold">User {id}</h1>;
}

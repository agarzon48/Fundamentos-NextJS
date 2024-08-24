export default function TicketPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  return <h1 className="text-2xl font-bold">Ticket {id}</h1>;
}

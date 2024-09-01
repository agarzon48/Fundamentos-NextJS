import { TicketsTable } from "./components/TicketsTable";
import { getTickets } from "../../services/tickets";

export default async function TicketsPage() {
  const tickets = await getTickets();
  return (
    <div>
      <h1 className="text-2xl font-bold">Tickets</h1>
      <TicketsTable tickets={tickets} />
    </div>
  );
}

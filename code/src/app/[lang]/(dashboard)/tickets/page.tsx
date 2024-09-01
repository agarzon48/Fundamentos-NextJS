import { getTickets } from "../../services/tickets";
import { TicketsTable } from "./components/TicketsTable";

export default async function TicketsPage() {
  const tickets = await getTickets();
  return (
    <div>
      <h1 className="text-2xl font-bold">Tickets</h1>
      <TicketsTable tickets={tickets} />
    </div>
  );
}

"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

export const TicketsTable: React.FC<TicketsTableProps> = ({ tickets }) => {
  if (!tickets?.length) {
    return <div>No tickets found</div>;
  }

  return (
    <Table
      aria-label="Tickets"
      classNames={{
        wrapper: "bg-gray-100",
        th: "bg-slate-900 text-slate-100",
        tbody: "bg-gray-100",
        tr: "hover:bg-primary-200 cursor-pointer",
        td: "text-primary-900",
      }}
    >
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>EMAIL</TableColumn>
        <TableColumn>BODY</TableColumn>
      </TableHeader>
      <TableBody>
        {tickets.map((ticket) => (
          <TableRow key={ticket.id}>
            <TableCell>{ticket.name}</TableCell>
            <TableCell>{ticket.email}</TableCell>
            <TableCell>{ticket.body}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

type TicketsTableProps = {
  tickets: Ticket[];
};

type Ticket = {
  id: number;
  name: string;
  email: string;
  body: string;
};

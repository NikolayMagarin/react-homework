import TicketCard from "./TicketCard";

export default function TicketContainer() {
  return (
    <div className="ticket-container">
      {new Array(4)
        .fill(0)
        .map((_, i) => i)
        .map((i) => (
          <TicketCard key={i} />
        ))}
    </div>
  );
}

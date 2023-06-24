import Image from "next/image";

export default function TicketCard() {
  return (
    <div className="ticket-card">
      <div>
        <Image
          className="film-poster-small"
          src="https://i.postimg.cc/FF8sXZgc/3.webp"
          alt="Film poster"
          width={92}
          height={128}
        ></Image>
      </div>
    </div>
  );
}

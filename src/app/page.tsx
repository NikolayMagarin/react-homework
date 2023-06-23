// import Image from "next/image";
import FiltersContainer from "./components/FiltersContainer";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import TicketContainer from "./components/TicketContainer";
import "./globals.css";

export default function Page() {
  return (
    <main>
      <div className="ticket-content">
        <FiltersContainer />
        <TicketContainer />
      </div>
      <Header />
      <Footer />
    </main>
  );
}

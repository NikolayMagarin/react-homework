"use client";
import TicketContainer from "../components/TicketContainer";
import { useGetMoviesQuery } from "../fetching/movieApi";
import { useSelector } from "react-redux";

import styles from "./page.module.css";
import { selectCart } from "../store/features/cart";

export default function Page() {
  const { data, isLoading } = useGetMoviesQuery(null);
  const cart = useSelector((state) => selectCart(state));

  const amount = (Object.values(cart) as number[]).reduce(
    (a: number, i: number) => i + a,
    0
  );

  return (
    !isLoading &&
    (amount > 0 ? (
      <div className={styles.container}>
        <TicketContainer
          films={data.filter((film: { id: string }) => cart[film.id] > 0)}
          basket={true}
        />
        <div>
          <div className={styles.totalTickets}>
            <div className={styles.totalText}>Итого билетов:</div>
            <span>{amount}</span>
          </div>
        </div>
      </div>
    ) : (
      <div className={styles.container}>
        <div className={styles.totalTickets}>
          <div className={styles.totalText}>Итого билетов:</div>
          <span>{amount}</span>
        </div>
      </div>
    ))
  );
}

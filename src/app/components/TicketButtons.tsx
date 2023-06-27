"use client";

import classNames from "classnames";
import { useCallback, useRef, useState } from "react";
import { CartSlice, selectCart } from "../store/features/cart";
import { useSelector, useDispatch } from "react-redux";
import styles from "./TicketButtons.module.css";
import { useDialog } from "../basket/components/Dialog";

export default function TicketButtons({
  basket,
  filmId,
}: {
  basket?: boolean;
  filmId: string;
}) {
  const cardState = useSelector((state) => selectCart(state)[filmId]) || 0;

  const dispatch = useDispatch();

  const [modal, showModal] = useDialog();
  const [result, setResult] = useState("");

  return (
    <div className={styles.container}>
      <div>
        <span
          className={classNames(styles.button, {
            [styles.disabled]: cardState == 0,
            [styles.active]: cardState > 0,
          })}
          onClick={() => {
            if (cardState > 0) {
              dispatch(
                CartSlice.actions.changeValue({
                  movieId: filmId,
                  d: -1,
                  preventZero: !!basket,
                })
              );
              showModal({
                title: "Удаление билета",
                acceptText: "Да",
                cancelText: "Нет",
                onAccept: () => setResult("1"),
                onCancel: () => setResult("0"),
                children: "Вы уверены, что хотите удалить билет?",
              });
            }
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                id="Vector"
                d="M28 16C28 16.2652 27.8946 16.5196 27.7071 16.7071C27.5196 16.8946 27.2652 17 27 17H5C4.73478 17 4.48043 16.8946 4.29289 16.7071C4.10536 16.5196 4 16.2652 4 16C4 15.7348 4.10536 15.4804 4.29289 15.2929C4.48043 15.1054 4.73478 15 5 15H27C27.2652 15 27.5196 15.1054 27.7071 15.2929C27.8946 15.4804 28 15.7348 28 16Z"
                fill="#fff"
              />
            </g>
          </svg>
        </span>
        <span className={styles.ticketCount}>{cardState}</span>
        <span
          className={classNames(styles.button, {
            [styles.disabled]: cardState == 30,
            [styles.active]: cardState < 30,
          })}
          onClick={() => {
            cardState < 30 &&
              dispatch(
                CartSlice.actions.changeValue({ movieId: filmId, d: +1 })
              );
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                id="Vector"
                d="M28 16C28 16.2652 27.8946 16.5196 27.7071 16.7071C27.5196 16.8946 27.2652 17 27 17H17V27C17 27.2652 16.8946 27.5196 16.7071 27.7071C16.5196 27.8946 16.2652 28 16 28C15.7348 28 15.4804 27.8946 15.2929 27.7071C15.1054 27.5196 15 27.2652 15 27V17H5C4.73478 17 4.48043 16.8946 4.29289 16.7071C4.10536 16.5196 4 16.2652 4 16C4 15.7348 4.10536 15.4804 4.29289 15.2929C4.48043 15.1054 4.73478 15 5 15H15V5C15 4.73478 15.1054 4.48043 15.2929 4.29289C15.4804 4.10536 15.7348 4 16 4C16.2652 4 16.5196 4.10536 16.7071 4.29289C16.8946 4.48043 17 4.73478 17 5V15H27C27.2652 15 27.5196 15.1054 27.7071 15.2929C27.8946 15.4804 28 15.7348 28 16Z"
                fill="#fff"
              />
            </g>
          </svg>
        </span>
      </div>

      {!!basket && (
        <div>
          <span
            className={styles.delete}
            onClick={() => {
              showModal({
                title: "Удаление билета",
                acceptText: "Да",
                cancelText: "Нет",
                onAccept: () => setResult("1"),
                onCancel: () => setResult("0"),
                children: "Вы уверены, что хотите удалить билет?",
              });
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Icons / close">
                <path
                  id="Vector"
                  d="M25.7074 24.2924C25.8004 24.3854 25.8741 24.4957 25.9243 24.6171C25.9746 24.7384 26.0005 24.8686 26.0005 24.9999C26.0005 25.1313 25.9746 25.2614 25.9243 25.3828C25.8741 25.5042 25.8004 25.6145 25.7074 25.7074C25.6145 25.8004 25.5042 25.8741 25.3828 25.9243C25.2614 25.9746 25.1313 26.0005 24.9999 26.0005C24.8686 26.0005 24.7384 25.9746 24.6171 25.9243C24.4957 25.8741 24.3854 25.8004 24.2924 25.7074L15.9999 17.4137L7.70745 25.7074C7.5198 25.8951 7.26531 26.0005 6.99995 26.0005C6.73458 26.0005 6.48009 25.8951 6.29245 25.7074C6.1048 25.5198 5.99939 25.2653 5.99939 24.9999C5.99939 24.7346 6.10481 24.4801 6.29245 24.2924L14.5862 15.9999L6.29245 7.70745C6.1048 7.5198 5.99939 7.26531 5.99939 6.99995C5.99939 6.73458 6.1048 6.48009 6.29245 6.29245C6.48009 6.1048 6.73458 5.99939 6.99995 5.99939C7.26531 5.99939 7.5198 6.1048 7.70745 6.29245L15.9999 14.5862L24.2924 6.29245C24.4801 6.10481 24.7346 5.99939 24.9999 5.99939C25.2653 5.99939 25.5198 6.1048 25.7074 6.29245C25.8951 6.48009 26.0005 6.73458 26.0005 6.99995C26.0005 7.26531 25.8951 7.5198 25.7074 7.70745L17.4137 15.9999L25.7074 24.2924Z"
                  fill="#333"
                />
              </g>
            </svg>
          </span>
        </div>
      )}
    </div>
  );
}

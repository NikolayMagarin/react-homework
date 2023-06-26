"use client";

import Arrow from "@/app/components/Arrow";
import { useState } from "react";
import styles from "./QuestionCard.module.css";

export default function QuestionCard({
  questionText,
  answerText,
}: {
  questionText: string;
  answerText: string;
}) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div
      className={styles.questionCard}
      onClick={() => {
        setIsOpened(!isOpened);
      }}
    >
      <div className={styles.questionContainer}>
        <div className={styles.title}>{questionText}</div>
        {isOpened && <div className={styles.answer}>{answerText}</div>}
      </div>
      <Arrow
        direction={isOpened ? "up" : "down"}
        color="#333"
        size="32"
      ></Arrow>
    </div>
  );
}

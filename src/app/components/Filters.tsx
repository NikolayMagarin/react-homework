"use client";

import { useState } from "react";
import Dropdown from "./Dropdown";
import styles from "./Filters.module.css";

export default function Filters() {
  const [genre, setGenre] = useState<string>();
  const [cinema, setCinema] = useState<string>();

  return (
    <div className={styles.filters}>
      <div className={styles.filtersTitle}>Фильтр поиска</div>
      <div className={styles.filterOptionContainer}>
        <div className={styles.filterName}>Название</div>
        <input
          type="text"
          className={styles.textInput}
          placeholder="Введите название"
        ></input>
      </div>

      <div className={styles.filterOptionContainer}>
        <div className={styles.filterName}>Жанр</div>
        <Dropdown
          placeholder="Выберите жанр"
          value={genre}
          setValue={setGenre}
          options={[
            // { value: "_not_selected_ ", content: "Не выбрано" },
            { value: "fantasy", content: "Фэнтези" },
            { value: "horror", content: "Хоррор" },
            { value: "action", content: "Боевик" },
            { value: "comedy", content: "Комедия" },
          ]}
        />
      </div>

      <div className={styles.filterOptionContainer}>
        <div className={styles.filterName}>Кинотеатр</div>
        <Dropdown
          placeholder="Выберите кинотеатр"
          value={cinema}
          setValue={setCinema}
          options={[
            { value: "1", content: "option 1" },
            { value: "2", content: "option 2" },
            { value: "3", content: "option 3" },
          ]}
        />
      </div>
    </div>
  );
}

"use client";

import { ChangeEvent, useCallback } from "react";
import { setFilter } from "../store/features/filters";

import Dropdown from "./Dropdown";
import styles from "./Filters.module.css";

export default function Filters() {
  let inputChangeTimeout: NodeJS.Timeout;

  const inputOnChange = useCallback((event: ChangeEvent) => {
    clearTimeout(inputChangeTimeout);

    setTimeout(() => {
      setFilter("name", (event.target as HTMLInputElement).value);
    }, 1000);
  }, []);

  return (
    <div className={styles.filters}>
      <div className={styles.filtersTitle}>Фильтр поиска</div>
      <div className={styles.filterOptionContainer}>
        <div className={styles.filterName}>Название</div>
        <input
          type="text"
          className={styles.textInput}
          placeholder="Введите название"
          onChange={inputOnChange}
        ></input>
      </div>

      <div className={styles.filterOptionContainer}>
        <div className={styles.filterName}>Жанр</div>
        <Dropdown
          placeholder="Выберите жанр"
          value=""
          setValue={(value) => {
            setFilter("genre", value);
          }}
          options={[
            { value: "", content: "Не выбрано" },
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
          value=""
          setValue={(value) => {
            setFilter("cinema", value);
          }}
          options={[
            { value: "", content: "Не выбрано" },
            { value: "CTfrB5PGEJHBwxCNlU4uo", content: "Синема сад" },
            { value: "2a2976KdjBek0e2ZR_07V", content: "4 с половиной звезды" },
            { value: "4gJr8UOYvT7UuprciZ4iL", content: "Дружба" },
          ]}
        />
      </div>
    </div>
  );
}

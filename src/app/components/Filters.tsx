"use client";

import { useState } from "react";
import Dropdown from "./Dropdown";
import styles from "./Filters.module.css";

export default function Filters() {
  const [value, setValue] = useState<string>();

  return (
    <div className={styles.filters}>
      <Dropdown
        placeholder="test test"
        value={value}
        setValue={setValue}
        options={[
          { value: "1", content: "option 1" },
          { value: "2", content: "option 2" },
          { value: "3", content: "option 3" },
        ]}
      />
    </div>
  );
}

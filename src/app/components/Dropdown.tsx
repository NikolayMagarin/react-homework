import { ReactNode, useEffect, useRef } from "react";
import { useCallback, useState } from "react";
import { createPortal } from "react-dom";
import cn from "classnames";

import styles from "./Dropdown.module.css";
import Arrow from "./Arrow";

function Popup({
  x,
  y,
  width,
  options = [],
  value,
  setValue,
  onClose,
}: {
  x: number;
  y: number;
  width: number;
  options: Array<{ value: string; content: ReactNode }>;
  value?: string;
  setValue: (value: string) => void;
  onClose: VoidFunction;
}) {
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const cb = (e: MouseEvent) => {
      if (!ref?.current?.contains(e.target as Element)) {
        if (
          (e?.target as Element).closest(
            "[data-click-outside-ignore='true']"
          ) === null
        ) {
          onClose();
        }
      }
    };

    document.body.addEventListener("click", cb);
    document.body.addEventListener("scroll", onClose);
    return () => {
      document.body.removeEventListener("click", cb);
    };
  }, [onClose]);

  return (
    <ul
      ref={ref}
      className={styles.list}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: width,
        transform: `translate3d(${x}px, ${y}px, 0)`,
      }}
    >
      {options.map((option) => (
        <li
          className={cn(styles.item, {
            [styles.selected]: value === option.value,
          })}
          key={option.value}
          onClick={() => {
            setValue(option.value);
            onClose();
          }}
        >
          {option.content}
        </li>
      ))}
    </ul>
  );
}

export default function Dropdown({
  placeholder,
  options,
  value,
  setValue,
}: {
  placeholder: string;
  options: Array<{ value: string; content: ReactNode }>;
  value?: string;
  setValue: (value: string) => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  const [active, setActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0, width: 0 });

  const selectedOption = options.find((option) => option.value === value);

  const updatePosition = useCallback(() => {
    if (!ref.current) return;
    const box = ref.current.getBoundingClientRect();
    const x = box.x;
    const y = box.y + box.height;
    const width = box.width;

    setPosition((prevPosition) =>
      prevPosition.x === x &&
      prevPosition.y === y &&
      prevPosition.width === width
        ? prevPosition
        : { x, y, width }
    );
  }, []);

  const onClose = () => {
    setActive(false);
  };

  return (
    <>
      <button
        className={cn(styles.button, { [styles.active]: active })}
        onClick={() => {
          updatePosition();
          setActive((prevValue) => !prevValue);
        }}
        aria-expanded={active}
        aria-haspopup="listbox"
        ref={ref}
        data-click-outside-ignore={active}
      >
        <span
          className={cn(styles.text, { [styles.placeholder]: !selectedOption })}
        >
          {selectedOption ? selectedOption.content : placeholder}
        </span>
        <Arrow direction={active ? "up" : "down"} />
      </button>
      {active &&
        createPortal(
          <Popup
            x={position.x}
            y={position.y}
            width={position.width}
            value={value}
            setValue={setValue}
            options={options}
            onClose={onClose}
          />,
          document.body
        )}
    </>
  );
}

import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

import styles from "./Dialog.module.css";

type DialogProps = {
  title: string;
  children: ReactNode;
  acceptText?: string;
  cancelText?: string;
  onAccept: VoidFunction;
  onCancel: VoidFunction;
};

function Dialog({
  title,
  children,
  acceptText,
  cancelText,
  onAccept,
  onCancel,
}: DialogProps) {
  const closeBtn = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDivElement>(null);
  const firstElement = useRef<HTMLElement>(
    null
  ) as React.MutableRefObject<HTMLElement>;
  const lastElement = useRef<HTMLElement>(
    null
  ) as React.MutableRefObject<HTMLElement>;

  // naive a11i focus-trap implementation
  useEffect(() => {
    closeBtn.current?.focus();

    const focusable =
      dialog.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) || [];

    firstElement.current = focusable[0] as HTMLElement;
    lastElement.current = focusable[focusable.length - 1] as HTMLElement;
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCancel();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => document.removeEventListener("keypress", handleEsc);
  }, [onCancel]);

  return createPortal(
    <div
      className={styles.backdrop}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onCancel();
        }
      }}
    >
      <div
        className={styles.focusTrap}
        tabIndex={0}
        onFocus={() => lastElement.current?.focus()}
      />
      <div
        role="dialog"
        aria-modal="true"
        className={styles.dialog}
        ref={dialog}
      >
        <header className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button
            className={styles.closeBtn}
            ref={closeBtn}
            aria-label="Закрыть модальное окно"
            onClick={() => onCancel()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
            >
              <path
                fill="#333"
                d="M12.854 12.146a.5.5 0 1 1-.708.708L8 8.707l-4.146 4.147a.5.5 0 0 1-.708-.708L7.293 8 3.146 3.854a.5.5 0 1 1 .708-.708L8 7.293l4.146-4.147a.5.5 0 0 1 .708.708L8.707 8l4.147 4.146Z"
              />
            </svg>
          </button>
        </header>
        <main className={styles.body}>{children}</main>
        {(acceptText || cancelText) && (
          <footer className={styles.footer}>
            {acceptText && (
              <Button onClick={() => onAccept()}>{acceptText}</Button>
            )}
            {cancelText && (
              <Button variant="outline" onClick={() => onCancel()}>
                {cancelText}
              </Button>
            )}
          </footer>
        )}
      </div>
      <div
        className={styles.focusTrap}
        tabIndex={0}
        onFocus={() => firstElement.current?.focus()}
      />
    </div>,
    document.body
  );
}

export function useDialog() {
  const [modal, setModal] = useState<ReactNode>(null);

  const showDialog = useCallback(
    ({ onAccept, onCancel, ...props }: DialogProps) => {
      const closeModal = () => setModal(null);
      setModal(
        <Dialog
          {...props}
          onAccept={() => {
            closeModal();
            onAccept();
          }}
          onCancel={() => {
            closeModal();
            onCancel();
          }}
        />
      );
    },
    []
  );

  return [modal, showDialog];
}

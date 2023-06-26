"use client";

import { ReactElement } from "react";
import { Provider } from "react-redux";

import { store } from "./store";

export default function StoreProvider({
  children,
}: {
  children: ReactElement;
}) {
  return <Provider store={store}>{children}</Provider>;
}

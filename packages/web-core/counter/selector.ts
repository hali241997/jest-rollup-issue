import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "../store";

export const useCounterState = (): RootState["counter"] =>
  useSelector((state: RootState) => state.counter, shallowEqual);

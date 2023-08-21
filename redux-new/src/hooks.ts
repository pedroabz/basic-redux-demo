import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "./store";

// custom useSelector that has the state type
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
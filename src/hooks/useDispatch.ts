import type { Dispatch } from "../store";
import { useDispatch } from "react-redux";

export default function useTypedDispatch() {
  return useDispatch<Dispatch>();
}

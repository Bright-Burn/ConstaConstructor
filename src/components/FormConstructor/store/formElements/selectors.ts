import { RootState } from "../setupStore";
import { IFormConstructor } from "./types";

export const getFormConstructor = (state: RootState): IFormConstructor => state.formConstructor
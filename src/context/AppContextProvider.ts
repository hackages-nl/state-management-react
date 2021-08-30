// import { CategoryProvider } from "./CategoryContext";
// import { MoviesProvider } from "./MoviesContext";
import {combineComponents} from "./combineComponent";

const providers: any = []; // [CategoryProvider, MoviesProvider];
export const AppContextProvider = combineComponents(...providers);

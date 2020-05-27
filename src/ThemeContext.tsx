import { createContext } from "react";

const ThemeContext = createContext<[string, (theme: string) => void]>([
  "blue",
  (f) => f,
]);

export default ThemeContext;

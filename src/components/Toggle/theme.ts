import { darkColors, lightColors } from "../../theme/colors";

export type ToggleTheme = {
  handleBackground: string;
};

export const light: ToggleTheme = {
  handleBackground: lightColors.primaryDark,
};

export const dark: ToggleTheme = {
  handleBackground: darkColors.primaryDark,
};

import { buildLegacyTheme } from "sanity";

const props = {
  "--my-white": "#fff",
  "--my-blue": "#0A2653",
  "--my-red": "#FD3927",
  "--my-yellow": "#f4b400",
  "--my-green": "#024223",
  "--my-background": "#0c0a09",
  "--my-foreground": "#f2f2f2",
};

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  "--black": props["--my-background"],
  "--white": props["--my-foreground"],

  "--gray": "#8B150A",
  "--gray-base": "#FFB3AC",

  "--component-bg": props["--my-background"],
  "--component-text-color": props["--my-foreground"],

  /* Brand */
  "--brand-primary": props["--my-red"],

  // Default button
  "--default-button-color": "#8B150A",
  "--default-button-primary-color": props["--my-red"],
  "--default-button-success-color": props["--my-green"],
  "--default-button-warning-color": props["--my-yellow"],
  "--default-button-danger-color": props["--my-red"],

  /* State */
  "--state-info-color": props["--my-blue"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],

  /* Navbar */
  "--main-navigation-color": props["--my-background"],
  "--main-navigation-color--inverted": props["--my-white"],

  "--focus-color": props["--my-foreground"],
});

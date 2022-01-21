import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "200": "#ECECEC",
      "500": "#AAAAAA",
    },
    black: "#171717",
    red: {
      "500": "#A32214",
    },
  },
  styles: {
    global: {
      body: {
        bg: "#171717",
      },
    },
  },
});

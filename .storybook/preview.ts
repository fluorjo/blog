import type { Preview } from "@storybook/react";
import "../app/globals.css";
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

// export const decorators = [
// (Story) => (
// <ThemeProvider theme={defaultTheme}>
// <GlobalStyle/>
// <Story/>
// </ThemeProvider>
// )
// ]

export default preview;

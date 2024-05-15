import type { Preview } from "@storybook/react";
import "../styles/globals.css";
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
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

import { defineMessage, formatMessage } from "react-intl";

const helloWorld = defineMessage({
  defaultMessage: "Hello, world!",
  description: "A simple greeting",
});

const helloWorldWithConcatenation = defineMessage({
  defaultMessage: "Hello, " + "world!",
  description: "A simple greeting with concatenation",
});

console.log(
  formatMessage(helloWorld),
  formatMessage(helloWorldWithConcatenation)
);

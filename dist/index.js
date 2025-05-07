"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _reactintl = require("react-intl");
var helloWorld = (0, _reactintl.defineMessage)({
    id: "AlnfGI",
    defaultMessage: "Hello, world!"
});
var helloWorldWithConcatenation = (0, _reactintl.defineMessage)({
    defaultMessage: ""
});
console.log((0, _reactintl.formatMessage)(helloWorld), (0, _reactintl.formatMessage)(helloWorldWithConcatenation));

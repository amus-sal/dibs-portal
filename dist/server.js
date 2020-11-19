"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const port = parseInt(process.env.PORT || '4200');
const server = new app_1.default().Start(port)
    .then(port => console.log(`Server running on port ${port}`))
    .catch(error => {
    console.log(error);
    process.exit(1);
});
exports.default = server;
process.on("SIGINT", () => {
    process.exit(0);
});
process.on("SIGTERM", () => {
    process.exit(0);
});
//# sourceMappingURL=server.js.map
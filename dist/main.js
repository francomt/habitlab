"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(`${__dirname}../../public`)));
app.use("*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../../", "public/index.html"));
});
app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || "Internal Server Error!");
});
app.listen(3000, () => {
    console.log("app listening on 3000");
});
//# sourceMappingURL=main.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const product_1 = require("./routes/product");
const address_1 = require("./routes/address");
const basket_1 = require("./routes/basket");
const app = (0, express_1.default)();
const cors = require('cors');
app.use(cors());
const port = process.env.PORT || 3000;
const parserMiddleware = (0, body_parser_1.default)({});
app.use(parserMiddleware);
app.use('/products', product_1.productsRouter);
app.use('/addresses', address_1.addressesRouter);
app.use('/basket', basket_1.basketRouter);
app.listen(port);
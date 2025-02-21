"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const api_controller_1 = require("../controllers/api.controller");
const router = (0, express_1.Router)();
const apiController = new api_controller_1.ApiController();
router.get('/hello', apiController.sayHello);
exports.default = router;

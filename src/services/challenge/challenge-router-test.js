"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var globals_1 = require("@jest/globals");
var supertest_1 = require("supertest");
var express_1 = require("express");
var challengeRouter_1 = require("./challengeRouter"); // Adjust this import based on your file structure
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(challengeRouter_1.challegeRouter);
var TESTER_USER = {
    User: "john_doe",
    Data: { Role: "admin", Access_level: 5 }
};
(0, globals_1.describe)("Challenge Router", function () {
    (0, globals_1.describe)("POST /encode", function () {
        (0, globals_1.it)("works for a valid request", function () { return __awaiter(void 0, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, supertest_1.default)(app)
                            .post("/encode")
                            .send(TESTER_USER)
                            .expect(200)];
                    case 1:
                        response = _a.sent();
                        (0, globals_1.expect)(response.body).toHaveProperty("Token");
                        (0, globals_1.expect)(response.body).toHaveProperty("Context");
                        (0, globals_1.expect)(typeof response.body.Token).toBe("string");
                        (0, globals_1.expect)(response.body.Context).toHaveProperty("Additional_info");
                        return [2 /*return*/];
                }
            });
        }); });
        (0, globals_1.it)("gives a bad request error for invalid input", function () { return __awaiter(void 0, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, supertest_1.default)(app)
                            .post("/encode")
                            .send({ User: "john_doe" }) // Missing Data
                            .expect(400)];
                    case 1:
                        response = _a.sent();
                        (0, globals_1.expect)(response.body).toHaveProperty("error", "Invalid request body");
                        return [2 /*return*/];
                }
            });
        }); });
    });
    (0, globals_1.describe)("POST /decode", function () {
        (0, globals_1.it)("works for a valid token", function () { return __awaiter(void 0, void 0, void 0, function () {
            var encodeResponse, token, decodeResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, supertest_1.default)(app)
                            .post("/encode")
                            .send(TESTER_USER)
                            .expect(200)];
                    case 1:
                        encodeResponse = _a.sent();
                        token = encodeResponse.body.Token;
                        return [4 /*yield*/, (0, supertest_1.default)(app)
                                .post("/decode")
                                .send({ Token: token })
                                .expect(200)];
                    case 2:
                        decodeResponse = _a.sent();
                        (0, globals_1.expect)(decodeResponse.body).toMatchObject(TESTER_USER);
                        return [2 /*return*/];
                }
            });
        }); });
        (0, globals_1.it)("gives a bad request error for missing token", function () { return __awaiter(void 0, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, supertest_1.default)(app)
                            .post("/decode")
                            .send({})
                            .expect(400)];
                    case 1:
                        response = _a.sent();
                        (0, globals_1.expect)(response.body).toHaveProperty("error", "Invalid request body");
                        return [2 /*return*/];
                }
            });
        }); });
        (0, globals_1.it)("gives a bad request error for invalid token", function () { return __awaiter(void 0, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, supertest_1.default)(app)
                            .post("/decode")
                            .send({ Token: "invalidtoken123" })
                            .expect(400)];
                    case 1:
                        response = _a.sent();
                        (0, globals_1.expect)(response.body).toHaveProperty("error", "Invalid token");
                        return [2 /*return*/];
                }
            });
        }); });
    });
});

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
var testTools_1 = require("../../testTools");
var status_code_enum_1 = require("status-code-enum");
var config_1 = require("../../config");
var models_1 = require("../../database/models");
var auth_models_1 = require("../auth/auth-models");
var auth_1 = require("../auth/mocks/auth");
// import { afterEach } from "node:test";
var TESTER_USER = {
    userId: testTools_1.TESTER.id,
    name: testTools_1.TESTER.name,
    email: testTools_1.TESTER.email,
};
var OTHER_USER = {
    userId: "other-user",
    email: "other-user@hackillinois.org",
    name: "Other User",
};
var OTHER_USER_AUTH = {
    userId: OTHER_USER.userId,
    provider: "github",
    roles: testTools_1.AUTH_ROLE_TO_ROLES[auth_models_1.Role.ATTENDEE],
};
var TESTER_EVENT_FOLLOWING = {
    eventId: "other-event",
    followers: ["user5", "user8"],
};
var TESTER_ATTENDEE_FOLLOWING = {
    userId: testTools_1.TESTER.id,
    following: ["event3", "event9"],
};
var TESTER_EVENT_ATTENDANCE = {
    eventId: "some-event",
    attendees: [],
};
var TESTER_PROFILE = {
    userId: TESTER_USER.userId,
    displayName: "TestDisplayName",
    avatarUrl: "TestURL",
    discordTag: "TestTag",
    points: 0,
    coins: 0,
    foodWave: 0,
};
var TESTER_EVENT = {
    eventId: "some-event",
    isStaff: false,
    name: "Example Name",
    description: "Example Description",
    startTime: 1707069600,
    endTime: 1707069900,
    eventType: "WORKSHOP",
    locations: [
        {
            description: "Siebel ",
            tags: [],
            latitude: 40.113812,
            longitude: -88.224937,
        },
    ],
    isAsync: false,
    mapImageUrl: "",
    sponsor: "",
    points: 100,
    isPrivate: false,
    displayOnStaffCheckIn: false,
    isPro: false,
};
// Before each test, initialize database with tester & other users
(0, globals_1.beforeEach)(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, models_1.default.UserInfo.create(TESTER_USER)];
            case 1:
                _a.sent();
                return [4 /*yield*/, models_1.default.UserInfo.create(OTHER_USER)];
            case 2:
                _a.sent();
                return [4 /*yield*/, models_1.default.AuthInfo.create(OTHER_USER_AUTH)];
            case 3:
                _a.sent();
                return [4 /*yield*/, models_1.default.EventFollowers.create(TESTER_EVENT_FOLLOWING)];
            case 4:
                _a.sent();
                return [4 /*yield*/, models_1.default.AttendeeFollowing.create(TESTER_ATTENDEE_FOLLOWING)];
            case 5:
                _a.sent();
                return [4 /*yield*/, models_1.default.EventAttendance.create(TESTER_EVENT_ATTENDANCE)];
            case 6:
                _a.sent();
                return [4 /*yield*/, models_1.default.Event.create(TESTER_EVENT)];
            case 7:
                _a.sent();
                return [4 /*yield*/, models_1.default.AttendeeProfile.create(TESTER_PROFILE)];
            case 8:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
// TODO: Revert v2-qr to qr
(0, globals_1.describe)("GET /user/v2-qr/", function () {
    (0, globals_1.it)("works for a attendee", function () { return __awaiter(void 0, void 0, void 0, function () {
        var mockedGenerateJwtToken, response, jwtReturned;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mockedGenerateJwtToken = (0, auth_1.mockGenerateJwtTokenWithWrapper)();
                    return [4 /*yield*/, (0, testTools_1.getAsAttendee)("/user/v2-qr/").expect(status_code_enum_1.StatusCode.SuccessOK)];
                case 1:
                    response = _a.sent();
                    jwtReturned = mockedGenerateJwtToken.mock.results[mockedGenerateJwtToken.mock.results.length - 1].value;
                    (0, globals_1.expect)(JSON.parse(response.text)).toMatchObject({
                        userId: TESTER_USER.userId,
                        qrInfo: "hackillinois://user?userToken=".concat(jwtReturned),
                    });
                    (0, globals_1.expect)(mockedGenerateJwtToken).toBeCalledWith(globals_1.expect.objectContaining({
                        id: TESTER_USER.userId,
                    }), false, config_1.default.QR_EXPIRY_TIME);
                    return [2 /*return*/];
            }
        });
    }); });
});
(0, globals_1.describe)("GET /user/qr/:USERID/", function () {
    (0, globals_1.it)("gives a forbidden error for a non-staff user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, testTools_1.getAsAttendee)("/user/qr/".concat(OTHER_USER.userId, "/")).expect(status_code_enum_1.StatusCode.ClientErrorForbidden)];
                case 1:
                    response = _a.sent();
                    (0, globals_1.expect)(JSON.parse(response.text)).toHaveProperty("error", "Forbidden");
                    return [2 /*return*/];
            }
        });
    }); });
    (0, globals_1.it)("works for a non-staff user requesting their qr code", function () { return __awaiter(void 0, void 0, void 0, function () {
        var mockedGenerateJwtToken, response, jwtReturned;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mockedGenerateJwtToken = (0, auth_1.mockGenerateJwtTokenWithWrapper)();
                    return [4 /*yield*/, (0, testTools_1.getAsAttendee)("/user/qr/".concat(TESTER_USER.userId, "/")).expect(status_code_enum_1.StatusCode.SuccessOK)];
                case 1:
                    response = _a.sent();
                    jwtReturned = mockedGenerateJwtToken.mock.results[mockedGenerateJwtToken.mock.results.length - 1].value;
                    (0, globals_1.expect)(JSON.parse(response.text)).toMatchObject({
                        userId: TESTER_USER.userId,
                        qrInfo: "hackillinois://user?userToken=".concat(jwtReturned),
                    });
                    (0, globals_1.expect)(mockedGenerateJwtToken).toBeCalledWith(globals_1.expect.objectContaining({
                        id: TESTER_USER.userId,
                    }), false, config_1.default.QR_EXPIRY_TIME);
                    return [2 /*return*/];
            }
        });
    }); });
    (0, globals_1.it)("works for a staff user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var mockedGenerateJwtToken, response, jwtReturned;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mockedGenerateJwtToken = (0, auth_1.mockGenerateJwtTokenWithWrapper)();
                    return [4 /*yield*/, (0, testTools_1.getAsStaff)("/user/qr/".concat(OTHER_USER.userId, "/")).expect(status_code_enum_1.StatusCode.SuccessOK)];
                case 1:
                    response = _a.sent();
                    jwtReturned = mockedGenerateJwtToken.mock.results[mockedGenerateJwtToken.mock.results.length - 1].value;
                    (0, globals_1.expect)(JSON.parse(response.text)).toMatchObject({
                        userId: OTHER_USER.userId,
                        qrInfo: "hackillinois://user?userToken=".concat(jwtReturned),
                    });
                    (0, globals_1.expect)(mockedGenerateJwtToken).toBeCalledWith(globals_1.expect.objectContaining({
                        id: OTHER_USER.userId,
                    }), false, config_1.default.QR_EXPIRY_TIME);
                    return [2 /*return*/];
            }
        });
    }); });
});
(0, globals_1.describe)("GET /user/", function () {
    (0, globals_1.it)("gives an unauthorized error for an unauthenticated user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, testTools_1.get)("/user/").expect(status_code_enum_1.StatusCode.ClientErrorUnauthorized)];
                case 1:
                    response = _a.sent();
                    (0, globals_1.expect)(JSON.parse(response.text)).toHaveProperty("error", "NoToken");
                    return [2 /*return*/];
            }
        });
    }); });
    (0, globals_1.it)("gives an not found error for an non-existent user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, models_1.default.UserInfo.deleteOne({
                        userId: TESTER_USER.userId,
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, (0, testTools_1.getAsAttendee)("/user/").expect(status_code_enum_1.StatusCode.ClientErrorNotFound)];
                case 2:
                    response = _a.sent();
                    (0, globals_1.expect)(JSON.parse(response.text)).toHaveProperty("error", "UserNotFound");
                    return [2 /*return*/];
            }
        });
    }); });
    (0, globals_1.it)("works for an attendee user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, testTools_1.getAsAttendee)("/user/").expect(status_code_enum_1.StatusCode.SuccessOK)];
                case 1:
                    response = _a.sent();
                    (0, globals_1.expect)(JSON.parse(response.text)).toMatchObject(TESTER_USER);
                    return [2 /*return*/];
            }
        });
    }); });
    (0, globals_1.it)("works for an staff user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, testTools_1.getAsStaff)("/user/").expect(status_code_enum_1.StatusCode.SuccessOK)];
                case 1:
                    response = _a.sent();
                    (0, globals_1.expect)(JSON.parse(response.text)).toMatchObject(TESTER_USER);
                    return [2 /*return*/];
            }
        });
    }); });
    (0, globals_1.it)("works for an admin user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, testTools_1.getAsAdmin)("/user/").expect(status_code_enum_1.StatusCode.SuccessOK)];
                case 1:
                    response = _a.sent();
                    (0, globals_1.expect)(JSON.parse(response.text)).toMatchObject(TESTER_USER);
                    return [2 /*return*/];
            }
        });
    }); });
});
(0, globals_1.describe)("GET /user/:USERID/", function () {
    (0, globals_1.it)("gives an forbidden error for a non-staff user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, testTools_1.getAsAttendee)("/user/".concat(OTHER_USER.userId, "/")).expect(status_code_enum_1.StatusCode.ClientErrorForbidden)];
                case 1:
                    response = _a.sent();
                    (0, globals_1.expect)(JSON.parse(response.text)).toHaveProperty("error", "Forbidden");
                    return [2 /*return*/];
            }
        });
    }); });
    (0, globals_1.it)("gives an not found error for a non-existent user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, models_1.default.UserInfo.deleteOne({
                        userId: OTHER_USER.userId,
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, (0, testTools_1.getAsStaff)("/user/".concat(OTHER_USER.userId, "/")).expect(status_code_enum_1.StatusCode.ClientErrorNotFound)];
                case 2:
                    response = _a.sent();
                    (0, globals_1.expect)(JSON.parse(response.text)).toHaveProperty("error", "UserNotFound");
                    return [2 /*return*/];
            }
        });
    }); });
    (0, globals_1.it)("works for a non-staff user requesting themselves", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, testTools_1.getAsAttendee)("/user/".concat(TESTER_USER.userId, "/")).expect(status_code_enum_1.StatusCode.SuccessOK)];
                case 1:
                    response = _a.sent();
                    (0, globals_1.expect)(JSON.parse(response.text)).toMatchObject(TESTER_USER);
                    return [2 /*return*/];
            }
        });
    }); });
    (0, globals_1.it)("works for a staff user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, testTools_1.getAsStaff)("/user/".concat(OTHER_USER.userId, "/")).expect(status_code_enum_1.StatusCode.SuccessOK)];
                case 1:
                    response = _a.sent();
                    (0, globals_1.expect)(JSON.parse(response.text)).toMatchObject(OTHER_USER);
                    return [2 /*return*/];
            }
        });
    }); });
});
(0, globals_1.describe)("GET /user/following/", function () {
    (0, globals_1.it)("works for a standard attendee", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, testTools_1.getAsAttendee)("/user/following/")
                        .send({ userId: TESTER_ATTENDEE_FOLLOWING.userId })
                        .expect(status_code_enum_1.StatusCode.SuccessOK)];
                case 1:
                    response = _a.sent();
                    (0, globals_1.expect)(JSON.parse(response.text)).toMatchObject({
                        userId: TESTER_ATTENDEE_FOLLOWING.userId,
                        events: TESTER_ATTENDEE_FOLLOWING.following,
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    // it("gives an not found error for a non-existent user", async () => {
    //     await Models.AttendeeFollowing.deleteOne({
    //         userId: TESTER_ATTENDEE_FOLLOWING.userId,
    //     });
    //     await Models.UserInfo.deleteOne({
    //         userId: TESTER_ATTENDEE_FOLLOWING.userId,
    //     });
    //     const response = await getAsStaff(`/user/following/`)
    //         .send({ userId: TESTER_ATTENDEE_FOLLOWING.userId })
    //         .expect(StatusCode.ClientErrorNotFound);
    //     expect(JSON.parse(response.text)).toHaveProperty("error", "UserNotFound");
    // });
    (0, globals_1.it)("works for a staff user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, testTools_1.getAsStaff)("/user/following/")
                        .send({ userId: TESTER_ATTENDEE_FOLLOWING.userId })
                        .expect(status_code_enum_1.StatusCode.SuccessOK)];
                case 1:
                    response = _a.sent();
                    (0, globals_1.expect)(JSON.parse(response.text)).toMatchObject({
                        userId: TESTER_ATTENDEE_FOLLOWING.userId,
                        events: TESTER_ATTENDEE_FOLLOWING.following,
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    // it("gives an forbidden for a indirection operation without staff perms", async () => {
    //     const response = await getAsAttendee(`/user/following/`)
    //         .send({ userId: OTHER_USER.userId })
    //         .expect(StatusCode.ClientErrorForbidden);
    //     expect(JSON.parse(response.text)).toHaveProperty("error", "Forbidden");
    // });
    // it("throws an error for no userId passed in", async () => {
    //     const response = await getAsAttendee(`/user/following/`).expect(StatusCode.ClientErrorBadRequest);
    //     expect(JSON.parse(response.text)).toHaveProperty("error", "BadRequest");
    // });
});
(0, globals_1.describe)("PUT /user/follow/", function () {
    (0, globals_1.beforeEach)(function () {
        TESTER_ATTENDEE_FOLLOWING.following.push(TESTER_EVENT_FOLLOWING.eventId);
    });
    (0, globals_1.afterEach)(function () {
        TESTER_ATTENDEE_FOLLOWING.following.pop();
    });
    (0, globals_1.it)("works for a non-existent event", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, updatedEvents, updatedUsers;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, models_1.default.EventFollowers.deleteOne({
                        eventId: TESTER_EVENT_FOLLOWING.eventId,
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, (0, testTools_1.putAsAttendee)("/user/follow/")
                            .send({ eventId: TESTER_EVENT_FOLLOWING.eventId })
                            .expect(status_code_enum_1.StatusCode.SuccessOK)];
                case 2:
                    response = _a.sent();
                    (0, globals_1.expect)(JSON.parse(response.text)).toMatchObject(TESTER_ATTENDEE_FOLLOWING);
                    return [4 /*yield*/, models_1.default.AttendeeFollowing.findOne({ userId: TESTER_ATTENDEE_FOLLOWING.userId })];
                case 3:
                    updatedEvents = _a.sent();
                    (0, globals_1.expect)(updatedEvents === null || updatedEvents === void 0 ? void 0 : updatedEvents.following).toContain(TESTER_EVENT_FOLLOWING.eventId);
                    return [4 /*yield*/, models_1.default.EventFollowers.findOne({ eventId: TESTER_EVENT_FOLLOWING.eventId })];
                case 4:
                    updatedUsers = _a.sent();
                    (0, globals_1.expect)(updatedUsers === null || updatedUsers === void 0 ? void 0 : updatedUsers.followers).toContain(TESTER_ATTENDEE_FOLLOWING.userId);
                    return [2 /*return*/];
            }
        });
    }); });
    (0, globals_1.it)("works for an attendee user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, updatedEvents, updatedUsers;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, testTools_1.putAsAttendee)("/user/follow/")
                        .send({ eventId: TESTER_EVENT_FOLLOWING.eventId })
                        .expect(status_code_enum_1.StatusCode.SuccessOK)];
                case 1:
                    response = _a.sent();
                    (0, globals_1.expect)(JSON.parse(response.text)).toMatchObject(TESTER_ATTENDEE_FOLLOWING);
                    return [4 /*yield*/, models_1.default.AttendeeFollowing.findOne({ userId: TESTER_ATTENDEE_FOLLOWING.userId })];
                case 2:
                    updatedEvents = _a.sent();
                    (0, globals_1.expect)(updatedEvents === null || updatedEvents === void 0 ? void 0 : updatedEvents.following).toContain(TESTER_EVENT_FOLLOWING.eventId);
                    return [4 /*yield*/, models_1.default.EventFollowers.findOne({ eventId: TESTER_EVENT_FOLLOWING.eventId })];
                case 3:
                    updatedUsers = _a.sent();
                    (0, globals_1.expect)(updatedUsers === null || updatedUsers === void 0 ? void 0 : updatedUsers.followers).toContain(TESTER_ATTENDEE_FOLLOWING.userId);
                    return [2 /*return*/];
            }
        });
    }); });
});
(0, globals_1.describe)("PUT /user/unfollow/", function () {
    (0, globals_1.it)("gives an not found error for a non-existent user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, models_1.default.AttendeeFollowing.deleteOne({
                        userId: TESTER_ATTENDEE_FOLLOWING.userId,
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, (0, testTools_1.putAsAttendee)("/user/unfollow/")
                            .send({ eventId: TESTER_EVENT_FOLLOWING.eventId })
                            .expect(status_code_enum_1.StatusCode.ClientErrorNotFound)];
                case 2:
                    response = _a.sent();
                    (0, globals_1.expect)(JSON.parse(response.text)).toHaveProperty("error", "UserNotFound");
                    return [2 /*return*/];
            }
        });
    }); });
    (0, globals_1.it)("gives an not found error for a non-existent event", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, models_1.default.EventFollowers.deleteOne({
                        eventId: TESTER_EVENT_FOLLOWING.eventId,
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, (0, testTools_1.putAsAttendee)("/user/unfollow/")
                            .send({ eventId: TESTER_EVENT_FOLLOWING.eventId })
                            .expect(status_code_enum_1.StatusCode.ClientErrorNotFound)];
                case 2:
                    response = _a.sent();
                    (0, globals_1.expect)(JSON.parse(response.text)).toHaveProperty("error", "EventNotFound");
                    return [2 /*return*/];
            }
        });
    }); });
    (0, globals_1.it)("works for an attendee user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, updatedEvents, updatedUsers;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, models_1.default.EventFollowers.findOneAndUpdate({ eventId: TESTER_EVENT_FOLLOWING.eventId }, { $addToSet: { followers: TESTER_ATTENDEE_FOLLOWING.userId } }, { new: true })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, models_1.default.AttendeeFollowing.findOneAndUpdate({ userId: TESTER_ATTENDEE_FOLLOWING.userId }, { $addToSet: { following: TESTER_EVENT_FOLLOWING.eventId } }, { new: true })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, (0, testTools_1.putAsAttendee)("/user/unfollow/")
                            .send({ eventId: TESTER_EVENT_FOLLOWING.eventId })
                            .expect(status_code_enum_1.StatusCode.SuccessOK)];
                case 3:
                    response = _a.sent();
                    (0, globals_1.expect)(JSON.parse(response.text)).toMatchObject(TESTER_ATTENDEE_FOLLOWING);
                    return [4 /*yield*/, models_1.default.AttendeeFollowing.findOne({ userId: TESTER_ATTENDEE_FOLLOWING.userId })];
                case 4:
                    updatedEvents = _a.sent();
                    (0, globals_1.expect)(updatedEvents).toEqual(globals_1.expect.not.arrayContaining([TESTER_EVENT_FOLLOWING.eventId]));
                    return [4 /*yield*/, models_1.default.EventFollowers.findOne({ eventId: TESTER_EVENT_FOLLOWING.eventId })];
                case 5:
                    updatedUsers = _a.sent();
                    (0, globals_1.expect)(updatedUsers).toEqual(globals_1.expect.not.arrayContaining([TESTER_ATTENDEE_FOLLOWING.userId]));
                    return [2 /*return*/];
            }
        });
    }); });
});
(0, globals_1.describe)("PUT /user/scan-event/", function () {
    (0, globals_1.it)("works for an attendee", function () { return __awaiter(void 0, void 0, void 0, function () {
        var eventAttendance, userAttendance;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, testTools_1.putAsAttendee)("/user/scan-event/").send({ eventId: TESTER_EVENT.eventId }).expect(status_code_enum_1.StatusCode.SuccessOK)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, models_1.default.EventAttendance.findOne({ eventId: TESTER_EVENT.eventId })];
                case 2:
                    eventAttendance = _a.sent();
                    return [4 /*yield*/, models_1.default.UserAttendance.findOne({ userId: testTools_1.TESTER.id })];
                case 3:
                    userAttendance = _a.sent();
                    (0, globals_1.expect)(eventAttendance === null || eventAttendance === void 0 ? void 0 : eventAttendance.attendees).toContain(testTools_1.TESTER.id);
                    (0, globals_1.expect)(userAttendance === null || userAttendance === void 0 ? void 0 : userAttendance.attendance).toContain(TESTER_EVENT.eventId);
                    return [2 /*return*/];
            }
        });
    }); });
    (0, globals_1.it)("returns InvalidParams for missing parameters", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, testTools_1.putAsAttendee)("/user/scan-event/").send({}).expect(status_code_enum_1.StatusCode.ClientErrorBadRequest)];
                case 1:
                    response = _a.sent();
                    (0, globals_1.expect)(JSON.parse(response.text)).toHaveProperty("error", "InvalidParams");
                    return [2 /*return*/];
            }
        });
    }); });
    (0, globals_1.it)("returns EventNotFound for non-existent event", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, testTools_1.putAsAttendee)("/user/scan-event/")
                        .send({ eventId: "not-some-event" })
                        .expect(status_code_enum_1.StatusCode.ClientErrorFailedDependency)];
                case 1:
                    response = _a.sent();
                    (0, globals_1.expect)(JSON.parse(response.text)).toHaveProperty("error", "NonexistentEvent");
                    return [2 /*return*/];
            }
        });
    }); });
    (0, globals_1.it)("returns AlreadyCheckedIn for duplicate calls", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, testTools_1.putAsAttendee)("/user/scan-event/")
                        .send({ eventId: "some-event", userId: "some-user" })
                        .expect(status_code_enum_1.StatusCode.SuccessOK)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, (0, testTools_1.putAsAttendee)("/user/scan-event/")
                            .send({ eventId: "some-event", userId: "some-user" })
                            .expect(status_code_enum_1.StatusCode.ClientErrorBadRequest)];
                case 2:
                    response = _a.sent();
                    (0, globals_1.expect)(JSON.parse(response.text)).toHaveProperty("error", "AlreadyCheckedIn");
                    return [2 /*return*/];
            }
        });
    }); });
});

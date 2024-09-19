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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyFunction = exports.authenticateFunction = void 0;
exports.getJwtPayloadFromProfile = getJwtPayloadFromProfile;
exports.getJwtPayloadFromDB = getJwtPayloadFromDB;
exports.generateJwtToken = generateJwtToken;
exports.decodeJwtToken = decodeJwtToken;
exports.updateUserRoles = updateUserRoles;
exports.initializeUserRoles = initializeUserRoles;
exports.getAuthInfo = getAuthInfo;
exports.getRoles = getRoles;
exports.updateRoles = updateRoles;
exports.hasElevatedPerms = hasElevatedPerms;
exports.hasStaffPerms = hasStaffPerms;
exports.hasAdminPerms = hasAdminPerms;
exports.isPro = isPro;
exports.isAttendee = isAttendee;
exports.getUsersWithRole = getUsersWithRole;
var ms_1 = require("ms");
var jsonwebtoken_1 = require("jsonwebtoken");
var passport_1 = require("passport");
var config_1 = require("../../config");
var auth_models_1 = require("./auth-models");
var models_1 = require("../../database/models");
/**
 * Perform authentication step. Use this information to redirect to provider, perform auth, and then redirect user back to main website if successful or unsuccessful.
 * In the case of a failure, throw an error.
 * @param strategies List (or string) of valid authentication strategies for this route
 * @param options Set of options to be associated with these strategies
 * @returns Passport middleware that is used to perform authentication
 */
var authenticateFunction = function (strategies, options) {
    return passport_1.default.authenticate(strategies, options, undefined);
};
exports.authenticateFunction = authenticateFunction;
/**
 * Simple function, used to verify that authentication actually happens correctly.
 * @param _1 Auth token - never used
 * @param _2 Refresh token - also never used
 * @param user Passport profile of the authenticated user - CHANGES based on strategy
 * @param callback Function to verify if the actual authentication step worked
 * @returns Results of the callback function, after it's been called with the user
 */
var verifyFunction = function (_1, _2, user, callback) {
    // Data manipulation to store types of parsable inputs
    return callback(null, user);
};
exports.verifyFunction = verifyFunction;
/**
 * Use the ProfileData to generate a payload object for JWT token (cast, extract relevant data, and return).
 * @param provider String of the provider, being used
 * @param data ProfileData, returned from passport post-authentication step
 * @param rawId boolean, true if the id in data needs to be prepended by the provider, false if not
 * @returns JwtPayload, which gets sent back to the user in the next step
 */
function getJwtPayloadFromProfile(provider, data, rawId) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, email, payload, oldRoles, newRoles, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userId = rawId ? "".concat(provider).concat(data.id) : "".concat(data.id);
                    email = data.email;
                    payload = {
                        id: userId,
                        email: email,
                        provider: provider,
                        roles: [],
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, getRoles(userId)];
                case 2:
                    oldRoles = _a.sent();
                    if (oldRoles === undefined) {
                        oldRoles = [];
                    }
                    newRoles = initializeUserRoles(provider, data.email);
                    payload.roles = __spreadArray([], new Set(__spreadArray(__spreadArray([], oldRoles, true), newRoles, true)), true);
                    return [4 /*yield*/, updateUserRoles(userId, provider, payload.roles)];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/, payload];
            }
        });
    });
}
/**
 * Get a JWT payload for a user, from database. Perform an auth query and an users query, which are used in an implicit join.
 * @param targetUser UserID of the user to return a JWT payload for.
 * @returns Promise, containing either JWT payload or reason for failure
 */
function getJwtPayloadFromDB(targetUser) {
    return __awaiter(this, void 0, void 0, function () {
        var authInfo, userInfo, newPayload, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, models_1.default.AuthInfo.findOne({ userId: targetUser })];
                case 1:
                    authInfo = _a.sent();
                    return [4 /*yield*/, models_1.default.UserInfo.findOne({ userId: targetUser })];
                case 2:
                    userInfo = _a.sent();
                    if (!authInfo || !userInfo) {
                        return [2 /*return*/, Promise.reject("UserNotFound")];
                    }
                    newPayload = {
                        id: targetUser,
                        roles: authInfo.roles,
                        email: userInfo.email,
                        provider: authInfo.provider,
                    };
                    return [2 /*return*/, newPayload];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/, Promise.reject("UserNotFound")];
            }
        });
    });
}
/**
 * Create the token, assign an expiry date, and sign it
 * @param payload JWT payload to be included in the token
 * @param expiration Offset-based expiration. If not provided, defaults to 2 days.
 * @returns Signed JWT token, to be returned to the user.
 */
function generateJwtToken(payload, shouldNotExpire, expiration) {
    if (!payload) {
        throw new Error("No JWT token passed in!");
    }
    // Ensure that the secret actually exists
    var secret = config_1.default.JWT_SECRET;
    if (!secret) {
        throw new Error("No secret provided for signing!");
    }
    // // Appends an expiry field to the JWT token
    var options = {};
    if (!shouldNotExpire) {
        var offset = (0, ms_1.default)(expiration !== null && expiration !== void 0 ? expiration : config_1.default.DEFAULT_JWT_EXPIRY_TIME);
        payload.exp = Math.floor(Date.now() + offset) / config_1.default.MILLISECONDS_PER_SECOND;
    }
    // Generate a token, and return it
    var token = jsonwebtoken_1.default.sign(payload, secret, options);
    return token;
}
/**
 * Ensure that a JWT token is a valid token. If invalid, throws an error.
 * @param token JWT token to decode
 * @returns Payload of the token if valid/
 */
function decodeJwtToken(token) {
    if (!token) {
        throw new Error("NoToken");
    }
    // Ensure that we have a secret to parse token
    var secret = config_1.default.JWT_SECRET;
    if (!secret) {
        throw new Error("NoSecret");
    }
    // Verify already ensures that the token isn't expired. If it is, it returns an error
    return jsonwebtoken_1.default.verify(token, secret);
}
/**
 * Create an auth database entry for the current user. Should be called whenever a user is created.
 * @param id UserID to create the entry for
 * @param provider Provider being used to create this entry
 * @param roles Array of roles that belong to the given user
 * @returns Promise, containing nothing if valid. If invalid, error containing why.
 */
function updateUserRoles(id, provider, roles) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Create a new rolesEntry for the database, and insert it into the collection
                return [4 /*yield*/, models_1.default.AuthInfo.findOneAndUpdate({ userId: id }, { provider: provider.toLowerCase(), roles: roles }, { upsert: true }).catch(function (error) { return error; })];
                case 1:
                    // Create a new rolesEntry for the database, and insert it into the collection
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Function to define the very basic user roles that a user should have before getting access.
 * @param provider Provider used to sign the user up
 * @param email Email address that the user signed up with
 * @returns List of roles that the uer containss
 */
function initializeUserRoles(provider, email) {
    var roles = [];
    // Check if this is a staff email
    if (provider == auth_models_1.Provider.GOOGLE && email.endsWith("@hackillinois.org")) {
        roles.push(auth_models_1.Role.STAFF);
        // If email in the system admin list, add the admin role
        if (config_1.default.SYSTEM_ADMIN_LIST.includes(email.replace("@hackillinois.org", ""))) {
            roles.push(auth_models_1.Role.ADMIN);
        }
    }
    // Add the basic USER role in the provider
    if (provider == auth_models_1.Provider.GITHUB) {
        roles.push(auth_models_1.Role.USER);
    }
    return roles;
}
/**
 * Get auth database information for a given user
 * @param id UserID of the user to return the info for
 * @returns Promise containing user, provider, email, and roles if valid. If invalid, error containing why.
 */
function getAuthInfo(id) {
    return __awaiter(this, void 0, void 0, function () {
        var info, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, models_1.default.AuthInfo.findOne({ userId: id })];
                case 1:
                    info = _b.sent();
                    // Null check to ensure that we're not returning anything null
                    if (!info) {
                        return [2 /*return*/, Promise.reject("UserNotFound")];
                    }
                    info.provider = info.provider.toLowerCase();
                    return [2 /*return*/, info];
                case 2:
                    _a = _b.sent();
                    return [2 /*return*/, Promise.reject("InternalError")];
                case 3: return [2 /*return*/];
            }
        });
    });
}
/**
 * Calls the getAuthInfo function to get roles for a user. If the user does not exist, we return an empty array as opposed to an error.
 * @param id UserID of the user to return the info for
 * @returns Promise, containing array of roles for the user.
 */
function getRoles(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, getAuthInfo(id)
                    .then(function (authInfo) { return authInfo.roles; })
                    .catch(function (error) {
                    console.log(error);
                    return undefined;
                })];
        });
    });
}
/**
 * Update the roles of a particular user within the database. CAN ONLY PERFORM ADD/REMOVE operations
 * @param userId ID of the user to update
 * @param role Role to add/remove
 * @param operation Operation to perform
 * @returns Promise - if valid, then update operation worked. If invalid, then contains why.
 */
function updateRoles(userId, role, operation) {
    return __awaiter(this, void 0, void 0, function () {
        var updateQuery, updatedInfo, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Get filter, representing operation to perform on mongoDB
                    switch (operation) {
                        case auth_models_1.RoleOperation.ADD:
                            updateQuery = { $addToSet: { roles: role } };
                            break;
                        case auth_models_1.RoleOperation.REMOVE:
                            updateQuery = { $pull: { roles: role } };
                            break;
                        default:
                            return [2 /*return*/, Promise.reject("OperationNotFound")];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, models_1.default.AuthInfo.findOneAndUpdate({ userId: userId }, updateQuery, {
                            new: true,
                        })];
                case 2:
                    updatedInfo = _a.sent();
                    if (updatedInfo) {
                        return [2 /*return*/, updatedInfo.roles];
                    }
                    else {
                        return [2 /*return*/, Promise.reject("UserNotFound")];
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    return [2 /*return*/, Promise.reject(error_3)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
/**
 * Catch-all function to check if a user should have permissions to perform operations on attendees
 * @param payload Payload of user performing the actual request
 * @returns True if the user is an ADMIN or a STAFF, else false
 */
function hasElevatedPerms(payload) {
    return hasStaffPerms(payload) || hasAdminPerms(payload);
}
/**
 * Check if a user has permissions to perform staff operations
 * @param payload Payload of user performing the actual request
 * @returns True if the user is a STAFF, else false
 */
function hasStaffPerms(payload) {
    if (!payload) {
        return false;
    }
    return payload.roles.includes(auth_models_1.Role.STAFF);
}
/**
 * Check if a user has permissions to perform admin operations
 * @param payload Payload of user performing the actual request
 * @returns True if the user is an ADMIN, else false
 */
function hasAdminPerms(payload) {
    if (!payload) {
        return false;
    }
    return payload.roles.includes(auth_models_1.Role.ADMIN);
}
/**
 * Check if a user has PRO permissions
 * @param payload Payload of user performing the actual request
 * @returns True if the user has PRO, else false
 */
function isPro(payload) {
    if (!payload) {
        return false;
    }
    return payload.roles.includes(auth_models_1.Role.PRO);
}
function isAttendee(payload) {
    if (!payload) {
        return false;
    }
    return payload.roles.includes(auth_models_1.Role.ATTENDEE);
}
/**
 * Get all id of users that have a particular role within the database.
 * @param role role that we want to filter for
 * @returns Promise<string[]> - if valid, then contains array of user w/ role. If invalid, then contains "Unknown Error".
 */
function getUsersWithRole(role) {
    return __awaiter(this, void 0, void 0, function () {
        var queryResult, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, models_1.default.AuthInfo.find({ roles: { $in: [role] } }).select("userId")];
                case 1:
                    queryResult = _a.sent();
                    return [2 /*return*/, queryResult.map(function (user) { return user.userId; })];
                case 2:
                    error_4 = _a.sent();
                    return [2 /*return*/, Promise.reject(error_4)];
                case 3: return [2 /*return*/];
            }
        });
    });
}

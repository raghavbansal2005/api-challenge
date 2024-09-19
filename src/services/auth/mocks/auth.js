"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockGenerateJwtTokenWithWrapper = mockGenerateJwtTokenWithWrapper;
exports.mockGetJwtPayloadFromProfile = mockGetJwtPayloadFromProfile;
var globals_1 = require("@jest/globals");
var authLib = require("../../auth/auth-lib");
/*
 * Mocks generateJwtToken with a wrapper so calls and returns can be examined. Does not change behavior.
 */
function mockGenerateJwtTokenWithWrapper() {
    var mockedAuthLib = require("../../auth/auth-lib");
    var mockedGenerateJwtToken = globals_1.jest.spyOn(mockedAuthLib, "generateJwtToken");
    mockedGenerateJwtToken.mockImplementation(function (payload, shouldNotExpire, expiration) {
        return authLib.generateJwtToken(payload, shouldNotExpire, expiration);
    });
    return mockedGenerateJwtToken;
}
/*
 * Mocks getJwtPayloadFromProfile, returns SpiedFunction.
 * Note: You must actually mock the implementation, this method just returns a Spy to mock!
 */
function mockGetJwtPayloadFromProfile() {
    var mockedAuthLib = require("../../auth/auth-lib");
    return globals_1.jest.spyOn(mockedAuthLib, "getJwtPayloadFromProfile");
}

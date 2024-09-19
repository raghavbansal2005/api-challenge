"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTH_ROLE_TO_ROLES = exports.ADMIN_EMAIL = exports.TESTER = void 0;
exports.get = get;
exports.post = post;
exports.put = put;
exports.patch = patch;
exports.del = del;
exports.getAsUser = getAsUser;
exports.postAsUser = postAsUser;
exports.putAsUser = putAsUser;
exports.patchAsUser = patchAsUser;
exports.delAsUser = delAsUser;
exports.getAsApplicant = getAsApplicant;
exports.postAsApplicant = postAsApplicant;
exports.putAsApplicant = putAsApplicant;
exports.patchAsApplicant = patchAsApplicant;
exports.delAsApplicant = delAsApplicant;
exports.getAsAttendee = getAsAttendee;
exports.postAsAttendee = postAsAttendee;
exports.putAsAttendee = putAsAttendee;
exports.patchAsAttendee = patchAsAttendee;
exports.delAsAttendee = delAsAttendee;
exports.getAsMentor = getAsMentor;
exports.postAsMentor = postAsMentor;
exports.putAsMentor = putAsMentor;
exports.patchAsMentor = patchAsMentor;
exports.delAsMentor = delAsMentor;
exports.getAsStaff = getAsStaff;
exports.postAsStaff = postAsStaff;
exports.putAsStaff = putAsStaff;
exports.patchAsStaff = patchAsStaff;
exports.delAsStaff = delAsStaff;
exports.getAsAdmin = getAsAdmin;
exports.postAsAdmin = postAsAdmin;
exports.putAsAdmin = putAsAdmin;
exports.patchAsAdmin = patchAsAdmin;
exports.delAsAdmin = delAsAdmin;
var supertest_1 = require("supertest");
var auth_models_1 = require("./services/auth/auth-models");
// The tester is the user that will be making requests
// We provide this object so you can do proper testing based on JWT auth
// and not have to hardcode values, aka TESTER is the data used to create the JWT
exports.TESTER = {
    id: "bob-the-tester101010101011",
    email: "bob-the-tester@hackillinois.org",
    name: "Bob Tester",
    avatarUrl: "https://hackillinois.org/mushroom.png",
    discordTag: "hackillinoistest",
    userName: "bobster_the_mobster",
};
// A email that is defined as admin in config
exports.ADMIN_EMAIL = "admin@hackillinois.org";
// A mapping of role to roles they have, used for JWT generation
exports.AUTH_ROLE_TO_ROLES = (_a = {},
    _a[auth_models_1.Role.USER] = [auth_models_1.Role.USER],
    _a[auth_models_1.Role.APPLICANT] = [auth_models_1.Role.USER, auth_models_1.Role.APPLICANT],
    _a[auth_models_1.Role.ATTENDEE] = [auth_models_1.Role.USER, auth_models_1.Role.APPLICANT, auth_models_1.Role.ATTENDEE],
    _a[auth_models_1.Role.MENTOR] = [auth_models_1.Role.USER, auth_models_1.Role.MENTOR],
    _a[auth_models_1.Role.STAFF] = [auth_models_1.Role.USER, auth_models_1.Role.STAFF],
    _a[auth_models_1.Role.ADMIN] = [auth_models_1.Role.USER, auth_models_1.Role.STAFF, auth_models_1.Role.ADMIN],
    _a[auth_models_1.Role.SPONSOR] = [auth_models_1.Role.SPONSOR],
    _a[auth_models_1.Role.BLOBSTORE] = [auth_models_1.Role.BLOBSTORE],
    _a[auth_models_1.Role.PRO] = [auth_models_1.Role.PRO],
    _a);
/*
 * Set auth header & misc headers
 */
function setHeaders(request, role) {
    if (!role) {
        return request;
    }
    var isStaff = role == auth_models_1.Role.STAFF || role == auth_models_1.Role.ADMIN;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    var generateJwtToken = require("./services/auth/auth-lib").generateJwtToken;
    // Assumes auth lib works. Therefore we should have some tests for this.
    var jwt = generateJwtToken({
        id: exports.TESTER.id,
        email: exports.TESTER.email,
        provider: isStaff ? auth_models_1.Provider.GOOGLE : auth_models_1.Provider.GITHUB,
        roles: exports.AUTH_ROLE_TO_ROLES[role],
    });
    return request
        .set("Authorization", jwt)
        .set("Accept", "application/json")
        .set("Content-Type", "application/json");
}
// Dynamically require app so it's always the freshest version
function app() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    var appExports = require("./app");
    return appExports.default;
}
function get(url, role) {
    return setHeaders((0, supertest_1.default)(app()).get(url), role);
}
function post(url, role) {
    return setHeaders((0, supertest_1.default)(app()).post(url), role);
}
function put(url, role) {
    return setHeaders((0, supertest_1.default)(app()).put(url), role);
}
function patch(url, role) {
    return setHeaders((0, supertest_1.default)(app()).patch(url), role);
}
function del(url, role) {
    return setHeaders((0, supertest_1.default)(app()).delete(url), role);
}
// Helpers that are nicer to use
function getAsUser(url) {
    return get(url, auth_models_1.Role.USER);
}
function postAsUser(url) {
    return post(url, auth_models_1.Role.USER);
}
function putAsUser(url) {
    return put(url, auth_models_1.Role.USER);
}
function patchAsUser(url) {
    return patch(url, auth_models_1.Role.USER);
}
function delAsUser(url) {
    return del(url, auth_models_1.Role.USER);
}
function getAsApplicant(url) {
    return get(url, auth_models_1.Role.APPLICANT);
}
function postAsApplicant(url) {
    return post(url, auth_models_1.Role.APPLICANT);
}
function putAsApplicant(url) {
    return put(url, auth_models_1.Role.APPLICANT);
}
function patchAsApplicant(url) {
    return patch(url, auth_models_1.Role.APPLICANT);
}
function delAsApplicant(url) {
    return del(url, auth_models_1.Role.APPLICANT);
}
function getAsAttendee(url) {
    return get(url, auth_models_1.Role.ATTENDEE);
}
function postAsAttendee(url) {
    return post(url, auth_models_1.Role.ATTENDEE);
}
function putAsAttendee(url) {
    return put(url, auth_models_1.Role.ATTENDEE);
}
function patchAsAttendee(url) {
    return patch(url, auth_models_1.Role.ATTENDEE);
}
function delAsAttendee(url) {
    return del(url, auth_models_1.Role.ATTENDEE);
}
function getAsMentor(url) {
    return get(url, auth_models_1.Role.MENTOR);
}
function postAsMentor(url) {
    return post(url, auth_models_1.Role.MENTOR);
}
function putAsMentor(url) {
    return put(url, auth_models_1.Role.MENTOR);
}
function patchAsMentor(url) {
    return patch(url, auth_models_1.Role.MENTOR);
}
function delAsMentor(url) {
    return del(url, auth_models_1.Role.MENTOR);
}
function getAsStaff(url) {
    return get(url, auth_models_1.Role.STAFF);
}
function postAsStaff(url) {
    return post(url, auth_models_1.Role.STAFF);
}
function putAsStaff(url) {
    return put(url, auth_models_1.Role.STAFF);
}
function patchAsStaff(url) {
    return patch(url, auth_models_1.Role.STAFF);
}
function delAsStaff(url) {
    return del(url, auth_models_1.Role.STAFF);
}
function getAsAdmin(url) {
    return get(url, auth_models_1.Role.ADMIN);
}
function postAsAdmin(url) {
    return post(url, auth_models_1.Role.ADMIN);
}
function putAsAdmin(url) {
    return put(url, auth_models_1.Role.ADMIN);
}
function patchAsAdmin(url) {
    return patch(url, auth_models_1.Role.ADMIN);
}
function delAsAdmin(url) {
    return del(url, auth_models_1.Role.ADMIN);
}

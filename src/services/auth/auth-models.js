"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleOperation = exports.Provider = exports.Role = void 0;
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["STAFF"] = "STAFF";
    Role["MENTOR"] = "MENTOR";
    Role["APPLICANT"] = "APPLICANT";
    Role["ATTENDEE"] = "ATTENDEE";
    Role["USER"] = "USER";
    Role["SPONSOR"] = "SPONSOR";
    Role["BLOBSTORE"] = "BLOBSTORE";
    Role["PRO"] = "PRO";
})(Role || (exports.Role = Role = {}));
var Provider;
(function (Provider) {
    Provider["GITHUB"] = "github";
    Provider["GOOGLE"] = "google";
})(Provider || (exports.Provider = Provider = {}));
var RoleOperation;
(function (RoleOperation) {
    RoleOperation["ADD"] = "add";
    RoleOperation["REMOVE"] = "remove";
})(RoleOperation || (exports.RoleOperation = RoleOperation = {}));

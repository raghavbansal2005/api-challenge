"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
exports.generateConfig = generateConfig;
var typegoose_1 = require("@typegoose/typegoose");
var auth_db_1 = require("./auth-db");
var attendee_db_1 = require("./attendee-db");
var admission_db_1 = require("./admission-db");
var mentor_db_1 = require("./mentor-db");
var event_db_1 = require("./event-db");
var newsletter_db_1 = require("./newsletter-db");
var registration_db_1 = require("./registration-db");
var shop_db_1 = require("./shop-db");
var user_db_1 = require("./user-db");
var staff_db_1 = require("./staff-db");
var notification_db_1 = require("./notification-db");
var puzzle_db_1 = require("./puzzle-db");
// Groups for collections
var Group;
(function (Group) {
    Group["AUTH"] = "auth";
    Group["EVENT"] = "event";
    Group["ADMISSION"] = "admission";
    Group["ATTENDEE"] = "attendee";
    Group["MENTOR"] = "mentor";
    Group["NEWSLETTER"] = "newsletter";
    Group["NOTIFICATION"] = "notification";
    Group["PUZZLE"] = "puzzle";
    Group["REGISTRATION"] = "registration";
    Group["SHOP"] = "shop";
    Group["STAFF"] = "staff";
    Group["USER"] = "user";
})(Group || (exports.Group = Group = {}));
// Collections for each database, where models will be stored
var AttendeeCollection;
(function (AttendeeCollection) {
    AttendeeCollection["PROFILE"] = "profile";
    AttendeeCollection["FOLLOWING"] = "following";
})(AttendeeCollection || (AttendeeCollection = {}));
var AuthCollection;
(function (AuthCollection) {
    AuthCollection["INFO"] = "info";
})(AuthCollection || (AuthCollection = {}));
var AdmissionCollection;
(function (AdmissionCollection) {
    AdmissionCollection["DECISION"] = "decision";
})(AdmissionCollection || (AdmissionCollection = {}));
var EventCollection;
(function (EventCollection) {
    EventCollection["METADATA"] = "metadata";
    EventCollection["ATTENDANCE"] = "attendance";
    EventCollection["EVENTS"] = "events";
    EventCollection["FOLLOWERS"] = "followers";
})(EventCollection || (EventCollection = {}));
var MentorCollection;
(function (MentorCollection) {
    MentorCollection["OFFICE_HOURS"] = "officehours";
})(MentorCollection || (MentorCollection = {}));
var NewsletterCollection;
(function (NewsletterCollection) {
    NewsletterCollection["SUBSCRIPTIONS"] = "subscriptions";
})(NewsletterCollection || (NewsletterCollection = {}));
var NotificationCollection;
(function (NotificationCollection) {
    NotificationCollection["MAPPINGS"] = "mappings";
    NotificationCollection["MESSAGES"] = "messages";
})(NotificationCollection || (NotificationCollection = {}));
var PuzzleCollection;
(function (PuzzleCollection) {
    PuzzleCollection["RUNES_AND_RIDDLES"] = "runesriddles";
})(PuzzleCollection || (PuzzleCollection = {}));
var RegistrationCollection;
(function (RegistrationCollection) {
    RegistrationCollection["APPLICATIONS"] = "applications";
})(RegistrationCollection || (RegistrationCollection = {}));
var ShopCollection;
(function (ShopCollection) {
    ShopCollection["ITEMS"] = "items";
})(ShopCollection || (ShopCollection = {}));
var StaffCollection;
(function (StaffCollection) {
    StaffCollection["SHIFT"] = "shift";
})(StaffCollection || (StaffCollection = {}));
var UserCollection;
(function (UserCollection) {
    UserCollection["INFO"] = "users";
    UserCollection["ATTENDANCE"] = "attendance";
})(UserCollection || (UserCollection = {}));
function generateConfig(collection) {
    return {
        schemaOptions: { collection: collection, versionKey: false },
    };
}
// Simple model getter
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getModel(of, group, collection) {
    return (0, typegoose_1.getModelForClass)(of, generateConfig("".concat(group, "_").concat(collection))); // required bc of any type
}
// Define models
var Models = /** @class */ (function () {
    function Models() {
    }
    // Attendee
    Models.AttendeeProfile = getModel(attendee_db_1.AttendeeProfile, Group.ATTENDEE, AttendeeCollection.PROFILE);
    Models.AttendeeFollowing = getModel(attendee_db_1.AttendeeFollowing, Group.ATTENDEE, AttendeeCollection.FOLLOWING);
    // Auth
    Models.AuthInfo = getModel(auth_db_1.AuthInfo, Group.AUTH, AuthCollection.INFO);
    // Admission
    Models.AdmissionDecision = getModel(admission_db_1.AdmissionDecision, Group.ADMISSION, AdmissionCollection.DECISION);
    // Event
    Models.Event = getModel(event_db_1.Event, Group.EVENT, EventCollection.EVENTS);
    Models.EventAttendance = getModel(event_db_1.EventAttendance, Group.EVENT, EventCollection.ATTENDANCE);
    Models.EventFollowers = getModel(event_db_1.EventFollowers, Group.EVENT, EventCollection.FOLLOWERS);
    // Mentor
    Models.MentorOfficeHours = getModel(mentor_db_1.MentorOfficeHours, Group.MENTOR, MentorCollection.OFFICE_HOURS);
    // Newsletter
    Models.NewsletterSubscription = getModel(newsletter_db_1.NewsletterSubscription, Group.NEWSLETTER, NewsletterCollection.SUBSCRIPTIONS);
    // Notification
    Models.NotificationMappings = getModel(notification_db_1.NotificationMappings, Group.NOTIFICATION, NotificationCollection.MAPPINGS);
    Models.NotificationMessages = getModel(notification_db_1.NotificationMessages, Group.NOTIFICATION, NotificationCollection.MESSAGES);
    // Puzzle
    Models.PuzzleItem = getModel(puzzle_db_1.PuzzleItem, Group.PUZZLE, PuzzleCollection.RUNES_AND_RIDDLES);
    // Registration
    Models.RegistrationApplication = getModel(registration_db_1.RegistrationApplication, Group.REGISTRATION, RegistrationCollection.APPLICATIONS);
    // Shop
    Models.ShopItem = getModel(shop_db_1.ShopItem, Group.SHOP, ShopCollection.ITEMS);
    // Staff
    Models.StaffShift = getModel(staff_db_1.StaffShift, Group.STAFF, StaffCollection.SHIFT);
    // User
    Models.UserInfo = getModel(user_db_1.UserInfo, Group.USER, UserCollection.INFO);
    Models.UserAttendance = getModel(user_db_1.UserAttendance, Group.USER, UserCollection.ATTENDANCE);
    return Models;
}());
exports.default = Models;

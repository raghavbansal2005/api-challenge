"use strict";
/*
 * This file defines all config used anywhere in the api. These values need to be defined on import.
 *
 * By moving all env variable usage to one place, we also make managing their usage much easier, and
 * can error if they are not defined.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatars = exports.RegistrationTemplates = exports.Device = void 0;
var env_1 = require("./env");
var Device;
(function (Device) {
    Device["ADMIN"] = "admin";
    Device["DEV"] = "dev";
    Device["WEB"] = "web";
    Device["IOS"] = "ios";
    Device["ANDROID"] = "android";
    Device["CHALLENGE"] = "challenge";
    Device["PUZZLE"] = "puzzle";
})(Device || (exports.Device = Device = {}));
var RegistrationTemplates;
(function (RegistrationTemplates) {
    RegistrationTemplates["REGISTRATION_SUBMISSION"] = "2024_registration_confirmation";
    RegistrationTemplates["STATUS_UPDATE"] = "2024_status_update";
    RegistrationTemplates["RSVP_CONFIRMATION"] = "2024_rsvp_confirmation";
    RegistrationTemplates["RSVP_CONFIRMATION_WITH_REIMBURSE"] = "2024_rsvp_confirmation_reimburse";
    RegistrationTemplates["RSVP_DECLINED"] = "2024_rsvp_declined";
    RegistrationTemplates["RSVP_REMINDER_1_WEEK"] = "2024_rsvp-reminder-1week";
    RegistrationTemplates["RSVP_REMINDER_1_DAY"] = "2024_rsvp-reminder";
})(RegistrationTemplates || (exports.RegistrationTemplates = RegistrationTemplates = {}));
var Avatars;
(function (Avatars) {
    Avatars["BUNNY"] = "bunny";
    Avatars["SQUIRREL"] = "squirrel";
    Avatars["GOBLIN"] = "goblin";
    Avatars["CHESTER"] = "chester";
    Avatars["CAT"] = "cat";
    Avatars["MUSHROOM"] = "mushroom";
    Avatars["FISHERCAT"] = "fishercat";
    Avatars["AXOLOTL"] = "axolotl";
})(Avatars || (exports.Avatars = Avatars = {}));
function requireEnv(name) {
    var value = env_1.default[name];
    if (value === undefined) {
        throw new Error("Env variable ".concat(name, " is not defined!"));
    }
    return value;
}
var Config = {
    /* Jest */
    TEST: false, // False by default, will be mocked over
    /* URLs */
    PORT: env_1.default.PORT ? parseInt(env_1.default.PORT) : 3000,
    DEFAULT_DEVICE: Device.WEB,
    REDIRECT_URLS: new Map([
        [Device.ADMIN, "https://admin.hackillinois.org/auth/"],
        [Device.DEV, "https://adonix.hackillinois.org/auth/dev/"],
        [Device.WEB, "https://www.hackillinois.org/auth/"],
        [Device.CHALLENGE, "https://adonix.hackillinois.org/auth/dev/"],
        [Device.IOS, "hackillinois://login/"],
        [Device.ANDROID, "hackillinois://login/"],
        [Device.PUZZLE, "https://runes.hackillinois.org/#/auth/"],
    ]),
    CALLBACK_URLS: {
        GITHUB: "https://adonix.hackillinois.org/auth/github/callback/",
        GOOGLE: "https://adonix.hackillinois.org/auth/google/callback/",
        // GITHUB: "http://localhost:3000/auth/github/callback/",
        // GOOGLE: "http://127.0.0.1:3000/auth/google/callback/",
    },
    METADATA_URL: "https://hackillinois.github.io/adonix-metadata/config.json",
    /* OAuth, Keys, & Permissions */
    CORS: {
        PROD_REGEX: requireEnv("PROD_REGEX"),
        DEPLOY_REGEX: requireEnv("DEPLOY_REGEX"),
    },
    DB_URL: "mongodb+srv://".concat(requireEnv("DB_USERNAME"), ":").concat(requireEnv("DB_PASSWORD"), "@").concat(requireEnv("DB_SERVER"), "/main"),
    DB_PARAMS: "?retryWrites=true&w=majority",
    FCM_SERVICE_ACCOUNT: requireEnv("FCM_SERVICE_ACCOUNT"),
    SPARKPOST_KEY: requireEnv("SPARKPOST_KEY"),
    SPARKPOST_URL: "https://api.sparkpost.com/api/v1/transmissions?num_rcpt_errors=3",
    GITHUB_OAUTH_ID: requireEnv("GITHUB_OAUTH_ID"),
    GITHUB_OAUTH_SECRET: requireEnv("GITHUB_OAUTH_SECRET"),
    GOOGLE_OAUTH_ID: requireEnv("GOOGLE_OAUTH_ID"),
    GOOGLE_OAUTH_SECRET: requireEnv("GOOGLE_OAUTH_SECRET"),
    JWT_SECRET: requireEnv("JWT_SECRET"),
    SYSTEM_ADMIN_LIST: requireEnv("SYSTEM_ADMINS").split(","),
    S3_ACCESS_KEY: requireEnv("S3_ACCESS_KEY"),
    S3_SECRET_KEY: requireEnv("S3_SECRET_KEY"),
    S3_REGION: requireEnv("S3_REGION"),
    S3_BUCKET_NAME: requireEnv("S3_BUCKET_NAME"),
    // Runes and Riddles
    PUZZLE: [
        requireEnv("QID0"),
        requireEnv("QID1"),
        requireEnv("QID2"),
        requireEnv("QID3"),
        requireEnv("QID4"),
        requireEnv("QID5"),
        requireEnv("QID6"),
        requireEnv("QID7"),
        requireEnv("QID8"),
    ],
    PUZZLE_EVENT_END_TIME: 1708812000,
    TRUE_VALUE: 1,
    FALSE_VALUE: 0,
    /* Timings */
    MILLISECONDS_PER_SECOND: 1000,
    DEFAULT_JWT_EXPIRY_TIME: "24h",
    QR_EXPIRY_TIME: "20s",
    RESUME_URL_EXPIRY_SECONDS: 60,
    REGISTRATION_CLOSE_TIME_MS: 1708149975000,
    /* Defaults */
    DEFAULT_POINT_VALUE: 0,
    DEFAULT_FOOD_WAVE: 0,
    DEFAULT_COIN_VALUE: 0,
    DEFAULT_AVATAR: "goblin",
    /* Limits */
    LEADERBOARD_QUERY_LIMIT: 25,
    MAX_RESUME_SIZE_BYTES: 2 * 1024 * 1024,
    NOTIFICATION_BATCH_SIZE: 50,
    /* Misc */
    SHOP_BYTES_GEN: 2,
    EVENT_BYTES_GEN: 16,
    MENTOR_BYTES_GEN: 16,
    SHOP_ID_LENGTH: 2 * 2,
    EVENT_ID_LENGTH: 2 * 16,
    MAX_SHOP_STOCK_PER_ITEM: 128,
    RANKING_OFFSET: 1,
};
exports.default = Config;

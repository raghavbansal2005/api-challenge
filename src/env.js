"use strict";
/*
 * This file loads the env variables we will use at runtime. Instead of relying on system envs dynamically,
 * we instead parse the .env file, and overwrite any existing variables with system variables.
 * Basically, .env file vars can be overwritten by system level env vars.
 *
 * The .env is also optional so that env vars can be entirely defined with system vars if needed, like for vercel.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
var fs_1 = require("fs");
var path_1 = require("path");
var envFilePath = path_1.default.join(process.cwd(), ".env");
var rawEnv = (0, fs_1.existsSync)(envFilePath) ? (0, fs_1.readFileSync)(envFilePath) : "";
var env = dotenv_1.default.parse(rawEnv);
for (var key in process.env) {
    var value = process.env[key];
    if (value === undefined) {
        continue;
    }
    env[key] = value;
}
exports.default = env;

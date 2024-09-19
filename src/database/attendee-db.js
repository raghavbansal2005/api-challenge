"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeFollowing = exports.AttendeeProfile = void 0;
var typegoose_1 = require("@typegoose/typegoose");
var AttendeeProfile = function () {
    var _a;
    var _userId_decorators;
    var _userId_initializers = [];
    var _userId_extraInitializers = [];
    var _displayName_decorators;
    var _displayName_initializers = [];
    var _displayName_extraInitializers = [];
    var _avatarUrl_decorators;
    var _avatarUrl_initializers = [];
    var _avatarUrl_extraInitializers = [];
    var _discordTag_decorators;
    var _discordTag_initializers = [];
    var _discordTag_extraInitializers = [];
    var _points_decorators;
    var _points_initializers = [];
    var _points_extraInitializers = [];
    var _coins_decorators;
    var _coins_initializers = [];
    var _coins_extraInitializers = [];
    var _foodWave_decorators;
    var _foodWave_initializers = [];
    var _foodWave_extraInitializers = [];
    return _a = /** @class */ (function () {
            function AttendeeProfile() {
                this.userId = __runInitializers(this, _userId_initializers, void 0);
                this.displayName = (__runInitializers(this, _userId_extraInitializers), __runInitializers(this, _displayName_initializers, void 0));
                this.avatarUrl = (__runInitializers(this, _displayName_extraInitializers), __runInitializers(this, _avatarUrl_initializers, void 0));
                this.discordTag = (__runInitializers(this, _avatarUrl_extraInitializers), __runInitializers(this, _discordTag_initializers, void 0));
                this.points = (__runInitializers(this, _discordTag_extraInitializers), __runInitializers(this, _points_initializers, void 0));
                this.coins = (__runInitializers(this, _points_extraInitializers), __runInitializers(this, _coins_initializers, void 0));
                this.foodWave = (__runInitializers(this, _coins_extraInitializers), __runInitializers(this, _foodWave_initializers, void 0));
                __runInitializers(this, _foodWave_extraInitializers);
            }
            return AttendeeProfile;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _userId_decorators = [(0, typegoose_1.prop)({ required: true })];
            _displayName_decorators = [(0, typegoose_1.prop)({ required: true })];
            _avatarUrl_decorators = [(0, typegoose_1.prop)({ required: true })];
            _discordTag_decorators = [(0, typegoose_1.prop)({ required: true })];
            _points_decorators = [(0, typegoose_1.prop)({ required: true })];
            _coins_decorators = [(0, typegoose_1.prop)({ required: true })];
            _foodWave_decorators = [(0, typegoose_1.prop)({ required: true })];
            __esDecorate(null, null, _userId_decorators, { kind: "field", name: "userId", static: false, private: false, access: { has: function (obj) { return "userId" in obj; }, get: function (obj) { return obj.userId; }, set: function (obj, value) { obj.userId = value; } }, metadata: _metadata }, _userId_initializers, _userId_extraInitializers);
            __esDecorate(null, null, _displayName_decorators, { kind: "field", name: "displayName", static: false, private: false, access: { has: function (obj) { return "displayName" in obj; }, get: function (obj) { return obj.displayName; }, set: function (obj, value) { obj.displayName = value; } }, metadata: _metadata }, _displayName_initializers, _displayName_extraInitializers);
            __esDecorate(null, null, _avatarUrl_decorators, { kind: "field", name: "avatarUrl", static: false, private: false, access: { has: function (obj) { return "avatarUrl" in obj; }, get: function (obj) { return obj.avatarUrl; }, set: function (obj, value) { obj.avatarUrl = value; } }, metadata: _metadata }, _avatarUrl_initializers, _avatarUrl_extraInitializers);
            __esDecorate(null, null, _discordTag_decorators, { kind: "field", name: "discordTag", static: false, private: false, access: { has: function (obj) { return "discordTag" in obj; }, get: function (obj) { return obj.discordTag; }, set: function (obj, value) { obj.discordTag = value; } }, metadata: _metadata }, _discordTag_initializers, _discordTag_extraInitializers);
            __esDecorate(null, null, _points_decorators, { kind: "field", name: "points", static: false, private: false, access: { has: function (obj) { return "points" in obj; }, get: function (obj) { return obj.points; }, set: function (obj, value) { obj.points = value; } }, metadata: _metadata }, _points_initializers, _points_extraInitializers);
            __esDecorate(null, null, _coins_decorators, { kind: "field", name: "coins", static: false, private: false, access: { has: function (obj) { return "coins" in obj; }, get: function (obj) { return obj.coins; }, set: function (obj, value) { obj.coins = value; } }, metadata: _metadata }, _coins_initializers, _coins_extraInitializers);
            __esDecorate(null, null, _foodWave_decorators, { kind: "field", name: "foodWave", static: false, private: false, access: { has: function (obj) { return "foodWave" in obj; }, get: function (obj) { return obj.foodWave; }, set: function (obj, value) { obj.foodWave = value; } }, metadata: _metadata }, _foodWave_initializers, _foodWave_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.AttendeeProfile = AttendeeProfile;
var AttendeeFollowing = function () {
    var _a;
    var _userId_decorators;
    var _userId_initializers = [];
    var _userId_extraInitializers = [];
    var _following_decorators;
    var _following_initializers = [];
    var _following_extraInitializers = [];
    return _a = /** @class */ (function () {
            function AttendeeFollowing() {
                this.userId = __runInitializers(this, _userId_initializers, void 0);
                this.following = (__runInitializers(this, _userId_extraInitializers), __runInitializers(this, _following_initializers, void 0));
                __runInitializers(this, _following_extraInitializers);
            }
            return AttendeeFollowing;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _userId_decorators = [(0, typegoose_1.prop)({ required: true })];
            _following_decorators = [(0, typegoose_1.prop)({
                    required: true,
                    type: function () { return String; },
                })];
            __esDecorate(null, null, _userId_decorators, { kind: "field", name: "userId", static: false, private: false, access: { has: function (obj) { return "userId" in obj; }, get: function (obj) { return obj.userId; }, set: function (obj, value) { obj.userId = value; } }, metadata: _metadata }, _userId_initializers, _userId_extraInitializers);
            __esDecorate(null, null, _following_decorators, { kind: "field", name: "following", static: false, private: false, access: { has: function (obj) { return "following" in obj; }, get: function (obj) { return obj.following; }, set: function (obj, value) { obj.following = value; } }, metadata: _metadata }, _following_initializers, _following_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.AttendeeFollowing = AttendeeFollowing;

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
exports.MentorOfficeHours = void 0;
var typegoose_1 = require("@typegoose/typegoose");
var MentorOfficeHours = function () {
    var _a;
    var _mentorId_decorators;
    var _mentorId_initializers = [];
    var _mentorId_extraInitializers = [];
    var _mentorName_decorators;
    var _mentorName_initializers = [];
    var _mentorName_extraInitializers = [];
    var _attendees_decorators;
    var _attendees_initializers = [];
    var _attendees_extraInitializers = [];
    return _a = /** @class */ (function () {
            function MentorOfficeHours() {
                this.mentorId = __runInitializers(this, _mentorId_initializers, void 0);
                this.mentorName = (__runInitializers(this, _mentorId_extraInitializers), __runInitializers(this, _mentorName_initializers, void 0));
                this.attendees = (__runInitializers(this, _mentorName_extraInitializers), __runInitializers(this, _attendees_initializers, void 0));
                __runInitializers(this, _attendees_extraInitializers);
            }
            return MentorOfficeHours;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _mentorId_decorators = [(0, typegoose_1.prop)({ required: true })];
            _mentorName_decorators = [(0, typegoose_1.prop)({ required: true })];
            _attendees_decorators = [(0, typegoose_1.prop)({
                    required: true,
                    type: function () { return String; },
                })];
            __esDecorate(null, null, _mentorId_decorators, { kind: "field", name: "mentorId", static: false, private: false, access: { has: function (obj) { return "mentorId" in obj; }, get: function (obj) { return obj.mentorId; }, set: function (obj, value) { obj.mentorId = value; } }, metadata: _metadata }, _mentorId_initializers, _mentorId_extraInitializers);
            __esDecorate(null, null, _mentorName_decorators, { kind: "field", name: "mentorName", static: false, private: false, access: { has: function (obj) { return "mentorName" in obj; }, get: function (obj) { return obj.mentorName; }, set: function (obj, value) { obj.mentorName = value; } }, metadata: _metadata }, _mentorName_initializers, _mentorName_extraInitializers);
            __esDecorate(null, null, _attendees_decorators, { kind: "field", name: "attendees", static: false, private: false, access: { has: function (obj) { return "attendees" in obj; }, get: function (obj) { return obj.attendees; }, set: function (obj, value) { obj.attendees = value; } }, metadata: _metadata }, _attendees_initializers, _attendees_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.MentorOfficeHours = MentorOfficeHours;

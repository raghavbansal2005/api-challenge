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
exports.NotificationMessages = exports.NotificationMappings = void 0;
var typegoose_1 = require("@typegoose/typegoose");
var NotificationMappings = function () {
    var _a;
    var _userId_decorators;
    var _userId_initializers = [];
    var _userId_extraInitializers = [];
    var _deviceToken_decorators;
    var _deviceToken_initializers = [];
    var _deviceToken_extraInitializers = [];
    return _a = /** @class */ (function () {
            function NotificationMappings() {
                this.userId = __runInitializers(this, _userId_initializers, void 0);
                this.deviceToken = (__runInitializers(this, _userId_extraInitializers), __runInitializers(this, _deviceToken_initializers, void 0));
                __runInitializers(this, _deviceToken_extraInitializers);
            }
            return NotificationMappings;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _userId_decorators = [(0, typegoose_1.prop)({ required: true })];
            _deviceToken_decorators = [(0, typegoose_1.prop)({ required: true })];
            __esDecorate(null, null, _userId_decorators, { kind: "field", name: "userId", static: false, private: false, access: { has: function (obj) { return "userId" in obj; }, get: function (obj) { return obj.userId; }, set: function (obj, value) { obj.userId = value; } }, metadata: _metadata }, _userId_initializers, _userId_extraInitializers);
            __esDecorate(null, null, _deviceToken_decorators, { kind: "field", name: "deviceToken", static: false, private: false, access: { has: function (obj) { return "deviceToken" in obj; }, get: function (obj) { return obj.deviceToken; }, set: function (obj, value) { obj.deviceToken = value; } }, metadata: _metadata }, _deviceToken_initializers, _deviceToken_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.NotificationMappings = NotificationMappings;
var NotificationMessageBatch = function () {
    var _a;
    var _sent_decorators;
    var _sent_initializers = [];
    var _sent_extraInitializers = [];
    var _failed_decorators;
    var _failed_initializers = [];
    var _failed_extraInitializers = [];
    return _a = /** @class */ (function () {
            function NotificationMessageBatch() {
                this.sent = __runInitializers(this, _sent_initializers, void 0);
                this.failed = (__runInitializers(this, _sent_extraInitializers), __runInitializers(this, _failed_initializers, void 0));
                __runInitializers(this, _failed_extraInitializers);
            }
            return NotificationMessageBatch;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _sent_decorators = [(0, typegoose_1.prop)({ required: true, type: function () { return [String]; } })];
            _failed_decorators = [(0, typegoose_1.prop)({ required: true, type: function () { return [String]; } })];
            __esDecorate(null, null, _sent_decorators, { kind: "field", name: "sent", static: false, private: false, access: { has: function (obj) { return "sent" in obj; }, get: function (obj) { return obj.sent; }, set: function (obj, value) { obj.sent = value; } }, metadata: _metadata }, _sent_initializers, _sent_extraInitializers);
            __esDecorate(null, null, _failed_decorators, { kind: "field", name: "failed", static: false, private: false, access: { has: function (obj) { return "failed" in obj; }, get: function (obj) { return obj.failed; }, set: function (obj, value) { obj.failed = value; } }, metadata: _metadata }, _failed_initializers, _failed_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var NotificationMessages = function () {
    var _a;
    var _sender_decorators;
    var _sender_initializers = [];
    var _sender_extraInitializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _title_extraInitializers = [];
    var _body_decorators;
    var _body_initializers = [];
    var _body_extraInitializers = [];
    var _batches_decorators;
    var _batches_initializers = [];
    var _batches_extraInitializers = [];
    return _a = /** @class */ (function () {
            function NotificationMessages() {
                this.sender = __runInitializers(this, _sender_initializers, void 0);
                this.title = (__runInitializers(this, _sender_extraInitializers), __runInitializers(this, _title_initializers, void 0));
                this.body = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _body_initializers, void 0));
                this.batches = (__runInitializers(this, _body_extraInitializers), __runInitializers(this, _batches_initializers, void 0));
                __runInitializers(this, _batches_extraInitializers);
            }
            return NotificationMessages;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _sender_decorators = [(0, typegoose_1.prop)({ required: true })];
            _title_decorators = [(0, typegoose_1.prop)({ required: true })];
            _body_decorators = [(0, typegoose_1.prop)({ required: true })];
            _batches_decorators = [(0, typegoose_1.prop)({ required: true, type: function () { return [NotificationMessageBatch]; } })];
            __esDecorate(null, null, _sender_decorators, { kind: "field", name: "sender", static: false, private: false, access: { has: function (obj) { return "sender" in obj; }, get: function (obj) { return obj.sender; }, set: function (obj, value) { obj.sender = value; } }, metadata: _metadata }, _sender_initializers, _sender_extraInitializers);
            __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
            __esDecorate(null, null, _body_decorators, { kind: "field", name: "body", static: false, private: false, access: { has: function (obj) { return "body" in obj; }, get: function (obj) { return obj.body; }, set: function (obj, value) { obj.body = value; } }, metadata: _metadata }, _body_initializers, _body_extraInitializers);
            __esDecorate(null, null, _batches_decorators, { kind: "field", name: "batches", static: false, private: false, access: { has: function (obj) { return "batches" in obj; }, get: function (obj) { return obj.batches; }, set: function (obj, value) { obj.batches = value; } }, metadata: _metadata }, _batches_initializers, _batches_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.NotificationMessages = NotificationMessages;

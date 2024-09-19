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
exports.NewsletterSubscription = void 0;
var typegoose_1 = require("@typegoose/typegoose");
var NewsletterSubscription = function () {
    var _a;
    var _newsletterId_decorators;
    var _newsletterId_initializers = [];
    var _newsletterId_extraInitializers = [];
    var _subscribers_decorators;
    var _subscribers_initializers = [];
    var _subscribers_extraInitializers = [];
    return _a = /** @class */ (function () {
            function NewsletterSubscription() {
                this.newsletterId = __runInitializers(this, _newsletterId_initializers, void 0);
                this.subscribers = (__runInitializers(this, _newsletterId_extraInitializers), __runInitializers(this, _subscribers_initializers, void 0));
                __runInitializers(this, _subscribers_extraInitializers);
            }
            return NewsletterSubscription;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _newsletterId_decorators = [(0, typegoose_1.prop)({ required: true })];
            _subscribers_decorators = [(0, typegoose_1.prop)({
                    required: true,
                    type: function () { return String; },
                })];
            __esDecorate(null, null, _newsletterId_decorators, { kind: "field", name: "newsletterId", static: false, private: false, access: { has: function (obj) { return "newsletterId" in obj; }, get: function (obj) { return obj.newsletterId; }, set: function (obj, value) { obj.newsletterId = value; } }, metadata: _metadata }, _newsletterId_initializers, _newsletterId_extraInitializers);
            __esDecorate(null, null, _subscribers_decorators, { kind: "field", name: "subscribers", static: false, private: false, access: { has: function (obj) { return "subscribers" in obj; }, get: function (obj) { return obj.subscribers; }, set: function (obj, value) { obj.subscribers = value; } }, metadata: _metadata }, _subscribers_initializers, _subscribers_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.NewsletterSubscription = NewsletterSubscription;

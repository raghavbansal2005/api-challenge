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
exports.AdmissionDecision = exports.DecisionResponse = exports.DecisionStatus = void 0;
var typegoose_1 = require("@typegoose/typegoose");
var DecisionStatus;
(function (DecisionStatus) {
    DecisionStatus["TBD"] = "TBD";
    DecisionStatus["ACCEPTED"] = "ACCEPTED";
    DecisionStatus["REJECTED"] = "REJECTED";
    DecisionStatus["WAITLISTED"] = "WAITLISTED";
})(DecisionStatus || (exports.DecisionStatus = DecisionStatus = {}));
var DecisionResponse;
(function (DecisionResponse) {
    DecisionResponse["PENDING"] = "PENDING";
    DecisionResponse["ACCEPTED"] = "ACCEPTED";
    DecisionResponse["DECLINED"] = "DECLINED";
})(DecisionResponse || (exports.DecisionResponse = DecisionResponse = {}));
var AdmissionDecision = function () {
    var _a;
    var _userId_decorators;
    var _userId_initializers = [];
    var _userId_extraInitializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _status_extraInitializers = [];
    var _admittedPro_decorators;
    var _admittedPro_initializers = [];
    var _admittedPro_extraInitializers = [];
    var _response_decorators;
    var _response_initializers = [];
    var _response_extraInitializers = [];
    var _emailSent_decorators;
    var _emailSent_initializers = [];
    var _emailSent_extraInitializers = [];
    var _reimbursementValue_decorators;
    var _reimbursementValue_initializers = [];
    var _reimbursementValue_extraInitializers = [];
    return _a = /** @class */ (function () {
            function AdmissionDecision() {
                this.userId = __runInitializers(this, _userId_initializers, void 0);
                this.status = (__runInitializers(this, _userId_extraInitializers), __runInitializers(this, _status_initializers, void 0));
                this.admittedPro = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _admittedPro_initializers, void 0));
                this.response = (__runInitializers(this, _admittedPro_extraInitializers), __runInitializers(this, _response_initializers, void 0));
                this.emailSent = (__runInitializers(this, _response_extraInitializers), __runInitializers(this, _emailSent_initializers, void 0));
                this.reimbursementValue = (__runInitializers(this, _emailSent_extraInitializers), __runInitializers(this, _reimbursementValue_initializers, void 0));
                __runInitializers(this, _reimbursementValue_extraInitializers);
            }
            return AdmissionDecision;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _userId_decorators = [(0, typegoose_1.prop)({ required: true })];
            _status_decorators = [(0, typegoose_1.prop)({ required: true })];
            _admittedPro_decorators = [(0, typegoose_1.prop)({ default: false })];
            _response_decorators = [(0, typegoose_1.prop)({ default: DecisionResponse.PENDING })];
            _emailSent_decorators = [(0, typegoose_1.prop)({ default: false })];
            _reimbursementValue_decorators = [(0, typegoose_1.prop)({ default: 0 })];
            __esDecorate(null, null, _userId_decorators, { kind: "field", name: "userId", static: false, private: false, access: { has: function (obj) { return "userId" in obj; }, get: function (obj) { return obj.userId; }, set: function (obj, value) { obj.userId = value; } }, metadata: _metadata }, _userId_initializers, _userId_extraInitializers);
            __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
            __esDecorate(null, null, _admittedPro_decorators, { kind: "field", name: "admittedPro", static: false, private: false, access: { has: function (obj) { return "admittedPro" in obj; }, get: function (obj) { return obj.admittedPro; }, set: function (obj, value) { obj.admittedPro = value; } }, metadata: _metadata }, _admittedPro_initializers, _admittedPro_extraInitializers);
            __esDecorate(null, null, _response_decorators, { kind: "field", name: "response", static: false, private: false, access: { has: function (obj) { return "response" in obj; }, get: function (obj) { return obj.response; }, set: function (obj, value) { obj.response = value; } }, metadata: _metadata }, _response_initializers, _response_extraInitializers);
            __esDecorate(null, null, _emailSent_decorators, { kind: "field", name: "emailSent", static: false, private: false, access: { has: function (obj) { return "emailSent" in obj; }, get: function (obj) { return obj.emailSent; }, set: function (obj, value) { obj.emailSent = value; } }, metadata: _metadata }, _emailSent_initializers, _emailSent_extraInitializers);
            __esDecorate(null, null, _reimbursementValue_decorators, { kind: "field", name: "reimbursementValue", static: false, private: false, access: { has: function (obj) { return "reimbursementValue" in obj; }, get: function (obj) { return obj.reimbursementValue; }, set: function (obj, value) { obj.reimbursementValue = value; } }, metadata: _metadata }, _reimbursementValue_initializers, _reimbursementValue_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.AdmissionDecision = AdmissionDecision;

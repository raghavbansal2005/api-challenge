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
exports.RegistrationApplication = void 0;
var typegoose_1 = require("@typegoose/typegoose");
var RegistrationApplication = function () {
    var _a;
    var _userId_decorators;
    var _userId_initializers = [];
    var _userId_extraInitializers = [];
    var _hasSubmitted_decorators;
    var _hasSubmitted_initializers = [];
    var _hasSubmitted_extraInitializers = [];
    var _isProApplicant_decorators;
    var _isProApplicant_initializers = [];
    var _isProApplicant_extraInitializers = [];
    var _preferredName_decorators;
    var _preferredName_initializers = [];
    var _preferredName_extraInitializers = [];
    var _legalName_decorators;
    var _legalName_initializers = [];
    var _legalName_extraInitializers = [];
    var _emailAddress_decorators;
    var _emailAddress_initializers = [];
    var _emailAddress_extraInitializers = [];
    var _gender_decorators;
    var _gender_initializers = [];
    var _gender_extraInitializers = [];
    var _race_decorators;
    var _race_initializers = [];
    var _race_extraInitializers = [];
    var _requestedTravelReimbursement_decorators;
    var _requestedTravelReimbursement_initializers = [];
    var _requestedTravelReimbursement_extraInitializers = [];
    var _location_decorators;
    var _location_initializers = [];
    var _location_extraInitializers = [];
    var _degree_decorators;
    var _degree_initializers = [];
    var _degree_extraInitializers = [];
    var _major_decorators;
    var _major_initializers = [];
    var _major_extraInitializers = [];
    var _minor_decorators;
    var _minor_initializers = [];
    var _minor_extraInitializers = [];
    var _university_decorators;
    var _university_initializers = [];
    var _university_extraInitializers = [];
    var _gradYear_decorators;
    var _gradYear_initializers = [];
    var _gradYear_extraInitializers = [];
    var _hackInterest_decorators;
    var _hackInterest_initializers = [];
    var _hackInterest_extraInitializers = [];
    var _hackOutreach_decorators;
    var _hackOutreach_initializers = [];
    var _hackOutreach_extraInitializers = [];
    var _dietaryRestrictions_decorators;
    var _dietaryRestrictions_initializers = [];
    var _dietaryRestrictions_extraInitializers = [];
    var _hackEssay1_decorators;
    var _hackEssay1_initializers = [];
    var _hackEssay1_extraInitializers = [];
    var _hackEssay2_decorators;
    var _hackEssay2_initializers = [];
    var _hackEssay2_extraInitializers = [];
    var _optionalEssay_decorators;
    var _optionalEssay_initializers = [];
    var _optionalEssay_extraInitializers = [];
    var _proEssay_decorators;
    var _proEssay_initializers = [];
    var _proEssay_extraInitializers = [];
    var _considerForGeneral_decorators;
    var _considerForGeneral_initializers = [];
    var _considerForGeneral_extraInitializers = [];
    return _a = /** @class */ (function () {
            function RegistrationApplication() {
                this.userId = __runInitializers(this, _userId_initializers, void 0);
                this.hasSubmitted = (__runInitializers(this, _userId_extraInitializers), __runInitializers(this, _hasSubmitted_initializers, void 0));
                this.isProApplicant = (__runInitializers(this, _hasSubmitted_extraInitializers), __runInitializers(this, _isProApplicant_initializers, void 0));
                this.preferredName = (__runInitializers(this, _isProApplicant_extraInitializers), __runInitializers(this, _preferredName_initializers, void 0));
                this.legalName = (__runInitializers(this, _preferredName_extraInitializers), __runInitializers(this, _legalName_initializers, void 0));
                this.emailAddress = (__runInitializers(this, _legalName_extraInitializers), __runInitializers(this, _emailAddress_initializers, void 0));
                this.gender = (__runInitializers(this, _emailAddress_extraInitializers), __runInitializers(this, _gender_initializers, void 0));
                this.race = (__runInitializers(this, _gender_extraInitializers), __runInitializers(this, _race_initializers, void 0));
                // Not required
                this.resumeFileName = __runInitializers(this, _race_extraInitializers);
                this.requestedTravelReimbursement = __runInitializers(this, _requestedTravelReimbursement_initializers, void 0);
                this.location = (__runInitializers(this, _requestedTravelReimbursement_extraInitializers), __runInitializers(this, _location_initializers, void 0));
                this.degree = (__runInitializers(this, _location_extraInitializers), __runInitializers(this, _degree_initializers, void 0));
                this.major = (__runInitializers(this, _degree_extraInitializers), __runInitializers(this, _major_initializers, void 0));
                this.minor = (__runInitializers(this, _major_extraInitializers), __runInitializers(this, _minor_initializers, void 0));
                this.university = (__runInitializers(this, _minor_extraInitializers), __runInitializers(this, _university_initializers, void 0));
                this.gradYear = (__runInitializers(this, _university_extraInitializers), __runInitializers(this, _gradYear_initializers, void 0));
                this.hackInterest = (__runInitializers(this, _gradYear_extraInitializers), __runInitializers(this, _hackInterest_initializers, void 0));
                this.hackOutreach = (__runInitializers(this, _hackInterest_extraInitializers), __runInitializers(this, _hackOutreach_initializers, void 0));
                this.dietaryRestrictions = (__runInitializers(this, _hackOutreach_extraInitializers), __runInitializers(this, _dietaryRestrictions_initializers, void 0));
                this.hackEssay1 = (__runInitializers(this, _dietaryRestrictions_extraInitializers), __runInitializers(this, _hackEssay1_initializers, void 0));
                this.hackEssay2 = (__runInitializers(this, _hackEssay1_extraInitializers), __runInitializers(this, _hackEssay2_initializers, void 0));
                this.optionalEssay = (__runInitializers(this, _hackEssay2_extraInitializers), __runInitializers(this, _optionalEssay_initializers, void 0));
                this.proEssay = (__runInitializers(this, _optionalEssay_extraInitializers), __runInitializers(this, _proEssay_initializers, void 0));
                this.considerForGeneral = (__runInitializers(this, _proEssay_extraInitializers), __runInitializers(this, _considerForGeneral_initializers, void 0));
                __runInitializers(this, _considerForGeneral_extraInitializers);
            }
            return RegistrationApplication;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _userId_decorators = [(0, typegoose_1.prop)({ required: true })];
            _hasSubmitted_decorators = [(0, typegoose_1.prop)({ default: false })];
            _isProApplicant_decorators = [(0, typegoose_1.prop)({ required: true })];
            _preferredName_decorators = [(0, typegoose_1.prop)({ required: true })];
            _legalName_decorators = [(0, typegoose_1.prop)({ required: true })];
            _emailAddress_decorators = [(0, typegoose_1.prop)({ required: true })];
            _gender_decorators = [(0, typegoose_1.prop)({ required: true })];
            _race_decorators = [(0, typegoose_1.prop)({
                    required: true,
                    type: function () { return String; },
                })];
            _requestedTravelReimbursement_decorators = [(0, typegoose_1.prop)({ required: true })];
            _location_decorators = [(0, typegoose_1.prop)({ required: true })];
            _degree_decorators = [(0, typegoose_1.prop)({ required: true })];
            _major_decorators = [(0, typegoose_1.prop)({ required: true })];
            _minor_decorators = [(0, typegoose_1.prop)({ required: false })];
            _university_decorators = [(0, typegoose_1.prop)({ required: true })];
            _gradYear_decorators = [(0, typegoose_1.prop)({ required: true })];
            _hackInterest_decorators = [(0, typegoose_1.prop)({
                    required: true,
                    type: function () { return String; },
                })];
            _hackOutreach_decorators = [(0, typegoose_1.prop)({
                    required: true,
                    type: function () { return String; },
                })];
            _dietaryRestrictions_decorators = [(0, typegoose_1.prop)({
                    required: true,
                    type: function () { return String; },
                })];
            _hackEssay1_decorators = [(0, typegoose_1.prop)({ required: true })];
            _hackEssay2_decorators = [(0, typegoose_1.prop)({ required: true })];
            _optionalEssay_decorators = [(0, typegoose_1.prop)({ required: true })];
            _proEssay_decorators = [(0, typegoose_1.prop)({ required: false })];
            _considerForGeneral_decorators = [(0, typegoose_1.prop)({ required: false })];
            __esDecorate(null, null, _userId_decorators, { kind: "field", name: "userId", static: false, private: false, access: { has: function (obj) { return "userId" in obj; }, get: function (obj) { return obj.userId; }, set: function (obj, value) { obj.userId = value; } }, metadata: _metadata }, _userId_initializers, _userId_extraInitializers);
            __esDecorate(null, null, _hasSubmitted_decorators, { kind: "field", name: "hasSubmitted", static: false, private: false, access: { has: function (obj) { return "hasSubmitted" in obj; }, get: function (obj) { return obj.hasSubmitted; }, set: function (obj, value) { obj.hasSubmitted = value; } }, metadata: _metadata }, _hasSubmitted_initializers, _hasSubmitted_extraInitializers);
            __esDecorate(null, null, _isProApplicant_decorators, { kind: "field", name: "isProApplicant", static: false, private: false, access: { has: function (obj) { return "isProApplicant" in obj; }, get: function (obj) { return obj.isProApplicant; }, set: function (obj, value) { obj.isProApplicant = value; } }, metadata: _metadata }, _isProApplicant_initializers, _isProApplicant_extraInitializers);
            __esDecorate(null, null, _preferredName_decorators, { kind: "field", name: "preferredName", static: false, private: false, access: { has: function (obj) { return "preferredName" in obj; }, get: function (obj) { return obj.preferredName; }, set: function (obj, value) { obj.preferredName = value; } }, metadata: _metadata }, _preferredName_initializers, _preferredName_extraInitializers);
            __esDecorate(null, null, _legalName_decorators, { kind: "field", name: "legalName", static: false, private: false, access: { has: function (obj) { return "legalName" in obj; }, get: function (obj) { return obj.legalName; }, set: function (obj, value) { obj.legalName = value; } }, metadata: _metadata }, _legalName_initializers, _legalName_extraInitializers);
            __esDecorate(null, null, _emailAddress_decorators, { kind: "field", name: "emailAddress", static: false, private: false, access: { has: function (obj) { return "emailAddress" in obj; }, get: function (obj) { return obj.emailAddress; }, set: function (obj, value) { obj.emailAddress = value; } }, metadata: _metadata }, _emailAddress_initializers, _emailAddress_extraInitializers);
            __esDecorate(null, null, _gender_decorators, { kind: "field", name: "gender", static: false, private: false, access: { has: function (obj) { return "gender" in obj; }, get: function (obj) { return obj.gender; }, set: function (obj, value) { obj.gender = value; } }, metadata: _metadata }, _gender_initializers, _gender_extraInitializers);
            __esDecorate(null, null, _race_decorators, { kind: "field", name: "race", static: false, private: false, access: { has: function (obj) { return "race" in obj; }, get: function (obj) { return obj.race; }, set: function (obj, value) { obj.race = value; } }, metadata: _metadata }, _race_initializers, _race_extraInitializers);
            __esDecorate(null, null, _requestedTravelReimbursement_decorators, { kind: "field", name: "requestedTravelReimbursement", static: false, private: false, access: { has: function (obj) { return "requestedTravelReimbursement" in obj; }, get: function (obj) { return obj.requestedTravelReimbursement; }, set: function (obj, value) { obj.requestedTravelReimbursement = value; } }, metadata: _metadata }, _requestedTravelReimbursement_initializers, _requestedTravelReimbursement_extraInitializers);
            __esDecorate(null, null, _location_decorators, { kind: "field", name: "location", static: false, private: false, access: { has: function (obj) { return "location" in obj; }, get: function (obj) { return obj.location; }, set: function (obj, value) { obj.location = value; } }, metadata: _metadata }, _location_initializers, _location_extraInitializers);
            __esDecorate(null, null, _degree_decorators, { kind: "field", name: "degree", static: false, private: false, access: { has: function (obj) { return "degree" in obj; }, get: function (obj) { return obj.degree; }, set: function (obj, value) { obj.degree = value; } }, metadata: _metadata }, _degree_initializers, _degree_extraInitializers);
            __esDecorate(null, null, _major_decorators, { kind: "field", name: "major", static: false, private: false, access: { has: function (obj) { return "major" in obj; }, get: function (obj) { return obj.major; }, set: function (obj, value) { obj.major = value; } }, metadata: _metadata }, _major_initializers, _major_extraInitializers);
            __esDecorate(null, null, _minor_decorators, { kind: "field", name: "minor", static: false, private: false, access: { has: function (obj) { return "minor" in obj; }, get: function (obj) { return obj.minor; }, set: function (obj, value) { obj.minor = value; } }, metadata: _metadata }, _minor_initializers, _minor_extraInitializers);
            __esDecorate(null, null, _university_decorators, { kind: "field", name: "university", static: false, private: false, access: { has: function (obj) { return "university" in obj; }, get: function (obj) { return obj.university; }, set: function (obj, value) { obj.university = value; } }, metadata: _metadata }, _university_initializers, _university_extraInitializers);
            __esDecorate(null, null, _gradYear_decorators, { kind: "field", name: "gradYear", static: false, private: false, access: { has: function (obj) { return "gradYear" in obj; }, get: function (obj) { return obj.gradYear; }, set: function (obj, value) { obj.gradYear = value; } }, metadata: _metadata }, _gradYear_initializers, _gradYear_extraInitializers);
            __esDecorate(null, null, _hackInterest_decorators, { kind: "field", name: "hackInterest", static: false, private: false, access: { has: function (obj) { return "hackInterest" in obj; }, get: function (obj) { return obj.hackInterest; }, set: function (obj, value) { obj.hackInterest = value; } }, metadata: _metadata }, _hackInterest_initializers, _hackInterest_extraInitializers);
            __esDecorate(null, null, _hackOutreach_decorators, { kind: "field", name: "hackOutreach", static: false, private: false, access: { has: function (obj) { return "hackOutreach" in obj; }, get: function (obj) { return obj.hackOutreach; }, set: function (obj, value) { obj.hackOutreach = value; } }, metadata: _metadata }, _hackOutreach_initializers, _hackOutreach_extraInitializers);
            __esDecorate(null, null, _dietaryRestrictions_decorators, { kind: "field", name: "dietaryRestrictions", static: false, private: false, access: { has: function (obj) { return "dietaryRestrictions" in obj; }, get: function (obj) { return obj.dietaryRestrictions; }, set: function (obj, value) { obj.dietaryRestrictions = value; } }, metadata: _metadata }, _dietaryRestrictions_initializers, _dietaryRestrictions_extraInitializers);
            __esDecorate(null, null, _hackEssay1_decorators, { kind: "field", name: "hackEssay1", static: false, private: false, access: { has: function (obj) { return "hackEssay1" in obj; }, get: function (obj) { return obj.hackEssay1; }, set: function (obj, value) { obj.hackEssay1 = value; } }, metadata: _metadata }, _hackEssay1_initializers, _hackEssay1_extraInitializers);
            __esDecorate(null, null, _hackEssay2_decorators, { kind: "field", name: "hackEssay2", static: false, private: false, access: { has: function (obj) { return "hackEssay2" in obj; }, get: function (obj) { return obj.hackEssay2; }, set: function (obj, value) { obj.hackEssay2 = value; } }, metadata: _metadata }, _hackEssay2_initializers, _hackEssay2_extraInitializers);
            __esDecorate(null, null, _optionalEssay_decorators, { kind: "field", name: "optionalEssay", static: false, private: false, access: { has: function (obj) { return "optionalEssay" in obj; }, get: function (obj) { return obj.optionalEssay; }, set: function (obj, value) { obj.optionalEssay = value; } }, metadata: _metadata }, _optionalEssay_initializers, _optionalEssay_extraInitializers);
            __esDecorate(null, null, _proEssay_decorators, { kind: "field", name: "proEssay", static: false, private: false, access: { has: function (obj) { return "proEssay" in obj; }, get: function (obj) { return obj.proEssay; }, set: function (obj, value) { obj.proEssay = value; } }, metadata: _metadata }, _proEssay_initializers, _proEssay_extraInitializers);
            __esDecorate(null, null, _considerForGeneral_decorators, { kind: "field", name: "considerForGeneral", static: false, private: false, access: { has: function (obj) { return "considerForGeneral" in obj; }, get: function (obj) { return obj.considerForGeneral; }, set: function (obj, value) { obj.considerForGeneral = value; } }, metadata: _metadata }, _considerForGeneral_initializers, _considerForGeneral_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.RegistrationApplication = RegistrationApplication;

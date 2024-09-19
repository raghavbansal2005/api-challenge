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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventFollowers = exports.EventAttendance = exports.Event = exports.Location = void 0;
var typegoose_1 = require("@typegoose/typegoose");
// Interface for the location of the event
var Location = function () {
    var _classDecorators = [(0, typegoose_1.modelOptions)({ schemaOptions: { _id: false } })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _tags_decorators;
    var _tags_initializers = [];
    var _tags_extraInitializers = [];
    var _latitude_decorators;
    var _latitude_initializers = [];
    var _latitude_extraInitializers = [];
    var _longitude_decorators;
    var _longitude_initializers = [];
    var _longitude_extraInitializers = [];
    var Location = _classThis = /** @class */ (function () {
        function Location_1() {
            this.description = __runInitializers(this, _description_initializers, void 0);
            this.tags = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _tags_initializers, void 0));
            this.latitude = (__runInitializers(this, _tags_extraInitializers), __runInitializers(this, _latitude_initializers, void 0));
            this.longitude = (__runInitializers(this, _latitude_extraInitializers), __runInitializers(this, _longitude_initializers, void 0));
            __runInitializers(this, _longitude_extraInitializers);
        }
        return Location_1;
    }());
    __setFunctionName(_classThis, "Location");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _description_decorators = [(0, typegoose_1.prop)({ required: true })];
        _tags_decorators = [(0, typegoose_1.prop)({
                required: true,
                type: function () { return String; },
            })];
        _latitude_decorators = [(0, typegoose_1.prop)({ required: true })];
        _longitude_decorators = [(0, typegoose_1.prop)({ required: true })];
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _tags_decorators, { kind: "field", name: "tags", static: false, private: false, access: { has: function (obj) { return "tags" in obj; }, get: function (obj) { return obj.tags; }, set: function (obj, value) { obj.tags = value; } }, metadata: _metadata }, _tags_initializers, _tags_extraInitializers);
        __esDecorate(null, null, _latitude_decorators, { kind: "field", name: "latitude", static: false, private: false, access: { has: function (obj) { return "latitude" in obj; }, get: function (obj) { return obj.latitude; }, set: function (obj, value) { obj.latitude = value; } }, metadata: _metadata }, _latitude_initializers, _latitude_extraInitializers);
        __esDecorate(null, null, _longitude_decorators, { kind: "field", name: "longitude", static: false, private: false, access: { has: function (obj) { return "longitude" in obj; }, get: function (obj) { return obj.longitude; }, set: function (obj, value) { obj.longitude = value; } }, metadata: _metadata }, _longitude_initializers, _longitude_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Location = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Location = _classThis;
}();
exports.Location = Location;
// Interface for the actual event
var Event = function () {
    var _a;
    var _eventId_decorators;
    var _eventId_initializers = [];
    var _eventId_extraInitializers = [];
    var _isStaff_decorators;
    var _isStaff_initializers = [];
    var _isStaff_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _startTime_decorators;
    var _startTime_initializers = [];
    var _startTime_extraInitializers = [];
    var _endTime_decorators;
    var _endTime_initializers = [];
    var _endTime_extraInitializers = [];
    var _eventType_decorators;
    var _eventType_initializers = [];
    var _eventType_extraInitializers = [];
    var _exp_decorators;
    var _exp_initializers = [];
    var _exp_extraInitializers = [];
    var _locations_decorators;
    var _locations_initializers = [];
    var _locations_extraInitializers = [];
    var _isAsync_decorators;
    var _isAsync_initializers = [];
    var _isAsync_extraInitializers = [];
    var _mapImageUrl_decorators;
    var _mapImageUrl_initializers = [];
    var _mapImageUrl_extraInitializers = [];
    var _sponsor_decorators;
    var _sponsor_initializers = [];
    var _sponsor_extraInitializers = [];
    var _points_decorators;
    var _points_initializers = [];
    var _points_extraInitializers = [];
    var _isPrivate_decorators;
    var _isPrivate_initializers = [];
    var _isPrivate_extraInitializers = [];
    var _displayOnStaffCheckIn_decorators;
    var _displayOnStaffCheckIn_initializers = [];
    var _displayOnStaffCheckIn_extraInitializers = [];
    var _isPro_decorators;
    var _isPro_initializers = [];
    var _isPro_extraInitializers = [];
    return _a = /** @class */ (function () {
            function Event() {
                this.eventId = __runInitializers(this, _eventId_initializers, void 0);
                this.isStaff = (__runInitializers(this, _eventId_extraInitializers), __runInitializers(this, _isStaff_initializers, void 0));
                this.name = (__runInitializers(this, _isStaff_extraInitializers), __runInitializers(this, _name_initializers, void 0));
                this.description = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _description_initializers, void 0));
                this.startTime = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _startTime_initializers, void 0));
                this.endTime = (__runInitializers(this, _startTime_extraInitializers), __runInitializers(this, _endTime_initializers, void 0));
                this.eventType = (__runInitializers(this, _endTime_extraInitializers), __runInitializers(this, _eventType_initializers, void 0));
                this.exp = (__runInitializers(this, _eventType_extraInitializers), __runInitializers(this, _exp_initializers, void 0));
                this.locations = (__runInitializers(this, _exp_extraInitializers), __runInitializers(this, _locations_initializers, void 0));
                this.isAsync = (__runInitializers(this, _locations_extraInitializers), __runInitializers(this, _isAsync_initializers, void 0));
                this.mapImageUrl = (__runInitializers(this, _isAsync_extraInitializers), __runInitializers(this, _mapImageUrl_initializers, void 0));
                this.sponsor = (__runInitializers(this, _mapImageUrl_extraInitializers), __runInitializers(this, _sponsor_initializers, void 0));
                this.points = (__runInitializers(this, _sponsor_extraInitializers), __runInitializers(this, _points_initializers, void 0));
                this.isPrivate = (__runInitializers(this, _points_extraInitializers), __runInitializers(this, _isPrivate_initializers, void 0));
                this.displayOnStaffCheckIn = (__runInitializers(this, _isPrivate_extraInitializers), __runInitializers(this, _displayOnStaffCheckIn_initializers, void 0));
                this.isPro = (__runInitializers(this, _displayOnStaffCheckIn_extraInitializers), __runInitializers(this, _isPro_initializers, void 0));
                __runInitializers(this, _isPro_extraInitializers);
            }
            return Event;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _eventId_decorators = [(0, typegoose_1.prop)({ required: true })];
            _isStaff_decorators = [(0, typegoose_1.prop)({ required: true })];
            _name_decorators = [(0, typegoose_1.prop)({ required: true })];
            _description_decorators = [(0, typegoose_1.prop)({ required: true })];
            _startTime_decorators = [(0, typegoose_1.prop)({ required: true })];
            _endTime_decorators = [(0, typegoose_1.prop)({ required: true })];
            _eventType_decorators = [(0, typegoose_1.prop)({ required: true })];
            _exp_decorators = [(0, typegoose_1.prop)({ required: false })];
            _locations_decorators = [(0, typegoose_1.prop)({
                    required: true,
                    type: function () { return Location; },
                })];
            _isAsync_decorators = [(0, typegoose_1.prop)({ required: true })];
            _mapImageUrl_decorators = [(0, typegoose_1.prop)({ required: false })];
            _sponsor_decorators = [(0, typegoose_1.prop)({ required: false })];
            _points_decorators = [(0, typegoose_1.prop)({ default: 0 })];
            _isPrivate_decorators = [(0, typegoose_1.prop)({ required: true, default: false })];
            _displayOnStaffCheckIn_decorators = [(0, typegoose_1.prop)({ required: false })];
            _isPro_decorators = [(0, typegoose_1.prop)({ default: false })];
            __esDecorate(null, null, _eventId_decorators, { kind: "field", name: "eventId", static: false, private: false, access: { has: function (obj) { return "eventId" in obj; }, get: function (obj) { return obj.eventId; }, set: function (obj, value) { obj.eventId = value; } }, metadata: _metadata }, _eventId_initializers, _eventId_extraInitializers);
            __esDecorate(null, null, _isStaff_decorators, { kind: "field", name: "isStaff", static: false, private: false, access: { has: function (obj) { return "isStaff" in obj; }, get: function (obj) { return obj.isStaff; }, set: function (obj, value) { obj.isStaff = value; } }, metadata: _metadata }, _isStaff_initializers, _isStaff_extraInitializers);
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
            __esDecorate(null, null, _startTime_decorators, { kind: "field", name: "startTime", static: false, private: false, access: { has: function (obj) { return "startTime" in obj; }, get: function (obj) { return obj.startTime; }, set: function (obj, value) { obj.startTime = value; } }, metadata: _metadata }, _startTime_initializers, _startTime_extraInitializers);
            __esDecorate(null, null, _endTime_decorators, { kind: "field", name: "endTime", static: false, private: false, access: { has: function (obj) { return "endTime" in obj; }, get: function (obj) { return obj.endTime; }, set: function (obj, value) { obj.endTime = value; } }, metadata: _metadata }, _endTime_initializers, _endTime_extraInitializers);
            __esDecorate(null, null, _eventType_decorators, { kind: "field", name: "eventType", static: false, private: false, access: { has: function (obj) { return "eventType" in obj; }, get: function (obj) { return obj.eventType; }, set: function (obj, value) { obj.eventType = value; } }, metadata: _metadata }, _eventType_initializers, _eventType_extraInitializers);
            __esDecorate(null, null, _exp_decorators, { kind: "field", name: "exp", static: false, private: false, access: { has: function (obj) { return "exp" in obj; }, get: function (obj) { return obj.exp; }, set: function (obj, value) { obj.exp = value; } }, metadata: _metadata }, _exp_initializers, _exp_extraInitializers);
            __esDecorate(null, null, _locations_decorators, { kind: "field", name: "locations", static: false, private: false, access: { has: function (obj) { return "locations" in obj; }, get: function (obj) { return obj.locations; }, set: function (obj, value) { obj.locations = value; } }, metadata: _metadata }, _locations_initializers, _locations_extraInitializers);
            __esDecorate(null, null, _isAsync_decorators, { kind: "field", name: "isAsync", static: false, private: false, access: { has: function (obj) { return "isAsync" in obj; }, get: function (obj) { return obj.isAsync; }, set: function (obj, value) { obj.isAsync = value; } }, metadata: _metadata }, _isAsync_initializers, _isAsync_extraInitializers);
            __esDecorate(null, null, _mapImageUrl_decorators, { kind: "field", name: "mapImageUrl", static: false, private: false, access: { has: function (obj) { return "mapImageUrl" in obj; }, get: function (obj) { return obj.mapImageUrl; }, set: function (obj, value) { obj.mapImageUrl = value; } }, metadata: _metadata }, _mapImageUrl_initializers, _mapImageUrl_extraInitializers);
            __esDecorate(null, null, _sponsor_decorators, { kind: "field", name: "sponsor", static: false, private: false, access: { has: function (obj) { return "sponsor" in obj; }, get: function (obj) { return obj.sponsor; }, set: function (obj, value) { obj.sponsor = value; } }, metadata: _metadata }, _sponsor_initializers, _sponsor_extraInitializers);
            __esDecorate(null, null, _points_decorators, { kind: "field", name: "points", static: false, private: false, access: { has: function (obj) { return "points" in obj; }, get: function (obj) { return obj.points; }, set: function (obj, value) { obj.points = value; } }, metadata: _metadata }, _points_initializers, _points_extraInitializers);
            __esDecorate(null, null, _isPrivate_decorators, { kind: "field", name: "isPrivate", static: false, private: false, access: { has: function (obj) { return "isPrivate" in obj; }, get: function (obj) { return obj.isPrivate; }, set: function (obj, value) { obj.isPrivate = value; } }, metadata: _metadata }, _isPrivate_initializers, _isPrivate_extraInitializers);
            __esDecorate(null, null, _displayOnStaffCheckIn_decorators, { kind: "field", name: "displayOnStaffCheckIn", static: false, private: false, access: { has: function (obj) { return "displayOnStaffCheckIn" in obj; }, get: function (obj) { return obj.displayOnStaffCheckIn; }, set: function (obj, value) { obj.displayOnStaffCheckIn = value; } }, metadata: _metadata }, _displayOnStaffCheckIn_initializers, _displayOnStaffCheckIn_extraInitializers);
            __esDecorate(null, null, _isPro_decorators, { kind: "field", name: "isPro", static: false, private: false, access: { has: function (obj) { return "isPro" in obj; }, get: function (obj) { return obj.isPro; }, set: function (obj, value) { obj.isPro = value; } }, metadata: _metadata }, _isPro_initializers, _isPro_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.Event = Event;
var EventAttendance = function () {
    var _a;
    var _eventId_decorators;
    var _eventId_initializers = [];
    var _eventId_extraInitializers = [];
    var _attendees_decorators;
    var _attendees_initializers = [];
    var _attendees_extraInitializers = [];
    return _a = /** @class */ (function () {
            function EventAttendance() {
                this.eventId = __runInitializers(this, _eventId_initializers, void 0);
                this.attendees = (__runInitializers(this, _eventId_extraInitializers), __runInitializers(this, _attendees_initializers, void 0));
                __runInitializers(this, _attendees_extraInitializers);
            }
            return EventAttendance;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _eventId_decorators = [(0, typegoose_1.prop)({ required: true })];
            _attendees_decorators = [(0, typegoose_1.prop)({
                    required: true,
                    type: function () { return String; },
                })];
            __esDecorate(null, null, _eventId_decorators, { kind: "field", name: "eventId", static: false, private: false, access: { has: function (obj) { return "eventId" in obj; }, get: function (obj) { return obj.eventId; }, set: function (obj, value) { obj.eventId = value; } }, metadata: _metadata }, _eventId_initializers, _eventId_extraInitializers);
            __esDecorate(null, null, _attendees_decorators, { kind: "field", name: "attendees", static: false, private: false, access: { has: function (obj) { return "attendees" in obj; }, get: function (obj) { return obj.attendees; }, set: function (obj, value) { obj.attendees = value; } }, metadata: _metadata }, _attendees_initializers, _attendees_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.EventAttendance = EventAttendance;
var EventFollowers = function () {
    var _a;
    var _eventId_decorators;
    var _eventId_initializers = [];
    var _eventId_extraInitializers = [];
    var _followers_decorators;
    var _followers_initializers = [];
    var _followers_extraInitializers = [];
    return _a = /** @class */ (function () {
            function EventFollowers() {
                this.eventId = __runInitializers(this, _eventId_initializers, void 0);
                this.followers = (__runInitializers(this, _eventId_extraInitializers), __runInitializers(this, _followers_initializers, void 0));
                __runInitializers(this, _followers_extraInitializers);
            }
            return EventFollowers;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _eventId_decorators = [(0, typegoose_1.prop)({ required: true })];
            _followers_decorators = [(0, typegoose_1.prop)({
                    required: true,
                    type: function () { return String; },
                })];
            __esDecorate(null, null, _eventId_decorators, { kind: "field", name: "eventId", static: false, private: false, access: { has: function (obj) { return "eventId" in obj; }, get: function (obj) { return obj.eventId; }, set: function (obj, value) { obj.eventId = value; } }, metadata: _metadata }, _eventId_initializers, _eventId_extraInitializers);
            __esDecorate(null, null, _followers_decorators, { kind: "field", name: "followers", static: false, private: false, access: { has: function (obj) { return "followers" in obj; }, get: function (obj) { return obj.followers; }, set: function (obj, value) { obj.followers = value; } }, metadata: _metadata }, _followers_initializers, _followers_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.EventFollowers = EventFollowers;

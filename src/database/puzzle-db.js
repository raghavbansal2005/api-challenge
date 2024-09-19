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
exports.PuzzleItem = void 0;
var typegoose_1 = require("@typegoose/typegoose");
var PuzzleItem = function () {
    var _a;
    var _userId_decorators;
    var _userId_initializers = [];
    var _userId_extraInitializers = [];
    var _teamName_decorators;
    var _teamName_initializers = [];
    var _teamName_extraInitializers = [];
    var _lastCorrect_decorators;
    var _lastCorrect_initializers = [];
    var _lastCorrect_extraInitializers = [];
    var _score_decorators;
    var _score_initializers = [];
    var _score_extraInitializers = [];
    var _problemComplete_decorators;
    var _problemComplete_initializers = [];
    var _problemComplete_extraInitializers = [];
    return _a = /** @class */ (function () {
            function PuzzleItem(userId, teamName, lastCorrect, score, problemComplete) {
                this.userId = __runInitializers(this, _userId_initializers, void 0);
                this.teamName = (__runInitializers(this, _userId_extraInitializers), __runInitializers(this, _teamName_initializers, void 0));
                this.lastCorrect = (__runInitializers(this, _teamName_extraInitializers), __runInitializers(this, _lastCorrect_initializers, void 0));
                this.score = (__runInitializers(this, _lastCorrect_extraInitializers), __runInitializers(this, _score_initializers, void 0));
                this.problemComplete = (__runInitializers(this, _score_extraInitializers), __runInitializers(this, _problemComplete_initializers, void 0));
                __runInitializers(this, _problemComplete_extraInitializers);
                this.userId = userId;
                this.teamName = teamName;
                this.lastCorrect = lastCorrect;
                this.problemComplete = problemComplete;
                this.score = score;
            }
            return PuzzleItem;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _userId_decorators = [(0, typegoose_1.prop)({ required: true })];
            _teamName_decorators = [(0, typegoose_1.prop)({ required: true })];
            _lastCorrect_decorators = [(0, typegoose_1.prop)({ required: true })];
            _score_decorators = [(0, typegoose_1.prop)({ required: true })];
            _problemComplete_decorators = [(0, typegoose_1.prop)({
                    required: true,
                    type: function () { return Boolean; },
                })];
            __esDecorate(null, null, _userId_decorators, { kind: "field", name: "userId", static: false, private: false, access: { has: function (obj) { return "userId" in obj; }, get: function (obj) { return obj.userId; }, set: function (obj, value) { obj.userId = value; } }, metadata: _metadata }, _userId_initializers, _userId_extraInitializers);
            __esDecorate(null, null, _teamName_decorators, { kind: "field", name: "teamName", static: false, private: false, access: { has: function (obj) { return "teamName" in obj; }, get: function (obj) { return obj.teamName; }, set: function (obj, value) { obj.teamName = value; } }, metadata: _metadata }, _teamName_initializers, _teamName_extraInitializers);
            __esDecorate(null, null, _lastCorrect_decorators, { kind: "field", name: "lastCorrect", static: false, private: false, access: { has: function (obj) { return "lastCorrect" in obj; }, get: function (obj) { return obj.lastCorrect; }, set: function (obj, value) { obj.lastCorrect = value; } }, metadata: _metadata }, _lastCorrect_initializers, _lastCorrect_extraInitializers);
            __esDecorate(null, null, _score_decorators, { kind: "field", name: "score", static: false, private: false, access: { has: function (obj) { return "score" in obj; }, get: function (obj) { return obj.score; }, set: function (obj, value) { obj.score = value; } }, metadata: _metadata }, _score_initializers, _score_extraInitializers);
            __esDecorate(null, null, _problemComplete_decorators, { kind: "field", name: "problemComplete", static: false, private: false, access: { has: function (obj) { return "problemComplete" in obj; }, get: function (obj) { return obj.problemComplete; }, set: function (obj, value) { obj.problemComplete = value; } }, metadata: _metadata }, _problemComplete_initializers, _problemComplete_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.PuzzleItem = PuzzleItem;

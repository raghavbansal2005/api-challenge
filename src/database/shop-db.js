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
exports.ShopItem = void 0;
var typegoose_1 = require("@typegoose/typegoose");
var ShopItem = function () {
    var _a;
    var _itemId_decorators;
    var _itemId_initializers = [];
    var _itemId_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _price_decorators;
    var _price_initializers = [];
    var _price_extraInitializers = [];
    var _isRaffle_decorators;
    var _isRaffle_initializers = [];
    var _isRaffle_extraInitializers = [];
    var _imageURL_decorators;
    var _imageURL_initializers = [];
    var _imageURL_extraInitializers = [];
    var _quantity_decorators;
    var _quantity_initializers = [];
    var _quantity_extraInitializers = [];
    var _instances_decorators;
    var _instances_initializers = [];
    var _instances_extraInitializers = [];
    return _a = /** @class */ (function () {
            function ShopItem(itemId, name, price, isRaffle, imageURL, quantity, instances) {
                this.itemId = __runInitializers(this, _itemId_initializers, void 0);
                this.name = (__runInitializers(this, _itemId_extraInitializers), __runInitializers(this, _name_initializers, void 0));
                this.price = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _price_initializers, void 0));
                this.isRaffle = (__runInitializers(this, _price_extraInitializers), __runInitializers(this, _isRaffle_initializers, void 0));
                this.imageURL = (__runInitializers(this, _isRaffle_extraInitializers), __runInitializers(this, _imageURL_initializers, void 0));
                this.quantity = (__runInitializers(this, _imageURL_extraInitializers), __runInitializers(this, _quantity_initializers, void 0));
                this.instances = (__runInitializers(this, _quantity_extraInitializers), __runInitializers(this, _instances_initializers, void 0));
                __runInitializers(this, _instances_extraInitializers);
                this.itemId = itemId;
                this.name = name;
                this.price = price;
                this.isRaffle = isRaffle;
                this.imageURL = imageURL;
                this.quantity = quantity;
                this.instances = instances;
            }
            return ShopItem;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _itemId_decorators = [(0, typegoose_1.prop)({ required: true })];
            _name_decorators = [(0, typegoose_1.prop)({ required: true })];
            _price_decorators = [(0, typegoose_1.prop)({ required: true })];
            _isRaffle_decorators = [(0, typegoose_1.prop)({ required: true })];
            _imageURL_decorators = [(0, typegoose_1.prop)({ required: true })];
            _quantity_decorators = [(0, typegoose_1.prop)({ required: true })];
            _instances_decorators = [(0, typegoose_1.prop)({
                    required: true,
                    type: function () { return String; },
                })];
            __esDecorate(null, null, _itemId_decorators, { kind: "field", name: "itemId", static: false, private: false, access: { has: function (obj) { return "itemId" in obj; }, get: function (obj) { return obj.itemId; }, set: function (obj, value) { obj.itemId = value; } }, metadata: _metadata }, _itemId_initializers, _itemId_extraInitializers);
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _price_decorators, { kind: "field", name: "price", static: false, private: false, access: { has: function (obj) { return "price" in obj; }, get: function (obj) { return obj.price; }, set: function (obj, value) { obj.price = value; } }, metadata: _metadata }, _price_initializers, _price_extraInitializers);
            __esDecorate(null, null, _isRaffle_decorators, { kind: "field", name: "isRaffle", static: false, private: false, access: { has: function (obj) { return "isRaffle" in obj; }, get: function (obj) { return obj.isRaffle; }, set: function (obj, value) { obj.isRaffle = value; } }, metadata: _metadata }, _isRaffle_initializers, _isRaffle_extraInitializers);
            __esDecorate(null, null, _imageURL_decorators, { kind: "field", name: "imageURL", static: false, private: false, access: { has: function (obj) { return "imageURL" in obj; }, get: function (obj) { return obj.imageURL; }, set: function (obj, value) { obj.imageURL = value; } }, metadata: _metadata }, _imageURL_initializers, _imageURL_extraInitializers);
            __esDecorate(null, null, _quantity_decorators, { kind: "field", name: "quantity", static: false, private: false, access: { has: function (obj) { return "quantity" in obj; }, get: function (obj) { return obj.quantity; }, set: function (obj, value) { obj.quantity = value; } }, metadata: _metadata }, _quantity_initializers, _quantity_extraInitializers);
            __esDecorate(null, null, _instances_decorators, { kind: "field", name: "instances", static: false, private: false, access: { has: function (obj) { return "instances" in obj; }, get: function (obj) { return obj.instances; }, set: function (obj, value) { obj.instances = value; } }, metadata: _metadata }, _instances_initializers, _instances_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.ShopItem = ShopItem;

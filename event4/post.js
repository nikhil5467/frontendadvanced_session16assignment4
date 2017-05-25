"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var post = (function () {
    function post() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], post.prototype, "data", void 0);
    post = __decorate([
        core_1.Component({
            selector: 'post',
            template: "<div class=\"panel-body\">\n                   {{data.userId}}\n                   <br/>\n                   {{data.id}}\n                    <br/>\n                   {{data.title}}\n                    <br/>\n                   {{data.body}}\n                    <br/>\n    </div>\n\n\n   "
        }), 
        __metadata('design:paramtypes', [])
    ], post);
    return post;
}());
exports.post = post;
//# sourceMappingURL=post.js.map
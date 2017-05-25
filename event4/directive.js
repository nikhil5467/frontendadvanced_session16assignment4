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
var core_2 = require('@angular/core');
var high = (function () {
    function high(e) {
        this.e = e;
    }
    high.prototype.ngOnInit = function () {
        var self = this;
        this.e.nativeElement.onmouseover = function () {
            self.e.nativeElement.style.color = 'red';
        };
        this.e.nativeElement.onmouseout = function () {
            self.e.nativeElement.style.color = null;
        };
    };
    high = __decorate([
        core_1.Directive({
            selector: '[high]'
        }), 
        __metadata('design:paramtypes', [core_2.ElementRef])
    ], high);
    return high;
}());
exports.high = high;
//# sourceMappingURL=directive.js.map
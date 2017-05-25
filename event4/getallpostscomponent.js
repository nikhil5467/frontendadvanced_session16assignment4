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
var router_1 = require('@angular/router');
require('rxjs/Rx');
var http_1 = require('@angular/http');
var getallpostscomponent = (function () {
    function getallpostscomponent(r, http) {
        this.r = r;
        this.http = http;
        this.result = [];
    }
    getallpostscomponent.prototype.getallpost = function () {
        var _this = this;
        var ob = this.http.get('https://jsonplaceholder.typicode.com/posts').map(function (r) { return r.json(); });
        ob.subscribe(function (d) { _this.result = d; }, function (error) { return console.log("ERROR IS: " + error); });
    };
    getallpostscomponent.prototype.handle = function (p) {
        this.selectedpost = p;
    };
    getallpostscomponent = __decorate([
        core_1.Component({
            selector: 'allpost',
            template: "<button class=\"btn btn-default\" (click)='getallpost()'>Display post</button>\n               <post [data] = 'selectedpost' *ngIf='selectedpost!==undefined'></post>\n               <table class='table'>\n                            <thead>\n                                <tr>\n                                    <td align='center'>Userid</td>\n                                    <td align='center'>Id Description</td>\n                                    <td align='center'>Title </td>\n                                     <td align='center'>Body </td>\n                                     \n                                </tr>\n                            </thead>\n                        \n                            <tr high *ngFor=\"let p of result\">\n                                <td  align='center'>{{p.userId}}</td>\n                                <td  align='center'>{{p.id}}</td>\n                                <td  align='center'>{{p.title}}</td>\n                                <td  align='center'>{{p.body}}</td>\n                                 <td  align='center'><button (click) = \"handle(p)\"> Select</button></td>\n                            </tr>\n                        </table>\n    \n    "
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], getallpostscomponent);
    return getallpostscomponent;
}());
exports.getallpostscomponent = getallpostscomponent;
//# sourceMappingURL=getallpostscomponent.js.map
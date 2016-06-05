System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MyvoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyvoteComponent = (function () {
                function MyvoteComponent() {
                    this.total = 0;
                    this.myVote = 0;
                    this.vote = new core_1.EventEmitter();
                }
                MyvoteComponent.prototype.onClickUp = function () {
                    if (this.myVote == 1) {
                        return;
                    }
                    this.myVote++;
                    this.vote.emit({ myvote: this.myVote });
                };
                MyvoteComponent.prototype.onClickDown = function () {
                    console.log("logged");
                    if (this.myVote == -1) {
                        return;
                    }
                    this.myVote--;
                    this.vote.emit({ myvote: this.myVote });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MyvoteComponent.prototype, "total", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MyvoteComponent.prototype, "myVote", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MyvoteComponent.prototype, "vote", void 0);
                MyvoteComponent = __decorate([
                    core_1.Component({
                        selector: 'voter',
                        template: "\n                <div style=\"width: 20px; margin-left: 20px\">\n                    <i class=\"glyphicon glyphicon-chevron-up big\" (click)=\"onClickUp()\"></i>\n                    <span class=\"small a\">{{ total + myVote }}</span>\n                    <i class=\"glyphicon glyphicon-chevron-down big\" (click)=\"onClickDown()\"></i>\n                </div>\n    ",
                        styles: [
                            "\n         .big{\n             font-size: 5em;\n             \n         } \n         i:hover {\n             cursor:pointer;\n             color:orange;\n         }\n         .small{\n             font-size: 4em;\n             text-align:center;\n         }   \n        "
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyvoteComponent);
                return MyvoteComponent;
            }());
            exports_1("MyvoteComponent", MyvoteComponent);
        }
    }
});
//# sourceMappingURL=vote.component.js.map
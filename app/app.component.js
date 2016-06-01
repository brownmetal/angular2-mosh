System.register(['@angular/core', './courses.component', './author.component', './star.component'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, author_component_1, star_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (author_component_1_1) {
                author_component_1 = author_component_1_1;
            },
            function (star_component_1_1) {
                star_component_1 = star_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "Angular with Mosh";
                    this.isActive = true;
                }
                AppComponent.prototype.onDivClick = function () {
                    console.log('Click propagated to the Div');
                };
                AppComponent.prototype.onClick = function ($event) {
                    $event.stopPropagation();
                    console.log("Button Clicked!", $event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<h1>Welcome to Angular2</h1><courses></courses><author></author>\n                <button class=\"btn btn-primary\" [class.active]=\"isActive\" [style.backgroundColor]=\"isActive ? 'blue':'red'\">Submit</button>\n                <div (click)=\"onDivClick()\">\n                <button class=\"btn btn-success\" (click)=\"onClick($event)\">Click Me</button>\n                <input type=\"text\" [(ngModel)] = \"title\" />\n                Preview: {{title}}\n                </div>\n                <star-fav></star-fav>\n    ",
                        directives: [courses_component_1.CoursesComponent, author_component_1.AuthorComponent, star_component_1.StarComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
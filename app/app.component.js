System.register(['@angular/core', './courses.component', './author.component', './star.component', './twitterlike.component', './vote.component'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, author_component_1, star_component_1, twitterlike_component_1, vote_component_1;
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
            },
            function (twitterlike_component_1_1) {
                twitterlike_component_1 = twitterlike_component_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.votesDB = {
                        totalVotes: 10,
                        uservote: 0
                    };
                    this.tweet = {
                        totallikes: 10,
                        ilikes: 0
                    };
                    this.post = {
                        title: "Input Properties",
                        isFavorite: true
                    };
                    this.title = "Angular with Mosh";
                    this.isActive = true;
                }
                AppComponent.prototype.voted = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.CompoChange = function ($event) {
                    console.log($event);
                };
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
                        template: "\n                <h1>Welcome to Angular2</h1>\n<courses></courses>\n<author></author>\n<voter [total]=\"votesDB.totalVotes\" [myVote]=\"votesDB.uservote\" (vote)=\"voted($event)\">\n\n</voter>\n\n<button class=\"btn btn-primary\" [class.active]=\"isActive\" [style.backgroundColor]=\"isActive ? 'blue':'red'\">Submit</button>\n<div (click)=\"onDivClick()\">\n    <button class=\"btn btn-success\" (click)=\"onClick($event)\">Click Me</button>\n    <input type=\"text\" [(ngModel)]=\"title\" /> Preview: {{title}}\n</div>\n<star-fav [isFavourite]=\"post.isFavorite\" (change)=\"CompoChange($event)\"></star-fav>\n    <gl-heart [totalLikes]=\"tweet.totallikes\" [ilike]=\"tweet.ilikes\"></gl-heart>\n    \n    ",
                        directives: [courses_component_1.CoursesComponent, author_component_1.AuthorComponent, star_component_1.StarComponent, twitterlike_component_1.TwitterLike, vote_component_1.MyvoteComponent]
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
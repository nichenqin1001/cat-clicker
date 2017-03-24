require('knockout');

(function () {

    var Cat = function (name) {
        this.name = name;
        this.src = '../images/' + this.name + '.jpg';
        this.clickCount = 0;
    };

    var ViewModel = function () {
        var self = this;

        this.catList = ko.observableArray([
            new Cat('beauty'),
            new Cat('candy'),
            new Cat('lion'),
            new Cat('momo'),
            new Cat('natsume')
        ]);

        this.currentCat = ko.observable(this.catList()[0]);

        this.switchCat = function () {
            self.currentCat(this);
        };

        this.clickCounter = function () {
            this.clickCount++;
            self.currentCat(this);
        };

        this.adminArea = ko.observable(false);

        this.toggleAdminArea = function () {
            this.adminArea(!this.adminArea());
        };
    };

    ko.applyBindings(new ViewModel());

}());

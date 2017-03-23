require('jquery');

$(function () {

    var Cat = function (name) {
        this.name = name;
        this.src = '../images/' + this.name + '.jpg';
        this.clickCount = 0;
    };

    var model = {

        init: function () {
            this.index = 0;
            this.cats = [
                new Cat('beauty'),
                new Cat('candy'),
                new Cat('lion'),
                new Cat('momo'),
                new Cat('natsume')
            ];
        },

        getAllCats: function () {
            return this.cats;
        },

        currentCat: function () {
            return this.cats[this.index];
        }

    };

    var octopus = {

        init: function () {
            model.init();
            view.init();
            adminView.init();
        },

        getCats: function () {
            return model.getAllCats();
        },

        getCurrentCat: function () {
            return model.currentCat();
        },

        changeIndex: function (index) {
            model.index = index;
        },

        changeClickCount: function () {
            var currentCat = octopus.getCurrentCat();
            currentCat.clickCount++;
            view.$catCounter.text(currentCat.clickCount);
        },

        showAdminArea: function () {
            adminView.$adminArea.show();
        },

        hideAdminArea: function () {
            adminView.$adminArea.hide();
        },

    };

    var view = {

        init: function () {
            this.$navBar = $('#navBar');
            this.$container = $('#container');

            this.renderCategory();
            this.renderCat();

            this.$catCategory = $('.cat__category');
            this.categoryClicker();

        },

        renderCategory: function () {
            var htmlStr = '';
            octopus.getCats().forEach(function (cat, index) {
                htmlStr += `
                    <img class="cat__category"
                    src="${cat.src}"
                    cat-index="${index}"
                    />
                `;
            });
            this.$navBar.html(htmlStr);

        },

        renderCat: function () {
            var currentCat = octopus.getCurrentCat();
            var htmlStr = `
                <img class="cat__img"
                src="${currentCat.src}">
                <div class="cat__name">
                ${currentCat.name}
                </div>
                <div class="cat__counter">
                ${currentCat.clickCount}
                </div>
            `;
            this.$container.html(htmlStr);

            this.$catImg = $('.cat__img');
            this.$catCounter = $('.cat__counter');
            view.imgClicker();
        },

        categoryClicker: function () {
            this.$catCategory.on('click', function () {

                var $this = $(this);
                var index = $this.attr('cat-index');

                octopus.changeIndex(index);
                view.renderCat();
                adminView.renderInput();
            });
        },

        imgClicker: function () {
            this.$catImg.on('click', function () {
                octopus.changeClickCount();
                adminView.renderInput();
            });
        }

    };

    var adminView = {

        init: function () {
            this.$adminBtn = $('#adminBtn');
            this.$adminArea = $('#adminArea');
            this.$catName = $('#catName');
            this.$catSrc = $('#catSrc');
            this.$clickCount = $('#clickCount');
            this.$adminConfirm = $('#adminConfirm');
            this.$adminCancel = $('#adminCancel');

            this.$adminBtn.on('click', function () {
                octopus.showAdminArea();
                adminView.renderInput();
            });

            this.$adminCancel.on('click', function () {
                octopus.hideAdminArea();
            });

            this.$adminConfirm.on('click', function () {
                var newName = adminView.$catName.val();
                var newSrc = adminView.$catSrc.val();
                var newCount = adminView.$clickCount.val();

                var cats = octopus.getCats();
                cats.forEach(function (cat, index) {
                    if (newName === cat.name) {
                        octopus.changeIndex(index);
                        view.renderCat();
                        adminView.renderInput();
                    }
                });
            });
        },

        renderInput: function () {
            var currentCat = octopus.getCurrentCat();
            this.$catName.val(currentCat.name);
            this.$catSrc.val(currentCat.src);
            this.$clickCount.val(currentCat.clickCount);
        }

    };

    octopus.init();

});

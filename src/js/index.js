function getDomNodeArray(selector) {
    var elemCollection = document.querySelectorAll(selector);

    var elemArray = Array.prototype.slice.apply(elemCollection);

    return elemArray;
}

var Cat = function (name) {
    this.name = name;
    this.src = '../images/' + this.name + '.jpg';
    this.count = 0;
};

Cat.prototype.renderNav = function (navBar, index) {
    var catCategory = document.createElement('img');
    catCategory.className = 'cat__category';
    catCategory.src = this.src;
    catCategory.setAttribute('cat-index', index);
    navBar.appendChild(catCategory);
};

Cat.prototype.renderContainer = function (container, index) {
    var catContainer = document.createElement('div');
    container.appendChild(catContainer);
    catContainer.classList.add('cat__container');

    var catImg = document.createElement('img');
    catContainer.appendChild(catImg);
    catImg.classList.add('cat__img');
    catImg.setAttribute('cat-index', index);
    catImg.src = this.src;

    var catName = document.createElement('div');
    catContainer.appendChild(catName);
    catName.classList.add('cat__name');
    catName.innerText = this.name;

    var catCounter = document.createElement('div');
    catContainer.appendChild(catCounter);
    catCounter.classList.add('cat__counter');
    catCounter.innerText = this.count;

};

document.addEventListener('DOMContentLoaded', function () {
    // 实例化五只猫
    var cats = [
        new Cat('candy'),
        new Cat('momo'),
        new Cat('natsume'),
        new Cat('lion'),
        new Cat('beauty')
    ];

    // 分别获取左侧nav区域及右侧container区域
    var navBar = document.querySelector('#navBar');
    var container = document.querySelector('#container');

    // 在navbar中显示创建所有五只猫
    for (var c = 0; c < cats.length; c++) {
        var cat = cats[c];
        cat.renderNav(navBar, c);
    }

    // 初次进入时在屏幕右侧container区域绘制一只猫
    cats[0].renderContainer(container, 0);

    // 为navbar中所有照片添加点击事件 
    var catCategories = getDomNodeArray('.cat__category');

    catCategories.forEach(function (catCategory) {
        catCategory.addEventListener('click', function () {
            container.innerHTML = "";
            var index = this.getAttribute('cat-index');
            cats[index].renderContainer(container, index);

            // 每次更新猫咪后重新设置点击事件
            catClicker();
        });
    });

    // 为猫咪照片添加点击照片
    function catClicker() {
        var catImg = document.querySelector('.cat__img');
        var catCounter = document.querySelector('.cat__counter');

        catImg.addEventListener('click', function () {
            var index = this.getAttribute('cat-index');
            cats[index].count++;
            catCounter.textContent = cats[index].count;
        });
    }

    catClicker();

});

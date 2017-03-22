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

Cat.prototype.render = function (container, index) {
    var catContainer = document.createElement('div');
    container.appendChild(catContainer);
    catContainer.classList.add('cat__container');

    var catImg = document.createElement('img');
    catContainer.appendChild(catImg);
    catImg.classList.add('cat__img');
    catImg.src = this.src;
    catImg.setAttribute('cat-index', index);

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
    var cats = [new Cat('candy'), new Cat('momo')];

    var container = document.querySelector('.container');
    for (var c = 0; c < cats.length; c++) {
        var cat = cats[c];
        cat.render(container, c);
    }

    var catImgs = getDomNodeArray('.cat__img');
    var catCounters = getDomNodeArray('.cat__counter');

    catImgs.forEach(function (catImg) {
        catImg.addEventListener('click', function () {
            var index = this.getAttribute('cat-index');
            cats[index].count++;
            catCounters[index].innerText = cats[index].count;
        });
    });
});

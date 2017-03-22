var Cat = function (name) {
    this.name = name;
    this.src = '../images/' + this.name + '.jpg';
    this.count = 0;
};

Cat.prototype.render = function (container) {
    var catContainer = document.createElement('div');
    container.appendChild(catContainer);
    catContainer.classList.add('cat__container');
    var cat = document.createElement('div');
    catContainer.appendChild(cat);
    cat.classList.add('cat');
    var catImg = document.createElement('img');
    cat.appendChild(catImg);
    catImg.classList.add('cat__img');
    catImg.src = this.src;
    var catName = document.createElement('div');
    cat.appendChild(catName);
    catName.classList.add('cat__name');
    catName.innerText = this.name;
    var catCounter = document.createElement('div');
    container.appendChild(catCounter);
    catCounter.classList.add('cat__counter');
    catCounter.innerText = this.count;
};

document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector('.container');
    var cats = [new Cat('candy'), new Cat('momo')];
    cats.forEach(function (cat) {
        cat.render(container);
    });
});

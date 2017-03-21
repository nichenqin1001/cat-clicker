document.addEventListener('DOMContentLoaded', function () {
    var title = document.getElementById('cat__title');

    title.innerText = 'Cat Clicker';

    var cat = document.querySelector('.cat__img');
    var counter = document.querySelector('.count__counter');
    var num = counter.innerHTML;
    cat.addEventListener('click', function () {
        console.log(num);
        num++;
        counter.innerText = num;
    });
});

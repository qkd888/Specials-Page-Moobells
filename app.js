var flkty = new Flickity('.carousel');

var previousButton = document.querySelector('.button--previous');
previousButton.addEventListener('click', function () {
    flkty.previous();
});

var previousWrappedButton = document.querySelector('.button--previous-wrapped');
previousWrappedButton.addEventListener('click', function () {
    flkty.previous(true);
});
function loop() {
    elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
            var children = Array.from(element.children);
            children.forEach(function (el) {
                el.classList.add("isVisible");
            });
        }
        else {
            var children = Array.from(element.children);
            children.forEach(function (el) {
                el.classList.remove("isVisible");
            });
        }
    });
    scroll(loop);
}

function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return ((rect.top <= 0 && rect.bottom >= 0)
                || (rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= (window.innerHeight || document.documentElement.clientHeight))
                || (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)));
}

var scroll = window.requestAnimationFrame ||
    function(callback) {window.setTimeout(callback, 1000/60)};

var elementsToShow = document.querySelectorAll('.showOnScroll');


loop();
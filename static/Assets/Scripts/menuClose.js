function closeMenu() {
    if (window.location.href.toString().indexOf("#") > 0){
        window.history.back();
    }
}
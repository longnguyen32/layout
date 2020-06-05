function openMenu(isOpen){
    const menus = window.document.getElementsByClassName("menu-mobile")
    if(isOpen){
        menus[0].style.right = '0px'
    }
    else{
        menus[0].style.right = '320px'
        menus[0].style.transition = 'left ease-out 0.25s';
    }
}

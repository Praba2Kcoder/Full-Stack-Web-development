var sideNavbar = document.querySelector(".side-navbar")
console.log(sideNavbar)

function showSideNavbar(){
    sideNavbar.style.left="0";
}

function hideSideNavbar(){
    sideNavbar.style.left="-50%";
}
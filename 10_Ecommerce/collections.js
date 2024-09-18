var productContainer=document.querySelector(".products")
var search=document.getElementById("search")
var productList=productContainer.querySelectorAll("div")

var footer=document.querySelector("footer")
var sideNavbar = document.querySelector(".side-navbar")

function showSideNavbar(){
    sideNavbar.style.left="0";
}

function hideSideNavbar(){
    sideNavbar.style.left="-50%";
}

search.addEventListener("keyup",function(){
    console.log(event)
    var enteredText=event.target.value.toUpperCase();
    for(var i=0;i<productList.length;i++){
        var productName=productList[i].querySelector("p").textContent.toUpperCase()
        console.log(productName)

        if(productName.indexOf(enteredText) < 0) {
            console.log(productList[i]);
            productList[i].style.display="none"
        }
        else{
            productList[i].style.display="block"
        }
    }
})
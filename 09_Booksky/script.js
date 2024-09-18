var addButton=document.getElementById("add-popUp-button")
var popUpOverlay=document.querySelector(".popup-overlay")
var popUpBox=document.querySelector(".popup-box")

console.log(addButton)
console.log(popUpOverlay)
console.log(popUpBox)

function deleteBook(event){
    event.target.parentElement.remove()
}

addButton.addEventListener("click",function(){
    popUpOverlay.style.display="block"
    popUpBox.style.display="block"
})

var addBook=document.getElementById("add-book")
var popUpCancel=document.getElementById("cancel-popup")

var container=document.querySelector(".container")
var bookContainer=document.querySelector(".book-container")
var bookTitle=document.getElementById("book-title-input")
var bookAuthor=document.getElementById("book-author-input")
var bookDescription=document.getElementById("book-description-input")

addBook.addEventListener("click",function(event){
    event.preventDefault();
    if(bookTitle.value=="" || bookAuthor.value=="" || bookDescription.value=="")
    {
        alert("Please enter full book detail")
    }
    else{
        var d=document.createElement("div")
        d.setAttribute("class","book-container")
        console.log(d)
        d.innerHTML=`<h2>${bookTitle.value}</h2><h5>${bookAuthor.value}</h5>
                <p>${bookDescription.value}</p>
                <button onclick="deleteBook(event)">Delete</button>`
        bookTitle.value="";
        bookAuthor.value="";
        bookDescription.value="";
        console.log(d)
        container.append(d);
        popUpOverlay.style.display="none"
        popUpBox.style.display="none"
    }
})

popUpCancel.addEventListener("click",function(event){
    event.preventDefault();
    popUpOverlay.style.display="none"
    popUpBox.style.display="none"
    bookTitle.value="";
    bookAuthor.value="";
    bookDescription.value="";
})





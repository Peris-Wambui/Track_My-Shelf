const apiHost = " http://localhost:3000";

function addBook(evt){
    evt.preventDefault();
    const bookName =document.getElementById('name');
    const bookDescription= document.getElementById('description');
    const author= document.getElementById('author');

    const submitbutton = document.getElementById('bookAddbutton');
    submitbutton.disable = true;
    submitbutton.innerHTML="adding a book..";

    fetch()

}

document.addEventListener("DOMContentLoaded",()=>{
    console.log();

});
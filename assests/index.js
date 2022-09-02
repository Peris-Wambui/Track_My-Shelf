const apiHost = " http://localhost:3000";

function onAddBook( evt ){
    evt.preventDefault();

    const form =evt.target;


    const book={
        bookName:document.getElementById('name').value,
        bookDescription:document.getElementById('description').value,
        author:document.getElementById('author').value,
    }
        // const bookName =document.getElementById('name');
        // const bookDescription= document.getElementById('description');
        // const author= document.getElementById('author');

    const submitbutton = document.getElementById('bookAddbutton');
    submitbutton.disable = true;
    submitbutton.innerHTML="adding a book..";

    fetch(`${apiHost}/books`,{
        method:"POST",
        body:JSON.stringify(book),
        headers:{
            'content=Type':'application/json',
        }
    })
    .then(response=>{
        console.log(response);
    });
    
    
}

document.addEventListener("DOMContentLoaded",()=>{
    console.log();

    const addBookForm =document.getElementById('add-book-form');
    addBookForm.addEventListener('submit', onAddBook);
    

});
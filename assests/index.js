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
            'content-Type':'application/json',
        }
    })
    .then(response=>{
        return response.json();
        // console.log(response);  
             
    });
    // .finally(()=>{
    //     submitbutton.disable = false;
    //     submitbutton.innerHTML="Add Book";

    //     document.getElementById('add-book-form').reset();

    // });
    
    
}




function getBooks(){
    fetch(`${apiHost}/books?limit=5`).then(response=>response.json()).then(books=>{
        updateBooksTable(books);

    });

}

function updateBooksTable(books){
    document.querySelector('table#books-list tbody').innerHTML= books.map(books=>{
        return`<tr>
            <td>${books.bookName}</td>
            <td>${books.bookDescription}</td>
            <td>${books.author}</td>
        </tr>`;
    }).join('');


}


document.addEventListener("DOMContentLoaded",()=>{
    console.log();
    getBooks();

    const addBookForm =document.getElementById('add-book-form');
    addBookForm.addEventListener('submit', onAddBook);
    

});
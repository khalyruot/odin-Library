let myLibrary = [];

  const author_input = document.getElementById('input1');
  const title_input = document.getElementById('input2');
  const page_input = document.getElementById('input3');
  const status_input = document.getElementById('input4');

  const display_output_author = document.querySelector('#display_author');
  const display_output_title = document.querySelector('#display_title');
  const display_output_page = document.querySelector('#display_page');
  const display_output_status = document.querySelector('#display_status');



function Book(author, title, page, status) {
    this.author = author;
    this.title = title;
    this.page = page;
    this.status = status;
}

function addBookToLibrary(event){

  event.preventDefault();
  

  
  

  displayBook();
  
}

function displayBook(){

  const book = [{author: author_input.value, title: title_input.value, page: page_input.value, status: status_input.value}]
  book.forEach(value=>{
    myLibrary =  "Author: " + value.author + ", Title: " + value.title + ", Page:" + value.page + ", Status: " + value.status;
    console.log(myLibrary);
    console.log(title_input.value);
    display_output_author.innerHTML = author_input.value;
    display_output_title.innerHTML = title_input.value;
    display_output_page.innerHTML = page_input.value;
    display_output_status.innerHTML = status_input.value;
    
  });

}









let myLibrary = [];



function Book(author, title, page, status) {
    this.author = author;
    this.title = title;
    this.page = page;
    this.status = status;
}

function addBookToLibrary(){
  const author_input = document.getElementById('input1');
  const title_input = document.getElementById('input2');
  const page_input = document.getElementById('input3');
  const status_input = document.getElementById('input4');


  const book = [{author: author_input.value, title: title_input.value, page: page_input.value, status: status_input.value}]
  
  

  book.forEach(value=>{
    myLibrary =  "Author: " + value.author + ", Title: " + value.title + ", Page:" + value.page + ", Status: " + value.status;
    console.log(myLibrary);
    
  });
  
}










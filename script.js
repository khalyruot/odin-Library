let myLibrary = [];

function Book(author, title, page, status) {
    this.author = author;
    this.title = title;
    this.page = page;
    this.status = status;
}

function addBookToLibrary(){

  const book = [{author: "Julie", title: "Purple_Love", page: 10, status: true},
                {author: "Micheall", title: "Blue Sky", page: 50, status: false},
                {author: "Romeo", title: "Under Ocean", page: 70, status: true},
                {author: "Vanda", title: "Time is now", page: 90, status: false}]
  
 

  book.forEach(value=>{
    myLibrary =  "Author: " + value.author + ", Title: " + value.title + ", Page:" + value.page + ", Status: " + value.status;
    console.log(myLibrary);
  });
  
}

addBookToLibrary();









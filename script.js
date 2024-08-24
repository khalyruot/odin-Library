let myLibrary = [];

function Book(author, title, page, status) {
    this.author = author;
    this.title = title;
    this.page = page;
    this.status = status;
}

function addBookToLibrary(){
  const book1 = ["Julie", "Purple_Love", 10, true];
  myLibrary.push(book1);
  console.log(myLibrary);
}

addBookToLibrary();









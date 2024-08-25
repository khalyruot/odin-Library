let myLibrary = [];

function Book(author, title, page, status) {
    this.author = author;
    this.title = title;
    this.page = page;
    this.status = status;
}

function addBookToLibrary(){
  const book1 = ["Julie", "Purple_Love", 10, true];
  const book2 = ["Micheal", "Blue Sky", 50, false];
  const book3 = ["Romeo", "Under Ocean", 70, true];
  const book4 = ["Vanda", "Time is Now", 90, false];
  myLibrary.push(book1);
  myLibrary.push(book2);
  console.log(myLibrary);
}

addBookToLibrary();









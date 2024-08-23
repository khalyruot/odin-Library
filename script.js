
function Book(author, title, page, status) {
    this.author = author;
    this.title = title;
    this.page = page;
    this.status = status;
    this.addBookToLibrary = function() {
        console.log(this.status);
      };
}

const book1 = new Book("Alice", "Word of Wisdom", 10, true);
book1.addBookToLibrary();

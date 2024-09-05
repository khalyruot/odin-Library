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

    //display author
    var x = document.createElement("tr");
    var t = document.createTextNode(author_input.value);
    x.appendChild(t);
    document.getElementById("display_author").appendChild(x);

    //display title
    var x = document.createElement("tr");
    var t = document.createTextNode(title_input.value);
    x.appendChild(t);
    document.getElementById("display_title").appendChild(x);

    //display page
    var x = document.createElement("tr");
    var t = document.createTextNode(page_input.value);
    x.appendChild(t);
    document.getElementById("display_page").appendChild(x);

    //display status
    var x = document.createElement("tr");
    var t = document.createTextNode(status_input.value);
    x.appendChild(t);
    document.getElementById("display_status").appendChild(x);

    //display delete button
    var x = document.createElement("Button");
    var t = document.createTextNode("Delete");
    x.appendChild(t);
    document.getElementById("delete_button").appendChild(x).className = 'button_style';
    console.log(book);

    //when click delete button --> delete book
    const deleteButton = document.getElementsByClassName("button_style")[0];
    deleteButton.addEventListener("click", deletebuttonFunction);
    function deletebuttonFunction() {
      console.log("yes"); 
      const author_remove = document.getElementsByClassName("display_data")[0];
      author_remove.remove();
    }
  });

}









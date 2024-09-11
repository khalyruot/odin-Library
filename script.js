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

  const book = new Book(author_input.value, title_input.value, page_input.value, status_input.value);

  

    let eachBooks = Object.keys(book);
    eachBooks.forEach((eachBook) => console.log(eachBook));

    

    
    console.log(book);

    // Add Row
    var bookTable = document.getElementById('display_section');
    var rowCnt = bookTable.rows.length;;
    var tr = bookTable.insertRow(rowCnt);
    tr = bookTable.insertRow(rowCnt);

    console.log(book);

    for (var c = 0; c < 2; c++) {
      var td = document.createElement('td');          // TABLE DEFINITION.
      td = tr.insertCell(c);

      if (c == 0) {           // FIRST COLUMN.
          // ADD A BUTTON.
          var button = document.createElement('input');

          // SET INPUT ATTRIBUTE.
          button.setAttribute('type', 'button');
          button.setAttribute('value', 'Remove');
          button.setAttribute('id', 'rm');


          // ADD THE BUTTON's 'onclick' EVENT.
          button.setAttribute('onclick', 'removeRow(this)');

          td.appendChild(button);
      }
      else {
          // CREATE AND ADD TEXTBOX IN EACH CELL.
        
          eachBooks.forEach((eachBook) => {
            console.log(`${eachBook} is ${book[eachBook]} `);
            const b = book[eachBook];
            

            var ele = document.createElement("TD");
            var t = document.createTextNode("The " + eachBook + " is: " + book[eachBook]);
            ele.appendChild(t);
            ele.setAttribute('type', "The " + eachBook);
            ele.setAttribute('value', book[eachBook]);
            td.appendChild(ele);
          })
          
      }
    }
  
  


}

function removeRow(oButton) {
  var bookTable = document.getElementById('display_section');
  bookTable.deleteRow(oButton.parentNode.parentNode.rowIndex);       // BUTTON -> TD -> TR.
}









<<<<<<< HEAD
let myLibrary = ["Remove","Author", "Title", "Page", "Status"];
=======
let myLibrary = [];

  const author_input = document.getElementById('input1');
  const title_input = document.getElementById('input2');
  const page_input = document.getElementById('input3');
  const status_input = document.getElementById('input4');

  const display_output_author = document.querySelector('#display_author');
  const display_output_title = document.querySelector('#display_title');
  const display_output_page = document.querySelector('#display_page');
  const display_output_status = document.querySelector('#display_status');
>>>>>>> parent of c481693 (update)



function Book(author, title, page, status) {
    this.author = author;
    this.title = title;
    this.page = page;
    this.status = status;
}

function addBookToLibrary(event){

<<<<<<< HEAD
function createTable(){


    //create dynamic table
    var bookTable = document.createElement('table');
    bookTable.setAttribute('id','bookTable');

    var tr = bookTable.insertRow(-1);

    console.log(myLibrary.length)

    for (var h=0; h<myLibrary.length; h++){
      var th = document.createElement('th');
      th.innerHTML = myLibrary[h];
      tr.appendChild(th);
    }

    var div = document.getElementById('cont');
    div.appendChild(bookTable);

}

function addRow(){
  var bookTab = document.getElementById('bookTable');
  

  var rowCnt = bookTab.rows.length;
  var tr = bookTab.insertRow((rowCnt));
  for(var c=0; c<myLibrary.length;  c++){
    var td = document.createElement('td');
    td = tr.insertCell(c);
=======
  event.preventDefault();

  displayBook();
  
}

function displayBook(){

  const book = [{author: author_input.value, title: title_input.value, page: page_input.value, status: status_input.value}]
  book.forEach(value=>{
    myLibrary =  "Author: " + value.author + ", Title: " + value.title + ", Page:" + value.page + ", Status: " + value.status;
    console.log(myLibrary);
    console.log(title_input.value);
>>>>>>> parent of c481693 (update)

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

<<<<<<< HEAD
    else{
      var ele = document.createElement('input');
      ele.setAttribute('type','text');
      ele.setAttribute('value','');
      ele.setAttribute('id','cell_td');

      td.appendChild(ele);

    }
  }
}

function removeRow(oButton){
  var bookTab = document.getElementById('bookTable');
  bookTab.deleteRow(oButton.parentNode.parentNode.rowIndex);
}

function submit(){
  var myTab = document.getElementById('bookTable');
  var values = new Array();

  //Loop through each row of the table
  for (row = 1; row < myTab.rows.length-1; row++){
    for(c=0; c<myTab.rows[row].cells.length; c++){
      var element = myTab.rows.item(row.cells[c]);
      if(element.childNotes[0].getAttribute('type')=='text'){
        values.push(element.childNodes[0].value);
      }
    }
  }
  console.log(values);
=======
>>>>>>> parent of c481693 (update)
}









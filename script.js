let myLibrary = ["Remove","Author", "Title", "Page", "Status"];



function Book(author, title, page, status) {
    this.author = author;
    this.title = title;
    this.page = page;
    this.status = status;
}


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

    if(c==0){
      //add button
      var button = document.createElement('input');

      //set input attibute
      button.setAttribute('type', 'button');
      button.setAttribute('value', 'Remove');
      button.setAttribute('id','rm');

      //add the button's onnclick event
      button.setAttribute('onclick', 'removeRow(this)');
      td.appendChild(button);
    }

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
}









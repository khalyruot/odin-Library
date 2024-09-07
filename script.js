let myLibrary = ["Author", "Title", "Page", "Status"];



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

    for (var h=0; h<myLibrary.length; h++){
      var th = document.createElement('th');
      th.innnerHTML = myLibrary[h];
    }

    var div = document.getElementById('cont');
    div.appendChild(bookTable);

    addRow();

}

function addRow(){
  var bookTab = document.getElementById('bookTable');
  console.log(bookTable);

  var rowCnt = bookTab.rows.length;
  var tr = bookTab.insertRow((rowCnt));
  for(var c=0; c<myLibrary.length;  c++){
    var td = document.createElement('td');
    td = tr.insetCell(c);

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
  var value = new Array();

  //Loop through each row of the table
  for (row = 1; row < myTab.row.length-1; row++){
    for(c=0; c<myTab.row[row].cell.length; c++){
      var element = myTab.rows.item(row.cell[c]);
      if(elemet.childNotes[0].getAttribute('type')=='text'){
        value.push(element.childNodes[0].value);
      }
    }
  }
  console.log('Data send:\n' + values);
}









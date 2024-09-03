var submit = document.getElementById("submit");

var row = 1;
function displayDetails(){
    var name = document.getElementById("name").value;
    var date = document.getElementById("idate").value;
    var time = document.getElementById("itime").value;

    var display=document.getElementById("display");

    var newRow=display.insertRow(row);

    var cell1= newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);
    
    cell1.innerHTML = name;
    cell2.innerHTML = date;
    cell3.innerHTML = time;
     
    row++;
}
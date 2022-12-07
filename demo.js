var form=document.getElementById("addForm");
var itemlist=document.getElementById("items");
//form submit event
form.addEventListener("submit", additem);
//delete event
itemlist.addEventListener("click", removeitem);


//additem
function additem(e){
    e.preventDefault();
    //get input value
    var newitem=document.getElementById("item").value;
    //create new li element
    var li=document.createElement("li");
    //add class
    li.className="list-group-item";
   console.log(li);
//add text node with inout value
li.appendChild(document.createTextNode(newitem));
//create delete button element
var deletebtn =document.createElement("button");

//add classes to delete buttona
deletebtn.className="btn btn-danger btn-sm float-right delete";

//append text npode
deletebtn.appendChild(document.createTextNode("X"));
//append button to li
li.appendChild(deletebtn);
//append li to list

itemlist.appendChild(li);

}




//remove item
function removeitem(e){

if(e.target.classlist.contains("delete"))
{
   if(confirm("are you sure")){
    var li=e.target.parentElement;
    itemlist.removeChild(li);
   }
}
}
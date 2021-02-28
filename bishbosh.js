//Bish-Bosh variables
const form1 = document.querySelector('#gameForm');//BishBosh input fields
const btn1 = document.querySelector('#btn1');//Bish-Bosh button

bishBosh();

function bishBosh(bish, bosh, Count){
    var answer ='';

    for(var i = 1; i <= Count; i++){
        var n = '';
        if(i % bish ==0 && i % bosh == 0){
            n += "Bish-Bosh";
        }
        else if(i % bish == 0){
            n += "Bish";
        }
        else if(i % bosh == 0){
            n += "Bosh";
        }
        else{
            n += i;
        }
        console.log(n); 
        
        answer += n + '\n';
               
    }
    return answer;
}


if(form1 != null){
form1.addEventListener('submit', e => {
    e.preventDefault();

    const bish = document.querySelector('#bish');
    const bosh = document.querySelector('#bosh');
    const endpoint = document.querySelector('#endpoint');
    
    if(endpoint.value <= 0){
        alert("You must choose a number above 0!")
        form1.reset();
    }
    else{
        var end = endpoint;
    }
    console.log('Validating formula');
    

    document.getElementById("answer").innerText += bishBosh(bish.value, bosh.value, end.value);
    
    console.log('Formula complete!');
    
    form1.reset();
    
});
}


//Todo Övning

const addItem = document.querySelector("#addItem"); //New Item div
const todoList = document.querySelector("#todoListItems"); //Todo List div

///Add item to list
if(addItem != null){//Add List item to output List
    addItem.addEventListener('submit', e =>{
        e.preventDefault();
        
        var li = document.createElement("li");
        var newItem = document.getElementById("newListItem").value;
        var tNode = document.createTextNode(newItem);

        li.appendChild(tNode);
        document.getElementById("todoList").appendChild(li);//Builds the new item as a list item
        addItem.reset();

        var span = document.createElement("span");
        tNode = document.createTextNode("\u00D7");// creates the 'X' to remove the item
        span.className = "close";
        span.appendChild(tNode);
        li.appendChild(span);//Adds 'X' to list item

        var close = document.getElementsByClassName("close");//Function to remove the item from list
        var i;
        for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
        }
    })
}

///Function to remove item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }


/// Function to cross off item
var list = document.querySelector("#todoList");//Crosses off List item on click
list.addEventListener('click', e => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }
}, false);




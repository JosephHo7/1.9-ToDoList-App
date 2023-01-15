// add a new item to list
function newItem(){
    let list = $('#list');
    let li = $('<li></li>');
    let item = $('#input').val();
    
    if (item === '') {
        alert("You must write something!");
      } else {
        li.append(item);
        list.append(li);
      }


//cross out an item from the list
function crossout() {
    li.addClass('strike');
}

    li.on('dblclick',crossout);   

//Add the delete button 'x'
let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);

//click on x to delete item
li.on('click', function () {
    li.addClass('delete');
})


}

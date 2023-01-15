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
}







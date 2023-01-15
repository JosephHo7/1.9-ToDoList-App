let list = $('#list');
let li = $('<li></li>');
let item = $('#input').val();

// li.append(item);
// list.append(li);

$('#button').on(click, function newItem() {
    li.append(item);
    list.append(li);
})



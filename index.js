$(document).ready(function(){
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
       let newItem = $('#shopping-list-entry').val();
       console.log(newItem);
          
        // $('.shopping-list').append('<li>'+ '<span class = "shopping-item">' + newItem + '</span>' + '<div class = "shopping-item-controls">'
        //  + '<button class="shopping-item-toggle">' + '<span class="button-label">check</span>' + '</button>' + 
        //  '<button class="shopping-item-delete">' + '<span class="button-label">delete</span>' + '</button>' + '</div>' + '</li>');

        $('.shopping-list').append(`
        <li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
        `)

        $("input").val("");

    });

    $('ul').on('click', '.shopping-item-toggle', function() {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

    $('.shopping-item-delete').on('click', function() {
        $(this).closest('li').remove();
    });
})
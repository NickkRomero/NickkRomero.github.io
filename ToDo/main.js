$(window).on("load", function(){
    $(".backgroundfade").fadeOut(900);
});

// $(selecter).action();

$(document).ready(function ()
{
    console.log('Document loaded');

    // Check if there is todo data to be loaded
    var todo_data = window.localStorage.getItem('todos');
    if(todo_data != null) {
        $('.todos').html(todo_data);
    }

    // If click button
    $('.new-todo button').click(function ()
    {
        console.log('clicked button');

        // Get content from input field
        var title = $('.new-todo input').val();

        console.log(title);

        // Create todo template
        var template =  '<div class="todo">' +
                            '<label><input type="checkbox" name="todo">' +
                            '<span class="title">' + title + '</label>' +
                            '<svg class="trash-icon icon-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"' + 
                                'xmlns="http://www.w3.org/2000/svg">' +
                                '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"' + 
                                'd="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">' +
                                '</path>' +
                            '</svg>' +
                            '<svg class="edit-icon icon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"' + 
                                'xmlns="http://www.w3.org/2000/svg">' +
                                '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"' +
                                'd="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">' +
                                '</path>' +
                            '</svg>' +
                        '</div>';

        // Add todo by template
        $('.todos').append(template);

        Save();
    });

    // Click on delete button
    $('.trash-icon').click(function ()
    {
        // Select parent - delete parent
        $(this).parent().remove();

        Save();
    });

    // When todo is checked
    $(".todo input[type='checkbox']").change(function() {
        if(this.checked) {

            // Add the check attribute to the todo
            $(this).attr('checked', 'checked');

        } else {

            // Remove the check attribute to the todo
            $(this).removeAttr('checked');
        }

         // Save the todo's again to localstorage
         Save();
    });

    // When click on edit button
    $('.edit-icon').click(function(){

        var title = prompt('Enter new title');

        // Change the title of this todo
        $(this).parent().find('.title').text(title);

        Save();
    });

    // Function to save todos to our database
    var Save = function ()
    {
        var all_todos = $('.todos').html();
        window.localStorage.setItem('todos', all_todos);
    }

    // Make sortable
    $('.todos').sortable( {
        update: function( event, ui ) {
            Save();
        }
    });
});
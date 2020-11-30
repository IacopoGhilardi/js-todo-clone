$(document).ready(function(){


    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);

    //al click sul pulsante add aggiungo una nuova task in pagina
    $('#add').click(function(){

        if (!($('.add-task input').val() == '')) {
            var userInput = $('.add-task input').val();

            var context = {
                "content": userInput
            }
    
            var html = template(context);
            $('.to-do').append(html);
            $('.add-task input').val('');
        }

    });

    
    //al click sull'icon X rimuovo la task in pagina
    $(document).on('click', '.fa-times-circle', function(){
        $(this).parent().remove();
    });

});
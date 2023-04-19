// run when page loads
$(document).ready(function () {
    let searchTerm = 'javascript';   //this could come from a form

    let endpoint = 'https://www.googleapis.com/books/v1/volumes';    //URL goes here from Postman
    let params = {
        q: searchTerm,
        filter: 'full',
    }

    $.get(
        endpoint,
        params,
        function (data) {
            // this is called in the future, when a response is retrieved... a "call-back" function
            console.log('response', data);

            $('#results').html('');

            data.items.forEach(item => {
                $('#results').append(`<h3>${item.volumeInfo.title}</h3>`);  //there well not be autocomplete here.Google make this happen
                //$('#results').append(`<h3>${item.volumeInfo.title}</h3>`);  //there well not be autocomplete here.Google make this happen
                if (item.volumeInfo.authors) {
                    $('#results').append('<p>By: ' + item.volumeInfo.authors.join(', ') + '</p>');  //there well not be autocomplete here.Google make this happen
                }

                $('#results').append('<p>By: ' + (item.volumeInfo?.authors?.join(',') ?? 'N/A') + '</p>')


                if (item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail) {
                    $('#results').append(`<img src="${item.volumeInfo.imageLinks.smallThumbnail}">`);
                }
            })
        },
            'json' // could also be html, xml, text

    )   ;
            console.log('done loading');  //This will happen first.

            //$.get for simple APIs, $.post, $.ajax for more complex API's

        });
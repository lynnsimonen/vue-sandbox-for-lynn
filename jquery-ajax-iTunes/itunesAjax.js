// run when page loads
$(document).ready(function () {
    //let searchTerm = $('#search');   //this could come from a form
    //let searchTerm = 'U2';   //this could come from a form

    $("#search-btn").on("click", function () {
        let searchTerm = $('#search').val();
        $('#search-confirm').html("<b>Here are the top 10 results for: " + searchTerm + "  ...</b>");
        console.log(`searchTerm in function: ` + searchTerm);


        let endpoint = 'https://itunes.apple.com/search';    //URL goes here from Postman
        let params = {
            term: searchTerm,
            limit: 10,
        }

        $.get(
            endpoint,
            params,
            function (data) {
                // this is called in the future, when a response is retrieved... a "call-back" function
                console.log('response', data);
                console.log(`searchTerm: ` + searchTerm);
                $('#api-results').html('');
                console.log(`searchTerm2: ` + searchTerm);
                data.results.forEach(result => {
                    $('#api-results').append(`<h4 style="color:blue; line-height: 80%;">Artist Name: ${result.artistName}</h4>`);
                    if (result.artworkUrl30 && result.artworkUrl60) {
                        $('#api-results').append(`<img src="${result.artworkUrl60}">`);
                    } else
                        $('#api-results').append(`<p> No album photo Available </p>`);

                    $('#api-results').append(`<h5 style="line-height: 80%;">Collection Name: ${result.collectionName}</h5>`);
                    $('#api-results').append(`<h5>Track Name: ${result.trackName}</h5>`);
                    $('#api-results').append(`<h5>Kind: ${result.kind}</h5>`);
                    $('#api-results').append(`<h5>Release Date: ${result.releaseDate}</h5>`);
                    $('#api-results').append(`<br>`);
                    $('#api-results').append(`<hr>`);
                    $('#api-results').append(`<br>`);


                    // if (result.volumeInfo.authors) {
                    //     $('#api-results').append('<p>By: ' + result.artistName.join(', ') + '</p>');  //there will not be autocomplete here.Google make this happen
                    // }

                    // $('#api-results').append('<p>By: ' + (result.artworkUrl30?.join(',') ?? 'N/A') + '</p>');
                })
            },
            'json' // could also be html, xml, text

        );
        console.log('done loading');  //This will happen first.

        //$.get for simple APIs, $.post, $.ajax for more complex API's

    });
});
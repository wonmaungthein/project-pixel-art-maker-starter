// // // Select color input

// // // Select size input

// // // When size is submitted by the user, call makeGrid()

// // // Your code goes here!
// // }

//pixel art project function
$(document).ready(function makeGrid() {
    //   creating rows, columns by selecting the value of input_height,width using Jquary
    let rows = $('#input_height').val();
    let columns = $('#input_width').val();
    let color;
    $('#pixel_canvas').children().remove();

    //   for loop if var x is smaller than rows, increase var x and append table row in pixel_canvas
    for (let x = 0; x < rows; x++) {
        $('#pixel_canvas').append('<tr></tr>');
    };

    //   for loop if var y is smaller than columns, increase var y and append table column in table row
    for (let y = 0; y < columns; y++) {
        $('tr').append('<td></<td>');
    };

    $('td').on('click', function () {
    //  assigning color to the value of colorPicker
        color = $('#colorPicker').val();
        $(this).attr("bgcolor", color);
    });
})

//selecting submit id and add click method. When it's clicked the function is fired
$('#submit').click(function (event) {
    event.preventDefault();
    makeGrid();
});


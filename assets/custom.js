// button add and remove class active
$(document).ready(function () {
    $('.btn').click(function () {
        $('.btn').removeClass('active');
        $(this).addClass('active');
    });
});


// get searching form 

$(document).ready(function () {
    $("#hottel").click(function () {
        $("#hotel_search").show();
        $("#car_search").hide();
        $("#tour_search").hide();
    });
    $("#tour").click(function () {
        $("#tour_search").show();
        $("#car_search").hide();
        $("#hotel_search").hide();
    });
    $("#car").click(function () {
        $("#car_search").show();
        $("#hotel_search").hide();
        $("#tour_search").hide();
    });
});

// counter jquary 


// Initialize a counter
let counter = 0;
const minimum = 1;
const maximum = 5;

// Function to increase the counter
$("#increaseBtn").click(function () {
    if (counter < maximum) {
        counter++;
        updateCounter();
    }
    else{
        alert('Adult Member Reched Maximum Number')
    }
});

// Function to decrease the counter
$("#decreaseBtn").click(function () {
    if (counter > minimum) {
        counter--;
        updateCounter();
    }else{
        alert('Minimum Adult Member Number = 0')
    }
});

// Function to update the counter value on the web page
function updateCounter() {
    $("#counter").val(counter);
}

// show dropdown contant 
$(document).ready(function () {
    $("#toggleBtn").click(function () {
        $("#myDropdown").toggle();
    });
});
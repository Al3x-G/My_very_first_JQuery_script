/* The (document).ready(function). The reason for this is that it's bad practice to run jQuery 
before the page is fully loaded, as you might be trying to manipulate something that has not yet 
been rendered on the webpage. So what we do here is put this ready function, and then anything 
inside the curly brackets will only run once the DOM is fully loaded and once the HTML is fully rendered.*/

/*
$(document).ready(function() {
    $("h2").css("text-decoration", "underline"); // underlines all h2 elements using inline style
    $("ul").css("border", "solid 1px #ccc"); // adds a border to all lists using inline style
});
*/

/*
$(document).ready(function() {
    $("h2").addClass("underline"); // underlines all h2 elements, using predefined classes in html file
    $("ul").addClass("border"); // adds a border to all lists, using predefined classes in html file
});
*/

$(document).ready(function() {
    $("h2").removeClass("underline"); // removes the style class from all h2 elements
    $("ul").removeClass("border"); // removes the style class from all ul elements
});

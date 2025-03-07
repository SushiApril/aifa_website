$(document).ready(function() {
    // Toggle navbar on burger menu click
    $('.burger-menu').click(function() {
        $('header ul').slideToggle(300);  // Smooth slide toggle
    });

    // Handle dropdown menu for mobile
    $('.dropdown > a').click(function(e) {
        e.preventDefault();  // Prevent default anchor behavior
        $(this).next('.dropdown-content').slideToggle(300); // Slide toggle submenu
    });

    // Close menu when clicking outside
    $(document).click(function(event) {
        if (!$(event.target).closest('nav').length) {
            $('header ul').slideUp(300);
            $('.dropdown-content').slideUp(300); // Close dropdowns too
        }
    });
});

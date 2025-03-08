$(document).ready(function() {
    // Toggle navbar on burger menu click
    $('.mobile-header .burger-menu').click(function() {
        $('.mobile-menu').slideToggle(300);  // Smooth slide toggle
    });

    // Handle dropdown menu for mobile
    $('.dropdown > a').click(function(e) {
        e.preventDefault();  // Prevent default anchor behavior
        $(this).siblings('.dropdown-content').slideToggle(300); // Slide toggle submenu
    });


    // Close menu when clicking outside (only for mobile)
    $(document).click(function(event) {
        if (!$(event.target).closest('.mobile-header').length) {
            $('.mobile-menu').slideUp(300);
        }
    });
});

$(document).ready(function(){
    // aside menu
    $('.burgerIcon').click(function (e) {
        $(".wrapper").toggleClass('do-open');
        e.stopPropagation();
    })
    $('body').on('click', function () { /* remove the current toggle class and hide the toggle menu */
        $('.wrapper').removeClass('do-open');
    })
})
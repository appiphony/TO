// navbar menu toggling
$(".nav-bar--sf1__menu-toggle").click(function(e){
    $(e.target).closest('.nav-bar--sf1').toggleClass("menu--open");
    $(e.target).closest('.nav-bar--sf1--solo').toggleClass("menu--open");
    $("body").toggleClass("nav-bar--sf1__menu--open");
});

// navbar appendage toggling
$(".nav-bar--sf1__appendage-toggle").click(function(e){
    $(e.target).closest('.nav-bar--sf1').toggleClass("appendage--open");
    $(e.target).closest('.nav-bar--sf1--solo').toggleClass("appendage--open");
});

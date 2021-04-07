

// ref
var menu = $(".hamburger-menu");
var bars = $(".fa-bars");
var close = $(".close");

// mostrare hamburger menù
bars.click( function(){
    menu.show();
});

// nascondere hamburger menù
close.click( function(){
    menu.hide();
});


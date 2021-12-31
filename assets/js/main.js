// más aplicaciones de JavaScript


// scroll

$(window).on("scroll", function(){
    var changeColor = $(window).scrollTop();
    if(changeColor > 0){
$(".navbar").css("background", "rgba(0,0,0)");
}
else{
    $(".navbar").css("background","rgba(250,250,250,0)");
}
});

//navbar

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: "navbarSupportedContent",
});


// tooltip en destacados button de información

var tooltipTriggerList =
[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})

// hover sobre cards de destacados

$(".card-body").hover(function(){
    $(this).css("background-color", "black");
},
function (){
    $(this).css("background-color", "#5CD6C8")
});
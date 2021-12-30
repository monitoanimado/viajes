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
//global btn
var globalBtn = $(".global-btn");
$(".global-btn").mouseenter(function(){
    var btnChild = document.createElement("div");
    btnChild.className = "btn-child";
    this.appendChild(btnChild)
})
$(".global-btn").mouseleave(function(){
    this.children[0].remove();
})
$(".global-btn").mousemove(function(e){
    this.children[0].style.left = `${e.offsetX}px`;
    this.children[0].style.top = `${e.offsetY}px`;
})

//navbar
$(window).on("scroll",function(e){
    var scrollTop = $(window).scrollTop();
    if(scrollTop > 20){
        $("#navbar").addClass("scrolled");
    }else{
        $("#navbar").removeClass("scrolled");
    }
})

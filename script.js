var userinput;
var photos = [];

$(".add").click(function(){
    userinput=$(".picture-url").val();
    photos.push(userinput);
    $(".gallery").append("<img src="+userinput+">");
});
$(document).ready(function(){
    $("button").click(function(){
        var temp = $("input").val().split("=").pop();
        var highres = "https://i.ytimg.com/vi/" + temp + "/maxresdefault.jpg";
        var lowres = "https://i.ytimg.com/vi/" + temp + "/hqdefault.jpg"; 
        $(".highres").attr('src' , highres);
        
        setTimeout(
          function() 
          {
            if($(".highres").width()<121){
                $(".highres").css("display", "none");
                $(".lowres").attr('src' , lowres);
              }
          }, 50);
    });
});


        
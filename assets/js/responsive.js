$(function () {
    width = $(window).width()
    $("body").css("width", width+"px");
    $(".top-nav").css("width", width+"px");
    // $(".navbar").css("width", width+"px !important");
    
    $("#top-toggle").click(function (e) { 
        // e.preventDefault();
        $(".navCollapse").slideUp()
        $(".slideDiv").slideToggle();
    });
    $("#navCollapsebtn").click(function (e) { 
        // e.preventDefault();
        $(".slideDiv").slideUp();
        $(".navCollapse").slideToggle();
    });

    if(!($(window).width() < 990))
    {
        $(".card").click(function (e) {
            data_for = $(this).attr("data-for");
            data = $(this).find(".card-infobox").html();
            if(data_for == 1)
            {
                position = $(this).attr("pos-to");
                $(".arrow").css({"display":"none"})
                $(".infobox").css({"display":"none"})
                $(".arrow1").css({"display":"block"})
                $(".infobox1").css({"display":"block"}).text(data)
                // alert(data)
                $(".arrow1").css({
                    left: position,
                })
                $(this).parent().parent().parent().mouseleave(function(){
                    $(".arrow").css({"display":"none"})
                    $(".infobox").css({"display":"none"})
                }) 
            }
            else 
            if(data_for == 2)
            {
                position = $(this).attr("pos-to");
                $(".arrow").css({"display":"none"})
                $(".infobox").css({"display":"none"})
                $(".arrow2").css({"display":"block"})
                $(".infobox2").css({"display":"block"}).text(data)
                // alert(data)
                $(".arrow2").css({
                    left: position,
                })
                $(this).parent().parent().parent().mouseleave(function(){
                    $(".arrow").css({"display":"none"})
                    $(".infobox").css({"display":"none"})
                }) 
            }
            else
            if(data_for == 3)
            {
                $(".arrow").css({"display":"none"})
                $(".infobox").css({"display":"none"})
                $(".arrow3").css({"display":"block"})
                $(".infobox3").css({"display":"block"}).text(data)
                position = $(this).attr("pos-to");
                // alert(position)
                $(".arrow3").css({
                    left: position,
                })
                $(this).parent().parent().parent().mouseleave(function(){
                    $(".arrow").css({"display":"none"})
                    $(".infobox").css({"display":"none"})
                }) 
            }
            else
            {
                $(".arrow").css({"display":"none"})
                $(".infobox").css({"display":"none"})
                $(".arrow4").css({"display":"block"})
                $(".infobox4").css({"display":"block"}).text(data)
                position = $(this).attr("pos-to");
                // alert(position)
                $(".arrow4").css({
                    left: position,
                })
                $(this).parent().parent().parent().mouseleave(function(){
                    $(".arrow").css({"display":"none"})
                    $(".infobox").css({"display":"none"})
                }) 
            }
            });
    }
    else
    {
        $(".card").click(function (e) 
        { 
            // alert()
            data = $(this).find(".card-infobox").html();
            // alert(data);
            infobox = $(this).next(".responsive-infobox")
            $(infobox).text(data)
            $(infobox).slideToggle()
        });
    }
});
$(document).ready(function () {
            $('#fullpage').fullpage({
                anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage', '5rdPage', ]
                , sectionsColor: ['#90caf9', '#64b5f6', '#42a5f5', '#2196f3', '#1e88e5']
                , css3: true
                , menu: '#menu'
                , slidesNavigation: true
                , scrollHorizontally: true
                , scrollHorizontallyKey: 'YWx2YXJvdHJpZ28uY29tX01mU2MyTnliMnhzU0c5eWFYcHZiblJoYkd4NVNRcg=='
                , afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {}
                , onSlideLeave: function (anchorLink, index, slideIndex, direction) {}
            });
    var szer = window.innerWidth;
if (szer <= 900){
    

$(".ul_header").hide();
$( "button.ico_menu" ).click(function() {
    $(".ul_header").toggle(function(){
       
        var ico =  $( "button.ico_menu" ).text();
        if (ico == "Menu"){
        $( "button.ico_menu" ).html("X");
        }else{
            $( "button.ico_menu" ).html("Menu");
        }
    });
    $(".ul_header li").click(function() {
                $( "button.ico_menu" ).html("Menu");

    $(".ul_header").hide(500);
        
});
    
   
});

};
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
        });


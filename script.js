

// $(".draggable").draggable({
//     helper: 'clone'
// });

// $("#droppable").droppable({
//     drop: function(ev, ui) {
//         $(this).append(ui.draggable.clone(true));
//     }
// });
 var highlight=false;
 var combined_width= 0;
 var song= "";
$(document).ready(function() {
    console.log("something should happen1")
    $(".draggable").draggable({
        helper: 'clone'
    });
    $(".droppable").droppable({
         drop: function(event, ui) {
            $(this)
            // $(ui.draggable).detach().css({top:0, left: 0}).appendTo(this);
             .addClass("highlighted")
             highlight= true;
             console.log(highlight);
             console.log("something should be happening");
             if (highlight == true) {
                var width= $(".draggable").width();
                $("#blocks_list").append("<li> block </li>");
                console.log($("#blocks_list li").length);
                combined_width= ((width) * ($("#blocks_list li").length));
                console.log(combined_width);
                var draggableid= ui.draggable.attr("id");
                // text= draggableid;
                // console.log(text);
                // $("ui.droppable.h4").text(draggableid);
                // console.log($("ui.droppable.h4").text(draggableid));


                if (draggableid == 'C G E B'){
                 song += "cgeb"; 
                 console.log('song: ', song);  

                 }

                 else if (draggableid=="F G B A"){
                 song += "fgba"; 
                 console.log(song);  
                 }

                 else
                    {console.log("else happened");}
                
    }
         }
        
    });
    // console.log($("#blocks_list li").length);
      $("#blocks_list").hide();
      $("#song").hide();
    //  $("div.Scroller").scrollLeft(300);
 });


$(document).ready(function(){
    var Disney_clicked = "notclicked";
    var Allegro_clicked = "notclicked";

    $("#Disney").hide();
    $("#Allegro").hide();
    
    var Disney_selected = false;
    var Allegro_selected = false;

    $('.DisneyButton').click(function(){
        Disney_clicked = "clicked";
        if (Disney_clicked == "clicked" && Disney_selected == false && Allegro_selected == false){
            $(".DisneyButton").addClass("ButtonSelected");
            Disney_selected = true;
            Disney_clicked = "notclicked";
            $("#Disney").show();
        }

        if (Disney_clicked == "clicked" && Disney_selected == true){
            Disney_selected = false;
            $("#Disney").hide();
            $(".DisneyButton").removeClass("ButtonSelected");
        }
    });

    $('.AllegroButton').click(function(){
        var Allegro_clicked = "clicked";
        if (Allegro_clicked == "clicked" && Allegro_selected == false && Disney_selected == false){
            $(".AllegroButton").addClass("ButtonSelected");
            Allegro_selected = true;
            Allegro_clicked = "notclicked";
            $("#Allegro").show();
        }
        if (Allegro_clicked == "clicked" && Allegro_selected == true){
            Allegro_selected = false;
            $("#Allegro").hide();
            $(".AllegroButton").removeClass("ButtonSelected");
        }
    });
});


$(document).ready(function(){

    var One_clicked = "notclicked";
    var Two_clicked = "notclicked";
    var Three_clicked = "notclicked";
    var Four_clicked = "notclicked";
    var Five_clicked = "notclicked";
    var Six_clicked = "notclicked";
    var Seven_clicked = "notclicked";

    $(".OneNote").hide();
    console.log ("element hidden");
    $(".TwoNote").hide();
    $(".ThreeNote").hide();
    $(".FourNote").hide();
    
    var One_selected = false;
    var Two_selected = false;
    var Three_selected = false;
    var Four_selected = false;
    var Five_selected = false;
    var Six_selected = false;
    var Seven_selected = false;

    $('#One').click(function(){
        var One_clicked = "clicked";
        if (One_clicked == "clicked" && One_selected == false){
            $("#One").addClass("NoteSelectionSelected");
            One_selected = true;
            One_clicked = "notclicked";
            $(".OneNote").show();
        }
        if (One_clicked == "clicked" && One_selected == true){
            One_selected = false;
            $(".OneNote").hide();
            $("#One").removeClass("NoteSelectionSelected");
        }
    });

    $('#Two').click(function(){
        var Two_clicked = "clicked";
        if (Two_clicked == "clicked" && Two_selected == false){
            $("#Two").addClass("NoteSelectionSelected");
            Two_selected = true;
            Two_clicked = "notclicked";
            $(".TwoNote").show();
        }
        if (Two_clicked == "clicked" && Two_selected == true){
            Two_selected = false;
            $(".TwoNote").hide();
            $("#Two").removeClass("NoteSelectionSelected");
        }
    });
    $('#Three').click(function(){
        var Three_clicked = "clicked";
        if (Three_clicked == "clicked" && Three_selected == false){
            $("#Three").addClass("NoteSelectionSelected");
            Three_selected = true;
            Three_clicked = "notclicked";
            $(".ThreeNote").show();
        }
        if (Three_clicked == "clicked" && Three_selected == true){
            Three_selected = false;
            $(".ThreeNote").hide();
            $("#Three").removeClass("NoteSelectionSelected");
        }
    });    
    $('#Four').click(function(){
        var Four_clicked = "clicked";
        if (Four_clicked == "clicked" && Four_selected == false){
            $("#Four").addClass("NoteSelectionSelected");
            Four_selected = true;
            Four_clicked = "notclicked";
            $(".FourNote").show();
        }
        if (Four_clicked == "clicked" && Four_selected == true){
            Four_selected = false;
            $(".FourNote").hide();
            $("#Four").removeClass("NoteSelectionSelected");
        }
    });    
    $('#Five').click(function(){
        var Five_clicked = "clicked";
        if (Five_clicked == "clicked" && Five_selected == false){
            $("#Five").addClass("NoteSelectionSelected");
            Five_selected = true;
            Five_clicked = "notclicked";
            $(".FiveNote").show();
        }
        if (Five_clicked == "clicked" && Five_selected == true){
            Five_selected = false;
            $(".FiveNote").hide();
            $("#Five").removeClass("NoteSelectionSelected");
        }
    });
    $('#Six').click(function(){
        var Six_clicked = "clicked";
        if (Six_clicked == "clicked" && Six_selected == false){
            $("#Six").addClass("NoteSelectionSelected");
            Six_selected = true;
            Six_clicked = "notclicked";
            $(".SixNote").show();
        }
        if (Six_clicked == "clicked" && Six_selected == true){
            Six_selected = false;
            $(".SixNote").hide();
            $("#Six").removeClass("NoteSelectionSelected");
        }
    });
    $('#Seven').click(function(){
        var Seven_clicked = "clicked";
        if (Seven_clicked == "clicked" && Seven_selected == false){
            $("#Seven").addClass("NoteSelectionSelected");
            Seven_selected = true;
            Seven_clicked = "notclicked";
            $(".SevenNote").show();
        }
        if (Seven_clicked == "clicked" && Seven_selected == true){
            Seven_selected = false;
            $(".SevenNote").hide();
            $("#Seven").removeClass("NoteSelectionSelected");
        }
    });
});



    


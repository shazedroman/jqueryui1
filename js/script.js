$(document).ready(function(){
  $( "#resizable" ).resizable();
  // add
    $( "#button" ).on( "click", function() {
      $( "#effect" ).addClass( "newClass", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeClass( "newClass" );
      }, 1500 );
    }
    // sortable
    $( "#sortable" ).sortable();
    // draggable
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
    // selectable
     $( "#selectable" ).selectable();
    // ac
     var data = ["HTML","JS","CSS","JQUERY"];
     $( "#c_name" ).autocomplete({
      source: data
      });

  });
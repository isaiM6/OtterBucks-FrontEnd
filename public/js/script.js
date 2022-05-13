$( ".mr-auto .nav-item" ).bind( "click", function(event) {
        event.preventDefault();
        var clickedItem = $( this );
        $( ".mr-auto .nav-item" ).each( function() {
            $( this ).removeClass( "active" );
        });
        clickedItem.addClass( "active" );
    });

async function fetchData(url){
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

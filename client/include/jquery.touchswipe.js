/**
 * Created by JYH on 2015-05-12.
 */

// Pagecreate will fire for each of the pages in this demo
// but we only need to bind once so we use "one()"
// Handler for navigating to the next page
navnext = function( next ) {
   $( ":mobile-pagecontainer" ).pagecontainer( "change", next, {
        transition: "slide"
    });
}
// Handler for navigating to the previous page
navprev = function( prev ) {
    $( ":mobile-pagecontainer" ).pagecontainer( "change", prev, {
        transition: "slide",
        reverse: true
    });
}

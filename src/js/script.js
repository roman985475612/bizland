$( function() {
    $( '.sidenav' ).sidenav()

    $( '.navbar-fixed' ).scrollfire( {
        offset: 0,

        onTopHidden: function( elm ) {
            $( 'nav' ).removeClass( 'transparent' ).addClass( 'blue-grey darken-3' )
        },

        onTopIn: function( elm ) {
            $( 'nav' ).removeClass( 'blue-grey darken-3' ).addClass( 'transparent' )
        }
    } )
} )
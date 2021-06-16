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

window.addEventListener('DOMContentLoaded', () => {
    // Back to top
    document.getElementById('backToTop').addEventListener('click', e => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    })

    // Scroll Spy
	let menu = document.getElementById('menu');
    let links = menu.querySelectorAll('.menu-link')
    let scrollTimeout;
    let logoBtn = document.getElementById('logoBtn')
    let aboutBtn = document.getElementById('aboutBtn')
    let contactBtn = document.getElementById('contactBtn')

    logoBtn.addEventListener('click', (e) => {
        e.preventDefault()
        scrollToTarget(e.target.hash)
    })

    aboutBtn.addEventListener('click', (e) => {
        e.preventDefault()
        scrollToTarget(e.target.hash)
    })

    contactBtn.addEventListener('click', (e) => {
        e.preventDefault()
        let target = e.target
        if (e.target.classList.contains('scroll-icon')) {
            target = e.target.parentNode
        }
        console.log(target)
        scrollToTarget(target.hash)
    })

	window.addEventListener('scroll', function(){
		clearTimeout(scrollTimeout);
		scrollTimeout = setTimeout(onScroll, 200);
	});

	menu.addEventListener('click', (e) => {
		let link = e.target;

		if (link.classList.contains('menu-link')) {
			e.preventDefault();
            menu.querySelector('.active').classList.remove('active');
            link.parentNode.classList.add('active');
            scrollToTarget(link.hash);
		}
	});
	
    function scrollToTarget(id){
		let target = document.querySelector(id)

		if (target !== null) {
			let pos = target.offsetTop - 64
			window.scrollTo({top: pos, behavior: 'smooth'})
		}
	}

    function onScroll(){
		let pos = window.pageYOffset;
		for (let i = links.length - 1; i >= 0; i--) {
			let link = links[i];
			let target = document.querySelector(link.hash);
			
			if ((pos + window.innerHeight / 2) > target.offsetTop) {
				menu.querySelector('.active').classList.remove('active');
				link.parentNode.classList.add('active');
				break;
			}
		}
	}

})
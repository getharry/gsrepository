(function( ) {
	"use strict";

	var defineKeys = function( ) {
		if( window.KeyEvent !== undefined ) {

			if( KeyEvent.VK_LEFT !== undefined ) {
				window.VK_LEFT  = KeyEvent.VK_LEFT ;
				window.VK_UP    = KeyEvent.VK_UP ;
				window.VK_RIGHT = KeyEvent.VK_RIGHT ;
				window.VK_DOWN  = KeyEvent.VK_DOWN ;
			}
			if( KeyEvent.VK_ENTER !== undefined ) {
				window.VK_ENTER = KeyEvent.VK_ENTER ;
			}
			if( KeyEvent.VK_RED !== undefined ) {
				window.VK_RED    = KeyEvent.VK_RED ;
				window.VK_GREEN  = KeyEvent.VK_GREEN ;
				window.VK_YELLOW = KeyEvent.VK_YELLOW ;
				window.VK_BLUE   = KeyEvent.VK_BLUE ;
			}
			if( KeyEvent.VK_PLAY !== undefined ) {
				window.VK_PLAY  = KeyEvent.VK_PLAY ;
				window.VK_PAUSE = KeyEvent.VK_PAUSE ;
				window.VK_STOP  = KeyEvent.VK_STOP ;
			}
			if( KeyEvent.VK_FAST_FWD !== undefined ) {
				window.VK_FAST_FWD = KeyEvent.VK_FAST_FWD ;
				window.VK_REWIND   = KeyEvent.VK_REWIND ;
			}
			if( KeyEvent.VK_BACK !== undefined ) {
				window.VK_BACK = KeyEvent.VK_BACK ;
			}
			if( KeyEvent.VK_0 !== undefined ) {
				window.VK_0 = KeyEvent.VK_0 ;
				window.VK_1 = KeyEvent.VK_1 ;
				window.VK_2 = KeyEvent.VK_2 ;
				window.VK_3 = KeyEvent.VK_3 ;
				window.VK_4 = KeyEvent.VK_4 ;
				window.VK_5 = KeyEvent.VK_5 ;
				window.VK_6 = KeyEvent.VK_6 ;
				window.VK_7 = KeyEvent.VK_7 ;
				window.VK_8 = KeyEvent.VK_8 ;
				window.VK_9 = KeyEvent.VK_9 ;
			}
		}

		if( window.VK_LEFT === undefined ) {
			window.VK_LEFT  = 0x25 ;
			window.VK_UP    = 0x26 ;
			window.VK_RIGHT = 0x27 ;
			window.VK_DOWN  = 0x28 ;
		}
		if( window.VK_ENTER === undefined ) {
			window.VK_ENTER = 0x0d ;
		}
		if( window.VK_RED === undefined ) {
			window.VK_RED    = 0x74 ;
			window.VK_GREEN  = 0x75 ;
			window.VK_YELLOW = 0x76 ;
			window.VK_BLUE   = 0x77 ;
		}
		if( window.VK_PLAY === undefined ) {
			window.VK_PLAY  = 0x50 ;
			window.VK_PAUSE = 0x51 ;
			window.VK_STOP  = 0x53 ;
		}
		if( window.VK_FAST_FWD === undefined ) {
			window.VK_FAST_FWD = 0x46 ;
			window.VK_REWIND   = 0x52 ;
		}
		if( window.VK_BACK === undefined ) {
			window.VK_BACK = 0xa6 ;
		}
		if( window.VK_0 === undefined ) {
			window.VK_0 = 0x30 ;
			window.VK_1 = 0x31 ;
			window.VK_2 = 0x32 ;
			window.VK_3 = 0x33 ;
			window.VK_4 = 0x34 ;
			window.VK_5 = 0x35 ;
			window.VK_6 = 0x36 ;
			window.VK_7 = 0x37 ;
			window.VK_8 = 0x38 ;
			window.VK_9 = 0x39 ;
		}
		if( window.VK_VOLUME_UP === undefined ) {
			window.VK_VOLUME_UP   = 0x1BF ;
			window.VK_VOLUME_DOWN = 0x1C0 ;
			window.VK_VOLUME_MUTE = 0x1C1 ;
		}
	} ;


	var createHtml = function(  ) {
		document.body.innerHTML += ""
			+ '<div class="root_window" id="whole_window"></div>'
			+ '<div class="txtdiv txtlg" style="left: 110px; top: 60px; width: 500px; height: 30px;"><span id="header"></span></div>'
			+ '<div id="txtdiv" class="txtdiv" style="left: 650px; top: 110px; width: 450px; height: 600px;">'
				+ '<u>About this testsuite:</u>'
				+ '<br>'
				+ '<span id="desc"></span>'
			+ '</div>'
			+ '<ul id="menu" class="menu" style="left: 100px; top: 100px;"></ul>'
			+ '<div id="status" style="left: 650px; top: 540px; width: 400px; height: 200px;"></div>'
	} ;
//innerhtml可以对标签进行解析的

	var menu ;
	var items ;
	var selected ;

	var createMenu = function( entries ) {
		menu = document.getElementById( 'menu' ) ;
		items = entries ;

		for( var i = 0 ; i < items.length ; i++ ) {
			var item = items[i] ;
			var node = createMenuItem( item ) ;
			item.node = node ;
		}

		selectMenuItem( 0 ) ;

		document.addEventListener( "keydown", keyHandler ) ;
	} ;

	var createMenuItem = function( entry ) {
		var item = document.createElement( 'li' ) ;
		item.innerHTML = entry.title ;
		menu.appendChild( item ) ;
		return item ;
	} ;

	var clamp = function( index ) {
		var length = items.length ;
		while( index < 0 ) { index += length ; }
		return index % length ;
	} ;

	var toggleClass = function( element, className, flag ) {
		var classNames = element.className.split( ' ' ) ;
		var index = classNames.indexOf( className ) ;
		var exists = index !== -1 ;

		if( exists == !!flag ) { return ; }

		if( flag ) {
			classNames.push( className ) ;
		}
		else {
			classNames.splice( index, 1 ) ;
		}

		element.className = classNames.join( ' ' ) ;
	} ;

	var selectMenuItem = function( index ) {
		selected = clamp( index ) ;
		for( var i = 0 ; i < items.length ; i++ ) {
			toggleClass( items[i].node, 'lisel', i == selected ) ;
		}

		// implement scrolling
	} ;

	var activate = function( ) {
		var item = items[selected] ;
		var callback = item.command ;
		if( callback ) { callback( ) ; }
	} ;

	var keyHandler = function( event ) {
		var key = event.keyCode ;
		var handled = false ;

		switch( key ) {

			case VK_UP:
				selectMenuItem( selected - 1 ) ;
				handled = true ;
				break ;

			case VK_DOWN:
				selectMenuItem( selected + 1 ) ;
				handled = true ;
				break ;

			case VK_LEFT:
				selectMenuItem( selected - 6 ) ;
				handled = true ;
				break ;

			case VK_RIGHT:
				selectMenuItem( selected + 6 ) ;
				handled = true ;
				break ;

			case VK_ENTER:
				activate( ) ;
				handled = true ;
				break ;
		}

		if( handled ) {
			event.preventDefault( ) ;
		}
	} ;


	var createPage = function( page ) {
		createHtml( ) ;
		defineKeys( ) ;

		if( page.title  ) { document.title = page.title ; }
		if( page.header ) { document.getElementById( 'header' ).innerHTML = page.header ; }
		if( page.desc   ) { document.getElementById( 'desc'   ).innerHTML = page.desc ; }

		page.menu && createMenu( page.menu ) ;
	} ;

	var loadPage = function( target ) {
		return function( ) {
			window.location.assign( target ) ;
		} ;
	} ;

	var showStatus = function( success, message ) {
		var status = document.getElementById( 'status' ) ;
  		status.className = success ? 'ok' : 'fail' ;
		status.innerHTML = "<b>Status</b><br>" + message ;
	} ;


	window.createPage = createPage ;
	window.loadPage   = loadPage ;
	window.showStatus = showStatus ;

})( ) ;

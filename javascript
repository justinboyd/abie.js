function abiejs(d) {
	/*
		abiejs.d === defaults
		abiejs.b === document body
		abiejs.c === abie container
		abiejs.e === abie experience
	*/
	abiejs.d = (function() {
		var def = d;
		if(!def.position){def.position = 'tr';}
		if(!def.merit){def.merit = 'http://browsehappy.com/';}
		if(!def.demerit){def.demerit = 'http://browsehappy.com/';}
		if(!def.showTime){def.showTime = 5000;}
		if(!def.content){def.content = '';}
		if(!def.meritColor){def.meritColor = 'green';}
		if(!def.demeritColor){def.demeritColor = 'red';}
		if(def.cookie){def.cookie = true;} else {def.cookie = false;}
		if(def.flag){def.flag = true;} else {def.flag = false;}
		if(!def.cookieShowLimit){def.cookieShowLimit = 'none';}
		if(!def.cookieExperiation){def.cookieExperiation = 10000;}
		return def;	
	})(d);
	navigator.sayswho = (function() {
		var N= navigator.appName, ua= navigator.userAgent, tem;
		var M= ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
		if(M &&(tem= ua.match(/version\/([\.\d]+)/i)) != null)
		M[2] = tem[1];
		M= M? [M[1], M[2]]: [N,  navigator.appVersion, '-?'];
		return M;
	})();		
	/*
	 * navigator.sayswho[0] === browser name
	 * navigator.sayswho[1] === browser version
	 */
	
	function createAbie(p) {
		//Get position and set it to lowercase characters
		var pos = p.toLowerCase();
		//Create the abie container div
		abiejs.c = document.createElement('div');
		//Decalre id
		abiejs.c.id = 'abie';
		//Declare position
		abiejs.c.style.position = 'fixed';
		//Declare display
		abiejs.c.style.display = 'block';
		//Set element in document
		document.getElementsByTagName('body')[0].appendChild(abiejs.c);
		//Create Abie Experience Element (This will animate)
		abiejs.e = document.createElement('div');
		//Declare id
		abiejs.e.id = 'abieExp';
		//Declare position
		abiejs.e.style.position = 'absolute';
		abiejs.e.style.cursor = 'pointer';
		//Set the merit here (this will need to be a condition) !!!!!!!!!!!
		abiejs.e.innerHTML = abiejs.d.content;
		//Append element to container
		abiejs.c.appendChild(abiejs.e);
		//Define the height and width of the merit property
		abiejs.e.height = abiejs.d.height || abiejs.e.offsetHeight;
		abiejs.e.width = abiejs.d.width || abiejs.e.offsetWidth;
		//Set the height and width values
		abiejs.c.style.height = abiejs.e.height + 'px';
		abiejs.c.style.width = abiejs.e.width + 'px';
		abiejs.e.style.height = abiejs.e.height + 'px';
		abiejs.e.style.width = abiejs.e.width + 'px';
		//Run condition to ensure where abie should be
		if(pos.indexOf('t') !== -1){
			abiejs.c.style.top = '0';
			abiejs.e.style.top = (abiejs.e.height * -1) + 'px';
		} else if(pos.indexOf('b') !== -1) {
			abiejs.c.style.bottom = '0';
			abiejs.e.style.bottom =	(abiejs.e.height * -1) + 'px';
		} else {
			abiejs.c.style.top = '0';
			abiejs.e.style.top = (abiejs.e.height * -1) + 'px';	
		}
		if(pos.indexOf('r') !== -1) {
			abiejs.c.style.right = '0';
			abiejs.e.style.right = '0';	
			abiejs.e.style.textAlign = 'right';
		} else if(pos.indexOf('l') !== -1){
			abiejs.c.style.left = '0';	
			abiejs.e.style.left = '0';
			abiejs.e.style.textAlign = 'left';
		} else {
			abiejs.c.style.right = '0';
			abiejs.e.style.textAlign = 'right';
		}
		abiejs.e.style.background = ((judgeAbie() === true) ? abiejs.d.meritColor : abiejs.d.demeritColor);
	}
	//Create Cookie
	function createCookie(name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	}
	//Read Cookie
	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}
	//Erase Cookie
	function eraseCookie(name) {
		createCookie(name,"",-1);
	}
	//Set property for first loop so danceInAbie.inc can be set
	danceInAbie.firstStep = false;
	function danceInAbie(pos, h) {
		if(bindAbie.first === true) {return false;}
		//Check if it is first iteration
		if(danceInAbie.firstStep === false) {
			//Update property so danceInAbie.inc isn't updated over and over again
			danceInAbie.firstStep = true;
			//Set danceInAbie.inc to the height of element so it starts animating from current position
			danceInAbie.inc = (h * -1);	
		}
		//If abie's height is less than -1 increment the value
		 if(danceInAbie.inc < -1) {
			setTimeout(function(){
				if(pos === 't') {
					abiejs.e.style.top = danceInAbie.inc + 'px';
				} else {
					abiejs.e.style.bottom = danceInAbie.inc + 'px';
				}
				danceInAbie.inc++;
				//danceInAbie.inc = danceInAbie.inc + 2;
				danceInAbie(pos, h);
			}, 20);
			return true;
		} else {
			danceOutAbie.firstStep = false;
			return true;
		}
	}
	danceOutAbie.firstStep = false;
	function danceOutAbie(pos, h) {
		if(bindAbie.first === true) {return false;}
		//Check if it is first iteration
		if(danceOutAbie.firstStep === false) {
			//Update property so danceInAbie.inc isn't updated over and over again
			danceOutAbie.firstStep = true;
			//Set danceInAbie.dec to the height of element so it starts animating from current position
			danceOutAbie.dec = 0;	
		}
		//If abie's height is less than 0 increment the value
		 if(danceOutAbie.dec < h) {
			setTimeout(function(){
				if(pos === 't') {
					abiejs.e.style.top = '-' + danceOutAbie.dec + 'px';
				} else {
					abiejs.e.style.bottom = '-' + danceOutAbie.dec + 'px';
				}
				danceOutAbie.dec++;
				//danceOutAbie.dec = danceOutAbie.dec + 2;
				danceOutAbie(pos, h);
			}, 10);
		} else {
			danceInAbie.firstStep = false;
			return true;
		}
	}
	//Add Events
	function addEvent(elem, event, fn) {
		// avoid memory overhead of new anonymous functions for every event handler that's installed
		// by using local functions
		function listenHandler(e) {
			var ret = fn.apply(this, arguments);
			if (ret === false) {
				e.stopPropagation();
				e.preventDefault();
			}
			return(ret);
		}
	
		function attachHandler() {
			// set the this pointer same as addEventListener when fn is called
			// and make sure the event is passed to the fn also so that works the same too
			var ret = fn.call(elem, window.event);   
			if (ret === false) {
				window.event.returnValue = false;
				window.event.cancelBubble = true;
			}
			return(ret);
		}
	
		if (elem.addEventListener) {
			elem.addEventListener(event, listenHandler, false);
		} else {
			elem.attachEvent("on" + event, attachHandler);
		}
	}
	function judgeAbie() {
		var v = parseInt(navigator.sayswho[1], 10);
		if(navigator.sayswho[0] === 'Chrome'){
			if(v < 27) {
				return false;
			} else {
				return true;
			}
			
		} else if(navigator.sayswho[0] === 'Firefox') {
			if(v < 21) {
				return false;
			} else {
				return true;
			}
			
		} else if(navigator.sayswho[0] === 'MSIE') {
			if(v < 9) {
				return false;
			} else {
				return true;
			}
			
		} else if(navigator.sayswho[0] === 'Safari') {
			if(v < 6) {
				return false;
			} else {
				return true;
			}
			
		} else if(navigator.sayswho[0] === 'Opera') {
			if(v < 12) {
				return false;
			} else {
				return true;
			}
			
		} else {
			//I don't know what you have
			return false;
		}
	}
	//Merit or Demerit
	function abieMeritDemerit() {
		//Get abies judgement
		abieMeritDemerit.judgement = judgeAbie();
		//Decide to merit or demerit
		if(abieMeritDemerit.judgement === true) {
			//If string send user to page
			if(typeof abiejs.d.merit === 'string') {
				return window.location = abiejs.d.merit;
			//Else try to run as function
			} else {
				return abiejs.d.merit();
			}	
		} else if(abieMeritDemerit.judgement === false) {
			//If string send user to page
			if(typeof abiejs.d.demerit === 'string') {
				return window.location = abiejs.d.merit;
			//Else try to run as function
			} else {
				return abiejs.d.demerit();
			}
		} else {
			
		}
	}
	function abieRun(pos) {
		abieRun.cookie = readCookie('abiejs');
		
		if(abieRun.cookie < abiejs.d.cookieShowLimit || abiejs.d.cookie === false) {
			if(pos.indexOf('t') !== -1) {
				//If danceInAbie is complete and returns true then run danceOutAbie
				danceInAbie('t', abiejs.e.height);
				setTimeout(function() {danceOutAbie('t', abiejs.e.height);}, abiejs.d.showTime);
			} else {
				//If danceOutAbie is complete and returns true then run danceInAbie
				danceInAbie('b', abiejs.e.height);
				setTimeout(function() {danceOutAbie('b', abiejs.e.height);}, abiejs.d.showTime);
			}
		}
	}
	
	//bind mouseover and onclick events
	//Check if mouse is already over element
	bindAbie.first = false;
	function bindAbie(pos) {
		addEvent(abiejs.c, 'mouseover', function() {
			bindAbie.first = true;
			if(pos.indexOf('t') !== -1) {
				abiejs.e.style.top = 0;
			} else {
				abiejs.e.style.bottom = 0;
			}
		});
		addEvent(abiejs.c, 'mouseout', function() {
			bindAbie.first = true;
			if(pos.indexOf('t') !== -1) {
				abiejs.e.style.top = '-' + abiejs.e.height + 'px';
			} else {
				abiejs.e.style.bottom = '-' + abiejs.e.height + 'px';
			}
		});
		addEvent(abiejs.e, 'click', function() {
			abieMeritDemerit();
		});
	}
	function abiesFlag(pos) {
		if(abiejs.d.flag === true) {
			if(pos.indexOf('t') !== -1) {
				if(pos.indexOf('r') !== -1) {
					abiejs.e.style.WebkitBorderRadius = '0 0 0 100%';
					abiejs.e.style.MozBorderRadius = '0 0 0 100%';
					abiejs.e.style.borderRadius = '0 0 0 100%';
				} else {
					abiejs.e.style.WebkitBorderRadius = '0 0 100% 0';
					abiejs.e.style.MozBorderRadius = '0 0 100% 0';
					abiejs.e.style.borderRadius = '0 0 100% 0';
				}
			} else {
				if(pos.indexOf('r') !== -1) {
					abiejs.e.style.WebkitBorderRadius = '100% 0 0 0';
					abiejs.e.style.MozBorderRadius = '100% 0 0 0';
					abiejs.e.style.borderRadius = '100% 0 0 0';
				} else {
					abiejs.e.style.WebkitBorderRadius = '0 100% 0 0';
					abiejs.e.style.MozBorderRadius = '0 100% 0 0';
					abiejs.e.style.borderRadius = '0 100% 0 0';
				}
			}
		}
	}
	//Make Cookie
	function abieMakeCookies() {
		//Check if user wants cookie
		if(abiejs.d.cookie === true) {
			var cookieVal = readCookie('abiejs');
			//Create Cookie Expiration
			abieMakeCookies.expry = (abiejs.d.cookieExperiation === 'none' ? 1000 : abiejs.d.cookieExperiation);
			//Check if no cookie exists yet
			if(cookieVal === null) {
				//If there is no cookie then create the first iteration
				createCookie('abiejs',0,abieMakeCookies.expry);
			//If there is a cookie begin incrementing iteration
			} else {
				//If the cookie has no limit then set it a huge number
				if(abiejs.d.cookieShowLimit === 'none') {
					createCookie('abiejs',0,abieMakeCookies.expry);
				} else {
					cookieVal++;
					createCookie('abiejs',cookieVal,abieMakeCookies.expry);
				}
			}
		}
	}
	
	
	createAbie(abiejs.d.position);
	bindAbie(abiejs.d.position);
	abiesFlag(abiejs.d.position);
	abieMakeCookies();
	abieRun(abiejs.d.position);
};

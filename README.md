abie.js
=======

abie.js is a tiny plugin that allows you to easily reward your users for having an up-to-date/compatible browser.


abie argues a lot:
abiejs({
  'position':'tr', //tr "top righ", tl "top left", br "bottom right", bl "bottom left"
	'width':'10', //width of abie container
	'height':'10', //height of abie container
	'showTime': 3000, //How long abie stays on screen
	'content': '', //Accepts any html or text
	'meritColor': 'blue', //Color of container for user when rewarded
	'demeritColor': '#999', //color of container for user with old browser
	'cookie': false, //cookieShowLimit and cookieExperation only work if cookie is set to true
	'cookieShowLimit': 2, //how many times you would like your users to see abie before she goes away
	'cookieExperiation': 'none',//abie's expiration
	'merit':function(){alert('winner');}, //accepts a link or a function to reward the user
	'demerit': 'http://browsehappy.com/' //accepts a link or a function to reward the user
});

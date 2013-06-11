abie.js
=======
A.Better.Internet.Experience<br />
abie.js is a tiny plugin that allows you to easily reward your users for having an up-to-date/compatible browser.


abie argues a lot:<br />
abiejs({<br />
&nbsp;&nbsp;&nbsp;&nbsp;'position':'tr', //tr "top right", tl "top left", br "bottom right", bl "bottom left"<br />
&nbsp;&nbsp;&nbsp;&nbsp;'width':'10', //width of abie container<br />
&nbsp;&nbsp;&nbsp;&nbsp;'height':'10', //height of abie container<br />
&nbsp;&nbsp;&nbsp;&nbsp;'showTime': 3000, //How long abie stays on screen<br />
&nbsp;&nbsp;&nbsp;&nbsp;'content': '', //Accepts any html or text<br />
&nbsp;&nbsp;&nbsp;&nbsp;'flag':true, //If you would like it to be style with a rounded border set to true<br />
&nbsp;&nbsp;&nbsp;&nbsp;'meritColor': 'blue', //Color of container for user when rewarded<br />
&nbsp;&nbsp;&nbsp;&nbsp;'demeritColor': '#999', //color of container for user with old browser<br />
&nbsp;&nbsp;&nbsp;&nbsp;'cookie': false, //cookieShowLimit and cookieExperation only work if cookie is set to true<br />
&nbsp;&nbsp;&nbsp;&nbsp;'cookieShowLimit': 2, //how many times you would like your users to see abie before she goes away<br />
&nbsp;&nbsp;&nbsp;&nbsp;'cookieExperiation': 'none',//abie's expiration<br />
&nbsp;&nbsp;&nbsp;&nbsp;'merit':function(){alert('winner');}, //accepts a link or a function to reward the user<br />
&nbsp;&nbsp;&nbsp;&nbsp;'demerit': 'http://browsehappy.com/' //accepts a link or a function to reward the user<br />
});

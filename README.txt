abie.js
=======
A Better Internet Experience:

abie.js is a tiny plugin that allows you to easily reward your users for having an up-to-date/compatible browser.

You can designate the kinds of merits and demerits your users should experience. You are free to reward
your users with points, additional content, funny videos, avatars, a simple thank you or anything else you
feel your users deserve.

Here is how you can define abie.js:

abiejs({
    'position':'tr', //tr "top right", tl "top left", br "bottom right", bl "bottom left"
    'width':'10', //width of abie container
    'height':'10', //height of abie container
    'showTime': 3000, //How long abie stays on screen<
    'content': '', //Accepts any html or text
    'flag':true, //If you would like it to be style with a rounded border set to true
    'meritColor': 'blue', //Color of container for user when rewarded
    'demeritColor': '#999', //color of container for user with old browser
    'cookie': false, //cookieShowLimit and cookieExperation only work if cookie is set to true
    'cookieShowLimit': 2, //how many times you would like your users to see abie before she goes away
    'cookieExperiation': 'none',//abie's expiration
    'merit':function(){alert('winner');}, //accepts a link or a function to reward the user
    'demerit': 'http://browsehappy.com/' //accepts a link or a function to reward the user
});

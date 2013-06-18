#abie.js#

A Better Internet Experience:

abie.js is a tiny plugin that allows you to easily reward your users for having an up-to-date/compatible browser.

You can designate the kinds of merits and demerits your users should experience. You are free to reward
your users with points, additional content, funny videos, avatars, a simple thank you or anything else you
feel your users deserve.

More documentation at: [http://abiejs.com](http://abiejs.com)

Made by Justin Boyd: justinboyd [at] gmail


Here is an easy example of abie.js:

    abiejs({
        merit : function() {
            alert('Your browser is awesome!');
        },
        demerit : 'http://browsehappy.com/'
    });

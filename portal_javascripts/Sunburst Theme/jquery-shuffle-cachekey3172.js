
/* Merged Plone Javascript file
 * This file is dynamically assembled from separate parts.
 * Some of these parts have 3rd party licenses or copyright information attached
 * Such information is valid for that section,
 * not for the entire composite file
 * originating files are separated by - filename.js -
 */

/* - jquery-shuffle.js - */
// http://2011.pycon.jp/portal_javascripts/jquery-shuffle.js?original=1
(function(d){d.fn.shuffle=function(c){c=[];return this.each(function(){c.push(d(this).clone(true))}).each(function(a,b){d(b).replaceWith(c[a=Math.floor(Math.random()*c.length)]);c.splice(a,1)})};d.shuffle=function(a){return d(a).shuffle()}})(jQuery);

/* - shuffle-banners.js - */
// http://2011.pycon.jp/portal_javascripts/shuffle-banners.js?original=1
$(function(){$(".shuffle").shuffle()})

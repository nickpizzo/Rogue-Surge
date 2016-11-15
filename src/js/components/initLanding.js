export var initVideo = function () {
  console.log('called');
  document.addEventListener("DOMContentLoaded", function() {
    var div,
      n,
      v = document.getElementsByClassName("youtube-player");
    for (n = 0; n < v.length; n++) {
      div = document.createElement("div");
      div.setAttribute("data-id", v[n].dataset.id);
      div.innerHTML = labnolThumb(v[n].dataset.id);
      div.onclick = labnolIframe;
      v[n].appendChild(div);
    }
  })
}

export var labnolThumb = function (id) {
  var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
    play = '<div class="play"></div>';
  return thumb.replace("ID", id) + play;
}

export var labnolIframe = function () {
  var iframe = document.createElement("iframe");
  var embed = "https://www.youtube.com/embed/ID?autoplay=1";
  iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allowfullscreen", "1");
  this.parentNode.replaceChild(iframe, this);
}

// initTwitterOne: window.twttr = (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0],
//     t = window.twttr || {};
//   if (d.getElementById(id)) return t;
//   js = d.createElement(s);
//   js.id = id;
//   js.src = "https://platform.twitter.com/widgets.js";
//   fjs.parentNode.insertBefore(js, fjs);
//
//   t._e = [];
//   t.ready = function(f) {
//     t._e.push(f);
//   };
//
//   return t;
// }(document, "script", "twitter-wjs"))

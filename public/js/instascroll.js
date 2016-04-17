
jQuery(document).ready(function (t) {
    var url = "https://api.instagram.com/v1/users/35404723/media/recent/?callback=?";

    t.jsonp({
        "url": url,
        "data": {
            "access_token": "35404723.9048c51.73aa99388c8647c49a10df4cb4c85814"
        },
        "success": function (i) {
            var s = i.data;
            for (var e in s) {
                var o = t('<a href="" title=""><img src=""></a>');
                o.attr("href", s[e].link),
                //o.attr("title", s[e].caption.text),
                o.find("img").attr("src", s[e].images.low_resolution.url),
                o.appendTo("#js-instagram-list")
            }
            t("#instagram_spinner").remove()
        },
        "error": function (d, msg) {
            alert("Could not find get instagram images");
        }
    });
});

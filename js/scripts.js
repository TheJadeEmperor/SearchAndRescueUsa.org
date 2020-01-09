    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.7";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));



$(document).ready(function() {


    var videos = $(".videoyt");

    videos.on("click", function(){
        var elm = $(this),
            conts = elm.contents(),
            le = conts.length,
            ifr = null;

        for(var i = 0; i<le; i++){
            if(conts[i].nodeType == 8) ifr = conts[i].textContent;
        }

        elm.addClass("player").html(ifr);
        elm.off("click");
    });







});


    $(".videoytt").on("click", function() {
        $(this).find("img").css("display", "none");
        $(this).find("span").css("display", "none");
        player.playVideo();
    });




$(".share").on("click", function() {
    $(this).find(".share-options").toggleClass("share-open");
});


$(".fa-twitter").on("click", function(e) {
    e.preventDefault();
    window.open("https://twitter.com/share", '', 'menubar=no, toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
});


$(".fa-facebook").on("click", function(e) {
    e.preventDefault();
    window.open("https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsearchandrescueusa.org", '', 'menubar=no, toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
});


$(".js-watch-video").on("click", function(e) {
    e.preventDefault();
    console.log("fgfgh");
    $(this).parent().find(".videoyt").click();

});






    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = false;
    ga.src = 'http://www.youtube.com/player_api';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);

    var done = false;
    var player;

    function onYouTubePlayerAPIReady() {
        //try {
        player = new YT.Player('youtubevideo-counter', {
            height: '390',
            width: '640',
            videoId: 'sqC1GLCRl7U',
            events: {
                'onStateChange': stateChange
            }
        });








        //} catch (e) { console.log(e); }


    }

    var timestamp = 33; /* your timestamp */

    var timer;

    function timestamp_reached() {



        var from =$(".factoid-americans .animate").data("from");
        var to =$(".factoid-americans .animate").data("to");



        $('.count').each(function () {
            $(this).prop('Counter',from).animate({
                Counter: to
            }, {
                duration: 7000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });




    }

    function timestamp_callback() {
        clearTimeout(timer);

        current_time = player.getCurrentTime();
        //alert(current_time);
        remaining_time = timestamp - current_time;
        //alert(remaining_time);
        if (remaining_time > 0) {
            timer = setTimeout(timestamp_reached, remaining_time * 1000);
        }
    }

    function stateChange(evt) {
        //alert(evt.data);
        if (evt.data == YT.PlayerState.PLAYING) {
            timestamp_callback();
        }
    }

var tabNum = 0;
var videos
$(document).ready(function () {
    videos = document.getElementsByClassName("interactive")
    var captions = document.getElementsByClassName("interacCaption")
    console.log(videos)

    for (var i = 0; i < videos.length; i++) {
        videos[i].pause()
        videos[i].hidden = true
        captions[i].hidden = true
    }
    videos[0].play()
    videos[0].hidden = false
    captions[0].hidden = false

    $(".option").click(function () {
        $(".active").removeClass("active")
        $(this).toggleClass("active")

        tabNum = $(this).attr("id")
        hide()
        videos[tabNum].hidden = false
        videos[tabNum].currentTime = 0
        videos[tabNum].play()
        captions[tabNum].hidden = false
    })

    $('video').on('ended', function () {
        tabNum++
        $("#" + mod(tabNum)).toggleClass("active")
        $("#" + (mod(tabNum-1))).toggleClass("active")
        hide()
        videos[mod(tabNum)].hidden = false
        videos[mod(tabNum)].play()
        captions[mod(tabNum)].hidden = false
    });

    $("video").click(function() {
        if (this.paused === false) {
            this.pause();
        } else {
            this.play();
        }
    });
    //
    // $("video").hover(function () {
    //     if(this.paused === false) {
    //         this.child().css("background-image", "url(../img/pause.svg)")
    //     } else {
    //         this.child().css("background-image", "url(../img/play.svg)")
    //     }
    // })

    function mod(_tabNum) {
        // console.log(_tabNum % 5)
        return _tabNum % videos.length
    }
    function hide() {
        for (var i = 0; i < videos.length; i++) {
            videos[i].hidden = true
            captions[i].hidden = true
            videos[i].pause()
        }
    }
})
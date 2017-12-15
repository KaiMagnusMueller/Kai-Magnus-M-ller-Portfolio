var tabNum = 0;

$(document).ready(function () {
    var videos = document.getElementsByClassName("interactive")
    var captions = document.getElementsByClassName("interacCaption")
    console.log(videos)


    $(".option").click(function () {
        $(".active").removeClass("active")
        $(this).toggleClass("active")

        tabNum = $(this).attr("id")
        for (var i = 0; i < videos.length; i++) {
            videos[i].hidden = true
            captions[i].hidden = true
            videos[i].pause()
        }
        videos[tabNum].hidden = false
        videos[tabNum].currentTime = 0
        videos[tabNum].play()
        captions[tabNum].hidden = false
    })

    $('video').on('ended', function () {
        tabNum++
        $("#" + mod(tabNum)).toggleClass("active")
        $("#" + (mod(tabNum-1))).toggleClass("active")
        for (var i = 0; i < videos.length; i++) {
            videos[i].hidden = true
            captions[i].hidden = true
        }
        videos[mod(tabNum)].hidden = false
        videos[mod(tabNum)].play()
        captions[mod(tabNum)].hidden = false
    });

    function mod(_tabNum) {
        // console.log(_tabNum % 5)
        return _tabNum % 5
    }
})
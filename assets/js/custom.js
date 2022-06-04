$(document).ready(function () {
    $(".bxs-x-square").click(function () {
        $(".video_play").hide();
    });
    $(".play_btn").click(function () {
        $(".video_play").show();
    });
   
    $(".play_btn").click(function () {
        $(".bxs-x-square").show();
    });
    $(".bxs-x-square").click(function () {
        $(".bxs-x-square").hide();
    });
});

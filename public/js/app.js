'use strict';

$(document).ready(function (t) {
    document.getElementById("headerImage").useMap = "#mapLinks";
    document.getElementById("services").style.pageBreakAfter = "always";
    document.getElementById("about").style.pageBreakAfter = "always";
});

function hideAll() {
    $("#parkingColorImage").css("display", "none");
    $("#bicycleColorImage").css("display", "none");
    $("#roadTubeColorImage").css("display", "none");
    $("#pedestrianColorImage").css("display", "none");
    $("#otherColorImage").css("display", "none");
}

$("#parkingArea").hover(
    function () {
        hideAll();
        $("#parkingColorImage").css("display", "block");
    }
);

$("#bicycleArea").hover(
    function () {
        hideAll();
        $("#bicycleColorImage").css("display", "block");
    }
);

$("#roadTubeArea").hover(
    function () {
        hideAll();
        $("#roadTubeColorImage").css("display", "block");
    }
);

$("#pedestrianArea").hover(
    function () {
        hideAll();
        $("#pedestrianColorImage").css("display", "block");
    }
);

$("#otherArea").hover(
    function () {
        hideAll();
        $("#otherColorImage").css("display", "block");
    }
);

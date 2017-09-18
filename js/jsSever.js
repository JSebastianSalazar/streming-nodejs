'use strict';

(function (d, io) {

    'use strict';
    var io = io();
    let startCamara = false;
    let video = d.querySelector("#video");
    let canvas = d.querySelector("#canvas");
    let context = canvas.getContext('2d');

    navigator.streming = (
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia
    )
    navigator.streming({
        video: true,
        audio: true
    }, (stream) => {
        startCamara = true;
        video.src = window.URL.createObjectURL(stream);
    }, (err) => {
        alert('error al acceder a la camara web' + err);
    });
})(document, io)
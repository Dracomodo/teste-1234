var video = document.querySelector("#video");

function func() {
    if ( video[0].currentTime > video[0].duration-30 ) {
        video.classList.add("transis");
    }
}
video.on('timeupdate', function() {
    if( eofevent == false )
       func();
});

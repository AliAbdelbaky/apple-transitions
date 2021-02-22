const intro = document.querySelector(".intro"),
    video = intro.querySelector("video"),
    text = intro.querySelector("h1"),
    //- revo section
    revo = document.querySelector(".revo"),
    revoText = revo.querySelector("h1"),
    revoImg = revo.querySelector("img"),
    scrollcontent = document.querySelector(".scroll-content");
//- Scroll Magic
var Scrollbar = window.Scrollbar;
let options = {
    'alwaysShowTracks': true
};
const controller = new ScrollMagic.Controller();
//-Scenes
let scene = new ScrollMagic.Scene({
        duration: 38000,
        triggerElement: intro,
        triggerHook: 0
    })
    // .addIndicators()
    .setPin(scrollcontent)
    .setPin(intro)
    .addTo(controller);
//- Text animation
const textAnim = TweenMax.fromTo(text, 1.3, { opacity: "1" }, { opacity: "0" });

let scene2 = new ScrollMagic.Scene({
        duration: 3000,
        triggerElement: intro,
        triggerHook: 0
    })
    .setTween(textAnim)
    .addTo(controller);
//- REVO Section
const revoTextAnim = TweenMax.fromTo(revoText, 3, { x: "-100%", opacity: "0" }, { x: "-50%", opacity: "1" });
let scene3 = new ScrollMagic.Scene({
        duration: 1000,
        triggerElement: revo,
        triggerHook: 0
    })
    // .addIndicators()
    .setPin(revo)
    .setTween(revoTextAnim)
    .addTo(controller);
const revoImgAnim = TweenMax.fromTo(revoImg, 3, { x: "100%", opacity: "0" }, { x: "50%", opacity: "1" });
let scene4 = new ScrollMagic.Scene({
        duration: 1000,
        triggerElement: revo,
        triggerHook: 0
    })
    // .addIndicators()
    .setTween(revoImgAnim)
    .addTo(controller);
//- Video Animation
let accelamount = 0.1,
    scrollpos = 0,
    delay = 0;
scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;

});
setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    video.currentTime = scrollpos;
}, 33.3);
window.onload = function() {
    scrollcontent.classList.add("trasn-zero");
}
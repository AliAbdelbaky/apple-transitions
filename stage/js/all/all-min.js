const intro=document.querySelector(".intro"),video=intro.querySelector("video"),text=intro.querySelector("h1"),revo=document.querySelector(".revo"),revoText=revo.querySelector("h1"),revoImg=revo.querySelector("img"),scrollcontent=document.querySelector(".scroll-content");var Scrollbar=window.Scrollbar;let options={alwaysShowTracks:!0};const controller=new ScrollMagic.Controller;let scene=new ScrollMagic.Scene({duration:38e3,triggerElement:intro,triggerHook:0}).setPin(scrollcontent).setPin(intro).addTo(controller);const textAnim=TweenMax.fromTo(text,1.3,{opacity:"1"},{opacity:"0"});let scene2=new ScrollMagic.Scene({duration:3e3,triggerElement:intro,triggerHook:0}).setTween(textAnim).addTo(controller);const revoTextAnim=TweenMax.fromTo(revoText,3,{x:"-100%",opacity:"0"},{x:"-50%",opacity:"1"});let scene3=new ScrollMagic.Scene({duration:1e3,triggerElement:revo,triggerHook:0}).setPin(revo).setTween(revoTextAnim).addTo(controller);const revoImgAnim=TweenMax.fromTo(revoImg,3,{x:"100%",opacity:"0"},{x:"50%",opacity:"1"});let scene4=new ScrollMagic.Scene({duration:1e3,triggerElement:revo,triggerHook:0}).setTween(revoImgAnim).addTo(controller),accelamount=.1,scrollpos=0,delay=0;scene.on("update",e=>{scrollpos=e.scrollPos/1e3}),setInterval(()=>{delay+=(scrollpos-delay)*accelamount,video.currentTime=scrollpos},33.3),window.onload=function(){scrollcontent.classList.add("trasn-zero")};
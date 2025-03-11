var a = document.querySelector("#center");
function throttle(fn, delay) {
    let t = 0;
    return function (...args) {
        let now = Date.now();
        if (now - t >= delay) {
            fn.apply(this, args);
            t = now;
        }
    };
}

a.addEventListener('mousemove', throttle((dets) => {
    var div = document.createElement("div");
    div.classList.add('imagediv');
    div.style.left= dets.clientX +'px';
    div.style.top = dets.clientY + 'px';

var img = document.createElement("img");
img.setAttribute("src", "https://plus.unsplash.com/premium_photo-1676106623769-539ecc6d7f92?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

div.appendChild(img);

    document.body.appendChild(div);

    gsap.to(img, {
        y:"0",
        ease:Power3,
    })

    gsap.to(img,{
        y:"100%",
        delay:.6,
        ease: Power2
    });

setTimeout (function(){
    div.remove();
},1000)

}, 400));


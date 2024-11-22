export function animateNav() {
    var tl = new TimelineMax()

    tl.to(".top", 0.8, {
        y: 2,
        rotation: 45,
        ease: Expo.easeInOut
    });

    tl.to(".bottom", 0.8, {
        y: -4,
        rotation: -45,
        ease: Expo.easeInOut,
        delay: -0.8
    });

    // tl.to(".menu_overlay", .1, {
    //     height: "100%",
    //     ease: Expo.easeInOut,
    //     delay: -.1,
    //     opacity: 1
    // });

    tl.to(".menu", 0.8, {
        top: "0%",
        ease: Expo.easeInOut,
        delay: -1
    });

    tl.staggerFrom(".menu a", 0.1, { y: 20, opacity: 0, ease: Expo.ease, delay: -.01 }, 0.05);
    tl.staggerFrom(".social_cnt img", .1, { y: 20, opacity: 0, ease: Expo.ease, delay: -.01 }, 0.02);

    tl.reverse();

    //toggle
    $(document).on("click", ".toggle", function () {
        tl.reversed(!tl.reversed());
    });

}
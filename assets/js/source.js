$(document).ready(function(){

    // hero text
    let tweenHeaderText = new TimelineMax();
    tweenHeaderText.fromTo(".intro__header", 2, {autoAlpha:0, scaleX: "0.5"},{autoAlpha:1, scaleX: "1"}, "=+1")
    ;

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: ["<img src='/assets/img/left.png'>","<img src='/assets/img/right.png'>"],
        navContainer: '#customNav',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });



    $(".left-to-right").each(function(){
        let controller = new ScrollMagic.Controller();

        // left to right
        let leftToRight = TweenLite.from(this, 1.2, {autoAlpha: 0, x: "-25px"});

        let scene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.4,
        })
            .setTween(leftToRight)

            .addTo(controller);
    });

// recent project images
    $(".left-to-right-slide").each(function(){

        let controllerLeftRightSlide = new ScrollMagic.Controller();

        // let Scale left to right
        let tweenLeftToRightSlide = TweenLite.from(this, 1.2, {autoAlpha: 0.3, scaleX: 0});

        let sceneLeftRightSlide = new ScrollMagic.Scene({
            triggerElement: this
        })

            .setTween(tweenLeftToRightSlide)

            .addTo(controllerLeftRightSlide);
    });

    // game changer
    let controllerGameChanger = new ScrollMagic.Controller();

    let tweenGameChanger = new TimelineLite();
    tweenGameChanger.fromTo(".game-changer p", 1.5, {autoAlpha: 0, x: "0"}, {autoAlpha: 1, x: "-150px"})
    tweenGameChanger.fromTo(".game-changer", 1.5,
        {backgroundColor: "#fff"},
        {backgroundColor: "#F7A600"})
    ;

    let sceneGameChanger = new ScrollMagic.Scene({
        triggerElement: ".game-changer",
        reverse:false
    })

        .setTween(tweenGameChanger)

        .addTo(controllerGameChanger);


    // stay informed
    let leftToRightStaggerController = new ScrollMagic.Controller();

    let leftToRightStaggerTimeline = new TimelineLite();

    leftToRightStaggerTimeline.staggerFromTo(".media-box img", 0.5, {autoAlpha: 0, x: "-50px"}, {autoAlpha: 1, x: "0px"}, 1)
    leftToRightStaggerTimeline.to(".dark-overlaysq", 1, {className:"dark-overlay"}, 1)

    leftToRightStaggerTimeline.staggerFromTo(".media-box span", 1, {autoAlpha: 0, x: "-50px"}, {autoAlpha: 1, x: "0px"})
    leftToRightStaggerTimeline.staggerFromTo(".media-box h2", 1, {autoAlpha: 0, x: "-50px"}, {autoAlpha: 1, x: "0px"})
    leftToRightStaggerTimeline.staggerFromTo(".media-box p", 1, {autoAlpha: 0, x: "-50px"}, {autoAlpha: 1, x: "0px"})
    ;

    let leftToRightStaggerScene = new ScrollMagic.Scene({
        triggerElement: "#stay-informed",
        reverse:false
    })

        .setTween(leftToRightStaggerTimeline)

        .addTo(leftToRightStaggerController);

});



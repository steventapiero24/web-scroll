class App {

    
    constructor() {
        
     this.heroImages = [...document.querySelectorAll('.hero__images img')]

     this._inicialize();

     this._render();
        
    }

    _inicialize() {
        this._setInitialStates();

        this._createLenis();

        this._createIntro()

        this._createHero()

    }

    _setInitialStates() {
        gsap.set('.hero__title span, .text__effect p, .fullwidth-image__text ', {
            y:32,
            opacity: 0
        })

        gsap.set('.hero__images img', {
            opacity:0 ,
            y: gsap.utils.random(100, 50)
        })     

        gsap.set('.fullwidth-image img', {
            scale: 1.3
        })
    }

    _createLenis() {
        this.lenis = new Lenis({
            lerp: 0.1
        })
    }

    _createIntro () {
        const tl = gsap.timeline();

        tl.to( '.hero__title div', {
            opacity: 1
        }).to('.hero__title span', {
            y:0,
            opacity:1,
            ease: 'expo.out',
            duration: 2,
            stagger: 0.01
        }).to ('.hero__images img', {
            y:0,
            opacity: 1,
            ease: 'power3.out',
            duration: 2,
            stagger: 0.04
        },1 )
    }

    _createHero () {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub : true
            }
        });

        this.heroImages.forEach( image => {
            tl.to(image, {
                ease: 'none',
                yPercent: gsap.utils.random(-100, -50)
            },0)
        })
    }
    
    _render(time) {
        this.lenis.raf(time);

        requestAnimationFrame(this._render.bind(this))
    }

}





new App();

(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Header fixed top on scroll
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop
    let nextElement = selectHeader.nextElementSibling
    const headerFixed = () => {
      if ((headerOffset - window.scrollY) <= 0) {
        selectHeader.classList.add('fixed-top')
        nextElement.classList.add('scrolled-offset')
      } else {
        selectHeader.classList.remove('fixed-top')
        nextElement.classList.remove('scrolled-offset')
      }
    }
    window.addEventListener('load', headerFixed)
    onscroll(document, headerFixed)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function (e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Hero carousel indicators
   */
  let heroCarouselIndicators = select("#hero-carousel-indicators")
  let heroCarouselItems = select('#heroCarousel .carousel-item', true)

  // The indicators are rendered by the page itself (React would otherwise drop nodes added here); only fill them when empty.
  heroCarouselItems.forEach((item, index) => {
    if (heroCarouselIndicators.children.length) return;
    (index === 0) ?
      heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>" :
      heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
  });

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function (direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  const cardsContainer = document.querySelector(".card-carousel");
  const cardsController = document.querySelector(".card-carousel + .card-controller")

  class DraggingEvent {
    constructor(target = undefined) {
      this.target = target;
    }

    event(callback) {
      let handler;

      this.target.addEventListener("mousedown", e => {
        e.preventDefault()

        handler = callback(e)

        window.addEventListener("mousemove", handler)

        document.addEventListener("mouseleave", clearDraggingEvent)

        window.addEventListener("mouseup", clearDraggingEvent)

        function clearDraggingEvent() {
          window.removeEventListener("mousemove", handler)
          window.removeEventListener("mouseup", clearDraggingEvent)

          document.removeEventListener("mouseleave", clearDraggingEvent)

          handler(null)
        }
      })

      this.target.addEventListener("touchstart", e => {
        handler = callback(e)

        window.addEventListener("touchmove", handler)

        window.addEventListener("touchend", clearDraggingEvent)

        document.body.addEventListener("mouseleave", clearDraggingEvent)

        function clearDraggingEvent() {
          window.removeEventListener("touchmove", handler)
          window.removeEventListener("touchend", clearDraggingEvent)

          handler(null)
        }
      })
    }

    // Get the distance that the user has dragged
    getDistance(callback) {
      function distanceInit(e1) {
        let startingX, startingY;

        if ("touches" in e1) {
          startingX = e1.touches[0].clientX
          startingY = e1.touches[0].clientY
        } else {
          startingX = e1.clientX
          startingY = e1.clientY
        }


        return function (e2) {
          if (e2 === null) {
            return callback(null)
          } else {

            if ("touches" in e2) {
              return callback({
                x: e2.touches[0].clientX - startingX,
                y: e2.touches[0].clientY - startingY
              })
            } else {
              return callback({
                x: e2.clientX - startingX,
                y: e2.clientY - startingY
              })
            }
          }
        }
      }

      this.event(distanceInit)
    }
  }


  class CardCarousel extends DraggingEvent {
    constructor(container, controller = undefined) {
      super(container)

      // DOM elements
      this.container = container
      this.controllerElement = controller
      this.cards = container.querySelectorAll(".card")

      // Carousel data
      this.centerIndex = (this.cards.length - 1) / 2;
      this.cardWidth = this.cards[0].offsetWidth / this.container.offsetWidth * 100
      this.xScale = {};

      // Resizing
      window.addEventListener("resize", this.updateCardWidth.bind(this))

      if (this.controllerElement) {
        this.controllerElement.addEventListener("keydown", this.controller.bind(this))
      }


      // Initializers
      this.build()

      // Bind dragging event
      super.getDistance(this.moveCards.bind(this))
    }

    updateCardWidth() {
      this.cardWidth = this.cards[0].offsetWidth / this.container.offsetWidth * 100

      this.build()
    }

    build(fix = 0) {
      for (let i = 0; i < this.cards.length; i++) {
        const x = i - this.centerIndex;
        const scale = this.calcScale(x)
        const scale2 = this.calcScale2(x)
        const zIndex = -(Math.abs(i - this.centerIndex))

        const leftPos = this.calcPos(x, scale2)


        this.xScale[x] = this.cards[i]

        this.updateCards(this.cards[i], {
          x: x,
          scale: scale,
          leftPos: leftPos,
          zIndex: zIndex
        })
      }
    }


    controller(e) {
      const temp = { ...this.xScale };

      if (e.keyCode === 39) {
        // Left arrow
        for (let x in this.xScale) {
          const newX = (parseInt(x) - 1 < -this.centerIndex) ? this.centerIndex : parseInt(x) - 1;

          temp[newX] = this.xScale[x]
        }
      }

      if (e.keyCode == 37) {
        // Right arrow
        for (let x in this.xScale) {
          const newX = (parseInt(x) + 1 > this.centerIndex) ? -this.centerIndex : parseInt(x) + 1;

          temp[newX] = this.xScale[x]
        }
      }

      this.xScale = temp;

      for (let x in temp) {
        const scale = this.calcScale(x),
          scale2 = this.calcScale2(x),
          leftPos = this.calcPos(x, scale2),
          zIndex = -Math.abs(x)

        this.updateCards(this.xScale[x], {
          x: x,
          scale: scale,
          leftPos: leftPos,
          zIndex: zIndex
        })
      }
    }

    calcPos(x, scale) {
      let formula;

      if (x < 0) {
        formula = (scale * 100 - this.cardWidth) / 2

        return formula

      } else if (x > 0) {
        formula = 100 - (scale * 100 + this.cardWidth) / 2

        return formula
      } else {
        formula = 100 - (scale * 100 + this.cardWidth) / 2

        return formula
      }
    }

    updateCards(card, data) {
      if (data.x || data.x == 0) {
        card.setAttribute("data-x", data.x)
      }

      if (data.scale || data.scale == 0) {
        card.style.transform = `scale(${data.scale})`

        if (data.scale == 0) {
          card.style.opacity = data.scale
        } else {
          card.style.opacity = 1;
        }
      }

      if (data.leftPos) {
        card.style.left = `${data.leftPos}%`
      }

      if (data.zIndex || data.zIndex == 0) {
        if (data.zIndex == 0) {
          card.classList.add("highlight")
        } else {
          card.classList.remove("highlight")
        }

        card.style.zIndex = data.zIndex
      }
    }

    calcScale2(x) {
      let formula;

      if (x <= 0) {
        formula = 1 - -1 / 5 * x

        return formula
      } else if (x > 0) {
        formula = 1 - 1 / 5 * x

        return formula
      }
    }

    calcScale(x) {
      const formula = 1 - 1 / 5 * Math.pow(x, 2)

      if (formula <= 0) {
        return 0
      } else {
        return formula
      }
    }

    checkOrdering(card, x, xDist) {
      const original = parseInt(card.dataset.x)
      const rounded = Math.round(xDist)
      let newX = x

      if (x !== x + rounded) {
        if (x + rounded > original) {
          if (x + rounded > this.centerIndex) {

            newX = ((x + rounded - 1) - this.centerIndex) - rounded + -this.centerIndex
          }
        } else if (x + rounded < original) {
          if (x + rounded < -this.centerIndex) {

            newX = ((x + rounded + 1) + this.centerIndex) - rounded + this.centerIndex
          }
        }

        this.xScale[newX + rounded] = card;
      }

      const temp = -Math.abs(newX + rounded)

      this.updateCards(card, { zIndex: temp })

      return newX;
    }

    moveCards(data) {
      let xDist;

      if (data != null) {
        this.container.classList.remove("smooth-return")
        xDist = data.x / 250;
      } else {


        this.container.classList.add("smooth-return")
        xDist = 0;

        for (let x in this.xScale) {
          this.updateCards(this.xScale[x], {
            x: x,
            zIndex: Math.abs(Math.abs(x) - this.centerIndex)
          })
        }
      }

      for (let i = 0; i < this.cards.length; i++) {
        const x = this.checkOrdering(this.cards[i], parseInt(this.cards[i].dataset.x), xDist),
          scale = this.calcScale(x + xDist),
          scale2 = this.calcScale2(x + xDist),
          leftPos = this.calcPos(x + xDist, scale2)


        this.updateCards(this.cards[i], {
          scale: scale,
          leftPos: leftPos
        })
      }
    }
  }

  const carousel = new CardCarousel(cardsContainer)

})()
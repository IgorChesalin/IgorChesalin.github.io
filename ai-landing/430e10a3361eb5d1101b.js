$((function(){$(".main-nav__burger-js").on("click",(function(){$(".main-nav__drawer-js").toggleClass("main-nav__drawer--hide")}))})),$((function(){$(".owl-carousel").owlCarousel({items:1.5,loop:!0,margin:15,dots:!1,center:!0,responsive:{768:{loop:!1,margin:40,items:3,center:!1},1440:{loop:!0,margin:50,center:!1,items:4,startPosition:0}}})})),$((function(){$(".accordion-js").on("click",(function(){this.classList.toggle("accordion--open"),$(this).find(".accordion__icon-js").toggleClass("accordion__icon--open");var n=this.nextElementSibling;n.style.maxHeight?n.style.maxHeight=null:n.style.maxHeight=n.scrollHeight+"px"}))}));
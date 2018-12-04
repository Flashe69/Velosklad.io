"use strict";

(function ($) {
  $(document).ready(function () {
    svg4everybody({});
  }); // Preloader

  $(window).on('load', function () {
    $('.preloader-env').fadeOut('slow', function () {
      $('body').removeAttr('id');
    });
  }); // Main slider

  var mainSlider = new Swiper('.main-slider', {
    centerSlides: true,
    loop: false,
    speed: 1000,
    lazy: true,
    preloadImages: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      prevEl: '.main-slider__prev-custom',
      nextEl: '.main-slider__next-custom'
    }
  }); // Accessories sliders

  var accessoriesSlider = new Swiper('.accessories__slider', {
    slidesPerView: 6,
    spaceBetween: 30,
    speed: 1000,
    navigation: {
      prevEl: '.accessories-slider__btn-prev',
      nextEl: '.accessories-slider__btn-next'
    },
    breakpoints: {
      1200: {
        slidesPerView: 4
      },
      992: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
      },
      576: {
        slidesPerView: 1
      }
    }
  });
  var brandsSlider = new Swiper('.brands__slider', {
    slidesPerView: 6,
    spaceBetween: 30,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 3000
    },
    navigation: {
      prevEl: '.brands-slider__btn-prev',
      nextEl: '.brands-slider__btn-next'
    },
    breakpoints: {
      1200: {
        slidesPerView: 4
      },
      992: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
      },
      576: {
        slidesPerView: 2
      }
    }
  });
  var popularSlider = new Swiper('.popular-models__slider', {
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 1000,
    navigation: {
      prevEl: '.popular-models__btn-prev',
      nextEl: '.popular-models__btn-next'
    },
    breakpoints: {
      1200: {
        slidesPerView: 3
      },
      992: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 2
      },
      576: {
        slidesPerView: 1
      }
    }
  });
  var newModels = new Swiper('.new-models__slider', {
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 1000,
    navigation: {
      prevEl: '.new-models__btn-prev',
      nextEl: '.new-models__btn-next'
    },
    breakpoints: {
      1200: {
        slidesPerView: 3
      },
      992: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 2
      },
      576: {
        slidesPerView: 1
      }
    }
  }); // Choose colors images

  $('.choose-colors__picture').on('mouseenter touchstart', function (event) {
    event.preventDefault();
    var self = $(this);
    var alternativePic = self.attr('data-alt-src');
    self.parents('.card-env, .product-card__slider-horizontal').children().children().children().attr('src', alternativePic);
  }); // Navigation

  var fixedNav = $('.header').height();
  var navigationBars = $('.navigation__bars');
  var navigationClose = $('.nav-left__close');
  var buttonPlus = $('.navigation-portrait__btn-plus');
  var fixedNavbar = $('.header__navbar-fixed');
  $(window).scroll(function () {
    if ($(window).scrollTop() >= fixedNav) {
      fixedNavbar.fadeIn('slow');
    } else {
      fixedNavbar.fadeOut('slow');
    }
  });
  navigationBars.on('click', function () {
    $(this).parents('body').find('.nav-left__navigation-portrait').addClass('navigation-open');
    $(this).parents('body').find('.header, .content, footer').addClass('overlay-bg');
  });
  navigationClose.on('click', function () {
    $(this).parents('body').find('.nav-left__navigation-portrait').removeClass('navigation-open');
    $(this).parents('body').find('.header, .content, footer').removeClass('overlay-bg');
  });
  buttonPlus.on('click', function () {
    var self = $(this);
    self.prev().toggleClass('active-product');
    self.toggleClass('rotate-plus');
    self.parent().find('.navigation-dropdown').slideToggle();
  }); // Fixed sliders

  var popularModelBox = $('.popular-models__slider .card-env');
  popularModelBox.on('mouseenter', function () {
    $(this).parents('.popular-models__slider').css({
      'z-index': '2000'
    });
  });
  popularModelBox.on('mouseleave', function () {
    $(this).parents('.popular-models__slider').css({
      'z-index': '1'
    });
  });
  var newModelBox = $('.new-models__slider .card-env');
  newModelBox.on('mouseenter', function () {
    $(this).parents('.new-models__slider').css({
      'z-index': '2000'
    });
  });
  newModelBox.on('mouseleave', function () {
    $(this).parents('.new-models__slider').css({
      'z-index': '1'
    });
  }); // Ellipsis

  $('.card-env__title').ellipsis({
    lines: 1,
    responsive: true
  });
  $('.news__envelope-box .envelope-box__title').ellipsis({
    lines: 1,
    responsive: true
  });
  $('.row-items__info-value').ellipsis({
    lines: 1,
    responsive: true
  });
  $('.slide-envelope__info').ellipsis({
    lines: 1,
    responsive: true
  });
  $('.news__envelope-box .envelope-box__info').ellipsis({
    lines: 3,
    responsive: true
  });
  $('.column-info__title, .description-box__name').ellipsis({
    lines: 1,
    responsive: true
  }); // Dropdown

  $('.dropdown-toggle').dropdown(); // Search input

  var searchDropdown = $('.search-env__dropdown-items');
  var searchSubmit = $('.search-env__submit');
  $('.search-env__input').on('keyup', function () {
    var self = $(this),
        val = self.val();

    if (val.length >= 1) {
      searchSubmit.find('.icon-search').hide();
      searchSubmit.find('.icon-cross').show();
      searchDropdown.show();
    } else {
      searchSubmit.find('.icon-search').show();
      searchSubmit.find('.icon-cross').hide();
      searchDropdown.hide();
    }
  });
  searchSubmit.find('.icon-cross').on('click', function (event) {
    event.preventDefault();
    searchDropdown.hide();
  }); // Mailing input

  var mailingSubmit = $('.mailing').find('.form-env__btn');
  $('.mailing .form-env__input').on('keyup', function () {
    var self = $(this),
        val = self.val();

    if (val.length >= 1) {
      mailingSubmit.addClass('yellow-submit');
    } else {
      mailingSubmit.removeClass('yellow-submit');
    }
  }); // Tooltip

  var bonusQuestion = $('.bonus-env__question');
  var bonusDropdown = $('.bonus-env__dropdown-info');
  bonusQuestion.on('mouseenter touchstart', function () {
    bonusDropdown.show();
  });
  bonusDropdown.on('mouseleave touchend', function () {
    $(this).hide();
  }); // Countdown

  $('.countdown').countdown(); // Input range

  var inputRangeFirst = $("#slideRangeFirst");
  var rangeFirst = $('#rangeCountFirst');
  var rangeSecond = $('#rangeCountSecond');
  $(function () {
    inputRangeFirst.slider({
      range: true,
      min: 0,
      max: 500,
      values: [75, 300],
      slide: function slide(event, ui) {
        rangeFirst.val(ui.values[0]);
        rangeSecond.val(ui.values[1]);
      }
    });
    rangeFirst.val(inputRangeFirst.slider("values", 0));
    rangeSecond.val(inputRangeFirst.slider("values", 1));
  }); // Reset tags

  var tagsClose = $('.tags__item > .icon-cross');
  $('.tags__reset').on('click', function (event) {
    event.preventDefault();
    $('.tags__item').hide();
  });
  tagsClose.on('click', function (event) {
    event.preventDefault();
    $(this).parent().hide();
  }); // Change column with catalog

  var buttonGrid = $('.button-grid');
  var buttonList = $('.button-list');
  var changeGrid = $('.change-grid');
  buttonGrid.on('click', function (event) {
    event.preventDefault();
    $(this).addClass('view-active');
    buttonList.removeClass('view-active');
    changeGrid.addClass('grid-column').removeClass('grid-line');
    changeGrid.children().addClass('col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4');
    changeGrid.children().removeClass('col-md-12 col-lg-12').find('.card-env').removeClass('card-env__row grid-line');
  });
  buttonList.on('click', function (event) {
    event.preventDefault();
    $(this).addClass('view-active');
    buttonGrid.removeClass('view-active');
    changeGrid.addClass('grid-line').removeClass('grid-column');
    changeGrid.children().removeClass('col-12 col-12 col-md-6 col-lg-6 col-xl-4');
    changeGrid.children().addClass('col-12 col-sm-12 col-md-6 col-lg-12').find('.card-env').addClass('card-env__row');
  }); // Select

  $('.env-right__select select, .column-items__select select, .form-review__select select').select2({
    minimumResultsForSearch: -1
  }); // Slider product card

  $('.product-card__slider-horizontal').each(function () {
    var swiper = new Swiper(this);
    swiperThumbs(swiper, {
      scope: '.swiper',
      element: 'swiper-thumbnails'
    });
  }); // Form add

  $('.add-address').on('click', function (event) {
    event.preventDefault();
    $('.form-cabinet__show-box').slideToggle();
  }); // Input Mask

  $('input[type="tel"]').inputmask("+38 (999) 999-9999"); // Change image with resize

  $(window).on('load resize', function () {
    var mainSliderItem = $('.main-slider__item');
    var discountBanner = $('.discount-banner__item');
    var dataSrcPortraitSlider = mainSliderItem.attr('data-src-portrait');
    var dataSrcSlider = mainSliderItem.attr('data-src-landscape');
    var dataSrcPortraitBanner = discountBanner.attr('data-src-portrait');
    var dataSrcLandscape = discountBanner.attr('data-src-landscape');

    if (window.matchMedia('(max-width: 767px)').matches) {
      mainSliderItem.attr('src', dataSrcPortraitSlider);
      discountBanner.attr('src', dataSrcPortraitBanner);
    } else {
      mainSliderItem.attr('src', dataSrcSlider);
      discountBanner.attr('src', dataSrcLandscape);
    }
  }); // Comments box

  $('.purchase__order-link').on('click', function (event) {
    event.preventDefault();
    $('.purchase__comments-box').slideToggle();
  }); // Modals

  var modalRegister = $('#modal-register').iziModal();
  var modalOneClick = $('#modal-oneClick').iziModal();
  var modalCall = $('#modal-call').iziModal();
  var modalBuy = $('#modal-product').iziModal();
  var modalCompare = $('#modal-comprasion').iziModal();
  var modalSave = $('#modal-selected').iziModal();
  var modalForgotten = $('#modal-forgotten').iziModal();
  var modalBasket = $('#modal-basket').iziModal();
  var modalMap = $('#modal-map').iziModal();
  var modalSizes = $('#modal-sizes').iziModal();
  var modalOrder = $('#modal-order').iziModal();
  var modalEnter = $('#modal-enter').iziModal();
  var modalCheaper = $('#modal-cheaper').iziModal();
  var modalDrop = $('#modal-drop').iziModal();
  $(document).on('click', '.user-cabinet__item', function (event) {
    event.preventDefault();
    modalEnter.iziModal('open');
  });
  $(document).on('click', '.column-items__btn-oneClick', function (event) {
    event.preventDefault();
    modalOneClick.iziModal('open');
  });
  $(document).on('click', '.order-call__button-yellow-b, .open-callback', function (event) {
    event.preventDefault();
    modalCall.iziModal('open');
  });
  $(document).on('click', '.open-product', function (event) {
    event.preventDefault();
    modalBuy.iziModal('open');
  });
  $(document).on('click', '.btn-compare', function (event) {
    event.preventDefault();
    modalCompare.iziModal('open');
  });
  $(document).on('click', '.btn-save', function (event) {
    event.preventDefault();
    modalSave.iziModal('open');
  });
  $(document).on('click', '.open-basket', function (event) {
    event.preventDefault();
    modalBasket.iziModal('open');
  });
  $(document).on('click', '.address__link', function (event) {
    event.preventDefault();
    modalMap.iziModal('open');
  });
  $(document).on('click', '.open-sizes', function (event) {
    event.preventDefault();
    modalSizes.iziModal('open');
  });
  $(document).on('click', '.open-order', function (event) {
    event.preventDefault();
    modalOrder.iziModal('open');
  });
  $(document).on('click', '.open-register', function (event) {
    event.preventDefault();
    modalRegister.iziModal('open');
  });
  $(document).on('click', '.open-forget', function (event) {
    event.preventDefault();
    modalForgotten.iziModal('open');
  });
  $(document).on('click', '.open-discount', function (event) {
    event.preventDefault();
    modalCheaper.iziModal('open');
  });
  $(document).on('click', '.open-drop', function (event) {
    event.preventDefault();
    modalDrop.iziModal('open');
  }); // Counter

  $(".btn-counter__clickable").on("click", function () {
    var inputCountValue = $(this).parent().find(".btn-counter__input").val();

    if ($(this).hasClass("btn-minus")) {
      var number = parseInt(inputCountValue) - 1;
      number = number > 0 ? number : 1, $(this).next().val(number);
    } else $(this).prev().val(parseInt(inputCountValue) + 1);
  });
  $('.list-box__link').on('click', function (event) {
    event.preventDefault();
    var headerFixed = $('.header__navbar-fixed').height();
    var id = $(this).attr('href'),
        top = $(id).offset().top - headerFixed;
    $('body,html').animate({
      scrollTop: top
    }, 1000);
  });
})(jQuery);
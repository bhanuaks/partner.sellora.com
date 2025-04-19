/*=== Javascript function indexing hear===========

1.counterUp ----------(Its use for counting number)
2.stickyHeader -------(header class sticky)
3.wowActive ----------( Waw js plugins activation)
4.swiperJs -----------(All swiper in this website hear)
5.salActive ----------(Sal animation for card and all text)
6.textChanger --------(Text flip for banner section)
7.timeLine -----------(History Time line)
8.datePicker ---------(On click date calender)
9.timePicker ---------(On click time picker)
10.timeLineStory -----(History page time line)
11.vedioActivation----(Vedio activation)
12.searchOption ------(search open)
13.cartBarshow -------(Cart sode bar)
14.sideMenu ----------(Open side menu for desktop)
15.Back to top -------(back to top)
16.filterPrice -------(Price filtering)

==================================================*/

(function ($) {
    'use strict';
    var rtsJs = {
        m: function (e) {
            rtsJs.d();
            rtsJs.methods();
        },
        d: function (e) {
            this._window = $(window),
            this._document = $(document),
            this._body = $('body'),
            this._html = $('html')
        },
        methods: function (e) {
            rtsJs.preloader();
            rtsJs.stickyHeader();
            rtsJs.backToTopInit();
            rtsJs.swiperActivation();
            rtsJs.cartNumberIncDec();
            rtsJs.countDown();
            // rtsJs.zoonImage();
            rtsJs.modalpopupCard();
            rtsJs.filter();
            rtsJs.counterUp();
            rtsJs.niceSelect();
            rtsJs.stickySidebar();
            rtsJs.sideMenu();
            rtsJs.searchOption();
            rtsJs.menuCurrentLink();
            rtsJs.modalOver();
            rtsJs.darklightSwitcher();
        },

        preloader: function(e){
          $(window).on('load', function () {
            $("#rts__preloader").delay(0).fadeOut(1000);
          })
          $(window).on('load', function () {
            $("#weiboo-load").delay(0).fadeOut(1000);
          })
        },
        
        // sticky Header Activation
        stickyHeader: function (e) {
          $(window).scroll(function () {
              if ($(this).scrollTop() > 150) {
                  $('.header--sticky').addClass('sticky')
              } else {
                  $('.header--sticky').removeClass('sticky')
              }
          })
        },

        // backto Top Area Start
        backToTopInit: function () {
          $(document).ready(function(){
          "use strict";
      
          var progressPath = document.querySelector('.progress-wrap path');
          var pathLength = progressPath.getTotalLength();
          progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
          progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
          progressPath.style.strokeDashoffset = pathLength;
          progressPath.getBoundingClientRect();
          progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
          var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
          }
          updateProgress();
          $(window).scroll(updateProgress);	
          var offset = 150;
          var duration = 500;
          jQuery(window).on('scroll', function() {
            if (jQuery(this).scrollTop() > offset) {
              jQuery('.progress-wrap').addClass('active-progress');
            } else {
              jQuery('.progress-wrap').removeClass('active-progress');
            }
          });				
          jQuery('.progress-wrap').on('click', function(event) {
            event.preventDefault();
            jQuery('html, body').animate({scrollTop: 0}, duration);
            return false;
          })
          
          
        });
  
        },


        swiperActivation: function(){
          $(document).ready(function(){
            let defaults = {
              spaceBetween: 30,
              slidesPerView: 2
            };
            // call init function
            initSwipers(defaults);
            
            function initSwipers(defaults = {}, selector = ".swiper-data") {
              let swipers = document.querySelectorAll(selector);
              swipers.forEach((swiper) => {
                // get options
                let optionsData = swiper.dataset.swiper
                  ? JSON.parse(swiper.dataset.swiper)
                  : {};
                // combine defaults and custom options
                let options = {
                  ...defaults,
                  ...optionsData
                };
            
                //console.log(options);
                // init
                new Swiper(swiper, options);
              });
            }
            
          })

          $(document).ready(function () {

            var sliderThumbnail = new Swiper(".slider-thumbnail", {
              spaceBetween: 20,
              slidesPerView: 3,
              freeMode: true,
              watchSlidesVisibility: true,
              watchSlidesProgress: true,
              breakpoints: {
                991: {
                  spaceBetween: 30,
                },
                320: {
                  spaceBetween: 15,
                }
              },
            });
    
            var swiper = new Swiper(".swiper-container-h12", {
              thumbs: {
                swiper: sliderThumbnail,
              },
            });
    
          });

        },


        cartNumberIncDec: function(){
          $(document).ready(function(){
            
            $(function () {
              $(".button").on("click", function () {
                var $button = $(this);
                var $parent = $button.parents('.quantity-edit');
                var oldValue = $parent.find('.input').val();
          
                if ($button.text() == "+") {
                  var newVal = parseFloat(oldValue) + 1;
                } else {
                  // Don't allow decrementing below zero
                  if (oldValue > 1) {
                    var newVal = parseFloat(oldValue) - 1;
                  } else {
                    newVal = 1;
                  }
                }
                $parent.find('a.add-to-cart').attr('data-quantity', newVal);
                $parent.find('.input').val(newVal);
              });
            });
          });

          $(".coupon-click").on('click', function (){
            $(this).parents('.coupon-input-area-1').find(".coupon-input-area").toggleClass('show');
          });

          $('.close-c1').on('click', function () {
            $('.close-c1'),$(this).parents( '.cart-item-1' ).addClass('deactive');
          });
        
        },

        countDown: function(){
          $(function() {
            countDown.init();
            updateCountdowns();
            setInterval(updateCountdowns, 1000);
          
            function updateCountdowns() {
              countDown.validElements.forEach((element, i) => {
                countDown.changeTime(element, countDown.endDate[i], i);
              });
            }
          });
          
          const countDown = {
            endDate: [],
            validElements: [],
            display: [],
            initialHeight: undefined,
            initialInnerDivMarginTop: undefined,
            originalBorderTopStyle: undefined,
          
            init: function() {
              $('.countDown').each(function() {
                const regex_match = $(this).text().match(/([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2})/);
                if (!regex_match) return;
          
                const end = new Date(regex_match[3], regex_match[2] - 1, regex_match[1], regex_match[4], regex_match[5], regex_match[6]);
          
                if (end > new Date()) {
                  countDown.validElements.push($(this));
                  countDown.endDate.push(end);
                  countDown.changeTime($(this), end, countDown.validElements.length - 1);
                  $(this).html(countDown.display.next.map(item => `<div class='container'><div class='a'><div>${item}</div></div></div>`).join(''));
                } else {
                  // Display your message when the countdown expires
                  $(this).html("<p class='end'>Sorry, your session has expired.</p>");
                }
              });
            },
          
            reset: function(element) {
              // This function appears to be incomplete, as it currently doesn't do anything.
            },
          
            changeTime: function(element, endTime) {
              if (!endTime) return;
          
              const today = new Date();
              if (today.getTime() <= endTime.getTime()) {
                countDown.display = {
                  'last': this.calcTime(endTime.getTime() - today.getTime() + 1000),
                  'next': this.calcTime(endTime.getTime() - today.getTime())
                };
                countDown.display.next = countDown.display.next.map(item => item.toString().padStart(2, '0'));
                countDown.display.last = countDown.display.last.map(item => item.toString().padStart(2, '0'));
          
                element.find('div.container div.a div').each((index, div) => {
                  $(div).text(countDown.display.last[index]);
                });
          
                this.reset(element.find('div.container'));
              } else {
                element.html("<p class='end'>Sorry, your session has expired.</p>");
              }
            },
          
            calcTime: function(milliseconds) {
              const secondsTotal = Math.floor(milliseconds / 1000);
              const days = Math.floor(secondsTotal / 86400);
              const hours = Math.floor((secondsTotal % 86400) / 3600);
              const minutes = Math.floor((secondsTotal % 3600) / 60);
              const seconds = secondsTotal % 60;
              return [days, hours, minutes, seconds];
            }
          };
          
        },


        zoonImage: function(){
          $(document).ready(function(){
            function imageZoom(imgID, resultID) {
              var img, lens, result, cx, cy;
              img = document.getElementById(imgID);
              result = document.getElementById(resultID);
              /*create lens:*/
              lens = document.createElement("DIV");
              lens.setAttribute("class", "img-zoom-lens");
              /*insert lens:*/
              img.parentElement.insertBefore(lens, img);
              /*calculate the ratio between result DIV and lens:*/
              cx = result.offsetWidth / lens.offsetWidth;
              cy = result.offsetHeight / lens.offsetHeight;
              /*set background properties for the result DIV:*/
              result.style.backgroundImage = "url('" + img.src + "')";
              result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
              /*execute a function when someone moves the cursor over the image, or the lens:*/
              lens.addEventListener("mousemove", moveLens);
              img.addEventListener("mousemove", moveLens);
              /*and also for touch screens:*/
              lens.addEventListener("touchmove", moveLens);
              img.addEventListener("touchmove", moveLens);
              function moveLens(e) {
                var pos, x, y;
                /*prevent any other actions that may occur when moving over the image:*/
                e.preventDefault();
                /*get the cursor's x and y positions:*/
                pos = getCursorPos(e);
                /*calculate the position of the lens:*/
                x = pos.x - (lens.offsetWidth / 2);
                y = pos.y - (lens.offsetHeight / 2);
                /*prevent the lens from being positioned outside the image:*/
                if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
                if (x < 0) {x = 0;}
                if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
                if (y < 0) {y = 0;}
                /*set the position of the lens:*/
                lens.style.left = x + "px";
                lens.style.top = y + "px";
                /*display what the lens "sees":*/
                result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
              }
              function getCursorPos(e) {
                var a, x = 0, y = 0;
                e = e || window.event;
                /*get the x and y positions of the image:*/
                a = img.getBoundingClientRect();
                /*calculate the cursor's x and y coordinates, relative to the image:*/
                x = e.pageX - a.left;
                y = e.pageY - a.top;
                /*consider any page scrolling:*/
                x = x - window.pageXOffset;
                y = y - window.pageYOffset;
                return {x : x, y : y};
              }
            }
  
            imageZoom("myimage", "myresult");


          });
        },


        modalpopupCard: function(){
            // Newsletter popup
              $(document).ready(function () {
                function showpanel() {
                  $(".anywere-home").addClass("bgshow");
                  $(".rts-newsletter-popup").addClass("popup");
                }
                setTimeout(showpanel, 4000)
              });

              $(".anywere-home").on('click', function () {
                $(".rts-newsletter-popup").removeClass("popup")
                $(".anywere-home").removeClass("bgshow")
              });
              $(".newsletter-close-btn").on('click', function () {
                $(".rts-newsletter-popup").removeClass("popup")
                $(".anywere-home").removeClass("bgshow")
              });

              // Product details popup
              $(".product-details-popup-btn").on('click', function () {
                $(".product-details-popup-wrapper").addClass("popup")
                $("#anywhere-home").addClass("bgshow");
              });
              $(".product-bottom-action .view-btn").on('click', function () {
                $(".product-details-popup-wrapper").addClass("popup");
                $("#anywhere-home").addClass("bgshow");
              });
              $(".product-details-popup-wrapper .cart-edit").on('click', function () {
                $(".product-details-popup-wrapper").addClass("popup");
                $("#anywhere-home").addClass("bgshow");
              });

              $(".product-details-close-btn").on('click', function () {
                $(".product-details-popup-wrapper").removeClass("popup");
                $("#anywhere-home").removeClass("bgshow");
              });

              $(".message-show-action").on('click', function () {
                $(".successfully-addedin-wishlist").show(500);
                $("#anywhere-home").addClass("bgshow");
              });

              $("#anywhere-home").on('click', function () {
                $(".successfully-addedin-wishlist").hide(0);
                $("#anywhere-home").removeClass("bgshow");
              });

              $("#anywhere-home").on('click', function () {
                $(".product-details-popup-wrapper").removeClass("popup");
                $("#anywhere-home").removeClass("bgshow");
              });



              // anywhere home

              $(document).ready(function () {
                function showpanel() {
                  $(".anywere-home").addClass("bgshow");
                  $(".rts-newsletter-popup").addClass("popup");
                }
                setTimeout(showpanel, 4000)
              });
            
              $(".anywere-home").on('click', function () {
                $(".rts-newsletter-popup").removeClass("popup");
                $(".anywere-home").removeClass("bgshow");
              });
              $(".newsletter-close-btn").on('click', function () {
                $(".rts-newsletter-popup").removeClass("popup")
                $(".anywere-home").removeClass("bgshow")
              });
            
              // Product details popup
              $(".product-details-popup-btn").on('click', function () {
                $(".product-details-popup-wrapper").addClass("popup")
                $(".anywere").addClass("bgshow");
              });
              $(".product-bottom-action .view-btn").on('click', function () {
                $(".product-details-popup-wrapper").addClass("popup");
                $(".anywere").addClass("bgshow");
              });
              $(".product-details-popup-wrapper .cart-edit").on('click', function () {
                $(".product-details-popup-wrapper").addClass("popup");
                $(".anywere-home").addClass("bgshow");
              });
            
              $(".product-details-close-btn").on('click', function () {
                $(".product-details-popup-wrapper").removeClass("popup");
                $(".anywere").removeClass("bgshow");
              });
              $(".anywere").on('click', function () {
                $(".product-details-popup-wrapper").removeClass("popup");
                $(".anywere").removeClass("bgshow");
              });


              $('.section-activation').on('click', function () {
                $('.section-activation'),$(this).parents( '.item-parent' ).addClass('deactive');
              });
              
        },

        filter: function(){
            // Filter item
          $(document).on('click', '.filter-btn', function () {
            var show = $(this).data('show');
            $(show).removeClass("hide").siblings().addClass("hide");
          });

          $(document).on('click', '.filter-btn', function () {
            $(this).addClass('active').siblings().removeClass('active');
          })
          
        },

        counterUp: function () {
          $('.counter').counterUp({
              delay: 10,
              time: 2000
          });
          $('.counter').addClass('animated fadeInDownBig');
          $('h3').addClass('animated fadeIn');

        },

        niceSelect : function(){
          (function($) {

            $.fn.niceSelect = function(method) {
              
              // Methods
              if (typeof method == 'string') {      
                if (method == 'update') {
                  this.each(function() {
                    var $select = $(this);
                    var $dropdown = $(this).next('.nice-select');
                    var open = $dropdown.hasClass('open');
                    
                    if ($dropdown.length) {
                      $dropdown.remove();
                      create_nice_select($select);
                      
                      if (open) {
                        $select.next().trigger('click');
                      }
                    }
                  });
                } else if (method == 'destroy') {
                  this.each(function() {
                    var $select = $(this);
                    var $dropdown = $(this).next('.nice-select');
                    
                    if ($dropdown.length) {
                      $dropdown.remove();
                      $select.css('display', '');
                    }
                  });
                  if ($('.nice-select').length == 0) {
                    $(document).off('.nice_select');
                  }
                } else {
                  console.log('Method "' + method + '" does not exist.')
                }
                return this;
              }
                
              // Hide native select
              this.hide();
              
              // Create custom markup
              this.each(function() {
                var $select = $(this);
                
                if (!$select.next().hasClass('nice-select')) {
                  create_nice_select($select);
                }
              });
              
              function create_nice_select($select) {
                $select.after($('<div></div>')
                  .addClass('nice-select')
                  .addClass($select.attr('class') || '')
                  .addClass($select.attr('disabled') ? 'disabled' : '')
                  .attr('tabindex', $select.attr('disabled') ? null : '0')
                  .html('<span class="current"></span><ul class="list"></ul>')
                );
                  
                var $dropdown = $select.next();
                var $options = $select.find('option');
                var $selected = $select.find('option:selected');
                
                $dropdown.find('.current').html($selected.data('display') || $selected.text());
                
                $options.each(function(i) {
                  var $option = $(this);
                  var display = $option.data('display');

                  $dropdown.find('ul').append($('<li></li>')
                    .attr('data-value', $option.val())
                    .attr('data-display', (display || null))
                    .addClass('option' +
                      ($option.is(':selected') ? ' selected' : '') +
                      ($option.is(':disabled') ? ' disabled' : ''))
                    .html($option.text())
                  );
                });
              }
              
              /* Event listeners */
              
              // Unbind existing events in case that the plugin has been initialized before
              $(document).off('.nice_select');
              
              // Open/close
              $(document).on('click.nice_select', '.nice-select', function(event) {
                var $dropdown = $(this);
                
                $('.nice-select').not($dropdown).removeClass('open');
                $dropdown.toggleClass('open');
                
                if ($dropdown.hasClass('open')) {
                  $dropdown.find('.option');  
                  $dropdown.find('.focus').removeClass('focus');
                  $dropdown.find('.selected').addClass('focus');
                } else {
                  $dropdown.focus();
                }
              });
              
              // Close when clicking outside
              $(document).on('click.nice_select', function(event) {
                if ($(event.target).closest('.nice-select').length === 0) {
                  $('.nice-select').removeClass('open').find('.option');  
                }
              });
              
              // Option click
              $(document).on('click.nice_select', '.nice-select .option:not(.disabled)', function(event) {
                var $option = $(this);
                var $dropdown = $option.closest('.nice-select');
                
                $dropdown.find('.selected').removeClass('selected');
                $option.addClass('selected');
                
                var text = $option.data('display') || $option.text();
                $dropdown.find('.current').text(text);
                
                $dropdown.prev('select').val($option.data('value')).trigger('change');
              });

              // Keyboard events
              $(document).on('keydown.nice_select', '.nice-select', function(event) {    
                var $dropdown = $(this);
                var $focused_option = $($dropdown.find('.focus') || $dropdown.find('.list .option.selected'));
                
                // Space or Enter
                if (event.keyCode == 32 || event.keyCode == 13) {
                  if ($dropdown.hasClass('open')) {
                    $focused_option.trigger('click');
                  } else {
                    $dropdown.trigger('click');
                  }
                  return false;
                // Down
                } else if (event.keyCode == 40) {
                  if (!$dropdown.hasClass('open')) {
                    $dropdown.trigger('click');
                  } else {
                    var $next = $focused_option.nextAll('.option:not(.disabled)').first();
                    if ($next.length > 0) {
                      $dropdown.find('.focus').removeClass('focus');
                      $next.addClass('focus');
                    }
                  }
                  return false;
                // Up
                } else if (event.keyCode == 38) {
                  if (!$dropdown.hasClass('open')) {
                    $dropdown.trigger('click');
                  } else {
                    var $prev = $focused_option.prevAll('.option:not(.disabled)').first();
                    if ($prev.length > 0) {
                      $dropdown.find('.focus').removeClass('focus');
                      $prev.addClass('focus');
                    }
                  }
                  return false;
                // Esc
                } else if (event.keyCode == 27) {
                  if ($dropdown.hasClass('open')) {
                    $dropdown.trigger('click');
                  }
                // Tab
                } else if (event.keyCode == 9) {
                  if ($dropdown.hasClass('open')) {
                    return false;
                  }
                }
              });

              // Detect CSS pointer-events support, for IE <= 10. From Modernizr.
              var style = document.createElement('a').style;
              style.cssText = 'pointer-events:auto';
              if (style.pointerEvents !== 'auto') {
                $('html').addClass('no-csspointerevents');
              }
              
              return this;

            };

          }(jQuery));

          /* Initialize */

          // $(document).ready(function() {
          //   $('select').niceSelect();
          // });
        },

        stickySidebar: function () {
          if (typeof $.fn.theiaStickySidebar !== "undefined") {
            $(".rts-sticky-column-item").theiaStickySidebar({
              additionalMarginTop:60,
            });
          }
        },

        sideMenu:function(){
          $(document).on('click', '.menu-btn', function () {
            $("#side-bar").addClass("show");
            $("#anywhere-home").addClass("bgshow");
          });
          $(document).on('click', '.close-icon-menu', function () {
            $("#side-bar").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });
          $(document).on('click', '#anywhere-home', function () {
            $("#side-bar").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });
          $(document).on('click', '.onepage .mainmenu li a', function () {
            $("#side-bar").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });
          $('#mobile-menu-active').metisMenu();
          $('#category-active-four').metisMenu();
          $('#category-active-menu').metisMenu();
          $('.category-active-menu-sidebar').metisMenu();
        },

        // search popup
        searchOption: function () {
        $(document).on('click', '#search', function () {
          $(".search-input-area").addClass("show");
          $("#anywhere-home").addClass("bgshow");
        });
        $(document).on('click', '#close', function () {
          $(".search-input-area").removeClass("show");
          $("#anywhere-home").removeClass("bgshow");
        });
        $(document).on('click', '#anywhere-home', function () {
          $(".search-input-area").removeClass("show");
          $("#anywhere-home").removeClass("bgshow");
        });
        },

        menuCurrentLink: function () {
          var currentPage = location.pathname.split("https://html.themewant.com/"),
          current = currentPage[currentPage.length-1];
          $('.parent-nav li a').each(function(){
              var $this = $(this);
              if($this.attr('href') === current){
                  $this.addClass('active');
                  $this.parents('.has-dropdown').addClass('menu-item-open')
              }
          });
        },

        
        modalOver: function(){
          $(document).ready(function () {
            // Declare a variable to keep track of the modal state
            var modalShown = false;
            
            // Function to show the modal after a delay
            function showModal() {
              if (!modalShown) {
                setTimeout(function () {
                  $("#myModal-1").modal('show');
                  modalShown = true; // Set the flag to true when the modal is shown
                }, 2000);
              }
            }
          
            // Show the modal when the document is ready
            showModal();
          
            // Set the flag to false when the modal is closed
            $('#myModal-1').on('hidden.bs.modal', function () {
              modalShown = false;
            });
          });
        
        },


        darklightSwitcher: function(){
          let html = document.documentElement;
          let rtsTheme = localStorage.theme;
          let rtsThemeLayout = localStorage.layout;
          let rtsThemeNavbar = localStorage.navbar;

          let darkMode = rtsTheme === "dark";
          let rtlLayout = rtsThemeLayout === "rtl";
          let topMenu = rtsThemeNavbar === "top";

          // Theme Mode Toggle 
          if (rtsTheme) {
              html.setAttribute("data-theme", rtsTheme);

              if (rtsTheme === "dark") {
                  localStorage.theme === "dark"
                  $(".rts-customizer__btn--light").removeClass("active");
                  $(".rts-customizer__btn--dark").addClass("active");
                  
              } else {
                  localStorage.theme === "light"
              }
          }

          // Theme Layout Toggle
          if (rtsThemeLayout) {

              html.setAttribute("dir", rtsThemeLayout);

              if (rtsThemeLayout === "rtl") {
                  localStorage.themeLayout === "rtl"
                  $(".rts-customizer__btn--ltr").removeClass("active");
                  $(".rts-customizer__btn--rtl").addClass("active");
              } else {
                  localStorage.themeLayout === "ltr"
              }
          }

            // RTL Layout
          function rtlTheme(e) {
              let rtsThemeLayout = "rtl";
              localStorage.layout = rtsThemeLayout;
              document.documentElement.setAttribute("dir", rtsThemeLayout);

              rtlLayout = true;
          }

          // LTR Layout
          function ltrTheme(e) {
              let rtsThemeLayout = "ltr";
              localStorage.layout =  rtsThemeLayout;
              document.documentElement.setAttribute("dir", rtsThemeLayout);

              rtlLayout = false;
          }

          // LTR Layout Add
          $(".rts-customizer__btn--ltr").click(function() {
              $(".rts-customizer__btn--rtl").removeClass("active");
              $(".rts-customizer__btn--ltr").addClass("active");

              ltrTheme();

              if($("body").hasClass("layout-rtl")) {
                $("body").removeClass("layout-rtl");
              }
              $('html').attr('dir', 'ltr');
              $("body").addClass("layout-ltr");
          })

          // RTL Layout Add
          $(".rts-customizer__btn--rtl").click(function() {
              $(".rts-customizer__btn--ltr").removeClass("active");
              $(".rts-customizer__btn--rtl").addClass("active");
              
              rtlTheme();
          })
          $('.button-setting-rtl-ltr').click(function(){
            $('.rts-ltr-rtl-setting-button-area').toggleClass("active");
          })

        },

        
    }

    rtsJs.m();
  })(jQuery, window) 



  function zoom(e) {
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX / zoomer.offsetWidth * 100
    y = offsetY / zoomer.offsetHeight * 100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
  }





// ====================================price-filter

const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 100;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});





$(document).on('click', 'li', function(){
  $('li').removeClass('active');
  $('ul').toggleClass('expanded');
  $(this).addClass('active');
  var tab_id = $(this).attr('data-tab');
  $('.tab-content_store').removeClass('current');
  $(this).addClass('current');
  $('#'+tab_id).addClass('current');
});



function myFunction(y) {
   if (y === undefined) {
      y = 1;
   }
   var x = document.getElementById('myDIV-'+y);
   if (x.style.display === 'block') {
     x.style.display = 'none';
   } else {
     x.style.display = 'block';
   }
}




// image_file_uploader
(function ($) {
  $.fn.uploader = function (options) {
    var settings = $.extend(
      {
        MessageAreaText: "No files selected.",
        MessageAreaTextWithFiles: "File List:",
        DefaultErrorMessage: "Unable to open this file.",
        BadTypeErrorMessage: "We cannot accept this file type at this time.",
        acceptedFileTypes: [
          "pdf",
          "jpg",
          "gif",
          "jpeg",
          "bmp",
          "tif",
          "tiff",
          "png",
          "xps",
          "doc",
          "docx",
          "fax",
          "wmp",
          "ico",
          "txt",
          "cs",
          "rtf",
          "xls",
          "xlsx"
        ]
      },
      options
    );

    var uploadId = 1;
    //update the messaging
    $(".file-uploader__message-area p").text(
      options.MessageAreaText || settings.MessageAreaText
    );

    //create and add the file list and the hidden input list
    var fileList = $('<ul class="file-list"></ul>');
    var hiddenInputs = $('<div class="hidden-inputs hidden"></div>');
    $(".file-uploader__message-area").after(fileList);
    $(".file-list").after(hiddenInputs);

    //when choosing a file, add the name to the list and copy the file input into the hidden inputs
    $(".file-chooser__input").on("change", function () {
      var files = document.querySelector(".file-chooser__input").files;

      for (var i = 0; i < files.length; i++) {
        console.log(files[i]);

        var file = files[i];
        var fileName = file.name.match(/([^\\\/]+)$/)[0];

        //clear any error condition
        $(".file-chooser").removeClass("error");
        $(".error-message").remove();

        //validate the file
        var check = checkFile(fileName);
        if (check === "valid") {
          // move the 'real' one to hidden list
          $(".hidden-inputs").append($(".file-chooser__input"));

          //insert a clone after the hiddens (copy the event handlers too)
          $(".file-chooser").append(
            $(".file-chooser__input").clone({ withDataAndEvents: true })
          );

          //add the name and a remove button to the file-list
          $(".file-list").append(
            '<li style="display: none;"><span class="file-list__name">' +
              fileName +
              '</span><button class="removal-button" data-uploadid="' +
              uploadId +
              '"></button></li>'
          );
          $(".file-list").find("li:last").show(800);

          //removal button handler
          $(".removal-button").on("click", function (e) {
            e.preventDefault();

            //remove the corresponding hidden input
            $(
              '.hidden-inputs input[data-uploadid="' +
                $(this).data("uploadid") +
                '"]'
            ).remove();

            //remove the name from file-list that corresponds to the button clicked
            $(this)
              .parent()
              .hide("puff")
              .delay(10)
              .queue(function () {
                $(this).remove();
              });

            //if the list is now empty, change the text back
            if ($(".file-list li").length === 0) {
              $(".file-uploader__message-area").text(
                options.MessageAreaText || settings.MessageAreaText
              );
            }
          });

          //so the event handler works on the new "real" one
          $(".hidden-inputs .file-chooser__input")
            .removeClass("file-chooser__input")
            .attr("data-uploadId", uploadId);

          //update the message area
          $(".file-uploader__message-area").text(
            options.MessageAreaTextWithFiles ||
              settings.MessageAreaTextWithFiles
          );

          uploadId++;
        } else {
          //indicate that the file is not ok
          $(".file-chooser").addClass("error");
          var errorText =
            options.DefaultErrorMessage || settings.DefaultErrorMessage;

          if (check === "badFileName") {
            errorText =
              options.BadTypeErrorMessage || settings.BadTypeErrorMessage;
          }

          $(".file-chooser__input").after(
            '<p class="error-message">' + errorText + "</p>"
          );
        }
      }
    });

    var checkFile = function (fileName) {
      var accepted = "invalid",
        acceptedFileTypes =
          this.acceptedFileTypes || settings.acceptedFileTypes,
        regex;

      for (var i = 0; i < acceptedFileTypes.length; i++) {
        regex = new RegExp("\\." + acceptedFileTypes[i] + "$", "i");

        if (regex.test(fileName)) {
          accepted = "valid";
          break;
        } else {
          accepted = "badFileName";
        }
      }

      return accepted;
    };
  };
})($);

//init
$(document).ready(function () {
  console.log("hi");
  $(".fileUploader").uploader({
    MessageAreaText: "No files selected. Please select a file."
  });
});







$('.sub-menu ul').hide();
$(".sub-menu a").click(function () {
  $(this).parent(".sub-menu").children("ul").slideToggle("100");
  $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});
      






// listing-section
function toggleMenu(event) {
const menu = event.target.nextElementSibling;
menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Sample functions for actions
function editListing() {
    alert("Edit Listing clicked");
}

function copyListing() {
    alert("Copy Listing clicked");
}

function archiveListing() {
    alert("Archive Listing clicked");
}

function deleteListing() {
    alert("Delete Listing clicked");
}

// Close menu if clicked outside
document.addEventListener('click', function(event) {
    const isClickInside = event.target.closest('.listing');
    const menuOptions = document.querySelectorAll('.menu-options');

    if (!isClickInside) {
        menuOptions.forEach(menu => menu.style.display = 'none');
    }
});






// =========================upload-file


const fileTempl = document.getElementById("file-template"),
  imageTempl = document.getElementById("image-template"),
  empty = document.getElementById("empty");

// use to store pre selected files
let FILES = {};

// check if file is of type image and prepend the initialied
// template to the target element
function addFile(target, file) {
  const isImage = file.type.match("image.*"),
    objectURL = URL.createObjectURL(file);

  const clone = isImage
    ? imageTempl.content.cloneNode(true)
    : fileTempl.content.cloneNode(true);

  clone.querySelector("h1").textContent = file.name;
  clone.querySelector("li").id = objectURL;
  clone.querySelector(".delete").dataset.target = objectURL;
  clone.querySelector(".size").textContent =
    file.size > 1024
      ? file.size > 1048576
        ? Math.round(file.size / 1048576) + "mb"
        : Math.round(file.size / 1024) + "kb"
      : file.size + "b";

  isImage &&
    Object.assign(clone.querySelector("img"), {
      src: objectURL,
      alt: file.name
    });

  empty.classList.add("hidden");
  target.prepend(clone);
  console.log(objectURL)
  FILES[objectURL] = file;
}

const gallery = document.getElementById("gallery"),
  overlay = document.getElementById("overlay");

// click the hidden input of type file if the visible button is clicked
// and capture the selected files
const hidden = document.getElementById("hidden-input");
document.getElementById("button").onclick = () => hidden.click();
hidden.onchange = (e) => {
  for (const file of e.target.files) {
    addFile(gallery, file);
  }
};

// use to check if a file is being dragged
const hasFiles = ({ dataTransfer: { types = [] } }) =>
  types.indexOf("Files") > -1;

// use to track dragenter and dragleave events.
// this is to know if the outermost parent is dragged over
// without issues due to drag events on its children
let counter = 0;

// reset counter and append file to gallery when file is dropped
function dropHandler(ev) {
  ev.preventDefault();
  for (const file of ev.dataTransfer.files) {
    addFile(gallery, file);
    overlay.classList.remove("draggedover");
    counter = 0;
  }
}

// only react to actual files being dragged
function dragEnterHandler(e) {
  e.preventDefault();
  if (!hasFiles(e)) {
    return;
  }
  ++counter && overlay.classList.add("draggedover");
}

function dragLeaveHandler(e) {
  1 > --counter && overlay.classList.remove("draggedover");
}

function dragOverHandler(e) {
  if (hasFiles(e)) {
    e.preventDefault();
  }
}

// event delegation to caputre delete events
// from the waste buckets in the file preview cards
gallery.onclick = ({ target }) => {
  if (target.classList.contains("delete")) {
    const ou = target.dataset.target;
    document.getElementById(ou).remove(ou);
    gallery.children.length === 1 && empty.classList.remove("hidden");
    delete FILES[ou];
  }
};

// print all selected files
document.getElementById("submit").onclick = () => {
  
  alert(`Submitted Files:\n${JSON.stringify(FILES)}`);
  console.log(FILES);
};

// clear entire selection
document.getElementById("cancel").onclick = () => {
  while (gallery.children.length > 0) {
    gallery.lastChild.remove();
  }
  FILES = {};
  empty.classList.remove("hidden");
  gallery.append(empty);
};








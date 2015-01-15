/*
     _    ____  ____  _     ___ ____    _  _____ ___ ___  _   _       _ ____  
    / \  |  _ \|  _ \| |   |_ _/ ___|  / \|_   _|_ _/ _ \| \ | |     | / ___| 
   / _ \ | |_) | |_) | |    | | |     / _ \ | |  | | | | |  \| |  _  | \___ \ 
  / ___ \|  __/|  __/| |___ | | |___ / ___ \| |  | | |_| | |\  | | |_| |___) |
 /_/   \_\_|   |_|   |_____|___\____/_/   \_\_| |___\___/|_| \_|  \___/|____/ 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
*/

$(document).ready(function(){
    alert('done loading app.js');
  });

//Setting up the core Angular App - xiriCSS
var xiriCSS = angular.module('xiriCSS', ['ngRoute']);



/*
  ____   ___  _   _ _____ ___ _   _  ____ 
 |  _ \ / _ \| | | |_   _|_ _| \ | |/ ___|
 | |_) | | | | | | | | |  | ||  \| | |  _ 
 |  _ <| |_| | |_| | | |  | || |\  | |_| |
 |_| \_\\___/ \___/  |_| |___|_| \_|\____|
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
*/

xiriCSS.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    // route for the home page
    .when('/', {
      templateUrl : 'partials/home.html',
      controller  : 'HomeController',
      activePage: 'gettingstarted'
    })
}]);


/*
  ____  _____ ______     _____ ____ _____ ____  
 / ___|| ____|  _ \ \   / /_ _/ ___| ____/ ___| 
 \___ \|  _| | |_) \ \ / / | | |   |  _| \___ \ 
  ___) | |___|  _ < \ V /  | | |___| |___ ___) |
 |____/|_____|_| \_\ \_/  |___\____|_____|____/ 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
*/

xiriCSS.service('xiriServices', function () {

      var xiriObject = {};

      // Function to call JS for adding default classes to new custom Angular directives
      xiriObject.initDirectiveClasses = function () {
        $('row').addClass('row');
        $('magictabs').addClass('magictabs');
        $('magictabstitle').addClass('magictabs-title');
        $('magictabscontent').addClass('magictabs-content');
        $('magicmodalmask').addClass('mask').attr('role','dialog');
        $('magicmodalcontent').addClass('modal').attr('role','alert');
        $('alert').addClass('alert').attr('role','alert');
        $('panel').addClass('panel');
        $('vanishtoggle').addClass('vanish-toggle');
        $('vanishcontent').addClass('vanish');
        $('accordion').addClass('accordion');
        $('accordiontitle').addClass('accordion-title');
        $('accordioncontent').addClass('accordion-content');
        $('dropdown').addClass('btn-dropdown');
        $('checkbox').addClass('toggle slide');
        $('[tooltip-top]').addClass('tooltip tooltip-top');
        $('[tooltip-right]').addClass('tooltip tooltip-right');
        $('[tooltip-bottom]').addClass('tooltip tooltip-bottom');
        $('[tooltip-left]').addClass('tooltip tooltip-left');

        // Adding in variable to detect IE as user agent for specific styling
        var doc = document.documentElement;
        doc.setAttribute('data-useragent', navigator.userAgent);
    };

    // Function to call JS for sticky nav
    xiriObject.initScrollToTop = function () {
      
      // Angular injecting code for scroll-to-top functionality into each route view
      var topLink = $('.scroll-to-top');
      var showTopLink = 500;
      topLink.hide();

      $(window).scroll( function(){
        var y = $(window).scrollTop();
        if( y > showTopLink  ) {
          topLink.fadeIn('slow');
        } else {
          topLink.fadeOut('slow');
        }
      });

      topLink.click( function(e) {
        e.preventDefault();
        $('body').animate( {scrollTop : 0}, 'slow' );
      });
    };

    // Function to call JS for sticky nav
    xiriObject.initStickyNav = function () {
      
      var stickyNavTop = $('#components-left').offset().top;  
      var stickyNavContainer = $('.nav-box-vertical'); 

      var stickyNav = function(){  
        var scrollTop = $(window).scrollTop();  

        if (scrollTop > stickyNavTop) {   
          stickyNavContainer.addClass('sticky');  
        } else {  
          stickyNavContainer.removeClass('sticky');   
        }  
      };  

      stickyNav();  

      $(window).scroll(function() {  
        stickyNav();  
      });
    };

   // Function to call JS for scroll-spy highlighting functionality
    xiriObject.initScrollSpy = function () {

      var colors = parseFloat($('#colors').offset().top);
      var basegridsystems = parseFloat($('#basegridsystems').offset().top);
      var fontfamilies = parseFloat($('#fontfamilies').offset().top);
      var headers = parseFloat($('#headers').offset().top);
      var textstyles = parseFloat($('#textstyles').offset().top);
      var alignmenthelpers = parseFloat($('#alignmenthelpers').offset().top);
      var navigation = parseFloat($('#navigation').offset().top);
      var superhero = parseFloat($('#superhero').offset().top);
      var buttons = parseFloat($('#buttons').offset().top);
      var alerts = parseFloat($('#alerts').offset().top);
      var panels = parseFloat($('#panels').offset().top);
      var tooltips = parseFloat($('#tooltips').offset().top);
      var images = parseFloat($('#images').offset().top);
      var magictabs = parseFloat($('#magictabs').offset().top);
      var accordions = parseFloat($('#accordions').offset().top);
      var forms = parseFloat($('#forms').offset().top);
      var modals = parseFloat($('#modals').offset().top);
      var bottom = parseFloat($('#bottom').offset().top);
     
      $(window).scroll(function (event) {

        // what the y position of the scroll is
        var y = $(this).scrollTop();

        if (y > colors && y < basegridsystems) {
          $('#gotocolors').addClass('active-sidebar-link');
        } else {
          $('#gotocolors').removeClass('active-sidebar-link');
        }

        if (y > basegridsystems && y < fontfamilies) {
          $('#gotobasegridsystems').addClass('active-sidebar-link');
        } else {
          $('#gotobasegridsystems').removeClass('active-sidebar-link');
        }

        if (y > fontfamilies && y < headers) {
          $('#gotofontfamilies').addClass('active-sidebar-link');
        } else {
          $('#gotofontfamilies').removeClass('active-sidebar-link');
        }

        if (y > headers && y < textstyles) {
          $('#gotoheaders').addClass('active-sidebar-link');
        } else {
          $('#gotoheaders').removeClass('active-sidebar-link');
        }

        if (y > textstyles && y < alignmenthelpers) {
          $('#gototextstyles').addClass('active-sidebar-link');
        } else {
          $('#gototextstyles').removeClass('active-sidebar-link');
        }

        if (y > alignmenthelpers && y < navigation) {
          $('#gotoalignmenthelpers').addClass('active-sidebar-link');
        } else {
          $('#gotoalignmenthelpers').removeClass('active-sidebar-link');
        }

        if (y > navigation && y < superhero) {
          $('#gotonavigation').addClass('active-sidebar-link');
        } else {
          $('#gotonavigation').removeClass('active-sidebar-link');
        }

        if (y > superhero && y < buttons) {
          $('#gotosuperhero').addClass('active-sidebar-link');
        } else {
          $('#gotosuperhero').removeClass('active-sidebar-link');
        }

        if (y > buttons && y < alerts) {
          $('#gotobuttons').addClass('active-sidebar-link');
        } else {
          $('#gotobuttons').removeClass('active-sidebar-link');
        }

        if (y > alerts && y < panels) {
          $('#gotoalerts').addClass('active-sidebar-link');
        } else {
          $('#gotoalerts').removeClass('active-sidebar-link');
        }

        if (y > panels && y < tooltips) {
          $('#gotopanels').addClass('active-sidebar-link');
        } else {
          $('#gotopanels').removeClass('active-sidebar-link');
        }

        if (y > tooltips && y < images) {
          $('#gototooltips').addClass('active-sidebar-link');
        } else {
          $('#gototooltips').removeClass('active-sidebar-link');
        }

        if (y > images && y < magictabs) {
          $('#gotoimages').addClass('active-sidebar-link');
        } else {
          $('#gotoimages').removeClass('active-sidebar-link');
        }

        if (y > magictabs && y < accordions) {
          $('#gotomagictabs').addClass('active-sidebar-link');
        } else {
          $('#gotomagictabs').removeClass('active-sidebar-link');
        }

        if (y > accordions && y < modals) {
          $('#gotoaccordions').addClass('active-sidebar-link');
        } else {
          $('#gotoaccordions').removeClass('active-sidebar-link');
        }

        if (y > modals && y < forms) {
          $('#gotomodals').addClass('active-sidebar-link');
        } else {
          $('#gotomodals').removeClass('active-sidebar-link');
        }

        if (y > forms && y < bottom) {
          $('#gotoforms').addClass('active-sidebar-link');
        } else {
          $('#gotoforms').removeClass('active-sidebar-link');
        }
      });
    };

    // Function to call JS for smooth scroll functionality
    xiriObject.initSmoothScroll = function () {

      // Angular injecting code for smooth scrolling functionality into each route view
      var $root = $('html, body');

      $('.nav-box-vertical li, #gotosupport').click(function() {
        var $gotoid = $(this).prop('id');
        var $justid = $gotoid.replace('goto','');

        if(typeof $("#"+$justid) != undefined){  // test if target exists
          $root.animate({
            scrollTop: $("#"+$justid).offset().top  - 20
          }, 800);
        }
        return false;
      });
    };

    // returning the xiriObject within this services so that it can be accessed and initialized by Controllers
    return xiriObject;

});


/*
  ____ ___ ____  _____ ____ _____ _____     _______ ____  
 |  _ \_ _|  _ \| ____/ ___|_   _|_ _\ \   / / ____/ ___| 
 | | | | || |_) |  _|| |     | |  | | \ \ / /|  _| \___ \ 
 | |_| | ||  _ <| |__| |___  | |  | |  \ V / | |___ ___) |
 |____/___|_| \_\_____\____| |_| |___|  \_/  |_____|____/ 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
*/


xiriCSS.directive('superhero', function() {
  return {
    restrict: 'E',
    link: function(scope, element) { 
      //Adding class to custom <superhero> element
      element.addClass('superhero'); 
    },
    scope: {}
  }
});

xiriCSS.directive('btn', function() {
  return {
    restrict: 'E',
    link: function(scope, element) { 
      //Adding class to custom <btn> element
      element.addClass('btn'); 
    },
    scope: {}
  }
});

xiriCSS.directive('dropdown', function() {
  return {
    restrict: 'E',
    link: function(scope, element) { 
      //Adding class to custom <dropdown> element
      element.addClass('btn-dropdown');
      
      // Intializing JS for button dropdown classes
      element.on('click touchstart', function (e) {
        $(this).children('[btn-dropdown]').removeClass("hide-dropdown"); 
        $(this).children('[btn-dropdown]').addClass("show-dropdown"); 
        e.preventDefault();
      });

      $('[btn-dropdown]').on('mouseleave touchend', function () {
        $(this).addClass("hide-dropdown"); 
      });

      $(document).on('mouseup touchend', function (e) {
          var container = $("dropdown");

          if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('[btn-dropdown]').addClass("hide-dropdown"); 
          } 
      });
    },
    scope: {} 
  }
});

xiriCSS.directive('alert', function() {
  return {
    restrict: 'E',
    link: function(scope, element) {
      //Adding class to custom <alert> element 
      element.addClass('alert');
      element.attr('role','alert');
      $('.close-alert').on('click', function () {
          $(this).parent().addClass('hidden-alert');
      });    
    },
    scope: {}  
  }
});

xiriCSS.directive('tooltipTop', function() {
  return {
    restrict: 'A',
    scope: {}
  }
});

xiriCSS.directive('tooltipRight', function() {
  return {
    restrict: 'A',
    scope: {}  
  }
});

xiriCSS.directive('tooltipBottom', function() {
  return {
    restrict: 'A',
    scope: {}  
  }
});

xiriCSS.directive('tooltipLeft', function() {
  return {
    restrict: 'A',
    scope: {}  
  }
});

xiriCSS.directive('colorswatch', function() {
  return {
    restrict: 'E',
    link: function(scope, element) {
      //Adding class to custom <colorswatch> element 
      element.addClass('colorswatch'); 
    },
    scope: {}
  }
});

xiriCSS.directive('magictabs', function() {
  return {
    restrict: 'E',
    link: function(scope, element) { 
      //Adding class to custom <magictabs> element 
      element.addClass('magictabs');
      // Wrapping with a div to stretch
      element.wrap( "<div class='md-12 lg-12 col'></div>" );

      // Angular injecting code for magictabs functionality into each route view
      if($(window).width() > 768){
        // Hide all but first tab content on larger viewports
        $('.magictabs-content:not(:first)').hide();
        // Activate first tab
        $('.magictabs-title:first-child').addClass('activetab');
      } else {
        // Hide all content items on narrow viewports
        $('.magictabs-content').hide();
      };
    },
    scope: {}
  }
});

xiriCSS.directive('magictabstitle', function() {
  return {
    restrict: 'E',
    link: function(scope, element) {
      //Adding class to custom <magictabstitle> element 
      element.addClass('magictabs-title');
      // The clicking action
      $('.magictabs-title').on('click', function() {
        $('.magictabs-content').hide();
        $(this).next().show().prev().addClass('activetab').siblings().removeClass('activetab');
      });
    },
    scope: {}
  }
});

xiriCSS.directive('magictabscontent', function() {
  return {
    restrict: 'E',
    link: function(scope, element) {
      //Adding class to custom <magictabscontent> element 
      element.addClass('magictabs-content');
    },
    scope: {}
  }
});

xiriCSS.directive('row', function() {
  return {
    restrict: 'E',
    link: function(scope, element) { 
      element.addClass('row'); 
    },
    scope: {}
  }
});

xiriCSS.directive('magicmodalmask', function() {
  return {
    restrict: 'E',
    link: function(scope, element) { 
      //Adding class to custom <magicmodalmask> element 
      element.addClass('mask');
      element.attr('role','dialog');

      // This is Angular injection of code for modal functionality into each route view
      $("[data-modal-open]").on("click", function(){
        $(".mask").addClass("active-modal");
      });

      function closeModal() {
        element.removeClass("active-modal");
      }

      $("[data-modal-close], .mask").on("click", function(){
        closeModal();
      });

      $(document).keyup(function(e) {
        if (e.keyCode == 27) {
          closeModal();
        }
      });
    },
    scope: {}  
  }
});

xiriCSS.directive('magicmodalcontent', function() {
  return {
    restrict: 'E',
    link: function(scope, element) { 
      //Adding class to custom <magicmodalcontent> element 
      element.addClass('modal');
      element.attr('role','alert');
    },
    scope: {}  
  }
});

xiriCSS.directive('accordion', function() {
  return {
    restrict: 'E',
    link: function(scope, element) { 
      //Adding class to custom <accordion> element 
      element.addClass('accordion');

      (function( $ ) {

      $.fn.magicAccordion = function () {
        // Cache the <accordion> element
        var accordion = $(this);

        // Listen to click event on <accordiontitle>
        accordion.find("accordiontitle").on("click", function (){

          // Cache current
          var thisTab = $(this);
          var current = $(this).next("accordioncontent");
          var accordiontitle = $('accordiontitle');

          accordiontitle.removeClass('active-accordion-title');
          thisTab.addClass('active-accordion-title');
          
          if (current.is(":hidden")) {
            current.slideDown().siblings("accordioncontent").slideUp();
          }
        });
      };

      })( jQuery );

      $(".accordion").magicAccordion(); 
    }
  }
});

xiriCSS.directive('accordiontitle', function() {
  return {
    restrict: 'E',
    link: function(scope, element) { 
      //Adding class to custom <accordiontitle> element 
      element.addClass('accordion-title');
    }
  }
});

xiriCSS.directive('accordioncontent', function() {
  return {
    restrict: 'E',
    link: function(scope, element) { 
      //Adding class to custom <accordioncontent> element 
      element.addClass('accordion-content');
    }
  }
});

xiriCSS.directive('panel', function() {
  return {
    restrict: 'E',
    link: function(scope, element) { 
      //Adding class to custom <panel> element 
      element.addClass('panel');
    },
    scope: {}    
  }
});

xiriCSS.directive('vanishtoggle', function() {
  return {
    restrict: 'E',
    link: function(scope, element) { 
      //Adding class to custom <vanishtoggle> element 
      element.addClass('vanish-toggle');
      element.on("click", function() {
        $(".vanish").toggleClass("open");
      });
    },
    scope: {}    
  }
});

xiriCSS.directive('vanishcontent', function() {
  return {
    restrict: 'E',
    link: function(scope, element) { 
      //Adding class to custom <vanishcontent> element 
      element.addClass('vanish');
    },
    scope: {}  
  }
});

xiriCSS.directive('checkbox', function() {
  return {
    restrict: 'E',
    link: function(scope, element) { 
      //Adding classes to custom <checkbox> element 
      element.addClass('toggle slide');
    },
    scope: {} 
  }
});


xiriCSS.directive('fullname', function() {
  return {
    restrict: 'E',
    template: '<label class="form-control" for="fullname">Name:</label>
               <input class="form-control" type="text" id="fullname" name="fullname" pattern="[a-zA-Z]+" tabindex="1" required="" placeholder="Your name">',
    scope: {}
  }
});

xiriCSS.directive('firstname', function() {
  return {
    restrict: 'E',
    template: '<label class="form-control" for="firstname">First Name:</label>
               <input class="form-control" type="text" id="firstname" name="firstname" pattern="[a-zA-Z]+" tabindex="2" required="" placeholder="First name">',
    scope: {}
  }
});

xiriCSS.directive('lastname', function() {
  return {
    restrict: 'E',
    template: '<label class="form-control" for="lastname">Last Name:</label>
               <input class="form-control" type="text" id="lastname" name="lastname" pattern="[a-zA-Z]+" tabindex="3" required="" placeholder="Last name">',
    scope: {}
  }
});

xiriCSS.directive('addressblock', function() {
  return {
    restrict: 'E',
    template: '<label class="form-control" for="address">Address:</label>
               <input class="form-control" type="text" id="address" name="address" pattern="[a-zA-Z]+" tabindex="4" required="" placeholder="Your address">',
    scope: {}
  }
});

xiriCSS.directive('suite', function() {
  return {
    restrict: 'E',
    template: '<label class="form-control" for="suite">Apt/Suite/Floor/Unit:</label>
               <input class="form-control" type="text" id="suite" name="suite" pattern="[a-zA-Z]+" tabindex="5" required="" placeholder="Apt/Suite/Floor">',
    scope: {}
  }
});

xiriCSS.directive('city', function() {
  return {
    restrict: 'E',
    template: '<label class="form-control" for="city">City:</label>
               <input class="form-control" type="text" id="city" name="city" tabindex="6" required="" placeholder="Your city">',
    scope: {}
  }
});

xiriCSS.directive('state', function() {
  return {
    restrict: 'E',
    template: '<label class="form-control" for="state">State:</label>
          <select class="form-control" name="state" id="state" tabindex="7" x-autocompletetype="state" required="">
            <option value="" disabled selected>Select your option</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO" selected="selected">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>',
    scope: {}

    }
});

xiriCSS.directive('zipcode', function() {
  return {
    restrict: 'E',
    template: '<label class="form-control" for="zip">Zip Code:</label>
               <input class="form-control" type="text" id="zip" name="zip" placeholder="Your zip code" pattern="^\d{5,6}(?:[-\s]\d{4})?$" tabindex="8" required="">',
    scope: {}
  }
});

xiriCSS.directive('phonenumber', function() {
  return {
    restrict: 'E',
    template: '<label class="form-control" for="phonenumber">Phone Number:</label>
               <input class="form-control" type="tel" id="phonenumber" name="phonenumber" placeholder="XXX-XXX-XXXX" pattern="\d{3}[\-]\d{3}[\-]\d{4}" tabindex="9" required="">',
    scope: {}
    }
});

xiriCSS.directive('emailaddress', function() {
  return {
    restrict: 'E',
    template: '<label class="form-control" for="emailaddress">Email Address:</label>
               <input class="form-control" id="email" type="emailaddress" name="emailaddress" pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}" placeholder="email@youraddress.com" tabindex="10" required="">',
    scope: {}
    }
});

xiriCSS.directive('website', function() {
  return {
    restrict: 'E',
    template: '<label class="form-control" for="emailaddress">Website:</label>
               <input class="form-control" type="url" name="url" pattern="^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$" placeholder="http://yourwebsite.com" tabindex="11">',
    scope: {}
    }
});

xiriCSS.directive('comments', function() {
  return {
    restrict: 'E',
    template: '<label class="form-control" for="message">Enter your message:</label>
               <textarea class="form-control" name="message" onfocus="this.value=""; placeholder="Enter your message here" tabindex="12"></textarea>',
    scope: {}
    }
});


/*
   ____ ___  _   _ _____ ____   ___  _     _     _____ ____  ____  
  / ___/ _ \| \ | |_   _|  _ \ / _ \| |   | |   | ____|  _ \/ ___| 
 | |  | | | |  \| | | | | |_) | | | | |   | |   |  _| | |_) \___ \ 
 | |__| |_| | |\  | | | |  _ <| |_| | |___| |___| |___|  _ < ___) |
  \____\___/|_| \_| |_| |_| \_\\___/|_____|_____|_____|_| \_\____/ 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
*/


// create the MainController and inject Angular's $scope
xiriCSS.controller('MainController', ['$scope', '$route', 'xiriServices', function($scope, $route, xiriServices) {
    
    // exposes the route to the HTML
    $scope.$route = $route;

    // creating a new variable within this Ctrlr scope as a reference to call functions from the xiriService
    $scope.xiriServiceScope = xiriServices;

    // initializes the JS on each route change
    $scope.init = function () {

      // scrolls window to top on route change
      window.scrollTo(0,0);

      // referring to this $scope's xiriServiceScope variable to fire the init functions coming from xiriService
      $scope.xiriServiceScope.initDirectiveClasses();
      $scope.xiriServiceScope.initScrollToTop();
      $scope.xiriServiceScope.initSmoothScroll();
    }
}]);

// create the HomeController and inject Angular's $scope
xiriCSS.controller('HomeController', ['$scope', '$route', 'xiriServices', function($scope, $route, xiriServices) {
  $scope.message = 'Message from Home Page';
    
    // exposes the route to the HTML
    $scope.$route = $route;

    // creating a new variable within this Ctrlr scope as a reference to call functions from the xiriService
    $scope.xiriServiceScope = xiriServices;

    // initializes the JS on each route change
    $scope.init = function () {

      // scrolls window to top on route change
      window.scrollTo(0,0);

      // referring to this $scope's xiriServiceScope variable to fire the init functions coming from xiriService
      $scope.xiriServiceScope.initDirectiveClasses();
      $scope.xiriServiceScope.initScrollToTop();
      $scope.xiriServiceScope.initSmoothScroll();
    }
}]);

// create the ComponentsController and inject Angular's $scope
xiriCSS.controller('ComponentsController', ['$scope', '$route', 'xiriServices', function($scope, $route, xiriServices) {

    // exposes the route to the HTML
    $scope.$route = $route;
    
    // creating a new variable within this Ctrlr scope as a reference to call functions from the xiriService
    $scope.xiriServiceScope = xiriServices;

    // initializes the JS on each route change
    $scope.init = function () {

      // scrolls window to top on route change
      window.scrollTo(0,0);

      // referring to this $scope's xiriServiceScope variable to fire the init functions coming from xiriService
      $scope.xiriServiceScope.initDirectiveClasses();
      $scope.xiriServiceScope.initScrollSpy();
      $scope.xiriServiceScope.initStickyNav();
      $scope.xiriServiceScope.initScrollToTop();
      $scope.xiriServiceScope.initSmoothScroll();

      window.addEventListener('hashchange', function() {
          if (window.location.hash === '/components') {

          }
      });

/* =============================================================================================================================
   !!!!! Everything below this up to the closing tags of the function can be deleted. It is getxiri.com specific code. !!!!!
   =============================================================================================================================
*/

      // Angular injecting code for styling grid box content on components page
      // !!!!! This code block if for getxiri.com only and can be deleted for your application !!!!!
      $( window ).resize(function() {
        if ($(window).width() < 640) {
          $('.gridblock-1-12').empty();
          $('.gridblock-1-12').text('12-12');
          $('.gridblock-1-12').filter('').text('12-12');
        } 
        if ($(window).width() < 1024) {
          $('.gridblock-1-12').empty();
          $('.gridblock-1-12').text('2-12');

        } 
       if ($(window).width() > 1024) {
          $('.gridblock-1-12').empty();
          $('.gridblock-1-12').text('1-12'); 
        }      
      });

      // Angular injecting code for components page color swatchs into each route view
      // !!!!! This code block if for getxiri.com only and can be deleted for your application !!!!!
      
      // Create Hex color code from color return
      function hexc(colorval) {
        var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        delete(parts[0]);
        for (var i = 1; i <= 3; ++i) {
          parts[i] = parseInt(parts[i]).toString(16);
          if (parts[i].length == 1) parts[i] = '0' + parts[i];
        }
        color = '#' + parts.join('');
      }

      // Get color value of swatch and print to div
      var color = '';
      $('.swatch').each(function() {
        var classList = $(this).children('.swatch-color').attr('class').split(' ');
        for(i=0; i <= classList.length-1; i++){
         if(classList[i].match(/color-/g)){
           $(this).children('.swatch-info').prepend('<span>$' + classList[i] + '</span>');
           break;
         }
       }

       var x = $(this).children('.swatch-color').css('backgroundColor');
       hexc(x);
       $(this).children('.swatch-info').append('<span>' + color + '</span>');
       $(this).children('.swatch-info').append('<span>' + x + '</span>');
    });
  };  
}]);


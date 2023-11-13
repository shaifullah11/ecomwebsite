var li_elements = document.querySelectorAll(".wrap_links ul li");
var item_elements = document.querySelectorAll(".item");
for (var i = 0; i < li_elements.length; i++) {
  li_elements[i].addEventListener("click", function () {
    li_elements.forEach(function (li) {
      li.classList.remove("active");
    });
    this.classList.add("active");
    var li_value = this.getAttribute("data-li");
    item_elements.forEach(function (item) {
      item.style.display = "none";
    });
    if (li_value == "kitchen") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "dining") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "bedroom") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "living") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "office") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "outdoor") {
      document.querySelector("." + li_value).style.display = "block";
    } else {
      console.log("");
    }
  });
}



$(document).ready(function () {
  var owl = $('.owl-carousel-1');
  owl.owlCarousel({
    items: 5,
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      575: {
        items: 2,
        nav: true,
        margin: 100
      },
      1000: {
        items: 5,
        nav: true,
        margin: 18
      }
    }
  });
})

// var prod_but = document.querySelectorAll(".product-type-default-second-wrap");
// var prod_elements = document.querySelectorAll(".product-review-item");
// for (var i = 0; i < prod_but.length; i++) {
//   prod_but[i].addEventListener("click", function() {
//     prod_but.forEach(function(button) {
//       button.classList.remove("active");
//     });
//     this.classList.add("active");
//     var prod_li_value = this.getAttribute("data-li");
//     prod_elements.forEach(function(item) {
//       item.style.display = "none";
//     });
//     if (prod_li_value == "details") {
//       document.querySelector("." + prod_li_value).style.display = "block";
//     } else if (prod_li_value == "review") {
//       document.querySelector("." + prod_li_value).style.display = "block";
//     } else if (prod_li_value == "custom-tab") {
//       document.querySelector("." + prod_li_value).style.display = "block";
//     }else {
//       console.log("");
//     }
//   });
// }


document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".product-type-default-second-wrap button");
  var contentSections = document.querySelectorAll(".product-review-item");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Remove "active" class from all buttons
      buttons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      // Add "active" class to the clicked button
      this.classList.add("active");

      // Hide all content sections
      contentSections.forEach(function (section) {
        section.style.display = "none";
      });

      // Show the corresponding content section
      var li_value = this.getAttribute("data-li");
      var contentSection = document.querySelector(
        ".product-type-default-second-wrap-content-" + li_value
      );

      if (contentSection) {
        contentSection.style.display = "block";
      }
    });
  });
});

$(document).ready(function () {
  var header = $('.first-navi');
  var isStickyAdded = false;
  var threshold = 165;
  var navHeightThreshold = 130;
  // $(window).scroll(function() {
  //   if ($(this).scrollTop() >= navHeightThreshold){
  //     header.css('height','79px');
  //   }
  //   else if ($(this).scrollTop() < navHeightThreshold) {
  //     header.css('height','110px');
  //   }
  // })
  $(window).scroll(function () {
    if ($(this).scrollTop() >= threshold && !isStickyAdded) {
      header.addClass('sticky');
      isStickyAdded = true;
    } else if ($(this).scrollTop() < threshold && isStickyAdded) {
      header.removeClass('sticky');
      isStickyAdded = false;
    }
  });
});




$(document).ready(function () {
  var owl = $('.owl-carousel-2');
  owl.owlCarousel({
    items: 6,
    nav: true,
    // margin:0,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      575: {
        items: 2,
        nav: true,
        margin: 100
      },
      1000: {
        items: 5,
        nav: true,
        margin: 18
      }
    }
  });
})



// navigation bar

$(document).ready(function () {
  const $sidebar = $('.navibar-sidebar');
  const $body = $('body');
  const $naviBar = $('.navi-bar');
  $('.navibar-sidebar-titles-menu .fa-bars').on('click', function () {
    $naviBar.removeClass('sidebar')
  })
  $('.navi-bar-togglerButton').on('click', function () {
    $naviBar.toggleClass('sidebar');

    if ($naviBar.hasClass('sidebar')) {
      // Add click event listener to the document only if 'sidebar' class is present
      $(document).on('click', clickOutsideSidebar);

      // Disable scrolling on the body
      $body.css('overflow', 'hidden');
    } else {
      // Remove click event listener from the document if 'sidebar' class is not present
      $(document).off('click', clickOutsideSidebar);

      // Enable scrolling on the body
      $body.css('overflow', 'auto');
    }
  });

  // Function to handle clicks outside the sidebar
  function clickOutsideSidebar(e) {
    // Check if the clicked element is not part of the sidebar or the toggle button
    if (!$sidebar.is(e.target) && !$sidebar.has(e.target).length &&
      !$('.navi-bar-togglerButton').is(e.target) && !$('.navi-bar-togglerButton').has(e.target).length &&
      $naviBar.hasClass('sidebar')) {
      // Remove the 'sidebar' class if it exists
      $naviBar.removeClass('sidebar');

      // Enable scrolling on the body
      $body.css('overflow', 'auto');
    }
  }

  // Prevent clicks inside the sidebar from closing it
  $sidebar.on('click', function (e) {
    e.stopPropagation();
  });
});



$(document).ready(function () {
  $('.sidebar-navbar-link-shop .fa-chevron-down').on('click', function () {
    $('.sidebar-shop-link-main').toggleClass('active')
  })
  $('.sidebar-navbar-link-products .fa-chevron-down').on('click', function () {
    $('.sidebar-products-link-main').toggleClass('active')
  })
  $('.sidebar-navbar-link-pages .fa-chevron-down').on('click', function () {
    $('.sidebar-pages-link-main').toggleClass('active')
  })
  $('.sidebar-navbar-link-features .fa-chevron-down').on('click', function () {
    $('.sidebar-features-link-main').toggleClass('active')
  })
})

var sidebar_li_elements = document.querySelectorAll(".navibar-sidebar-titles li")
var sidebar_item_elements = document.querySelectorAll(".sidebar-item");
for (var i = 0; i < sidebar_li_elements.length; i++) {
  sidebar_li_elements[i].addEventListener("click", function () {
    sidebar_li_elements.forEach(function (li) {
      li.classList.remove("active");
    });
    this.classList.add("active");

    var sidebar_li_value = this.getAttribute("data-sidebar-li");
    sidebar_item_elements.forEach(function (item) {
      item.style.display = "none";
    });
    if (sidebar_li_value == "menu") {
      document.querySelector("." + sidebar_li_value).style.display = "block";
    } else if (sidebar_li_value == "account") {
      document.querySelector("." + sidebar_li_value).style.display = "block";
    } else if (sidebar_li_value == "settings") {
      document.querySelector("." + sidebar_li_value).style.display = "block";
    } else {
      console.log("");
    }
  });
}


$(document).ready(function () {
  var header = $('.navi-bar');
  var isStickyAdded = false;
  var threshold = 165;
  var navHeightThreshold = 130;
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > navHeightThreshold) {
  //     header.css('height', '79px');
  //   }
  //   else if ($(this).scrollTop() < navHeightThreshold) {
  //     header.css('height', '110px');
  //   }
  // })

  $(window).scroll(function () {
    if ($(this).scrollTop() >= threshold && !isStickyAdded) {
      header.addClass('sticky');
      isStickyAdded = true;
    } else if ($(this).scrollTop() < threshold && isStickyAdded) {
      header.removeClass('sticky');
      isStickyAdded = false;
    }
  });
});
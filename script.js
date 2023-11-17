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
      $(document).on('click', clickOutsideSidebar);
      $body.css('overflow', 'hidden');
    } else {
      $(document).off('click', clickOutsideSidebar);
      $body.css('overflow', 'auto');
    }
  });

  // Function to handle clicks outside the sidebar
  function clickOutsideSidebar(e) {
    if (!$sidebar.is(e.target) && !$sidebar.has(e.target).length &&
      !$('.navi-bar-togglerButton').is(e.target) && !$('.navi-bar-togglerButton').has(e.target).length &&
      $naviBar.hasClass('sidebar')) {
      $naviBar.removeClass('sidebar');
      $body.css('overflow', 'auto');
    }
  }

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
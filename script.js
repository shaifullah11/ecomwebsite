var li_elements = document.querySelectorAll(".wrap_links ul li");
var item_elements = document.querySelectorAll(".item");
for (var i = 0; i < li_elements.length; i++) {
  li_elements[i].addEventListener("click", function() {
    li_elements.forEach(function(li) {
      li.classList.remove("active");
    });
    this.classList.add("active");
    var li_value = this.getAttribute("data-li");
    item_elements.forEach(function(item) {
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



// product page




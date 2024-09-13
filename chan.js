var swiper = new Swiper(".mySwipers", {
    navigation: {
      nextEl: ".button-next-dat",
      prevEl: ".button-prev-dat",
    },
    on: {
      // Kiểm tra khi Swiper khởi tạo
      init: function () {
        updateNavigation(this);
      },
      // Kiểm tra khi Swiper thay đổi slide
      slideChange: function () {
        updateNavigation(this);
      }
    }
  });
  function updateNavigation(swiper) {
    const nextButton = document.querySelector('.button-next-dat');
    const prevButton = document.querySelector('.button-prev-dat');
    
    // Ẩn nút prev nếu đang ở slide đầu tiên
    if (swiper.isBeginning) {
      prevButton.style.display = 'none';
    } else {
      prevButton.style.display = 'flex';
    }
  
    // Ẩn nút next nếu đang ở slide cuối cùng
    if (swiper.isEnd) {
      nextButton.style.display = 'none';
    } else {
      nextButton.style.display = 'flex';
    }
  }


var swiper2 = new Swiper(".athur",{
  spaceBetween: 30,
  centeredSlides: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".athur-pagination",
    clickable: true,
  },
})  
let navToggle = document.querySelector('.header_menu-bar');
let headerNavbar = document.querySelector('.menu');
var headerOver = document.querySelector('.over-lay');
var navToggleActive = document.querySelector('.open');
let bars = document.querySelectorAll('.bar');
var navNumber = 0;
function toggleHamburger(e) {
  bars.forEach(bar => bar.classList.toggle('x'));
  headerNavbar.classList.toggle("active");
  headerOver.classList.toggle("active");
}
function closeHeader(e) {
  bars.forEach(bar => bar.classList.toggle('x'));
  headerNavbar.classList.toggle("active");
  headerOver.classList.toggle("active");
}
navToggle.addEventListener('click', toggleHamburger);
headerOver.addEventListener('click', closeHeader);


// kéo header xuống 1280 
if( window.innerWidth < 1280){
  const headerClick = document.querySelectorAll('.header-title > li > a');
  const headerClickChild2 = document.querySelectorAll('.header-title > li > ul > li > a');
  headerClick.forEach(function(nameImg,X){
    // từ trên xuống dưới từ trái qua phải
    nameImg.addEventListener("click",function(e){
      e.preventDefault();
      let sibling = e.target.nextElementSibling;
      
      // Kiểm tra nếu phần tử liền kề là ul và tồn tại
      while (sibling) {
        if(sibling.tagName.toLowerCase() === 'span'){
          sibling.classList.toggle('open');
        }
        if (sibling.tagName.toLowerCase() === 'ul') {
            sibling.classList.toggle('open');
        }
        sibling = sibling.nextElementSibling; // Tiếp tục sang phần tử kế tiếp
    }
    })
  })
  headerClickChild2.forEach(function(nameImg,X){
    // từ trên xuống dưới từ trái qua phải
    nameImg.addEventListener("click",function(e){
      e.preventDefault();
      let sibling = e.target.nextElementSibling;
      
      // Kiểm tra nếu phần tử liền kề là ul và tồn tại
      while (sibling) {
        if (sibling.tagName.toLowerCase() === 'ul') {
            sibling.classList.toggle('open');
            break; // Tìm thấy <ul> thì thoát vòng lặp
        }
        sibling = sibling.nextElementSibling; // Tiếp tục sang phần tử kế tiếp
    }
    })
  })
}

// introduce
const IntroduceBtn = document.querySelectorAll('.module-child');
const moduleInfor = document.querySelectorAll('.module-infor');
IntroduceBtn.forEach(function(BtnChild,X){
  BtnChild.addEventListener('click',function(e){
    IntroduceBtn.forEach(a => a.classList.remove('active'));
    BtnChild.classList.add('active');
    moduleInfor.forEach(a => a.classList.remove('flex'));
    moduleInfor.forEach(a => a.classList.add('hidden'));
    moduleInfor[X].classList.add('flex');
    moduleInfor[X].classList.remove('hidden');
  })
})
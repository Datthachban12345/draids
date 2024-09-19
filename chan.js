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
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".athur-pagination",
    clickable: true,
  },
})  

var swiper3 = new Swiper(".people1-swiper", {
  spaceBetween: 20,
  slidesPerView: 7,
  navigation: {
    nextEl: ".people1-next",
    prevEl: ".people1-prev",
  },
  on: {
    // Kiểm tra khi Swiper khởi tạo
    init: function () {
      updateNavigationPeople(this);
    },
    // Kiểm tra khi Swiper thay đổi slide
    slideChange: function () {
      updateNavigationPeople(this);
    }
  }
});
function updateNavigationPeople(swiper) {
  const nextButtonPeople = document.querySelector('.people1-next');
  const prevButtonPeople = document.querySelector('.people1-prev');
  
  // Ẩn nút prev nếu đang ở slide đầu tiên
  if (swiper.isBeginning) {
    prevButtonPeople.style.display = 'none';
  } else {
    prevButtonPeople.style.display = 'flex';
  }

  // Ẩn nút next nếu đang ở slide cuối cùng
  if (swiper.isEnd) {
    nextButtonPeople.style.display = 'none';
  } else {
    nextButtonPeople.style.display = 'flex';
  }
}

var swiper4 = new Swiper(".people2-swiper", {
  spaceBetween: 20,
  slidesPerView: 7,
  navigation: {
    nextEl: ".people2-next",
    prevEl: ".people2-prev",
  },
  on: {
    // Kiểm tra khi Swiper khởi tạo
    init: function () {
      updateNavigationPeople2(this);
    },
    // Kiểm tra khi Swiper thay đổi slide
    slideChange: function () {
      updateNavigationPeople2(this);
    }
  }
});
function updateNavigationPeople2(swiper) {
  const nextButtonPeople = document.querySelector('.people2-next');
  const prevButtonPeople = document.querySelector('.people2-prev');
  
  // Ẩn nút prev nếu đang ở slide đầu tiên
  if (swiper.isBeginning) {
    prevButtonPeople.style.display = 'none';
  } else {
    prevButtonPeople.style.display = 'flex';
  }

  // Ẩn nút next nếu đang ở slide cuối cùng
  if (swiper.isEnd) {
    nextButtonPeople.style.display = 'none';
  } else {
    nextButtonPeople.style.display = 'flex';
  }
}


var swiper5 = new Swiper(".swiper-prize", {
  spaceBetween: 20,
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-prize-next",
    prevEl: ".swiper-prize-prev",
  },
  pagination: {
    el: ".pagination-prize",
    clickable: true,
  },
  on: {
    // Kiểm tra khi Swiper khởi tạo
    init: function () {
      updateNavigationPrize(this);
    },
    // Kiểm tra khi Swiper thay đổi slide
    slideChange: function () {
      updateNavigationPrize(this);
    }
  }
});
function updateNavigationPrize(swiper) {
  const nextButtonPrize = document.querySelector('.swiper-prize-next');
  const prevButtonPrize = document.querySelector('.swiper-prize-prev');
  
  // Ẩn nút prev nếu đang ở slide đầu tiên
  if (swiper.isBeginning) {
    prevButtonPrize.style.display = 'none';
  } else {
    prevButtonPrize.style.display = 'flex';
  }

  // Ẩn nút next nếu đang ở slide cuối cùng
  if (swiper.isEnd) {
    nextButtonPrize.style.display = 'none';
  } else {
    nextButtonPrize.style.display = 'flex';
  }
}

var swiper6 = new Swiper(".swiper-document",{
  spaceBetween: 20,
  slidesPerView: 4,
  pagination: {
    el: ".swiper-pagination-document",
    clickable: true,
  },
})  

var swiper7 = new Swiper(".swiper-news",{
  spaceBetween: 20,
  slidesPerView: 3,
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


// register
const btnRegister = document.querySelectorAll('.btn-register');
const tabRegister = document.querySelectorAll('.tab-register');
btnRegister.forEach(function(nameImg,X){
  nameImg.addEventListener("click",function(e){
    btnRegister.forEach(cong => {
      cong.classList.remove("active");
    });
    tabRegister.forEach(cong => {
      cong.classList.remove("active");
    });
    nameImg.classList.add('active');
    tabRegister[X].classList.add('active');
  })
})

// sản phẩm quan tâm
const productList = document.querySelector('.current');
const currents = document.querySelectorAll('.currents');
const listRegister = document.querySelector('.lists-register');
const checkRegister = document.querySelectorAll('.register-check');
const nameRegister = document.querySelectorAll(".name-register")
const pRegister = document.querySelector(".current > .currents > p")
function showListRegister(e) {
  listRegister.classList.toggle("show");
}
checkRegister.forEach(function(BtnChild,X){
  BtnChild.addEventListener('click',function(e){
    
  if (currents[X].children.length > 0) {
    pElement.innerHTML = '';
    
  } else {
    pElement.innerHTML = 'Sản phẩm quan tâm';
  }
    nameRegister[X].classList.toggle('active');
    
  })
})
productList.addEventListener('click', showListRegister);
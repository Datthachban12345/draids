
// var CART = {
//   add:function(){
//     alert('Chào đạt');
//   },
// };
var SwiperDemo = {
  setup: function() {
    // Khởi tạo Swiper và lắng nghe các sự kiện
    var swiper = new Swiper(".mySwipers", {
      navigation: {
        nextEl: ".button-next-dat",
        prevEl: ".button-prev-dat",
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination-banner",
        clickable: true,
      },
      on: {
        init: function () {
          SwiperDemo.updateNavigation(this);
        },
        slideChange: function () {
          SwiperDemo.updateNavigation(this);
        }
      }
    });
  },

  updateNavigation: function(swiper) { //con của phând setup
    const nextButton = document.querySelector('.button-next-dat');
    const prevButton = document.querySelector('.button-prev-dat');
    const lazyBanner = document.querySelector('.video-lazy-banner');
    
    // Ẩn nút prev nếu đang ở slide đầu tiên
    if (swiper.isBeginning) {
      prevButton.style.display = 'none';
      lazyBanner.currentTime = 0; // Đặt thời gian hiện tại của video về 0 (bắt đầu lại)
      lazyBanner.play(); // Phát lại video    
    } else {
      prevButton.style.display = 'flex';
    }

    // Ẩn nút next nếu đang ở slide cuối cùng
    if (swiper.isEnd) {
      nextButton.style.display = 'none';
    } else {
      nextButton.style.display = 'flex';
    }
  },
  share: function() {
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
  },
  
  partner:function(){
    var swiper3 = new Swiper(".people1-swiper", {
      spaceBetween: 10,
      slidesPerView: 3,
      navigation: {
        nextEl: ".people1-next",
        prevEl: ".people1-prev",
      },
      breakpoints: {
        // Khi màn hình >= 640px
        574: {
          slidesPerView: 4, // Hiển thị 3 slide trên màn hình trung bình
        },
        // Khi màn hình >= 1537px
        1024: {
          spaceBetween: 20,
          slidesPerView: 8, // Hiển thị 4 slide trên màn hình lớn
        },
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
  },
  customer: function(){
    var swiper4 = new Swiper(".people2-swiper", {
      spaceBetween: 10,
      slidesPerView: 3,
      navigation: {
        nextEl: ".people2-next",
        prevEl: ".people2-prev",
      },
      breakpoints: {
        // Khi màn hình >= 640px
        574: {
          slidesPerView: 4, // Hiển thị 3 slide trên màn hình trung bình
        },
        // Khi màn hình >= 1537px
        1024: {
          spaceBetween: 20,
          slidesPerView: 8, // Hiển thị 4 slide trên màn hình lớn
        },
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
    
  },
  prize: function(){
    var swiper5 = new Swiper(".swiper-prize", {
      spaceBetween: 10,
      slidesPerView: 1.25,
      navigation: {
        nextEl: ".swiper-prize-next",
        prevEl: ".swiper-prize-prev",
      },
      pagination: {
        el: ".pagination-prize",
        clickable: true,
      },
      breakpoints: {
        // Khi màn hình >= 640px
        574: {
          slidesPerView: 2, // Hiển thị 3 slide trên màn hình trung bình
        },
        // Khi màn hình >= 1537px
        1024: {
          spaceBetween: 20,
          slidesPerView: 3, // Hiển thị 4 slide trên màn hình lớn
        },
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
  },
  document: function(){
    var swiper6 = new Swiper(".swiper-document",{
        spaceBetween: 10,
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination-document",
            clickable: true,
        },
       breakpoints: {
          // Khi màn hình >= 640px
          768: {
            slidesPerView: 2, // Hiển thị 3 slide trên màn hình trung bình
          },
          // Khi màn hình >= 1537px
          993: {
            slidesPerView: 3, // Hiển thị 4 slide trên màn hình lớn
          },
          1024: {
            slidesPerView: 4, // Hiển thị 4 slide trên màn hình lớn
          },
        },
      })  
  },
  news: function(){
    var swiper7 = new Swiper(".swiper-news",{
      spaceBetween: 20,
      slidesPerView: 1.5,
      breakpoints: {
        // Khi màn hình >= 640px
        768: {
          slidesPerView: 2, // Hiển thị 3 slide trên màn hình trung bình
        },
        // Khi màn hình >= 1537px
        991: {
          slidesPerView: 3, // Hiển thị 4 slide trên màn hình lớn
        },
      },
    })  
  },
};
var Different= {
  menu: function(){
    let navToggle = document.querySelector('.header_menu-bar');
    let headerNavbar = document.querySelector('.menu');
    var headerOver = document.querySelector('.over-lay');
    let bars = document.querySelectorAll('.bar');
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
  },
  introduce: function(){
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
    
  },
  btnSearch: function(){
    const btnSearch = document.querySelector('.btn-search');
    const formSearch = document.querySelector('.form-search-header');
    function toggleSearch(e) {
      formSearch.classList.toggle("active");
    }
    btnSearch.addEventListener('click', toggleSearch);
    document.addEventListener('click', function(event) {
      // Kiểm tra nếu người dùng click ra ngoài thẻ cha
      if (!formSearch.contains(event.target) && !btnSearch.contains(event.target)) {
        formSearch.classList.remove("active");
      }
    });
  },
  BTNregister: function(){
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

  },
  ProductRegister: function(){
    const productList = document.querySelector('.current');
    const currents = document.querySelector('.currents');
    
    const listRegister = document.querySelector('.lists-register');
    const checkRegister = document.querySelectorAll('.register-check');
    const nameRegister = document.querySelectorAll(".name-register")
    const pRegister = document.querySelector(".currents p")
    var sxStrong =[];
    var numberStrong = 0;
    function showListRegister(e) {
      listRegister.classList.toggle("show");
      document.querySelector(".current > i").classList.toggle("rotate");
    }
    checkRegister.forEach(function(BtnChild,X){
      BtnChild.addEventListener('click',function(e){
        const childElement = document.querySelectorAll('.currents strong');
      if (sxStrong.includes(X)) {
        let index = sxStrong.indexOf(X); // Tìm vị trí của phần tử 3
    
        if (index !== -1) {
          sxStrong.splice(index, 1); // Xóa 1 phần tử tại vị trí index
        }
        numberStrong = numberStrong - 1;
        if(numberStrong == 0){
          let newChild = document.createElement('p');
          newChild.textContent = "Sản phẩm quan tâm";
          // Thêm thẻ con vào thẻ cha
          currents.appendChild(newChild);
        }
        childElement[index].remove();
        // xóa phần tử con 
      } else {
        sxStrong[numberStrong] = X;
        numberStrong = numberStrong +1;
        sxStrong.sort(function(a, b) {
          return a - b;
        });
        currents.replaceChildren(); //xóa hoàn toàn phần tử con
        for(var j=0; j < sxStrong.length; j++){
          let newChild = document.createElement('strong');
          let dataTarget = nameRegister[sxStrong[j]].dataset.target; //data-target đc lấy
          // Thêm nội dung hoặc thuộc tính cho thẻ con
          newChild.textContent = dataTarget.toString();
          currents.appendChild(newChild);
        }
    
      }
      if (currents.children.length > 1) {
        pRegister.classList.add("hidden")
      } else {
        pRegister.classList.remove("hidden")
      }
        nameRegister[X].classList.toggle('active');
        
      })
    })
    productList.addEventListener('click', showListRegister);
    document.addEventListener('click', function(event) {
      // Kiểm tra nếu người dùng click ra ngoài thẻ cha
      if (!productList.contains(event.target) && !listRegister.contains(event.target)) {
        listRegister.classList.remove("show");
        document.querySelector(".current > i").classList.remove("rotate");
      }
    });
  },
  CopyRegister: function(){
    const btnCopy = document.querySelector('.btn-copy');
    function copyTextModern(e) {
      var textToCopy = document.querySelector('.email-name').textContent;
      e.preventDefault();
      navigator.clipboard.writeText(textToCopy).then(function() { // thông báo luồng bất đồng bộ hoàn thành
        alert("Đã sao chép nội dung: " + textToCopy);
      }).catch(function(err) {
        console.error("Không thể sao chép", err);
      });
    }
    btnCopy.addEventListener('click', copyTextModern);
    
  },
  keyframe: function(){
    document.addEventListener("DOMContentLoaded", function() {
      // Lấy tất cả các phần tử cần được quan sát
      const animatedBoxUp = document.querySelectorAll('.FadeInUp');
      const animatedBoxRi = document.querySelectorAll('.FadeInRight');
      const animatedBoxLe = document.querySelectorAll('.FadeInLeft');
      // Khởi tạo Intersection Observer
      const observer = new IntersectionObserver((entries, observer) => { // biến khai báo viewpoint có xuất hiện khung hình hay không 
        entries.forEach(entry => {
          // Kiểm tra nếu phần tử đang nằm trong viewport
          if (entry.isIntersecting) {
            entry.target.classList.add('wow');
            observer.unobserve(entry.target);    // Ngừng quan sát phần tử này sau khi animation được kích hoạt
          }
        });
      });
      // Bắt đầu quan sát mỗi phần tử
      animatedBoxUp.forEach(box => {
        observer.observe(box);
      });
      animatedBoxLe.forEach(box => {
        observer.observe(box);
      });
      animatedBoxRi.forEach(box => {
        observer.observe(box);  //xác định viewpoint
      });
    });
  },
  numberCustomer: function(){
    document.addEventListener("DOMContentLoaded", function() {
      // Lấy tất cả các phần tử cần được quan sát
      const numberRun= document.querySelectorAll('.number-customer');
      // Khởi tạo Intersection Observer
      const numberChild = new IntersectionObserver((entries, observer) => { // biến khai báo viewpoint có xuất hiện khung hình hay không 
        entries.forEach(entry => {
          // Kiểm tra nếu phần tử đang nằm trong viewport
          if (entry.isIntersecting) {
            
            const updateCount = (counter, duration) => {
              const target = counter.dataset.target;
              const saveName = counter.innerText.toString();
              const startValue = 0;
              const incrementTime = 10; // thời gian giữa các bước tăng (10ms)
              const totalSteps = duration / incrementTime;
              const increment = (target - startValue) / totalSteps;
          
              let currentValue = startValue;
              let steps = 0;
          
              const animate = () => {
                  currentValue += increment;
                  steps++;
          
                  if (steps < totalSteps) {
                      counter.innerText = Math.ceil(currentValue); //làm tròn lên
                      setTimeout(animate, incrementTime);
                  } else {
                      counter.innerText = saveName;
                  }
              };
          
              animate();
          };
            const duration = 2000; // Thời gian hoàn thành (2 giây)
            numberRun.forEach(counter => {
                if (!counter.classList.contains('visible')) {
                    counter.classList.add('visible');
                    
                    updateCount(counter, duration);
                }
            });
            observer.unobserve(entry.target);    // Ngừng quan sát phần tử này sau khi animation được kích hoạt
          }
        });
      });
      // Bắt đầu quan sát mỗi phần tử
      numberRun.forEach(box => {
        numberChild.observe(box);
      });
    });
  },
  backToTop: function(){
    const btt = document.querySelector('.back-to-top'); //back-to-top
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            btt.classList.add('show');
        } else {
          btt.classList.remove('show');
        }
      }
    btt.addEventListener('click', function(event) {
      event.preventDefault(); // Ngăn không cho liên kết dịch chuyển trang ngay lập tức
      
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Tạo hiệu ứng cuộn mượt
      });
    });
  },
  paddingBanner: function(){
    const paddingHeader = document.querySelector('header');
    // lần đầu chỉnh bởi vì lúc này chưa có resize
    const nextSiblingElement = paddingHeader.nextElementSibling;
    var height = paddingHeader.offsetHeight;
    nextSiblingElement.style.paddingTop = height.toString() + 'px';

    window.addEventListener('resize', function() {
      // Kiểm tra và hiển thị kết quả
        var height = paddingHeader.offsetHeight;
        nextSiblingElement.style.paddingTop = height.toString() + 'px';
    });
  },
}
// Gọi hàm setup để khởi tạo Swiper và lắng nghe sự kiện
SwiperDemo.setup();  //phần banner
SwiperDemo.share();
SwiperDemo.partner();
SwiperDemo.customer();
SwiperDemo.prize();  
SwiperDemo.document();
SwiperDemo.news();
Different.menu(); //phần header
Different.btnSearch();
Different.BTNregister(); 
Different.ProductRegister(); // sản phẩm quan tâm
Different.CopyRegister(); //nút btn copy trong register
Different.keyframe(); //FadeInUp,Left,Right
Different.numberCustomer(); //Chữ số chạy trên màn hình
Different.introduce();
Different.backToTop();
Different.paddingBanner();

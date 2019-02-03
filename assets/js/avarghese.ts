let AV = {
  initialize: () => {
    AV.loadEvents();    
  },
  loadEvents: () => {
    $('#loader').addClass('loading');
    AV.loadNavEvents();
    AV.loadKeyboardEvents();
    AV.loadLinkEvents();
    AV.loadBGEvents();
  },
  loading: () => {
      $('.bg-img, .bg-overlay, .content-container').addClass('loading');
  },
  closeLoader: () => {
    setTimeout(()=> {       
      $('.loading').removeClass('loading');        
    },1000);    
    setTimeout(()=> {
      $('#loader').remove();          
    },1500);    
  },
  loadNavImages: () => {
    $('img.nav-item-bg-img').each(function(index, img) {
      let src = $(img).attr('data-src');
      $(img).attr({'src': src});
    }); 
  },
  loadLinkEvents: () => {
    $("a[animate-link='true']").click((e: any) => {
      AV.loading();
      e.preventDefault();
      setTimeout(() => {        
        window.open(e.currentTarget.href, '_self');
      }, 1000)
    });
  },
  loadKeyboardEvents: () => {
    document.onkeydown = (e) => {
      switch (e.keyCode) {
        case 27: // esc
          if ($('nav').hasClass('nav-open')) {
            $('.nav-btn').click();
          }
          break;
        case 8: // delete/backspace
          if ($('nav').hasClass('nav-open')) {
            $('.nav-btn').click();
          } 
          break;
        case 32: // spacebar
          $('.nav-btn').click();
          break;
        case 37: // left arrow
          AV.loadNextBg(true);
          break;
        case 38: // up arrow
          $('.nav-btn').click();
          break;
        case 39: // right arrow
          AV.loadNextBg();
          break;
        case 40: // down arrow
        $('.nav-btn').click();
          break;
        case 190: // right angle
          AV.loadNextBg();
          break;
        case 188: // left angle
          AV.loadNextBg(true);
          break;
      }
    };
  },
  loadBGEvents: () => {
    setInterval(() => {
      AV.loadNextBg();
    }, 10000);    
  },
  loadNextBg: (reverse: boolean = false) => {
    if ($('.bg-loading-icon, .page-wrap').hasClass('loading')) {
      return true;
    } else {
      $('.bg-loading-icon').toggleClass('loading');
    }
    AV.bgImgIndex = reverse ? --AV.bgImgIndex : ++AV.bgImgIndex;
    if (AV.bgImgIndex < 0) {
      AV.bgImgIndex = AV.bgImgList.length - 1;
    } else if (!AV.bgImgList[AV.bgImgIndex]) {
      AV.bgImgIndex = 0;
    }
    let imgUrl = AV.bgImgList[AV.bgImgIndex];
    let bgUrl = `url('${imgUrl}')`;
    if ($('.page-wrap>.bg-img').attr('src') === imgUrl) {
      return true;
    }
    let bgImg = new Image();
    bgImg.onload = () => {
      $('.page-wrap>.bg-img').css('background-image', bgUrl);
      setTimeout(() => {
        $('.bg-loading-icon').toggleClass('loading');
      }, 200)
    };
    bgImg.src = imgUrl;
  },
  navToggle: () => {
    $('.nav-btn').click();
  },
  loadNavEvents: () => {
    $('.nav-btn,.nav-menu-item>.content>a,.nav-menu-grid').click(() => {
      if($('#loader').length > 0){
        return false;
      }
      if($('img.nav-item-bg-img').attr('src') === undefined){
        AV.loadNavImages();  
      }
      $('nav').toggleClass('nav-open');
      $('.page-wrap').toggleClass('page-wrap-disable');
      $('.page-wrap>.content-container').toggleClass('content-hidden');
    });
    $('.nav-menu-item').on('mousemove', AV.panImage);
  },
  panImage: (e: any) => {
    let item = e.target.parentNode;
    $(item).children('.nav-item-bg-img').css({
      'transform-origin': `${((e.pageX - $(item).offset().left) / $(item).width()) * 100}% ${((e.pageY - $(item).offset().top) / $(item).height()) * 100}%`
    });
  },
  bgImgIndex: 0,
  bgImgList: [   
    'assets/img/bg/code.jpg',
    'assets/img/bg/puertorico.jpg', 
    'assets/img/bg/dubrovnik.jpg',           
    'assets/img/bg/eastcoastbeach.jpg',    
    'assets/img/bg/phangngabay.jpg',
    'assets/img/bg/sanfrancisco.jpg',
    'assets/img/bg/positano.jpg',
    'assets/img/bg/rome.jpg',
    'assets/img/bg/varennaledge.jpg',
    'assets/img/bg/torontoniagra.jpg',
    'assets/img/bg/colorado.jpg',
    'assets/img/bg/gourdonledge.jpg',
    'assets/img/bg/moorearestaurant.jpg',
    'assets/img/bg/muaythai.jpg',
    'assets/img/bg/chicago.jpg',
    'assets/img/bg/costarica.jpg',
    'assets/img/bg/denver.jpg',
    'assets/img/bg/phuket.jpg',
    'assets/img/bg/magicmountain.jpg',
    'assets/img/bg/manava.jpg',
    'assets/img/bg/moorealagoon.jpg',
    'assets/img/bg/twobays.jpg',
    'assets/img/bg/santhiya.jpg',
    'assets/img/bg/segovialedge.jpg'    
  ]
};


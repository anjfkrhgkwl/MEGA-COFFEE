
$(function(){
    $('a').click(function(event){
        event.preventDefault();
    }) //클릭 이벤트 무시
});


$(function(){
    let menu = $('.header .nav .gnb')
    let menuAll = $('.header .depth02')
    let menuBg = $('.header .bg')

    menu.mouseenter(function(){
        menuAll.stop().slideDown(600);
        menuBg.stop().slideDown(600);

        setTimeout(() => {
            menu.addClass('on')
    }, 600);
    });
    menu.mouseleave(function(){
        menuAll.stop().slideUp(600);
        menuBg.stop().slideUp(600);
        menu.removeClass('on')
    });
    //header jquery end
}); //script end

////////////////////////////////////////// visual slide

$(function(){
    let slideList = $('.slide_wrap .image');
    let prevBtn = $('.btn .prev_btn');
    let nextBtn = $('.btn .next_btn');

    slideList.not('.active').hide();

    setInterval(nextSlide, 4000);

    prevBtn.click(function(){
        prevSlide();
    })
    nextBtn.click(function(){
        nextSlide();
    })


function prevSlide() {
    let slideList = $('.slide_wrap .image')

    slideList.hide();
    var allSlide = $('.slide_wrap .image')
    var currentIndex = 0;

    slideList.each(function(index,item){
        if($(this).hasClass('active')) {
            currentIndex = index;
        }
        //console.log(currentIndex)
    });

    var newIndex = 0;

    if(currentIndex <= 0) {
        newIndex = allSlide.length - 1
    } else {
        newIndex = currentIndex - 1
    }
    
    console.log(currentIndex)
    
    slideList.removeClass('active');
    slideList.eq(newIndex).addClass('active');
    slideList.eq(newIndex).show();

}; //prevSlide end

function nextSlide() {
    let slideList = $('.slide_wrap .image')

    slideList.hide();
    var allSlide = $('.slide_wrap .image')
    var currentIndex = 0;

    slideList.each(function(index,item){
        if($(this).hasClass('active')) {
            currentIndex = index;
        }
    });

    var newIndex = 0;

    if(currentIndex >= allSlide.length - 1) {
        newIndex = 0;
    } else {
        newIndex = currentIndex + 1;
    }

    slideList.removeClass('active');
    slideList.eq(newIndex).addClass('active');
    slideList.eq(newIndex).show();
}; //nextSlide end
}); //자동 슬라이드


////////////////////////////////////////////////////// newmenu slide


$(function () {
    let itemSlide = $('.newitem_slide .item');
    let prevBtn = $('.menu_btn .prev_btn');
    let nextBtn = $('.menu_btn .next_btn');
    

    itemSlide.not('.active, .next_active').hide();

    /* prevBtn.click(function () {
        prevSlide();
    })

    var index = 0;

    function prevSlide() {
        
        console.log(i)
        for(var i = 0; i < itemSlide.length; i++) {
                if(i <= 0) {
                    //alert('o')
                    i = 0;
                } else {
                    //alert('x')
                    i = + 1
                }
        }
       
    } */



    //setInterval(nextSlide, 4000);

    prevBtn.click(function () {
        prevSlide();
    })
    nextBtn.click(function () {
        nextSlide();
    })

    function prevSlide() {
        //let itemSlide = $('.newitem_slide .item')
        itemSlide.hide();

        var currentIndex = 0;

        itemSlide.each(function (index) {
            if ($(this).hasClass('active')) {
                currentIndex = index;
            }
        }); //each end

        var newIndex = 0;
        //var nextActive = newIndex + 1;
        var nextActive = newIndex - 1;

        if (currentIndex <= 0) {
            newIndex = 0 
            nextActive = 1
        } else {
            newIndex = currentIndex - 1 
            nextActive = itemSlide.length - 2 
        } 
        /* if (newIndex < itemSlide.length - 1 ) {

            newIndex = itemSlide.length + 1
            nextActive = 0
        }  */

        itemSlide.removeClass('active')
        itemSlide.removeClass('next_active')
        itemSlide.eq(newIndex).addClass('active');
        itemSlide.eq(nextActive).addClass('next_ative');
        itemSlide.eq(newIndex).show();
        itemSlide.eq(nextActive).show();
        console.log(newIndex)
        console.log(nextActive)
        //itemSlide.eq(newIndex + 1).show();
    }; //prevSlide end

    function nextSlide() {
        let itemSlide = $('.newitem_slide .item');

        itemSlide.hide();
        var currentIndex = 0;

        itemSlide.each(function (index) {
            if ($(this).hasClass('active')) {
                currentIndex = index;
            }
        }); //each end

        var newIndex = 0;
        var nextActive = newIndex + 1;

        if (currentIndex >= itemSlide.length - 1) {
            newIndex = itemSlide.length;
            nextActive = itemSlide.length - 1;
        } else {
            newIndex = currentIndex+1;
            nextActive = currentIndex+2
        }

        /* if (nextActive > itemSlide.length - 1) {
            //newIndex = 0;
            newIndex = itemSlide.length - 1
            nextActive = 0;
        }  */

        itemSlide.removeClass('active');
        itemSlide.removeClass('next_active');
        itemSlide.eq(newIndex).addClass('active');
        itemSlide.eq(nextActive).addClass('next_ative');
        itemSlide.eq(newIndex).show();
        itemSlide.eq(nextActive).show();
    }
});
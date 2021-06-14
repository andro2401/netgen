const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})


/*dropdown menu for LIST items*/

$(document).ready(function() {
   $('.btn1').click(function() {
        $('.submenu1').toggleClass('visible');
    });
});

$(document).ready(function() {
   $('.btn2').click(function() {
        $('.submenu2').toggleClass('visible');
    });
});

$(document).ready(function() {
   $('.btn3').click(function() {
        $('.submenu3').toggleClass('visible');
    });
});

$(document).ready(function() {
   $('.btn4').click(function() {
        $('.submenu4').toggleClass('visible');
    });
});

$(document).ready(function() {
   $('.btn5').click(function() {
        $('.submenu5').toggleClass('visible');
    });
});

$(document).ready(function() {
   $('.btn6').click(function() {
        $('.submenu6').toggleClass('visible');
    });
});

$(document).ready(function() {
   $('.btn7').click(function() {
        $('.submenu7').toggleClass('visible');
    });
});

$(document).ready(function() {
   $('.btn8').click(function() {
        $('.submenu8').toggleClass('visible');
    });
});

/*dropdown menu for GRID items*/

$(document).ready(function() {
    $('.btn_1').click(function() {
         $('.submenu_1').toggleClass('show');
     });
 });

$(document).ready(function() {
    $('.btn_2').click(function() {
         $('.submenu_2').toggleClass('show');
     });
 });
 
$(document).ready(function() {
    $('.btn_3').click(function() {
         $('.submenu_3').toggleClass('show');
     });
 });
$(document).ready(function() {
    $('.btn_4').click(function() {
         $('.submenu_4').toggleClass('show');
     });
 });
$(document).ready(function() {
    $('.btn_5').click(function() {
         $('.submenu_5').toggleClass('show');
     });
 });
$(document).ready(function() {
    $('.btn_6').click(function() {
         $('.submenu_6').toggleClass('show');
     });
 });
$(document).ready(function() {
    $('.btn_7').click(function() {
         $('.submenu_7').toggleClass('show');
     });
 });
$(document).ready(function() {
    $('.btn_8').click(function() {
         $('.submenu_8').toggleClass('show');
     });
 });

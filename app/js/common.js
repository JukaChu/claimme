$(document).ready(function () {

    let cloudBtn = [...document.querySelectorAll('.single-cloud__text')];

    function changeCloud() {
        if (cloudBtn.length) {
            cloudBtn.forEach((btn, k) => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (btn.closest('.single-cloud').classList.contains('open')) {
                        btn.closest('.single-cloud').classList.remove('open');
                    } else {
                        btn.closest('.single-cloud').classList.add('open');

                    }
                })
            })
        }
    }

    changeCloud();


    $('#changecompany input').change(function () {
        var radioValue = $("input[name='company']:checked").val();
        $('.third-screen__button').addClass('hidden');
        $('.' + radioValue).removeClass('hidden');
        $('.third-screen__button').removeClass('active');
        $('.third-screen__button').not(".hidden").first().addClass('active');
        $('.third-screen__button').not(".hidden").first().trigger('click');
    });

    $('.swiper-screen__buttons').click(function () {
        var insurance = $("input[name='insurance']:checked").val();
        console.log(insurance);
        $('#linkbutton').attr('href', insurance);
    });

    new Swiper('.main-section', {
        allowSlidePrev: false,
        // allowSlideNext:false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }

    });


    // const radioButton = document.querySelectorAll('.second-screen__button'),
    //       currentElement = document.querySelectorAll('.second-screen__button input');

    function activeRadioButton(btn, input) {
        const radioButton = document.querySelectorAll(btn),
            currentElement = document.querySelectorAll(input);

        radioButton.forEach((item, index) => {
            item.addEventListener('click', function () {
                if (currentElement[index].checked && !item.classList.contains('active')) {
                    item.classList.add('active');
                } else {
                    radioButton.forEach(item => {
                        item.classList.remove('active');
                    });

                }
            });
        });
    }

    activeRadioButton('.second-screen__button', '.second-screen__button input');
    activeRadioButton('.third-screen__button', '.third-screen__button input');


    $('.faq-accordion__item-button').each(function (index) {
        $(this).on('click', function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $('.faq-accordion__item-content').eq(index).stop().slideToggle();
            } else {
                $('.faq-accordion__item-button').each(function () {
                    $(this).removeClass('active');
                });
                $('.faq-accordion__item-content').each(function () {
                    $(this).slideUp();
                });
                $(this).addClass('active');
                $('.faq-accordion__item-content').eq(index).stop().slideToggle();
            }
        });
    });


    $(window).on('scroll', function () {
        if (document.querySelector('.about')) {
            if ($(window).scrollTop() > $('.about').offset().top) {
                $('.contact-btn').addClass('show');
            } else {
                $('.contact-btn').removeClass('show');
            }
        }

    });


    $('.header-mobile__menu').on('click', function () {
        $(this).toggleClass('active');
        $('.header-mobile__nav').toggleClass('open');
        $('body').toggleClass('active');
    });


    if (document.querySelector('.footer-button')) {
        document.querySelector('.footer-button').addEventListener('click', () => {
            window.scrollTo(0, 0);
        });
    }


    let choiceBlock = document.querySelector('.claim-choice');

    function choicePage() {
        if (choiceBlock) {
            let choiceBtns = [...choiceBlock.querySelectorAll('.general-choice .select-type .btn')];
            let formLeftBtn = choiceBlock.querySelector('.left-choice__form .btn');

            let stepLeftBtn = [...choiceBlock.querySelectorAll('.choice-block__steps .step')];

            choiceBtns.forEach((btn) => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    let rule = btn.dataset.rule;

                    let ruleBlock = document.querySelector(`.${rule}`);
                    ruleBlock.classList.add('choiced');
                })
            });

            formLeftBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                document.querySelector('.left-choice').classList.add('step-2');
                stepLeftBtn.forEach((bt, k) => {
                    bt.classList.remove('selected');
                    if (k === 1) {
                        bt.classList.add('selected');
                    }
                });
            });


            let formRightBack = choiceBlock.querySelector('.right-choice .back-step');
            formRightBack.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                document.querySelector('.choice-block.choiced').classList.remove('choiced');
            })
        }
    }

    choicePage();
});













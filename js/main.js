const data = [
    {
        id: 1,
        title1: '사운드에 힘을.',
        title2: ' 퍼포먼스에 감동을.',
        imgurl: 'img/pic/STUDIO CLASSIC HEAD.png',
        txt: '앰프는 소리를 증폭시키고 음질과 볼륨을 향상시키는 공연의 심장 같은 존재입니다. 다양한 종류와 구성으로 혼자 연습하는 방부터 대규모 스테이지까지 모든 연주 상황에 필요한 요건을 충족시킵니다.',
        name: 'STUDIO CLASSIC HEAD',
    },
    {
        id: 2,
        title1: '집이나 이동 중에도',
        title2: ' MARSHALL 사운드를 즐기세요.',
        imgurl: 'img/pic/STANMORE.png',
        txt: '이제 Marshall의 시그니처 사운드와 어디서든 함께 하세요. 끊김 없는 연결성과 긴 무선 재생시간이 주는 자유로움, 아이코닉한 사운드와 디자인까지 갖춘 스피커가 여러분을 기다리고 있습니다.',
        name: 'STANMORE III',
    },
    {
        id: 3,
        title1: '다양한 MARSHALL 헤드폰 중에서 ',
        title2: '마음에 드는 제품을 찾아보세요.',
        imgurl: 'img/pic/MAJOR.png',
        txt: '와이어리스의 편리함, 유선의 안정성, 노이즈 캔슬링의 몰입감 기능 등 선호하는 조건에 맞는 완벽한 헤드폰이 여기에 있습니다.',
        name: 'MAJOR IV',
    },
];

var swiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    centeredSlides: true,
});

let header = document.querySelector('#header');
let menu = document.querySelector('#header .menu');
let close = document.querySelector('#header .nav .gnb .close');
let nav = document.querySelector(' #header .nav');
let w = window.innerWidth;

let bohan = document.querySelector('.main .con1 .am-list .bohan ');
let kelvin = document.querySelector('.main .con1 .am-list .kelvin');
let suki = document.querySelector('.main .con1 .am-list .suki ');

let con2Btn = document.querySelectorAll('.main .con2 .box-left li');
let con2Title1 = document.querySelector('.main .con2 .box-right .title.title1');
let con2Title2 = document.querySelector('.main .con2 .box-right .title.title2');
let con2Txt = document.querySelector('.main .con2 .box-right .txt');
let con2Pic = document.querySelector('.main .con2 .box-right .con2-pic');
let con2Name = document.querySelector('.main .con2 .box-right .name');

let leftBox = document.querySelector('.main .con3 .left-box');
let leftImg = document.querySelector('.main .con3 .left-box img');
let leftVid = document.querySelector('.main .con3 .left-box video');
let leftTxtBox = document.querySelector('.main .con3 .left-box .txt-box.on');
let leftSha = document.querySelector('.main .con3 .left-box .shadow ');

let rightBox = document.querySelector('.main .con3 .right-box');
let rightImg = document.querySelector('.main .con3 .right-box img');
let rightVid = document.querySelector('.main .con3 .right-box video');
let rightTxtBox = document.querySelector('.main .con3 .right-box .txt-box.on');
let rightSha = document.querySelector('.main .con3 .right-box .shadow ');

header.addEventListener('mouseenter', (e) => {
    header.classList.add('on');
});
header.addEventListener('mouseleave', (e) => {
    header.classList.remove('on');
});
menu.addEventListener('click', (e) => {
    nav.classList.add('on');
    header.style.backdropFilter = 'none';
});
close.addEventListener('click', (e) => {
    nav.classList.remove('on');
    header.classList.remove('on');
    header.style.backdropFilter = 'blur(3px)';
});

let amList = document.querySelector('.main .con1 .am-list');
let amListli = document.querySelector('.main .con1 .am-list li');

window.addEventListener('resize', (e) => {
    w = window.innerWidth;
    if (w < 700) {
        bohan.style.height = '230px';
        kelvin.style.height = '230px';
        suki.style.height = '230px';
        bohan.addEventListener('mouseenter', (e) => {
            bohan.style.height = '460px';
            kelvin.style.height = '115px';
            suki.style.height = '115px';
        });
        bohan.addEventListener('mouseleave', (e) => {
            bohan.style.height = '230px';
            kelvin.style.height = '230px';
            suki.style.height = '230px';
        });
        kelvin.addEventListener('mouseenter', (e) => {
            console.log('kelvin');
            bohan.style.height = '115px';
            kelvin.style.height = '460px';
            suki.style.height = '115px';
        });
        kelvin.addEventListener('mouseleave', (e) => {
            bohan.style.height = '230px';
            kelvin.style.height = '230px';
            suki.style.height = '230px';
        });
        suki.addEventListener('mouseenter', (e) => {
            bohan.style.height = '115px';
            kelvin.style.height = '115px';
            suki.style.height = '460px';
        });
        suki.addEventListener('mouseleave', (e) => {
            bohan.style.height = '230px';
            kelvin.style.height = '230px';
            suki.style.height = '230px';
        });
    }
    if (w > 700) {
        console.log('test');
        amList.style.header = '650px';
        bohan.style.height = '650px';
        kelvin.style.height = '650px';
        suki.style.height = '650px';
        const wsize = () => {
            bohan.style.height = '650px';
            kelvin.style.height = '650px';
            suki.style.height = '650px';
        };
        bohan.addEventListener('mouseenter', wsize);
        bohan.addEventListener('mouseleave', wsize);
        kelvin.addEventListener('mouseenter', wsize);
        kelvin.addEventListener('mouseleave', wsize);
        suki.addEventListener('mouseenter', wsize);
        suki.addEventListener('mouseleave', wsize);
    }
});

function scroll() {
    var prevScrollTop = 0;

    document.addEventListener('scroll', function () {
        let nowScrollTop = window.scrollY;

        if (nowScrollTop > prevScrollTop) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
        prevScrollTop = nowScrollTop;
    });
}
scroll();

con2Btn.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
        con2Title1.textContent = data[idx].title1;
        con2Title2.textContent = data[idx].title2;
        con2Txt.textContent = data[idx].txt;
        con2Name.textContent = data[idx].name;
        con2Pic.setAttribute('src', data[idx].imgurl);
        con2Btn.forEach((liItem) => {
            liItem.classList.remove('on');
        });
        e.currentTarget.classList.add('on');
    });
});

leftBox.addEventListener('mouseenter', (e) => {
    leftTxtBox.classList.remove('on');
    leftImg.classList.add('on');
    leftVid.classList.add('on');
    leftSha.classList.add('on');
});
leftBox.addEventListener('mouseleave', (e) => {
    leftTxtBox.classList.add('on');
    leftImg.classList.remove('on');
    leftVid.classList.remove('on');
    leftSha.classList.remove('on');
});
rightBox.addEventListener('mouseenter', (e) => {
    rightTxtBox.classList.remove('on');
    rightImg.classList.add('on');
    rightVid.classList.add('on');
    rightSha.classList.add('on');
});
rightBox.addEventListener('mouseleave', (e) => {
    rightTxtBox.classList.add('on');
    rightImg.classList.remove('on');
    rightVid.classList.remove('on');
    rightSha.classList.remove('on');
});

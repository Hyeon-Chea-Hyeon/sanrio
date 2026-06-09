// DOM 요소가 모두 로드된 후 실행되도록 안전하게 감싸줍니다.
document.addEventListener('DOMContentLoaded', () => {

    const ttl = document.querySelector('#head header .mn .ttl');

        if (ttl) {
            ttl.style.cursor = 'pointer';
            ttl.addEventListener('click', () => {
                location.href = 'index.html';
            });
        }

    const gnbItems = document.querySelectorAll('#head header nav ul li');
    const gnbUrls = [
        'company.html',    // COMPANY 클릭 시 이동할 페이지
        'characters.html', // CHARACTERS 클릭 시 이동할 페이지
        'place.html',      // PLACE 클릭 시 이동할 페이지
        'recruit.html'     // RECRUIT 클릭 시 이동할 페이지
    ];

    gnbItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            if (gnbUrls[index]) location.href = gnbUrls[index];
        });
    });

    const moreBtn = document.querySelector('#hello_friends .btn');
    if (moreBtn) {
        moreBtn.style.cursor = 'pointer';
        moreBtn.addEventListener('click', () => {
            location.href = 'characters.html';
        });
    }

    const slider = document.querySelector('#slider .mnbd');

    const leftBtn = document.querySelectorAll('.arrow')[0];
    const rightBtn = document.querySelectorAll('.arrow')[1];

    const btn1 = document.querySelector('.btn1');
    const btn2 = document.querySelector('.btn2');

    let current = 0;

    function updateSlide(){

        slider.style.transform =
            `translateX(-${current * 50}%)`;

        if(current === 0){
            btn1.classList.remove('unselected');
            btn2.classList.remove('selected');
        }else{
            btn1.classList.add('unselected');
            btn2.classList.add('selected');
        }
    }

    rightBtn.addEventListener('click', () => {
        current = 1;
        updateSlide();
    });

    leftBtn.addEventListener('click', () => {
        current = 0;
        updateSlide();
    });

    btn1.addEventListener('click', () => {
        current = 0;
        updateSlide();
    });

    btn2.addEventListener('click', () => {
        current = 1;
        updateSlide();
    });
});

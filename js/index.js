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

    const mnbd = document.querySelector('.mnbd');
    const arrows = document.querySelectorAll('.arrow');

    let current = 0;
    const max = 1; // mn1, mn2 두 장

    // 오른쪽 화살표
    arrows[1].addEventListener('click', () => {
        if(current < max){
            current++;
        }else{
            current = 0;
        }

        mnbd.style.transform = `translateX(-${current * 100}%)`;
    });

    // 왼쪽 화살표
    arrows[0].addEventListener('click', () => {
        if(current > 0){
            current--;
        }else{
            current = max;
        }

        mnbd.style.transform = `translateX(-${current * 100}%)`;
    });
    
});

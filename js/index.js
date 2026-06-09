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
    const mnbdchild = mnbd.children;
    const mn1 = document.querySelector('.mnbd >ul')[0];
    let n = 0;
    let targetx = 0;

    for(let i=0; i<mnbdchild.length; i++){
        mnbdchild[i].addEventListener('click', function(){
            n = i;
            targetx = -100 * n;
            mnbd.style.transform = `translateX(${targetx}%)`;
        });
    }

    const arrow = document.querySelectorAll('.arrow');
    arrow[0].addEventListener('click', function(){
        n--;
        if(n < 0){
            n = mnbdchild.length - 1;
        }
        targetx = -100 * n;
        mnbd.style.transform = `translateX(${targetx}%)`;
    });

    arrow[1].addEventListener('click', function(){
        n++;
        if(n >= mnbdchild.length){
            n = 0;
        }
        targetx = -100 * n;
        mnbd.style.transform = `translateX(${targetx}%)`;
    });
});

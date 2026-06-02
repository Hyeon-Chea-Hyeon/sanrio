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

    characterItems.forEach((item, index) => {
        item.style.cursor = 'pointer'; 
        item.addEventListener('click', () => {
            if (characterUrls[index]) location.href = characterUrls[index];
        });
    });    

    const moreBtn = document.querySelector('#first .btn');
    if (moreBtn) {
        moreBtn.addEventListener('click', () => {
            location.href = 'all_characters.html'; 
        });
    }

    const companyCards = document.querySelectorAll('#second .mn li');
    const companyUrls = [
        'intro.html',    // 회사소개
        'history.html',  // 회사연혁
        'business.html'  // 사업영역
    ];

    companyCards.forEach((card, index) => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            if (companyUrls[index]) location.href = companyUrls[index];
        });
    });

    const applyBtn = document.querySelector('#third article .now');
    if (applyBtn) {
        applyBtn.addEventListener('click', () => {
            location.href = 'apply_form.html'; 
        });
    }
});

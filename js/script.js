// =========================
// RANDOM HERO IMAGE
// Случајно избирање Hero слика
// =========================
let currentLanguage = "mk";
const heroImages = [
    "images/hero1.jpg",
    "images/hero2.jpg",
    "images/hero3.jpg",
    "images/hero4.jpg",
    "images/hero5.jpg"
];

const randomHero =
    heroImages[Math.floor(Math.random() * heroImages.length)];

document.getElementById("hero").style.backgroundImage =
    `url('${randomHero}')`;



// =========================
// MOBILE MENU
// Отворање и затворање на мобилното мени
// =========================

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {

    nav.classList.toggle("active");

});

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});
// =========================
// DISABLE IMAGE RIGHT CLICK
// Спречување на десен клик врз сликите
// =========================
document.querySelectorAll("img").forEach(img => {
    img.addEventListener("contextmenu", e => e.preventDefault());
});

// =========================
// LANGUAGE TRANSLATIONS
// Текстови за македонски и англиски јазик
// =========================

const translations = {

    mk:{
        visit_site:
            "Посети веб страна",

        experience: "Години искуство",
        fresh: "Дена свежина",
        producers: "Проверени производители",
        commitment: "Посветеност",

        partner_belimost:
            "Бели Мост – Битола",

        partner_belimost_short:
            "Долгогодишен партнер со квалитетни јајца.",

        partner_belimost_long:
            "Бели Мост е производител на свежи јајца со долгогодишно искуство. Благодарение на строгите стандарди за квалитет обезбедуваат сигурни производи за секојдневна употреба.",



        partner_margo:
            "Марго Дооел – Битола",

        partner_margo_short:
            "Проверен партнер со традиција и квалитет.",

        partner_margo_long:
            "Марго Дооел произведува квалитетни јајца и се стреми кон постојано подобрување на свежината и квалитетот на своите производи.",



        partner_super:
            "Супер Јајце – Кавадарци",

        partner_super_short:
            "Модерен производител на свежи јајца.",

        partner_super_long:
            "Супер Јајце е компанија која обезбедува свежи производи со висок квалитет и внимание кон потребите на потрошувачите.",


        show_more:
            "Прикажи повеќе",

        close:
            "Затвори",

        nav_partners:"<i class=\"fa-solid fa-users\"></i> Партнери",

        partners_small:"Наши партнери",

        partners_title:"Производители со кои соработуваме",

        cookie_text:
            "Оваа веб страна користи cookies за подобро корисничко искуство.",

        cookie_accept:
            "Прифати",

        cookie_reject:
            "Одбиј",

        nav_home:"<i class=\"fa-solid fa-house\"></i> Почетна",
        nav_about:"<i class=\"fa-solid fa-info\"></i> За нас",
        nav_products:"<i class=\"fa-solid fa-egg\"></i> Производи",
        nav_gallery:"<i class=\"fa-solid fa-image\"></i> Галерија",
        nav_contact:"<i class=\"fa-solid fa-phone\"></i> Контакт",

        hero_text:"Традиција, квалитет и свежина во секое јајце.\nСвеж избор за секое семејство.",
        hero_button:"Погледни производи",

        about_small:"Добредојдовте",

        about_title:"Традиција, квалитет и доверба",

        about_text1:"С&С Јајце е семејна продавница од Кичево која успешно работи повеќе од 20 години. Во текот на сите овие години изградивме доверба кај нашите купувачи благодарение на постојаниот квалитет, свежината на производите и професионалната услуга. Соработуваме со докажани производители на јајца како <a href='#partners' style='color: #800020'><u>Бели Мост – Битола</u></a>,<a href='#partners' style='color: #800020'><u> Марго Дооел – Битола</u></a> и <a href='#partners' style='color: #800020'><u>Супер Јајце – Кавадарци</u></a>.",

        about_text2:"Нашата цел е секој купувач да добие сигурен квалитет, свежина и услуга на која секогаш може да се потпре. За нас задоволен клиент е најголемата препорака.",

        quality:"Квалитет",
        fresh:"Свежина секој ден",
        trust:"Доверба",

        products_small:"Наши производи",

        products_title:"Свежи јајца за секој ден",

        product_xl:"Јајца XL (>73gr)",
        product_xl_text:"Најголеми свежи јајца со врвен квалитет. Одличен избор за домаќинства, ресторани и угостителски објекти.",

        product_l:"Јајца L (63-73gr)",
        product_l_text:"Свежи јајца со големина L, идеални за секојдневна употреба и подготовка на различни јадења.",

        product_m:"Јајца M (53-63gr)",
        product_m_text:"Квалитетни и свежи јајца со средна големина, погодни за секое семејство.",

        product_s:"Јајца S (<53gr)",
        product_s_text:"Свежи јајца со помала големина, достапни по одлична цена и секогаш свежи.",

        product_jufki:"Домашни Јуфки",
        product_jufki_text:"Квалитетни домашни јуфки подготвени од внимателно одбрани состојки.",

        product_tarana:"Домашна Тарана",
        product_tarana_text:"Традиционална домашна тарана со препознатлив вкус.",

        product_sugar:"Шеќер во стапчиња",
        product_sugar_text:"Практично пакување на шеќер во стапчиња за кафулиња и ресторани.",
        gallery_small:"Наши фотографии",
        gallery_title:"Галерија",

        contact_small:"Контактирајте нè",
        contact_title:"Контакт",

        address_title:"<i class=\"fa-solid fa-location-dot\"></i> Адреса",
        phone_title:"<i class=\"fa-solid fa-phone\"></i> Телефон",
        email_title:"<i class=\"fa-solid fa-envelope\"></i> E-mail",
        working_title:"<i class=\"fa-solid fa-clock\"></i> Работно време",
        working_hours:"Пон - Пет: 09:00 - 16:00<br>Саб: 09:00 - 15:00",

        footer_text:"Традиција, квалитет и свежина во секое јајце.<br>Денес снесено, денес донесено.",

        footer_menu:"Мени",

        follow:"Следете нè",

        rights:"Сите права се задржани.",
        form_title:"Испратете порака",
        form_name:"Име и презиме",
        form_email:"Email",
        form_message:"Порака",
        form_button:"Испрати",
        form_name1:
            "Вашето име и презиме",

        form_email1:
            "Вашиот email",

        form_message1:
            "Вашата порака",

    },

    en:{

        visit_site:
            "Visit Website",

        experience: "Years of experience",
        fresh: "Days of freshness",
        producers: "Trusted producers",
        commitment: "Commitment",

        partner_belimost:
            "Beli Most – Bitola",

        partner_belimost_short:
            "Long-term partner providing quality eggs.",

        partner_belimost_long:
            "Beli Most is a fresh egg producer with many years of experience. Through strict quality standards, they provide reliable products for everyday use.",



        partner_margo:
            "Margo Dooel – Bitola",

        partner_margo_short:
            "A trusted partner with tradition and quality.",

        partner_margo_long:
            "Margo Dooel produces high-quality eggs and constantly works on improving freshness and product quality.",



        partner_super:
            "Super Jajce – Kavadarci",

        partner_super_short:
            "A modern fresh egg producer.",

        partner_super_long:
            "Super Jajce is a company that provides fresh products with high quality and attention to customer needs.",


        show_more:
            "Show More",

        close:
            "Close",
        nav_partners:"<i class=\"fa-solid fa-users\"></i> Partners",

        partners_small:"Our Partners",

        partners_title:"Manufacturers We Work With",
        cookie_text:
            "This website uses cookies to improve your experience.",

        cookie_accept:
            "Accept",

        cookie_reject:
            "Reject",

        nav_home:"<i class=\"fa-solid fa-house\"></i> Home",
        nav_about:"<i class=\"fa-solid fa-info\"></i> About Us",
        nav_products:"<i class=\"fa-solid fa-egg\"></i> Products",
        nav_gallery:"<i class=\"fa-solid fa-image\"></i> Gallery",
        nav_contact:"<i class=\"fa-solid fa-phone\"></i> Contact",

        hero_text:"Tradition, quality and freshness in every egg.\nA fresh choice for every family.",
        hero_button:"View Products",

        about_small:"Welcome",

        about_title:"Tradition, Quality and Trust",

        about_text1:"S&S Jajce is a family-run store from Kicevo that has been successfully operating for over 20 years. Over the years, we have built trust among our customers thanks to the consistent quality, freshness of our products and professional service. We cooperate with proven egg producers such as <a href='#partners' style='color: #800020'><u>Beli Most – Bitola</u></a>, <a href='#partners'  style='color: #800020'><u>Margo Dooel – Bitola</u></a> and <a href='#partners' style='color: #800020'><u>Super Jajce – Kavadarci</u></a>.",
        about_text2:"Our goal is for every customer to receive reliable quality, freshness and service they can always rely on. For us, a satisfied customer is the greatest recommendation.",

        quality:"Quality",
        fresh:"Fresh Every Day",
        trust:"Trust",

        products_small:"Our Products",

        products_title:"Fresh Eggs Every Day",

        product_xl:"XL Eggs (>73gr)",
        product_xl_text:"The largest fresh eggs of top quality. An excellent choice for households, restaurants and catering facilities.",

        product_l:"L Eggs (63-73gr)",
        product_l_text:"Fresh eggs, size L, ideal for everyday use and preparing various dishes.",

        product_m:"M Eggs (53-63gr)",
        product_m_text:"Quality and fresh medium-sized eggs, suitable for every family.",

        product_s:"S Eggs (<53gr)",
        product_s_text:"Fresh eggs of smaller size, available at a great price and always fresh.",

        product_jufki:"Homemade Tagliatelle",
        product_jufki_text:"Quality homemade noodles prepared from carefully selected ingredients.",

        product_tarana:"Homemade Tarana",
        product_tarana_text:"Traditional homemade tarana with a distinctive flavor.",

        product_sugar:"Sugar Sticks",
        product_sugar_text:"Practical packaging of sugar sticks for cafes and restaurants.",

        gallery_small:"Our Photos",
        gallery_title:"Gallery",

        contact_small:"Contact Us",
        contact_title:"Contact",

        address_title:"<i class=\"fa-solid fa-location-dot\"></i> Address",
        phone_title:"<i class=\"fa-solid fa-phone\"></i> Phone",
        email_title:"<i class=\"fa-solid fa-envelope\"></i> E-mail",
        working_title:"<i class=\"fa-solid fa-clock\"></i> Working Hours",
        working_hours:"Mon - Fri: 09:00 - 16:00<br>Sat: 09:00 - 15:00",

        footer_text:"Tradition, quality and freshness in every egg.<br>Today laid, today brought.",

        footer_menu:"Menu",

        follow:"Follow Us",

        rights:"All Rights Reserved.",

        form_title:"Send a message",
        form_name:"Name and surname",
        form_email:"Email",
        form_message:"Message",
        form_button:"Send",
        form_name1:
            "Your name and surname",

        form_email1:
            "Your email",

        form_message1:
            "Your message",

    }

};

// =========================
// CHANGE LANGUAGE
// Функција за промена на јазикот
// =========================

const mkBtn = document.getElementById("mkBtn");
const enBtn = document.getElementById("enBtn");

function changeLanguage(language){
    currentLanguage = language;
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(element=>{

        const key = element.getAttribute("data-i18n");

        if(translations[language][key]){

            element.innerHTML =
                translations[language][key];

        }
        const placeholders =
            document.querySelectorAll("[data-i18n-placeholder]");


        placeholders.forEach(element=>{

            const key =
                element.getAttribute("data-i18n-placeholder");


            if(translations[language][key]){

                element.placeholder =
                    translations[language][key];

            }

        });
        // update partner buttons state
        document.querySelectorAll(".partner-card").forEach(card=>{

            const button = card.querySelector(".partner-btn");

            if(button){

                if(card.classList.contains("open")){

                    button.innerHTML =
                        translations[language]["close"];

                }else{

                    button.innerHTML =
                        translations[language]["show_more"];

                }

            }

        });

    });

    if(language==="mk"){

        mkBtn.classList.add("active");
        enBtn.classList.remove("active");

    }else{

        enBtn.classList.add("active");
        mkBtn.classList.remove("active");

    }

    localStorage.setItem("language",language);

}



// =========================
// LANGUAGE BUTTONS
// Копчиња за избор на јазик
// =========================

mkBtn.addEventListener("click",()=>{

    changeLanguage("mk");

});

enBtn.addEventListener("click",()=>{

    changeLanguage("en");

});



// =========================
// LOAD SAVED LANGUAGE
// Вчитување на претходно избраниот јазик
// =========================

const savedLanguage =
    localStorage.getItem("language");

if(savedLanguage){

    changeLanguage(savedLanguage);

}else{

    changeLanguage("mk");

}



// =========================
// ACTIVE NAVIGATION
// Означување на активната секција при скролување
// =========================

const sections =
    document.querySelectorAll("section");

const menuLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop =
            section.offsetTop-150;

        const sectionHeight =
            section.clientHeight;

        if(

            pageYOffset>=sectionTop &&
            pageYOffset<sectionTop+sectionHeight

        ){

            current=
                section.getAttribute("id");

        }

    });

    menuLinks.forEach(link=>{

        link.classList.remove("active");

        if(
            link.getAttribute("href")==="#"+current
        ){

            link.classList.add("active");

        }

    });

});

// =========================
// GALLERY CAROUSEL
// Основна функционалност на Gallery Carousel
// =========================

const sliderTrack = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const dots = document.querySelectorAll(".dot");

let currentSlide = 0;
let autoPlay;
let isAnimating = false;

// =========================
// UPDATE SLIDER
// Ажурирање на позицијата и активната точка на слајдерот
// =========================
function updateSlider(){

    isAnimating = true;

    sliderTrack.style.transform =
        `translateX(-${currentSlide * 100}%)`;

    dots.forEach(dot=>{
        dot.classList.remove("active");
    });

    dots[currentSlide].classList.add("active");


    setTimeout(()=>{

        isAnimating = false;

    },600);

}
// =========================
// NEXT SLIDE
// Преминување на следната слика
// =========================
function nextSlide(){

    if(isAnimating) return;


    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    updateSlider();

}
// =========================
// PREVIOUS SLIDE
// Враќање на претходната слика
// =========================
function previousSlide(){

    if(isAnimating) return;


    currentSlide--;

    if(currentSlide < 0){

        currentSlide = slides.length - 1;

    }

    updateSlider();

}
// =========================
// SLIDER BUTTONS
// Контрола на слајдерот преку Next и Previous копчињата
// =========================
nextBtn.addEventListener("click",()=>{

    nextSlide();

    restartAuto();

});

prevBtn.addEventListener("click",()=>{

    previousSlide();

    restartAuto();

});

// =========================
// LOGO RELOAD
// Освежување на страницата при клик на логото
// =========================
document.querySelector("#header > div > a").addEventListener("click", function (e) {
    e.preventDefault();
    location.reload();
});

// =========================
// SLIDER DOTS
// Избор на слика преку точките
// =========================
dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        if(isAnimating) return;

        currentSlide=index;

        updateSlider();

        restartAuto();

    });

});

// =========================
// AUTO PLAY
// Автоматско менување на сликите
// =========================
function startAuto(){

    clearInterval(autoPlay);

    autoPlay = setInterval(()=>{

        nextSlide();

    },5000);

}
// =========================
// RESTART AUTO PLAY
// Рестартирање на автоматското менување
// =========================
function restartAuto(){

    clearInterval(autoPlay);

    startAuto();

}

startAuto();

// =========================
// PAUSE ON HOVER
// Паузирање на Carousel кога курсорот е над галеријата
// =========================

const gallerySlider =
    document.querySelector(".gallery-slider");

gallerySlider.addEventListener("mouseenter",()=>{

    clearInterval(autoPlay);

});

gallerySlider.addEventListener("mouseleave",()=>{

    startAuto();

});



// =========================
// TOUCH SWIPE
// Swipe контрола за мобилни уреди
// =========================

let touchStart = 0;
let touchEnd = 0;

sliderTrack.addEventListener("touchstart",(e)=>{

    touchStart = e.changedTouches[0].screenX;

});

sliderTrack.addEventListener("touchend",(e)=>{

    touchEnd = e.changedTouches[0].screenX;

    if(touchStart - touchEnd > 60){

        nextSlide();

        restartAuto();

    }

    if(touchEnd - touchStart > 60){

        previousSlide();

        restartAuto();

    }

});



// =========================
// INITIALIZE SLIDER
// Поставување на почетната слика
// =========================

updateSlider();

// =========================
// LOADING SCREEN
// =========================


window.addEventListener("load",()=>{


    const loader =
        document.getElementById("loader");


    setTimeout(()=>{


        loader.classList.add("hide");


    },700);


});

// =========================
// SCROLL FADE IN
// Анимација на елементите при појавување на екранот
// =========================


const fadeElements =
    document.querySelectorAll(
        "section, .product-card, .about-box, .contact-box, .footer-container"
    );


fadeElements.forEach(element=>{

    element.classList.add("fade-in");

});



const observer =
    new IntersectionObserver((entries)=>{


            entries.forEach(entry=>{


                if(entry.isIntersecting){


                    entry.target.classList.add("show");


                }


            });


        },
        {
            threshold:0.15
        });



fadeElements.forEach(element=>{

    observer.observe(element);

});

// =========================
// CONTACT FORM
// Обработка на контакт формата
// =========================
document.querySelector(".contact-form form")
    .addEventListener("submit",function(e){

        e.preventDefault();

        alert("Вашата порака е успешно испратена!");

        this.reset();

    });

// =========================
// COOKIE CONSENT
// Прифаќање или одбивање на cookies
// =========================
function acceptCookie(){

    localStorage.setItem(
        "cookies",
        "accepted"
    );

    document.getElementById("cookie-banner").remove();

}



function rejectCookie(){

    localStorage.setItem(
        "cookies",
        "rejected"
    );

    document.getElementById("cookie-banner").remove();

}


// =========================
// LOAD COOKIE PREFERENCE
// Проверка дали корисникот веќе избрал за cookies
// =========================
window.addEventListener("load",()=>{


    if(localStorage.getItem("cookies")){

        const banner =
            document.getElementById("cookie-banner");


        if(banner){

            banner.remove();

        }

    }


});

// =========================
// PARTNERS CARDS
// Отворање и затворање на деталите за партнерите
// =========================

const partnerButtons = document.querySelectorAll(".partner-btn");


partnerButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".partner-card");


        card.classList.toggle("open");


        if(card.classList.contains("open")){

            button.innerHTML =
                translations[currentLanguage]["close"];

        }else{

            button.innerHTML =
                translations[currentLanguage]["show_more"];

        }

    });

});

// =========================
// DARK MODE
// Вклучување и исклучување на темниот режим
// =========================

const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");


// =========================
// UPDATE THEME ICON
// Ажурирање на иконата според избраната тема
// =========================
function updateThemeIcon(){

    if(document.body.classList.contains("dark")){

        themeIcon.className="fa-solid fa-sun";

    }else{

        themeIcon.className="fa-solid fa-moon";

    }

}
// =========================
// LOAD SAVED THEME
// Вчитување на зачуваната тема
// =========================
if(localStorage.getItem("theme")==="dark"){

    document.body.classList.add("dark");

}

updateThemeIcon();

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

    }else{

        localStorage.setItem("theme","light");

    }

    updateThemeIcon();

});


// =========================
// ROLLING ABOUT COUNTERS
// Бројките се движат нагоре
// =========================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = Number(counter.dataset.target);

        const duration = 5000;

        let start = 0;

        const startTime = performance.now();


        function animateCounter(currentTime){

            const elapsed = currentTime - startTime;

            const progress = Math.min(elapsed / duration, 1);

            // smooth animation
            const easeOut = 1 - Math.pow(1 - progress, 3);

            const currentValue = Math.floor(
                start + (target - start) * easeOut
            );

            counter.textContent = currentValue;


            if(progress < 1){

                requestAnimationFrame(animateCounter);

            }else{

                counter.textContent = target;

            }

        }


        requestAnimationFrame(animateCounter);

        observer.unobserve(counter);

    });

}, {

    threshold:0.5

});


counters.forEach(counter => {

    counterObserver.observe(counter);

});

// =========================
// BACK TO TOP
// Копче за враќање најгоре
// =========================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

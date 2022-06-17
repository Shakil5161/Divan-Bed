import './styles/index.scss';
var footerRedesign = {
    init: function() {
        this.mainCss();
        this.mainJs();
        this.forSwiperX();
    },
    mainCss: function() {
        var styles = document.createElement('style');
        styles.setAttribute('type', 'text/css');
        document.head.appendChild(styles).textContent =
            '' +
            /* CSS will be imported here */
            '';
    },
    mainJs: function() {

        var chevron = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.53 100"><defs></defs></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="tEYAXC.tif"><path fill='#ffffff' d="M42.45,50a17.62,17.62,0,0,1-1.84-1.36L2,10.11c-.36-.36-.73-.7-1-1.08C-.28,7.61-.34,6.85.91,5.51,2.45,3.86,4.09,2.29,5.71.72A2.24,2.24,0,0,1,8.85.57,11.73,11.73,0,0,1,10.2,1.76Q33.08,24.67,55.94,47.59c2.11,2.11,2.11,2.71,0,4.8Q33.1,75.31,10.22,98.22a12.76,12.76,0,0,1-1.35,1.19,2.22,2.22,0,0,1-3.14-.12c-1.66-1.6-3.3-3.23-4.93-4.87a2.1,2.1,0,0,1-.06-3.2c.4-.45.82-.88,1.25-1.31l38.6-38.49A22.38,22.38,0,0,1,42.45,50Z"/></g></g></g></svg>`;

        var envelope = `<svg width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.3553 22C10.8265 22 7.31279 22 3.78403 22C1.9671 22 0.600641 20.9422 0.120129 19.1638C0.0300333 18.8265 -0.0150146 18.4585 -0.0150146 18.1059C1.34017e-06 13.3686 1.34017e-06 8.63136 1.34017e-06 3.89408C1.34017e-06 2.02369 1.0361 0.61324 2.76294 0.137979C3.10831 0.045993 3.48371 0 3.82908 0C10.8716 0 17.8991 0 24.9265 0C26.7885 0 28.155 1.04251 28.6205 2.83624C28.7106 3.17352 28.7556 3.54146 28.7556 3.89408C28.7706 8.63136 28.7706 13.3686 28.7556 18.1059C28.7556 19.9763 27.7345 21.3561 25.9927 21.8467C25.6323 21.954 25.2269 21.9847 24.8515 21.9847C21.3527 22 17.854 22 14.3553 22ZM14.3853 2.6676C11.1118 2.6676 7.83835 2.6676 4.56486 2.6676C4.29457 2.6676 4.00927 2.6676 3.73898 2.6676C3.04825 2.68293 2.68786 3.0662 2.67285 3.77143C2.67285 4.01672 2.70288 4.26202 2.67285 4.49199C2.6278 4.82927 2.77796 5.02857 3.01821 5.22787C6.03643 7.74216 9.03963 10.2564 12.0578 12.7861C13.6195 14.1045 15.2112 14.1045 16.7729 12.7861C19.6259 10.3791 22.4789 7.95679 25.362 5.58049C25.9026 5.13589 26.1579 4.69129 26.1128 3.9554C26.0377 2.98955 25.7825 2.6676 24.8515 2.6676C21.3527 2.6676 17.869 2.6676 14.3853 2.6676ZM2.68786 8.44739C2.68786 8.67735 2.68786 8.8 2.68786 8.93798C2.68786 11.9735 2.68786 15.0091 2.68786 18.0293C2.68786 18.9645 2.97317 19.2557 3.88914 19.2557C10.8866 19.2557 17.884 19.2557 24.8665 19.2557C25.8125 19.2557 26.0678 18.9798 26.0678 18.0293C26.0678 14.9784 26.0678 11.9429 26.0678 8.89199C26.0678 8.76934 26.0527 8.64669 26.0527 8.47805C25.9176 8.57003 25.8275 8.63136 25.7524 8.70801C23.3048 10.7624 20.8422 12.8167 18.4096 14.8864C15.962 16.9714 12.8537 17.0174 10.3911 14.9631C8.70927 13.5679 7.0425 12.1422 5.37572 10.7317C4.5048 9.99582 3.63387 9.25993 2.68786 8.44739Z" fill="#00B77E"/>
        </svg>
        `;
        var phn = `<svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.72537 11.3493C10.2068 14.2814 12.6124 16.6469 15.0995 17.9784C15.6024 17.3268 16.1052 16.6611 16.6217 16.0095C17.0838 15.4004 17.6682 14.9896 18.4293 15.0038C18.8098 15.0038 19.2312 15.0605 19.5845 15.2163C21.229 15.9245 22.8599 16.6752 24.4908 17.4401C25.7684 18.035 26.2169 19.0265 25.9043 20.443C25.5509 21.9869 25.2112 23.5309 24.8578 25.0748C24.5452 26.463 23.689 27.1287 22.3163 27.0862C19.4486 27.0154 16.6896 26.4771 14.0394 25.3156C11.6066 24.2533 9.37773 22.8368 7.42064 20.9813C4.186 17.9217 2.06582 14.1539 0.829046 9.83371C0.244636 7.80817 0.0135909 5.69765 0 3.57296C0 2.41146 0.638773 1.53325 1.71246 1.24996C3.37055 0.825023 5.01505 0.38592 6.68673 0.0601342C7.92351 -0.180664 8.72537 0.300932 9.24182 1.51909C9.98933 3.28966 10.7096 5.06024 11.4164 6.84498C11.8513 7.94982 11.5659 8.98384 10.6689 9.74872C10.0301 10.2728 9.39132 10.8111 8.72537 11.3493ZM7.06728 2.49645C5.55869 2.86473 4.07728 3.21884 2.59587 3.58712C2.51432 3.60129 2.43277 3.78543 2.43277 3.89874C2.45996 4.59281 2.48714 5.28687 2.55509 5.98094C2.82691 8.91301 3.72391 11.6326 5.13737 14.1539C6.84982 17.2135 9.14669 19.6781 12.0551 21.5195C15.1811 23.5026 18.5788 24.5224 22.2483 24.5791C22.4522 24.5791 22.5473 24.5366 22.5881 24.3099C22.9007 22.8651 23.2133 21.4204 23.5395 19.9756C23.5802 19.7773 23.5395 19.7064 23.3764 19.6356C21.8406 18.9699 20.3048 18.29 18.7691 17.6101C18.5924 17.5251 18.4972 17.5393 18.3749 17.7092C17.9944 18.205 17.6138 18.7008 17.2197 19.1965C16.7304 19.8339 16.2276 20.4713 15.7655 21.0804C11.0358 19.0407 7.71964 15.5845 5.77614 10.6694C6.82264 9.77705 7.89632 8.87052 8.97001 7.97815C9.16028 7.82234 9.16028 7.69486 9.07873 7.48239C8.64382 6.44837 8.22251 5.41436 7.80119 4.38034C7.57014 3.74293 7.31191 3.13385 7.06728 2.49645Z" fill="#2A364F"/>
        </svg>
        `;
        var lock =  `<svg viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5768 4.87433C2.5768 4.35152 2.55532 3.84908 2.58395 3.34663C2.60543 2.99356 2.63406 2.6337 2.74143 2.29422C3.1351 1.05848 4.02267 0.3116 5.35401 0.067168C6.51357 -0.143315 7.54429 0.141856 8.39606 0.909101C8.99732 1.44549 9.34089 2.13126 9.38384 2.91888C9.41962 3.55711 9.39099 4.20214 9.39099 4.87433C9.6773 4.87433 9.92783 4.85396 10.1712 4.88112C10.4575 4.91507 10.7581 4.94902 11.0158 5.05766C11.6815 5.34283 11.9821 5.88601 11.9893 6.55141C12.0036 8.14022 12.0036 9.72224 11.9893 11.311C11.9821 12.2752 11.2305 12.9949 10.2141 12.9949C7.40113 13.0017 4.59529 13.0017 1.78228 12.9949C0.751566 12.9949 0 12.2752 0 11.2975C0 9.72223 0 8.14701 0.00715777 6.57178C0.00715777 5.58726 0.765881 4.88112 1.80376 4.87433C2.05428 4.86754 2.29764 4.87433 2.5768 4.87433ZM6.00537 11.7863C7.39398 11.7863 8.77542 11.7863 10.164 11.7863C10.5863 11.7863 10.7152 11.6573 10.7152 11.2567C10.7152 9.70866 10.7152 8.16059 10.7152 6.61931C10.7152 6.21871 10.5792 6.0897 10.1426 6.0897C7.3725 6.0897 4.6096 6.0897 1.83955 6.0897C1.41724 6.0897 1.27408 6.2255 1.27408 6.62609C1.27408 8.16737 1.27408 9.70866 1.27408 11.2499C1.27408 11.6573 1.41008 11.7863 1.83955 11.7863C3.22815 11.7863 4.61676 11.7863 6.00537 11.7863ZM3.82225 4.86075C5.29675 4.86075 6.71399 4.86075 8.13838 4.86075C8.13838 4.26325 8.16701 3.67254 8.12407 3.08862C8.10259 2.79666 8.00954 2.49112 7.86639 2.2399C7.40829 1.44549 6.53504 1.08563 5.59738 1.2418C4.73844 1.39118 4.0513 1.96152 3.93677 2.77629C3.82941 3.45527 3.85088 4.15462 3.82225 4.86075Z" fill="white"/>
        </svg>
        `;

        var sleepLetterHtml =  `<div class="ab-footer">
        <div class="sleepletter">
            <div class="ab-join">
            <div class="enve-icon">${envelope}</div>   
                <div>
                    <h3>Join our Sleepletter</h3>
                    <p>Keep up to date on our latest offers and deals direct to your inbox</p>
                </div>
            </div>
            <div class="ab-mail-box"></div>
        </div>

        <div class="phn-mail">
            <h3 class="ab-f-heading">We are Here to Help</h3>
            <div class="ab-phn">
                <div class="phn-icon">${phn}</div>
                <div>
                    <p>Call us on</p>
                    <a class='op-phone' href="tel:03301201123">0330 120 1123</a>
                </div>
            </div>
            <div class="ab-sales-mail">
                <div class="enve-icon">${envelope}</div>
                <div>
                    <p>Or Email us</p>
                    <a class='op-mail' href="mailto:sales@divanbedwarehouse.co.uk">sales@divanbedwarehouse.co.uk</a>
                </div>
            </div>
        </div>

        <div class="c-support">
            <h3>Customer Support</h3>
            <ul>                 
                <li><a class="ab-footer-link" href="/pages/contact-us">Contact Us</a></li>
                <li><a class="ab-footer-link" href="/pages/delivery">Delivery Information</a></li>
                <li><a class="ab-footer-link" href="/pages/terms-and-conditions">Terms and Conditions</a></li>
                <li><a class="ab-footer-link" href="/pages/returns-and-exchanges">Return, Exchanges and Cancellations</a></li>
            </ul>
        </div>

        <div class="about-divan">
            <h3>About Divan Bed Warehouse</h3>
            <ul>
                <li><a class="ab-footer-link" href="/pages/about-us">About Us</a></li>    
                <li><a class="ab-footer-link" href="/pages/what-our-customers-say">What Our Customers Say</a></li>
                <li><a class="ab-footer-link" href="/blogs/the-sleep-blog">The Sleep Blog</a></li>
            </ul>
        </div>

        <div class="head-office">
            <h3>Our Head Office</h3>
            <ul>                 
                <li>Divan Bed Warehouse</li>
                <li>The Springfield Estate</li>    
                <li>Manchester Street,</li>
                <li>Oldbury, B69 4HH</li>
            </ul>
        </div>

        <div class="popular-ca">
            <h3>Popular Categories</h3>
            <div class='popular-ca-slider'>                     
                <div class="swiper footer-slider">
                    <div class="swiper-wrapper">
                        <a class='p-category swiper-slide' href="/collections/divan-beds">Divan Beds</a>
                        <a class='p-category swiper-slide' href="/collections/divan-bases">Divan Bases</a>
                        <a class='p-category swiper-slide' href="/collections/mattresses">Mattresses</a>
                        <a class='p-category swiper-slide' href="/collections/headboards">Headboards</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="pay-log-container">
            <div class='checkout-securely'>
               <div>${lock}</div> <h3> Checkout Securely with</h3>
            </div>
            <div class="payment-log"></div>
            <div class="copy-right"></div>
        </div>

</div>`;
    
    document.querySelector('#footer .f_top').insertAdjacentHTML('afterend', sleepLetterHtml);
    document.querySelector('.ab-mail-box').insertAdjacentElement('afterbegin',document.querySelector('.f_mid .email_box'));

    document.querySelector('#mail').setAttribute("placeholder", "Your Email Address");
    document.querySelector('#mc-embedded-subscribe-form button').insertAdjacentHTML("afterbegin", `
    Subscribe <span class='ab-chevron-icon'>${chevron}</span>`);

    document.querySelector('.payment-log').insertAdjacentElement('afterbegin',document.querySelector('.partner .list-inline'));

    document.querySelector('.copy-right').insertAdjacentElement('afterbegin',document.querySelector('#footer .f_bot'));
 
    document.querySelector('.phn-icon').addEventListener("click", function(){
        document.querySelector('.op-phone').click();
    })
    document.querySelector('.ab-sales-mail .enve-icon').addEventListener("click", function(){
        document.querySelector('.op-mail').click();
    })

    },/// End of main JS
    forSwiperX: function(){
		  
        var injectScript = (src) => new Promise((resolve, reject) => {
            var script = document.createElement('script');
            script.src = src;
            script.addEventListener('load', resolve);
            script.addEventListener('error', (e) => reject(e));
            document.head.appendChild(script);
        });
        
        var cssFile1 = document.createElement('link');
        cssFile1.rel = 'stylesheet';
        cssFile1.href = "https://unpkg.com/swiper/swiper-bundle.min.css";  // or path for file {themes('/styles/mobile.css')}
        document.head.appendChild(cssFile1);
        injectScript('https://unpkg.com/swiper@8/swiper-bundle.min.js')
            .then(() => {

                var swiper = new Swiper(".footer-slider", {
                    slidesPerView: 2,
                    spaceBetween: 15,
                   
                  });
      
            }).catch((error) => {
                console.error(error);
            });

            
    },
};
(function pollOnload() {
    if (document.querySelector('.f_mid .email_box') && 
        document.querySelector('.partner .list-inline') && 
        document.querySelector('.partner .list-inline') &&
        document.querySelector('#footer .f_bot') ) {
        try {
            footerRedesign.init();
            const styles = ["color: white", "background: #07090F", "font-size: 20px", "border: 3px solid red", "text-shadow: 1px 1px black", "padding: 5px"].join(";");
        console.log(`%c DBW00X FT (M) - Footer Redesign - ${new Date().toLocaleDateString()}`, styles);
        } catch (error) {
            console.log('Initialization error:', error);
        }
    } else {
        setTimeout(pollOnload, 25);
    }
})();

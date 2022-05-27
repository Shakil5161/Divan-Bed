import './styles/index.scss';
/* DO NOT IMPORT ANYTHING */
var pdpRedesign = {
    init: function() {
        this.mainCss();
        this.mainJs();
        this.goals();
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
        var guaranteeTag = `<span class="guarantee"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.9042 14.3013C15.2053 12.8721 14.5159 11.4428 13.8073 10.0136C13.7307 9.86267 13.7307 9.74727 13.836 9.63186C14.0563 9.37442 14.2573 9.11698 14.4967 8.8773C14.9467 8.43343 15.0808 7.90967 14.9084 7.34152C14.7265 6.7645 14.7265 6.21411 14.9084 5.62821C15.0999 5.01568 14.9467 4.44753 14.4297 4.01254C13.9413 3.60419 13.6637 3.11594 13.5296 2.52116C13.3956 1.92638 12.9838 1.55353 12.3519 1.38486C12.2657 1.36711 12.1891 1.34048 12.1029 1.32272C11.5859 1.23395 11.155 1.00314 10.8103 0.630295C10.7528 0.568154 10.6858 0.51489 10.6284 0.461627C10.1688 0.0532716 9.63255 -0.10652 9.01017 0.0799035C8.36864 0.275204 7.73668 0.310713 7.09515 0.097658C6.40574 -0.124274 5.81208 0.0532716 5.32375 0.541522C4.90245 0.967632 4.40454 1.25171 3.78216 1.36711C3.05445 1.50027 2.60442 1.92638 2.46079 2.60105C2.34589 3.16032 2.05864 3.61306 1.59903 3.98591C1.0341 4.44753 0.871324 5.01568 1.1107 5.68147C1.3022 6.20523 1.3022 6.71124 1.12985 7.24387C0.909625 7.89192 1.0724 8.46006 1.58946 8.94831C1.81926 9.17025 2.01076 9.42769 2.20226 9.67625C2.25014 9.73839 2.25014 9.87155 2.22141 9.95145C2.02034 10.3953 1.80011 10.8214 1.58946 11.2653C1.0724 12.2862 0.574496 13.2982 0.0861651 14.3102C-0.124487 14.7363 0.0670149 15.1447 0.50747 15.2601C0.603221 15.2867 0.708547 15.3045 0.813874 15.2956C1.61818 15.2689 2.42249 15.2334 3.21723 15.2157C3.32255 15.2157 3.4566 15.2512 3.52363 15.3133C4.06941 15.7838 4.60562 16.2721 5.1514 16.7426C5.65888 17.1776 6.29084 17.0444 6.56851 16.4674C6.72172 16.1478 6.87492 15.8371 7.02812 15.5175C7.33452 14.8695 7.6505 14.2303 7.98563 13.5379C8.04308 13.6533 8.08138 13.7154 8.11011 13.7776C8.54099 14.6653 8.99102 15.5441 9.3836 16.4407C9.67085 17.0888 10.4656 17.1065 10.8773 16.6982C11.3752 16.2188 11.9019 15.7661 12.4285 15.3222C12.5147 15.2512 12.6583 15.2068 12.7828 15.2068C13.5679 15.2246 14.3531 15.2601 15.1382 15.2867C15.2723 15.2867 15.4063 15.2689 15.5308 15.2246C15.9808 15.0914 16.1149 14.7274 15.9042 14.3013ZM5.4961 14.8517C5.16097 14.5588 4.82584 14.3102 4.54817 14.0084C4.20346 13.6266 3.81088 13.5467 3.31298 13.6089C2.98742 13.6533 2.65229 13.6178 2.27887 13.6178C2.63314 12.9076 2.98742 12.2063 3.33213 11.4961C3.68641 11.5849 4.04069 11.6381 4.35666 11.7713C4.63434 11.8867 4.8833 12.0642 5.1131 12.2595C5.50568 12.5969 5.94613 12.7833 6.53979 12.7212C6.18551 13.4313 5.85038 14.1326 5.4961 14.8517ZM7.21005 10.8037C6.95152 10.8658 6.70257 10.9812 6.45361 11.0611C6.38659 11.0789 6.27169 11.0789 6.23339 11.0434C5.73548 10.5462 5.10352 10.2888 4.40454 10.1467C4.19389 10.1024 4.08856 10.0047 4.04069 9.80941C3.88748 9.0726 3.50448 8.44231 2.8821 7.95406C2.75762 7.85641 2.71932 7.75876 2.7672 7.60784C2.85337 7.29714 2.90125 6.98643 2.96827 6.67573C3.05445 6.22299 2.90125 5.79688 2.77677 5.37077C2.73847 5.22873 2.74805 5.13108 2.86295 5.04231C3.50448 4.50967 3.90663 3.84387 4.08856 3.06267C4.11729 2.94727 4.17474 2.88513 4.30879 2.86737C5.14182 2.74309 5.79293 2.33473 6.36744 1.78434C6.53979 1.61567 6.69299 1.59792 6.93237 1.63343C7.40155 1.71332 7.88988 1.78434 8.36864 1.79322C8.66546 1.8021 8.95272 1.66894 9.24955 1.62455C9.33572 1.6068 9.4602 1.63343 9.50807 1.68669C10.0922 2.29923 10.8582 2.63656 11.6816 2.85849C11.8157 2.894 11.9019 2.94727 11.9306 3.0893C12.0934 3.87938 12.5051 4.5363 13.1562 5.06894C13.2136 5.11333 13.2424 5.18434 13.2615 5.21098C13.1849 5.57494 13.137 5.89453 13.0604 6.20523C12.9455 6.68461 13.0892 7.12847 13.2232 7.57233C13.2711 7.741 13.2519 7.86528 13.1083 7.98069C12.4668 8.47782 12.1317 9.15249 11.9402 9.88931C11.9114 10.0136 11.854 10.0935 11.7104 10.129C10.9731 10.2799 10.3124 10.5729 9.7666 11.07C9.71873 11.1144 9.5751 11.0877 9.4985 11.0611C8.75164 10.7326 7.99521 10.6172 7.21005 10.8037ZM12.304 13.5911C12.0551 13.5823 11.8731 13.6178 11.6912 13.7953C11.3178 14.1504 10.9156 14.4877 10.5039 14.8428C10.1592 14.1326 9.81448 13.4402 9.46977 12.73C10.1496 12.7833 10.6284 12.4992 11.0688 12.0998C11.2699 11.9133 11.5763 11.8157 11.854 11.7091C12.1029 11.6115 12.371 11.5671 12.6679 11.4961C13.0126 12.1974 13.3668 12.9076 13.7211 13.6C13.2328 13.6 12.7636 13.6089 12.304 13.5911Z" fill="#00B77E"/>
        <path d="M11.4231 6.36503C11.4231 4.59845 9.91022 3.18696 8.00478 3.18696C6.09933 3.17808 4.55774 4.60733 4.55774 6.3739C4.55774 8.14936 6.09933 9.56973 8.00478 9.55197C9.9198 9.54309 11.4327 8.14048 11.4231 6.36503ZM7.9952 7.97182C7.03769 7.97182 6.27168 7.25275 6.27168 6.36503C6.28126 5.48618 7.03769 4.77599 7.9952 4.77599C8.95271 4.77599 9.71872 5.4773 9.71872 6.3739C9.71872 7.26163 8.95271 7.97182 7.9952 7.97182Z" fill="#00B77E"/>
        </svg> 5yrs Guarantee</span>
        `
        var fullUrl = window.location.pathname;
        let collections = fullUrl.replace('/collections/', '/');
        let pdName = collections.replace('/products/','/')

        let breadcrumbs = `<div class="breadcrumbs"><p>${collections}<span>${pdName}</span></p></div>`
        
        let checkExist = setInterval(function() {
            if ($('.title .spr-badge').length) {
                $(".title .spr-badge .spr-badge-caption").after(guaranteeTag);
               clearInterval(checkExist);
            }
         }, 100);

        
        $(".slider_1.clearfix").after(`<div class='ab-title'></div>`)
        $(".title.clearfix").appendTo(".ab-title");

        $(".ab-title").after(`<div class='ab-price'><p>From</p></div>`)
        $(".desc_blk .price").appendTo(".ab-price");

        this.accordion();

    },
    accordion: function() {

        let accordionHtml = `<div class="accordion-menu">
        <div class='size-accordion' style="display:${$(`.selector-wrapper [data-option="option1"]`) ? 'block' : 'none'};">
          <button class="accordion">1. Select ${$(`.selector-wrapper [data-option="option1"]`).siblings( 'label' ).text()}: <span class='s-select'>Non Selected</span> <p class='ac-arrow'>&#8249;</p></button>
          <div class="panel size-tab"> </div>
        </div>

        <div class='color-accordion' style="display:${$(`.mw-option-swatch.mw-validate-required-option.mw-option label`) ? 'block' : 'none'};">
          <button class="accordion">1. Select Colour: <span class='c-select'>Non Selected</span> <p class='ac-arrow'>&#8249;</p></button>
          <div class="panel color-tab"> </div>
        </div>

<button class="accordion">2. Select ${$(`.selector-wrapper [data-option="option2"]`).siblings( 'label' ).text()}: <span class='s-select'>Non Selected</span> <p class='ac-arrow'>&#8249;</p></button>
<div class="panel"> </div>
<button class="accordion">2. Select ${$(`.selector-wrapper [data-option="option2"]`).siblings( 'label' ).text()}: <span class='s-select'>Non Selected</span> <p class='ac-arrow'>&#8249;</p></button>
<div class="panel"> </div>

<button class="accordion">1. Select : <span class='s-select'>Non Selected</span> <p class='ac-arrow'>&#8249;</p></span></button>
<div class="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
    </div>`
    $(".ab-price").after(accordionHtml);

    var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
///////// loop on size option
  $(`.selector-wrapper [data-option="option1"] option`).each(function( index ) {
    var insertSize = `<input type="radio" id="ab_size_${index}" name="ab-size" value="${$( this ).val()}"><label class="size-op" for="ab_size_${index}">${$( this ).text()}</label>`

    $('.size-tab').append(insertSize);
  })
///////// click function on selected size
  $(".size-op").click(function(){
    console.log($( this ),"click");
    $('.size-op').removeClass("label-select")
    $( this ).addClass("label-select");
    $('.s-select').html($( this ).text() +" " + '&#10003;').addClass('d-select')
    $(`.selector-wrapper [data-option="option1"]`).val($( this ).text());
  });


  //////////////// Color Tab Functionality 
  let checkColor = setInterval(function() {
    if ($(`.mw-option-swatch.mw-validate-required-option.mw-option`).length) {
      $(`.mw-option-swatch.mw-validate-required-option.mw-option`).appendTo(".panel.color-tab");

      $(`.panel.color-tab .swatch-value-container`).click(function(){
        let colorName = $(`.mw-option-swatch.mw-validate-required-option.mw-option input[type="hidden"]`).val();

        $(".c-select").text( colorName == "" ? 'Non Selected' : colorName);
        $(".c-select").addClass( colorName !== "" && 'd-select');
        $(".c-select").removeClass( colorName == "" && 'd-select');
    
        console.log("colorName", colorName)
    
      })
      clearInterval(checkColor);
    }
  }, 100);

 

    },

    goals: function() {}
};
(function pollOnload() {
    if (document.querySelector('body') && window.jQuery !== undefined) {
        try {
            pdpRedesign.init();
            const styles = ["color: white", "background: #07090F", "font-size: 20px", "border: 3px solid red", "text-shadow: 1px 1px black", "padding: 5px"].join(";");
        console.log(`%cThis is a EchoLogyx variation - ${new Date().toLocaleDateString()}`, styles);
        } catch (error) {
            console.log('Initialization error:', error);
        }
    } else {
        setTimeout(pollOnload, 25);
    }
})();
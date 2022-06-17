import './styles/index.scss';

var pdpRedesign = {
  init: function() {
      this.mainCss();
      this.mainJs();
      
      
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
      </svg> Quality Guarantee</span>
      `;

     var truckSvg =`<svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M2.10438 3.18694C2.10438 2.74308 2.09562 2.31697 2.10438 1.89974C2.11315 1.01201 2.64802 0.29295 3.47223 0.0710182C3.66514 0.0177546 3.86681 0 4.05971 0C6.60251 0 9.15407 0 11.6969 0C12.863 0 13.6434 0.798955 13.6434 1.97076C13.6434 2.37023 13.6434 2.76083 13.6434 3.18694C14.0029 3.18694 14.3449 3.19582 14.6868 3.18694C15.4409 3.16919 16.0722 3.43551 16.6071 3.9859C17.4489 4.86475 18.3081 5.72584 19.1762 6.58694C19.7111 7.1107 19.9566 7.74099 19.9478 8.48668C19.939 9.72062 19.9478 10.9546 19.9478 12.224C20.1144 12.224 20.2722 12.224 20.4301 12.224C20.7983 12.2329 20.9912 12.4282 21 12.801C21 12.9608 21.0088 13.1295 21 13.2893C20.9825 13.6177 20.7896 13.8042 20.4651 13.8042C20.018 13.8042 19.5795 13.8042 19.1324 13.8042C19.0622 13.8042 18.9921 13.8042 18.9219 13.8042C18.8956 15.766 17.256 17.0533 15.6426 17C14.1958 16.9467 12.6526 15.7749 12.6 13.8219C11.2058 13.8219 9.81169 13.8219 8.47892 13.8219C8.33862 14.3102 8.25971 14.7984 8.06681 15.2334C7.51441 16.4318 6.15532 17.1331 4.90146 16.9822C3.51608 16.8136 2.38497 15.7128 2.16576 14.4078C2.13069 14.2125 2.11315 14.0083 2.11315 13.813C2.10438 12.4459 2.11315 11.0788 2.11315 9.72062C2.11315 9.67623 2.12192 9.63185 2.12192 9.57858C2.63925 9.57858 3.14781 9.57858 3.6739 9.57858C3.6739 10.0668 3.6739 10.5462 3.6739 11.0256C4.0071 10.9102 4.30522 10.7859 4.62088 10.706C5.81336 10.4308 7.11983 10.9457 7.80376 11.9754C7.92651 12.1619 8.05804 12.224 8.27725 12.224C9.46096 12.2151 10.6359 12.2151 11.8196 12.2151C11.8985 12.2151 11.9775 12.2151 12.0827 12.2151C12.0827 12.1175 12.0827 12.0376 12.0827 11.9666C12.0827 8.64647 12.0827 5.32637 12.0827 2.00627C12.0827 1.63342 12.0388 1.58016 11.6706 1.58016C9.13654 1.58016 6.61127 1.58016 4.07724 1.58016C3.71775 1.58016 3.6739 1.63342 3.66514 1.98851C3.66514 2.37911 3.66514 2.76971 3.66514 3.18694C3.77036 3.18694 3.84927 3.18694 3.93695 3.18694C5.2785 3.18694 6.62004 3.18694 7.96159 3.18694C8.33862 3.18694 8.39123 3.24021 8.39123 3.61305C8.39123 4.23446 8.39123 4.23446 7.78622 4.23446C5.33111 4.23446 2.86722 4.23446 0.412109 4.23446C0.0438413 4.24334 0 4.19895 0 3.81723C0 3.18694 0 3.18694 0.622547 3.18694C1.1048 3.18694 1.58706 3.18694 2.10438 3.18694ZM13.6522 9.02819C13.6522 9.83602 13.6522 10.6172 13.6522 11.3984C15.3971 10.2089 16.9754 10.3332 18.3608 11.9843C18.3608 10.9989 18.3608 10.0136 18.3608 9.02819C16.7912 9.02819 15.2305 9.02819 13.6522 9.02819ZM3.66514 13.8042C3.66514 14.6919 4.3666 15.411 5.24342 15.411C6.11148 15.411 6.81294 14.7097 6.82171 13.8308C6.83048 12.9431 6.12902 12.224 5.25219 12.2151C4.38413 12.2063 3.6739 12.9164 3.66514 13.8042ZM17.3261 13.813C17.3261 12.9253 16.6246 12.2063 15.7478 12.2063C14.8798 12.2063 14.1783 12.9076 14.1695 13.7864C14.1608 14.6741 14.8622 15.3932 15.739 15.4021C16.6159 15.4198 17.3261 14.7008 17.3261 13.813ZM13.6522 7.4214C15.0288 7.4214 16.3879 7.4214 17.7557 7.4214C17.7294 7.3859 17.7207 7.36814 17.7119 7.35039C16.9403 6.56919 16.1687 5.78799 15.3883 5.00679C15.2919 4.90914 15.1603 4.81148 15.0376 4.80261C14.5816 4.77598 14.1169 4.79373 13.6522 4.79373C13.6522 5.67258 13.6522 6.54255 13.6522 7.4214Z" fill="#333333"/>
     <path d="M5.25214 6.36499C3.98074 6.36499 2.70057 6.36499 1.42917 6.36499C1.11352 6.36499 1.06091 6.30285 1.06091 5.99214C1.05214 5.30859 1.05214 5.30859 1.72729 5.30859C4.1561 5.30859 6.57614 5.30859 9.00495 5.30859C9.40829 5.30859 9.45214 5.35298 9.45214 5.76134C9.45214 6.35611 9.45214 6.35611 8.86466 6.35611C7.65464 6.36499 6.45339 6.36499 5.25214 6.36499Z" fill="#333333"/>
     <path d="M4.2 8.49561C2.9286 8.49561 1.66597 8.49561 0.394572 8.49561C0.0526096 8.49561 0 8.44234 0 8.10501C0 7.43921 0 7.43921 0.65762 7.43921C3.08643 7.43921 5.50647 7.43921 7.93528 7.43921C8.34739 7.43921 8.39123 7.4836 8.39123 7.89195C8.39123 8.49561 8.39123 8.49561 7.80376 8.49561C6.6025 8.49561 5.40125 8.49561 4.2 8.49561Z" fill="#333333"/>
     `;

     var clearpaySvg =`<svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
     <rect width="27.1396" height="29" fill="url(#pattern0)"/>
     <defs>
     <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
     <use xlink:href="#image0_57_1781" transform="translate(-0.0342742) scale(0.0047491 0.00444444)"/>
     </pattern>
     <image id="image0_57_1781" width="225" height="225" xlink:href="data:image/png;base64,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"/>
     </defs>
     </svg>
     `;

     var klarnaSvg =`<svg width="28" height="29" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><style>.cls-1{fill:#f4abc5;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect class="cls-1" width="100" height="100"/><g id="kERap9"><path d="M68.13,79.64H51.73a1.21,1.21,0,0,1-1.12-.57Q40.74,65.6,30.86,52.13c-.49-.67-.49-.66.19-1.19,2.53-2,5.2-3.8,7.56-6A33.06,33.06,0,0,0,49.26,24.5c.19-1.37.25-2.77.33-4.15,0-.43.11-.63.58-.63q6.22,0,12.44,0c.56,0,.57.3.56.7a49,49,0,0,1-3.45,17.34A47.07,47.07,0,0,1,49.56,53.29c-.39.39-.29.61,0,1q9,12.29,18,24.57Z"/><path d="M28.92,49.63q0,14.58,0,29.17c0,.65-.15.86-.83.86q-6.15,0-12.3,0c-.57,0-.8-.1-.8-.74q0-29.23,0-58.48c0-.6.21-.71.76-.71q6.18,0,12.37,0c.62,0,.8.17.8.8Q28.9,35.07,28.92,49.63Z"/><path d="M77.44,80.28A7.56,7.56,0,1,1,85,72.71,7.52,7.52,0,0,1,77.44,80.28Z"/></g></g></g></svg>`;

     var chevron = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.53 100"><defs></defs></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="tEYAXC.tif"><path fill='#333333' d="M42.45,50a17.62,17.62,0,0,1-1.84-1.36L2,10.11c-.36-.36-.73-.7-1-1.08C-.28,7.61-.34,6.85.91,5.51,2.45,3.86,4.09,2.29,5.71.72A2.24,2.24,0,0,1,8.85.57,11.73,11.73,0,0,1,10.2,1.76Q33.08,24.67,55.94,47.59c2.11,2.11,2.11,2.71,0,4.8Q33.1,75.31,10.22,98.22a12.76,12.76,0,0,1-1.35,1.19,2.22,2.22,0,0,1-3.14-.12c-1.66-1.6-3.3-3.23-4.93-4.87a2.1,2.1,0,0,1-.06-3.2c.4-.45.82-.88,1.25-1.31l38.6-38.49A22.38,22.38,0,0,1,42.45,50Z"/></g></g></g></svg>`;
      
     this.addBasketModal(chevron);

      let checkExist = setInterval(function() {
          if ($('.title .spr-badge').length) {
              $(".title .spr-badge .spr-badge-caption").after(guaranteeTag);
             clearInterval(checkExist);
          }
       }, 100);

      
      $(".slider_1.clearfix").after(`<div class='ab-title'></div>`);
      $(".title.clearfix").appendTo(".ab-title");

      var pdPrice = $('#productPrice').text();
      var comPrice = $('#comparePrice').text();

      let abPrice= `<div class='ab-price'><p>From</p>
      
      </div>
      `;

      $(".ab-title").after(abPrice);
      let waitForPrice = setInterval(function() {
        if ($(".desc_blk .price").length) {
         
          $(".desc_blk .price").appendTo(".ab-price");
          clearInterval(waitForPrice);
        }
      }, 100);
      

// <div class="">
//         <span id="abProductPrice" itemprop="price">${pdPrice}</span>
//         <span id="abCcomparePrice">${comPrice}</span>
//       </div>

      this.accordion( chevron);
      this.paymentOption(truckSvg, clearpaySvg, klarnaSvg);

  },
  accordion: function( chevron) {
    

      let accordionHtml = `<div class="accordion-menu"> </div>`;
      $(".ab-price").after(accordionHtml);

  
  var sizeInsert = `<div class='size-accordion common-accordian'>
        <button class="accordion active enable"><span class='serial'></span> Select ${$(`.selector-wrapper [data-option="option1"]`).siblings( 'label' ).text()}: <span class='s-select'>Non Selected</span> <span class='ac-arrow'>${chevron}</span> </button>
        <div class="panel size-tab"> </div>
      </div>`;

 $(`.selector-wrapper [data-option="option1"]`).siblings( 'label' ).text() == 'Size' && $('.accordion-menu').prepend(sizeInsert);

 var otherInsert =` <div class='other-accordion common-accordian'>
 <button class="accordion"><span class='serial'></span> ${$(`.selector-wrapper [data-option="option2"]`).siblings( 'label' ).text()}: <span class='o-select'>Non Selected</span> <span class='ac-arrow'>${chevron}</span></button>
 <div class="panel other-tab"> </div>
</div>`;

$(`.selector-wrapper [data-option="option2"]`).length > 0 && $('.accordion-menu').append(otherInsert);

var other2Insert = `<div class='other2-accordion common-accordian'>
<button class="accordion"><span class='serial'></span>  ${$(`.selector-wrapper [data-option="option3"]`).siblings( 'label' ).text()}: <span class='o2-select'>Non Selected</span> <span class='ac-arrow'>${chevron}</span></button>
<div class="panel other2-tab"> </div>
</div>`;

$(`.selector-wrapper [data-option="option3"]`).length > 0 && $('.accordion-menu').append(other2Insert);

var addToCart = ` <div class="ab-add-to-cart common-accordian">
    <button class='ab-cart-btn' type="button"><span>Add to Basket</span> <span class='ac-arrow'>${chevron}</span></button>
    </div>
    `;
  $('.accordion-menu').append(addToCart);

  let waitForAcc = setInterval(function() {
    if ($(`.accordion-menu .accordion`).length) {
      var acc = document.querySelectorAll(".accordion-menu .accordion");
      var i;
      
      for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        // var panel = this.nextElementSibling;
        // if (panel.style.maxHeight) {
        //   panel.style.maxHeight = null;
        // } else {
        //   panel.style.maxHeight = panel.scrollHeight + "px";
        // } 
      });
      }
      clearInterval(waitForAcc);
    }
  }, 100);


///////// loop on size option
$(`.selector-wrapper [data-option="option1"] option`).each(function( index ) {
  var insertSize = `<input type="radio" id="ab_size_${index}" name="ab-size" value="${$( this ).val()}"><label class="size-op set-op-value" for="ab_size_${index}">${$( this ).text()}</label>`;

  $('.size-tab').append(insertSize);
});
///////// loop on others option
$(`.selector-wrapper [data-option="option2"] option`).each(function( index ) {
  var otherOption = `<input type="radio" id="ab_other_${index}" name="ab-other" value="${$( this ).val()}"><label class="other-op set-op-value" for="ab_other_${index}">${$( this ).text()}</label>`;

  $('.other-tab').append(otherOption);
});
///////// loop on others3 option
$(`.selector-wrapper [data-option="option3"] option`).each(function( index ) {
  var otherOption = `<input type="radio" id="ab_other2_${index}" name="ab-other2" value="${$( this ).val()}"><label class="other2-op set-op-value" for="ab_other2_${index}">${$( this ).text()}</label>`;

  $('.other2-tab').append(otherOption);
});
///////// click function on selected size
// $(".set-op-value").click(function(e){
//   console.log(e)
//   console.log(e.currentTarget.parentNode,"click",e.target.classList[0]);
//   let anotherClass = e.target.classList[0];
//   $(`.${anotherClass}`).removeClass("label-select");
//   let allChild = e.currentTarget.parentNode.childNodes
//   // console.log(allChild.children(),'hi')
//   // allChild.each(function( elem ) {
//   //   console.log(elem,'elem')
//   // })
//   $( this ).addClass("label-select");
//   $('.s-select').html($( this ).text() +" " + '&#10003;').addClass('d-select')
//   $(`.selector-wrapper [data-option="option1"]`).val($( this ).text());
// });


///////// click function on selected size
$(".size-op").click(function(e){
  $('.size-op').removeClass("label-select");
  $( this ).addClass("label-select");
  $('.s-select').html($( this ).text() +" " + `<i class="fa fa-check"></i>`).addClass('d-select');
  // $(`.selector-wrapper [data-option="option1"]`).val($( this ).text()).change();

  // $(`.selector-wrapper [data-option="option1"]`).val($( this ).text());
  // $('.selector-wrapper [data-option="option1"]').change();
  // $(`.selector-wrapper [data-option="option1"]`).trigger("change");
  // document.querySelector(`.selector-wrapper [data-option="option1"]`).onchange();
  document.querySelector('.selector-wrapper [data-option="option1"]').value = $(this).text();
  document.querySelector('.selector-wrapper [data-option="option1"]').dispatchEvent(new Event('change', {bubbles: true}));
});

///////// click function on selected other option
$(".other-op").click(function(e){
  console.log("click other-op");
  $('.other-op').removeClass("label-select");
  $( this ).addClass("label-select");
  $('.o-select').html($( this ).text() +" " + '<i class="fa fa-check"></i>').addClass('d-select');
  // $(`.selector-wrapper [data-option="option2"]`).val($( this ).text()).change();
  document.querySelector('.selector-wrapper [data-option="option2"]').value = $(this).text();
  document.querySelector('.selector-wrapper [data-option="option2"]').dispatchEvent(new Event('change', {bubbles: true}));
});
///////// click function on selected other2 option
$(".other2-op").click(function(e){
  $('.other2-op').removeClass("label-select");
  $( this ).addClass("label-select");
  $('.o2-select').html($( this ).text() +" " + '<i class="fa fa-check"></i>').addClass('d-select');
  // $(`.selector-wrapper [data-option="option3"]`).val($( this ).text()).change();
  document.querySelector('.selector-wrapper [data-option="option3"]').value = $(this).text();
  document.querySelector('.selector-wrapper [data-option="option3"]').dispatchEvent(new Event('change', {bubbles: true}));
});


//////////////// Color Tab Functionality 
let checkColor = setInterval(function() {
  if ($(`.mw-option-swatch.mw-validate-required-option.mw-option`).length) {

    var colorAccordion = `<div class='color-accordion common-accordian'>
    <button id='color-acc' class="accordion"><span class='serial'></span>  Select Colour: <span class='c-select'>Non Selected</span> <span class='ac-arrow'>${chevron}</span></button>
    <div class="panel color-tab"> </div>
  </div>`;

  $('.size-accordion').after(colorAccordion);      

    $(`.mw-option-swatch.mw-validate-required-option.mw-option`).appendTo(".panel.color-tab");
    $(`.panel.color-tab .swatch-value-container`).click(function(){
      let colorName = $(`.mw-option-swatch.mw-validate-required-option.mw-option input[type="hidden"]`).val();
      $(".c-select").html( colorName == "" ? 'Non Selected' : colorName +" " + '<i class="fa fa-check"></i>');
      $(".c-select").addClass( colorName !== "" && 'd-select');
      $(".c-select").removeClass( colorName == "" && 'd-select');
    });

    $(`.panel.color-tab .swatch-value-container`).each(function( index, elem ) {
      $(this).addClass('set-op-value');
      $(this).attr('tabindex',index);

      // $(`.panel.color-tab .swatch-value-container [data-value-text=]`).addClass('set-op-value')
      // console.log(elem, 'elem')
      let singleColor =$(this).data('value-text');
      $(this).append(`<span>${singleColor}</span>`);
    });
    
    $(".swatch-value-container.set-op-value").on("click", function(){
      console.log("color clciked");
      $(this).closest(".common-accordian").find('.accordion ').removeClass("active");
      $(this).closest(".common-accordian").next('.common-accordian').find('.accordion ').addClass("active enable");
      
      $(this).closest(".common-accordian").next('.common-accordian').find('.ab-cart-btn').addClass("ab-cart-btn-active");

      /////price update
      let curPrice = $('.ab-price .price #productPrice').text().replace('£', '');
      let comPrice = $('.ab-price .price #comparePrice').text().replace('£', '');
      // let youSave = comPrice - curPrice;

      $(".con-price-div .pay-price").text(`£${curPrice}`);
      $(".con-price-div .com-price").text(`£${comPrice}`);
      $(".con-price-div .you-save").text(`You save £${curPrice}`);

      $('html, body').animate({
        scrollTop: $(".size-accordion").offset().top
    }, 20);
        
    });


   if($(`.mw-option-select.mw-validate-required-option`).length > 0){
    var hbAccordion = `<div class='hb-btn-accordion common-accordian'>
    <button id='hb_btn' class="accordion"><span class='serial'></span>  ${$(`.mw-option-select.mw-validate-required-option label`).text()}: <span class='hb-select'>Non Selected</span> <span class='ac-arrow'>${chevron}</span></button>
    <div class="panel hb-tab"> </div>
  </div>`;

  $('.color-accordion').after(hbAccordion); 

    var hbBtnLoop = $(`.mw-option-select.mw-validate-required-option select option`);
    var removeBtn = hbBtnLoop.splice(0, 1);
        hbBtnLoop.each(function( index ) {
          var hbOption = `<input type="radio" id="ab_hb_${index}" name="ab-hb" value="${$( this ).val()}"><label class="hb-op set-op-value" for="ab_hb_${index}">${$( this ).text()}</label>`;
          $('.hb-tab').append(hbOption);
        });
        
    ///////// click function on selected HB
    $(".hb-op").click(function(e){
      $('.hb-op').removeClass("label-select");
      $( this ).addClass("label-select");
      $('.hb-select').html($( this ).text() +" " + '<i class="fa fa-check"></i>').addClass('d-select');
      // $(`.mw-option-select.mw-validate-required-option select`).val($( this ).text()).change();
      document.querySelector('.mw-option-select.mw-validate-required-option select').value = $(this).text();
      document.querySelector('.mw-option-select.mw-validate-required-option select').dispatchEvent(new Event('change', {bubbles: true}));
    });

    $(".set-op-value").on("click", function(){
      console.log("clciked hb");
      $(this).closest(".common-accordian").find('.accordion ').removeClass("active");
      $(this).closest(".common-accordian").next('.common-accordian').find('.accordion ').addClass("active enable");
      $(this).closest(".common-accordian").next('.common-accordian').find('.ab-cart-btn').addClass("ab-cart-btn-active");
      /////price update
      let curPrice = $('.ab-price .price #productPrice').text().replace('£', '');
      let comPrice = $('.ab-price .price #comparePrice').text().replace('£', '');
      // let youSave = comPrice - curPrice;

      $(".con-price-div .pay-price").text(`£${curPrice}`);
      $(".con-price-div .com-price").text(`£${comPrice}`);
      $(".con-price-div .you-save").text(`You save £${curPrice}`);
    });

   }

    clearInterval(checkColor);
  }
}, 100);

$(".set-op-value").on("click", function(){
  console.log("clciked common on click");
  $(this).closest(".common-accordian").find('.accordion ').removeClass("active");
  $(this).closest(".common-accordian").next('.common-accordian').find('.accordion ').addClass("active enable");
  $(this).closest(".common-accordian").next('.common-accordian').find('.ab-cart-btn').addClass("ab-cart-btn-active");
    
  /////price update
  let curPrice = $('.ab-price .price #productPrice').text().replace('£', '');
  let comPrice = $('.ab-price .price #comparePrice').text().replace('£', '');
  // let youSave = comPrice - curPrice;

  $(".con-price-div .pay-price").text(`£${curPrice}`);
  $(".con-price-div .com-price").text(`£${comPrice}`);
  $(".con-price-div .you-save").text(`You save £ ${curPrice}`);


});

this.waitSomeElem();
//////// add to basket btn 



    let waitForMuOb = setInterval(function() {
      if ($('form .desc_blk .variations .selector-wrapper').length > 0) {

      let curPrice = $('.ab-price .price #productPrice').text().replace('£', '');
let comPrice = $('.ab-price .price #comparePrice').text().replace('£', '');
// let youSave = comPrice - curPrice;


let totalPrice = `<div class="con-price-div">
                  <p>Your Configuration</p>
                  <div><span class="pay-price">£${curPrice}</span>
                  <s class='com-price'>£${comPrice}</s></div>
                  <span class="you-save">You save £${curPrice}</span>
                </div>`;

    $('.ab-add-to-cart').append(totalPrice);

        var elementToObserve = document.querySelector('form .desc_blk .variations');
    var observer = new MutationObserver(function() {
              console.log("mutationnnnnnnnnnnnnnnnnnn");
                  ///////// loop on others option

    if($(`.other-accordion .d-select`).text()){
      var prevSelect = $(`.other-accordion .d-select`).text();
      $('.other-tab').empty();
      $(`.selector-wrapper [data-option="option2"] option`).each(function( index ) {

        var otherOption = `<input type="radio" id="ab_other_${index}" name="ab-other" value="${$( this ).val()}"><label class="other-op set-op-value ${prevSelect.trim() == $( this ).text() ? 'label-select':''}" for="ab_other_${index}">${$( this ).text()}</label>`;
        $('.other-tab').append(otherOption);

      });
//// remove storage op select when option don't have
      $('.other-tab .other-op').each(function (){

        if(!$('.other-tab .other-op').hasClass('label-select')){
          var defaultOP = $(`.other-tab [for="ab_other_0"]`);
          $('.other-accordion .o-select').text(defaultOP.text());
          defaultOP.addClass('label-select');

        }
      })

    }else{
        $('.other-tab').empty();
      $(`.selector-wrapper [data-option="option2"] option`).each(function( index ) {
        var otherOption = `<input type="radio" id="ab_other_${index}" name="ab-other" value="${$( this ).val()}"><label class="other-op set-op-value" for="ab_other_${index}">${$( this ).text()}</label>`;

        $('.other-tab').append(otherOption);
      });
    }

    if($(`.other2-accordion  .d-select`).text()){
      var prevSelectO2 = $(`.other2-accordion .d-select`).text();
      $('.other2-tab').empty();
      $(`.selector-wrapper [data-option="option3"] option`).each(function( index ) {

        var otherOption = `<input type="radio" id="ab_other2_${index}" name="ab-other2" value="${$( this ).val()}"><label class="other2-op set-op-value ${prevSelectO2.trim() == $( this ).text() ? 'label-select':''}" for="ab_other2_${index}">${$( this ).text()}</label>`;

        $('.other2-tab').append(otherOption);

      });
//// remove storage op select when option don't have
      $('.other2-tab .other2-op').each(function (){

        if(!$('.other2-tab .other2-op').hasClass('label-select')){
          var defaultOP2 = $(`.other2-tab [for="ab_other2_0"]`);
          $('.other2-accordion .o2-select').text(defaultOP2.text());
          defaultOP2.addClass('label-select');

        }
      })

    }else{
        ///////// loop on others3 option
        $('.other2-tab').empty();
        $(`.selector-wrapper [data-option="option3"] option`).each(function( index ) {
          var otherOption = `<input type="radio" id="ab_other2_${index}" name="ab-other2" value="${$( this ).val()}"><label class="other2-op set-op-value" for="ab_other2_${index}">${$( this ).text()}</label>`;

          $('.other2-tab').append(otherOption);
        });
    }


    ///////// click function on selected other option
    $(".other-op").click(function(e){
console.log('other op')
      $(".other-accordion .accordion").removeClass('active')
      $(".other2-accordion .accordion").addClass('active enable')
      
      $('.other-op').removeClass("label-select");
      $( this ).addClass("label-select");
      $('.o-select').html($( this ).text() +" " + '<i class="fa fa-check"></i>').addClass('d-select');
      
      // $(`.selector-wrapper [data-option="option2"]`).val($( this ).text()).change();
      document.querySelector('.selector-wrapper [data-option="option2"]').value = $(this).text();
      document.querySelector('.selector-wrapper [data-option="option2"]').dispatchEvent(new Event('change', {bubbles: true}));

      let curPrice = $('.ab-price .price #productPrice').text().replace('£', '');
      let comPrice = $('.ab-price .price #comparePrice').text().replace('£', '');
      // let youSave = comPrice - curPrice;
  // console.log(curPrice, comPrice, youSave)
      $(".con-price-div .pay-price").text(`£${curPrice}`);
      $(".con-price-div .com-price").text(`£${comPrice}`);
      $(".con-price-div .you-save").text(`You save £${curPrice}`);



    });
    ///////// click function on selected other2 option
    $(".other2-op").click(function(e){

      $('.other2-op').removeClass("label-select")
      $( this ).addClass("label-select");
      $('.o2-select').html($( this ).text() +" " + '<i class="fa fa-check"></i>').addClass('d-select')
      // $(`.selector-wrapper [data-option="option3"]`).val($( this ).text()).change();
      document.querySelector('.selector-wrapper [data-option="option3"]').value = $(this).text();
      document.querySelector('.selector-wrapper [data-option="option3"]').dispatchEvent(new Event('change', {bubbles: true}));

      let curPrice = $('.ab-price .price #productPrice').text().replace('£', '');
      let comPrice = $('.ab-price .price #comparePrice').text().replace('£', '');
      // let youSave = comPrice - curPrice;
      $(".con-price-div .pay-price").text(`£${curPrice}`);
      $(".con-price-div .com-price").text(`£${comPrice}`);
      $(".con-price-div .you-save").text(`You save £${curPrice}`);



    });

    var acc = document.querySelectorAll(".accordion");
      var i;
    
    // for (i = 0; i < acc.length; i++) {
    // acc[i].addEventListener("click", function() {
    //   console.log('acc click');
    //   this.classList.toggle("active");
    //   // var panel = this.nextElementSibling;
    //   // if (panel.style.maxHeight) {
    //   //   panel.style.maxHeight = null;
    //   // } else {
    //   //   panel.style.maxHeight = panel.scrollHeight + "px";
    //   // } 
    // });
    // }

    $(".set-op-value").on("click", function(){

      $(this).closest(".common-accordian").find('.accordion').removeClass("active");
      $(this).closest(".common-accordian").next('.common-accordian').find('.accordion ').addClass("active enable");
      $(this).closest(".common-accordian").next('.common-accordian').find('.ab-cart-btn').addClass("ab-cart-btn-active");
      
      console.log('click from mutation');
      /////price update
      let curPrice = $('.ab-price .price #productPrice').text().replace('£', '');
      let comPrice = $('.ab-price .price #comparePrice').text().replace('£', '');
      // let youSave = comPrice - curPrice;
  // console.log(curPrice, comPrice, youSave)
      $(".con-price-div .pay-price").text(`£${curPrice}`);
      $(".con-price-div .com-price").text(`£${comPrice}`);
      $(".con-price-div .you-save").text(`You save £${curPrice}`);

    });
              
          });
        observer.observe(elementToObserve, {subtree: true, childList: true});
  
        clearInterval(waitForMuOb);
      }
    }, 100);
      
    /// only btn don't have other option
    if($('.accordion-menu .common-accordian').length === 1){
      $('.accordion-menu .ab-cart-btn').addClass('ab-cart-btn-active');
      $('.con-price-div').addClass('com-d-none');
    }
     

    $('.ab-add-to-cart .ab-cart-btn').on('click', function(){
      $('#addToCart').click();
      let pdName = $(`.ab-title .title [itemprop="name"]`).text();
      $('.order-pd-name').text(pdName);
      $('#addBasketModalBtn').click();
// console.log($(`#candyrack-frame .Upsell-List`).length, '#candyrack-frame .Upsell-List')
    });

    // let lastCommonAcc = $('.common-accordian')[$('.common-accordian').length - 2];
   // lastCommonAcc.classList.add('last-acc');

    

    this.description( chevron );
  },/// end acc function
waitSomeElem: function() {
  let checkMyColor = setInterval(function() {
    if ($(`.color-accordion`).length) {
      $("#color-acc")[0].addEventListener("click", function() {
          this.classList.toggle("active");
          // var panel = this.nextElementSibling;
          // if (panel.style.maxHeight) {
          //   panel.style.maxHeight = null;
          // } else {
          //   panel.style.maxHeight = panel.scrollHeight + "px";
          // } 
        });

      clearInterval(checkMyColor);
    }
  }, 100);

  let checkHB = setInterval(function() {
    if ($(`.hb-btn-accordion`).length) {
      $("#hb_btn")[0].addEventListener("click", function() {
          this.classList.toggle("active");
          // var panel = this.nextElementSibling;
          // if (panel.style.maxHeight) {
          //   panel.style.maxHeight = null;
          // } else {
          //   panel.style.maxHeight = panel.scrollHeight + "px";
          // } 
        });

      clearInterval(checkHB);
    }
  }, 100);


  // $('.accordion-menu .common-accordian').each(function(index){
  //   console.log('index', index+1)
  // })

},

paymentOption: function(truckSvg, clearpaySvg, klarnaSvg){
  var paymentHtml = `<div>
  <div class="free-man">
  ${truckSvg}
      <p><span>Free</span> 2-Man Delivery Within 5-10 Working Days</p>
  </div>
  <div class="ab-clearpay empty-clearpay">
  <div class='pay-logo'>${clearpaySvg}</div>
      <div class='ab-clearpay-contant'> </div>
  </div>
  <div class="ab-klarna">
    <div class='pay-logo'> ${klarnaSvg}</div>
      <p>Spread your payments into 3 with Klarna</p>
  </div>
</div>`;

$('.accordion-menu').append(paymentHtml);
//////append clearPay
let checkClearpay = setInterval(function() {
if ($("p.clearpay-paragraph").length > 0 && $(".ab-clearpay-contant").length > 0 ) {
  $('p.clearpay-paragraph').appendTo(".ab-clearpay-contant");

  $('.clearpay-link').before(`<span>Clearpay.</span>`);
    var Make = $('.clearpay-text1').text().replace('or make', 'Make');
    $('.clearpay-text1').text(Make);

  $('ab-clearpay').removeClass('empty-clearpay')
  clearInterval(checkClearpay);
}
}, 100);




//////////price calculate for related product price
let checkRePdPriceAndInsert = setInterval(function() {
if ($(".owl-stage .owl-item").length > 0) {
  
  $('.owl-stage .owl-item').each(function(index){
    let price = $('.main_box .desc .price').eq(index).text().split(' ')[1].replace('£', '');
    let comPrice = $('.main_box .desc .compare-price').eq(index).text().replace('£', '');
    let save = comPrice - price;
  
    let priceHtml = `<div class="re-pd-price">
        <p>From</p>
        <div class="">
            <span class="re-rg-price">£${price}</span> <s class="re-main-price">£${comPrice}</s>
        </div>
        <p class="save-price">Savings from £${save}</p>
        <div class='price-footer'>
          <p><span><i class="fa fa-check"></i> </span> In Stock</p>
        </div>
    </div>`;
    $(`.main_box .desc`).eq(index).append(priceHtml);
  });

  clearInterval(checkRePdPriceAndInsert);
}
}, 100);


},////////// End paymentOption Function

description: function( chevron ){

  // var reStar = $('.review_row .spr-badge').html();
  var decAcc = `<div class='dec-main-acc rte'>

  <div id="abReview" class='review-acc'>

    <button class="dec-accordion">Reviews <span class='star'></span><span class='ac-arrow'>${chevron}</span></button>
    <div class="dec-panel ab-review-panal">

    </div>
  </div>
    
  </div>`;

  $('.accordion-menu').after(decAcc);
  let checkRePanal = setInterval(function() {
    if ($(".ab-review-panal").length > 0) {
      $("#shopify-product-reviews").appendTo(".ab-review-panal");
      clearInterval(checkRePanal);
    }
  }, 25);
  


  //////// wait and append read more review text
  let checkControlREview = setInterval(function() {
    if ($(".ab-review-panal .spr-pagination").length > 0) {
      
    $('.ab-review-panal').append(`<p id='ab_read_more'>Read more Reviews</p>`);
    $('#ab_read_more').on('click', function(){
        console.log(" add more review click");
        $('.spr-pagination-next a').click();
      });

      clearInterval(checkControlREview);
    }
  }, 100);
  
  
  /////////wait for append review star
  let checkReviewStar = setInterval(function() {
    if ($('.review_row .spr-badge').length > 0) {
      $('.review_row .spr-badge').appendTo('.review-acc .dec-accordion .star');
      $(`.ab-title .spr-badge-caption`).wrap( `<a href="#abReview"></a>` )
      clearInterval(checkReviewStar);
      
      setTimeout(() => {
        $(".ab-review-panal .spr-reviews").html() == '' && $('.ab-review-panal').html(`<p> No Reviews</p>`)
      }, 3000);
    }
  }, 100);



  // $('.review_row .spr-badge').appendTo(".review-acc .dec-accordion");
  // $('#ab_read_more').on('click', function(){
  //   console.log(" add more review click")
  //   $('.spr-pagination-next').click()
  // })
//     $(".dec-main-acc .dec-panel table ~ p strong").each(function(){
//       console.log("element",  $(this));
//       this.innerText = this.innerText.toLowerCase().replace(/\b(\w)/g, x => x.toUpperCase());

// this.innerText = this.innerText.replace("Please Note:", "");
//     })

  
  $(`.form-add-to-cart .rte h1, .form-add-to-cart .rte h2, .form-add-to-cart .rte h3, .form-add-to-cart .rte h2 strong`).each(function( index ) {
    
    if($(this).text() == '' || $(this).text().trim() == ''){
      $(this).remove()
    } else{
      this.innerText = this.innerText.toLowerCase().replace(/\b(\w)/g, x => x.toUpperCase());
      this.innerHTML = this.innerHTML.replace('&nbsp;', ' ');
      this.innerHTML = this.innerHTML.replace(':', '');
    }
  });

  $(`.form-add-to-cart .rte p, .form-add-to-cart .rte p strong, .form-add-to-cart .rte p span, .form-add-to-cart .rte p span strong, .form-add-to-cart .rte p br`).each(function( index ) {
    if($(this).html() == '&nbsp;'){
      $(this).remove()
    }
  });
  


  $(`.form-add-to-cart .rte h1, .form-add-to-cart .rte h2, .form-add-to-cart .rte h3`).each(function( index ) {
      $(this).addClass(`dec-heading-${index} dec-heading`);
      $(this).nextUntil("h1, h2, h3").wrapAll(`<div id='desc-${index}'></div>`);
      
      var title = $(`.dec-heading-${index}`).html();
      var content = $(`#desc-${index}`).html();

     content == undefined ? console.log('No content', content) : console.log('content') 
      
      
      var decAcc = `<div>
        <button class="dec-accordion">${ index == 0 ? 'Description' : title} <span class='ac-arrow'>${chevron}</span></button>
        <div class="dec-panel">
          <h2 class='sub-${index} subTitle'>${ index == 0 ? title : ''} </h2>
          ${content == undefined ? '' : content}
        </div>
      </div>`;

      $('.review-acc').before(decAcc);

      // $('.dec-0').html().appendTo('.sub-0');
  });
  //// heading anchore click off
  $('.dec-accordion a').click(function(event){
    event.preventDefault();
  });
  $('.dec-main-acc .dec-accordion br').remove();


  // $(`.form-add-to-cart .rte .dec-heading`).each(function( index ) {

  //   $(this).nextUntil(".dec-heading").wrapAll(`<div id='desc-${index}'></div>`);
    
  // })
  let pleaseNote = setInterval(function() {
    if ($(".dec-main-acc .dec-panel table ~ p").length > 0) {
      $(".dec-main-acc .dec-panel table ~ p strong, .dec-main-acc .dec-panel table ~ p").each(function(){
console.log(this.innerText.toLowerCase().replace(/[.](\s)?\w/g, x => x.toUpperCase()), 'this.innerText')

        this.innerText = this.innerText.toLowerCase().replace(/[.](\s)?\w/g, x => x.toUpperCase());
        

  this.innerText = this.innerText.replace("Please note:", "");
      })

      clearInterval(pleaseNote);
    }
  }, 100);
   
    
  

  let waitForDcc = setInterval(function() {
    if ($(`.dec-accordion`).length > 0) {
      let acc = document.getElementsByClassName("dec-accordion");
      let i;
        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            this.classList.toggle("dec-active");
            // var panel = this.nextElementSibling;
            // if (panel.style.maxHeight) {
            //     panel.style.maxHeight = null;
            //   } else {
            //     panel.style.maxHeight = panel.scrollHeight + "px";
            //   } 
          });
        }

      clearInterval(waitForDcc);
    }
  }, 100);

},////////// End description Function

addBasketModal: function( chevron ){
  let modalHtml = `<button id="addBasketModalBtn">Open Modal</button>
  <div id="addBasketModal" class="modal">

      <!-- Modal content -->
      <div class="add-basket-modal-content">
        <div class="add-basket-modal-header">
          <span class="add-basket-close">Close <span>&#10005;</span></span>
          
        </div>
        <div class="add-basket-modal-body">
          <p class='adtb-heading'>Added to your basket</p>
          <p class='order-pd-name'></p>
        </div>
        <div class="add-basket-modal-footer">
          <div class="ab-checkout">
          <a id="abCheckoutBtn" class="modal-button2" href="/checkout?discount= "> <span>Checkout Now</span><span class='ac-arrow'>${chevron}</span></a>
          </div>
          <div class="ab-view-basket">
          <a id="abViewBasket" class="modal-button2" href="/cart"> <span>View Basket</span> <span class='ac-arrow'>${chevron}</span></a>
          </div>
        </div>
      </div>

    </div>`;

    $('body').prepend(modalHtml);

    var modal = document.getElementById("addBasketModal");
      // Get the button that opens the modal
      var btn = document.getElementById("addBasketModalBtn");
      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("add-basket-close")[0];
      // When the user clicks the button, open the modal 
      btn.onclick = function() {
        modal.style.display = "block";
      };
      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
        modal.style.display = "none";
      } ;
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
  
}

};///////End pdpRedesign Function

(function pollOnload() {
  if (document.querySelector('.mw-product-options') && document.querySelector('.col-sm-12 .selector-wrapper') && window.jQuery !== undefined) {
      try {
          pdpRedesign.init();
        
          const styles = ["color: white", "background: #07090F", "font-size: 20px", "border: 3px solid red", "text-shadow: 1px 1px black", "padding: 5px"].join(";");
      console.log(`%cThis is a EchoLogyx variation find - ${new Date().toLocaleDateString()}`, styles);
      } catch (error) {
          console.log('Initialization error:', error);
      }
  } else {
      setTimeout(pollOnload, 25);
  }
})();


// .spr-summary .spr-summary-actions-togglereviews

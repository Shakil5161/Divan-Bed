
var Clearpay = {
    supportedTheme: !1,
    mutationObserver: !1,
    arrayContainsElement: function (e, t) {
        var a;
        if (Array.prototype.indexOf) return -1 < e.indexOf(t);
        for (a = 0; a < e.length; a++) if (e[a] == t) return !0;
        return !1;
    },
    closePopup: function (e, t) {
        t.preventDefault(), e("#clearpay-popup-wrapper").hide();
    },
    commonElements: {
        product: {
            price_selector: [
                "#ProductPrice",
                "#product-price",
                "#ProductSection .product-single__prices",
                ".product-details .product-price",
                ".product--container .product-pricing",
                ".productForm .product-price",
                ".product-single__meta .product__price",
                ".product__content .product__price",
                "p.modal_price",
                "ul.product-meta",
                "ul.product-single__meta-list",
                ".product-single__price",
                ".product-single__prices",
                ".product__price",
                ".price",
                ".prices",
                ".product_price",
                ".modal_price",
            ],
        },
        cart: {
            static_page: {
                subtotal_selector: [
                    "#CartSubtotal",
                    "form .subtotal_amount",
                    ".cart__footer .cart__subtotal",
                    ".cart-footer .cart-footer__subtotal",
                    "span.cart__subtotal",
                    ".h1.cart-subtotal--price",
                    ".cart__row--table:last",
                    ".cart-subtotal",
                ],
            },
        },
        footer: {
            logo_container: [
                "footer ul.payment-icons",
                "footer div.payment-methods__inner",
                "footer .payment-options",
                "footer ul.payment-icons--list",
                "footer .payment-types ul",
                "footer .site-footer-payment-types",
                "footer #payment",
                "footer ul.payment-icon-list",
                ".footer .payment_methods",
                "footer ul.Footer__PaymentList",
                "footer .payment-types",
                ".page-footer ul.payment-methods",
                "#pagefooter .payment-methods",
                "footer ul.footer__icons-items",
                "footer div.payment_methods",
                "footer div.payment-methods",
            ],
        },
    },
    extractPriceFromHTML: function (e) {
        e = e.replace(/[^0-9.]/g, "");
        return Math.round(100 * parseFloat(e));
    },
    generateCurrencyHTML: function (e) {
        (e = Math.round(e, 2)), (e = clearpay_hide_range_decimals ? e.toFixed(0) : e.toFixed(2));
        return clearpay_show_currency_code ? "Â£" + e + "&nbsp;" + clearpay_shop_currency.toUpperCase() : "Â£" + e;
    },
    generateInsideLimitHTML: function (e) {
        return (
            e.data("outsidePaymentLimits") &&
                (e.removeData("outsidePaymentLimits"),
                Clearpay.supportedTheme ? e.find(".clearpay-text1").html("or 4 interest-free instalments of ") : e.find(".clearpay-text1").html("Pay in 4 interest-free instalments of "),
                e.find(".clearpay-logo").insertAfter(e.find(".clearpay-instalments")),
                e.find(".clearpay-text2").html(" by ").insertBefore(e.find(".clearpay-logo")),
                e.find(".clearpay-link-inner").html(clearpay_modal_open_icon ? "â“˜" : "More info")),
            e
        );
    },
    generateInstalmentHTML: function (e) {
        e = (Math.round(e / 4) / 100).toFixed(2);
        return clearpay_show_currency_code ? "Â£" + e + "&nbsp;" + clearpay_shop_currency.toUpperCase() : "Â£" + e;
    },
    generateOutsideLimitHTML: function (e) {
        return (
            e.data("outsidePaymentLimits", !0),
            Clearpay.versionCompare(clearpay_js_snippet_version, "1.0.2", ">=") ? e.find(".clearpay-text1").html("") : e.find(".clearpay-text1").html("Interest-free instalments by "),
            e.find(".clearpay-logo").insertAfter(e.find(".clearpay-text1")),
            clearpay_hide_upper_limit && !clearpay_hide_lower_limit
                ? (e.find(".clearpay-text2").html(" available for orders over "), e.find(".clearpay-instalments").html(Clearpay.generateCurrencyHTML(clearpay_min)).insertAfter(e.find(".clearpay-text2")))
                : !clearpay_hide_upper_limit && clearpay_hide_lower_limit
                ? (e.find(".clearpay-text2").html(" available for orders up to "), e.find(".clearpay-instalments").html(Clearpay.generateCurrencyHTML(clearpay_max)).insertAfter(e.find(".clearpay-text2")))
                : ((!clearpay_hide_upper_limit && !clearpay_hide_lower_limit) || (clearpay_hide_upper_limit && clearpay_hide_lower_limit)) &&
                  (e.find(".clearpay-text2").html(" available between "),
                  e
                      .find(".clearpay-instalments")
                      .html(Clearpay.generateCurrencyHTML(clearpay_min) + " - " + Clearpay.generateCurrencyHTML(clearpay_max))
                      .insertAfter(e.find(".clearpay-text2"))),
            e.find(".clearpay-link-inner").html(clearpay_modal_open_icon ? "â“˜" : "More info"),
            e
        );
    },
    init: function (l) {
        (Clearpay.supportedTheme = Clearpay.supportedThemes[clearpay_theme_name.toLowerCase()]),
            (Clearpay.mutationObserver = window.MutationObserver || window.WebKitMutationObserver),
            /^\/cart/i.test(window.location.pathname)
                ? 0 != clearpay_cart_integration_enabled && Clearpay.initStaticCartPage(l)
                : /^\/(collections|products)/i.test(window.location.pathname) && clearpay_product && clearpay_product_integration_enabled && Clearpay.initProductPage(l),
            Clearpay.initFooterLogo(l),
            0 != clearpay_cart_dynamic_integration_enabled &&
                Clearpay.supportedTheme &&
                Clearpay.supportedTheme.hasOwnProperty("cart") &&
                Clearpay.supportedTheme.cart.hasOwnProperty("dynamic_content") &&
                l.each(Clearpay.supportedTheme.cart.dynamic_content, function (e, c) {
                    c.hasOwnProperty("target_selector") &&
                        c.hasOwnProperty("addedNode_selector") &&
                        c.hasOwnProperty("subtotal_selector") &&
                        (Clearpay.mutationObserver &&
                            new Clearpay.mutationObserver(function (e, t) {
                                for (var a, o, r = 0; r < e.length; r++)
                                    if (l(e[r].target).is(c.target_selector))
                                        for (a = 0; a < e[r].addedNodes.length; a++)
                                            "object" == typeof e[r].addedNodes[a] &&
                                                l(e[r].addedNodes[a]).is(c.addedNode_selector) &&
                                                ((o = Clearpay.renderParagraph(l, { total_price: clearpay_cart_total_price, page_name: "dynamic_cart" })).find(".clearpay-text1").html("or 4 payments of "),
                                                o.find(".clearpay-text2").html(" with "),
                                                (clearpay_cart_total_price < 100 * clearpay_min || clearpay_cart_total_price > 100 * clearpay_max) && (o = Clearpay.generateOutsideLimitHTML(o)),
                                                "undefined" != typeof clearpay_cart_dynamic_css && o.css(clearpay_cart_dynamic_css),
                                                l(c.target_selector).find(c.addedNode_selector).find(c.subtotal_selector).after(o),
                                                c.paragraph_css && o.css(c.paragraph_css),
                                                ($logo_element = o.find(".clearpay-logo")),
                                                0 < $logo_element.length && c.logo_css && $logo_element.css(c.logo_css),
                                                "function" == typeof c.after_render && c.after_render(l, o));
                            }).observe(document, { childList: !0, attributes: !1, characterData: !1, subtree: !0, attributeOldValue: !1, characterDataOldValue: !1 }),
                        jQuery(document).ajaxComplete(function (e, t, a) {
                            "GET" == a.type && "/cart.js" == a.url && 200 == t.status && (clearpay_cart_total_price = t.responseJSON.total_price);
                        }));
                });
    },
    initFooterLogo: function (o) {
        if ("boolean" == typeof clearpay_footer_logo_enabled && clearpay_footer_logo_enabled) {
            var a,
                r = null,
                c = null,
                t = null;
            if (
                ("string" == typeof clearpay_footer_logo_container
                    ? (r = o(clearpay_footer_logo_container))
                    : Clearpay.supportedTheme && Clearpay.supportedTheme.hasOwnProperty("footer")
                    ? o.each(Clearpay.supportedTheme.footer, function (e, t) {
                          if (0 < (r = o(t.logo_container)).length) return !1;
                      })
                    : (o.each(Clearpay.supportedThemes, function (a, e) {
                          var t = new RegExp(a, "i");
                          if (
                              t.test(clearpay_theme_name) &&
                              e.hasOwnProperty("footer") &&
                              (o.each(e.footer, function (e, t) {
                                  if (0 < (r = o(t.logo_container)).length) return (Clearpay.supportedTheme = Clearpay.supportedThemes[a]), !1;
                              }),
                              "object" == typeof Clearpay.supportedTheme && null !== Clearpay.supportedTheme)
                          )
                              return !1;
                      }),
                      (Clearpay.supportedTheme && !0 !== Clearpay.supportedTheme) ||
                          o.each(Clearpay.commonElements.footer.logo_container, function (e, t) {
                              if (0 < (r = o(t)).length) return !1;
                          })),
                0 != r.length && 0 != r.children().length)
            )
                if (["icon", "stacked", "logo"].includes(clearpay_footer_logo_format) && ["colour", "color", "black", "white"].includes(clearpay_footer_logo_theme) && ["border", "transparent"].includes(clearpay_footer_logo_background)) {
                    if (
                        ((a =
                            "https://static.afterpay.com/icon/clearpay-" +
                            clearpay_footer_logo_format +
                            "-" +
                            clearpay_footer_logo_theme +
                            "-" +
                            (clearpay_footer_logo_background = "logo" == clearpay_footer_logo_format ? "transparent" : clearpay_footer_logo_background) +
                            ".svg"),
                        "string" == typeof clearpay_footer_logo_template)
                    )
                        c = o(clearpay_footer_logo_template.replace("{logo_path}", a));
                    else if (Clearpay.supportedTheme && Clearpay.supportedTheme.hasOwnProperty("footer"))
                        o.each(Clearpay.supportedTheme.footer, function (e, t) {
                            c = o(t.logo_template.replace("{logo_path}", a));
                        });
                    else if ((c = r.children().first().clone()).is("svg") || c.is("img"))
                        (t = c.attr("class")), (c = c.is("svg") ? o('<object class="' + t + '" data="' + a + '" type="image/svg+xml"></object>') : o('<img class="' + t + '" src="' + a + '" alt="clearpay" />'));
                    else if (c.find("svg").length) (t = c.find("svg").attr("class")), c.find("svg").replaceWith('<object class="' + t + '" data="' + a + '" type="image/svg+xml"></object>');
                    else {
                        if (!c.find("img").length) return;
                        (t = c.find("img").attr("class")), c.find("img").replaceWith('<img class="' + t + '" src="' + a + '" alt="clearpay" />');
                    }
                    c.is("object") || c.find("object").length
                        ? ((t = (c.is("object") ? c : c.find("object")).attr("class")),
                          o.get(a + "?co=1", function (e) {
                              c.is("object")
                                  ? ((c = o(e.documentElement)).addClass(t), "object" == typeof clearpay_footer_logo_css && c.css(clearpay_footer_logo_css))
                                  : (c.find("object").replaceWith(e.documentElement), c.find("svg").addClass(t), "object" == typeof clearpay_footer_logo_css && c.find("svg").css(clearpay_footer_logo_css)),
                                  r.append(c);
                          }))
                        : c.is("img")
                        ? ("object" == typeof clearpay_footer_logo_css && c.css(clearpay_footer_logo_css), r.append(c))
                        : c.find("img").length && ("object" == typeof clearpay_footer_logo_css && c.find("img").css(clearpay_footer_logo_css), r.append(c));
                }
        }
    },
    initProductPage: function (r) {
        var e,
            o = null,
            c = null,
            l = null,
            t = "after",
            p = Clearpay.renderParagraph(r, { total_price: clearpay_current_variant.price, page_name: "product" });
        "undefined" != typeof clearpay_product_selector
            ? ((Clearpay.supportedTheme = !0), 0 < (o = r(clearpay_product_selector)).length && (c = o.first()))
            : (Clearpay.supportedTheme
                  ? r.each(Clearpay.supportedTheme.product, function (e, t) {
                        if (0 < (o = r(t.selector)).length)
                            return (c = o.first()), t.paragraph_css && p.css(t.paragraph_css), ($logo_element = p.find(".clearpay-logo")), 0 < $logo_element.length && t.logo_css && $logo_element.css(t.logo_css), !1;
                    })
                  : ((o = null),
                    r.each(Clearpay.supportedThemes, function (a, e) {
                        var t = new RegExp(a, "i");
                        if (
                            t.test(clearpay_theme_name) &&
                            (r.each(Clearpay.supportedThemes[a].product, function (e, t) {
                                if (0 < (o = r(t.selector)).length)
                                    return (
                                        (Clearpay.supportedTheme = Clearpay.supportedThemes[a]),
                                        (c = o.first()),
                                        t.paragraph_css && p.css(t.paragraph_css),
                                        ($logo_element = p.find(".clearpay-logo")),
                                        0 < $logo_element.length && t.logo_css && $logo_element.css(t.logo_css),
                                        !1
                                    );
                            }),
                            null !== c)
                        )
                            return !1;
                    })),
              null === c &&
                  r.each(Clearpay.commonElements.product.price_selector, function (e, t) {
                      if (0 < (o = r(t)).length) return (Clearpay.supportedTheme = !0), (c = o.first()), !1;
                  }),
              null === c && 0 < (o = r('form[action^="/cart/add"]')).length && ((c = o.first()), (t = "before"), p.find(".clearpay-text1").html("Make 4 interest-free payments of "))),
            null !== c &&
                (clearpay_current_variant.available ? (clearpay_current_variant.price < 100 * clearpay_min || clearpay_current_variant.price > 100 * clearpay_max) && (p = Clearpay.generateOutsideLimitHTML(p)) : p.hide(),
                Clearpay.versionCompare(clearpay_js_snippet_version, "1.0.6", ">=") &&
                    "after" == t &&
                    ("-" == (e = c.css("margin-bottom")).charAt(0) ? p.css("margin-top", e.slice(1)) : p.css("margin-top", "-" + e), p.css("margin-bottom", e)),
                "undefined" != typeof clearpay_product_css && p.css(clearpay_product_css),
                c[t](p)),
            0 != clearpay_variable_price_fallback
                ? null !== (l = null === (l = "undefined" != typeof clearpay_variable_price_fallback_selector && 0 < (o = r(clearpay_variable_price_fallback_selector)).length ? o.first() : l) && null !== c ? c : l) &&
                  (Clearpay.mutationObserver && "mutation" == clearpay_variable_price_fallback_method
                      ? (Clearpay.updateParagraph(p, Clearpay.extractPriceFromHTML(l.text())),
                        new Clearpay.mutationObserver(function (e, t) {
                            var a;
                            for (l = r(clearpay_variable_price_fallback_selector).first(), a = 0; a < e.length; a++) r(e[a].target).is(l) && Clearpay.updateParagraph(p, Clearpay.extractPriceFromHTML(e[a].target.innerHTML));
                        }).observe(document.body, { childList: !0, attributes: !1, characterData: !1, subtree: !0, attributeOldValue: !1, characterDataOldValue: !1 }))
                      : setInterval(function (e) {
                            (l = r(clearpay_variable_price_fallback_selector).first()), Clearpay.updateParagraph(p, Clearpay.extractPriceFromHTML(l.text()));
                        }, 400))
                : r("body").on("change", r('form[action^="/cart/add"]'), function (e) {
                      var e = r(e.target).closest("form"),
                          a = parseInt(r("input[name=id]:checked, select[name=id], input[name=id], hidden[name=id]", e).val(), 10),
                          o = !1;
                      !isNaN(a) &&
                          0 < a &&
                          r.each(clearpay_product.variants, function (e, t) {
                              t.id == a &&
                                  t.available &&
                                  (t.price >= 100 * clearpay_min && t.price <= 100 * clearpay_max
                                      ? ((o = !0), (p = Clearpay.generateInsideLimitHTML(p)).find(".clearpay-instalments").html(Clearpay.generateInstalmentHTML(t.price)))
                                      : ((o = !0), (p = Clearpay.generateOutsideLimitHTML(p))));
                          }),
                          e.find("input[type=submit],button[type=submit]").is("[disabled]") && (o = !1),
                          null !== p && (o ? p.show() : p.hide());
                  });
    },
    initStaticCartPage: function (o) {
        var r = null,
            c = null,
            l = null,
            e = "after",
            p = Clearpay.renderParagraph(o, { total_price: clearpay_cart_total_price, page_name: "static_cart" });
        "undefined" != typeof clearpay_cart_static_selector
            ? ((Clearpay.supportedTheme = !0), 0 < (r = o(clearpay_cart_static_selector)).length && ((c = r.first()), p.find(".clearpay-text1").html("or 4 payments of "), p.find(".clearpay-text2").html(" with ")))
            : (Clearpay.supportedTheme
                  ? o.each(Clearpay.supportedTheme.cart.static_page, function (e, t) {
                        if (((r = o(t.selector)), t.paragraph_css && p.css(t.paragraph_css), 0 < r.length))
                            return (
                                (c = r.first()),
                                p.find(".clearpay-text1").html("or 4 payments of "),
                                p.find(".clearpay-text2").html(" with "),
                                ($logo_element = p.find(".clearpay-logo")),
                                0 < $logo_element.length && t.logo_css && $logo_element.css(t.logo_css),
                                !1
                            );
                    })
                  : ((r = null),
                    o.each(Clearpay.supportedThemes, function (a, e) {
                        var t = new RegExp(a, "i");
                        if (
                            t.test(clearpay_theme_name) &&
                            (o.each(Clearpay.supportedThemes[a].cart.static_page, function (e, t) {
                                if (((r = o(t.selector)), t.paragraph_css && p.css(t.paragraph_css), 0 < r.length))
                                    return (
                                        (Clearpay.supportedTheme = Clearpay.supportedThemes[a]),
                                        (c = r.first()),
                                        p.find(".clearpay-text1").html("or 4 payments of "),
                                        p.find(".clearpay-text2").html(" with "),
                                        ($logo_element = p.find(".clearpay-logo")),
                                        0 < $logo_element.length && t.logo_css && $logo_element.css(t.logo_css),
                                        !1
                                    );
                            }),
                            null !== c)
                        )
                            return !1;
                    })),
              null === c &&
                  o.each(Clearpay.commonElements.cart.static_page.subtotal_selector, function (e, t) {
                      if (0 < (r = o(t)).length) return (Clearpay.supportedTheme = !0), (c = r.first()), p.find(".clearpay-text1").html("or 4 payments of "), p.find(".clearpay-text2").html(" with "), !1;
                  }),
              null === c &&
                  (p.css({ "text-align": "right" }),
                  p.find(".clearpay-text1").html("Make 4 payments of "),
                  0 < (r = o('a[href="collections/all"],input[name=update]')).length ? ((c = r.first()), (e = "before")) : 0 < (r = o('form[action^="/cart"]:not(form[action^="/cart/add"])')).length && (c = r.first()))),
            null !== c &&
                ((clearpay_cart_total_price < 100 * clearpay_min || clearpay_cart_total_price > 100 * clearpay_max) && (p = Clearpay.generateOutsideLimitHTML(p)),
                "undefined" != typeof clearpay_cart_static_css && p.css(clearpay_cart_static_css),
                c[e](p)),
            0 != clearpay_variable_subtotal_fallback &&
                null !== (l = null === (l = "undefined" != typeof clearpay_variable_subtotal_fallback_selector && 0 < (r = o(clearpay_variable_subtotal_fallback_selector)).length ? r.first() : l) && null !== c ? c : l) &&
                (Clearpay.mutationObserver && "mutation" == clearpay_variable_subtotal_fallback_method
                    ? (Clearpay.updateParagraph(p, Clearpay.extractPriceFromHTML(l.text())),
                      new Clearpay.mutationObserver(function (e, t) {
                          var a;
                          for (l = o(clearpay_variable_subtotal_fallback_selector).first(), a = 0; a < e.length; a++) o(e[a].target).is(l) && Clearpay.updateParagraph(p, Clearpay.extractPriceFromHTML(e[a].target.innerHTML));
                      }).observe(l.get(0), { childList: !0, attributes: !1, characterData: !1, subtree: !0, attributeOldValue: !1, characterDataOldValue: !1 }))
                    : setInterval(function (e) {
                          (l = o(clearpay_variable_subtotal_fallback_selector).first()), Clearpay.updateParagraph(p, Clearpay.extractPriceFromHTML(l.text()));
                      }, 400));
    },
    launchPopup: function (t, e) {
        e.preventDefault();
        var a,
            o = t("#clearpay-popup-wrapper");
        0 < o.length
            ? o.show()
            : ((o = t(document.createElement("div"))
                  .attr("id", "clearpay-popup-wrapper")
                  .css({ position: "fixed", "z-index": 9999999999, left: 0, top: 0, right: 0, bottom: 0, overflow: "auto" })
                  .appendTo("body")
                  .on("click", function (e) {
                      Clearpay.closePopup(t, e);
                  })),
              (a = t(document.createElement("div"))
                  .attr("id", "clearpay-popup-outer")
                  .css({
                      display: "flex",
                      "-webkit-justify-content": "center",
                      "-ms-flex-pack": "center",
                      "justify-content": "center",
                      "-webkit-align-content": "center",
                      "-ms-flex-line-pack": "center",
                      "align-content": "center",
                      "-webkit-align-items": "center",
                      "-ms-flex-align": "center",
                      "align-items": "center",
                      width: "100%",
                      "min-height": "100%",
                      "background-color": "rgba(0, 0, 0, 0.80)",
                  })
                  .appendTo(o)),
              (e = t(document.createElement("div")).attr("id", "clearpay-popup-inner").css({ position: "relative", "background-color": "#fff" }).appendTo(a)),
              (o = t(document.createElement("a"))).attr("href", "https://www.clearpay.co.uk/terms"),
              o.attr("target", "_blank").css({ display: "block" }).appendTo(e),
              (a = t(document.createElement("img"))),
              640 < t(window).width()
                  ? a
                        .attr("src", "https://static.afterpay.com/clearpay-lightbox-desktop.png")
                        .attr("srcset", "https://static.afterpay.com/clearpay-lightbox-desktop.png 1x, https://static.afterpay.com/clearpay-lightbox-desktop@2x.png 2x")
                        .css({ "max-width": "597px" })
                  : a
                        .attr("src", "https://static.afterpay.com/clearpay-lightbox-mobile.png")
                        .attr("srcset", "https://static.afterpay.com/clearpay-lightbox-mobile.png 1x, https://static.afterpay.com/clearpay-lightbox-mobile@2x.png 2x")
                        .css({ "max-width": "300px" }),
              a
                  .css({ display: "block", width: "100%" })
                  .appendTo(o)
                  .on("click", function (e) {
                      e.stopPropagation();
                  }),
              t(document.createElement("a"))
                  .attr("href", "#")
                  .css({ position: "absolute", right: "8px", top: "8px" })
                  .html(
                      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1" width="32px" height="32px"><g id="surface1"><path style=" " d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 12.21875 10.78125 L 10.78125 12.21875 L 14.5625 16 L 10.78125 19.78125 L 12.21875 21.21875 L 16 17.4375 L 19.78125 21.21875 L 21.21875 19.78125 L 17.4375 16 L 21.21875 12.21875 L 19.78125 10.78125 L 16 14.5625 Z "/></g></svg>'
                  )
                  .appendTo(e)
                  .on("click", function (e) {
                      Clearpay.closePopup(t, e);
                  }));
    },
    loadScript: function (e, t) {
        var a = document.createElement("script");
        (a.type = "text/javascript"),
            a.readyState
                ? (a.onreadystatechange = function () {
                      ("loaded" != a.readyState && "complete" != a.readyState) || ((a.onreadystatechange = null), t());
                  })
                : (a.onload = function () {
                      t();
                  }),
            (a.src = e),
            document.getElementsByTagName("head")[0].appendChild(a);
    },
    renderParagraph: function (t, e) {
        var a = t(document.createElement("p")).addClass("clearpay-paragraph");
        null !== clearpay_product && a.attr("data-product-id", clearpay_product.id), t(document.createElement("span")).addClass("clearpay-text1").appendTo(a).html("or make 4 interest-free payments of ");
        t(document.createElement("strong")).addClass("clearpay-instalments").html(Clearpay.generateInstalmentHTML(e.total_price)).appendTo(a);
        t(document.createElement("span")).addClass("clearpay-text2").appendTo(a).html(" fortnightly with ");
        var o = clearpay_logo_theme;
        "product" == e.page_name && "undefined" != typeof clearpay_product_logo_theme
            ? (o = clearpay_product_logo_theme)
            : "static_cart" == e.page_name && "undefined" != typeof clearpay_cart_static_logo_theme
            ? (o = clearpay_cart_static_logo_theme)
            : "dynamic_cart" == e.page_name && "undefined" != typeof clearpay_cart_dynamic_logo_theme && (o = clearpay_cart_dynamic_logo_theme);
        t(document.createElement("img"))
            .addClass("clearpay-logo")
            .css({ "vertical-align": "middle", width: "110px", border: "0px" })
            .attr("src", "https://static.afterpay.com/integration/product-page/logo-clearpay-" + o + ".png")
            .attr(
                "srcset",
                "https://static.afterpay.com/integration/product-page/logo-clearpay-" +
                    o +
                    ".png 1x, https://static.afterpay.com/integration/product-page/logo-clearpay-" +
                    o +
                    "@2x.png 2x, https://static.afterpay.com/integration/product-page/logo-clearpay-" +
                    o +
                    "@3x.png 3x"
            )
            .attr("width", "110")
            .attr("height", "21")
            .attr("alt", "Clearpay")
            .appendTo(a),
            t(document.createElement("span")).addClass("clearpay-text3").html("&nbsp;").appendTo(a);
        o = t(document.createElement("a")).addClass("clearpay-link");
        o.attr("href", "https://www.clearpay.co.uk/terms"),
            o
                .attr("target", "_blank")
                .on("click", function (e) {
                    Clearpay.launchPopup(t, e);
                })
                .appendTo(a);
        t(document.createElement("u"))
            .addClass("clearpay-link-inner")
            .css({ "font-size": "12px" })
            .html(clearpay_modal_open_icon ? "â“˜" : "More info")
            .css(clearpay_modal_open_icon ? { "text-decoration": "none" } : { "text-decoration": "underline" })
            .appendTo(o);
        return a;
    },
    supportedCurrencies: ["GBP"],
    supportedThemes: {
        alchemy: {
            product: { "2017-12-14": { selector: ".quadd-wrapper" }, "2021-08-13": { selector: ".product-price" } },
            cart: { static_page: { "2021-08-13": { selector: "div.column.half.align-right.align-center-mobile > div.h2" } } },
            footer: { "2020-02-07": { logo_container: "footer div.payment-methods__inner", logo_template: '<img class="payment-icon fade-in lazyloaded" alt="clearpay" src="{logo_path}">' } },
        },
        atlantic: {
            product: { "2017-12-14": { selector: "p.price" } },
            footer: { "2020-02-07": { logo_container: "footer ul.payment-options", logo_template: '<li class="payment-icon"><object data="{logo_path}" type="image/svg+xml"></object></li>' } },
        },
        blockshop: {
            product: { "2017-12-14": { selector: "article .prices", paragraph_css: { "margin-top": "-1em", "margin-bottom": "2em" } } },
            footer: { "2020-02-07": { logo_container: "footer ul.payment-icons--list", logo_template: '<li class="payment-icons--item"><object data="{logo_path}" type="image/svg+xml"></object></li>' } },
        },
        boundless: {
            product: { "2017-12-14": { selector: "#AddToCartForm-product-template .product__price", paragraph_css: { "margin-top": "0px" } } },
            cart: { static_page: { "2018-05-30": { selector: "span.cart__subtotal" } } },
            footer: { "2020-02-07": { logo_container: "footer ul.payment-icons", logo_template: '<li><object class="payment-icons__icon" data="{logo_path}" type="image/svg+xml"></object></li>' } },
        },
        brooklyn: {
            product: { "2017-12-14": { selector: "#ProductPrice", logo_css: { border: "0px" } } },
            cart: {
                static_page: { "2018-05-30": { selector: ".cart__row--table:last", logo_css: { border: "0px" } } },
                dynamic_content: {
                    "2018-06-25": {
                        target_selector: "#CartDrawer #CartContainer",
                        addedNode_selector: "form.ajaxcart",
                        subtotal_selector: ".ajaxcart__footer .grid--full",
                        paragraph_css: { "text-align": "right" },
                        logo_css: { border: "0px" },
                        after_render: function (e, t) {
                            var a = e("#CartContainer .ajaxcart__inner--has-fixed-footer"),
                                e = e("#CartContainer .ajaxcart__footer--fixed"),
                                t = e.outerHeight() + t.outerHeight(!0);
                            a.css("bottom", t + "px"), e.css("height", t + "px");
                        },
                    },
                },
            },
            footer: { "2020-02-07": { logo_container: "footer ul.payment-icons", logo_template: '<li><object class="icon" data="{logo_path}" type="image/svg+xml"></object></li>' } },
        },
        classic: { product: { "2017-12-14": { selector: ".product-single__prices", paragraph_css: { "margin-top": "-15px", "margin-bottom": "30px" } } } },
        debutify: {
            product: { "2020-09-17": { selector: ".price-wrapper" }, "2021-08-13": { selector: ".price-container" } },
            cart: {
                static_page: {
                    "2020-09-17": { selector: ".cart__row--table:last", paragraph_css: { "text-align": "center" } },
                    "2021-11-04": { selector: ".card-body > div.grid.grid-small.flex-nowrap", paragraph_css: { "text-align": "center" } },
                    "2021-11-05": { selector: ".cart__total-price-info", paragraph_css: { "text-align": "center" } },
                },
            },
            footer: {
                "2020-09-17": { logo_container: ".payment-icons-list", logo_template: '<li><object class="payment-icons" data="{logo_path}" type="image/svg+xml"></object></li>' },
                "2021-11-05": { logo_container: "footer .payment-icons ul", logo_template: '<li><object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object></li>' },
            },
        },
        debut: {
            product: {
                "2017-12-14": { selector: ".product-single__price", paragraph_css: { "margin-top": "-20px", "margin-bottom": "40px" } },
                "2018-07-04": { selector: ".product__price", paragraph_css: { "margin-top": "-10px", "margin-bottom": "40px" } },
            },
            cart: { static_page: { "2018-05-30": { selector: ".cart__footer .cart__subtotal" }, "2020-03-27": { selector: ".cart-subtotal" } } },
            footer: { "2020-02-07": { logo_container: "footer ul.payment-icons", logo_template: '<li class="payment-icon"><object class="icon icon--full-color" data="{logo_path}" type="image/svg+xml"></object></li>' } },
        },
        district: {
            product: { "2017-12-14": { selector: "#ComparePrice-product-template", paragraph_css: { "margin-top": "0.3rem", display: "block", "font-style": "normal" } } },
            footer: { "2020-02-07": { logo_container: "footer .payment-types ul", logo_template: '<li><object class="payment-icon payment-icon--clearpay" data="{logo_path}" type="image/svg+xml"></object></li>' } },
        },
        empire: {
            product: { "2017-12-14": { selector: ".product--container .product-pricing", paragraph_css: { "line-height": "1.5", "margin-top": "10px", "margin-bottom": "22px" } } },
            footer: { "2020-02-07": { logo_container: "footer ul.payment-icons", logo_template: '<li class="payment-icons-item"><object data="{logo_path}" type="image/svg+xml"></object></li>' } },
        },
        fashionopolism: {
            product: { "2017-12-14": { selector: ".product-prices" }, "2018-08-10": { selector: "#product-price" } },
            cart: { static_page: { "2018-08-10": { selector: "#basket-right>h4" } } },
            footer: { "2020-02-07": { logo_container: "footer .sub-footer .right-side", logo_template: '<img src="{logo_path}" />' } },
        },
        flow: {
            product: { "2017-12-14": { selector: "#ProductPrice", paragraph_css: { "margin-top": "-20px", "margin-bottom": "30px" } } },
            footer: { "2020-02-07": { logo_container: "footer ul.payment-icons", logo_template: '<object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object>' } },
        },
        grid: {
            product: { "2017-12-14": { selector: ".product-details .product-price", paragraph_css: { "margin-top": "-35px", "margin-bottom": "40px" } } },
            footer: { "2020-02-07": { logo_container: "footer .site-footer-payment-types", logo_template: '<object data="{logo_path}" type="image/svg+xml"></object>' } },
        },
        icon: {
            product: { "2017-12-14": { selector: "#product-price", paragraph_css: { "margin-top": "-20px" } } },
            cart: { static_page: { "2018-08-10": { selector: "#basket-right>h4" } } },
            footer: { "2020-02-07": { logo_container: "footer #payment", logo_template: '<object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object>' } },
        },
        jumpstart: { product: { "2017-12-14": { selector: "#AddToCartForm .price:last" }, "2018-05-30": { selector: "#ProductPrice-product-template" } }, cart: { static_page: { "2018-05-30": { selector: "span.h3.cart__subtotal" } } } },
        minimal: {
            product: { "2017-12-14": { selector: ".product-single__prices", paragraph_css: { "margin-top": "-15px" } } },
            cart: { static_page: { "2018-05-30": { selector: ".h5.cart__subtotal" }, "2020-02-26": { selector: ".cart__subtotal" } } },
            footer: { "2020-02-07": { logo_container: "footer ul.payment-icons", logo_template: '<li><object class="icon" data="{logo_path}" type="image/svg+xml"></object></li>' } },
        },
        modular: {
            product: {
                "2017-12-14": { selector: ".productForm .product-price", paragraph_css: { "margin-top": "-1rem", "margin-bottom": "1.5rem" } },
                "2020-06-03": { selector: ".product-normal-price" },
                "2020-09-21": { selector: ".product-price" },
            },
            footer: { "2020-02-07": { logo_container: "footer ul.payment-icon-list", logo_template: '<li><object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object></li>' } },
        },
        motion: { product: { "2017-12-14": { selector: ".product-single__meta .product__price:last" } }, cart: { static_page: { "2018-05-30": { selector: ".grid--full.cart__row--table:last", paragraph_css: { "margin-top": "10px" } } } } },
        narrative: {
            product: { "2017-12-14": { selector: ".product__content .product__price", paragraph_css: { "margin-top": "0px", "text-align": "center" } } },
            cart: { static_page: { "2018-05-30": { selector: ".cart-footer .cart-footer__subtotal" } } },
            footer: { "2020-02-07": { logo_container: "footer ul.payment-icons", logo_template: '<li class="payment-icon"><object class="icon icon--full-color" data="{logo_path}" type="image/svg+xml"></object></li>' } },
        },
        pacific: { product: { "2017-12-14": { selector: ".product-price" } }, footer: { "2020-02-07": { logo_container: "footer .payment-options", logo_template: '<object data="{logo_path}" type="image/svg+xml"></object>' } } },
        parallax: {
            product: { "2017-12-14": { selector: ".modal_price" } },
            cart: { static_page: { "2018-05-31": { selector: "form .subtotal_amount", paragraph_css: { "font-size": "13px" } } } },
            footer: { "2020-02-07": { logo_container: ".footer .payment_methods", logo_template: '<object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object>' } },
        },
        pipeline: {
            product: {
                "2017-12-14": { selector: "#ComparePriceWrapper-product", paragraph_css: { "margin-top": "15px", "line-height": "1.5", "letter-spacing": "0", "font-size": "14px", "text-transform": "none", color: "#000" } },
                "2018-08-10": { selector: "#productInfo-product .product__price" },
                "2021-08-13": { selector: ".product__price" },
            },
            cart: { static_page: { "2018-08-10": { selector: ".cart__footer__text:first" } } },
            footer: { "2020-02-07": { logo_container: "footer ul.payment-icons", logo_template: '<li><object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object><span class="visually-hidden">Clearpay</span></li>' } },
        },
        pop: { product: { "2017-12-14": { selector: ".product-single__price" } }, cart: { static_page: { "2018-05-30": { selector: "span.cart__subtotal" } } } },
        prestige: {
            product: { "2018-07-27": { selector: ".ProductMeta__PriceList.Heading" } },
            cart: { static_page: { "2021-04-01": { selector: ".Cart__Total.Heading.u-h6" } } },
            footer: { "2020-02-07": { logo_container: "footer ul.Footer__PaymentList", logo_template: '<li class="HorizontalList__Item"><object data="{logo_path}" type="image/svg+xml"></object></li>' } },
        },
        providence: {
            product: { "2017-12-14": { selector: ".pricing" } },
            footer: { "2020-02-07": { logo_container: "footer .payment-types", logo_template: '<object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object>' } },
        },
        retina: {
            product: { "2017-12-14": { selector: ".modal_price", paragraph_css: { "margin-top": "-15px", "margin-bottom": "20px" } } },
            cart: { static_page: { "2018-08-10": { selector: "#cart_form .subtotal_amount", paragraph_css: { "font-size": "13px" } } } },
            footer: { "2020-02-07": { logo_container: ".footer .payment_methods", logo_template: '<object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object>' } },
        },
        showcase: {
            product: { "2018-08-10": { selector: ".product-detail__title-and-price .price-area" }, "2021-08-13": { selector: ".product-area__row", paragraph_css: { "text-align": "left" } } },
            cart: { static_page: { "2018-08-10": { selector: "#cartform .subtotal" } } },
            footer: {
                "2020-02-07": { logo_container: ".page-footer ul.payment-methods", logo_template: '<li><object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object></li>' },
                "2021-08-13": { logo_container: ".section-footer__payment-icons", logo_template: '<object class="section-footer__payment-icon" data="{logo_path}" type="image/svg+xml"></object>' },
            },
        },
        showtime: {
            product: { "2017-12-14": { selector: ".desc_blk_bot .price", paragraph_css: { float: "none", clear: "both", "margin-bottom": "1rem", "text-align": "center" } } },
            footer: { "2020-02-07": { logo_container: "#footer .partner ul.list-inline", logo_template: '<li><object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object></li>' } },
        },
        simple: {
            product: { "2017-12-14": { selector: "#ProductSection .product-single__prices", paragraph_css: { "margin-top": "-15px", "margin-bottom": "30px" } } },
            cart: { static_page: { "2018-05-30": { selector: "span.cart__subtotal.h3" } } },
            footer: { "2020-02-07": { logo_container: "footer ul.payment-icons", logo_template: '<li><object class="icon icon--full-color" data="{logo_path}" type="image/svg+xml"></object></li>' } },
        },
        supply: {
            product: { "2017-12-14": { selector: "ul.product-meta" } },
            cart: {
                static_page: { "2018-05-30": { selector: ".h1.cart-subtotal--price" } },
                dynamic_content: { "2018-05-30": { target_selector: "#ajaxifyCart.ajaxifyCart--content", addedNode_selector: "form.cart-form", subtotal_selector: ".h1.cart-subtotal--price" } },
            },
            footer: { "2020-02-07": { logo_container: "footer ul.payment-icons", logo_template: '<li><object class="icon" data="{logo_path}" type="image/svg+xml"></object></li>' } },
        },
        symmetry: {
            product: { "2017-12-14": { selector: "#main-product-detail .price-area" }, "2021-08-13": { selector: ".price-container" } },
            cart: { static_page: { "2021-08-13": { selector: ".subtotal" } } },
            footer: {
                "2020-02-07": { logo_container: "#pagefooter .payment-methods", logo_template: '<object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object>' },
                "2021-08-13": { logo_container: ".section-footer__payment-icons", logo_template: '<object class="section-footer__payment-icon" data="{logo_path}" type="image/svg+xml"></object>' },
            },
        },
        testament: {
            product: { "2017-12-14": { selector: "#product-price" } },
            cart: { static_page: { "2018-08-10": { selector: "#basket-right>h4" } } },
            footer: { "2020-06-03": { logo_container: "footer #payment", logo_template: '<object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object>' } },
        },
        turbo: {
            product: { "2018-08-10": { selector: ".modal_price" } },
            cart: { static_page: { "2018-08-10": { selector: "#cart_form .cart_subtotal" } } },
            footer: { "2020-06-03": { logo_container: ".payment_methods", logo_template: '<object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object>' } },
        },
        venture: {
            product: { "2017-12-14": { selector: "ul.product-single__meta-list", paragraph_css: { "margin-top": "10px" } } },
            cart: { static_page: { "2018-05-30": { selector: "p#CartSubtotal" } } },
            footer: { "2020-02-07": { logo_container: "footer ul.payment-icons", logo_template: '<li><object class="icon icon--full-color" data="{logo_path}" type="image/svg+xml"></object></li>' } },
        },
        venue: {
            product: { "2017-12-14": { selector: "h3.product-single__price-text", paragraph_css: { "line-height": "1.5" } } },
            footer: { "2020-02-07": { logo_container: "footer ul.footer__icons-items", logo_template: '<li class="footer__icons-item"><object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object></li>' } },
        },
        responsive: {
            product: { "2020-03-05": { selector: ".product_section p.modal_price", paragraph_css: { "margin-top": "-10px", "margin-bottom": "10px" } } },
            cart: { static_page: { "2020-03-05": { selector: "#cart_form > .columns.omega > h4" } } },
            footer: { "2020-03-05": { logo_container: "footer div.payment_methods", logo_template: '<object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object>' } },
        },
        canopy: {
            product: { "2020-03-10": { selector: "#price" } },
            cart: { static_page: { "2020-03-10": { selector: "#cartform div.cart-subtotal" } } },
            footer: { "2020-03-10": { logo_container: "footer div.payment-methods", logo_template: '<object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object>' } },
        },
        sunrise: {
            product: { "2020-03-26": { selector: ".product-details .product-price-wrap", paragraph_css: { "font-size": "16px" } } },
            footer: { "2020-03-26": { logo_container: "footer .payment-icons", logo_template: '<object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object>' } },
        },
        impulse: {
            product: { "2020-04-06": { selector: ".product__price-savings" } },
            cart: { static_page: { "2021-04-01": { selector: ".main-content .cart__item-sub.cart__item-row", paragraph_css: { "text-align": "center" } } } },
            footer: { "2020-04-06": { logo_container: "footer ul.payment-icons", logo_template: '<li class="icon--payment"><object class="icon icon--full-color" data="{logo_path}" type="image/svg+xml"></object></li>' } },
        },
        ella: { product: { "2020-06-03": { selector: ".prices" } }, cart: { static_page: { "2020-06-03": { selector: ".total", paragraph_css: { "text-align": "center", "margin-bottom": "15px" } } } } },
        kingdom: {
            product: { "2020-06-03": { selector: ".product__price--original" }, "2020-09-21": { selector: ".product__price--compare" } },
            cart: { static_page: { "2020-06-03": { selector: "#CartTotal", paragraph_css: { margin: "-5px 0 3px" } } } },
        },
        caros: { product: { "2020-06-03": { selector: ".total-price" } }, cart: { static_page: { "2020-06-03": { selector: ".total", paragraph_css: { "text-align": "center" } } } } },
        furnitica: { product: { "2020-06-03": { selector: ".prices" } }, cart: { static_page: { "2020-06-03": { selector: ".total-price" } } } },
        maker: { footer: { "2020-06-03": { logo_container: ".payment-icons--list", logo_template: '<li class="payment-icons--item"><object class="" data="{logo_path}" type="image/svg+xml"></object></li>' } } },
        molla: {
            product: { "2020-06-03": { selector: ".gf_product-prices", paragraph_css: { "margin-bottom": "20px" } } },
            cart: { static_page: { "2020-06-03": { selector: ".table-summary", paragraph_css: { "text-align": "center" } } } },
        },
        vantage: {
            cart: { static_page: { "2020-06-03": { selector: "#basket-right > h4" } } },
            footer: { "2020-06-03": { logo_container: ".payment-methods", logo_template: '<object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object>' } },
        },
        envy: {
            product: { "2020-09-17": { selector: ".product-page--pricing" } },
            cart: { static_page: { "2020-09-17": { selector: ".cart-totals--wrapper", paragraph_css: { "text-align": "right" } } } },
            footer: { "2020-09-17": { logo_container: "#footer-payment-methods", logo_template: '<object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object>' } },
        },
        vanisa: { product: { "2020-09-21": { selector: ".product-price", paragraph_css: { "margin-top": "-5px", "margin-bottom": "15px" } } }, cart: { static_page: { "2020-09-21": { selector: ".total-checkout" } } } },
        streamline: {
            product: { "2020-09-21": { selector: ".product-single__prices" } },
            cart: { static_page: { "2021-04-01": { selector: ".h3.cart__subtotal" } } },
            footer: { "2020-09-21": { logo_container: ".payment-icons", logo_template: '<li class="icon--payment"><object class="icon icon--full-color" data="{logo_path}" type="image/svg+xml"></object></li>' } },
        },
        editions: {
            product: { "2020-09-21": { selector: ".product-details__price-container" } },
            footer: { "2020-09-21": { logo_container: ".payment-options", logo_template: '<object class="payment-icons" data="{logo_path}" type="image/svg+xml"></object>' } },
        },
        warehouse: {
            product: { "2020-09-21": { selector: ".product-form .price-list" } },
            cart: { static_page: { "2020-09-21": { selector: ".cart-recap__price-line" } } },
            footer: { "2020-09-21": { logo_container: ".payment-list", logo_template: '<object class="payment-list__item" data="{logo_path}" type="image/svg+xml"></object>' } },
        },
        broadcast: { product: { "2021-08-13": { selector: ".product__price__wrap" } }, cart: { static_page: { "2021-08-13": { selector: "#MainContent > div > div > form > div.cart__inner > div.cart__aside > div:nth-child(4)" } } } },
        lorenza: {
            product: { "2021-08-13": { selector: "div.product__header:visible > div.product__price, div.product__mobile-header:visible > div.product__price" } },
            cart: { static_page: { "2021-08-13": { selector: "p.type-body-extra-large.type-heading-1-small.mt1.mb1" } } },
        },
        expression: { product: { "2021-08-13": { selector: ".product-price" } }, footer: { "2021-08-13": { logo_container: ".cards", logo_template: '<object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object>' } } },
        trademark: {
            product: { "2021-08-13": { selector: ".product__prices:visible" } },
            cart: { static_page: { "2021-08-13": { selector: "div.grid div > span.cart__total.h3" } } },
            footer: { "2021-08-13": { logo_container: ".footer__payment-methods", logo_template: '<li class="footer__payment-method"><object data="{logo_path}" type="image/svg+xml"></object></li>' } },
        },
        elomus: { product: { "2021-08-13": { selector: ".gf_product-prices", paragraph_css: { "margin-bottom": "15px" } } } },
        dawn: {
            product: { "2021-11-05": { selector: ".product__info-container .no-js-hidden" } },
            cart: { static_page: { "2021-11-05": { selector: "div.totals", paragraph_css: { "text-align": "right" } } } },
            footer: { "2021-11-05": { logo_container: ".list-payment", logo_template: '<li class="list-payment__item"><object class="icon icon--full-color" data="{logo_path}" type="image/svg+xml"></object></li>' } },
        },
        artisan: { cart: { static_page: { "2021-12-10": { selector: ".cart_subtotal" } } } },
    },
    updateParagraph: function (e, t) {
        100 * clearpay_min <= t && t <= 100 * clearpay_max
            ? (e.show(), (e = Clearpay.generateInsideLimitHTML(e)).find(".clearpay-instalments").html(Clearpay.generateInstalmentHTML(t)))
            : (e.show(), (e = Clearpay.generateOutsideLimitHTML(e)));
    },
};
Clearpay.versionCompare = function (e, t, a) {
    function o(e) {
        return (e = (e = ("" + e).replace(/[_\-+]/g, ".")).replace(/([^.\d]+)/g, ".$1.").replace(/\.{2,}/g, ".")).length ? e.split(".") : [-8];
    }
    function r(e) {
        return e ? (isNaN(e) ? i[e] || -7 : parseInt(e, 10)) : 0;
    }
    var c,
        l,
        p = 0,
        i = { dev: -6, alpha: -5, a: -5, beta: -4, b: -4, RC: -3, rc: -3, "#": -2, p: 1, pl: 1 };
    for (e = o(e), t = o(t), l = Math.max(e.length, t.length), c = 0; c < l; c++)
        if (e[c] !== t[c]) {
            if (((e[c] = r(e[c])), (t[c] = r(t[c])), e[c] < t[c])) {
                p = -1;
                break;
            }
            if (e[c] > t[c]) {
                p = 1;
                break;
            }
        }
    if (!a) return p;
    switch (a) {
        case ">":
        case "gt":
            return 0 < p;
        case ">=":
        case "ge":
            return 0 <= p;
        case "<=":
        case "le":
            return p <= 0;
        case "===":
        case "=":
        case "eq":
            return 0 === p;
        case "<>":
        case "!==":
        case "ne":
            return 0 !== p;
        case "":
        case "<":
        case "lt":
            return p < 0;
        default:
            return null;
    }
};
var clearpay_product_integration_enabled,
    clearpay_cart_integration_enabled,
    clearpay_cart_dynamic_integration_enabled,
    clearpay_variable_price_fallback,
    clearpay_variable_subtotal_fallback,
    clearpay_modal_responsive,
    clearpay_show_currency_code,
    clearpay_hide_range_decimals,
    clearpay_hide_upper_limit,
    clearpay_hide_lower_limit,
    clearpay_modal_open_icon,
    clearpay_min,
    clearpay_max,
    clearpay_logo_theme,
    clearpay_footer_logo_enabled,
    clearpay_footer_logo_format,
    clearpay_footer_logo_theme,
    clearpay_footer_logo_background,
    clearpay_js_include_version = "1.6.11";
void 0 === clearpay_product_integration_enabled && (clearpay_product_integration_enabled = !0),
    void 0 === clearpay_cart_integration_enabled && (clearpay_cart_integration_enabled = !0),
    void 0 === clearpay_cart_dynamic_integration_enabled && (clearpay_cart_dynamic_integration_enabled = !1),
    void 0 === clearpay_variable_price_fallback && (clearpay_variable_price_fallback = "undefined" != typeof clearpay_variable_price_fallback_selector),
    "undefined" == typeof clearpay_variable_price_fallback_method && (clearpay_variable_price_fallback_method = "mutation"),
    void 0 === clearpay_variable_subtotal_fallback && (clearpay_variable_subtotal_fallback = "undefined" != typeof clearpay_variable_subtotal_fallback_selector),
    "undefined" == typeof clearpay_variable_subtotal_fallback_method && (clearpay_variable_subtotal_fallback_method = "mutation"),
    void 0 === clearpay_modal_responsive && (clearpay_modal_responsive = !1),
    void 0 === clearpay_show_currency_code && (clearpay_show_currency_code = !0),
    void 0 === clearpay_hide_range_decimals && (clearpay_hide_range_decimals = !!Clearpay.versionCompare(clearpay_js_snippet_version, "1.0.2", ">=")),
    void 0 === clearpay_hide_upper_limit && (clearpay_hide_upper_limit = !1),
    void 0 === clearpay_hide_lower_limit && (clearpay_hide_lower_limit = !!Clearpay.versionCompare(clearpay_js_snippet_version, "1.0.8", ">=")),
    void 0 === clearpay_modal_open_icon && (clearpay_modal_open_icon = !1),
    (clearpay_min = Clearpay.versionCompare(clearpay_js_snippet_version, "1.0.8", ">=") ? (void 0 === clearpay_min ? 0.04 : Math.max(clearpay_min, 0.04)) : void 0 === clearpay_min ? 10 : Math.max(clearpay_min, 10)),
    void 0 === clearpay_max && (clearpay_max = 1e3),
    void 0 === clearpay_logo_theme && (clearpay_logo_theme = "colour"),
    void 0 === clearpay_footer_logo_enabled && (clearpay_footer_logo_enabled = !!Clearpay.versionCompare(clearpay_js_snippet_version, "1.0.5", ">=")),
    void 0 === clearpay_footer_logo_format && (clearpay_footer_logo_format = "icon"),
    void 0 === clearpay_footer_logo_theme && (clearpay_footer_logo_theme = "colour"),
    void 0 === clearpay_footer_logo_background && (clearpay_footer_logo_background = "border"),
    Clearpay.arrayContainsElement(Clearpay.supportedCurrencies, clearpay_shop_currency) &&
        ("function" != typeof jQuery || !Object.prototype.hasOwnProperty.call(jQuery, "fn") || Clearpay.versionCompare(jQuery.fn.jquery, "3.0", "<")
            ? Clearpay.loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js", function () {
                  (Clearpay.jQuery_3_4_1 = jQuery.noConflict(!0)), Clearpay.init(Clearpay.jQuery_3_4_1);
              })
            : Clearpay.init(jQuery));

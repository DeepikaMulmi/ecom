(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DOMString = exports.DOM = exports.options = void 0;
var options = oceanwpLocalize;
exports.options = options;
var DOM = {
  html: document.querySelector("html"),
  body: document.body,
  WPAdminbar: document.querySelector("#wpadminbar"),
  wrap: document.querySelector("#wrap"),
  main: document.querySelector("#main"),
  selectTags: document.querySelectorAll(options.customSelects),
  floatingBar: document.querySelector(".owp-floating-bar"),
  header: {
    site: document.querySelector("#site-header"),
    vertical: document.querySelector("#site-header.vertical-header #site-header-inner"),
    fullScreen: document.querySelector("#site-header.full_screen-header"),
    topbar: document.querySelector("#top-bar"),
    topbarWrapper: document.querySelector("#top-bar-wrap"),
    topLeftSide: document.querySelector("#site-header.top-header .header-top .left"),
    topRightSide: document.querySelector("#site-header.top-header .header-top .right")
  },
  menu: {
    nav: document.querySelector("#site-header.header-replace #site-navigation"),
    main: document.querySelector(".main-menu"),
    fullScreen: {
      menu: document.querySelector("#site-header.full_screen-header #full-screen-menu"),
      toggleMenuBtn: document.querySelector("#site-header.full_screen-header .menu-bar"),
      logo: document.querySelector("#site-logo.has-full-screen-logo")
    },
    mega: {
      menuItems: document.querySelectorAll("#site-navigation .megamenu-li.full-mega"),
      topbarMenuItems: document.querySelectorAll("#top-bar-nav .megamenu-li.full-mega"),
      menuContents: document.querySelectorAll(".navigation .megamenu-li.auto-mega .megamenu")
    },
    vertical: {
      toggleMenuBtn: document.querySelector("a.vertical-toggle")
    }
  },
  mobileMenu: {
    nav: document.querySelector("#mobile-dropdown > nav"),
    navWrapper: document.querySelector("#mobile-dropdown"),
    toggleMenuBtn: document.querySelector(".mobile-menu"),
    hamburgerBtn: document.querySelector(".mobile-menu > .hamburger"),
    menuItemsHasChildren: document.querySelectorAll("#mobile-dropdown .menu-item-has-children"),
    fullScreen: document.querySelector("#mobile-fullscreen")
  },
  search: {
    forms: document.querySelectorAll("form.header-searchform"),
    dropDown: {
      toggleSearchBtn: document.querySelector("a.search-dropdown-toggle"),
      form: document.querySelector("#searchform-dropdown")
    },
    headerReplace: {
      toggleSearchBtn: document.querySelector("a.search-header-replace-toggle"),
      closeBtn: document.querySelector("#searchform-header-replace-close"),
      form: document.querySelector("#searchform-header-replace")
    },
    overlay: {
      toggleSearchBtn: document.querySelector("a.search-overlay-toggle"),
      closeBtn: document.querySelector("#searchform-overlay a.search-overlay-close"),
      form: document.querySelector("#searchform-overlay")
    }
  },
  footer: {
    siteFooter: document.querySelector("#footer"),
    calloutFooter: document.querySelector("#footer-callout-wrap"),
    footerBar: document.querySelector("#footer-bar"),
    parallax: document.querySelector(".parallax-footer")
  },
  scroll: {
    scrollTop: document.querySelector("#scroll-top"),
    goTop: document.querySelector('a[href="#go-top"]'),
    goTopSlash: document.querySelector('body.home a[href="/#go-top"]'),
    infiniteScrollNav: document.querySelector(".infinite-scroll-nav"),
    infiniteScrollWrapper: document.querySelector(".infinite-scroll-wrap")
  },
  blog: {
    masonryGrids: document.querySelectorAll(".blog-masonry-grid")
  },
  edd: {
    carts: document.querySelectorAll(".edd-menu-icon"),
    overlayCart: document.querySelector(".owp-cart-overlay"),
    totalPrices: document.querySelectorAll(".eddmenucart-details.total"),
    quickViewModal: document.querySelector("#owp-qv-wrap"),
    quickViewContent: document.querySelector("#owp-qv-content")
  },
  woo: {
    resetVariations: document.querySelector(".reset_variations"),
    product: document.querySelector(".woocommerce div.product"),
    allProducts: document.querySelectorAll(".woocommerce ul.products"),
    categories: document.querySelectorAll(".woo-dropdown-cat .product-categories"),
    verticalThumbs: document.querySelectorAll(".owp-thumbs-layout-vertical"),
    thumbsVerticalLayout: document.querySelector(".owp-thumbs-layout-vertical"),
    grid: document.querySelector(".oceanwp-grid-list #oceanwp-grid"),
    list: document.querySelector(".oceanwp-grid-list #oceanwp-list"),
    productTabs: document.querySelector(".woocommerce div.product .woocommerce-tabs"),
    productCarts: document.querySelectorAll(".woocommerce div.product .cart"),
    productCustomerReviewLink: document.querySelector(".woocommerce div.product .woocommerce-review-link"),
    quantity: document.querySelector('input[name="quantity"]'),
    checkoutForm: document.querySelector("form.woocommerce-checkout"),
    checkoutLogin: document.querySelector("#checkout_login"),
    checkoutCoupon: document.querySelector("#checkout_coupon"),
    checkoutTimeline: document.querySelector("#owp-checkout-timeline"),
    customerBillingDetails: document.querySelector("#customer_billing_details"),
    customerShippingDetails: document.querySelector("#customer_shipping_details"),
    orderReview: document.querySelector("#order_review"),
    orderCheckoutPayment: document.querySelector("#order_checkout_payment"),
    placeOrder: document.querySelector("#place_order"),
    formActions: document.querySelector("#form_actions"),
    overlayCart: document.querySelector(".owp-cart-overlay"),
    guestAccountPageNav: document.querySelector(".owp-account-links"),
    guestAccountPageBox: document.querySelector("#customer_login"),
    quantityInputs: document.querySelectorAll(".quantity:not(.buttons_added) .qty"),
    quickView: {
      modal: document.querySelector("#owp-qv-wrap"),
      content: document.querySelector("#owp-qv-content")
    }
  }
};
exports.DOM = DOM;
var DOMString = {};
exports.DOMString = DOMString;

},{}],2:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("./lib/element");

var _theme = _interopRequireDefault(require("./theme/theme"));

var OceanWP = function OceanWP() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, OceanWP);
  (0, _defineProperty2["default"])(this, "start", function () {
    _this.theme = new _theme["default"]();
  });
};

"use script";
window.oceanwp = new OceanWP();
oceanwp.start();

},{"./lib/element":3,"./theme/theme":29,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/defineProperty":37,"@babel/runtime/helpers/interopRequireDefault":40}],3:[function(require,module,exports){
"use strict";

Element.prototype.oceanParents = function (selector) {
  var elements = [];
  var elem = this;
  var ishaveselector = selector !== undefined;

  while ((elem = elem.parentElement) !== null) {
    if (elem.nodeType !== Node.ELEMENT_NODE) {
      continue;
    }

    if (!ishaveselector || elem.matches(selector)) {
      elements.push(elem);
    }
  }

  return elements;
};

},{}],4:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSelectorValid = exports.isElement = exports.getSiblings = exports.visible = exports.offset = exports.fadeToggle = exports.fadeOut = exports.fadeIn = exports.slideToggle = exports.slideUp = exports.slideDown = exports.wrap = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var wrap = function wrap(element) {
  var wrapper = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.createElement("div");

  if (element.nextSibling) {
    element.parentNode.insertBefore(wrapper, element.nextSibling);
  } else {
    element.parentNode.appendChild(wrapper);
  }

  return wrapper.appendChild(element);
};

exports.wrap = wrap;

var slideDown = function slideDown(element) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var display = window.getComputedStyle(element).display;

  if (display === "none") {
    display = "block";
  }

  element.style.transitionProperty = "height";
  element.style.transitionDuration = "".concat(duration, "ms");
  element.style.opacity = 0;
  element.style.display = display;
  var height = element.offsetHeight;
  element.style.height = 0;
  element.style.opacity = 1;
  element.style.overflow = "hidden";
  setTimeout(function () {
    element.style.height = "".concat(height, "px");
  }, 5);
  window.setTimeout(function () {
    element.style.removeProperty("height");
    element.style.removeProperty("overflow");
    element.style.removeProperty("transition-duration");
    element.style.removeProperty("transition-property");
    element.style.removeProperty("opacity");
  }, duration + 50);
};

exports.slideDown = slideDown;

var slideUp = function slideUp(element) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  element.style.boxSizing = "border-box";
  element.style.transitionProperty = "height, margin";
  element.style.transitionDuration = "".concat(duration, "ms");
  element.style.height = "".concat(element.offsetHeight, "px");
  element.style.marginTop = 0;
  element.style.marginBottom = 0;
  element.style.overflow = "hidden";
  setTimeout(function () {
    element.style.height = 0;
  }, 5);
  window.setTimeout(function () {
    element.style.display = "none";
    element.style.removeProperty("height");
    element.style.removeProperty("margin-top");
    element.style.removeProperty("margin-bottom");
    element.style.removeProperty("overflow");
    element.style.removeProperty("transition-duration");
    element.style.removeProperty("transition-property");
  }, duration + 50);
};

exports.slideUp = slideUp;

var slideToggle = function slideToggle(element, duration) {
  window.getComputedStyle(element).display === "none" ? slideDown(element, duration) : slideUp(element, duration);
};

exports.slideToggle = slideToggle;

var fadeIn = function fadeIn(element) {
  var _options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var options = {
    duration: 300,
    display: null,
    opacity: 1,
    callback: null
  };
  Object.assign(options, _options);
  element.style.opacity = 0;
  element.style.display = options.display || "block";
  setTimeout(function () {
    element.style.transition = "".concat(options.duration, "ms opacity ease");
    element.style.opacity = options.opacity;
  }, 5);
  setTimeout(function () {
    element.style.removeProperty("transition");
    !!options.callback && options.callback();
  }, options.duration + 50);
};

exports.fadeIn = fadeIn;

var fadeOut = function fadeOut(element) {
  var _options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var options = {
    duration: 300,
    display: null,
    opacity: 0,
    callback: null
  };
  Object.assign(options, _options);
  element.style.opacity = 1;
  element.style.display = options.display || "block";
  setTimeout(function () {
    element.style.transition = "".concat(options.duration, "ms opacity ease");
    element.style.opacity = options.opacity;
  }, 5);
  setTimeout(function () {
    element.style.display = "none";
    element.style.removeProperty("transition");
    !!options.callback && options.callback();
  }, options.duration + 50);
};

exports.fadeOut = fadeOut;

var fadeToggle = function fadeToggle(element, options) {
  window.getComputedStyle(element).display === "none" ? fadeIn(element, options) : fadeOut(element, options);
};

exports.fadeToggle = fadeToggle;

var offset = function offset(element) {
  if (!element.getClientRects().length) {
    return {
      top: 0,
      left: 0
    };
  } // Get document-relative position by adding viewport scroll to viewport-relative gBCR


  var rect = element.getBoundingClientRect();
  var win = element.ownerDocument.defaultView;
  return {
    top: rect.top + win.pageYOffset,
    left: rect.left + win.pageXOffset
  };
};

exports.offset = offset;

var visible = function visible(element) {
  if (!element) {
    return false;
  }

  return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
};

exports.visible = visible;

var getSiblings = function getSiblings(e) {
  // for collecting siblings
  var siblings = []; // if no parent, return no sibling

  if (!e.parentNode) {
    return siblings;
  } // first child of the parent node


  var sibling = e.parentNode.firstChild; // collecting siblings

  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling);
    }

    sibling = sibling.nextSibling;
  }

  return siblings;
}; // Returns true if it is a DOM element


exports.getSiblings = getSiblings;

var isElement = function isElement(o) {
  return (typeof HTMLElement === "undefined" ? "undefined" : (0, _typeof2["default"])(HTMLElement)) === "object" ? o instanceof HTMLElement // DOM2
  : o && (0, _typeof2["default"])(o) === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string";
};

exports.isElement = isElement;

var isSelectorValid = function (dummyElement) {
  return function (selector) {
    try {
      dummyElement.querySelector(selector);
    } catch (_unused) {
      return false;
    }

    return true;
  };
}(document.createDocumentFragment());

exports.isSelectorValid = isSelectorValid;

},{"@babel/runtime/helpers/interopRequireDefault":40,"@babel/runtime/helpers/typeof":43}],5:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _constants = require("../../constants");

var BlogMasonry = function BlogMasonry() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, BlogMasonry);
  (0, _defineProperty2["default"])(this, "isotop", void 0);
  (0, _defineProperty2["default"])(this, "start", function () {
    var _DOM$blog$masonryGrid;

    (_DOM$blog$masonryGrid = _constants.DOM.blog.masonryGrids) === null || _DOM$blog$masonryGrid === void 0 ? void 0 : _DOM$blog$masonryGrid.forEach(function (blogMasonryGrid) {
      imagesLoaded(blogMasonryGrid, function (instance) {
        _this.isotop = new Isotope(blogMasonryGrid, {
          itemSelector: ".isotope-entry",
          transformsEnabled: true,
          isOriginLeft: _constants.options.isRTL ? false : true,
          transitionDuration: 0
        });
      });
    });
  });
  this.start();
};

exports["default"] = BlogMasonry;

},{"../../constants":1,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/defineProperty":37,"@babel/runtime/helpers/interopRequireDefault":40}],6:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _responsiveAutoHeight = _interopRequireDefault(require("responsive-auto-height"));

var EqualHeightElements = function EqualHeightElements() {
  (0, _classCallCheck2["default"])(this, EqualHeightElements);
  (0, _defineProperty2["default"])(this, "start", function () {
    if (!!document.querySelector(".blog-equal-heights .blog-entry-inner")) {
      new _responsiveAutoHeight["default"](".blog-equal-heights .blog-entry-inner");
    }

    if (!!document.querySelector(".match-height-grid .match-height-content")) {
      new _responsiveAutoHeight["default"](".match-height-grid .match-height-content");
    }
  });
  this.start();
};

var _default = EqualHeightElements;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/defineProperty":37,"@babel/runtime/helpers/interopRequireDefault":40,"responsive-auto-height":55}],7:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../constants");

var _lastWindowWidth = /*#__PURE__*/new WeakMap();

var _lastWindowHeight = /*#__PURE__*/new WeakMap();

var _footerPositionState = /*#__PURE__*/new WeakMap();

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onWindowLoad = /*#__PURE__*/new WeakMap();

var _onWindowResize = /*#__PURE__*/new WeakMap();

var _fixFooterAtMiddlePage = /*#__PURE__*/new WeakMap();

var _fixedFooter = /*#__PURE__*/new WeakMap();

var _parallaxFooter = /*#__PURE__*/new WeakMap();

var Footer = function Footer() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Footer);

  _lastWindowWidth.set(this, {
    writable: true,
    value: void 0
  });

  _lastWindowHeight.set(this, {
    writable: true,
    value: void 0
  });

  _footerPositionState.set(this, {
    writable: true,
    value: null
  });

  _start.set(this, {
    writable: true,
    value: function value() {
      (0, _classPrivateFieldSet2["default"])(_this, _lastWindowWidth, window.innerWidth);
      (0, _classPrivateFieldSet2["default"])(_this, _lastWindowHeight, window.innerHeight);
    }
  });

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      window.addEventListener("load", (0, _classPrivateFieldGet2["default"])(_this, _onWindowLoad));
      window.addEventListener("resize", (0, _classPrivateFieldGet2["default"])(_this, _onWindowResize));
    }
  });

  _onWindowLoad.set(this, {
    writable: true,
    value: function value(event) {
      (0, _classPrivateFieldGet2["default"])(_this, _fixFooterAtMiddlePage).call(_this);
      (0, _classPrivateFieldGet2["default"])(_this, _fixedFooter).call(_this);
      (0, _classPrivateFieldGet2["default"])(_this, _parallaxFooter).call(_this);
    }
  });

  _onWindowResize.set(this, {
    writable: true,
    value: function value(event) {
      (0, _classPrivateFieldGet2["default"])(_this, _fixFooterAtMiddlePage).call(_this);

      if ((0, _classPrivateFieldGet2["default"])(_this, _lastWindowWidth) !== window.innerWidth || (0, _classPrivateFieldGet2["default"])(_this, _lastWindowHeight) !== window.innerHeight) {
        (0, _classPrivateFieldGet2["default"])(_this, _fixedFooter).call(_this);
      }

      (0, _classPrivateFieldGet2["default"])(_this, _parallaxFooter).call(_this);
    }
  });

  _fixFooterAtMiddlePage.set(this, {
    writable: true,
    value: function value() {
      var _DOM$WPAdminbar$offse, _DOM$WPAdminbar, _DOM$footer$footerBar, _DOM$footer$footerBar2;

      var wpAdminbarHeight = (_DOM$WPAdminbar$offse = (_DOM$WPAdminbar = _constants.DOM.WPAdminbar) === null || _DOM$WPAdminbar === void 0 ? void 0 : _DOM$WPAdminbar.offsetHeight) !== null && _DOM$WPAdminbar$offse !== void 0 ? _DOM$WPAdminbar$offse : 0;
      var footerBarHeight = (_DOM$footer$footerBar = (_DOM$footer$footerBar2 = _constants.DOM.footer.footerBar) === null || _DOM$footer$footerBar2 === void 0 ? void 0 : _DOM$footer$footerBar2.offsetHeight) !== null && _DOM$footer$footerBar !== void 0 ? _DOM$footer$footerBar : 0;
      var htmlHeight = _constants.DOM.html.offsetHeight - wpAdminbarHeight;

      if (htmlHeight < window.innerHeight) {
        _constants.DOM.wrap.style.cssText = "\n                display: flex;\n                flex-direction: column;\n                min-height: calc(100vh - ".concat(wpAdminbarHeight, "px - ").concat(footerBarHeight, "px);\n            ");

        if (!!_constants.DOM.footer.calloutFooter) {
          _constants.DOM.footer.calloutFooter.style.marginTop = "auto";
        } else if (!!_constants.DOM.footer.siteFooter) {
          _constants.DOM.footer.siteFooter.style.marginTop = "auto";
        }

        (0, _classPrivateFieldSet2["default"])(_this, _footerPositionState, "changed");
      } else if ((0, _classPrivateFieldGet2["default"])(_this, _footerPositionState) === "changed") {
        _constants.DOM.wrap.style.cssText = "";

        if (!!_constants.DOM.footer.calloutFooter) {
          _constants.DOM.footer.calloutFooter.style.marginTop = null;
        } else {
          _constants.DOM.footer.siteFooter.style.marginTop = null;
        }

        (0, _classPrivateFieldSet2["default"])(_this, _footerPositionState, null);
      }
    }
  });

  _fixedFooter.set(this, {
    writable: true,
    value: function value() {
      if (!document.body.classList.contains("has-fixed-footer")) {
        return;
      }

      var offset = 0;

      if (!!_constants.DOM.WPAdminbar) {
        offset = _constants.DOM.WPAdminbar.offsetHeight;
      }

      _constants.DOM.main.style.minHeight = _constants.DOM.main.offsetHeight + (window.innerHeight - _constants.DOM.html.offsetHeight - offset) + "px";
    }
  });

  _parallaxFooter.set(this, {
    writable: true,
    value: function value() {
      if (_constants.DOM.body.classList.contains("has-parallax-footer")) {
        setTimeout(function () {
          var _DOM$footer$parallax;

          var mainSectionMarginBottom = 0;
          mainSectionMarginBottom += (_DOM$footer$parallax = _constants.DOM.footer.parallax) === null || _DOM$footer$parallax === void 0 ? void 0 : _DOM$footer$parallax.offsetHeight;

          if (!!_constants.DOM.footer.calloutFooter) {
            _constants.DOM.footer.calloutFooter.style.bottom = "".concat(mainSectionMarginBottom, "px");
            mainSectionMarginBottom += _constants.DOM.footer.calloutFooter.offsetHeight;
          }

          _constants.DOM.main.style.marginBottom = "".concat(mainSectionMarginBottom, "px");
        }, 10);
      }
    }
  });

  if (!_constants.DOM.main) {
    return;
  }

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
  (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
};

exports["default"] = Footer;

},{"../../constants":1,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/classPrivateFieldSet":36,"@babel/runtime/helpers/interopRequireDefault":40}],8:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _vertical = _interopRequireDefault(require("./header/vertical"));

var _start = /*#__PURE__*/new WeakMap();

var Header = function Header() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Header);

  _start.set(this, {
    writable: true,
    value: function value() {
      _this.vertical = new _vertical["default"]();
    }
  });

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
};

var _default = Header;
exports["default"] = _default;

},{"./header/vertical":9,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/interopRequireDefault":40}],9:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../../constants");

var _utils = require("../../../lib/utils");

var _menuItemsPlusIcon = /*#__PURE__*/new WeakMap();

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onMenuItemPlusIconClick = /*#__PURE__*/new WeakMap();

var _onToggleMenuBtnClick = /*#__PURE__*/new WeakMap();

var _onDocumentKeydown = /*#__PURE__*/new WeakMap();

var VerticalHeader = function VerticalHeader() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, VerticalHeader);

  _menuItemsPlusIcon.set(this, {
    writable: true,
    value: void 0
  });

  _start.set(this, {
    writable: true,
    value: function value() {
      _constants.DOM.header.vertical.querySelectorAll("li.menu-item-has-children:not(.btn) > a").forEach(function (menuLink) {
        menuLink.insertAdjacentHTML("beforeend", '<span class="dropdown-toggle" tabindex="0"></span>');
      });

      (0, _classPrivateFieldSet2["default"])(_this, _menuItemsPlusIcon, _constants.options.verticalHeaderTarget == "link" ? _constants.DOM.header.vertical.querySelectorAll("li.menu-item-has-children > a") : _constants.DOM.header.vertical.querySelectorAll(".dropdown-toggle"));
      new PerfectScrollbar(_constants.DOM.header.vertical, {
        wheelSpeed: 0.5,
        suppressScrollX: false,
        suppressScrollY: false
      });
    }
  });

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      (0, _classPrivateFieldGet2["default"])(_this, _menuItemsPlusIcon).forEach(function (menuItemPlusIcon) {
        menuItemPlusIcon.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onMenuItemPlusIconClick));
        menuItemPlusIcon.addEventListener("tap", (0, _classPrivateFieldGet2["default"])(_this, _onMenuItemPlusIconClick));
      });

      _constants.DOM.menu.vertical.toggleMenuBtn.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onToggleMenuBtnClick));

      document.addEventListener("keydown", (0, _classPrivateFieldGet2["default"])(_this, _onDocumentKeydown));
    }
  });

  _onMenuItemPlusIconClick.set(this, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();
      var menuItemPlusIcon = event.currentTarget;
      var menuItem = _constants.options.verticalHeaderTarget == "link" ? menuItemPlusIcon.parentNode : menuItemPlusIcon.parentNode.parentNode;
      var subMenu = menuItem.lastElementChild;

      if (!(menuItem !== null && menuItem !== void 0 && menuItem.classList.contains("active"))) {
        menuItem.classList.add("active");
        (0, _utils.slideDown)(subMenu, 250);
      } else {
        var _menuItem$querySelect;

        menuItem.classList.remove("active");
        (0, _utils.slideUp)(subMenu, 250);
        (_menuItem$querySelect = menuItem.querySelectorAll(".menu-item-has-children.active")) === null || _menuItem$querySelect === void 0 ? void 0 : _menuItem$querySelect.forEach(function (openMenuItem) {
          openMenuItem.classList.remove("active");
          (0, _utils.slideUp)(openMenuItem.querySelector("ul"), 250);
        });
      }
    }
  });

  _onToggleMenuBtnClick.set(this, {
    writable: true,
    value: function value(event) {
      event.preventDefault();

      if (!_constants.DOM.body.classList.contains("vh-opened")) {
        _constants.DOM.body.classList.add("vh-opened");

        _constants.DOM.menu.vertical.toggleMenuBtn.querySelector(".hamburger").classList.add("is-active");
      } else {
        _constants.DOM.body.classList.remove("vh-opened");

        _constants.DOM.menu.vertical.toggleMenuBtn.querySelector(".hamburger").classList.remove("is-active");
      }

      _constants.DOM.menu.vertical.toggleMenuBtn.focus();
    }
  });

  _onDocumentKeydown.set(this, {
    writable: true,
    value: function value(event) {
      var _DOM$header$vertical;

      var tabKey = event.keyCode === 9;
      var shiftKey = event.shiftKey;
      var escKey = event.keyCode === 27;
      var enterKey = event.keyCode === 13;
      var navElements = (_DOM$header$vertical = _constants.DOM.header.vertical) === null || _DOM$header$vertical === void 0 ? void 0 : _DOM$header$vertical.querySelectorAll("a, span.dropdown-toggle, input, button");
      var navFirstElement = navElements ? navElements[0] : "";
      var navLastElement = navElements ? navElements[navElements.length - 1] : "";
      navLastElement.style.outline = "";

      if (_constants.DOM.body.classList.contains("vertical-header-style")) {
        if (!_constants.DOM.body.classList.contains("vh-closed")) {
          if (enterKey && document.activeElement.classList.contains("dropdown-toggle")) {
            document.activeElement.click();
          }
        }

        if (!_constants.DOM.body.classList.contains("vh-opened")) {
          return;
        }
      }

      if (escKey) {
        event.preventDefault();
        (0, _classPrivateFieldGet2["default"])(_this, _onToggleMenuBtnClick).call(_this, event);
      }

      if (enterKey && document.activeElement.classList.contains("dropdown-toggle") && _constants.DOM.body.classList.contains("vh-closed")) {
        document.activeElement.click();
      }

      if (!shiftKey && tabKey && navLastElement === document.activeElement) {
        event.preventDefault();
        navFirstElement.focus();
      } // If there are no elements in the menu, don't move the focus


      if (tabKey && navFirstElement === navLastElement) {
        event.preventDefault();
      }
    }
  });

  if (!_constants.DOM.header.vertical) {
    return;
  }

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
  (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
};

var _default = VerticalHeader;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":4,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/classPrivateFieldSet":36,"@babel/runtime/helpers/interopRequireDefault":40}],10:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _utils = require("../../lib/utils");

var _fullScreen = _interopRequireDefault(require("./menu/full-screen"));

var _mega = _interopRequireDefault(require("./menu/mega"));

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onNoClickMenuItemClick = /*#__PURE__*/new WeakMap();

var _onParentMenuItemMouseenter = /*#__PURE__*/new WeakMap();

var _onParentMenuItemMouseleave = /*#__PURE__*/new WeakMap();

var Menu = function Menu() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Menu);

  _start.set(this, {
    writable: true,
    value: function value() {
      _this.fullScreen = new _fullScreen["default"]();
      _this.mega = new _mega["default"]();
    }
  });

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      document.querySelectorAll("li.nav-no-click > a").forEach(function (noClickMenuItem) {
        noClickMenuItem.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onNoClickMenuItemClick));
      });
      document.querySelectorAll("ul.sf-menu").forEach(function (menu) {
        var parentMenuItems = menu.querySelectorAll(".menu-item-has-children");
        parentMenuItems.forEach(function (parentMenuItem) {
          parentMenuItem.addEventListener("mouseenter", (0, _classPrivateFieldGet2["default"])(_this, _onParentMenuItemMouseenter));
          parentMenuItem.addEventListener("mouseleave", (0, _classPrivateFieldGet2["default"])(_this, _onParentMenuItemMouseleave));
        });
      });
    }
  });

  _onNoClickMenuItemClick.set(this, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();
    }
  });

  _onParentMenuItemMouseenter.set(this, {
    writable: true,
    value: function value(event) {
      var parentMenuItem = event.currentTarget;
      var subMenu = parentMenuItem.querySelector("ul.sub-menu");
      parentMenuItem.classList.add("sfHover");
      (0, _utils.fadeIn)(subMenu);
    }
  });

  _onParentMenuItemMouseleave.set(this, {
    writable: true,
    value: function value(event) {
      var parentMenuItem = event.currentTarget;
      var subMenu = parentMenuItem.querySelector("ul.sub-menu");
      parentMenuItem.classList.remove("sfHover");
      (0, _utils.fadeOut)(subMenu);
    }
  });

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
  (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
};

var _default = Menu;
exports["default"] = _default;

},{"../../lib/utils":4,"./menu/full-screen":11,"./menu/mega":12,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/interopRequireDefault":40}],11:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../../constants");

var _utils = require("../../../lib/utils");

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onToggleMenuBtnClick = /*#__PURE__*/new WeakMap();

var _onMenuLinkClick = /*#__PURE__*/new WeakMap();

var _onMenuHashtagLinkClick = /*#__PURE__*/new WeakMap();

var _openMenu = /*#__PURE__*/new WeakMap();

var _closeMenu = /*#__PURE__*/new WeakMap();

var _onDocumentKeydown = /*#__PURE__*/new WeakMap();

var FullScreenMenu = function FullScreenMenu() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, FullScreenMenu);

  _start.set(this, {
    writable: true,
    value: function value() {
      _constants.DOM.menu.fullScreen.menu.querySelectorAll(".nav-arrow").forEach(function (plusBtn) {
        plusBtn.setAttribute("tabindex", 0);
      });
    }
  });

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      var _document$querySelect;

      _constants.DOM.menu.fullScreen.toggleMenuBtn.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onToggleMenuBtnClick));

      (_document$querySelect = document.querySelectorAll('#full-screen-menu #site-navigation ul > li.dropdown > a > .text-wrap > span.nav-arrow, #full-screen-menu #site-navigation ul > li.dropdown > a[href="#"]')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.forEach(function (menuItemLink) {
        menuItemLink.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onMenuLinkClick));
        menuItemLink.addEventListener("tap", (0, _classPrivateFieldGet2["default"])(_this, _onMenuLinkClick));
      });
      document.querySelectorAll('#full-screen-menu #site-navigation a.menu-link[href*="#"]:not([href="#"])').forEach(function (menuItemLink) {
        menuItemLink.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onMenuHashtagLinkClick));
      });
      document.addEventListener("keydown", (0, _classPrivateFieldGet2["default"])(_this, _onDocumentKeydown));
    }
  });

  _onToggleMenuBtnClick.set(this, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      var toggleMenuBtn = event.currentTarget;

      if (!toggleMenuBtn.classList.contains("exit")) {
        (0, _classPrivateFieldGet2["default"])(_this, _openMenu).call(_this);
      } else {
        (0, _classPrivateFieldGet2["default"])(_this, _closeMenu).call(_this);
      }
    }
  });

  _onMenuLinkClick.set(this, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();
      var menuItemLink = event.currentTarget;
      var menuItem = menuItemLink.closest("li.dropdown");
      var subMenu = menuItem.querySelector("ul.sub-menu");

      if (!(window.getComputedStyle(subMenu).display === "none")) {
        menuItem.classList.remove("open-sub");
        (0, _utils.slideUp)(subMenu, 250);
      } else {
        menuItem.classList.add("open-sub");
        (0, _utils.slideDown)(subMenu, 250);
      }
    }
  });

  _onMenuHashtagLinkClick.set(this, {
    writable: true,
    value: function value(event) {
      (0, _classPrivateFieldGet2["default"])(_this, _closeMenu).call(_this);
    }
  });

  _openMenu.set(this, {
    writable: true,
    value: function value() {
      var _DOM$menu$fullScreen$;

      _constants.DOM.header.fullScreen.classList.add("nav-open");

      _constants.DOM.menu.fullScreen.toggleMenuBtn.classList.add("exit");

      (_DOM$menu$fullScreen$ = _constants.DOM.menu.fullScreen.logo) === null || _DOM$menu$fullScreen$ === void 0 ? void 0 : _DOM$menu$fullScreen$.classList.add("opened");

      _constants.DOM.menu.fullScreen.menu.classList.add("active");

      (0, _utils.fadeIn)(_constants.DOM.menu.fullScreen.menu);
      var htmlWidthBeforeOverflowHidden = _constants.DOM.html.innerWidth;
      _constants.DOM.html.style.overflow = "hidden";
      var htmlWidthAfterOverflowHidden = _constants.DOM.html.innerWidth;
      _constants.DOM.html.style.marginRight = htmlWidthBeforeOverflowHidden - htmlWidthAfterOverflowHidden + "px";
    }
  });

  _closeMenu.set(this, {
    writable: true,
    value: function value() {
      var _DOM$menu$fullScreen$2;

      _constants.DOM.header.fullScreen.classList.remove("nav-open");

      _constants.DOM.menu.fullScreen.toggleMenuBtn.classList.remove("exit");

      (_DOM$menu$fullScreen$2 = _constants.DOM.menu.fullScreen.logo) === null || _DOM$menu$fullScreen$2 === void 0 ? void 0 : _DOM$menu$fullScreen$2.classList.remove("opened");

      _constants.DOM.menu.fullScreen.menu.classList.remove("active");

      (0, _utils.fadeOut)(_constants.DOM.menu.fullScreen.menu);
      _constants.DOM.html.style.overflow = "";
      _constants.DOM.html.style.marginRight = "";
      document.querySelectorAll("#full-screen-menu #site-navigation ul > li.dropdown").forEach(function (menuItem) {
        menuItem.classList.remove("open-sub");
      });
      document.querySelectorAll("#full-screen-menu #site-navigation ul.sub-menu").forEach(function (subMenu) {
        (0, _utils.slideUp)(subMenu, 250);
      });
    }
  });

  _onDocumentKeydown.set(this, {
    writable: true,
    value: function value(event) {
      var _DOM$menu$fullScreen$3;

      if (!((_DOM$menu$fullScreen$3 = _constants.DOM.menu.fullScreen.menu) !== null && _DOM$menu$fullScreen$3 !== void 0 && _DOM$menu$fullScreen$3.classList.contains("active"))) {
        return;
      }

      var tabKey = event.keyCode === 9;
      var shiftKey = event.shiftKey;
      var escKey = event.keyCode === 27;
      var enterKey = event.keyCode === 13;
      var closeIcon = _constants.DOM.menu.fullScreen.toggleMenuBtn;

      var navElements = _constants.DOM.menu.fullScreen.menu.querySelector("nav").querySelectorAll("a, span.nav-arrow, input, button");

      var navFirstElement = navElements[0];
      var navLastElement = navElements[navElements.length - 1];
      closeIcon.style.outline = "";

      if (escKey) {
        event.preventDefault();
        (0, _classPrivateFieldGet2["default"])(_this, _closeMenu).call(_this);
      }

      if (enterKey && document.activeElement.classList.contains("nav-arrow")) {
        event.preventDefault();
        document.activeElement.click();
      }

      if (!shiftKey && tabKey && navLastElement === document.activeElement) {
        event.preventDefault();
        closeIcon.style.outline = "1px dashed rgba(255, 255, 255, 0.6)";
        closeIcon.focus();
      }

      if (shiftKey && tabKey && navFirstElement === document.activeElement) {
        event.preventDefault();
        closeIcon.style.outline = "1px dashed rgba(255, 255, 255, 0.6)";
        closeIcon.focus();
      } // If there are no elements in the menu, don't move the focus


      if (tabKey && navFirstElement === navLastElement) {
        event.preventDefault();
      }
    }
  });

  if (!_constants.DOM.menu.fullScreen.toggleMenuBtn) {
    return;
  }

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
  (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
};

var _default = FullScreenMenu;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":4,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/interopRequireDefault":40}],12:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../../constants");

var _utils = require("../../../lib/utils");

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onMenuItemMouseEnter = /*#__PURE__*/new WeakMap();

var _onTopbarMenuItemMouseEnter = /*#__PURE__*/new WeakMap();

var _menuItemMouseEnter = /*#__PURE__*/new WeakMap();

var MegaMenu = function MegaMenu() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, MegaMenu);

  _start.set(this, {
    writable: true,
    value: function value() {
      _constants.DOM.menu.mega.menuContents.forEach(function (menuContent) {
        var menuItem = menuContent.parentNode;
        var menuItemLeftOffset = (0, _utils.offset)(menuItem).left;
        var menuContentWidth = parseInt(window.getComputedStyle(menuContent).width);
        var horizontalPosition;
        var horizontalMargin;

        if (menuItemLeftOffset - menuContentWidth / 2 < 0) {
          horizontalPosition = menuItemLeftOffset - 10;
          horizontalMargin = 0;
        } else {
          horizontalPosition = menuContentWidth / 2;
          horizontalMargin = menuItem.offsetWidth / 2;
        }

        if (!_constants.options.isRTL) {
          menuContent.style.left = "-".concat(horizontalPosition, "px");
          menuContent.style.marginLeft = "".concat(horizontalMargin, "px");
        } else {
          menuContent.style.right = "-".concat(horizontalPosition, "px");
          menuContent.style.marginRight = "".concat(horizontalMargin, "px");
        }

        if (window.innerWidth - menuItemLeftOffset - horizontalPosition + horizontalMargin + menuContentWidth < 0) {
          menuContent.style.left = "auto";
          menuContent.style.right = "-".concat(window.innerWidth - menuItemLeftOffset - menuItem.offsetWidth - 10, "px");
        }
      });
    }
  });

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      _constants.DOM.menu.mega.menuItems.forEach(function (menuItem) {
        menuItem.addEventListener("mouseenter", (0, _classPrivateFieldGet2["default"])(_this, _onMenuItemMouseEnter));
      }); // Topbar menu items


      _constants.DOM.menu.mega.topbarMenuItems.forEach(function (menuItem) {
        menuItem.addEventListener("mouseenter", (0, _classPrivateFieldGet2["default"])(_this, _onTopbarMenuItemMouseEnter));
      });
    }
  });

  _onMenuItemMouseEnter.set(this, {
    writable: true,
    value: function value(event) {
      var wrapper = _constants.DOM.header.site.classList.contains("medium-header") ? document.querySelector("#site-navigation-wrap > .container") : document.querySelector("#site-header-inner");
      (0, _classPrivateFieldGet2["default"])(_this, _menuItemMouseEnter).call(_this, wrapper, event);
    }
  });

  _onTopbarMenuItemMouseEnter.set(this, {
    writable: true,
    value: function value(event) {
      var wrapper = _constants.DOM.header.topbar;
      (0, _classPrivateFieldGet2["default"])(_this, _menuItemMouseEnter).call(_this, wrapper, event);
    }
  });

  _menuItemMouseEnter.set(this, {
    writable: true,
    value: function value(wrapper, event) {
      var menuItem = event.currentTarget;
      var content = menuItem.querySelector(".megamenu");
      var leftPosition = parseInt((0, _utils.offset)(menuItem).left - (0, _utils.offset)(wrapper).left + 1);

      if (!content) {
        return;
      }

      if (_constants.DOM.body.classList.contains("boxed-layout")) {
        leftPosition = leftPosition - 30;
      }

      content.style.left = "-".concat(leftPosition, "px");
      content.style.width = "".concat(wrapper.offsetWidth, "px");
    }
  });

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
  (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
};

var _default = MegaMenu;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":4,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/interopRequireDefault":40}],13:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _dropDown = _interopRequireDefault(require("./mobile-menu/drop-down"));

var _fullScreen = _interopRequireDefault(require("./mobile-menu/full-screen"));

var _sidebar = _interopRequireDefault(require("./mobile-menu/sidebar"));

var _start = /*#__PURE__*/new WeakMap();

var MobileMenu = function MobileMenu() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, MobileMenu);

  _start.set(this, {
    writable: true,
    value: function value() {
      _this.dropDown = new _dropDown["default"]();
      _this.fullScreen = new _fullScreen["default"]();
      _this.sidebar = new _sidebar["default"]();
    }
  });

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
};

var _default = MobileMenu;
exports["default"] = _default;

},{"./mobile-menu/drop-down":14,"./mobile-menu/full-screen":15,"./mobile-menu/sidebar":16,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/interopRequireDefault":40}],14:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _classPrivateFieldGet3 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _delegate = _interopRequireDefault(require("delegate"));

var _constants = require("../../../constants");

var _utils = require("../../../lib/utils");

var _isMenuOpen = /*#__PURE__*/new WeakMap();

var _menuItemsToggleIcon = /*#__PURE__*/new WeakMap();

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onToggleMenuButtonClick = /*#__PURE__*/new WeakMap();

var _onMenuCloseClick = /*#__PURE__*/new WeakMap();

var _onWindowResize = /*#__PURE__*/new WeakMap();

var _onHamburgerClick = /*#__PURE__*/new WeakMap();

var _onMenuItemPlusIconClick = /*#__PURE__*/new WeakMap();

var _onDocumentKeydown = /*#__PURE__*/new WeakMap();

var DropDownMobileMenu = function DropDownMobileMenu() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, DropDownMobileMenu);

  _isMenuOpen.set(this, {
    writable: true,
    value: void 0
  });

  _menuItemsToggleIcon.set(this, {
    writable: true,
    value: void 0
  });

  _start.set(this, {
    writable: true,
    value: function value() {
      var _DOM$mobileMenu$menuI, _DOM$mobileMenu$navWr, _DOM$mobileMenu$navWr2;

      (0, _classPrivateFieldSet2["default"])(_this, _isMenuOpen, false);
      (_DOM$mobileMenu$menuI = _constants.DOM.mobileMenu.menuItemsHasChildren) === null || _DOM$mobileMenu$menuI === void 0 ? void 0 : _DOM$mobileMenu$menuI.forEach(function (menuItem) {
        var span = document.createElement("span");
        span.className = "dropdown-toggle";
        span.setAttribute("tabindex", 0);
        menuItem.getElementsByTagName("a")[0].appendChild(span);
      });
      (0, _classPrivateFieldSet2["default"])(_this, _menuItemsToggleIcon, _constants.options.sidrDropdownTarget == "link" ? (_DOM$mobileMenu$navWr = _constants.DOM.mobileMenu.navWrapper) === null || _DOM$mobileMenu$navWr === void 0 ? void 0 : _DOM$mobileMenu$navWr.querySelectorAll("li.menu-item-has-children > a") : (_DOM$mobileMenu$navWr2 = _constants.DOM.mobileMenu.navWrapper) === null || _DOM$mobileMenu$navWr2 === void 0 ? void 0 : _DOM$mobileMenu$navWr2.querySelectorAll(".dropdown-toggle"));
    }
  });

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      var _DOM$mobileMenu$navWr3, _DOM$mobileMenu$navWr4, _DOM$mobileMenu$hambu, _classPrivateFieldGet2;

      (0, _delegate["default"])(document.body, ".mobile-menu", "click", (0, _classPrivateFieldGet3["default"])(_this, _onToggleMenuButtonClick));
      (_DOM$mobileMenu$navWr3 = _constants.DOM.mobileMenu.navWrapper) === null || _DOM$mobileMenu$navWr3 === void 0 ? void 0 : _DOM$mobileMenu$navWr3.querySelectorAll('li a[href*="#"]:not([href="#"])').forEach(function (menuItemLink) {
        menuItemLink.addEventListener("click", (0, _classPrivateFieldGet3["default"])(_this, _onMenuCloseClick));
      });
      document.addEventListener("click", (0, _classPrivateFieldGet3["default"])(_this, _onMenuCloseClick));
      (_DOM$mobileMenu$navWr4 = _constants.DOM.mobileMenu.navWrapper) === null || _DOM$mobileMenu$navWr4 === void 0 ? void 0 : _DOM$mobileMenu$navWr4.addEventListener("click", function (event) {
        event.stopPropagation();
      });
      window.addEventListener("resize", (0, _classPrivateFieldGet3["default"])(_this, _onWindowResize));
      (_DOM$mobileMenu$hambu = _constants.DOM.mobileMenu.hamburgerBtn) === null || _DOM$mobileMenu$hambu === void 0 ? void 0 : _DOM$mobileMenu$hambu.addEventListener("click", (0, _classPrivateFieldGet3["default"])(_this, _onHamburgerClick));
      (_classPrivateFieldGet2 = (0, _classPrivateFieldGet3["default"])(_this, _menuItemsToggleIcon)) === null || _classPrivateFieldGet2 === void 0 ? void 0 : _classPrivateFieldGet2.forEach(function (menuItemPlusIcon) {
        menuItemPlusIcon.addEventListener("click", (0, _classPrivateFieldGet3["default"])(_this, _onMenuItemPlusIconClick));
      });
      document.addEventListener("keydown", (0, _classPrivateFieldGet3["default"])(_this, _onDocumentKeydown));
    }
  });

  _onToggleMenuButtonClick.set(this, {
    writable: true,
    value: function value(event) {
      var _DOM$mobileMenu$toggl, _DOM$mobileMenu$hambu2, _DOM$mobileMenu$toggl2;

      event.preventDefault();
      event.stopPropagation();
      !!_constants.DOM.mobileMenu.navWrapper && (0, _utils.slideToggle)(_constants.DOM.mobileMenu.navWrapper, 400);
      (_DOM$mobileMenu$toggl = _constants.DOM.mobileMenu.toggleMenuBtn) === null || _DOM$mobileMenu$toggl === void 0 ? void 0 : _DOM$mobileMenu$toggl.classList.toggle("opened");
      (_DOM$mobileMenu$hambu2 = _constants.DOM.mobileMenu.hamburgerBtn) === null || _DOM$mobileMenu$hambu2 === void 0 ? void 0 : _DOM$mobileMenu$hambu2.classList.toggle("is-active");
      (_DOM$mobileMenu$toggl2 = _constants.DOM.mobileMenu.toggleMenuBtn) === null || _DOM$mobileMenu$toggl2 === void 0 ? void 0 : _DOM$mobileMenu$toggl2.focus();
    }
  });

  _onMenuCloseClick.set(this, {
    writable: true,
    value: function value(event) {
      var _DOM$mobileMenu$toggl3, _DOM$mobileMenu$hambu3;

      !!_constants.DOM.mobileMenu.navWrapper && (0, _utils.slideUp)(_constants.DOM.mobileMenu.navWrapper, 250);
      (_DOM$mobileMenu$toggl3 = _constants.DOM.mobileMenu.toggleMenuBtn) === null || _DOM$mobileMenu$toggl3 === void 0 ? void 0 : _DOM$mobileMenu$toggl3.classList.remove("opened");
      (_DOM$mobileMenu$hambu3 = _constants.DOM.mobileMenu.hamburgerBtn) === null || _DOM$mobileMenu$hambu3 === void 0 ? void 0 : _DOM$mobileMenu$hambu3.classList.remove("is-active");
    }
  });

  _onWindowResize.set(this, {
    writable: true,
    value: function value(event) {
      if (window.innerWidth >= 960) {
        (0, _classPrivateFieldGet3["default"])(_this, _onMenuCloseClick).call(_this);
      }
    }
  });

  _onHamburgerClick.set(this, {
    writable: true,
    value: function value(event) {
      (0, _classPrivateFieldSet2["default"])(_this, _isMenuOpen, !(0, _classPrivateFieldGet3["default"])(_this, _isMenuOpen));
      event.currentTarget.setAttribute("aria-expanded", (0, _classPrivateFieldGet3["default"])(_this, _isMenuOpen));
    }
  });

  _onMenuItemPlusIconClick.set(this, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();
      var menuItemPlusIcon = event.currentTarget;
      var menuItem = _constants.options.sidrDropdownTarget == "link" ? menuItemPlusIcon.parentNode : menuItemPlusIcon.parentNode.parentNode;
      var subMenu = menuItem.lastElementChild;

      if (!(menuItem !== null && menuItem !== void 0 && menuItem.classList.contains("active"))) {
        menuItem.classList.add("active");
        (0, _utils.slideDown)(subMenu, 250);
      } else {
        var _menuItem$querySelect;

        menuItem.classList.remove("active");
        (0, _utils.slideUp)(subMenu, 250);
        (_menuItem$querySelect = menuItem.querySelectorAll(".menu-item-has-children.active")) === null || _menuItem$querySelect === void 0 ? void 0 : _menuItem$querySelect.forEach(function (openMenuItem) {
          openMenuItem.classList.remove("active");
          (0, _utils.slideUp)(openMenuItem.querySelector("ul"));
        });
      }
    }
  });

  _onDocumentKeydown.set(this, {
    writable: true,
    value: function value(event) {
      var _DOM$mobileMenu$toggl4, _DOM$mobileMenu$nav;

      if (!((_DOM$mobileMenu$toggl4 = _constants.DOM.mobileMenu.toggleMenuBtn) !== null && _DOM$mobileMenu$toggl4 !== void 0 && _DOM$mobileMenu$toggl4.classList.contains("opened"))) {
        return;
      }

      var tabKey = event.keyCode === 9;
      var shiftKey = event.shiftKey;
      var escKey = event.keyCode === 27;
      var enterKey = event.keyCode === 13;
      var closeIcon = _constants.DOM.mobileMenu.toggleMenuBtn;
      var navElements = (_DOM$mobileMenu$nav = _constants.DOM.mobileMenu.nav) === null || _DOM$mobileMenu$nav === void 0 ? void 0 : _DOM$mobileMenu$nav.querySelectorAll("a, span.dropdown-toggle, input, button");
      var navFirstElement = navElements[0];
      var navLastElement = navElements[navElements.length - 1];

      if (!!closeIcon) {
        closeIcon.style.outline = "";
      }

      if (escKey) {
        event.preventDefault();
        (0, _classPrivateFieldGet3["default"])(_this, _onMenuCloseClick).call(_this);
      }

      if (enterKey && document.activeElement.classList.contains("dropdown-toggle")) {
        event.preventDefault();
        document.activeElement.click();
      }

      if (!shiftKey && tabKey && navLastElement === document.activeElement) {
        event.preventDefault();
        closeIcon.style.outline = "1px dashed rgba(255, 255, 255, 0.6)";
        closeIcon.focus();
      }

      if (shiftKey && tabKey && navFirstElement === document.activeElement) {
        event.preventDefault();
        closeIcon.style.outline = "1px dashed rgba(255, 255, 255, 0.6)";
        closeIcon.focus();
      } // If there are no elements in the menu, don't move the focus


      if (tabKey && navFirstElement === navLastElement) {
        event.preventDefault();
      }
    }
  });

  if (!_constants.DOM.body.classList.contains("dropdown-mobile")) {
    return;
  }

  (0, _classPrivateFieldGet3["default"])(this, _start).call(this);
  (0, _classPrivateFieldGet3["default"])(this, _setupEventListeners).call(this);
};

var _default = DropDownMobileMenu;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":4,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/classPrivateFieldSet":36,"@babel/runtime/helpers/interopRequireDefault":40,"delegate":45}],15:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _delegate = _interopRequireDefault(require("delegate"));

var _constants = require("../../../constants");

var _utils = require("../../../lib/utils");

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onMenuButtonClick = /*#__PURE__*/new WeakMap();

var _onCloseIconClick = /*#__PURE__*/new WeakMap();

var _closeMenu = /*#__PURE__*/new WeakMap();

var _onWindowResize = /*#__PURE__*/new WeakMap();

var _onDropownToggleIcon = /*#__PURE__*/new WeakMap();

var _onDocumentKeydown = /*#__PURE__*/new WeakMap();

var FullScreenMobileMenu = function FullScreenMobileMenu() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, FullScreenMobileMenu);

  _start.set(this, {
    writable: true,
    value: function value() {
      var _DOM$mobileMenu$fullS, _DOM$mobileMenu$fullS2;

      (_DOM$mobileMenu$fullS = _constants.DOM.mobileMenu.fullScreen) === null || _DOM$mobileMenu$fullS === void 0 ? void 0 : (_DOM$mobileMenu$fullS2 = _DOM$mobileMenu$fullS.querySelectorAll(".menu-item-has-children > a")) === null || _DOM$mobileMenu$fullS2 === void 0 ? void 0 : _DOM$mobileMenu$fullS2.forEach(function (menuItemLink) {
        menuItemLink.insertAdjacentHTML("beforeend", '<span class="dropdown-toggle" tabindex=0></span>');
      });
    }
  });

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      window.addEventListener("resize", (0, _classPrivateFieldGet2["default"])(_this, _onWindowResize));
      (0, _delegate["default"])(document.body, ".mobile-menu", "click", (0, _classPrivateFieldGet2["default"])(_this, _onMenuButtonClick));
      document.querySelectorAll('#mobile-fullscreen nav ul > li.menu-item-has-children > a > span.dropdown-toggle, #mobile-fullscreen nav ul > li.menu-item-has-children > a[href="#"]').forEach(function (menuItemLink) {
        menuItemLink.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onDropownToggleIcon));
        menuItemLink.addEventListener("tap", (0, _classPrivateFieldGet2["default"])(_this, _onDropownToggleIcon));
      });
      document.querySelectorAll('#mobile-fullscreen .fs-dropdown-menu li a[href*="#"]:not([href="#"]), #mobile-fullscreen #mobile-nav li a[href*="#"]:not([href="#"]), #mobile-fullscreen a.close').forEach(function (menuItemLink) {
        menuItemLink.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onCloseIconClick));
      });
      document.addEventListener("keydown", (0, _classPrivateFieldGet2["default"])(_this, _onDocumentKeydown));
    }
  });

  _onMenuButtonClick.set(this, {
    writable: true,
    value: function value(event) {
      var _DOM$mobileMenu$hambu;

      event.preventDefault();
      event.stopPropagation();

      _constants.DOM.mobileMenu.toggleMenuBtn.classList.add("exit");

      _constants.DOM.mobileMenu.fullScreen.classList.add("active");

      (_DOM$mobileMenu$hambu = _constants.DOM.mobileMenu.hamburgerBtn) === null || _DOM$mobileMenu$hambu === void 0 ? void 0 : _DOM$mobileMenu$hambu.classList.add("is-active");
      (0, _utils.fadeIn)(_constants.DOM.mobileMenu.fullScreen);
      var htmlWidthBeforeOverflowHidden = _constants.DOM.html.innerWidth;
      _constants.DOM.html.style.overflow = "hidden";
      var htmlWidthAfterOverflowHidden = _constants.DOM.html.innerWidth;
      _constants.DOM.html.style.marginRight = htmlWidthAfterOverflowHidden - htmlWidthBeforeOverflowHidden + "px";

      _constants.DOM.mobileMenu.fullScreen.querySelector("a.close").focus();
    }
  });

  _onCloseIconClick.set(this, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      (0, _classPrivateFieldGet2["default"])(_this, _closeMenu).call(_this);
    }
  });

  _closeMenu.set(this, {
    writable: true,
    value: function value() {
      if ((0, _utils.visible)(_constants.DOM.mobileMenu.fullScreen)) {
        var _DOM$mobileMenu$hambu2;

        _constants.DOM.mobileMenu.toggleMenuBtn.classList.remove("exit");

        _constants.DOM.mobileMenu.fullScreen.classList.remove("active");

        (0, _utils.fadeOut)(_constants.DOM.mobileMenu.fullScreen);
        _constants.DOM.html.style.overflow = "";
        _constants.DOM.html.style.marginRight = "";
        document.querySelectorAll("#mobile-fullscreen nav ul > li.dropdown").forEach(function (menuItem) {
          menuItem.classList.remove("open-sub");
        });
        document.querySelectorAll("#mobile-fullscreen nav ul.sub-menu").forEach(function (subMenu) {
          (0, _utils.slideUp)(subMenu, 250);
        });
        (_DOM$mobileMenu$hambu2 = _constants.DOM.mobileMenu.hamburgerBtn) === null || _DOM$mobileMenu$hambu2 === void 0 ? void 0 : _DOM$mobileMenu$hambu2.classList.remove("is-active");
      }
    }
  });

  _onWindowResize.set(this, {
    writable: true,
    value: function value(event) {
      if (window.innerWidth >= 960) {
        (0, _classPrivateFieldGet2["default"])(_this, _closeMenu).call(_this);
      }
    }
  });

  _onDropownToggleIcon.set(this, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();
      var menuItemLink = event.currentTarget;
      var menuItem = menuItemLink.closest("li.menu-item-has-children");
      var subMenu = menuItem.querySelector("ul.sub-menu");

      if (!(window.getComputedStyle(subMenu).display === "none")) {
        menuItem.classList.remove("open-sub");
        (0, _utils.slideUp)(subMenu, 250);
      } else {
        menuItem.classList.add("open-sub");
        (0, _utils.slideDown)(subMenu, 250);
      }
    }
  });

  _onDocumentKeydown.set(this, {
    writable: true,
    value: function value(event) {
      var _DOM$mobileMenu$fullS3;

      if (!((_DOM$mobileMenu$fullS3 = _constants.DOM.mobileMenu.fullScreen) !== null && _DOM$mobileMenu$fullS3 !== void 0 && _DOM$mobileMenu$fullS3.classList.contains("active"))) {
        return;
      }

      var tabKey = event.keyCode === 9;
      var shiftKey = event.shiftKey;
      var escKey = event.keyCode === 27;
      var enterKey = event.keyCode === 13;

      var closeIcon = _constants.DOM.mobileMenu.fullScreen.querySelector("a.close");

      var navElements = _constants.DOM.mobileMenu.fullScreen.querySelector("nav").querySelectorAll("a, span.dropdown-toggle, input, button");

      var navFirstElement = navElements[0];
      var navLastElement = navElements[navElements.length - 1];
      closeIcon.style.outline = "";

      if (escKey) {
        event.preventDefault();
        (0, _classPrivateFieldGet2["default"])(_this, _closeMenu).call(_this);
      }

      if (enterKey && document.activeElement.classList.contains("dropdown-toggle")) {
        event.preventDefault();
        document.activeElement.click();
      }

      if (!shiftKey && tabKey && navLastElement === document.activeElement) {
        event.preventDefault();
        closeIcon.style.outline = "1px dashed rgba(255, 255, 255, 0.6)";
        closeIcon.focus();
      }

      if (shiftKey && tabKey && navFirstElement === document.activeElement) {
        event.preventDefault();
        closeIcon.style.outline = "1px dashed rgba(255, 255, 255, 0.6)";
        closeIcon.focus();
      } // If there are no elements in the menu, don't move the focus


      if (tabKey && navFirstElement === navLastElement) {
        event.preventDefault();
      }
    }
  });

  if (!_constants.DOM.body.classList.contains("fullscreen-mobile")) {
    return;
  }

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
  (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
};

var _default = FullScreenMobileMenu;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":4,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/interopRequireDefault":40,"delegate":45}],16:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _classPrivateFieldGet4 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _delegate = _interopRequireDefault(require("delegate"));

var _constants = require("../../../constants");

var _utils = require("../../../lib/utils");

var _isMenuOpen = /*#__PURE__*/new WeakMap();

var _menuItemsPlusIcon = /*#__PURE__*/new WeakMap();

var _sidebarToggleMenuBtn = /*#__PURE__*/new WeakMap();

var _start = /*#__PURE__*/new WeakMap();

var _startSidrPlugin = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onHamburgerBtnClick = /*#__PURE__*/new WeakMap();

var _onSidebarCloseMenuBtnClick = /*#__PURE__*/new WeakMap();

var _onMenuItemPlusIconClick = /*#__PURE__*/new WeakMap();

var _onWindowResize = /*#__PURE__*/new WeakMap();

var _onDocumentKeydown = /*#__PURE__*/new WeakMap();

var _closeSidr = /*#__PURE__*/new WeakMap();

var SidebarMobileMenu = function SidebarMobileMenu() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, SidebarMobileMenu);

  _isMenuOpen.set(this, {
    writable: true,
    value: void 0
  });

  _menuItemsPlusIcon.set(this, {
    writable: true,
    value: void 0
  });

  _sidebarToggleMenuBtn.set(this, {
    writable: true,
    value: void 0
  });

  _start.set(this, {
    writable: true,
    value: function value() {
      (0, _classPrivateFieldSet2["default"])(_this, _isMenuOpen, false);
      (0, _classPrivateFieldGet4["default"])(_this, _startSidrPlugin).call(_this);

      if (!document.querySelector(".sidr-class-dropdown-toggle")) {
        document.querySelectorAll(".sidr-class-menu-item-has-children > a").forEach(function (menuItemLink) {
          menuItemLink.insertAdjacentHTML("beforeend", '<span class="sidr-class-dropdown-toggle" tabindex=0></span>');
        });
      }

      (0, _classPrivateFieldSet2["default"])(_this, _menuItemsPlusIcon, _constants.options.sidrDropdownTarget == "link" ? document.querySelectorAll("li.sidr-class-menu-item-has-children > a") : document.querySelectorAll(".sidr-class-dropdown-toggle"));
    }
  });

  _startSidrPlugin.set(this, {
    writable: true,
    value: function value() {
      sidr["new"](".mobile-menu", {
        name: "sidr",
        source: _constants.options.sidrSource,
        side: _constants.options.sidrSide,
        displace: _constants.options.sidrDisplace,
        speed: 300,
        renaming: true,
        timing: "ease",
        bind: "click",
        onOpen: function onOpen() {
          var _DOM$mobileMenu$hambu;

          document.querySelector("a.sidr-class-toggle-sidr-close").focus();
          (_DOM$mobileMenu$hambu = _constants.DOM.mobileMenu.hamburgerBtn) === null || _DOM$mobileMenu$hambu === void 0 ? void 0 : _DOM$mobileMenu$hambu.classList.add("is-active");

          _constants.DOM.header.site.insertAdjacentHTML("afterend", '<div class="oceanwp-sidr-overlay" tabindex=0></div>');

          var overlay = document.querySelector(".oceanwp-sidr-overlay");
          (0, _utils.fadeIn)(overlay);
          overlay.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();
            sidr.close("sidr");
          });
        },
        onClose: function onClose() {
          var _DOM$mobileMenu$hambu2;

          (_DOM$mobileMenu$hambu2 = _constants.DOM.mobileMenu.hamburgerBtn) === null || _DOM$mobileMenu$hambu2 === void 0 ? void 0 : _DOM$mobileMenu$hambu2.classList.remove("is-active");
          document.querySelectorAll(".sidr-class-menu-item-has-children.active > ul").forEach(function (subMenuActive) {
            subMenuActive.style.display = "none";
          });
          document.querySelectorAll(".sidr-class-menu-item-has-children.active").forEach(function (menuItemActive) {
            menuItemActive.classList.remove("active");
          });
          var overlay = document.querySelector(".oceanwp-sidr-overlay");
          (0, _utils.fadeOut)(overlay);
          setTimeout(function () {
            overlay.remove();
          });
        }
      });
      document.querySelectorAll('#sidr [class*="sidr-class-fa"]').forEach(function (icon) {
        icon.className = icon.className.replace(/\bsidr-class-fa.*?\b/g, "fa");
      });
      document.querySelectorAll('#sidr [class*="sidr-class-icon"]').forEach(function (icon) {
        icon.className = icon.className.replace(/\bsidr-class-icon-.*?\b/g, "icon-");
      });
      (0, _classPrivateFieldSet2["default"])(_this, _sidebarToggleMenuBtn, document.querySelector("a.sidr-class-toggle-sidr-close"));
    }
  });

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      var _DOM$mobileMenu$hambu3, _classPrivateFieldGet2, _classPrivateFieldGet3, _document$querySelect;

      (_DOM$mobileMenu$hambu3 = _constants.DOM.mobileMenu.hamburgerBtn) === null || _DOM$mobileMenu$hambu3 === void 0 ? void 0 : _DOM$mobileMenu$hambu3.addEventListener("click", (0, _classPrivateFieldGet4["default"])(_this, _onHamburgerBtnClick));
      (_classPrivateFieldGet2 = (0, _classPrivateFieldGet4["default"])(_this, _sidebarToggleMenuBtn)) === null || _classPrivateFieldGet2 === void 0 ? void 0 : _classPrivateFieldGet2.addEventListener("click", (0, _classPrivateFieldGet4["default"])(_this, _onSidebarCloseMenuBtnClick));
      (_classPrivateFieldGet3 = (0, _classPrivateFieldGet4["default"])(_this, _menuItemsPlusIcon)) === null || _classPrivateFieldGet3 === void 0 ? void 0 : _classPrivateFieldGet3.forEach(function (menuItemPlusIcon) {
        menuItemPlusIcon.addEventListener("click", (0, _classPrivateFieldGet4["default"])(_this, _onMenuItemPlusIconClick));
        menuItemPlusIcon.addEventListener("touchend", (0, _classPrivateFieldGet4["default"])(_this, _onMenuItemPlusIconClick));
      });
      (0, _delegate["default"])(document.body, '.sidr-class-dropdown-menu a[href*="#"]:not([href="#"]), .sidr-class-menu-item > a[href*="#"]:not([href="#"])', "click", (0, _classPrivateFieldGet4["default"])(_this, _closeSidr));
      (0, _delegate["default"])(document.body, '.sidr-class-dropdown-menu a[href*="#"]:not([href="#"]), .sidr-class-menu-item > a[href*="#"]:not([href="#"])', "touchend", (0, _classPrivateFieldGet4["default"])(_this, _closeSidr));
      (_document$querySelect = document.querySelectorAll("li.sidr-class-nav-no-click > a")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.forEach(function (menuItemLink) {
        menuItemLink.addEventListener("click", function (event) {
          event.preventDefault();
          event.stopPropagation();
        });
      });
      document.addEventListener("keydown", (0, _classPrivateFieldGet4["default"])(_this, _onDocumentKeydown));
      window.addEventListener("resize", (0, _classPrivateFieldGet4["default"])(_this, _onWindowResize));
    }
  });

  _onHamburgerBtnClick.set(this, {
    writable: true,
    value: function value(event) {
      (0, _classPrivateFieldSet2["default"])(_this, _isMenuOpen, !(0, _classPrivateFieldGet4["default"])(_this, _isMenuOpen));
      event.currentTarget.setAttribute("aria-expanded", (0, _classPrivateFieldGet4["default"])(_this, _isMenuOpen));
    }
  });

  _onSidebarCloseMenuBtnClick.set(this, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();
      (0, _classPrivateFieldGet4["default"])(_this, _closeSidr).call(_this);
      (0, _classPrivateFieldGet4["default"])(_this, _sidebarToggleMenuBtn).classList.remove("opened");
    }
  });

  _onMenuItemPlusIconClick.set(this, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();
      var menuItemPlusIcon = event.currentTarget;
      var menuItem = _constants.options.sidrDropdownTarget == "link" ? menuItemPlusIcon.parentNode : menuItemPlusIcon.parentNode.parentNode;
      var subMenu = menuItem.lastElementChild;

      if (!(menuItem !== null && menuItem !== void 0 && menuItem.classList.contains("active"))) {
        menuItem.classList.add("active");
        (0, _utils.slideDown)(subMenu, 250);
      } else {
        var _menuItem$querySelect;

        menuItem.classList.remove("active");
        (0, _utils.slideUp)(subMenu, 250);
        (_menuItem$querySelect = menuItem.querySelectorAll(".sidr-class-menu-item-has-children.active")) === null || _menuItem$querySelect === void 0 ? void 0 : _menuItem$querySelect.forEach(function (openMenuItem) {
          openMenuItem.classList.remove("active");
          (0, _utils.slideUp)(openMenuItem.querySelector("ul"));
        });
      }
    }
  });

  _onWindowResize.set(this, {
    writable: true,
    value: function value(event) {
      if (window.innerWidth >= 960) {
        (0, _classPrivateFieldGet4["default"])(_this, _closeSidr).call(_this);
      }
    }
  });

  _onDocumentKeydown.set(this, {
    writable: true,
    value: function value(event) {
      if (!_constants.DOM.body.classList.contains("sidr-open")) {
        return;
      }

      event.stopPropagation();
      var tabKey = event.keyCode === 9;
      var shiftKey = event.shiftKey;
      var escKey = event.keyCode === 27;
      var enterKey = event.keyCode === 13;
      var closeIcon = (0, _classPrivateFieldGet4["default"])(_this, _sidebarToggleMenuBtn);
      var navElements = document.querySelector("#sidr").querySelectorAll("a, span.sidr-class-dropdown-toggle, input, button");
      var navFirstElement = navElements[0];
      var navLastElement = navElements[navElements.length - 1];
      closeIcon.style.outline = "";

      if (escKey) {
        event.preventDefault();
        (0, _classPrivateFieldGet4["default"])(_this, _closeSidr).call(_this);
      }

      if (enterKey && document.activeElement.classList.contains("sidr-class-dropdown-toggle")) {
        event.preventDefault();
        document.activeElement.click();
      }

      if (!shiftKey && tabKey && navLastElement === document.activeElement) {
        event.preventDefault();
        closeIcon.style.outline = "1px dashed rgba(255, 255, 255, 0.6)";
        closeIcon.focus();
      }

      if (shiftKey && tabKey && navFirstElement === document.activeElement) {
        event.preventDefault();
        closeIcon.style.outline = "1px dashed rgba(255, 255, 255, 0.6)";
        closeIcon.focus();
      } // If there are no elements in the menu, don't move the focus


      if (tabKey && navFirstElement === navLastElement) {
        event.preventDefault();
      }
    }
  });

  _closeSidr.set(this, {
    writable: true,
    value: function value() {
      var _DOM$mobileMenu$hambu4;

      sidr.close("sidr");
      (_DOM$mobileMenu$hambu4 = _constants.DOM.mobileMenu.hamburgerBtn) === null || _DOM$mobileMenu$hambu4 === void 0 ? void 0 : _DOM$mobileMenu$hambu4.classList.remove("is-active");
    }
  });

  if (typeof _constants.options.sidrSource !== "undefined" && _constants.DOM.body.classList.contains("sidebar-mobile")) {
    (0, _classPrivateFieldGet4["default"])(this, _start).call(this);
    (0, _classPrivateFieldGet4["default"])(this, _setupEventListeners).call(this);
  }
};

var _default = SidebarMobileMenu;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":4,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/classPrivateFieldSet":36,"@babel/runtime/helpers/interopRequireDefault":40,"delegate":45}],17:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../constants");

var _utils = require("../../lib/utils");

var _infiniteScroll2 = _interopRequireDefault(require("infinite-scroll"));

var _infiniteScroll = /*#__PURE__*/new WeakMap();

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var OWInfiniteScroll = function OWInfiniteScroll() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, OWInfiniteScroll);

  _infiniteScroll.set(this, {
    writable: true,
    value: void 0
  });

  _start.set(this, {
    writable: true,
    value: function value() {
      (0, _classPrivateFieldSet2["default"])(_this, _infiniteScroll, new _infiniteScroll2["default"](_constants.DOM.scroll.infiniteScrollWrapper, {
        path: ".older-posts a",
        append: ".item-entry",
        status: ".scroller-status",
        hideNav: ".infinite-scroll-nav",
        history: false,
        prefill: true,
        scrollThreshold: 500
      }));
    }
  });

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      (0, _classPrivateFieldGet2["default"])(_this, _infiniteScroll).on("load", function (body, path, response) {
        var _this2 = this;

        var items = body.querySelectorAll(".item-entry");

        if (this.element.classList.contains("blog-masonry-grid")) {
          items.forEach(function (item) {
            (0, _utils.fadeOut)(item);
          });
        }

        imagesLoaded(items, function () {
          // Blog masonry isotope
          if (_this2.element.classList.contains("blog-masonry-grid")) {
            oceanwp.theme.blogMasonry.isotop.appended(items); // Fix Gallery posts

            if (!!_this2.element.querySelector(".gallery-format")) {
              setTimeout(function () {
                oceanwp.theme.blogMasonry.isotop.layout();
              }, 600 + 1);
            }
          } // Equal height elements


          if (!_constants.DOM.body.classList.contains("no-matchheight")) {
            oceanwp.theme.equalHeightElements.start();
          } // Gallery posts slider


          if (!_constants.DOM.body.classList.contains("no-carousel")) {
            oceanwp.theme.owSlider.start(_this2.element.querySelectorAll(".gallery-format, .product-entry-slider"));
          }

          if (!document.body.classList.contains("no-lightbox")) {
            oceanwp.theme.owLightbox.initSingleImageLightbox();
            oceanwp.theme.owLightbox.initGalleryLightbox();
          } // Force the images to be parsed to fix Safari issue


          items.forEach(function (item) {
            var _item$querySelectorAl;

            (_item$querySelectorAl = item.querySelectorAll("img")) === null || _item$querySelectorAl === void 0 ? void 0 : _item$querySelectorAl.forEach(function (img) {
              img.outerHTML = img.outerHTML;
            });
          });
        });
      });
      (0, _classPrivateFieldGet2["default"])(_this, _infiniteScroll).on("append", function (body, path, items, response) {
        if (this.element.classList.contains("blog-masonry-grid")) {
          items.forEach(function (item) {
            (0, _utils.fadeIn)(item);
          });
        }
      });
    }
  });

  if (!!_constants.DOM.scroll.infiniteScrollNav && !!_constants.DOM.scroll.infiniteScrollNav.querySelector(".older-posts a")) {
    (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
    (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
  }
};

var _default = OWInfiniteScroll;
exports["default"] = _default;

},{"../../constants":1,"../../lib/utils":4,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/classPrivateFieldSet":36,"@babel/runtime/helpers/interopRequireDefault":40,"infinite-scroll":49}],18:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../constants");

var _addLightboxClass = /*#__PURE__*/new WeakMap();

var _imageFormats = /*#__PURE__*/new WeakMap();

var OWLightbox = function OWLightbox() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, OWLightbox);
  (0, _defineProperty2["default"])(this, "start", function () {
    if (_constants.DOM.body.classList.contains("no-lightbox")) {
      return;
    }

    (0, _classPrivateFieldGet2["default"])(_this, _addLightboxClass).call(_this);

    _this.initSingleImageLightbox();

    _this.initGalleryLightbox();
  });
  (0, _defineProperty2["default"])(this, "initSingleImageLightbox", function () {
    var _document$querySelect;

    (_document$querySelect = document.querySelectorAll(".oceanwp-lightbox")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
      });
    });
    jQuery(".oceanwp-lightbox").magnificPopup({
      type: "image",
      mainClass: "mfp-with-zoom",
      zoom: {
        enabled: true,
        duration: 300,
        easing: "ease-in-out",
        opener: function opener(openerElement) {
          return openerElement.is("img") ? openerElement : openerElement.find("img");
        }
      }
    });
  });
  (0, _defineProperty2["default"])(this, "initGalleryLightbox", function () {
    jQuery(".wp-block-gallery, .gallery-format, .gallery").magnificPopup({
      delegate: ".gallery-lightbox:not(.slick-cloned)",
      type: "image",
      mainClass: "mfp-fade",
      gallery: {
        enabled: true
      }
    });
  });

  _addLightboxClass.set(this, {
    writable: true,
    value: function value() {
      var _document$querySelect2;

      (_document$querySelect2 = document.querySelectorAll("body .entry-content a, body .entry a, body article .gallery-format a")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.forEach(function (link) {
        if (!!link.querySelector("img")) {
          var imageFormats = (0, _classPrivateFieldGet2["default"])(_this, _imageFormats).call(_this);
          var imageFormatsMask = 0;
          imageFormats.forEach(function (imageFormat) {
            imageFormatsMask += String(link.getAttribute("href")).indexOf("." + imageFormat);
          });

          if (imageFormatsMask === -13) {
            link.classList.add("no-lightbox");
          }

          if (!(link.classList.contains("no-lightbox") || link.classList.contains("gallery-lightbox") || link.parentNode.classList.contains("gallery-icon") || link.classList.contains("woo-lightbox") || link.classList.contains("woo-thumbnail") || link.parentNode.classList.contains("woocommerce-product-gallery__image") || !!link.closest(".wp-block-gallery") || !!link.getAttribute("data-elementor-open-lightbox") || link.classList.contains("yith_magnifier_thumbnail") || link.classList.contains("gg-link"))) {
            link.classList.add("oceanwp-lightbox");
          }

          if (!link.classList.contains("no-lightbox")) {
            if (link.parentNode.classList.contains("gallery-icon") || !!link.closest(".wp-block-gallery")) {
              link.classList.add("gallery-lightbox");
            }
          }
        }
      });
    }
  });

  _imageFormats.set(this, {
    writable: true,
    value: function value() {
      return ["bmp", "gif", "jpeg", "jpg", "png", "tiff", "tif", "jfif", "jpe", "svg", "mp4", "ogg", "webm"];
    }
  });

  this.start();
};

var _default = OWLightbox;
exports["default"] = _default;

},{"../../constants":1,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/defineProperty":37,"@babel/runtime/helpers/interopRequireDefault":40}],19:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _constants = require("../../constants");

var OWSlider = function OWSlider() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, OWSlider);
  (0, _defineProperty2["default"])(this, "flickity", void 0);
  (0, _defineProperty2["default"])(this, "start", function () {
    var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelectorAll(".gallery-format, .product-entry-slider");
    _this.flickity = [];
    elements === null || elements === void 0 ? void 0 : elements.forEach(function (element) {
      var flickity = new Flickity(element, {
        autoPlay: element.classList.contains("woo-entry-image") ? false : 6000,
        rightToLeft: _constants.DOM.body.classList.contains("rtl") ? true : false,
        imagesLoaded: true,
        // contain: true,
        pageDots: false,
        on: {
          ready: function ready() {
            element.style.opacity = 1;
            element.style.visibility = "visible";
            element.style.height = "auto";
          }
        }
      });

      _this.flickity.push(flickity);
    });
  });
  this.start();
};

var _default = OWSlider;
exports["default"] = _default;

},{"../../constants":1,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/defineProperty":37,"@babel/runtime/helpers/interopRequireDefault":40}],20:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../constants");

var _utils = require("../../lib/utils");

var _targetElem = /*#__PURE__*/new WeakMap();

var _lastScrollTop = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onScrollItemClick = /*#__PURE__*/new WeakMap();

var _getAdminBarHeight = /*#__PURE__*/new WeakMap();

var _getTopbarHeight = /*#__PURE__*/new WeakMap();

var _getStickyHeaderHeight = /*#__PURE__*/new WeakMap();

var _fixMultiMenu = /*#__PURE__*/new WeakMap();

var ScrollEffect = function ScrollEffect() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, ScrollEffect);

  _targetElem.set(this, {
    writable: true,
    value: void 0
  });

  _lastScrollTop.set(this, {
    writable: true,
    value: 0
  });

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      document.querySelectorAll('a[href*="#"]:not([href="#"]), a.local[href*="#"]:not([href="#"]), .local a[href*="#"]:not([href="#"]), a.menu-link[href*="#"]:not([href="#"]), a.sidr-class-menu-link[href*="#"]:not([href="#"])').forEach(function (scrollItem) {
        scrollItem.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onScrollItemClick));
      });
    }
  });

  _onScrollItemClick.set(this, {
    writable: true,
    value: function value(event) {
      var scrollItem = event.currentTarget;

      if (!scrollItem.classList.contains("omw-open-modal") && !scrollItem.closest(".omw-open-modal") && !scrollItem.classList.contains("opl-link") && !scrollItem.parentNode.classList.contains("opl-link") && !scrollItem.classList.contains("sidr-class-opl-link") && !scrollItem.parentNode.classList.contains("sidr-class-opl-link")) {
        var href = scrollItem.getAttribute("href");
        var id = href.substring(href.indexOf("#")).slice(1);

        if ((0, _utils.isSelectorValid)("#".concat(id))) {
          (0, _classPrivateFieldSet2["default"])(_this, _targetElem, document.querySelector("#".concat(id)));
        }

        if (id != "" && !!(0, _classPrivateFieldGet2["default"])(_this, _targetElem)) {
          event.preventDefault();
          event.stopPropagation();
          var scrollPosition = (0, _utils.offset)((0, _classPrivateFieldGet2["default"])(_this, _targetElem)).top - (0, _classPrivateFieldGet2["default"])(_this, _getAdminBarHeight).call(_this) - (0, _classPrivateFieldGet2["default"])(_this, _getTopbarHeight).call(_this) - (0, _classPrivateFieldGet2["default"])(_this, _getStickyHeaderHeight).call(_this);

          _constants.DOM.html.scrollTo({
            top: scrollPosition,
            behavior: "smooth"
          });

          if (!!_constants.DOM.header.site && !_constants.DOM.header.site.classList.contains("top-header") && !_constants.DOM.header.site.classList.contains("medium-header") && !_constants.DOM.header.site.classList.contains("vertical-header")) {
            window.addEventListener("scroll", (0, _classPrivateFieldGet2["default"])(_this, _fixMultiMenu));
          }
        }
      }
    }
  });

  _getAdminBarHeight.set(this, {
    writable: true,
    value: function value() {
      return !!_constants.DOM.WPAdminbar ? _constants.DOM.WPAdminbar.offsetHeight : 0;
    }
  });

  _getTopbarHeight.set(this, {
    writable: true,
    value: function value() {
      return !!_constants.DOM.header.topbarWrapper && _constants.DOM.header.topbarWrapper.classList.contains("top-bar-sticky") ? _constants.DOM.header.topbarWrapper.offsetHeight : 0;
    }
  });

  _getStickyHeaderHeight.set(this, {
    writable: true,
    value: function value() {
      var _document$querySelect;

      var stickyHeader = document.querySelector("#site-header-sticky-wrapper");

      if (!!stickyHeader) {
        var _DOM$header$site, _DOM$header$site2, _DOM$header$site3, _DOM$header$site4, _DOM$header$site$data, _DOM$header$site5;

        if ((_DOM$header$site = _constants.DOM.header.site) !== null && _DOM$header$site !== void 0 && _DOM$header$site.classList.contains("top-header")) {
          return Number.parseInt(getComputedStyle(stickyHeader).height);
        }

        if ((_DOM$header$site2 = _constants.DOM.header.site) !== null && _DOM$header$site2 !== void 0 && _DOM$header$site2.classList.contains("medium-header")) {
          var height = 0;

          var menu = _constants.DOM.header.site.querySelector(".bottom-header-wrap");

          if (menu.classList.contains("fixed-scroll")) {
            height = menu.offsetHeight;
          } else if (_constants.DOM.header.site.classList.contains("hidden-menu")) {
            height = _constants.DOM.header.site.dataset.height;
          } else {
            height = _constants.DOM.header.site.offsetHeight;
          }

          return height;
        }

        if ((_DOM$header$site3 = _constants.DOM.header.site) !== null && _DOM$header$site3 !== void 0 && _DOM$header$site3.classList.contains("fixed-header")) {
          return _constants.DOM.header.site.offsetHeight;
        }

        if ((_DOM$header$site4 = _constants.DOM.header.site) !== null && _DOM$header$site4 !== void 0 && _DOM$header$site4.classList.contains("up-effect")) {
          return 0;
        }

        return (_DOM$header$site$data = (_DOM$header$site5 = _constants.DOM.header.site) === null || _DOM$header$site5 === void 0 ? void 0 : _DOM$header$site5.dataset.height) !== null && _DOM$header$site$data !== void 0 ? _DOM$header$site$data : 54;
      }

      if (!!document.querySelector("#stick-anything-header")) {
        return document.querySelector("#stick-anything-header").offsetHeight;
      }

      if (!_constants.DOM.header.site && !!((_document$querySelect = document.querySelector(".elementor-section-wrap")) !== null && _document$querySelect !== void 0 && _document$querySelect.firstElementChild.classList.contains("elementor-sticky"))) {
        var _document$querySelect2;

        return (_document$querySelect2 = document.querySelector(".elementor-section-wrap")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.firstElementChild.offsetHeight;
      }

      return 0;
    }
  });

  _fixMultiMenu.set(this, {
    writable: true,
    value: function value(event) {
      var fixedOffset = (0, _utils.offset)((0, _classPrivateFieldGet2["default"])(_this, _targetElem)).top - (0, _classPrivateFieldGet2["default"])(_this, _getAdminBarHeight).call(_this) - (0, _classPrivateFieldGet2["default"])(_this, _getTopbarHeight).call(_this) - (0, _classPrivateFieldGet2["default"])(_this, _getStickyHeaderHeight).call(_this);

      if (window.pageYOffset.toFixed() === fixedOffset.toFixed()) {
        var _DOM$header$site6;

        window.removeEventListener("scroll", (0, _classPrivateFieldGet2["default"])(_this, _fixMultiMenu));

        if (((_DOM$header$site6 = _constants.DOM.header.site) === null || _DOM$header$site6 === void 0 ? void 0 : _DOM$header$site6.offsetHeight) - 1 > (0, _classPrivateFieldGet2["default"])(_this, _getStickyHeaderHeight).call(_this)) {
          var _DOM$header$site7;

          var scrollPosition = (0, _utils.offset)((0, _classPrivateFieldGet2["default"])(_this, _targetElem)).top - (0, _classPrivateFieldGet2["default"])(_this, _getAdminBarHeight).call(_this) - (0, _classPrivateFieldGet2["default"])(_this, _getTopbarHeight).call(_this) - ((_DOM$header$site7 = _constants.DOM.header.site) === null || _DOM$header$site7 === void 0 ? void 0 : _DOM$header$site7.offsetHeight);

          _constants.DOM.html.scrollTo({
            top: scrollPosition,
            behavior: window.pageYOffset > (0, _classPrivateFieldGet2["default"])(_this, _lastScrollTop) ? "smooth" : "auto"
          });

          (0, _classPrivateFieldSet2["default"])(_this, _lastScrollTop, window.pageYOffset);
        }
      }
    }
  });

  if (!_constants.DOM.body.classList.contains("single-product") && !_constants.DOM.body.classList.contains("no-local-scroll")) {
    (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
  }
};

var _default = ScrollEffect;
exports["default"] = _default;

},{"../../constants":1,"../../lib/utils":4,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/classPrivateFieldSet":36,"@babel/runtime/helpers/interopRequireDefault":40}],21:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../constants");

var _utils = require("../../lib/utils");

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onWindowScroll = /*#__PURE__*/new WeakMap();

var _onScrollTopClick = /*#__PURE__*/new WeakMap();

var ScrollTop = function ScrollTop() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, ScrollTop);

  _start.set(this, {
    writable: true,
    value: function value() {}
  });

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      var _DOM$scroll$scrollTop, _DOM$scroll$goTop, _DOM$scroll$goTopSlas;

      window.addEventListener("scroll", (0, _classPrivateFieldGet2["default"])(_this, _onWindowScroll));
      (_DOM$scroll$scrollTop = _constants.DOM.scroll.scrollTop) === null || _DOM$scroll$scrollTop === void 0 ? void 0 : _DOM$scroll$scrollTop.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onScrollTopClick));
      (_DOM$scroll$goTop = _constants.DOM.scroll.goTop) === null || _DOM$scroll$goTop === void 0 ? void 0 : _DOM$scroll$goTop.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onScrollTopClick));
      (_DOM$scroll$goTopSlas = _constants.DOM.scroll.goTopSlash) === null || _DOM$scroll$goTopSlas === void 0 ? void 0 : _DOM$scroll$goTopSlas.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onScrollTopClick));
    }
  });

  _onWindowScroll.set(this, {
    writable: true,
    value: function value(event) {
      if (!_constants.DOM.scroll.scrollTop) {
        return;
      }

      if (window.pageYOffset > 100) {
        if (window.getComputedStyle(_constants.DOM.scroll.scrollTop).display === "none") {
          (0, _utils.fadeIn)(_constants.DOM.scroll.scrollTop);
        }
      } else if (window.getComputedStyle(_constants.DOM.scroll.scrollTop).display !== "none") {
        (0, _utils.fadeOut)(_constants.DOM.scroll.scrollTop);
      }
    }
  });

  _onScrollTopClick.set(this, {
    writable: true,
    value: function value(event) {
      var _scrollTop$parentNode;

      event.preventDefault();
      var scrollTop = event.currentTarget;

      _constants.DOM.html.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      (_scrollTop$parentNode = scrollTop.parentNode) === null || _scrollTop$parentNode === void 0 ? void 0 : _scrollTop$parentNode.classList.remove("sfHover");
    }
  });

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
  (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
};

exports["default"] = ScrollTop;

},{"../../constants":1,"../../lib/utils":4,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/interopRequireDefault":40}],22:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../constants");

var _dropDown = _interopRequireDefault(require("./search/drop-down"));

var _headerReplace = _interopRequireDefault(require("./search/header-replace"));

var _mobileSearchIcon = _interopRequireDefault(require("./search/mobile-search-icon"));

var _overlay = _interopRequireDefault(require("./search/overlay"));

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onInputKeyup = /*#__PURE__*/new WeakMap();

var Search = function Search() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Search);
  (0, _defineProperty2["default"])(this, "mobileOverlayInput", void 0);

  _start.set(this, {
    writable: true,
    value: function value() {
      var _this$mobileOverlayIn;

      _this.dropDown = new _dropDown["default"]();
      _this.headerReplace = new _headerReplace["default"]();
      _this.overlay = new _overlay["default"]();
      _this.mobileSearchIcon = new _mobileSearchIcon["default"]();
      _this.mobileOverlayInput = document.querySelector(".mobile-search-overlay-input");

      _constants.DOM.search.forms.forEach(function (form) {
        var _form$querySelector;

        if ((_form$querySelector = form.querySelector("input")) !== null && _form$querySelector !== void 0 && _form$querySelector.value) {
          form.classList.add("search-filled");
        }
      });

      if (!!((_this$mobileOverlayIn = _this.mobileOverlayInput) !== null && _this$mobileOverlayIn !== void 0 && _this$mobileOverlayIn.value)) {
        _this.mobileOverlayInput.closest("form").classList.add("search-filled");
      }
    }
  });

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      var _this$mobileOverlayIn2, _this$mobileOverlayIn3;

      _constants.DOM.search.forms.forEach(function (form) {
        var _form$querySelector2, _form$querySelector3;

        (_form$querySelector2 = form.querySelector("input")) === null || _form$querySelector2 === void 0 ? void 0 : _form$querySelector2.addEventListener("keyup", (0, _classPrivateFieldGet2["default"])(_this, _onInputKeyup));
        (_form$querySelector3 = form.querySelector("input")) === null || _form$querySelector3 === void 0 ? void 0 : _form$querySelector3.addEventListener("blur", (0, _classPrivateFieldGet2["default"])(_this, _onInputKeyup));
      });

      (_this$mobileOverlayIn2 = _this.mobileOverlayInput) === null || _this$mobileOverlayIn2 === void 0 ? void 0 : _this$mobileOverlayIn2.addEventListener("keyup", (0, _classPrivateFieldGet2["default"])(_this, _onInputKeyup));
      (_this$mobileOverlayIn3 = _this.mobileOverlayInput) === null || _this$mobileOverlayIn3 === void 0 ? void 0 : _this$mobileOverlayIn3.addEventListener("blur", (0, _classPrivateFieldGet2["default"])(_this, _onInputKeyup));
    }
  });

  _onInputKeyup.set(this, {
    writable: true,
    value: function value(event) {
      var input = event.currentTarget;
      var form = input.closest("form");

      if (input.value) {
        form.classList.add("search-filled");
      } else {
        form.classList.remove("search-filled");
      }
    }
  });

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
  (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
};

var _default = Search;
exports["default"] = _default;

},{"../../constants":1,"./search/drop-down":24,"./search/header-replace":25,"./search/mobile-search-icon":26,"./search/overlay":27,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/defineProperty":37,"@babel/runtime/helpers/interopRequireDefault":40}],23:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var SearchBase = function SearchBase() {
  (0, _classCallCheck2["default"])(this, SearchBase);
  (0, _defineProperty2["default"])(this, "focus", function (form, inputClass) {
    var formTransitionDuration = parseFloat(getComputedStyle(form).transitionDuration.replace("s", "")) * 1000;
    formTransitionDuration = !!formTransitionDuration ? formTransitionDuration : 600;

    if (formTransitionDuration) {
      setTimeout(function () {
        form.querySelector(inputClass).focus();
      }, formTransitionDuration);
    }
  });
};

var _default = SearchBase;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/defineProperty":37,"@babel/runtime/helpers/interopRequireDefault":40}],24:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../../constants");

var _base = _interopRequireDefault(require("./base"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onToggleSearchBtnClick = /*#__PURE__*/new WeakMap();

var _onDocumentClick = /*#__PURE__*/new WeakMap();

var DropDownSearch = /*#__PURE__*/function (_SearchBase) {
  (0, _inherits2["default"])(DropDownSearch, _SearchBase);

  var _super = _createSuper(DropDownSearch);

  function DropDownSearch() {
    var _this;

    (0, _classCallCheck2["default"])(this, DropDownSearch);
    _this = _super.call(this);

    _setupEventListeners.set((0, _assertThisInitialized2["default"])(_this), {
      writable: true,
      value: function value() {
        var _DOM$search$dropDown$;

        (_DOM$search$dropDown$ = _constants.DOM.search.dropDown.toggleSearchBtn) === null || _DOM$search$dropDown$ === void 0 ? void 0 : _DOM$search$dropDown$.addEventListener("click", (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _onToggleSearchBtnClick));
        document.addEventListener("click", (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _onDocumentClick));
      }
    });

    _onToggleSearchBtnClick.set((0, _assertThisInitialized2["default"])(_this), {
      writable: true,
      value: function value(event) {
        event.preventDefault();
        event.stopPropagation();
        var _DOM$search$dropDown = _constants.DOM.search.dropDown,
            toggleSearchBtn = _DOM$search$dropDown.toggleSearchBtn,
            form = _DOM$search$dropDown.form;
        toggleSearchBtn.parentNode.classList.toggle("active");
        form.classList.toggle("show");

        _this.focus(form, "input.field");
      }
    });

    _onDocumentClick.set((0, _assertThisInitialized2["default"])(_this), {
      writable: true,
      value: function value(event) {
        // Collaps search form
        if (!event.target.closest("#searchform-dropdown.show")) {
          var _DOM$search$dropDown$2, _DOM$search$dropDown$3, _DOM$search$dropDown$4;

          (_DOM$search$dropDown$2 = _constants.DOM.search.dropDown.form) === null || _DOM$search$dropDown$2 === void 0 ? void 0 : _DOM$search$dropDown$2.classList.remove("show");
          (_DOM$search$dropDown$3 = _constants.DOM.search.dropDown.toggleSearchBtn) === null || _DOM$search$dropDown$3 === void 0 ? void 0 : (_DOM$search$dropDown$4 = _DOM$search$dropDown$3.parentNode) === null || _DOM$search$dropDown$4 === void 0 ? void 0 : _DOM$search$dropDown$4.classList.remove("active");
        }
      }
    });

    if (_constants.options.menuSearchStyle !== "drop_down") {
      return (0, _possibleConstructorReturn2["default"])(_this);
    }

    (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _setupEventListeners).call((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  return DropDownSearch;
}(_base["default"]);

var _default = DropDownSearch;
exports["default"] = _default;

},{"../../../constants":1,"./base":23,"@babel/runtime/helpers/assertThisInitialized":30,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/getPrototypeOf":38,"@babel/runtime/helpers/inherits":39,"@babel/runtime/helpers/interopRequireDefault":40,"@babel/runtime/helpers/possibleConstructorReturn":41}],25:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../../constants");

var _base = _interopRequireDefault(require("./base"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onToggleSearchBtnClick = /*#__PURE__*/new WeakMap();

var _onCloseBtnClick = /*#__PURE__*/new WeakMap();

var _onDocumentClick = /*#__PURE__*/new WeakMap();

var _hasTopHeader = /*#__PURE__*/new WeakMap();

var HeaderReplaceSearch = /*#__PURE__*/function (_SearchBase) {
  (0, _inherits2["default"])(HeaderReplaceSearch, _SearchBase);

  var _super = _createSuper(HeaderReplaceSearch);

  function HeaderReplaceSearch() {
    var _this;

    (0, _classCallCheck2["default"])(this, HeaderReplaceSearch);
    _this = _super.call(this);

    _setupEventListeners.set((0, _assertThisInitialized2["default"])(_this), {
      writable: true,
      value: function value() {
        var _DOM$search$headerRep, _DOM$search$headerRep2;

        (_DOM$search$headerRep = _constants.DOM.search.headerReplace.toggleSearchBtn) === null || _DOM$search$headerRep === void 0 ? void 0 : _DOM$search$headerRep.addEventListener("click", (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _onToggleSearchBtnClick));
        (_DOM$search$headerRep2 = _constants.DOM.search.headerReplace.closeBtn) === null || _DOM$search$headerRep2 === void 0 ? void 0 : _DOM$search$headerRep2.addEventListener("click", (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _onCloseBtnClick));
        document.addEventListener("click", (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _onDocumentClick));
      }
    });

    _onToggleSearchBtnClick.set((0, _assertThisInitialized2["default"])(_this), {
      writable: true,
      value: function value(event) {
        event.preventDefault();
        event.stopPropagation();
        var form = _constants.DOM.search.headerReplace.form;
        form.classList.toggle("show");

        if ((0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _hasTopHeader).call((0, _assertThisInitialized2["default"])(_this))) {
          _constants.DOM.header.topLeftSide.classList.toggle("hide");

          _constants.DOM.header.topRightSide.classList.toggle("hide");
        } else {
          var _document$querySelect;

          if (!_constants.DOM.menu.nav.classList.contains("hide")) {
            _constants.DOM.menu.main.style.minWidth = "370px";
          }

          _constants.DOM.menu.nav.classList.toggle("hide");

          form.style.maxWidth = ((_document$querySelect = document.querySelector("#site-navigation > ul.dropdown-menu")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.offsetWidth) + 60 + "px";
        }

        _this.focus(form, 'input[type="search"]');
      }
    });

    _onCloseBtnClick.set((0, _assertThisInitialized2["default"])(_this), {
      writable: true,
      value: function value(event) {
        event.preventDefault();
        var form = _constants.DOM.search.headerReplace.form;
        form.classList.remove("show");

        if ((0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _hasTopHeader).call((0, _assertThisInitialized2["default"])(_this))) {
          _constants.DOM.header.topLeftSide.classList.remove("hide");

          _constants.DOM.header.topRightSide.classList.remove("hide");
        } else {
          _constants.DOM.menu.nav.classList.remove("hide");

          setTimeout(function () {
            _constants.DOM.menu.main.style.minWidth = "";
          }, 250);
        }
      }
    });

    _onDocumentClick.set((0, _assertThisInitialized2["default"])(_this), {
      writable: true,
      value: function value(event) {
        // Collaps search form
        if (!event.target.closest("#searchform-header-replace.show")) {
          var _DOM$search$headerRep3, _DOM$search$headerRep4;

          (_DOM$search$headerRep3 = _constants.DOM.search.headerReplace) === null || _DOM$search$headerRep3 === void 0 ? void 0 : (_DOM$search$headerRep4 = _DOM$search$headerRep3.form) === null || _DOM$search$headerRep4 === void 0 ? void 0 : _DOM$search$headerRep4.classList.remove("show");

          if ((0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _hasTopHeader).call((0, _assertThisInitialized2["default"])(_this))) {
            var _DOM$header$topLeftSi, _DOM$header$topRightS;

            (_DOM$header$topLeftSi = _constants.DOM.header.topLeftSide) === null || _DOM$header$topLeftSi === void 0 ? void 0 : _DOM$header$topLeftSi.classList.remove("hide");
            (_DOM$header$topRightS = _constants.DOM.header.topRightSide) === null || _DOM$header$topRightS === void 0 ? void 0 : _DOM$header$topRightS.classList.remove("hide");
          } else {
            var _DOM$menu$nav;

            (_DOM$menu$nav = _constants.DOM.menu.nav) === null || _DOM$menu$nav === void 0 ? void 0 : _DOM$menu$nav.classList.remove("hide");
          }
        }
      }
    });

    _hasTopHeader.set((0, _assertThisInitialized2["default"])(_this), {
      writable: true,
      value: function value() {
        var _DOM$header$site;

        return (_DOM$header$site = _constants.DOM.header.site) === null || _DOM$header$site === void 0 ? void 0 : _DOM$header$site.classList.contains("top-header");
      }
    });

    if (_constants.options.menuSearchStyle !== "header_replace") {
      return (0, _possibleConstructorReturn2["default"])(_this);
    }

    (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _setupEventListeners).call((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  return HeaderReplaceSearch;
}(_base["default"]);

var _default = HeaderReplaceSearch;
exports["default"] = _default;

},{"../../../constants":1,"./base":23,"@babel/runtime/helpers/assertThisInitialized":30,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/getPrototypeOf":38,"@babel/runtime/helpers/inherits":39,"@babel/runtime/helpers/interopRequireDefault":40,"@babel/runtime/helpers/possibleConstructorReturn":41}],26:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _classPrivateFieldGet6 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../../constants");

var _utils = require("../../../lib/utils");

var _base = _interopRequireDefault(require("./base"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _elements = /*#__PURE__*/new WeakMap();

var _setElements = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _toggleDropdownSearch = /*#__PURE__*/new WeakMap();

var _openOverlaySearch = /*#__PURE__*/new WeakMap();

var _closeOverlaySearch = /*#__PURE__*/new WeakMap();

var _onClickOverlaySearch = /*#__PURE__*/new WeakMap();

var _onClickDocument = /*#__PURE__*/new WeakMap();

var MobileSearchIcon = /*#__PURE__*/function (_SearchBase) {
  (0, _inherits2["default"])(MobileSearchIcon, _SearchBase);

  var _super = _createSuper(MobileSearchIcon);

  function MobileSearchIcon() {
    var _this;

    (0, _classCallCheck2["default"])(this, MobileSearchIcon);
    _this = _super.call(this);

    _elements.set((0, _assertThisInitialized2["default"])(_this), {
      writable: true,
      value: void 0
    });

    _setElements.set((0, _assertThisInitialized2["default"])(_this), {
      writable: true,
      value: function value() {
        (0, _classPrivateFieldSet2["default"])((0, _assertThisInitialized2["default"])(_this), _elements, {
          dropdownSearchIcon: document.querySelector(".search-icon-dropdown"),
          dropdownSearchForm: document.querySelector(".search-style-dropdown"),
          overlaySearch: document.querySelector(".search-style-overlay"),
          overlaySearchIcon: document.querySelector(".search-icon-overlay"),
          overlaySearchCloseIcon: document.querySelector(".search-style-overlay .search-overlay-close"),
          html: document.querySelector("html")
        });
      }
    });

    _setupEventListeners.set((0, _assertThisInitialized2["default"])(_this), {
      writable: true,
      value: function value() {
        if (_constants.options.mobileMenuSearchStyle === "drop_down") {
          var _classPrivateFieldGet2;

          (_classPrivateFieldGet2 = (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).dropdownSearchIcon) === null || _classPrivateFieldGet2 === void 0 ? void 0 : _classPrivateFieldGet2.addEventListener("click", (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _toggleDropdownSearch));
          document.addEventListener("click", (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _onClickDocument));
        } else if (_constants.options.mobileMenuSearchStyle === "overlay") {
          var _classPrivateFieldGet3, _classPrivateFieldGet4, _classPrivateFieldGet5;

          (_classPrivateFieldGet3 = (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).overlaySearchIcon) === null || _classPrivateFieldGet3 === void 0 ? void 0 : _classPrivateFieldGet3.addEventListener("click", (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _openOverlaySearch));
          (_classPrivateFieldGet4 = (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).overlaySearchCloseIcon) === null || _classPrivateFieldGet4 === void 0 ? void 0 : _classPrivateFieldGet4.addEventListener("click", (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _closeOverlaySearch));
          (_classPrivateFieldGet5 = (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).overlaySearch) === null || _classPrivateFieldGet5 === void 0 ? void 0 : _classPrivateFieldGet5.addEventListener("click", (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _onClickOverlaySearch));
        }
      }
    });

    _toggleDropdownSearch.set((0, _assertThisInitialized2["default"])(_this), {
      writable: true,
      value: function value(event) {
        event.preventDefault();
        event.stopPropagation();
        (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).dropdownSearchForm.classList.toggle("show");
        (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).dropdownSearchIcon.classList.toggle("active");

        _this.focus((0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).dropdownSearchForm.querySelector("form"), "input.field");
      }
    });

    _openOverlaySearch.set((0, _assertThisInitialized2["default"])(_this), {
      writable: true,
      value: function value(event) {
        event.preventDefault();
        (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).overlaySearch.classList.add("active");
        (0, _utils.fadeIn)((0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).overlaySearch);

        _this.focus((0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).overlaySearch.querySelector("form"), "input.mobile-search-overlay-input");

        setTimeout(function () {
          (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).html.style.overflow = "hidden";
        }, 400);
      }
    });

    _closeOverlaySearch.set((0, _assertThisInitialized2["default"])(_this), {
      writable: true,
      value: function value(event) {
        event.preventDefault();
        (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).overlaySearch.classList.remove("active");
        (0, _utils.fadeOut)((0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).overlaySearch);
        setTimeout(function () {
          (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).html.style.overflow = "visible";
        }, 400);
      }
    });

    _onClickOverlaySearch.set((0, _assertThisInitialized2["default"])(_this), {
      writable: true,
      value: function value(event) {
        (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).overlaySearch.querySelector("input").focus();
      }
    });

    _onClickDocument.set((0, _assertThisInitialized2["default"])(_this), {
      writable: true,
      value: function value(event) {
        if (!event.target.closest("#icon-searchform-dropdown.show")) {
          (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).dropdownSearchIcon.classList.remove("active");
          (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).dropdownSearchForm.classList.remove("show");
        }
      }
    });

    if (_constants.options.mobileMenuSearchStyle === "disabled") {
      return (0, _possibleConstructorReturn2["default"])(_this);
    }

    (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _setElements).call((0, _assertThisInitialized2["default"])(_this));
    (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _setupEventListeners).call((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  return MobileSearchIcon;
}(_base["default"]);

var _default = MobileSearchIcon;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":4,"./base":23,"@babel/runtime/helpers/assertThisInitialized":30,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/classPrivateFieldSet":36,"@babel/runtime/helpers/getPrototypeOf":38,"@babel/runtime/helpers/inherits":39,"@babel/runtime/helpers/interopRequireDefault":40,"@babel/runtime/helpers/possibleConstructorReturn":41}],27:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../../constants");

var _utils = require("../../../lib/utils");

var _base = _interopRequireDefault(require("./base"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onToggleSearchBtnClick = /*#__PURE__*/new WeakMap();

var _onCloseBtnClick = /*#__PURE__*/new WeakMap();

var OverlaySearch = /*#__PURE__*/function (_SearchBase) {
  (0, _inherits2["default"])(OverlaySearch, _SearchBase);

  var _super = _createSuper(OverlaySearch);

  function OverlaySearch() {
    var _this;

    (0, _classCallCheck2["default"])(this, OverlaySearch);
    _this = _super.call(this);

    _setupEventListeners.set((0, _assertThisInitialized2["default"])(_this), {
      writable: true,
      value: function value() {
        var _DOM$search$overlay$t, _DOM$search$overlay$c;

        (_DOM$search$overlay$t = _constants.DOM.search.overlay.toggleSearchBtn) === null || _DOM$search$overlay$t === void 0 ? void 0 : _DOM$search$overlay$t.addEventListener("click", (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _onToggleSearchBtnClick));
        (_DOM$search$overlay$c = _constants.DOM.search.overlay.closeBtn) === null || _DOM$search$overlay$c === void 0 ? void 0 : _DOM$search$overlay$c.addEventListener("click", (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _onCloseBtnClick));
      }
    });

    _onToggleSearchBtnClick.set((0, _assertThisInitialized2["default"])(_this), {
      writable: true,
      value: function value(event) {
        event.preventDefault();
        var form = _constants.DOM.search.overlay.form;
        form.classList.add("active");
        (0, _utils.fadeIn)(form);

        _this.focus(form, 'input[type="search"]');

        setTimeout(function () {
          _constants.DOM.html.style.overflow = "hidden";
        }, 400);
      }
    });

    _onCloseBtnClick.set((0, _assertThisInitialized2["default"])(_this), {
      writable: true,
      value: function value(event) {
        event.preventDefault();
        var form = _constants.DOM.search.overlay.form;
        form.classList.remove("active");
        (0, _utils.fadeOut)(form);
        setTimeout(function () {
          _constants.DOM.html.style.overflow = "visible";
        }, 400);
      }
    });

    if (_constants.options.menuSearchStyle !== "overlay") {
      return (0, _possibleConstructorReturn2["default"])(_this);
    }

    (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _setupEventListeners).call((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  return OverlaySearch;
}(_base["default"]);

var _default = OverlaySearch;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":4,"./base":23,"@babel/runtime/helpers/assertThisInitialized":30,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/getPrototypeOf":38,"@babel/runtime/helpers/inherits":39,"@babel/runtime/helpers/interopRequireDefault":40,"@babel/runtime/helpers/possibleConstructorReturn":41}],28:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../constants");

var _select = /*#__PURE__*/new WeakMap();

var _render = /*#__PURE__*/new WeakMap();

var _style = /*#__PURE__*/new WeakMap();

var _setupEventListenersItem = /*#__PURE__*/new WeakMap();

var _onMouseenter = /*#__PURE__*/new WeakMap();

var _onMouseleave = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onDocumentReady = /*#__PURE__*/new WeakMap();

var Select = function Select() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Select);

  _select.set(this, {
    writable: true,
    value: void 0
  });

  _render.set(this, {
    writable: true,
    value: function value() {
      _constants.DOM.selectTags.forEach(function (select) {
        (0, _classPrivateFieldSet2["default"])(_this, _select, select);
        (0, _classPrivateFieldGet2["default"])(_this, _select).insertAdjacentHTML("afterend", "<span class=\"theme-select ".concat((0, _classPrivateFieldGet2["default"])(_this, _select).classList, "\">\n                    <span class=\"theme-selectInner\">\n                        ").concat((0, _classPrivateFieldGet2["default"])(_this, _select).options[(0, _classPrivateFieldGet2["default"])(_this, _select).selectedIndex].text, "\n                    </span>\n                </span>"));
        (0, _classPrivateFieldGet2["default"])(_this, _select).classList.add("hasCustomSelect");
        (0, _classPrivateFieldGet2["default"])(_this, _style).call(_this);
        (0, _classPrivateFieldGet2["default"])(_this, _setupEventListenersItem).call(_this);
      });
    }
  });

  _style.set(this, {
    writable: true,
    value: function value() {
      (0, _classPrivateFieldGet2["default"])(_this, _select).style.opacity = 0;
      (0, _classPrivateFieldGet2["default"])(_this, _select).style.position = "absolute";
      (0, _classPrivateFieldGet2["default"])(_this, _select).style.height = "34px";
      (0, _classPrivateFieldGet2["default"])(_this, _select).style.fontSize = "13px";
      (0, _classPrivateFieldGet2["default"])(_this, _select).style.appearance = "menulist-button";
      (0, _classPrivateFieldGet2["default"])(_this, _select).nextSibling.style.display = "inline-block";
      (0, _classPrivateFieldGet2["default"])(_this, _select).nextSibling.firstElementChild.style.display = "inline-block";
    }
  });

  _setupEventListenersItem.set(this, {
    writable: true,
    value: function value() {
      (0, _classPrivateFieldGet2["default"])(_this, _select).addEventListener("mouseenter", (0, _classPrivateFieldGet2["default"])(_this, _onMouseenter));
      (0, _classPrivateFieldGet2["default"])(_this, _select).addEventListener("mouseleave", (0, _classPrivateFieldGet2["default"])(_this, _onMouseleave));
      (0, _classPrivateFieldGet2["default"])(_this, _select).addEventListener("change", _this.onChange);
    }
  });

  _onMouseenter.set(this, {
    writable: true,
    value: function value(event) {
      var select = event.currentTarget;
      select.classList.add("theme-selectHover");
    }
  });

  _onMouseleave.set(this, {
    writable: true,
    value: function value(event) {
      var select = event.currentTarget;
      select.classList.remove("theme-selectHover");
    }
  });

  (0, _defineProperty2["default"])(this, "onChange", function (event) {
    var select = event.currentTarget;
    select.nextSibling.innerHTML = select.options[select.selectedIndex].text;
  });

  _setupEventListeners.set(this, {
    writable: true,
    value: function value() {
      document.addEventListener("DOMContentLoaded", (0, _classPrivateFieldGet2["default"])(_this, _onDocumentReady));
      window.addEventListener("resize", (0, _classPrivateFieldGet2["default"])(_this, _onDocumentReady));
    }
  });

  _onDocumentReady.set(this, {
    writable: true,
    value: function value(event) {
      _constants.DOM.selectTags.forEach(function (select) {
        select.style.width = select.nextSibling.offsetWidth + "px";
      });
    }
  });

  (0, _classPrivateFieldGet2["default"])(this, _render).call(this);
  (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
};

exports["default"] = Select;

},{"../../constants":1,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/classPrivateFieldSet":36,"@babel/runtime/helpers/defineProperty":37,"@babel/runtime/helpers/interopRequireDefault":40}],29:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _select = _interopRequireDefault(require("./components/select"));

var _header = _interopRequireDefault(require("./components/header"));

var _menu = _interopRequireDefault(require("./components/menu"));

var _mobileMenu = _interopRequireDefault(require("./components/mobile-menu"));

var _search = _interopRequireDefault(require("./components/search"));

var _footer = _interopRequireDefault(require("./components/footer"));

var _blogMasonry = _interopRequireDefault(require("./components/blog-masonry"));

var _scrollTop = _interopRequireDefault(require("./components/scroll-top"));

var _scrollEffect = _interopRequireDefault(require("./components/scroll-effect"));

var _equalHeightElements = _interopRequireDefault(require("./components/equal-height-elements"));

var _owInfiniteScroll = _interopRequireDefault(require("./components/ow-infinite-scroll"));

var _owSlider = _interopRequireDefault(require("./components/ow-slider"));

var _owLightbox = _interopRequireDefault(require("./components/ow-lightbox"));

var _start = /*#__PURE__*/new WeakMap();

var Theme = function Theme() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Theme);

  _start.set(this, {
    writable: true,
    value: function value() {
      _this.select = new _select["default"]();
      _this.header = new _header["default"]();
      _this.menu = new _menu["default"]();
      _this.mobileMenu = new _mobileMenu["default"]();
      _this.search = new _search["default"]();
      _this.footer = new _footer["default"]();
      _this.blogMasonry = new _blogMasonry["default"]();
      _this.scrollTop = new _scrollTop["default"]();
      _this.scrollEffect = new _scrollEffect["default"]();
      _this.equalHeightElements = new _equalHeightElements["default"]();
      _this.owLightbox = new _owLightbox["default"]();
      _this.owSlider = new _owSlider["default"]();
      document.addEventListener("DOMContentLoaded", function () {
        _this.owInfiniteScroll = new _owInfiniteScroll["default"]();
      });
    }
  });

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
};

var _default = Theme;
exports["default"] = _default;

},{"./components/blog-masonry":5,"./components/equal-height-elements":6,"./components/footer":7,"./components/header":8,"./components/menu":10,"./components/mobile-menu":13,"./components/ow-infinite-scroll":17,"./components/ow-lightbox":18,"./components/ow-slider":19,"./components/scroll-effect":20,"./components/scroll-top":21,"./components/search":22,"./components/select":28,"@babel/runtime/helpers/classCallCheck":33,"@babel/runtime/helpers/classPrivateFieldGet":35,"@babel/runtime/helpers/interopRequireDefault":40}],30:[function(require,module,exports){
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],31:[function(require,module,exports){
function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

module.exports = _classApplyDescriptorGet;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],32:[function(require,module,exports){
function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    descriptor.value = value;
  }
}

module.exports = _classApplyDescriptorSet;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],33:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],34:[function(require,module,exports){
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }

  return privateMap.get(receiver);
}

module.exports = _classExtractFieldDescriptor;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],35:[function(require,module,exports){
var classApplyDescriptorGet = require("./classApplyDescriptorGet.js");

var classExtractFieldDescriptor = require("./classExtractFieldDescriptor.js");

function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = classExtractFieldDescriptor(receiver, privateMap, "get");
  return classApplyDescriptorGet(receiver, descriptor);
}

module.exports = _classPrivateFieldGet;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./classApplyDescriptorGet.js":31,"./classExtractFieldDescriptor.js":34}],36:[function(require,module,exports){
var classApplyDescriptorSet = require("./classApplyDescriptorSet.js");

var classExtractFieldDescriptor = require("./classExtractFieldDescriptor.js");

function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = classExtractFieldDescriptor(receiver, privateMap, "set");
  classApplyDescriptorSet(receiver, descriptor, value);
  return value;
}

module.exports = _classPrivateFieldSet;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./classApplyDescriptorSet.js":32,"./classExtractFieldDescriptor.js":34}],37:[function(require,module,exports){
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],38:[function(require,module,exports){
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],39:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./setPrototypeOf.js":42}],40:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],41:[function(require,module,exports){
var _typeof = require("@babel/runtime/helpers/typeof")["default"];

var assertThisInitialized = require("./assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./assertThisInitialized.js":30,"@babel/runtime/helpers/typeof":43}],42:[function(require,module,exports){
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],43:[function(require,module,exports){
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],44:[function(require,module,exports){
var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;

},{}],45:[function(require,module,exports){
var closest = require('./closest');

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;

},{"./closest":44}],46:[function(require,module,exports){
// button
( function( window, factory ) {
  // universal module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
        window,
        require('./core'),
        require('fizzy-ui-utils'),
    );
  } else {
    // browser global
    factory(
        window,
        window.InfiniteScroll,
        window.fizzyUIUtils,
    );
  }

}( window, function factory( window, InfiniteScroll, utils ) {

// -------------------------- InfiniteScrollButton -------------------------- //

class InfiniteScrollButton {
  constructor( element, infScroll ) {
    this.element = element;
    this.infScroll = infScroll;
    // events
    this.clickHandler = this.onClick.bind( this );
    this.element.addEventListener( 'click', this.clickHandler );
    infScroll.on( 'request', this.disable.bind( this ) );
    infScroll.on( 'load', this.enable.bind( this ) );
    infScroll.on( 'error', this.hide.bind( this ) );
    infScroll.on( 'last', this.hide.bind( this ) );
  }

  onClick( event ) {
    event.preventDefault();
    this.infScroll.loadNextPage();
  }

  enable() {
    this.element.removeAttribute('disabled');
  }

  disable() {
    this.element.disabled = 'disabled';
  }

  hide() {
    this.element.style.display = 'none';
  }

  destroy() {
    this.element.removeEventListener( 'click', this.clickHandler );
  }

}

// -------------------------- InfiniteScroll methods -------------------------- //

// InfiniteScroll.defaults.button = null;

InfiniteScroll.create.button = function() {
  let buttonElem = utils.getQueryElement( this.options.button );
  if ( buttonElem ) {
    this.button = new InfiniteScrollButton( buttonElem, this );
  }
};

InfiniteScroll.destroy.button = function() {
  if ( this.button ) this.button.destroy();
};

// --------------------------  -------------------------- //

InfiniteScroll.Button = InfiniteScrollButton;

return InfiniteScroll;

} ) );

},{"./core":47,"fizzy-ui-utils":54}],47:[function(require,module,exports){
// core
( function( window, factory ) {
  // universal module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
        window,
        require('ev-emitter'),
        require('fizzy-ui-utils'),
    );
  } else {
    // browser global
    window.InfiniteScroll = factory(
        window,
        window.EvEmitter,
        window.fizzyUIUtils,
    );
  }

}( window, function factory( window, EvEmitter, utils ) {

let jQuery = window.jQuery;
// internal store of all InfiniteScroll intances
let instances = {};

function InfiniteScroll( element, options ) {
  let queryElem = utils.getQueryElement( element );

  if ( !queryElem ) {
    console.error( 'Bad element for InfiniteScroll: ' + ( queryElem || element ) );
    return;
  }
  element = queryElem;
  // do not initialize twice on same element
  if ( element.infiniteScrollGUID ) {
    let instance = instances[ element.infiniteScrollGUID ];
    instance.option( options );
    return instance;
  }

  this.element = element;
  // options
  this.options = { ...InfiniteScroll.defaults };
  this.option( options );
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  this.create();
}

// defaults
InfiniteScroll.defaults = {
  // path: null,
  // hideNav: null,
  // debug: false,
};

// create & destroy methods
InfiniteScroll.create = {};
InfiniteScroll.destroy = {};

let proto = InfiniteScroll.prototype;
// inherit EvEmitter
Object.assign( proto, EvEmitter.prototype );

// --------------------------  -------------------------- //

// globally unique identifiers
let GUID = 0;

proto.create = function() {
  // create core
  // add id for InfiniteScroll.data
  let id = this.guid = ++GUID;
  this.element.infiniteScrollGUID = id; // expando
  instances[ id ] = this; // associate via id
  // properties
  this.pageIndex = 1; // default to first page
  this.loadCount = 0;
  this.updateGetPath();
  // bail if getPath not set, or returns falsey #776
  let hasPath = this.getPath && this.getPath();
  if ( !hasPath ) {
    console.error('Disabling InfiniteScroll');
    return;
  }
  this.updateGetAbsolutePath();
  this.log( 'initialized', [ this.element.className ] );
  this.callOnInit();
  // create features
  for ( let method in InfiniteScroll.create ) {
    InfiniteScroll.create[ method ].call( this );
  }
};

proto.option = function( opts ) {
  Object.assign( this.options, opts );
};

// call onInit option, used for binding events on init
proto.callOnInit = function() {
  let onInit = this.options.onInit;
  if ( onInit ) {
    onInit.call( this, this );
  }
};

// ----- events ----- //

proto.dispatchEvent = function( type, event, args ) {
  this.log( type, args );
  let emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );
  // trigger jQuery event
  if ( !jQuery || !this.$element ) {
    return;
  }
  // namespace jQuery event
  type += '.infiniteScroll';
  let $event = type;
  if ( event ) {
    // create jQuery event
    /* eslint-disable-next-line new-cap */
    let jQEvent = jQuery.Event( event );
    jQEvent.type = type;
    $event = jQEvent;
  }
  this.$element.trigger( $event, args );
};

let loggers = {
  initialized: ( className ) => `on ${className}`,
  request: ( path ) => `URL: ${path}`,
  load: ( response, path ) => `${response.title || ''}. URL: ${path}`,
  error: ( error, path ) => `${error}. URL: ${path}`,
  append: ( response, path, items ) => `${items.length} items. URL: ${path}`,
  last: ( response, path ) => `URL: ${path}`,
  history: ( title, path ) => `URL: ${path}`,
  pageIndex: function( index, origin ) {
    return `current page determined to be: ${index} from ${origin}`;
  },
};

// log events
proto.log = function( type, args ) {
  if ( !this.options.debug ) return;

  let message = `[InfiniteScroll] ${type}`;
  let logger = loggers[ type ];
  if ( logger ) message += '. ' + logger.apply( this, args );
  console.log( message );
};

// -------------------------- methods used amoung features -------------------------- //

proto.updateMeasurements = function() {
  this.windowHeight = window.innerHeight;
  let rect = this.element.getBoundingClientRect();
  this.top = rect.top + window.scrollY;
};

proto.updateScroller = function() {
  let elementScroll = this.options.elementScroll;
  if ( !elementScroll ) {
    // default, use window
    this.scroller = window;
    return;
  }
  // if true, set to element, otherwise use option
  this.scroller = elementScroll === true ? this.element :
    utils.getQueryElement( elementScroll );
  if ( !this.scroller ) {
    throw new Error(`Unable to find elementScroll: ${elementScroll}`);
  }
};

// -------------------------- page path -------------------------- //

proto.updateGetPath = function() {
  let optPath = this.options.path;
  if ( !optPath ) {
    console.error(`InfiniteScroll path option required. Set as: ${optPath}`);
    return;
  }
  // function
  let type = typeof optPath;
  if ( type == 'function' ) {
    this.getPath = optPath;
    return;
  }
  // template string: '/pages/{{#}}.html'
  let templateMatch = type == 'string' && optPath.match('{{#}}');
  if ( templateMatch ) {
    this.updateGetPathTemplate( optPath );
    return;
  }
  // selector: '.next-page-selector'
  this.updateGetPathSelector( optPath );
};

proto.updateGetPathTemplate = function( optPath ) {
  // set getPath with template string
  this.getPath = () => {
    let nextIndex = this.pageIndex + 1;
    return optPath.replace( '{{#}}', nextIndex );
  };
  // get pageIndex from location
  // convert path option into regex to look for pattern in location
  // escape query (?) in url, allows for parsing GET parameters
  let regexString = optPath
    .replace( /(\\\?|\?)/, '\\?' )
    .replace( '{{#}}', '(\\d\\d?\\d?)' );
  let templateRe = new RegExp( regexString );
  let match = location.href.match( templateRe );

  if ( match ) {
    this.pageIndex = parseInt( match[1], 10 );
    this.log( 'pageIndex', [ this.pageIndex, 'template string' ] );
  }
};

let pathRegexes = [
  // WordPress & Tumblr - example.com/page/2
  // Jekyll - example.com/page2
  /^(.*?\/?page\/?)(\d\d?\d?)(.*?$)/,
  // Drupal - example.com/?page=1
  /^(.*?\/?\?page=)(\d\d?\d?)(.*?$)/,
  // catch all, last occurence of a number
  /(.*?)(\d\d?\d?)(?!.*\d)(.*?$)/,
];

// try matching href to pathRegexes patterns
let getPathParts = InfiniteScroll.getPathParts = function( href ) {
  if ( !href ) return;
  for ( let regex of pathRegexes ) {
    let match = href.match( regex );
    if ( match ) {
      let [ , begin, index, end ] = match;
      return { begin, index, end };
    }
  }
};

proto.updateGetPathSelector = function( optPath ) {
  // parse href of link: '.next-page-link'
  let hrefElem = document.querySelector( optPath );
  if ( !hrefElem ) {
    console.error(`Bad InfiniteScroll path option. Next link not found: ${optPath}`);
    return;
  }

  let href = hrefElem.getAttribute('href');
  let pathParts = getPathParts( href );
  if ( !pathParts ) {
    console.error(`InfiniteScroll unable to parse next link href: ${href}`);
    return;
  }

  let { begin, index, end } = pathParts;
  this.isPathSelector = true; // flag for checkLastPage()
  this.getPath = () => begin + ( this.pageIndex + 1 ) + end;
  // get pageIndex from href
  this.pageIndex = parseInt( index, 10 ) - 1;
  this.log( 'pageIndex', [ this.pageIndex, 'next link' ] );
};

proto.updateGetAbsolutePath = function() {
  let path = this.getPath();
  // path doesn't start with http or /
  let isAbsolute = path.match( /^http/ ) || path.match( /^\// );
  if ( isAbsolute ) {
    this.getAbsolutePath = this.getPath;
    return;
  }

  let { pathname } = location;
  // query parameter #829. example.com/?pg=2
  let isQuery = path.match( /^\?/ );
  // /foo/bar/index.html => /foo/bar
  let directory = pathname.substring( 0, pathname.lastIndexOf('/') );
  let pathStart = isQuery ? pathname : directory + '/';

  this.getAbsolutePath = () => pathStart + this.getPath();
};

// -------------------------- nav -------------------------- //

// hide navigation
InfiniteScroll.create.hideNav = function() {
  let nav = utils.getQueryElement( this.options.hideNav );
  if ( !nav ) return;

  nav.style.display = 'none';
  this.nav = nav;
};

InfiniteScroll.destroy.hideNav = function() {
  if ( this.nav ) this.nav.style.display = '';
};

// -------------------------- destroy -------------------------- //

proto.destroy = function() {
  this.allOff(); // remove all event listeners
  // call destroy methods
  for ( let method in InfiniteScroll.destroy ) {
    InfiniteScroll.destroy[ method ].call( this );
  }

  delete this.element.infiniteScrollGUID;
  delete instances[ this.guid ];
  // remove jQuery data. #807
  if ( jQuery && this.$element ) {
    jQuery.removeData( this.element, 'infiniteScroll' );
  }
};

// -------------------------- utilities -------------------------- //

// https://remysharp.com/2010/07/21/throttling-function-calls
InfiniteScroll.throttle = function( fn, threshold ) {
  threshold = threshold || 200;
  let last, timeout;

  return function() {
    let now = +new Date();
    let args = arguments;
    let trigger = () => {
      last = now;
      fn.apply( this, args );
    };
    if ( last && now < last + threshold ) {
      // hold on to it
      clearTimeout( timeout );
      timeout = setTimeout( trigger, threshold );
    } else {
      trigger();
    }
  };
};

InfiniteScroll.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  let id = elem && elem.infiniteScrollGUID;
  return id && instances[ id ];
};

// set internal jQuery, for Webpack + jQuery v3
InfiniteScroll.setJQuery = function( jqry ) {
  jQuery = jqry;
};

// -------------------------- setup -------------------------- //

utils.htmlInit( InfiniteScroll, 'infinite-scroll' );

// add noop _init method for jQuery Bridget. #768
proto._init = function() {};

let { jQueryBridget } = window;
if ( jQuery && jQueryBridget ) {
  jQueryBridget( 'infiniteScroll', InfiniteScroll, jQuery );
}

// --------------------------  -------------------------- //

return InfiniteScroll;

} ) );

},{"ev-emitter":53,"fizzy-ui-utils":54}],48:[function(require,module,exports){
// history
( function( window, factory ) {
  // universal module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
        window,
        require('./core'),
        require('fizzy-ui-utils'),
    );
  } else {
    // browser global
    factory(
        window,
        window.InfiniteScroll,
        window.fizzyUIUtils,
    );
  }

}( window, function factory( window, InfiniteScroll, utils ) {

let proto = InfiniteScroll.prototype;

Object.assign( InfiniteScroll.defaults, {
  history: 'replace',
  // historyTitle: false,
} );

let link = document.createElement('a');

// ----- create/destroy ----- //

InfiniteScroll.create.history = function() {
  if ( !this.options.history ) return;

  // check for same origin
  link.href = this.getAbsolutePath();
  // MS Edge does not have origin on link
  // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12236493/
  let linkOrigin = link.origin || link.protocol + '//' + link.host;
  let isSameOrigin = linkOrigin == location.origin;
  if ( !isSameOrigin ) {
    console.error( '[InfiniteScroll] cannot set history with different origin: ' +
      `${link.origin} on ${location.origin} . History behavior disabled.` );
    return;
  }

  // two ways to handle changing history
  if ( this.options.append ) {
    this.createHistoryAppend();
  } else {
    this.createHistoryPageLoad();
  }
};

proto.createHistoryAppend = function() {
  this.updateMeasurements();
  this.updateScroller();
  // array of scroll positions of appended pages
  this.scrollPages = [
    // first page
    {
      top: 0,
      path: location.href,
      title: document.title,
    },
  ];
  this.scrollPage = this.scrollPages[0];
  // events
  this.scrollHistoryHandler = this.onScrollHistory.bind( this );
  this.unloadHandler = this.onUnload.bind( this );
  this.scroller.addEventListener( 'scroll', this.scrollHistoryHandler );
  this.on( 'append', this.onAppendHistory );
  this.bindHistoryAppendEvents( true );
};

proto.bindHistoryAppendEvents = function( isBind ) {
  let addRemove = isBind ? 'addEventListener' : 'removeEventListener';
  this.scroller[ addRemove ]( 'scroll', this.scrollHistoryHandler );
  window[ addRemove ]( 'unload', this.unloadHandler );
};

proto.createHistoryPageLoad = function() {
  this.on( 'load', this.onPageLoadHistory );
};

InfiniteScroll.destroy.history =
proto.destroyHistory = function() {
  let isHistoryAppend = this.options.history && this.options.append;
  if ( isHistoryAppend ) {
    this.bindHistoryAppendEvents( false );
  }
};

// ----- append history ----- //

proto.onAppendHistory = function( response, path, items ) {
  // do not proceed if no items. #779
  if ( !items || !items.length ) return;

  let firstItem = items[0];
  let elemScrollY = this.getElementScrollY( firstItem );
  // resolve path
  link.href = path;
  // add page data to hash
  this.scrollPages.push({
    top: elemScrollY,
    path: link.href,
    title: response.title,
  });
};

proto.getElementScrollY = function( elem ) {
  if ( this.options.elementScroll ) {
    return elem.offsetTop - this.top;
  } else {
    let rect = elem.getBoundingClientRect();
    return rect.top + window.scrollY;
  }
};

proto.onScrollHistory = function() {
  // cycle through positions, find biggest without going over
  let scrollPage = this.getClosestScrollPage();
  // set history if changed
  if ( scrollPage != this.scrollPage ) {
    this.scrollPage = scrollPage;
    this.setHistory( scrollPage.title, scrollPage.path );
  }
};

utils.debounceMethod( InfiniteScroll, 'onScrollHistory', 150 );

proto.getClosestScrollPage = function() {
  let scrollViewY;
  if ( this.options.elementScroll ) {
    scrollViewY = this.scroller.scrollTop + this.scroller.clientHeight / 2;
  } else {
    scrollViewY = window.scrollY + this.windowHeight / 2;
  }

  let scrollPage;
  for ( let page of this.scrollPages ) {
    if ( page.top >= scrollViewY ) break;

    scrollPage = page;
  }
  return scrollPage;
};

proto.setHistory = function( title, path ) {
  let optHistory = this.options.history;
  let historyMethod = optHistory && history[ optHistory + 'State' ];
  if ( !historyMethod ) return;

  history[ optHistory + 'State' ]( null, title, path );
  if ( this.options.historyTitle ) document.title = title;
  this.dispatchEvent( 'history', null, [ title, path ] );
};

// scroll to top to prevent initial scroll-reset after page refresh
// https://stackoverflow.com/a/18633915/182183
proto.onUnload = function() {
  if ( this.scrollPage.top === 0 ) return;

  // calculate where scroll position would be on refresh
  let scrollY = window.scrollY - this.scrollPage.top + this.top;
  // disable scroll event before setting scroll #679
  this.destroyHistory();
  scrollTo( 0, scrollY );
};

// ----- load history ----- //

// update URL
proto.onPageLoadHistory = function( response, path ) {
  this.setHistory( response.title, path );
};

// --------------------------  -------------------------- //

return InfiniteScroll;

} ) );

},{"./core":47,"fizzy-ui-utils":54}],49:[function(require,module,exports){
/*!
 * Infinite Scroll v4.0.1
 * Automatically add next page
 *
 * Licensed GPLv3 for open source use
 * or Infinite Scroll Commercial License for commercial use
 *
 * https://infinite-scroll.com
 * Copyright 2018-2020 Metafizzy
 */

( function( window, factory ) {
  // universal module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
        require('./core'),
        require('./page-load'),
        require('./scroll-watch'),
        require('./history'),
        require('./button'),
        require('./status'),
    );
  }

} )( window, function factory( InfiniteScroll ) {
  return InfiniteScroll;
} );

},{"./button":46,"./core":47,"./history":48,"./page-load":50,"./scroll-watch":51,"./status":52}],50:[function(require,module,exports){
// page-load
( function( window, factory ) {
  // universal module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
        window,
        require('./core'),
    );
  } else {
    // browser global
    factory(
        window,
        window.InfiniteScroll,
    );
  }

}( window, function factory( window, InfiniteScroll ) {

let proto = InfiniteScroll.prototype;

Object.assign( InfiniteScroll.defaults, {
  // append: false,
  loadOnScroll: true,
  checkLastPage: true,
  responseBody: 'text',
  domParseResponse: true,
  // prefill: false,
  // outlayer: null,
} );

InfiniteScroll.create.pageLoad = function() {
  this.canLoad = true;
  this.on( 'scrollThreshold', this.onScrollThresholdLoad );
  this.on( 'load', this.checkLastPage );
  if ( this.options.outlayer ) {
    this.on( 'append', this.onAppendOutlayer );
  }
};

proto.onScrollThresholdLoad = function() {
  if ( this.options.loadOnScroll ) this.loadNextPage();
};

let domParser = new DOMParser();

proto.loadNextPage = function() {
  if ( this.isLoading || !this.canLoad ) return;

  let { responseBody, domParseResponse, fetchOptions } = this.options;
  let path = this.getAbsolutePath();
  this.isLoading = true;
  if ( typeof fetchOptions == 'function' ) fetchOptions = fetchOptions();

  let fetchPromise = fetch( path, fetchOptions )
    .then( ( response ) => {
      if ( !response.ok ) {
        let error = new Error( response.statusText );
        this.onPageError( error, path, response );
        return { response };
      }

      return response[ responseBody ]().then( ( body ) => {
        let canDomParse = responseBody == 'text' && domParseResponse;
        if ( canDomParse ) {
          body = domParser.parseFromString( body, 'text/html' );
        }
        if ( response.status == 204 ) {
          this.lastPageReached( body, path );
          return { body, response };
        } else {
          return this.onPageLoad( body, path, response );
        }
      } );
    } )
    .catch( ( error ) => {
      this.onPageError( error, path );
    } );

  this.dispatchEvent( 'request', null, [ path, fetchPromise ] );

  return fetchPromise;
};

proto.onPageLoad = function( body, path, response ) {
  // done loading if not appending
  if ( !this.options.append ) {
    this.isLoading = false;
  }
  this.pageIndex++;
  this.loadCount++;
  this.dispatchEvent( 'load', null, [ body, path, response ] );
  return this.appendNextPage( body, path, response );
};

proto.appendNextPage = function( body, path, response ) {
  let { append, responseBody, domParseResponse } = this.options;
  // do not append json
  let isDocument = responseBody == 'text' && domParseResponse;
  if ( !isDocument || !append ) return { body, response };

  let items = body.querySelectorAll( append );
  let promiseValue = { body, response, items };
  // last page hit if no items. #840
  if ( !items || !items.length ) {
    this.lastPageReached( body, path );
    return promiseValue;
  }

  let fragment = getItemsFragment( items );
  let appendReady = () => {
    this.appendItems( items, fragment );
    this.isLoading = false;
    this.dispatchEvent( 'append', null, [ body, path, items, response ] );
    return promiseValue;
  };

  // TODO add hook for option to trigger appendReady
  if ( this.options.outlayer ) {
    return this.appendOutlayerItems( fragment, appendReady );
  } else {
    return appendReady();
  }
};

proto.appendItems = function( items, fragment ) {
  if ( !items || !items.length ) return;

  // get fragment if not provided
  fragment = fragment || getItemsFragment( items );
  refreshScripts( fragment );
  this.element.appendChild( fragment );
};

function getItemsFragment( items ) {
  // add items to fragment
  let fragment = document.createDocumentFragment();
  if ( items ) fragment.append( ...items );
  return fragment;
}

// replace <script>s with copies so they load
// <script>s added by InfiniteScroll will not load
// similar to https://stackoverflow.com/questions/610995
function refreshScripts( fragment ) {
  let scripts = fragment.querySelectorAll('script');
  for ( let script of scripts ) {
    let freshScript = document.createElement('script');
    // copy attributes
    let attrs = script.attributes;
    for ( let attr of attrs ) {
      freshScript.setAttribute( attr.name, attr.value );
    }
    // copy inner script code. #718, #782
    freshScript.innerHTML = script.innerHTML;
    script.parentNode.replaceChild( freshScript, script );
  }
}

// ----- outlayer ----- //

proto.appendOutlayerItems = function( fragment, appendReady ) {
  let imagesLoaded = InfiniteScroll.imagesLoaded || window.imagesLoaded;
  if ( !imagesLoaded ) {
    console.error('[InfiniteScroll] imagesLoaded required for outlayer option');
    this.isLoading = false;
    return;
  }
  // append once images loaded
  return new Promise( function( resolve ) {
    imagesLoaded( fragment, function() {
      let bodyResponse = appendReady();
      resolve( bodyResponse );
    } );
  } );
};

proto.onAppendOutlayer = function( response, path, items ) {
  this.options.outlayer.appended( items );
};

// ----- checkLastPage ----- //

// check response for next element
proto.checkLastPage = function( body, path ) {
  let { checkLastPage, path: pathOpt } = this.options;
  if ( !checkLastPage ) return;

  // if path is function, check if next path is truthy
  if ( typeof pathOpt == 'function' ) {
    let nextPath = this.getPath();
    if ( !nextPath ) {
      this.lastPageReached( body, path );
      return;
    }
  }
  // get selector from checkLastPage or path option
  let selector;
  if ( typeof checkLastPage == 'string' ) {
    selector = checkLastPage;
  } else if ( this.isPathSelector ) {
    // path option is selector string
    selector = pathOpt;
  }
  // check last page for selector
  // bail if no selector or not document response
  if ( !selector || !body.querySelector ) return;

  // check if response has selector
  let nextElem = body.querySelector( selector );
  if ( !nextElem ) this.lastPageReached( body, path );
};

proto.lastPageReached = function( body, path ) {
  this.canLoad = false;
  this.dispatchEvent( 'last', null, [ body, path ] );
};

// ----- error ----- //

proto.onPageError = function( error, path, response ) {
  this.isLoading = false;
  this.canLoad = false;
  this.dispatchEvent( 'error', null, [ error, path, response ] );
  return error;
};

// -------------------------- prefill -------------------------- //

InfiniteScroll.create.prefill = function() {
  if ( !this.options.prefill ) return;

  let append = this.options.append;
  if ( !append ) {
    console.error(`append option required for prefill. Set as :${append}`);
    return;
  }
  this.updateMeasurements();
  this.updateScroller();
  this.isPrefilling = true;
  this.on( 'append', this.prefill );
  this.once( 'error', this.stopPrefill );
  this.once( 'last', this.stopPrefill );
  this.prefill();
};

proto.prefill = function() {
  let distance = this.getPrefillDistance();
  this.isPrefilling = distance >= 0;
  if ( this.isPrefilling ) {
    this.log('prefill');
    this.loadNextPage();
  } else {
    this.stopPrefill();
  }
};

proto.getPrefillDistance = function() {
  // element scroll
  if ( this.options.elementScroll ) {
    return this.scroller.clientHeight - this.scroller.scrollHeight;
  }
  // window
  return this.windowHeight - this.element.clientHeight;
};

proto.stopPrefill = function() {
  this.log('stopPrefill');
  this.off( 'append', this.prefill );
};

// --------------------------  -------------------------- //

return InfiniteScroll;

} ) );

},{"./core":47}],51:[function(require,module,exports){
// scroll-watch
( function( window, factory ) {
  // universal module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
        window,
        require('./core'),
        require('fizzy-ui-utils'),
    );
  } else {
    // browser global
    factory(
        window,
        window.InfiniteScroll,
        window.fizzyUIUtils,
    );
  }

}( window, function factory( window, InfiniteScroll, utils ) {

let proto = InfiniteScroll.prototype;

// default options
Object.assign( InfiniteScroll.defaults, {
  scrollThreshold: 400,
  // elementScroll: null,
} );

InfiniteScroll.create.scrollWatch = function() {
  // events
  this.pageScrollHandler = this.onPageScroll.bind( this );
  this.resizeHandler = this.onResize.bind( this );

  let scrollThreshold = this.options.scrollThreshold;
  let isEnable = scrollThreshold || scrollThreshold === 0;
  if ( isEnable ) this.enableScrollWatch();
};

InfiniteScroll.destroy.scrollWatch = function() {
  this.disableScrollWatch();
};

proto.enableScrollWatch = function() {
  if ( this.isScrollWatching ) return;

  this.isScrollWatching = true;
  this.updateMeasurements();
  this.updateScroller();
  // TODO disable after error?
  this.on( 'last', this.disableScrollWatch );
  this.bindScrollWatchEvents( true );
};

proto.disableScrollWatch = function() {
  if ( !this.isScrollWatching ) return;

  this.bindScrollWatchEvents( false );
  delete this.isScrollWatching;
};

proto.bindScrollWatchEvents = function( isBind ) {
  let addRemove = isBind ? 'addEventListener' : 'removeEventListener';
  this.scroller[ addRemove ]( 'scroll', this.pageScrollHandler );
  window[ addRemove ]( 'resize', this.resizeHandler );
};

proto.onPageScroll = InfiniteScroll.throttle( function() {
  let distance = this.getBottomDistance();
  if ( distance <= this.options.scrollThreshold ) {
    this.dispatchEvent('scrollThreshold');
  }
} );

proto.getBottomDistance = function() {
  let bottom, scrollY;
  if ( this.options.elementScroll ) {
    bottom = this.scroller.scrollHeight;
    scrollY = this.scroller.scrollTop + this.scroller.clientHeight;
  } else {
    bottom = this.top + this.element.clientHeight;
    scrollY = window.scrollY + this.windowHeight;
  }
  return bottom - scrollY;
};

proto.onResize = function() {
  this.updateMeasurements();
};

utils.debounceMethod( InfiniteScroll, 'onResize', 150 );

// --------------------------  -------------------------- //

return InfiniteScroll;

} ) );

},{"./core":47,"fizzy-ui-utils":54}],52:[function(require,module,exports){
// status
( function( window, factory ) {
  // universal module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
        window,
        require('./core'),
        require('fizzy-ui-utils'),
    );
  } else {
    // browser global
    factory(
        window,
        window.InfiniteScroll,
        window.fizzyUIUtils,
    );
  }

}( window, function factory( window, InfiniteScroll, utils ) {

let proto = InfiniteScroll.prototype;

// InfiniteScroll.defaults.status = null;

InfiniteScroll.create.status = function() {
  let statusElem = utils.getQueryElement( this.options.status );
  if ( !statusElem ) return;

  // elements
  this.statusElement = statusElem;
  this.statusEventElements = {
    request: statusElem.querySelector('.infinite-scroll-request'),
    error: statusElem.querySelector('.infinite-scroll-error'),
    last: statusElem.querySelector('.infinite-scroll-last'),
  };
  // events
  this.on( 'request', this.showRequestStatus );
  this.on( 'error', this.showErrorStatus );
  this.on( 'last', this.showLastStatus );
  this.bindHideStatus('on');
};

proto.bindHideStatus = function( bindMethod ) {
  let hideEvent = this.options.append ? 'append' : 'load';
  this[ bindMethod ]( hideEvent, this.hideAllStatus );
};

proto.showRequestStatus = function() {
  this.showStatus('request');
};

proto.showErrorStatus = function() {
  this.showStatus('error');
};

proto.showLastStatus = function() {
  this.showStatus('last');
  // prevent last then append event race condition from showing last status #706
  this.bindHideStatus('off');
};

proto.showStatus = function( eventName ) {
  show( this.statusElement );
  this.hideStatusEventElements();
  let eventElem = this.statusEventElements[ eventName ];
  show( eventElem );
};

proto.hideAllStatus = function() {
  hide( this.statusElement );
  this.hideStatusEventElements();
};

proto.hideStatusEventElements = function() {
  for ( let type in this.statusEventElements ) {
    let eventElem = this.statusEventElements[ type ];
    hide( eventElem );
  }
};

// --------------------------  -------------------------- //

function hide( elem ) {
  setDisplay( elem, 'none' );
}

function show( elem ) {
  setDisplay( elem, 'block' );
}

function setDisplay( elem, value ) {
  if ( elem ) {
    elem.style.display = value;
  }
}

// --------------------------  -------------------------- //

return InfiniteScroll;

} ) );

},{"./core":47,"fizzy-ui-utils":54}],53:[function(require,module,exports){
/**
 * EvEmitter v2.0.0
 * Lil' event emitter
 * MIT License
 */

( function( global, factory ) {
  // universal module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {

function EvEmitter() {}

let proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) return this;

  // set events hash
  let events = this._events = this._events || {};
  // set listeners array
  let listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( !listeners.includes( listener ) ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) return this;

  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  let onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  let onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  let listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) return this;

  let index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  let listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) return this;

  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice( 0 );
  args = args || [];
  // once stuff
  let onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( let listener of listeners ) {
    let isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
  return this;
};

return EvEmitter;

} ) );

},{}],54:[function(require,module,exports){
/**
 * Fizzy UI utils v3.0.0
 * MIT license
 */

( function( global, factory ) {
  // universal module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory( global );
  } else {
    // browser global
    global.fizzyUIUtils = factory( global );
  }

}( this, function factory( global ) {

let utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  return Object.assign( a, b );
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  // use object if already an array
  if ( Array.isArray( obj ) ) return obj;

  // return empty array if undefined or null. #6
  if ( obj === null || obj === undefined ) return [];

  let isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  // convert nodeList to array
  if ( isArrayLike ) return [ ...obj ];

  // array of single index
  return [ obj ];
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  let index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem.parentNode && elem != document.body ) {
    elem = elem.parentNode;
    if ( elem.matches( selector ) ) return elem;
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  let method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );

  return elems
    // check that elem is an actual element
    .filter( ( elem ) => elem instanceof HTMLElement )
    .reduce( ( ffElems, elem ) => {
      // add elem if no selector
      if ( !selector ) {
        ffElems.push( elem );
        return ffElems;
      }
      // filter & find items if we have a selector
      // filter
      if ( elem.matches( selector ) ) {
        ffElems.push( elem );
      }
      // find children
      let childElems = elem.querySelectorAll( selector );
      // concat childElems to filterFound array
      ffElems = ffElems.concat( ...childElems );
      return ffElems;
    }, [] );
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  threshold = threshold || 100;
  // original method
  let method = _class.prototype[ methodName ];
  let timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    clearTimeout( this[ timeoutName ] );

    let args = arguments;
    this[ timeoutName ] = setTimeout( () => {
      method.apply( this, args );
      delete this[ timeoutName ];
    }, threshold );
  };
};

// ----- docReady ----- //

utils.docReady = function( onDocReady ) {
  let readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    // do async to allow for other scripts to run. metafizzy/flickity#441
    setTimeout( onDocReady );
  } else {
    document.addEventListener( 'DOMContentLoaded', onDocReady );
  }
};

// ----- htmlInit ----- //

// http://bit.ly/3oYLusc
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  } ).toLowerCase();
};

let console = global.console;

// allow user to initialize classes via [data-namespace] or .js-namespace class
// htmlInit( Widget, 'widgetName' )
// options are parsed from data-namespace-options
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    let dashedNamespace = utils.toDashed( namespace );
    let dataAttr = 'data-' + dashedNamespace;
    let dataAttrElems = document.querySelectorAll( `[${dataAttr}]` );
    let jQuery = global.jQuery;

    [ ...dataAttrElems ].forEach( ( elem ) => {
      let attr = elem.getAttribute( dataAttr );
      let options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( `Error parsing ${dataAttr} on ${elem.className}: ${error}` );
        }
        return;
      }
      // initialize
      let instance = new WidgetClass( elem, options );
      // make available via $().data('namespace')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    } );

  } );
};

// -----  ----- //

return utils;

} ) );

},{}],55:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = require('./util');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResponsiveAutoHeight = function () {
  function ResponsiveAutoHeight(selector, options) {
    var _this = this;

    _classCallCheck(this, ResponsiveAutoHeight);

    this.selector = selector;
    this.elements = typeof selector === 'string' ? document.querySelectorAll(selector) : selector;
    this.options = options;
    window.addEventListener('resize', function () {
      _this.run();
    });
    this.run();
  }

  _createClass(ResponsiveAutoHeight, [{
    key: 'recalc',
    value: function recalc() {
      this.elements = document.querySelectorAll(this.selector);
      this.run();
    }
  }, {
    key: 'makeGroups',
    value: function makeGroups(elements) {
      var group = [];
      [].forEach.call(elements, function (element) {
        element.style.height = '1px';
        element.style.overflow = 'hidden';
      });
      var idx = 0;
      var height = (0, _util.getOffset)(elements[0]).top;
      group[0] = [];
      [].forEach.call(elements, function (element) {
        if ((0, _util.getOffset)(element).top !== height) {
          height = (0, _util.getOffset)(element).top;
          idx += 1;
          group[idx] = [];
        }
        group[idx].push(element);
      });
      [].forEach.call(elements, function (element) {
        element.style.height = '';
        element.style.overflow = '';
      });
      return group;
    }
  }, {
    key: 'autoHeight',
    value: function autoHeight(group) {
      var heights = group.map(function (element) {
        var computedStyle = getComputedStyle(element);
        var boxSizing = computedStyle.boxSizing;
        if (boxSizing === 'border-box') {
          return element.offsetHeight;
        }
        return element.offsetHeight - parseFloat(computedStyle.paddingTop) - parseFloat(computedStyle.paddingBottom);
      });
      var maxHeight = Math.max.apply(Math, _toConsumableArray(heights));
      group.forEach(function (element) {
        element.style.height = maxHeight + 'px';
      });
    }
  }, {
    key: 'run',
    value: function run() {
      var _this2 = this;

      var elements = this.elements;

      var groups = this.makeGroups(elements);
      groups.forEach(function (group) {
        _this2.autoHeight(group);
      });
    }
  }]);

  return ResponsiveAutoHeight;
}();

exports.default = ResponsiveAutoHeight;
module.exports = exports['default'];
},{"./util":56}],56:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getScrollTop = function getScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
};

var getScrollLeft = function getScrollLeft() {
  return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
};

var getOffset = exports.getOffset = function getOffset(el) {
  var rect = el.getBoundingClientRect();
  return {
    top: rect.top + getScrollTop(),
    left: rect.left + getScrollLeft()
  };
};
},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc3JjL2pzL2NvbnN0YW50cy5qcyIsImFzc2V0cy9zcmMvanMvaW5kZXguanMiLCJhc3NldHMvc3JjL2pzL2xpYi9lbGVtZW50LmpzIiwiYXNzZXRzL3NyYy9qcy9saWIvdXRpbHMuanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvYmxvZy1tYXNvbnJ5LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL2VxdWFsLWhlaWdodC1lbGVtZW50cy5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9mb290ZXIuanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL2hlYWRlci92ZXJ0aWNhbC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9tZW51LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL21lbnUvZnVsbC1zY3JlZW4uanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvbWVudS9tZWdhLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL21vYmlsZS1tZW51LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL21vYmlsZS1tZW51L2Ryb3AtZG93bi5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9tb2JpbGUtbWVudS9mdWxsLXNjcmVlbi5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9tb2JpbGUtbWVudS9zaWRlYmFyLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL293LWluZmluaXRlLXNjcm9sbC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9vdy1saWdodGJveC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9vdy1zbGlkZXIuanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvc2Nyb2xsLWVmZmVjdC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zY3JvbGwtdG9wLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlYXJjaC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zZWFyY2gvYmFzZS5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zZWFyY2gvZHJvcC1kb3duLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlYXJjaC9oZWFkZXItcmVwbGFjZS5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zZWFyY2gvbW9iaWxlLXNlYXJjaC1pY29uLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlYXJjaC9vdmVybGF5LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlbGVjdC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvdGhlbWUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0FwcGx5RGVzY3JpcHRvckdldC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQXBwbHlEZXNjcmlwdG9yU2V0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc1ByaXZhdGVGaWVsZEdldC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzUHJpdmF0ZUZpZWxkU2V0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwibm9kZV9tb2R1bGVzL2RlbGVnYXRlL3NyYy9jbG9zZXN0LmpzIiwibm9kZV9tb2R1bGVzL2RlbGVnYXRlL3NyYy9kZWxlZ2F0ZS5qcyIsIm5vZGVfbW9kdWxlcy9pbmZpbml0ZS1zY3JvbGwvanMvYnV0dG9uLmpzIiwibm9kZV9tb2R1bGVzL2luZmluaXRlLXNjcm9sbC9qcy9jb3JlLmpzIiwibm9kZV9tb2R1bGVzL2luZmluaXRlLXNjcm9sbC9qcy9oaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL2luZmluaXRlLXNjcm9sbC9qcy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9pbmZpbml0ZS1zY3JvbGwvanMvcGFnZS1sb2FkLmpzIiwibm9kZV9tb2R1bGVzL2luZmluaXRlLXNjcm9sbC9qcy9zY3JvbGwtd2F0Y2guanMiLCJub2RlX21vZHVsZXMvaW5maW5pdGUtc2Nyb2xsL2pzL3N0YXR1cy5qcyIsIm5vZGVfbW9kdWxlcy9pbmZpbml0ZS1zY3JvbGwvbm9kZV9tb2R1bGVzL2V2LWVtaXR0ZXIvZXYtZW1pdHRlci5qcyIsIm5vZGVfbW9kdWxlcy9pbmZpbml0ZS1zY3JvbGwvbm9kZV9tb2R1bGVzL2Zpenp5LXVpLXV0aWxzL3V0aWxzLmpzIiwibm9kZV9tb2R1bGVzL3Jlc3BvbnNpdmUtYXV0by1oZWlnaHQvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3Jlc3BvbnNpdmUtYXV0by1oZWlnaHQvbGliL3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBTyxJQUFNLE9BQU8sR0FBRyxlQUFoQjs7QUFFQSxJQUFNLEdBQUcsR0FBRztBQUNmLEVBQUEsSUFBSSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLE1BQXZCLENBRFM7QUFFZixFQUFBLElBQUksRUFBRSxRQUFRLENBQUMsSUFGQTtBQUdmLEVBQUEsVUFBVSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGFBQXZCLENBSEc7QUFJZixFQUFBLElBQUksRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixDQUpTO0FBS2YsRUFBQSxJQUFJLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FMUztBQU1mLEVBQUEsVUFBVSxFQUFFLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixPQUFPLENBQUMsYUFBbEMsQ0FORztBQU9mLEVBQUEsV0FBVyxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLG1CQUF2QixDQVBFO0FBUWYsRUFBQSxNQUFNLEVBQUU7QUFDSixJQUFBLElBQUksRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixjQUF2QixDQURGO0FBRUosSUFBQSxRQUFRLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsaURBQXZCLENBRk47QUFHSixJQUFBLFVBQVUsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixpQ0FBdkIsQ0FIUjtBQUlKLElBQUEsTUFBTSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLFVBQXZCLENBSko7QUFLSixJQUFBLGFBQWEsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcFJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGNvbnN0IG9wdGlvbnMgPSBvY2VhbndwTG9jYWxpemU7XHJcblxyXG5leHBvcnQgY29uc3QgRE9NID0ge1xyXG4gICAgaHRtbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIiksXHJcbiAgICBib2R5OiBkb2N1bWVudC5ib2R5LFxyXG4gICAgV1BBZG1pbmJhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3cGFkbWluYmFyXCIpLFxyXG4gICAgd3JhcDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3cmFwXCIpLFxyXG4gICAgbWFpbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpLFxyXG4gICAgc2VsZWN0VGFnczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChvcHRpb25zLmN1c3RvbVNlbGVjdHMpLFxyXG4gICAgZmxvYXRpbmdCYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3dwLWZsb2F0aW5nLWJhclwiKSxcclxuICAgIGhlYWRlcjoge1xyXG4gICAgICAgIHNpdGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXJcIiksXHJcbiAgICAgICAgdmVydGljYWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIudmVydGljYWwtaGVhZGVyICNzaXRlLWhlYWRlci1pbm5lclwiKSxcclxuICAgICAgICBmdWxsU2NyZWVuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLmZ1bGxfc2NyZWVuLWhlYWRlclwiKSxcclxuICAgICAgICB0b3BiYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9wLWJhclwiKSxcclxuICAgICAgICB0b3BiYXJXcmFwcGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvcC1iYXItd3JhcFwiKSxcclxuICAgICAgICB0b3BMZWZ0U2lkZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci50b3AtaGVhZGVyIC5oZWFkZXItdG9wIC5sZWZ0XCIpLFxyXG4gICAgICAgIHRvcFJpZ2h0U2lkZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci50b3AtaGVhZGVyIC5oZWFkZXItdG9wIC5yaWdodFwiKSxcclxuICAgIH0sXHJcbiAgICBtZW51OiB7XHJcbiAgICAgICAgbmF2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLmhlYWRlci1yZXBsYWNlICNzaXRlLW5hdmlnYXRpb25cIiksXHJcbiAgICAgICAgbWFpbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLW1lbnVcIiksXHJcbiAgICAgICAgZnVsbFNjcmVlbjoge1xyXG4gICAgICAgICAgICBtZW51OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLmZ1bGxfc2NyZWVuLWhlYWRlciAjZnVsbC1zY3JlZW4tbWVudVwiKSxcclxuICAgICAgICAgICAgdG9nZ2xlTWVudUJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci5mdWxsX3NjcmVlbi1oZWFkZXIgLm1lbnUtYmFyXCIpLFxyXG4gICAgICAgICAgICBsb2dvOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtbG9nby5oYXMtZnVsbC1zY3JlZW4tbG9nb1wiKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1lZ2E6IHtcclxuICAgICAgICAgICAgbWVudUl0ZW1zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3NpdGUtbmF2aWdhdGlvbiAubWVnYW1lbnUtbGkuZnVsbC1tZWdhXCIpLFxyXG4gICAgICAgICAgICB0b3BiYXJNZW51SXRlbXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdG9wLWJhci1uYXYgLm1lZ2FtZW51LWxpLmZ1bGwtbWVnYVwiKSxcclxuICAgICAgICAgICAgbWVudUNvbnRlbnRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdmlnYXRpb24gLm1lZ2FtZW51LWxpLmF1dG8tbWVnYSAubWVnYW1lbnVcIiksXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2ZXJ0aWNhbDoge1xyXG4gICAgICAgICAgICB0b2dnbGVNZW51QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS52ZXJ0aWNhbC10b2dnbGVcIiksXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtb2JpbGVNZW51OiB7XHJcbiAgICAgICAgbmF2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1kcm9wZG93biA+IG5hdlwiKSxcclxuICAgICAgICBuYXZXcmFwcGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1kcm9wZG93blwiKSxcclxuICAgICAgICB0b2dnbGVNZW51QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1tZW51XCIpLFxyXG4gICAgICAgIGhhbWJ1cmdlckJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbWVudSA+IC5oYW1idXJnZXJcIiksXHJcbiAgICAgICAgbWVudUl0ZW1zSGFzQ2hpbGRyZW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbW9iaWxlLWRyb3Bkb3duIC5tZW51LWl0ZW0taGFzLWNoaWxkcmVuXCIpLFxyXG4gICAgICAgIGZ1bGxTY3JlZW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLWZ1bGxzY3JlZW5cIiksXHJcbiAgICB9LFxyXG4gICAgc2VhcmNoOiB7XHJcbiAgICAgICAgZm9ybXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJmb3JtLmhlYWRlci1zZWFyY2hmb3JtXCIpLFxyXG4gICAgICAgIGRyb3BEb3duOiB7XHJcbiAgICAgICAgICAgIHRvZ2dsZVNlYXJjaEJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEuc2VhcmNoLWRyb3Bkb3duLXRvZ2dsZVwiKSxcclxuICAgICAgICAgICAgZm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hmb3JtLWRyb3Bkb3duXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyUmVwbGFjZToge1xyXG4gICAgICAgICAgICB0b2dnbGVTZWFyY2hCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnNlYXJjaC1oZWFkZXItcmVwbGFjZS10b2dnbGVcIiksXHJcbiAgICAgICAgICAgIGNsb3NlQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGZvcm0taGVhZGVyLXJlcGxhY2UtY2xvc2VcIiksXHJcbiAgICAgICAgICAgIGZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoZm9ybS1oZWFkZXItcmVwbGFjZVwiKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG92ZXJsYXk6IHtcclxuICAgICAgICAgICAgdG9nZ2xlU2VhcmNoQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS5zZWFyY2gtb3ZlcmxheS10b2dnbGVcIiksXHJcbiAgICAgICAgICAgIGNsb3NlQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGZvcm0tb3ZlcmxheSBhLnNlYXJjaC1vdmVybGF5LWNsb3NlXCIpLFxyXG4gICAgICAgICAgICBmb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGZvcm0tb3ZlcmxheVwiKSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICAgIHNpdGVGb290ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vdGVyXCIpLFxyXG4gICAgICAgIGNhbGxvdXRGb290ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vdGVyLWNhbGxvdXQtd3JhcFwiKSxcclxuICAgICAgICBmb290ZXJCYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vdGVyLWJhclwiKSxcclxuICAgICAgICBwYXJhbGxheDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXJhbGxheC1mb290ZXJcIiksXHJcbiAgICB9LFxyXG4gICAgc2Nyb2xsOiB7XHJcbiAgICAgICAgc2Nyb2xsVG9wOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Njcm9sbC10b3BcIiksXHJcbiAgICAgICAgZ29Ub3A6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FbaHJlZj1cIiNnby10b3BcIl0nKSxcclxuICAgICAgICBnb1RvcFNsYXNoOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5LmhvbWUgYVtocmVmPVwiLyNnby10b3BcIl0nKSxcclxuICAgICAgICBpbmZpbml0ZVNjcm9sbE5hdjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZpbml0ZS1zY3JvbGwtbmF2XCIpLFxyXG4gICAgICAgIGluZmluaXRlU2Nyb2xsV3JhcHBlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZpbml0ZS1zY3JvbGwtd3JhcFwiKSxcclxuICAgIH0sXHJcbiAgICBibG9nOiB7XHJcbiAgICAgICAgbWFzb25yeUdyaWRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2ctbWFzb25yeS1ncmlkXCIpLFxyXG4gICAgfSxcclxuICAgIGVkZDoge1xyXG4gICAgICAgIGNhcnRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkZC1tZW51LWljb25cIiksXHJcbiAgICAgICAgb3ZlcmxheUNhcnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3dwLWNhcnQtb3ZlcmxheVwiKSxcclxuICAgICAgICB0b3RhbFByaWNlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGRtZW51Y2FydC1kZXRhaWxzLnRvdGFsXCIpLFxyXG4gICAgICAgIHF1aWNrVmlld01vZGFsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI293cC1xdi13cmFwXCIpLFxyXG4gICAgICAgIHF1aWNrVmlld0NvbnRlbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3dwLXF2LWNvbnRlbnRcIiksXHJcbiAgICB9LFxyXG4gICAgd29vOiB7XHJcbiAgICAgICAgcmVzZXRWYXJpYXRpb25zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc2V0X3ZhcmlhdGlvbnNcIiksXHJcbiAgICAgICAgcHJvZHVjdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b29jb21tZXJjZSBkaXYucHJvZHVjdFwiKSxcclxuICAgICAgICBhbGxQcm9kdWN0czogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53b29jb21tZXJjZSB1bC5wcm9kdWN0c1wiKSxcclxuICAgICAgICBjYXRlZ29yaWVzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndvby1kcm9wZG93bi1jYXQgLnByb2R1Y3QtY2F0ZWdvcmllc1wiKSxcclxuICAgICAgICB2ZXJ0aWNhbFRodW1iczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vd3AtdGh1bWJzLWxheW91dC12ZXJ0aWNhbFwiKSxcclxuICAgICAgICB0aHVtYnNWZXJ0aWNhbExheW91dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd3AtdGh1bWJzLWxheW91dC12ZXJ0aWNhbFwiKSxcclxuICAgICAgICBncmlkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9jZWFud3AtZ3JpZC1saXN0ICNvY2VhbndwLWdyaWRcIiksXHJcbiAgICAgICAgbGlzdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vY2VhbndwLWdyaWQtbGlzdCAjb2NlYW53cC1saXN0XCIpLFxyXG4gICAgICAgIHByb2R1Y3RUYWJzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvb2NvbW1lcmNlIGRpdi5wcm9kdWN0IC53b29jb21tZXJjZS10YWJzXCIpLFxyXG4gICAgICAgIHByb2R1Y3RDYXJ0czogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53b29jb21tZXJjZSBkaXYucHJvZHVjdCAuY2FydFwiKSxcclxuICAgICAgICBwcm9kdWN0Q3VzdG9tZXJSZXZpZXdMaW5rOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvb2NvbW1lcmNlIGRpdi5wcm9kdWN0IC53b29jb21tZXJjZS1yZXZpZXctbGlua1wiKSxcclxuICAgICAgICBxdWFudGl0eTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInF1YW50aXR5XCJdJyksXHJcbiAgICAgICAgY2hlY2tvdXRGb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybS53b29jb21tZXJjZS1jaGVja291dFwiKSxcclxuICAgICAgICBjaGVja291dExvZ2luOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NoZWNrb3V0X2xvZ2luXCIpLFxyXG4gICAgICAgIGNoZWNrb3V0Q291cG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NoZWNrb3V0X2NvdXBvblwiKSxcclxuICAgICAgICBjaGVja291dFRpbWVsaW5lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI293cC1jaGVja291dC10aW1lbGluZVwiKSxcclxuICAgICAgICBjdXN0b21lckJpbGxpbmdEZXRhaWxzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1c3RvbWVyX2JpbGxpbmdfZGV0YWlsc1wiKSxcclxuICAgICAgICBjdXN0b21lclNoaXBwaW5nRGV0YWlsczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXN0b21lcl9zaGlwcGluZ19kZXRhaWxzXCIpLFxyXG4gICAgICAgIG9yZGVyUmV2aWV3OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29yZGVyX3Jldmlld1wiKSxcclxuICAgICAgICBvcmRlckNoZWNrb3V0UGF5bWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcmRlcl9jaGVja291dF9wYXltZW50XCIpLFxyXG4gICAgICAgIHBsYWNlT3JkZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxhY2Vfb3JkZXJcIiksXHJcbiAgICAgICAgZm9ybUFjdGlvbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybV9hY3Rpb25zXCIpLFxyXG4gICAgICAgIG92ZXJsYXlDYXJ0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm93cC1jYXJ0LW92ZXJsYXlcIiksXHJcbiAgICAgICAgZ3Vlc3RBY2NvdW50UGFnZU5hdjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd3AtYWNjb3VudC1saW5rc1wiKSxcclxuICAgICAgICBndWVzdEFjY291bnRQYWdlQm94OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1c3RvbWVyX2xvZ2luXCIpLFxyXG4gICAgICAgIHF1YW50aXR5SW5wdXRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnF1YW50aXR5Om5vdCguYnV0dG9uc19hZGRlZCkgLnF0eVwiKSxcclxuICAgICAgICBxdWlja1ZpZXc6IHtcclxuICAgICAgICAgICAgbW9kYWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3dwLXF2LXdyYXBcIiksXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3dwLXF2LWNvbnRlbnRcIiksXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRE9NU3RyaW5nID0ge307XHJcbiIsImltcG9ydCBcIi4vbGliL2VsZW1lbnRcIjtcclxuaW1wb3J0IFRoZW1lIGZyb20gXCIuL3RoZW1lL3RoZW1lXCI7XHJcblxyXG5jbGFzcyBPY2VhbldQIHtcclxuICAgIHN0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWUoKTtcclxuICAgIH07XHJcbn1cclxuXHJcbihcInVzZSBzY3JpcHRcIik7XHJcblxyXG53aW5kb3cub2NlYW53cCA9IG5ldyBPY2VhbldQKCk7XHJcbm9jZWFud3Auc3RhcnQoKTtcclxuIiwiRWxlbWVudC5wcm90b3R5cGUub2NlYW5QYXJlbnRzID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcbiAgICB2YXIgZWxlbWVudHMgPSBbXTtcclxuICAgIHZhciBlbGVtID0gdGhpcztcclxuICAgIHZhciBpc2hhdmVzZWxlY3RvciA9IHNlbGVjdG9yICE9PSB1bmRlZmluZWQ7XHJcblxyXG4gICAgd2hpbGUgKChlbGVtID0gZWxlbS5wYXJlbnRFbGVtZW50KSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGlmIChlbGVtLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaXNoYXZlc2VsZWN0b3IgfHwgZWxlbS5tYXRjaGVzKHNlbGVjdG9yKSkge1xyXG4gICAgICAgICAgICBlbGVtZW50cy5wdXNoKGVsZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZWxlbWVudHM7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCB3cmFwID0gKGVsZW1lbnQsIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSA9PiB7XHJcbiAgICBpZiAoZWxlbWVudC5uZXh0U2libGluZykge1xyXG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgZWxlbWVudC5uZXh0U2libGluZyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gd3JhcHBlci5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZURvd24gPSAoZWxlbWVudCwgZHVyYXRpb24gPSAzMDApID0+IHtcclxuICAgIGxldCBkaXNwbGF5ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZGlzcGxheTtcclxuXHJcbiAgICBpZiAoZGlzcGxheSA9PT0gXCJub25lXCIpIHtcclxuICAgICAgICBkaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gXCJoZWlnaHRcIjtcclxuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7ZHVyYXRpb259bXNgO1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xyXG4gICAgbGV0IGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICBlbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XHJcbiAgICB9LCA1KTtcclxuXHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImhlaWdodFwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwib3ZlcmZsb3dcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb24tZHVyYXRpb25cIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb24tcHJvcGVydHlcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm9wYWNpdHlcIik7XHJcbiAgICB9LCBkdXJhdGlvbiArIDUwKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZVVwID0gKGVsZW1lbnQsIGR1cmF0aW9uID0gMzAwKSA9PiB7XHJcbiAgICBlbGVtZW50LnN0eWxlLmJveFNpemluZyA9IFwiYm9yZGVyLWJveFwiO1xyXG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSBcImhlaWdodCwgbWFyZ2luXCI7XHJcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke2R1cmF0aW9ufW1zYDtcclxuICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7ZWxlbWVudC5vZmZzZXRIZWlnaHR9cHhgO1xyXG4gICAgZWxlbWVudC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAwO1xyXG4gICAgfSwgNSk7XHJcblxyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJoZWlnaHRcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm1hcmdpbi10b3BcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm1hcmdpbi1ib3R0b21cIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm92ZXJmbG93XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uLXByb3BlcnR5XCIpO1xyXG4gICAgfSwgZHVyYXRpb24gKyA1MCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVUb2dnbGUgPSAoZWxlbWVudCwgZHVyYXRpb24pID0+IHtcclxuICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmRpc3BsYXkgPT09IFwibm9uZVwiID8gc2xpZGVEb3duKGVsZW1lbnQsIGR1cmF0aW9uKSA6IHNsaWRlVXAoZWxlbWVudCwgZHVyYXRpb24pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZhZGVJbiA9IChlbGVtZW50LCBfb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIGR1cmF0aW9uOiAzMDAsXHJcbiAgICAgICAgZGlzcGxheTogbnVsbCxcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIGNhbGxiYWNrOiBudWxsLFxyXG4gICAgfTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKG9wdGlvbnMsIF9vcHRpb25zKTtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gb3B0aW9ucy5kaXNwbGF5IHx8IFwiYmxvY2tcIjtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBgJHtvcHRpb25zLmR1cmF0aW9ufW1zIG9wYWNpdHkgZWFzZWA7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gb3B0aW9ucy5vcGFjaXR5O1xyXG4gICAgfSwgNSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb25cIik7XHJcbiAgICAgICAgISFvcHRpb25zLmNhbGxiYWNrICYmIG9wdGlvbnMuY2FsbGJhY2soKTtcclxuICAgIH0sIG9wdGlvbnMuZHVyYXRpb24gKyA1MCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmFkZU91dCA9IChlbGVtZW50LCBfb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIGR1cmF0aW9uOiAzMDAsXHJcbiAgICAgICAgZGlzcGxheTogbnVsbCxcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIGNhbGxiYWNrOiBudWxsLFxyXG4gICAgfTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKG9wdGlvbnMsIF9vcHRpb25zKTtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gb3B0aW9ucy5kaXNwbGF5IHx8IFwiYmxvY2tcIjtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBgJHtvcHRpb25zLmR1cmF0aW9ufW1zIG9wYWNpdHkgZWFzZWA7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gb3B0aW9ucy5vcGFjaXR5O1xyXG4gICAgfSwgNSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb25cIik7XHJcbiAgICAgICAgISFvcHRpb25zLmNhbGxiYWNrICYmIG9wdGlvbnMuY2FsbGJhY2soKTtcclxuICAgIH0sIG9wdGlvbnMuZHVyYXRpb24gKyA1MCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmFkZVRvZ2dsZSA9IChlbGVtZW50LCBvcHRpb25zKSA9PiB7XHJcbiAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5kaXNwbGF5ID09PSBcIm5vbmVcIiA/IGZhZGVJbihlbGVtZW50LCBvcHRpb25zKSA6IGZhZGVPdXQoZWxlbWVudCwgb3B0aW9ucyk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgb2Zmc2V0ID0gKGVsZW1lbnQpID0+IHtcclxuICAgIGlmICghZWxlbWVudC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiB7IHRvcDogMCwgbGVmdDogMCB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCBkb2N1bWVudC1yZWxhdGl2ZSBwb3NpdGlvbiBieSBhZGRpbmcgdmlld3BvcnQgc2Nyb2xsIHRvIHZpZXdwb3J0LXJlbGF0aXZlIGdCQ1JcclxuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3Qgd2luID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0b3A6IHJlY3QudG9wICsgd2luLnBhZ2VZT2Zmc2V0LFxyXG4gICAgICAgIGxlZnQ6IHJlY3QubGVmdCArIHdpbi5wYWdlWE9mZnNldCxcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdmlzaWJsZSA9IChlbGVtZW50KSA9PiB7XHJcbiAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICEhKGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgZWxlbWVudC5vZmZzZXRIZWlnaHQgfHwgZWxlbWVudC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2libGluZ3MgPSAoZSkgPT4ge1xyXG4gICAgLy8gZm9yIGNvbGxlY3Rpbmcgc2libGluZ3NcclxuICAgIGNvbnN0IHNpYmxpbmdzID0gW107XHJcblxyXG4gICAgLy8gaWYgbm8gcGFyZW50LCByZXR1cm4gbm8gc2libGluZ1xyXG4gICAgaWYgKCFlLnBhcmVudE5vZGUpIHtcclxuICAgICAgICByZXR1cm4gc2libGluZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZmlyc3QgY2hpbGQgb2YgdGhlIHBhcmVudCBub2RlXHJcbiAgICBsZXQgc2libGluZyA9IGUucGFyZW50Tm9kZS5maXJzdENoaWxkO1xyXG5cclxuICAgIC8vIGNvbGxlY3Rpbmcgc2libGluZ3NcclxuICAgIHdoaWxlIChzaWJsaW5nKSB7XHJcbiAgICAgICAgaWYgKHNpYmxpbmcubm9kZVR5cGUgPT09IDEgJiYgc2libGluZyAhPT0gZSkge1xyXG4gICAgICAgICAgICBzaWJsaW5ncy5wdXNoKHNpYmxpbmcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2libGluZyA9IHNpYmxpbmcubmV4dFNpYmxpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNpYmxpbmdzO1xyXG59O1xyXG5cclxuLy8gUmV0dXJucyB0cnVlIGlmIGl0IGlzIGEgRE9NIGVsZW1lbnRcclxuZXhwb3J0IGNvbnN0IGlzRWxlbWVudCA9IChvKSA9PiB7XHJcbiAgICByZXR1cm4gdHlwZW9mIEhUTUxFbGVtZW50ID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgPyBvIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgLy8gRE9NMlxyXG4gICAgICAgIDogbyAmJiB0eXBlb2YgbyA9PT0gXCJvYmplY3RcIiAmJiBvICE9PSBudWxsICYmIG8ubm9kZVR5cGUgPT09IDEgJiYgdHlwZW9mIG8ubm9kZU5hbWUgPT09IFwic3RyaW5nXCI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaXNTZWxlY3RvclZhbGlkID0gKChkdW1teUVsZW1lbnQpID0+IChzZWxlY3RvcikgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBkdW1teUVsZW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSkoZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpKTtcclxuIiwiaW1wb3J0IHsgRE9NLCBvcHRpb25zIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9nTWFzb25yeSB7XG4gICAgaXNvdG9wO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBzdGFydCA9ICgpID0+IHtcbiAgICAgICAgRE9NLmJsb2cubWFzb25yeUdyaWRzPy5mb3JFYWNoKChibG9nTWFzb25yeUdyaWQpID0+IHtcbiAgICAgICAgICAgIGltYWdlc0xvYWRlZChibG9nTWFzb25yeUdyaWQsIChpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNvdG9wID0gbmV3IElzb3RvcGUoYmxvZ01hc29ucnlHcmlkLCB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1TZWxlY3RvcjogXCIuaXNvdG9wZS1lbnRyeVwiLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1zRW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgaXNPcmlnaW5MZWZ0OiBvcHRpb25zLmlzUlRMID8gZmFsc2UgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb246IDAsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbiIsImltcG9ydCBSZXNwb25zaXZlQXV0b0hlaWdodCBmcm9tIFwicmVzcG9uc2l2ZS1hdXRvLWhlaWdodFwiO1xyXG5cclxuY2xhc3MgRXF1YWxIZWlnaHRFbGVtZW50cyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ibG9nLWVxdWFsLWhlaWdodHMgLmJsb2ctZW50cnktaW5uZXJcIikpIHtcclxuICAgICAgICAgICAgbmV3IFJlc3BvbnNpdmVBdXRvSGVpZ2h0KFwiLmJsb2ctZXF1YWwtaGVpZ2h0cyAuYmxvZy1lbnRyeS1pbm5lclwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWF0Y2gtaGVpZ2h0LWdyaWQgLm1hdGNoLWhlaWdodC1jb250ZW50XCIpKSB7XHJcbiAgICAgICAgICAgIG5ldyBSZXNwb25zaXZlQXV0b0hlaWdodChcIi5tYXRjaC1oZWlnaHQtZ3JpZCAubWF0Y2gtaGVpZ2h0LWNvbnRlbnRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXF1YWxIZWlnaHRFbGVtZW50cztcclxuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyIHtcclxuICAgICNsYXN0V2luZG93V2lkdGg7XHJcbiAgICAjbGFzdFdpbmRvd0hlaWdodDtcclxuICAgICNmb290ZXJQb3NpdGlvblN0YXRlID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAoIURPTS5tYWluKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgICNzdGFydCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLiNsYXN0V2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICB0aGlzLiNsYXN0V2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgfTtcclxuXHJcbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgdGhpcy4jb25XaW5kb3dMb2FkKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLiNvbldpbmRvd1Jlc2l6ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICNvbldpbmRvd0xvYWQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLiNmaXhGb290ZXJBdE1pZGRsZVBhZ2UoKTtcclxuICAgICAgICB0aGlzLiNmaXhlZEZvb3RlcigpO1xyXG4gICAgICAgIHRoaXMuI3BhcmFsbGF4Rm9vdGVyKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICNvbldpbmRvd1Jlc2l6ZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuI2ZpeEZvb3RlckF0TWlkZGxlUGFnZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLiNsYXN0V2luZG93V2lkdGggIT09IHdpbmRvdy5pbm5lcldpZHRoIHx8IHRoaXMuI2xhc3RXaW5kb3dIZWlnaHQgIT09IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLiNmaXhlZEZvb3RlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiNwYXJhbGxheEZvb3RlcigpO1xyXG4gICAgfTtcclxuXHJcbiAgICAjZml4Rm9vdGVyQXRNaWRkbGVQYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdwQWRtaW5iYXJIZWlnaHQgPSBET00uV1BBZG1pbmJhcj8ub2Zmc2V0SGVpZ2h0ID8/IDA7XHJcbiAgICAgICAgY29uc3QgZm9vdGVyQmFySGVpZ2h0ID0gRE9NLmZvb3Rlci5mb290ZXJCYXI/Lm9mZnNldEhlaWdodCA/PyAwO1xyXG4gICAgICAgIGNvbnN0IGh0bWxIZWlnaHQgPSBET00uaHRtbC5vZmZzZXRIZWlnaHQgLSB3cEFkbWluYmFySGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoaHRtbEhlaWdodCA8IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgICAgICBET00ud3JhcC5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gJHt3cEFkbWluYmFySGVpZ2h0fXB4IC0gJHtmb290ZXJCYXJIZWlnaHR9cHgpO1xyXG4gICAgICAgICAgICBgO1xyXG5cclxuICAgICAgICAgICAgaWYgKCEhRE9NLmZvb3Rlci5jYWxsb3V0Rm9vdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBET00uZm9vdGVyLmNhbGxvdXRGb290ZXIuc3R5bGUubWFyZ2luVG9wID0gXCJhdXRvXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoISFET00uZm9vdGVyLnNpdGVGb290ZXIpIHtcclxuICAgICAgICAgICAgICAgIERPTS5mb290ZXIuc2l0ZUZvb3Rlci5zdHlsZS5tYXJnaW5Ub3AgPSBcImF1dG9cIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy4jZm9vdGVyUG9zaXRpb25TdGF0ZSA9IFwiY2hhbmdlZFwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy4jZm9vdGVyUG9zaXRpb25TdGF0ZSA9PT0gXCJjaGFuZ2VkXCIpIHtcclxuICAgICAgICAgICAgRE9NLndyYXAuc3R5bGUuY3NzVGV4dCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBpZiAoISFET00uZm9vdGVyLmNhbGxvdXRGb290ZXIpIHtcclxuICAgICAgICAgICAgICAgIERPTS5mb290ZXIuY2FsbG91dEZvb3Rlci5zdHlsZS5tYXJnaW5Ub3AgPSBudWxsO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgRE9NLmZvb3Rlci5zaXRlRm9vdGVyLnN0eWxlLm1hcmdpblRvcCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuI2Zvb3RlclBvc2l0aW9uU3RhdGUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgI2ZpeGVkRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJoYXMtZml4ZWQtZm9vdGVyXCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xyXG5cclxuICAgICAgICBpZiAoISFET00uV1BBZG1pbmJhcikge1xyXG4gICAgICAgICAgICBvZmZzZXQgPSBET00uV1BBZG1pbmJhci5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBET00ubWFpbi5zdHlsZS5taW5IZWlnaHQgPSBET00ubWFpbi5vZmZzZXRIZWlnaHQgKyAod2luZG93LmlubmVySGVpZ2h0IC0gRE9NLmh0bWwub2Zmc2V0SGVpZ2h0IC0gb2Zmc2V0KSArIFwicHhcIjtcclxuICAgIH07XHJcblxyXG4gICAgI3BhcmFsbGF4Rm9vdGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJoYXMtcGFyYWxsYXgtZm9vdGVyXCIpKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1haW5TZWN0aW9uTWFyZ2luQm90dG9tID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICBtYWluU2VjdGlvbk1hcmdpbkJvdHRvbSArPSBET00uZm9vdGVyLnBhcmFsbGF4Py5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCEhRE9NLmZvb3Rlci5jYWxsb3V0Rm9vdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRE9NLmZvb3Rlci5jYWxsb3V0Rm9vdGVyLnN0eWxlLmJvdHRvbSA9IGAke21haW5TZWN0aW9uTWFyZ2luQm90dG9tfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICBtYWluU2VjdGlvbk1hcmdpbkJvdHRvbSArPSBET00uZm9vdGVyLmNhbGxvdXRGb290ZXIub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIERPTS5tYWluLnN0eWxlLm1hcmdpbkJvdHRvbSA9IGAke21haW5TZWN0aW9uTWFyZ2luQm90dG9tfXB4YDtcclxuICAgICAgICAgICAgfSwgMTApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IFZlcnRpY2FsSGVhZGVyIGZyb20gXCIuL2hlYWRlci92ZXJ0aWNhbFwiO1xyXG5cclxuY2xhc3MgSGVhZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudmVydGljYWwgPSBuZXcgVmVydGljYWxIZWFkZXIoKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IHsgRE9NLCBvcHRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBzbGlkZURvd24sIHNsaWRlVXAgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzXCI7XHJcblxyXG5jbGFzcyBWZXJ0aWNhbEhlYWRlciB7XHJcbiAgICAjbWVudUl0ZW1zUGx1c0ljb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKCFET00uaGVhZGVyLnZlcnRpY2FsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgICNzdGFydCA9ICgpID0+IHtcclxuICAgICAgICBET00uaGVhZGVyLnZlcnRpY2FsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaS5tZW51LWl0ZW0taGFzLWNoaWxkcmVuOm5vdCguYnRuKSA+IGFcIikuZm9yRWFjaCgobWVudUxpbmspID0+IHtcclxuICAgICAgICAgICAgbWVudUxpbmsuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsICc8c3BhbiBjbGFzcz1cImRyb3Bkb3duLXRvZ2dsZVwiIHRhYmluZGV4PVwiMFwiPjwvc3Bhbj4nKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy4jbWVudUl0ZW1zUGx1c0ljb24gPVxyXG4gICAgICAgICAgICBvcHRpb25zLnZlcnRpY2FsSGVhZGVyVGFyZ2V0ID09IFwibGlua1wiXHJcbiAgICAgICAgICAgICAgICA/IERPTS5oZWFkZXIudmVydGljYWwucXVlcnlTZWxlY3RvckFsbChcImxpLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhXCIpXHJcbiAgICAgICAgICAgICAgICA6IERPTS5oZWFkZXIudmVydGljYWwucXVlcnlTZWxlY3RvckFsbChcIi5kcm9wZG93bi10b2dnbGVcIik7XHJcblxyXG4gICAgICAgIG5ldyBQZXJmZWN0U2Nyb2xsYmFyKERPTS5oZWFkZXIudmVydGljYWwsIHtcclxuICAgICAgICAgICAgd2hlZWxTcGVlZDogMC41LFxyXG4gICAgICAgICAgICBzdXBwcmVzc1Njcm9sbFg6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdXBwcmVzc1Njcm9sbFk6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLiNtZW51SXRlbXNQbHVzSWNvbi5mb3JFYWNoKChtZW51SXRlbVBsdXNJY29uKSA9PiB7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtUGx1c0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uTWVudUl0ZW1QbHVzSWNvbkNsaWNrKTtcclxuICAgICAgICAgICAgbWVudUl0ZW1QbHVzSWNvbi5hZGRFdmVudExpc3RlbmVyKFwidGFwXCIsIHRoaXMuI29uTWVudUl0ZW1QbHVzSWNvbkNsaWNrKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgRE9NLm1lbnUudmVydGljYWwudG9nZ2xlTWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25Ub2dnbGVNZW51QnRuQ2xpY2spO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLiNvbkRvY3VtZW50S2V5ZG93bik7XHJcbiAgICB9O1xyXG5cclxuICAgICNvbk1lbnVJdGVtUGx1c0ljb25DbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtUGx1c0ljb24gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID1cclxuICAgICAgICAgICAgb3B0aW9ucy52ZXJ0aWNhbEhlYWRlclRhcmdldCA9PSBcImxpbmtcIiA/IG1lbnVJdGVtUGx1c0ljb24ucGFyZW50Tm9kZSA6IG1lbnVJdGVtUGx1c0ljb24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgIGNvbnN0IHN1Yk1lbnUgPSBtZW51SXRlbS5sYXN0RWxlbWVudENoaWxkO1xyXG5cclxuICAgICAgICBpZiAoIW1lbnVJdGVtPy5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgc2xpZGVEb3duKHN1Yk1lbnUsIDI1MCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgc2xpZGVVcChzdWJNZW51LCAyNTApO1xyXG5cclxuICAgICAgICAgICAgbWVudUl0ZW0ucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LWl0ZW0taGFzLWNoaWxkcmVuLmFjdGl2ZVwiKT8uZm9yRWFjaCgob3Blbk1lbnVJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvcGVuTWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIHNsaWRlVXAob3Blbk1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKSwgMjUwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAjb25Ub2dnbGVNZW51QnRuQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInZoLW9wZW5lZFwiKSkge1xyXG4gICAgICAgICAgICBET00uYm9keS5jbGFzc0xpc3QuYWRkKFwidmgtb3BlbmVkXCIpO1xyXG4gICAgICAgICAgICBET00ubWVudS52ZXJ0aWNhbC50b2dnbGVNZW51QnRuLnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyXCIpLmNsYXNzTGlzdC5hZGQoXCJpcy1hY3RpdmVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgRE9NLmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInZoLW9wZW5lZFwiKTtcclxuICAgICAgICAgICAgRE9NLm1lbnUudmVydGljYWwudG9nZ2xlTWVudUJ0bi5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgRE9NLm1lbnUudmVydGljYWwudG9nZ2xlTWVudUJ0bi5mb2N1cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRyYXAga2V5Ym9hcmQgbmF2aWdhdGlvblxyXG4gICAgICovXHJcbiAgICAjb25Eb2N1bWVudEtleWRvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB0YWJLZXkgPSBldmVudC5rZXlDb2RlID09PSA5O1xyXG4gICAgICAgIGNvbnN0IHNoaWZ0S2V5ID0gZXZlbnQuc2hpZnRLZXk7XHJcbiAgICAgICAgY29uc3QgZXNjS2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gMjc7XHJcbiAgICAgICAgY29uc3QgZW50ZXJLZXkgPSBldmVudC5rZXlDb2RlID09PSAxMztcclxuXHJcbiAgICAgICAgY29uc3QgbmF2RWxlbWVudHMgPSBET00uaGVhZGVyLnZlcnRpY2FsPy5xdWVyeVNlbGVjdG9yQWxsKFwiYSwgc3Bhbi5kcm9wZG93bi10b2dnbGUsIGlucHV0LCBidXR0b25cIik7XHJcbiAgICAgICAgY29uc3QgbmF2Rmlyc3RFbGVtZW50ID0gbmF2RWxlbWVudHMgPyBuYXZFbGVtZW50c1swXSA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgbmF2TGFzdEVsZW1lbnQgPSBuYXZFbGVtZW50cyA/IG5hdkVsZW1lbnRzW25hdkVsZW1lbnRzLmxlbmd0aCAtIDFdIDogXCJcIjtcclxuXHJcbiAgICAgICAgbmF2TGFzdEVsZW1lbnQuc3R5bGUub3V0bGluZSA9IFwiXCI7XHJcblxyXG4gICAgICAgIGlmIChET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbC1oZWFkZXItc3R5bGVcIikpIHtcclxuICAgICAgICAgICAgaWYgKCFET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJ2aC1jbG9zZWRcIikpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbnRlcktleSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Bkb3duLXRvZ2dsZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJ2aC1vcGVuZWRcIikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVzY0tleSkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLiNvblRvZ2dsZU1lbnVCdG5DbGljayhldmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGVudGVyS2V5ICYmXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcGRvd24tdG9nZ2xlXCIpICYmXHJcbiAgICAgICAgICAgIERPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInZoLWNsb3NlZFwiKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXNoaWZ0S2V5ICYmIHRhYktleSAmJiBuYXZMYXN0RWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBuYXZGaXJzdEVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBlbGVtZW50cyBpbiB0aGUgbWVudSwgZG9uJ3QgbW92ZSB0aGUgZm9jdXNcclxuICAgICAgICBpZiAodGFiS2V5ICYmIG5hdkZpcnN0RWxlbWVudCA9PT0gbmF2TGFzdEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWZXJ0aWNhbEhlYWRlcjtcclxuIiwiaW1wb3J0IHsgZmFkZUluLCBmYWRlT3V0IH0gZnJvbSBcIi4uLy4uL2xpYi91dGlsc1wiO1xyXG5pbXBvcnQgRnVsbFNjcmVlbk1lbnUgZnJvbSBcIi4vbWVudS9mdWxsLXNjcmVlblwiO1xyXG5pbXBvcnQgTWVnYU1lbnUgZnJvbSBcIi4vbWVudS9tZWdhXCI7XHJcblxyXG5jbGFzcyBNZW51IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgICNzdGFydCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmZ1bGxTY3JlZW4gPSBuZXcgRnVsbFNjcmVlbk1lbnUoKTtcclxuICAgICAgICB0aGlzLm1lZ2EgPSBuZXcgTWVnYU1lbnUoKTtcclxuICAgIH07XHJcblxyXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpLm5hdi1uby1jbGljayA+IGFcIikuZm9yRWFjaCgobm9DbGlja01lbnVJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIG5vQ2xpY2tNZW51SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25Ob0NsaWNrTWVudUl0ZW1DbGljayk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ1bC5zZi1tZW51XCIpLmZvckVhY2goKG1lbnUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50TWVudUl0ZW1zID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW5cIik7XHJcbiAgICAgICAgICAgIHBhcmVudE1lbnVJdGVtcy5mb3JFYWNoKChwYXJlbnRNZW51SXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50TWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgdGhpcy4jb25QYXJlbnRNZW51SXRlbU1vdXNlZW50ZXIpO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50TWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy4jb25QYXJlbnRNZW51SXRlbU1vdXNlbGVhdmUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgI29uTm9DbGlja01lbnVJdGVtQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25QYXJlbnRNZW51SXRlbU1vdXNlZW50ZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBwYXJlbnRNZW51SXRlbSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgY29uc3Qgc3ViTWVudSA9IHBhcmVudE1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3IoXCJ1bC5zdWItbWVudVwiKTtcclxuXHJcbiAgICAgICAgcGFyZW50TWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcInNmSG92ZXJcIik7XHJcbiAgICAgICAgZmFkZUluKHN1Yk1lbnUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25QYXJlbnRNZW51SXRlbU1vdXNlbGVhdmUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBwYXJlbnRNZW51SXRlbSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgY29uc3Qgc3ViTWVudSA9IHBhcmVudE1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3IoXCJ1bC5zdWItbWVudVwiKTtcclxuXHJcbiAgICAgICAgcGFyZW50TWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcInNmSG92ZXJcIik7XHJcbiAgICAgICAgZmFkZU91dChzdWJNZW51KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnU7XHJcbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZhZGVJbiwgZmFkZU91dCwgc2xpZGVEb3duLCBzbGlkZVVwIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi91dGlsc1wiO1xuXG5jbGFzcyBGdWxsU2NyZWVuTWVudSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmICghRE9NLm1lbnUuZnVsbFNjcmVlbi50b2dnbGVNZW51QnRuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzdGFydCgpO1xuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xuICAgICAgICBET00ubWVudS5mdWxsU2NyZWVuLm1lbnUucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtYXJyb3dcIikuZm9yRWFjaCgocGx1c0J0bikgPT4ge1xuICAgICAgICAgICAgcGx1c0J0bi5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCAwKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBET00ubWVudS5mdWxsU2NyZWVuLnRvZ2dsZU1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uVG9nZ2xlTWVudUJ0bkNsaWNrKTtcblxuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgICAgJyNmdWxsLXNjcmVlbi1tZW51ICNzaXRlLW5hdmlnYXRpb24gdWwgPiBsaS5kcm9wZG93biA+IGEgPiAudGV4dC13cmFwID4gc3Bhbi5uYXYtYXJyb3csICNmdWxsLXNjcmVlbi1tZW51ICNzaXRlLW5hdmlnYXRpb24gdWwgPiBsaS5kcm9wZG93biA+IGFbaHJlZj1cIiNcIl0nXG4gICAgICAgICAgICApXG4gICAgICAgICAgICA/LmZvckVhY2goKG1lbnVJdGVtTGluaykgPT4ge1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25NZW51TGlua0NsaWNrKTtcbiAgICAgICAgICAgICAgICBtZW51SXRlbUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcInRhcFwiLCB0aGlzLiNvbk1lbnVMaW5rQ2xpY2spO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcjZnVsbC1zY3JlZW4tbWVudSAjc2l0ZS1uYXZpZ2F0aW9uIGEubWVudS1saW5rW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKScpXG4gICAgICAgICAgICAuZm9yRWFjaCgobWVudUl0ZW1MaW5rKSA9PiB7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW1MaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbk1lbnVIYXNodGFnTGlua0NsaWNrKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuI29uRG9jdW1lbnRLZXlkb3duKTtcbiAgICB9O1xuXG4gICAgI29uVG9nZ2xlTWVudUJ0bkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgdG9nZ2xlTWVudUJ0biA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG5cbiAgICAgICAgaWYgKCF0b2dnbGVNZW51QnRuLmNsYXNzTGlzdC5jb250YWlucyhcImV4aXRcIikpIHtcbiAgICAgICAgICAgIHRoaXMuI29wZW5NZW51KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiNjbG9zZU1lbnUoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjb25NZW51TGlua0NsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtTGluayA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gbWVudUl0ZW1MaW5rLmNsb3Nlc3QoXCJsaS5kcm9wZG93blwiKTtcbiAgICAgICAgY29uc3Qgc3ViTWVudSA9IG1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3IoXCJ1bC5zdWItbWVudVwiKTtcblxuICAgICAgICBpZiAoISh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzdWJNZW51KS5kaXNwbGF5ID09PSBcIm5vbmVcIikpIHtcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuLXN1YlwiKTtcbiAgICAgICAgICAgIHNsaWRlVXAoc3ViTWVudSwgMjUwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJvcGVuLXN1YlwiKTtcbiAgICAgICAgICAgIHNsaWRlRG93bihzdWJNZW51LCAyNTApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICNvbk1lbnVIYXNodGFnTGlua0NsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuI2Nsb3NlTWVudSgpO1xuICAgIH07XG5cbiAgICAjb3Blbk1lbnUgPSAoKSA9PiB7XG4gICAgICAgIERPTS5oZWFkZXIuZnVsbFNjcmVlbi5jbGFzc0xpc3QuYWRkKFwibmF2LW9wZW5cIik7XG4gICAgICAgIERPTS5tZW51LmZ1bGxTY3JlZW4udG9nZ2xlTWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwiZXhpdFwiKTtcbiAgICAgICAgRE9NLm1lbnUuZnVsbFNjcmVlbi5sb2dvPy5jbGFzc0xpc3QuYWRkKFwib3BlbmVkXCIpO1xuICAgICAgICBET00ubWVudS5mdWxsU2NyZWVuLm1lbnUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICAgICAgICBmYWRlSW4oRE9NLm1lbnUuZnVsbFNjcmVlbi5tZW51KTtcblxuICAgICAgICBjb25zdCBodG1sV2lkdGhCZWZvcmVPdmVyZmxvd0hpZGRlbiA9IERPTS5odG1sLmlubmVyV2lkdGg7XG4gICAgICAgIERPTS5odG1sLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgY29uc3QgaHRtbFdpZHRoQWZ0ZXJPdmVyZmxvd0hpZGRlbiA9IERPTS5odG1sLmlubmVyV2lkdGg7XG4gICAgICAgIERPTS5odG1sLnN0eWxlLm1hcmdpblJpZ2h0ID0gaHRtbFdpZHRoQmVmb3JlT3ZlcmZsb3dIaWRkZW4gLSBodG1sV2lkdGhBZnRlck92ZXJmbG93SGlkZGVuICsgXCJweFwiO1xuICAgIH07XG5cbiAgICAjY2xvc2VNZW51ID0gKCkgPT4ge1xuICAgICAgICBET00uaGVhZGVyLmZ1bGxTY3JlZW4uY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1vcGVuXCIpO1xuICAgICAgICBET00ubWVudS5mdWxsU2NyZWVuLnRvZ2dsZU1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZShcImV4aXRcIik7XG4gICAgICAgIERPTS5tZW51LmZ1bGxTY3JlZW4ubG9nbz8uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5lZFwiKTtcbiAgICAgICAgRE9NLm1lbnUuZnVsbFNjcmVlbi5tZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgZmFkZU91dChET00ubWVudS5mdWxsU2NyZWVuLm1lbnUpO1xuXG4gICAgICAgIERPTS5odG1sLnN0eWxlLm92ZXJmbG93ID0gXCJcIjtcbiAgICAgICAgRE9NLmh0bWwuc3R5bGUubWFyZ2luUmlnaHQgPSBcIlwiO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZnVsbC1zY3JlZW4tbWVudSAjc2l0ZS1uYXZpZ2F0aW9uIHVsID4gbGkuZHJvcGRvd25cIikuZm9yRWFjaCgobWVudUl0ZW0pID0+IHtcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuLXN1YlwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNmdWxsLXNjcmVlbi1tZW51ICNzaXRlLW5hdmlnYXRpb24gdWwuc3ViLW1lbnVcIikuZm9yRWFjaCgoc3ViTWVudSkgPT4ge1xuICAgICAgICAgICAgc2xpZGVVcChzdWJNZW51LCAyNTApO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVHJhcCBrZXlib2FyZCBuYXZpZ2F0aW9uIGluIHRoZSBtZW51IG1vZGFsLlxuICAgICAqL1xuICAgICNvbkRvY3VtZW50S2V5ZG93biA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoIURPTS5tZW51LmZ1bGxTY3JlZW4ubWVudT8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YWJLZXkgPSBldmVudC5rZXlDb2RlID09PSA5O1xuICAgICAgICBjb25zdCBzaGlmdEtleSA9IGV2ZW50LnNoaWZ0S2V5O1xuICAgICAgICBjb25zdCBlc2NLZXkgPSBldmVudC5rZXlDb2RlID09PSAyNztcbiAgICAgICAgY29uc3QgZW50ZXJLZXkgPSBldmVudC5rZXlDb2RlID09PSAxMztcblxuICAgICAgICBjb25zdCBjbG9zZUljb24gPSBET00ubWVudS5mdWxsU2NyZWVuLnRvZ2dsZU1lbnVCdG47XG5cbiAgICAgICAgY29uc3QgbmF2RWxlbWVudHMgPSBET00ubWVudS5mdWxsU2NyZWVuLm1lbnVcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcImEsIHNwYW4ubmF2LWFycm93LCBpbnB1dCwgYnV0dG9uXCIpO1xuXG4gICAgICAgIGNvbnN0IG5hdkZpcnN0RWxlbWVudCA9IG5hdkVsZW1lbnRzWzBdO1xuICAgICAgICBjb25zdCBuYXZMYXN0RWxlbWVudCA9IG5hdkVsZW1lbnRzW25hdkVsZW1lbnRzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCJcIjtcblxuICAgICAgICBpZiAoZXNjS2V5KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy4jY2xvc2VNZW51KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50ZXJLZXkgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJuYXYtYXJyb3dcIikpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsaWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNoaWZ0S2V5ICYmIHRhYktleSAmJiBuYXZMYXN0RWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCIxcHggZGFzaGVkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KVwiO1xuICAgICAgICAgICAgY2xvc2VJY29uLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hpZnRLZXkgJiYgdGFiS2V5ICYmIG5hdkZpcnN0RWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zdHlsZS5vdXRsaW5lID0gXCIxcHggZGFzaGVkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KVwiO1xuICAgICAgICAgICAgY2xvc2VJY29uLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gZWxlbWVudHMgaW4gdGhlIG1lbnUsIGRvbid0IG1vdmUgdGhlIGZvY3VzXG4gICAgICAgIGlmICh0YWJLZXkgJiYgbmF2Rmlyc3RFbGVtZW50ID09PSBuYXZMYXN0RWxlbWVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bGxTY3JlZW5NZW51O1xuIiwiaW1wb3J0IHsgRE9NLCBvcHRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgb2Zmc2V0IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi91dGlsc1wiO1xuXG5jbGFzcyBNZWdhTWVudSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAjc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIERPTS5tZW51Lm1lZ2EubWVudUNvbnRlbnRzLmZvckVhY2goKG1lbnVDb250ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZW51SXRlbSA9IG1lbnVDb250ZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICBjb25zdCBtZW51SXRlbUxlZnRPZmZzZXQgPSBvZmZzZXQobWVudUl0ZW0pLmxlZnQ7XG4gICAgICAgICAgICBjb25zdCBtZW51Q29udGVudFdpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUobWVudUNvbnRlbnQpLndpZHRoKTtcbiAgICAgICAgICAgIGxldCBob3Jpem9udGFsUG9zaXRpb247XG4gICAgICAgICAgICBsZXQgaG9yaXpvbnRhbE1hcmdpbjtcblxuICAgICAgICAgICAgaWYgKG1lbnVJdGVtTGVmdE9mZnNldCAtIG1lbnVDb250ZW50V2lkdGggLyAyIDwgMCkge1xuICAgICAgICAgICAgICAgIGhvcml6b250YWxQb3NpdGlvbiA9IG1lbnVJdGVtTGVmdE9mZnNldCAtIDEwO1xuICAgICAgICAgICAgICAgIGhvcml6b250YWxNYXJnaW4gPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsUG9zaXRpb24gPSBtZW51Q29udGVudFdpZHRoIC8gMjtcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsTWFyZ2luID0gbWVudUl0ZW0ub2Zmc2V0V2lkdGggLyAyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuaXNSVEwpIHtcbiAgICAgICAgICAgICAgICBtZW51Q29udGVudC5zdHlsZS5sZWZ0ID0gYC0ke2hvcml6b250YWxQb3NpdGlvbn1weGA7XG4gICAgICAgICAgICAgICAgbWVudUNvbnRlbnQuc3R5bGUubWFyZ2luTGVmdCA9IGAke2hvcml6b250YWxNYXJnaW59cHhgO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZW51Q29udGVudC5zdHlsZS5yaWdodCA9IGAtJHtob3Jpem9udGFsUG9zaXRpb259cHhgO1xuICAgICAgICAgICAgICAgIG1lbnVDb250ZW50LnN0eWxlLm1hcmdpblJpZ2h0ID0gYCR7aG9yaXpvbnRhbE1hcmdpbn1weGA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAtXG4gICAgICAgICAgICAgICAgICAgIG1lbnVJdGVtTGVmdE9mZnNldCAtXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxQb3NpdGlvbiArXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxNYXJnaW4gK1xuICAgICAgICAgICAgICAgICAgICBtZW51Q29udGVudFdpZHRoIDxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBtZW51Q29udGVudC5zdHlsZS5sZWZ0ID0gXCJhdXRvXCI7XG4gICAgICAgICAgICAgICAgbWVudUNvbnRlbnQuc3R5bGUucmlnaHQgPSBgLSR7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIC0gbWVudUl0ZW1MZWZ0T2Zmc2V0IC0gbWVudUl0ZW0ub2Zmc2V0V2lkdGggLSAxMFxuICAgICAgICAgICAgICAgIH1weGA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgRE9NLm1lbnUubWVnYS5tZW51SXRlbXMuZm9yRWFjaCgobWVudUl0ZW0pID0+IHtcbiAgICAgICAgICAgIG1lbnVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHRoaXMuI29uTWVudUl0ZW1Nb3VzZUVudGVyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVG9wYmFyIG1lbnUgaXRlbXNcbiAgICAgICAgRE9NLm1lbnUubWVnYS50b3BiYXJNZW51SXRlbXMuZm9yRWFjaCgobWVudUl0ZW0pID0+IHtcbiAgICAgICAgICAgIG1lbnVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHRoaXMuI29uVG9wYmFyTWVudUl0ZW1Nb3VzZUVudGVyKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICNvbk1lbnVJdGVtTW91c2VFbnRlciA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gRE9NLmhlYWRlci5zaXRlLmNsYXNzTGlzdC5jb250YWlucyhcIm1lZGl1bS1oZWFkZXJcIilcbiAgICAgICAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLW5hdmlnYXRpb24td3JhcCA+IC5jb250YWluZXJcIilcbiAgICAgICAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci1pbm5lclwiKTtcblxuICAgICAgICB0aGlzLiNtZW51SXRlbU1vdXNlRW50ZXIod3JhcHBlciwgZXZlbnQpO1xuICAgIH07XG5cbiAgICAjb25Ub3BiYXJNZW51SXRlbU1vdXNlRW50ZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IERPTS5oZWFkZXIudG9wYmFyO1xuXG4gICAgICAgIHRoaXMuI21lbnVJdGVtTW91c2VFbnRlcih3cmFwcGVyLCBldmVudCk7XG4gICAgfTtcblxuICAgICNtZW51SXRlbU1vdXNlRW50ZXIgPSAod3JhcHBlciwgZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBjb25zdCBjb250ZW50ID0gbWVudUl0ZW0ucXVlcnlTZWxlY3RvcihcIi5tZWdhbWVudVwiKTtcbiAgICAgICAgbGV0IGxlZnRQb3NpdGlvbiA9IHBhcnNlSW50KG9mZnNldChtZW51SXRlbSkubGVmdCAtIG9mZnNldCh3cmFwcGVyKS5sZWZ0ICsgMSk7XG5cbiAgICAgICAgaWYgKCFjb250ZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYm94ZWQtbGF5b3V0XCIpKSB7XG4gICAgICAgICAgICBsZWZ0UG9zaXRpb24gPSBsZWZ0UG9zaXRpb24gLSAzMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRlbnQuc3R5bGUubGVmdCA9IGAtJHtsZWZ0UG9zaXRpb259cHhgO1xuICAgICAgICBjb250ZW50LnN0eWxlLndpZHRoID0gYCR7d3JhcHBlci5vZmZzZXRXaWR0aH1weGA7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVnYU1lbnU7XG4iLCJpbXBvcnQgRHJvcERvd25Nb2JpbGVNZW51IGZyb20gXCIuL21vYmlsZS1tZW51L2Ryb3AtZG93blwiO1xyXG5pbXBvcnQgRnVsbFNjcmVlbk1vYmlsZU1lbnUgZnJvbSBcIi4vbW9iaWxlLW1lbnUvZnVsbC1zY3JlZW5cIjtcclxuaW1wb3J0IFNpZGViYXJNb2JpbGVNZW51IGZyb20gXCIuL21vYmlsZS1tZW51L3NpZGViYXJcIjtcclxuXHJcbmNsYXNzIE1vYmlsZU1lbnUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAjc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kcm9wRG93biA9IG5ldyBEcm9wRG93bk1vYmlsZU1lbnUoKTtcclxuICAgICAgICB0aGlzLmZ1bGxTY3JlZW4gPSBuZXcgRnVsbFNjcmVlbk1vYmlsZU1lbnUoKTtcclxuICAgICAgICB0aGlzLnNpZGViYXIgPSBuZXcgU2lkZWJhck1vYmlsZU1lbnUoKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vYmlsZU1lbnU7XHJcbiIsImltcG9ydCBkZWxlZ2F0ZSBmcm9tIFwiZGVsZWdhdGVcIjtcbmltcG9ydCB7IERPTSwgb3B0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHNsaWRlVXAsIHNsaWRlRG93biwgc2xpZGVUb2dnbGUgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzXCI7XG5cbmNsYXNzIERyb3BEb3duTW9iaWxlTWVudSB7XG4gICAgI2lzTWVudU9wZW47XG4gICAgI21lbnVJdGVtc1RvZ2dsZUljb247XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKCFET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJkcm9wZG93bi1tb2JpbGVcIikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAjc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuI2lzTWVudU9wZW4gPSBmYWxzZTtcblxuICAgICAgICBET00ubW9iaWxlTWVudS5tZW51SXRlbXNIYXNDaGlsZHJlbj8uZm9yRWFjaCgobWVudUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICBzcGFuLmNsYXNzTmFtZSA9IFwiZHJvcGRvd24tdG9nZ2xlXCI7XG4gICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIDApO1xuXG4gICAgICAgICAgICBtZW51SXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFcIilbMF0uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuI21lbnVJdGVtc1RvZ2dsZUljb24gPVxuICAgICAgICAgICAgb3B0aW9ucy5zaWRyRHJvcGRvd25UYXJnZXQgPT0gXCJsaW5rXCJcbiAgICAgICAgICAgICAgICA/IERPTS5tb2JpbGVNZW51Lm5hdldyYXBwZXI/LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaS5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYVwiKVxuICAgICAgICAgICAgICAgIDogRE9NLm1vYmlsZU1lbnUubmF2V3JhcHBlcj8ucXVlcnlTZWxlY3RvckFsbChcIi5kcm9wZG93bi10b2dnbGVcIik7XG4gICAgfTtcblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBkZWxlZ2F0ZShkb2N1bWVudC5ib2R5LCBcIi5tb2JpbGUtbWVudVwiLCBcImNsaWNrXCIsIHRoaXMuI29uVG9nZ2xlTWVudUJ1dHRvbkNsaWNrKTtcblxuICAgICAgICBET00ubW9iaWxlTWVudS5uYXZXcmFwcGVyPy5xdWVyeVNlbGVjdG9yQWxsKCdsaSBhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKScpLmZvckVhY2goKG1lbnVJdGVtTGluaykgPT4ge1xuICAgICAgICAgICAgbWVudUl0ZW1MaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbk1lbnVDbG9zZUNsaWNrKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uTWVudUNsb3NlQ2xpY2spO1xuXG4gICAgICAgIERPTS5tb2JpbGVNZW51Lm5hdldyYXBwZXI/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLiNvbldpbmRvd1Jlc2l6ZSk7XG5cbiAgICAgICAgRE9NLm1vYmlsZU1lbnUuaGFtYnVyZ2VyQnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25IYW1idXJnZXJDbGljayk7XG5cbiAgICAgICAgdGhpcy4jbWVudUl0ZW1zVG9nZ2xlSWNvbj8uZm9yRWFjaCgobWVudUl0ZW1QbHVzSWNvbikgPT4ge1xuICAgICAgICAgICAgbWVudUl0ZW1QbHVzSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25NZW51SXRlbVBsdXNJY29uQ2xpY2spO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLiNvbkRvY3VtZW50S2V5ZG93bik7XG4gICAgfTtcblxuICAgICNvblRvZ2dsZU1lbnVCdXR0b25DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAhIURPTS5tb2JpbGVNZW51Lm5hdldyYXBwZXIgJiYgc2xpZGVUb2dnbGUoRE9NLm1vYmlsZU1lbnUubmF2V3JhcHBlciwgNDAwKTtcbiAgICAgICAgRE9NLm1vYmlsZU1lbnUudG9nZ2xlTWVudUJ0bj8uY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5lZFwiKTtcbiAgICAgICAgRE9NLm1vYmlsZU1lbnUuaGFtYnVyZ2VyQnRuPy5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtYWN0aXZlXCIpO1xuICAgICAgICBET00ubW9iaWxlTWVudS50b2dnbGVNZW51QnRuPy5mb2N1cygpO1xuICAgIH07XG5cbiAgICAjb25NZW51Q2xvc2VDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICAhIURPTS5tb2JpbGVNZW51Lm5hdldyYXBwZXIgJiYgc2xpZGVVcChET00ubW9iaWxlTWVudS5uYXZXcmFwcGVyLCAyNTApO1xuICAgICAgICBET00ubW9iaWxlTWVudS50b2dnbGVNZW51QnRuPy5jbGFzc0xpc3QucmVtb3ZlKFwib3BlbmVkXCIpO1xuICAgICAgICBET00ubW9iaWxlTWVudS5oYW1idXJnZXJCdG4/LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIik7XG4gICAgfTtcblxuICAgICNvbldpbmRvd1Jlc2l6ZSA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gOTYwKSB7XG4gICAgICAgICAgICB0aGlzLiNvbk1lbnVDbG9zZUNsaWNrKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgI29uSGFtYnVyZ2VyQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy4jaXNNZW51T3BlbiA9ICF0aGlzLiNpc01lbnVPcGVuO1xuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgdGhpcy4jaXNNZW51T3Blbik7XG4gICAgfTtcblxuICAgICNvbk1lbnVJdGVtUGx1c0ljb25DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCBtZW51SXRlbVBsdXNJY29uID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPVxuICAgICAgICAgICAgb3B0aW9ucy5zaWRyRHJvcGRvd25UYXJnZXQgPT0gXCJsaW5rXCIgPyBtZW51SXRlbVBsdXNJY29uLnBhcmVudE5vZGUgOiBtZW51SXRlbVBsdXNJY29uLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3Qgc3ViTWVudSA9IG1lbnVJdGVtLmxhc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICAgICAgaWYgKCFtZW51SXRlbT8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgc2xpZGVEb3duKHN1Yk1lbnUsIDI1MCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgc2xpZGVVcChzdWJNZW51LCAyNTApO1xuXG4gICAgICAgICAgICBtZW51SXRlbS5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4uYWN0aXZlXCIpPy5mb3JFYWNoKChvcGVuTWVudUl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBvcGVuTWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICBzbGlkZVVwKG9wZW5NZW51SXRlbS5xdWVyeVNlbGVjdG9yKFwidWxcIikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVHJhcCBrZXlib2FyZCBuYXZpZ2F0aW9uXG4gICAgICovXG4gICAgI29uRG9jdW1lbnRLZXlkb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghRE9NLm1vYmlsZU1lbnUudG9nZ2xlTWVudUJ0bj8uY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BlbmVkXCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YWJLZXkgPSBldmVudC5rZXlDb2RlID09PSA5O1xuICAgICAgICBjb25zdCBzaGlmdEtleSA9IGV2ZW50LnNoaWZ0S2V5O1xuICAgICAgICBjb25zdCBlc2NLZXkgPSBldmVudC5rZXlDb2RlID09PSAyNztcbiAgICAgICAgY29uc3QgZW50ZXJLZXkgPSBldmVudC5rZXlDb2RlID09PSAxMztcblxuICAgICAgICBjb25zdCBjbG9zZUljb24gPSBET00ubW9iaWxlTWVudS50b2dnbGVNZW51QnRuO1xuXG4gICAgICAgIGNvbnN0IG5hdkVsZW1lbnRzID0gRE9NLm1vYmlsZU1lbnUubmF2Py5xdWVyeVNlbGVjdG9yQWxsKFwiYSwgc3Bhbi5kcm9wZG93bi10b2dnbGUsIGlucHV0LCBidXR0b25cIik7XG5cbiAgICAgICAgY29uc3QgbmF2Rmlyc3RFbGVtZW50ID0gbmF2RWxlbWVudHNbMF07XG4gICAgICAgIGNvbnN0IG5hdkxhc3RFbGVtZW50ID0gbmF2RWxlbWVudHNbbmF2RWxlbWVudHMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgaWYgKCEhY2xvc2VJY29uKSB7XG4gICAgICAgICAgICBjbG9zZUljb24uc3R5bGUub3V0bGluZSA9IFwiXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXNjS2V5KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy4jb25NZW51Q2xvc2VDbGljaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudGVyS2V5ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcGRvd24tdG9nZ2xlXCIpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGljaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzaGlmdEtleSAmJiB0YWJLZXkgJiYgbmF2TGFzdEVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjbG9zZUljb24uc3R5bGUub3V0bGluZSA9IFwiMXB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNilcIjtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNoaWZ0S2V5ICYmIHRhYktleSAmJiBuYXZGaXJzdEVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjbG9zZUljb24uc3R5bGUub3V0bGluZSA9IFwiMXB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNilcIjtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIGVsZW1lbnRzIGluIHRoZSBtZW51LCBkb24ndCBtb3ZlIHRoZSBmb2N1c1xuICAgICAgICBpZiAodGFiS2V5ICYmIG5hdkZpcnN0RWxlbWVudCA9PT0gbmF2TGFzdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wRG93bk1vYmlsZU1lbnU7XG4iLCJpbXBvcnQgZGVsZWdhdGUgZnJvbSBcImRlbGVnYXRlXCI7XG5pbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBzbGlkZVVwLCBzbGlkZURvd24sIGZhZGVJbiwgZmFkZU91dCwgdmlzaWJsZSB9IGZyb20gXCIuLi8uLi8uLi9saWIvdXRpbHNcIjtcblxuY2xhc3MgRnVsbFNjcmVlbk1vYmlsZU1lbnUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAoIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImZ1bGxzY3JlZW4tbW9iaWxlXCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzdGFydCgpO1xuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xuICAgICAgICBET00ubW9iaWxlTWVudS5mdWxsU2NyZWVuPy5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhXCIpPy5mb3JFYWNoKChtZW51SXRlbUxpbmspID0+IHtcbiAgICAgICAgICAgIG1lbnVJdGVtTGluay5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgJzxzcGFuIGNsYXNzPVwiZHJvcGRvd24tdG9nZ2xlXCIgdGFiaW5kZXg9MD48L3NwYW4+Jyk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy4jb25XaW5kb3dSZXNpemUpO1xuXG4gICAgICAgIGRlbGVnYXRlKGRvY3VtZW50LmJvZHksIFwiLm1vYmlsZS1tZW51XCIsIFwiY2xpY2tcIiwgdGhpcy4jb25NZW51QnV0dG9uQ2xpY2spO1xuXG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICAgICAnI21vYmlsZS1mdWxsc2NyZWVuIG5hdiB1bCA+IGxpLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhID4gc3Bhbi5kcm9wZG93bi10b2dnbGUsICNtb2JpbGUtZnVsbHNjcmVlbiBuYXYgdWwgPiBsaS5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYVtocmVmPVwiI1wiXSdcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5mb3JFYWNoKChtZW51SXRlbUxpbmspID0+IHtcbiAgICAgICAgICAgICAgICBtZW51SXRlbUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uRHJvcG93blRvZ2dsZUljb24pO1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtTGluay5hZGRFdmVudExpc3RlbmVyKFwidGFwXCIsIHRoaXMuI29uRHJvcG93blRvZ2dsZUljb24pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgICAgICcjbW9iaWxlLWZ1bGxzY3JlZW4gLmZzLWRyb3Bkb3duLW1lbnUgbGkgYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSksICNtb2JpbGUtZnVsbHNjcmVlbiAjbW9iaWxlLW5hdiBsaSBhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKSwgI21vYmlsZS1mdWxsc2NyZWVuIGEuY2xvc2UnXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuZm9yRWFjaCgobWVudUl0ZW1MaW5rKSA9PiB7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW1MaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbkNsb3NlSWNvbkNsaWNrKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuI29uRG9jdW1lbnRLZXlkb3duKTtcbiAgICB9O1xuXG4gICAgI29uTWVudUJ1dHRvbkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIERPTS5tb2JpbGVNZW51LnRvZ2dsZU1lbnVCdG4uY2xhc3NMaXN0LmFkZChcImV4aXRcIik7XG4gICAgICAgIERPTS5tb2JpbGVNZW51LmZ1bGxTY3JlZW4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgRE9NLm1vYmlsZU1lbnUuaGFtYnVyZ2VyQnRuPy5jbGFzc0xpc3QuYWRkKFwiaXMtYWN0aXZlXCIpO1xuXG4gICAgICAgIGZhZGVJbihET00ubW9iaWxlTWVudS5mdWxsU2NyZWVuKTtcblxuICAgICAgICBjb25zdCBodG1sV2lkdGhCZWZvcmVPdmVyZmxvd0hpZGRlbiA9IERPTS5odG1sLmlubmVyV2lkdGg7XG4gICAgICAgIERPTS5odG1sLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgY29uc3QgaHRtbFdpZHRoQWZ0ZXJPdmVyZmxvd0hpZGRlbiA9IERPTS5odG1sLmlubmVyV2lkdGg7XG4gICAgICAgIERPTS5odG1sLnN0eWxlLm1hcmdpblJpZ2h0ID0gaHRtbFdpZHRoQWZ0ZXJPdmVyZmxvd0hpZGRlbiAtIGh0bWxXaWR0aEJlZm9yZU92ZXJmbG93SGlkZGVuICsgXCJweFwiO1xuXG4gICAgICAgIERPTS5tb2JpbGVNZW51LmZ1bGxTY3JlZW4ucXVlcnlTZWxlY3RvcihcImEuY2xvc2VcIikuZm9jdXMoKTtcbiAgICB9O1xuXG4gICAgI29uQ2xvc2VJY29uQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLiNjbG9zZU1lbnUoKTtcbiAgICB9O1xuXG4gICAgI2Nsb3NlTWVudSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHZpc2libGUoRE9NLm1vYmlsZU1lbnUuZnVsbFNjcmVlbikpIHtcbiAgICAgICAgICAgIERPTS5tb2JpbGVNZW51LnRvZ2dsZU1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZShcImV4aXRcIik7XG4gICAgICAgICAgICBET00ubW9iaWxlTWVudS5mdWxsU2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgICAgIGZhZGVPdXQoRE9NLm1vYmlsZU1lbnUuZnVsbFNjcmVlbik7XG5cbiAgICAgICAgICAgIERPTS5odG1sLnN0eWxlLm92ZXJmbG93ID0gXCJcIjtcbiAgICAgICAgICAgIERPTS5odG1sLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCJcIjtcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNtb2JpbGUtZnVsbHNjcmVlbiBuYXYgdWwgPiBsaS5kcm9wZG93blwiKS5mb3JFYWNoKChtZW51SXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuLXN1YlwiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI21vYmlsZS1mdWxsc2NyZWVuIG5hdiB1bC5zdWItbWVudVwiKS5mb3JFYWNoKChzdWJNZW51KSA9PiB7XG4gICAgICAgICAgICAgICAgc2xpZGVVcChzdWJNZW51LCAyNTApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIERPTS5tb2JpbGVNZW51LmhhbWJ1cmdlckJ0bj8uY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjb25XaW5kb3dSZXNpemUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDk2MCkge1xuICAgICAgICAgICAgdGhpcy4jY2xvc2VNZW51KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgI29uRHJvcG93blRvZ2dsZUljb24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgbWVudUl0ZW1MaW5rID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBtZW51SXRlbUxpbmsuY2xvc2VzdChcImxpLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW5cIik7XG4gICAgICAgIGNvbnN0IHN1Yk1lbnUgPSBtZW51SXRlbS5xdWVyeVNlbGVjdG9yKFwidWwuc3ViLW1lbnVcIik7XG5cbiAgICAgICAgaWYgKCEod2luZG93LmdldENvbXB1dGVkU3R5bGUoc3ViTWVudSkuZGlzcGxheSA9PT0gXCJub25lXCIpKSB7XG4gICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1zdWJcIik7XG4gICAgICAgICAgICBzbGlkZVVwKHN1Yk1lbnUsIDI1MCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwib3Blbi1zdWJcIik7XG4gICAgICAgICAgICBzbGlkZURvd24oc3ViTWVudSwgMjUwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUcmFwIGtleWJvYXJkIG5hdmlnYXRpb24gaW4gdGhlIG1lbnUgbW9kYWwuXG4gICAgICovXG4gICAgI29uRG9jdW1lbnRLZXlkb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghRE9NLm1vYmlsZU1lbnUuZnVsbFNjcmVlbj8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YWJLZXkgPSBldmVudC5rZXlDb2RlID09PSA5O1xuICAgICAgICBjb25zdCBzaGlmdEtleSA9IGV2ZW50LnNoaWZ0S2V5O1xuICAgICAgICBjb25zdCBlc2NLZXkgPSBldmVudC5rZXlDb2RlID09PSAyNztcbiAgICAgICAgY29uc3QgZW50ZXJLZXkgPSBldmVudC5rZXlDb2RlID09PSAxMztcblxuICAgICAgICBjb25zdCBjbG9zZUljb24gPSBET00ubW9iaWxlTWVudS5mdWxsU2NyZWVuLnF1ZXJ5U2VsZWN0b3IoXCJhLmNsb3NlXCIpO1xuXG4gICAgICAgIGNvbnN0IG5hdkVsZW1lbnRzID0gRE9NLm1vYmlsZU1lbnUuZnVsbFNjcmVlblxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIilcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiYSwgc3Bhbi5kcm9wZG93bi10b2dnbGUsIGlucHV0LCBidXR0b25cIik7XG5cbiAgICAgICAgY29uc3QgbmF2Rmlyc3RFbGVtZW50ID0gbmF2RWxlbWVudHNbMF07XG4gICAgICAgIGNvbnN0IG5hdkxhc3RFbGVtZW50ID0gbmF2RWxlbWVudHNbbmF2RWxlbWVudHMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIlwiO1xuXG4gICAgICAgIGlmIChlc2NLZXkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLiNjbG9zZU1lbnUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRlcktleSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Bkb3duLXRvZ2dsZVwiKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc2hpZnRLZXkgJiYgdGFiS2V5ICYmIG5hdkxhc3RFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIjFweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpXCI7XG4gICAgICAgICAgICBjbG9zZUljb24uZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaGlmdEtleSAmJiB0YWJLZXkgJiYgbmF2Rmlyc3RFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIjFweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpXCI7XG4gICAgICAgICAgICBjbG9zZUljb24uZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBlbGVtZW50cyBpbiB0aGUgbWVudSwgZG9uJ3QgbW92ZSB0aGUgZm9jdXNcbiAgICAgICAgaWYgKHRhYktleSAmJiBuYXZGaXJzdEVsZW1lbnQgPT09IG5hdkxhc3RFbGVtZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRnVsbFNjcmVlbk1vYmlsZU1lbnU7XG4iLCJpbXBvcnQgZGVsZWdhdGUgZnJvbSBcImRlbGVnYXRlXCI7XHJcbmltcG9ydCB7IERPTSwgb3B0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgZmFkZUluLCBmYWRlT3V0LCBzbGlkZURvd24sIHNsaWRlVXAgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzXCI7XHJcblxyXG5jbGFzcyBTaWRlYmFyTW9iaWxlTWVudSB7XHJcbiAgICAjaXNNZW51T3BlbjtcclxuICAgICNtZW51SXRlbXNQbHVzSWNvbjtcclxuICAgICNzaWRlYmFyVG9nZ2xlTWVudUJ0bjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuc2lkclNvdXJjZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaWRlYmFyLW1vYmlsZVwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLiNzdGFydCgpO1xyXG4gICAgICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNzdGFydCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLiNpc01lbnVPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuI3N0YXJ0U2lkclBsdWdpbigpO1xyXG5cclxuICAgICAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkci1jbGFzcy1kcm9wZG93bi10b2dnbGVcIikpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRyLWNsYXNzLW1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhXCIpLmZvckVhY2goKG1lbnVJdGVtTGluaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgbWVudUl0ZW1MaW5rLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCAnPHNwYW4gY2xhc3M9XCJzaWRyLWNsYXNzLWRyb3Bkb3duLXRvZ2dsZVwiIHRhYmluZGV4PTA+PC9zcGFuPicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuI21lbnVJdGVtc1BsdXNJY29uID1cclxuICAgICAgICAgICAgb3B0aW9ucy5zaWRyRHJvcGRvd25UYXJnZXQgPT0gXCJsaW5rXCJcclxuICAgICAgICAgICAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpLnNpZHItY2xhc3MtbWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGFcIilcclxuICAgICAgICAgICAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRyLWNsYXNzLWRyb3Bkb3duLXRvZ2dsZVwiKTtcclxuICAgIH07XHJcblxyXG4gICAgI3N0YXJ0U2lkclBsdWdpbiA9ICgpID0+IHtcclxuICAgICAgICBzaWRyLm5ldyhcIi5tb2JpbGUtbWVudVwiLCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwic2lkclwiLFxyXG4gICAgICAgICAgICBzb3VyY2U6IG9wdGlvbnMuc2lkclNvdXJjZSxcclxuICAgICAgICAgICAgc2lkZTogb3B0aW9ucy5zaWRyU2lkZSxcclxuICAgICAgICAgICAgZGlzcGxhY2U6IG9wdGlvbnMuc2lkckRpc3BsYWNlLFxyXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxyXG4gICAgICAgICAgICByZW5hbWluZzogdHJ1ZSxcclxuICAgICAgICAgICAgdGltaW5nOiBcImVhc2VcIixcclxuICAgICAgICAgICAgYmluZDogXCJjbGlja1wiLFxyXG4gICAgICAgICAgICBvbk9wZW4oKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS5zaWRyLWNsYXNzLXRvZ2dsZS1zaWRyLWNsb3NlXCIpLmZvY3VzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgRE9NLm1vYmlsZU1lbnUuaGFtYnVyZ2VyQnRuPy5jbGFzc0xpc3QuYWRkKFwiaXMtYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIERPTS5oZWFkZXIuc2l0ZS5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmVuZFwiLCAnPGRpdiBjbGFzcz1cIm9jZWFud3Atc2lkci1vdmVybGF5XCIgdGFiaW5kZXg9MD48L2Rpdj4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vY2VhbndwLXNpZHItb3ZlcmxheVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmYWRlSW4ob3ZlcmxheSk7XHJcblxyXG4gICAgICAgICAgICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2lkci5jbG9zZShcInNpZHJcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25DbG9zZSgpIHtcclxuICAgICAgICAgICAgICAgIERPTS5tb2JpbGVNZW51LmhhbWJ1cmdlckJ0bj8uY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZHItY2xhc3MtbWVudS1pdGVtLWhhcy1jaGlsZHJlbi5hY3RpdmUgPiB1bFwiKS5mb3JFYWNoKChzdWJNZW51QWN0aXZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViTWVudUFjdGl2ZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZHItY2xhc3MtbWVudS1pdGVtLWhhcy1jaGlsZHJlbi5hY3RpdmVcIikuZm9yRWFjaCgobWVudUl0ZW1BY3RpdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBtZW51SXRlbUFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2NlYW53cC1zaWRyLW92ZXJsYXlcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgZmFkZU91dChvdmVybGF5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVybGF5LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzaWRyIFtjbGFzcyo9XCJzaWRyLWNsYXNzLWZhXCJdJykuZm9yRWFjaCgoaWNvbikgPT4ge1xyXG4gICAgICAgICAgICBpY29uLmNsYXNzTmFtZSA9IGljb24uY2xhc3NOYW1lLnJlcGxhY2UoL1xcYnNpZHItY2xhc3MtZmEuKj9cXGIvZywgXCJmYVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NpZHIgW2NsYXNzKj1cInNpZHItY2xhc3MtaWNvblwiXScpLmZvckVhY2goKGljb24pID0+IHtcclxuICAgICAgICAgICAgaWNvbi5jbGFzc05hbWUgPSBpY29uLmNsYXNzTmFtZS5yZXBsYWNlKC9cXGJzaWRyLWNsYXNzLWljb24tLio/XFxiL2csIFwiaWNvbi1cIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuI3NpZGViYXJUb2dnbGVNZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEuc2lkci1jbGFzcy10b2dnbGUtc2lkci1jbG9zZVwiKTtcclxuICAgIH07XHJcblxyXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgRE9NLm1vYmlsZU1lbnUuaGFtYnVyZ2VyQnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25IYW1idXJnZXJCdG5DbGljayk7XHJcbiAgICAgICAgdGhpcy4jc2lkZWJhclRvZ2dsZU1lbnVCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvblNpZGViYXJDbG9zZU1lbnVCdG5DbGljayk7XHJcblxyXG4gICAgICAgIHRoaXMuI21lbnVJdGVtc1BsdXNJY29uPy5mb3JFYWNoKChtZW51SXRlbVBsdXNJY29uKSA9PiB7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtUGx1c0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uTWVudUl0ZW1QbHVzSWNvbkNsaWNrKTtcclxuICAgICAgICAgICAgbWVudUl0ZW1QbHVzSWNvbi5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy4jb25NZW51SXRlbVBsdXNJY29uQ2xpY2spO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkZWxlZ2F0ZShcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keSxcclxuICAgICAgICAgICAgJy5zaWRyLWNsYXNzLWRyb3Bkb3duLW1lbnUgYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSksIC5zaWRyLWNsYXNzLW1lbnUtaXRlbSA+IGFbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJyxcclxuICAgICAgICAgICAgXCJjbGlja1wiLFxyXG4gICAgICAgICAgICB0aGlzLiNjbG9zZVNpZHJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBkZWxlZ2F0ZShcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keSxcclxuICAgICAgICAgICAgJy5zaWRyLWNsYXNzLWRyb3Bkb3duLW1lbnUgYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSksIC5zaWRyLWNsYXNzLW1lbnUtaXRlbSA+IGFbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJyxcclxuICAgICAgICAgICAgXCJ0b3VjaGVuZFwiLFxyXG4gICAgICAgICAgICB0aGlzLiNjbG9zZVNpZHJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGkuc2lkci1jbGFzcy1uYXYtbm8tY2xpY2sgPiBhXCIpPy5mb3JFYWNoKChtZW51SXRlbUxpbmspID0+IHtcclxuICAgICAgICAgICAgbWVudUl0ZW1MaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuI29uRG9jdW1lbnRLZXlkb3duKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLiNvbldpbmRvd1Jlc2l6ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICNvbkhhbWJ1cmdlckJ0bkNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy4jaXNNZW51T3BlbiA9ICF0aGlzLiNpc01lbnVPcGVuO1xyXG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCB0aGlzLiNpc01lbnVPcGVuKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uU2lkZWJhckNsb3NlTWVudUJ0bkNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgdGhpcy4jY2xvc2VTaWRyKCk7XHJcbiAgICAgICAgdGhpcy4jc2lkZWJhclRvZ2dsZU1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5lZFwiKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uTWVudUl0ZW1QbHVzSWNvbkNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWVudUl0ZW1QbHVzSWNvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPVxyXG4gICAgICAgICAgICBvcHRpb25zLnNpZHJEcm9wZG93blRhcmdldCA9PSBcImxpbmtcIiA/IG1lbnVJdGVtUGx1c0ljb24ucGFyZW50Tm9kZSA6IG1lbnVJdGVtUGx1c0ljb24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgIGNvbnN0IHN1Yk1lbnUgPSBtZW51SXRlbS5sYXN0RWxlbWVudENoaWxkO1xyXG5cclxuICAgICAgICBpZiAoIW1lbnVJdGVtPy5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgc2xpZGVEb3duKHN1Yk1lbnUsIDI1MCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgc2xpZGVVcChzdWJNZW51LCAyNTApO1xyXG5cclxuICAgICAgICAgICAgbWVudUl0ZW0ucXVlcnlTZWxlY3RvckFsbChcIi5zaWRyLWNsYXNzLW1lbnUtaXRlbS1oYXMtY2hpbGRyZW4uYWN0aXZlXCIpPy5mb3JFYWNoKChvcGVuTWVudUl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIG9wZW5NZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgc2xpZGVVcChvcGVuTWVudUl0ZW0ucXVlcnlTZWxlY3RvcihcInVsXCIpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAjb25XaW5kb3dSZXNpemUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gOTYwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuI2Nsb3NlU2lkcigpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmFwIGtleWJvYXJkIG5hdmlnYXRpb25cclxuICAgICAqL1xyXG4gICAgI29uRG9jdW1lbnRLZXlkb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKCFET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaWRyLW9wZW5cIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhYktleSA9IGV2ZW50LmtleUNvZGUgPT09IDk7XHJcbiAgICAgICAgY29uc3Qgc2hpZnRLZXkgPSBldmVudC5zaGlmdEtleTtcclxuICAgICAgICBjb25zdCBlc2NLZXkgPSBldmVudC5rZXlDb2RlID09PSAyNztcclxuICAgICAgICBjb25zdCBlbnRlcktleSA9IGV2ZW50LmtleUNvZGUgPT09IDEzO1xyXG5cclxuICAgICAgICBjb25zdCBjbG9zZUljb24gPSB0aGlzLiNzaWRlYmFyVG9nZ2xlTWVudUJ0bjtcclxuXHJcbiAgICAgICAgY29uc3QgbmF2RWxlbWVudHMgPSBkb2N1bWVudFxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIiNzaWRyXCIpXHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiYSwgc3Bhbi5zaWRyLWNsYXNzLWRyb3Bkb3duLXRvZ2dsZSwgaW5wdXQsIGJ1dHRvblwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmF2Rmlyc3RFbGVtZW50ID0gbmF2RWxlbWVudHNbMF07XHJcbiAgICAgICAgY29uc3QgbmF2TGFzdEVsZW1lbnQgPSBuYXZFbGVtZW50c1tuYXZFbGVtZW50cy5sZW5ndGggLSAxXTtcclxuXHJcbiAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIlwiO1xyXG5cclxuICAgICAgICBpZiAoZXNjS2V5KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuI2Nsb3NlU2lkcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVudGVyS2V5ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2lkci1jbGFzcy1kcm9wZG93bi10b2dnbGVcIikpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGljaygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFzaGlmdEtleSAmJiB0YWJLZXkgJiYgbmF2TGFzdEVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIjFweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpXCI7XHJcbiAgICAgICAgICAgIGNsb3NlSWNvbi5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNoaWZ0S2V5ICYmIHRhYktleSAmJiBuYXZGaXJzdEVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIjFweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpXCI7XHJcbiAgICAgICAgICAgIGNsb3NlSWNvbi5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIGVsZW1lbnRzIGluIHRoZSBtZW51LCBkb24ndCBtb3ZlIHRoZSBmb2N1c1xyXG4gICAgICAgIGlmICh0YWJLZXkgJiYgbmF2Rmlyc3RFbGVtZW50ID09PSBuYXZMYXN0RWxlbWVudCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgI2Nsb3NlU2lkciA9ICgpID0+IHtcclxuICAgICAgICBzaWRyLmNsb3NlKFwic2lkclwiKTtcclxuICAgICAgICBET00ubW9iaWxlTWVudS5oYW1idXJnZXJCdG4/LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIik7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyTW9iaWxlTWVudTtcclxuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmFkZUluLCBmYWRlT3V0IH0gZnJvbSBcIi4uLy4uL2xpYi91dGlsc1wiO1xuaW1wb3J0IEluZmluaXRlU2Nyb2xsIGZyb20gXCJpbmZpbml0ZS1zY3JvbGxcIjtcblxuY2xhc3MgT1dJbmZpbml0ZVNjcm9sbCB7XG4gICAgI2luZmluaXRlU2Nyb2xsO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmICghIURPTS5zY3JvbGwuaW5maW5pdGVTY3JvbGxOYXYgJiYgISFET00uc2Nyb2xsLmluZmluaXRlU2Nyb2xsTmF2LnF1ZXJ5U2VsZWN0b3IoXCIub2xkZXItcG9zdHMgYVwiKSkge1xuICAgICAgICAgICAgdGhpcy4jc3RhcnQoKTtcbiAgICAgICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNzdGFydCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy4jaW5maW5pdGVTY3JvbGwgPSBuZXcgSW5maW5pdGVTY3JvbGwoRE9NLnNjcm9sbC5pbmZpbml0ZVNjcm9sbFdyYXBwZXIsIHtcbiAgICAgICAgICAgIHBhdGg6IFwiLm9sZGVyLXBvc3RzIGFcIixcbiAgICAgICAgICAgIGFwcGVuZDogXCIuaXRlbS1lbnRyeVwiLFxuICAgICAgICAgICAgc3RhdHVzOiBcIi5zY3JvbGxlci1zdGF0dXNcIixcbiAgICAgICAgICAgIGhpZGVOYXY6IFwiLmluZmluaXRlLXNjcm9sbC1uYXZcIixcbiAgICAgICAgICAgIGhpc3Rvcnk6IGZhbHNlLFxuICAgICAgICAgICAgcHJlZmlsbDogdHJ1ZSxcbiAgICAgICAgICAgIHNjcm9sbFRocmVzaG9sZDogNTAwLFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuI2luZmluaXRlU2Nyb2xsLm9uKFwibG9hZFwiLCBmdW5jdGlvbiAoYm9keSwgcGF0aCwgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gYm9keS5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW0tZW50cnlcIik7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmxvZy1tYXNvbnJ5LWdyaWRcIikpIHtcbiAgICAgICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZhZGVPdXQoaXRlbSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltYWdlc0xvYWRlZChpdGVtcywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEJsb2cgbWFzb25yeSBpc290b3BlXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJibG9nLW1hc29ucnktZ3JpZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBvY2VhbndwLnRoZW1lLmJsb2dNYXNvbnJ5Lmlzb3RvcC5hcHBlbmRlZChpdGVtcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRml4IEdhbGxlcnkgcG9zdHNcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FsbGVyeS1mb3JtYXRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9jZWFud3AudGhlbWUuYmxvZ01hc29ucnkuaXNvdG9wLmxheW91dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgNjAwICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBFcXVhbCBoZWlnaHQgZWxlbWVudHNcbiAgICAgICAgICAgICAgICBpZiAoIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcIm5vLW1hdGNoaGVpZ2h0XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9jZWFud3AudGhlbWUuZXF1YWxIZWlnaHRFbGVtZW50cy5zdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEdhbGxlcnkgcG9zdHMgc2xpZGVyXG4gICAgICAgICAgICAgICAgaWYgKCFET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJuby1jYXJvdXNlbFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBvY2VhbndwLnRoZW1lLm93U2xpZGVyLnN0YXJ0KHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdhbGxlcnktZm9ybWF0LCAucHJvZHVjdC1lbnRyeS1zbGlkZXJcIikpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJuby1saWdodGJveFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBvY2VhbndwLnRoZW1lLm93TGlnaHRib3guaW5pdFNpbmdsZUltYWdlTGlnaHRib3goKTtcbiAgICAgICAgICAgICAgICAgICAgb2NlYW53cC50aGVtZS5vd0xpZ2h0Ym94LmluaXRHYWxsZXJ5TGlnaHRib3goKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBGb3JjZSB0aGUgaW1hZ2VzIHRvIGJlIHBhcnNlZCB0byBmaXggU2FmYXJpIGlzc3VlXG4gICAgICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWdcIik/LmZvckVhY2goKGltZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLm91dGVySFRNTCA9IGltZy5vdXRlckhUTUw7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuI2luZmluaXRlU2Nyb2xsLm9uKFwiYXBwZW5kXCIsIGZ1bmN0aW9uIChib2R5LCBwYXRoLCBpdGVtcywgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmxvZy1tYXNvbnJ5LWdyaWRcIikpIHtcbiAgICAgICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZhZGVJbihpdGVtKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgT1dJbmZpbml0ZVNjcm9sbDtcbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY2xhc3MgT1dMaWdodGJveCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBzdGFydCA9ICgpID0+IHtcbiAgICAgICAgaWYgKERPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcIm5vLWxpZ2h0Ym94XCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNhZGRMaWdodGJveENsYXNzKCk7XG4gICAgICAgIHRoaXMuaW5pdFNpbmdsZUltYWdlTGlnaHRib3goKTtcbiAgICAgICAgdGhpcy5pbml0R2FsbGVyeUxpZ2h0Ym94KCk7XG4gICAgfTtcblxuICAgIGluaXRTaW5nbGVJbWFnZUxpZ2h0Ym94ID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9jZWFud3AtbGlnaHRib3hcIik/LmZvckVhY2goKGxpbmspID0+IHtcbiAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgalF1ZXJ5KFwiLm9jZWFud3AtbGlnaHRib3hcIikubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICB0eXBlOiBcImltYWdlXCIsXG4gICAgICAgICAgICBtYWluQ2xhc3M6IFwibWZwLXdpdGgtem9vbVwiLFxuXG4gICAgICAgICAgICB6b29tOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgICAgIGVhc2luZzogXCJlYXNlLWluLW91dFwiLFxuICAgICAgICAgICAgICAgIG9wZW5lcjogZnVuY3Rpb24gKG9wZW5lckVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wZW5lckVsZW1lbnQuaXMoXCJpbWdcIikgPyBvcGVuZXJFbGVtZW50IDogb3BlbmVyRWxlbWVudC5maW5kKFwiaW1nXCIpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgaW5pdEdhbGxlcnlMaWdodGJveCA9ICgpID0+IHtcbiAgICAgICAgalF1ZXJ5KFwiLndwLWJsb2NrLWdhbGxlcnksIC5nYWxsZXJ5LWZvcm1hdCwgLmdhbGxlcnlcIikubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICBkZWxlZ2F0ZTogXCIuZ2FsbGVyeS1saWdodGJveDpub3QoLnNsaWNrLWNsb25lZClcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgIG1haW5DbGFzczogXCJtZnAtZmFkZVwiLFxuICAgICAgICAgICAgZ2FsbGVyeToge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgI2FkZExpZ2h0Ym94Q2xhc3MgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcImJvZHkgLmVudHJ5LWNvbnRlbnQgYSwgYm9keSAuZW50cnkgYSwgYm9keSBhcnRpY2xlIC5nYWxsZXJ5LWZvcm1hdCBhXCIpXG4gICAgICAgICAgICA/LmZvckVhY2goKGxpbmspID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoISFsaW5rLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VGb3JtYXRzID0gdGhpcy4jaW1hZ2VGb3JtYXRzKCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbWFnZUZvcm1hdHNNYXNrID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBpbWFnZUZvcm1hdHMuZm9yRWFjaCgoaW1hZ2VGb3JtYXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlRm9ybWF0c01hc2sgKz0gU3RyaW5nKGxpbmsuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSkuaW5kZXhPZihcIi5cIiArIGltYWdlRm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlRm9ybWF0c01hc2sgPT09IC0xMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKFwibm8tbGlnaHRib3hcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAhKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm8tbGlnaHRib3hcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5jb250YWlucyhcImdhbGxlcnktbGlnaHRib3hcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZ2FsbGVyeS1pY29uXCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuY29udGFpbnMoXCJ3b28tbGlnaHRib3hcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5jb250YWlucyhcIndvby10aHVtYm5haWxcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwid29vY29tbWVyY2UtcHJvZHVjdC1nYWxsZXJ5X19pbWFnZVwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhbGluay5jbG9zZXN0KFwiLndwLWJsb2NrLWdhbGxlcnlcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIWxpbmsuZ2V0QXR0cmlidXRlKFwiZGF0YS1lbGVtZW50b3Itb3Blbi1saWdodGJveFwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKFwieWl0aF9tYWduaWZpZXJfdGh1bWJuYWlsXCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuY29udGFpbnMoXCJnZy1saW5rXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKFwib2NlYW53cC1saWdodGJveFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICghbGluay5jbGFzc0xpc3QuY29udGFpbnMoXCJuby1saWdodGJveFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmsucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJnYWxsZXJ5LWljb25cIikgfHwgISFsaW5rLmNsb3Nlc3QoXCIud3AtYmxvY2stZ2FsbGVyeVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcImdhbGxlcnktbGlnaHRib3hcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgI2ltYWdlRm9ybWF0cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFtcImJtcFwiLCBcImdpZlwiLCBcImpwZWdcIiwgXCJqcGdcIiwgXCJwbmdcIiwgXCJ0aWZmXCIsIFwidGlmXCIsIFwiamZpZlwiLCBcImpwZVwiLCBcInN2Z1wiLCBcIm1wNFwiLCBcIm9nZ1wiLCBcIndlYm1cIl07XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgT1dMaWdodGJveDtcbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY2xhc3MgT1dTbGlkZXIge1xuICAgIGZsaWNraXR5O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBzdGFydCA9IChlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ2FsbGVyeS1mb3JtYXQsIC5wcm9kdWN0LWVudHJ5LXNsaWRlclwiKSkgPT4ge1xuICAgICAgICB0aGlzLmZsaWNraXR5ID0gW107XG5cbiAgICAgICAgZWxlbWVudHM/LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZsaWNraXR5ID0gbmV3IEZsaWNraXR5KGVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICBhdXRvUGxheTogZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJ3b28tZW50cnktaW1hZ2VcIikgPyBmYWxzZSA6IDYwMDAsXG4gICAgICAgICAgICAgICAgcmlnaHRUb0xlZnQ6IERPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInJ0bFwiKSA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbWFnZXNMb2FkZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgLy8gY29udGFpbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwYWdlRG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgcmVhZHk6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCI7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmZsaWNraXR5LnB1c2goZmxpY2tpdHkpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBPV1NsaWRlcjtcbiIsImltcG9ydCB7IERPTSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgaXNTZWxlY3RvclZhbGlkLCBvZmZzZXQgfSBmcm9tIFwiLi4vLi4vbGliL3V0aWxzXCI7XHJcblxyXG5jbGFzcyBTY3JvbGxFZmZlY3Qge1xyXG4gICAgI3RhcmdldEVsZW07XHJcbiAgICAjbGFzdFNjcm9sbFRvcCA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKCFET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaW5nbGUtcHJvZHVjdFwiKSAmJiAhRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm8tbG9jYWwtc2Nyb2xsXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgICAgICAnYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSksIGEubG9jYWxbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pLCAubG9jYWwgYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSksIGEubWVudS1saW5rW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKSwgYS5zaWRyLWNsYXNzLW1lbnUtbGlua1tocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmZvckVhY2goKHNjcm9sbEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uU2Nyb2xsSXRlbUNsaWNrKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICNvblNjcm9sbEl0ZW1DbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbEl0ZW0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICFzY3JvbGxJdGVtLmNsYXNzTGlzdC5jb250YWlucyhcIm9tdy1vcGVuLW1vZGFsXCIpICYmXHJcbiAgICAgICAgICAgICFzY3JvbGxJdGVtLmNsb3Nlc3QoXCIub213LW9wZW4tbW9kYWxcIikgJiZcclxuICAgICAgICAgICAgIXNjcm9sbEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BsLWxpbmtcIikgJiZcclxuICAgICAgICAgICAgIXNjcm9sbEl0ZW0ucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGwtbGlua1wiKSAmJlxyXG4gICAgICAgICAgICAhc2Nyb2xsSXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaWRyLWNsYXNzLW9wbC1saW5rXCIpICYmXHJcbiAgICAgICAgICAgICFzY3JvbGxJdGVtLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2lkci1jbGFzcy1vcGwtbGlua1wiKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjb25zdCBocmVmID0gc2Nyb2xsSXRlbS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IGhyZWYuc3Vic3RyaW5nKGhyZWYuaW5kZXhPZihcIiNcIikpLnNsaWNlKDEpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzU2VsZWN0b3JWYWxpZChgIyR7aWR9YCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuI3RhcmdldEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGlkICE9IFwiXCIgJiYgISF0aGlzLiN0YXJnZXRFbGVtKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHNjcm9sbFBvc2l0aW9uID1cclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQodGhpcy4jdGFyZ2V0RWxlbSkudG9wIC1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNnZXRBZG1pbkJhckhlaWdodCgpIC1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNnZXRUb3BiYXJIZWlnaHQoKSAtXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jZ2V0U3RpY2t5SGVhZGVySGVpZ2h0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgRE9NLmh0bWwuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogc2Nyb2xsUG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgISFET00uaGVhZGVyLnNpdGUgJiZcclxuICAgICAgICAgICAgICAgICAgICAhRE9NLmhlYWRlci5zaXRlLmNsYXNzTGlzdC5jb250YWlucyhcInRvcC1oZWFkZXJcIikgJiZcclxuICAgICAgICAgICAgICAgICAgICAhRE9NLmhlYWRlci5zaXRlLmNsYXNzTGlzdC5jb250YWlucyhcIm1lZGl1bS1oZWFkZXJcIikgJiZcclxuICAgICAgICAgICAgICAgICAgICAhRE9NLmhlYWRlci5zaXRlLmNsYXNzTGlzdC5jb250YWlucyhcInZlcnRpY2FsLWhlYWRlclwiKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy4jZml4TXVsdGlNZW51KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgI2dldEFkbWluQmFySGVpZ2h0ID0gKCkgPT4gKCEhRE9NLldQQWRtaW5iYXIgPyBET00uV1BBZG1pbmJhci5vZmZzZXRIZWlnaHQgOiAwKTtcclxuXHJcbiAgICAjZ2V0VG9wYmFySGVpZ2h0ID0gKCkgPT5cclxuICAgICAgICAhIURPTS5oZWFkZXIudG9wYmFyV3JhcHBlciAmJiBET00uaGVhZGVyLnRvcGJhcldyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwidG9wLWJhci1zdGlja3lcIilcclxuICAgICAgICAgICAgPyBET00uaGVhZGVyLnRvcGJhcldyYXBwZXIub2Zmc2V0SGVpZ2h0XHJcbiAgICAgICAgICAgIDogMDtcclxuXHJcbiAgICAjZ2V0U3RpY2t5SGVhZGVySGVpZ2h0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0aWNreUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXItc3RpY2t5LXdyYXBwZXJcIik7XHJcblxyXG4gICAgICAgIGlmICghIXN0aWNreUhlYWRlcikge1xyXG4gICAgICAgICAgICBpZiAoRE9NLmhlYWRlci5zaXRlPy5jbGFzc0xpc3QuY29udGFpbnMoXCJ0b3AtaGVhZGVyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyLnBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoc3RpY2t5SGVhZGVyKS5oZWlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoRE9NLmhlYWRlci5zaXRlPy5jbGFzc0xpc3QuY29udGFpbnMoXCJtZWRpdW0taGVhZGVyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGVpZ2h0ID0gMDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lbnUgPSBET00uaGVhZGVyLnNpdGUucXVlcnlTZWxlY3RvcihcIi5ib3R0b20taGVhZGVyLXdyYXBcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZml4ZWQtc2Nyb2xsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gbWVudS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKERPTS5oZWFkZXIuc2l0ZS5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW4tbWVudVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IERPTS5oZWFkZXIuc2l0ZS5kYXRhc2V0LmhlaWdodDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gRE9NLmhlYWRlci5zaXRlLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoRE9NLmhlYWRlci5zaXRlPy5jbGFzc0xpc3QuY29udGFpbnMoXCJmaXhlZC1oZWFkZXJcIikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBET00uaGVhZGVyLnNpdGUub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoRE9NLmhlYWRlci5zaXRlPy5jbGFzc0xpc3QuY29udGFpbnMoXCJ1cC1lZmZlY3RcIikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gRE9NLmhlYWRlci5zaXRlPy5kYXRhc2V0LmhlaWdodCA/PyA1NDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RpY2stYW55dGhpbmctaGVhZGVyXCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0aWNrLWFueXRoaW5nLWhlYWRlclwiKS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICFET00uaGVhZGVyLnNpdGUgJiZcclxuICAgICAgICAgICAgISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRvci1zZWN0aW9uLXdyYXBcIik/LmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcImVsZW1lbnRvci1zdGlja3lcIilcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudG9yLXNlY3Rpb24td3JhcFwiKT8uZmlyc3RFbGVtZW50Q2hpbGQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9O1xyXG5cclxuICAgICNmaXhNdWx0aU1lbnUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBmaXhlZE9mZnNldCA9XHJcbiAgICAgICAgICAgIG9mZnNldCh0aGlzLiN0YXJnZXRFbGVtKS50b3AgLVxyXG4gICAgICAgICAgICB0aGlzLiNnZXRBZG1pbkJhckhlaWdodCgpIC1cclxuICAgICAgICAgICAgdGhpcy4jZ2V0VG9wYmFySGVpZ2h0KCkgLVxyXG4gICAgICAgICAgICB0aGlzLiNnZXRTdGlja3lIZWFkZXJIZWlnaHQoKTtcclxuXHJcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldC50b0ZpeGVkKCkgPT09IGZpeGVkT2Zmc2V0LnRvRml4ZWQoKSkge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLiNmaXhNdWx0aU1lbnUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKERPTS5oZWFkZXIuc2l0ZT8ub2Zmc2V0SGVpZ2h0IC0gMSA+IHRoaXMuI2dldFN0aWNreUhlYWRlckhlaWdodCgpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxQb3NpdGlvbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0KHRoaXMuI3RhcmdldEVsZW0pLnRvcCAtXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jZ2V0QWRtaW5CYXJIZWlnaHQoKSAtXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jZ2V0VG9wYmFySGVpZ2h0KCkgLVxyXG4gICAgICAgICAgICAgICAgICAgIERPTS5oZWFkZXIuc2l0ZT8ub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgICAgIERPTS5odG1sLnNjcm9sbFRvKHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IHNjcm9sbFBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiB3aW5kb3cucGFnZVlPZmZzZXQgPiB0aGlzLiNsYXN0U2Nyb2xsVG9wID8gXCJzbW9vdGhcIiA6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy4jbGFzdFNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjcm9sbEVmZmVjdDtcclxuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmFkZUluLCBmYWRlT3V0IH0gZnJvbSBcIi4uLy4uL2xpYi91dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxUb3Age1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiNzdGFydCgpO1xuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgI3N0YXJ0ID0gKCkgPT4ge307XG5cbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy4jb25XaW5kb3dTY3JvbGwpO1xuICAgICAgICBET00uc2Nyb2xsLnNjcm9sbFRvcD8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uU2Nyb2xsVG9wQ2xpY2spO1xuICAgICAgICBET00uc2Nyb2xsLmdvVG9wPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25TY3JvbGxUb3BDbGljayk7XG4gICAgICAgIERPTS5zY3JvbGwuZ29Ub3BTbGFzaD8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uU2Nyb2xsVG9wQ2xpY2spO1xuICAgIH07XG5cbiAgICAjb25XaW5kb3dTY3JvbGwgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCFET00uc2Nyb2xsLnNjcm9sbFRvcCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDEwMCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKERPTS5zY3JvbGwuc2Nyb2xsVG9wKS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgIGZhZGVJbihET00uc2Nyb2xsLnNjcm9sbFRvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoRE9NLnNjcm9sbC5zY3JvbGxUb3ApLmRpc3BsYXkgIT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICBmYWRlT3V0KERPTS5zY3JvbGwuc2Nyb2xsVG9wKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjb25TY3JvbGxUb3BDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG5cbiAgICAgICAgRE9NLmh0bWwuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNjcm9sbFRvcC5wYXJlbnROb2RlPy5jbGFzc0xpc3QucmVtb3ZlKFwic2ZIb3ZlclwiKTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgRHJvcERvd25TZWFyY2ggZnJvbSBcIi4vc2VhcmNoL2Ryb3AtZG93blwiO1xyXG5pbXBvcnQgSGVhZGVyUmVwbGFjZVNlYXJjaCBmcm9tIFwiLi9zZWFyY2gvaGVhZGVyLXJlcGxhY2VcIjtcclxuaW1wb3J0IE1vYmlsZVNlYXJjaEljb24gZnJvbSBcIi4vc2VhcmNoL21vYmlsZS1zZWFyY2gtaWNvblwiO1xyXG5pbXBvcnQgT3ZlcmxheVNlYXJjaCBmcm9tIFwiLi9zZWFyY2gvb3ZlcmxheVwiO1xyXG5cclxuY2xhc3MgU2VhcmNoIHtcclxuICAgIG1vYmlsZU92ZXJsYXlJbnB1dDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLiNzdGFydCgpO1xyXG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICAjc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kcm9wRG93biA9IG5ldyBEcm9wRG93blNlYXJjaCgpO1xyXG4gICAgICAgIHRoaXMuaGVhZGVyUmVwbGFjZSA9IG5ldyBIZWFkZXJSZXBsYWNlU2VhcmNoKCk7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5ID0gbmV3IE92ZXJsYXlTZWFyY2goKTtcclxuICAgICAgICB0aGlzLm1vYmlsZVNlYXJjaEljb24gPSBuZXcgTW9iaWxlU2VhcmNoSWNvbigpO1xyXG5cclxuICAgICAgICB0aGlzLm1vYmlsZU92ZXJsYXlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLXNlYXJjaC1vdmVybGF5LWlucHV0XCIpO1xyXG5cclxuICAgICAgICBET00uc2VhcmNoLmZvcm1zLmZvckVhY2goKGZvcm0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpPy52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwic2VhcmNoLWZpbGxlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoISF0aGlzLm1vYmlsZU92ZXJsYXlJbnB1dD8udmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5tb2JpbGVPdmVybGF5SW5wdXQuY2xvc2VzdChcImZvcm1cIikuY2xhc3NMaXN0LmFkZChcInNlYXJjaC1maWxsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcclxuICAgICAgICBET00uc2VhcmNoLmZvcm1zLmZvckVhY2goKGZvcm0pID0+IHtcclxuICAgICAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLiNvbklucHV0S2V5dXApO1xyXG4gICAgICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgdGhpcy4jb25JbnB1dEtleXVwKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2JpbGVPdmVybGF5SW5wdXQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLiNvbklucHV0S2V5dXApO1xyXG4gICAgICAgIHRoaXMubW9iaWxlT3ZlcmxheUlucHV0Py5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCB0aGlzLiNvbklucHV0S2V5dXApO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25JbnB1dEtleXVwID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBpbnB1dC5jbG9zZXN0KFwiZm9ybVwiKTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcInNlYXJjaC1maWxsZWRcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwic2VhcmNoLWZpbGxlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XHJcbiIsImNsYXNzIFNlYXJjaEJhc2Uge1xuICAgIGZvY3VzID0gKGZvcm0sIGlucHV0Q2xhc3MpID0+IHtcbiAgICAgICAgbGV0IGZvcm1UcmFuc2l0aW9uRHVyYXRpb24gPSBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoZm9ybSkudHJhbnNpdGlvbkR1cmF0aW9uLnJlcGxhY2UoXCJzXCIsIFwiXCIpKSAqIDEwMDA7XG5cbiAgICAgICAgZm9ybVRyYW5zaXRpb25EdXJhdGlvbiA9ICEhZm9ybVRyYW5zaXRpb25EdXJhdGlvbiA/IGZvcm1UcmFuc2l0aW9uRHVyYXRpb24gOiA2MDA7XG5cbiAgICAgICAgaWYgKGZvcm1UcmFuc2l0aW9uRHVyYXRpb24pIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcihpbnB1dENsYXNzKS5mb2N1cygpO1xuICAgICAgICAgICAgfSwgZm9ybVRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXNlO1xuIiwiaW1wb3J0IHsgRE9NLCBvcHRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IFNlYXJjaEJhc2UgZnJvbSBcIi4vYmFzZVwiO1xuXG5jbGFzcyBEcm9wRG93blNlYXJjaCBleHRlbmRzIFNlYXJjaEJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLm1lbnVTZWFyY2hTdHlsZSAhPT0gXCJkcm9wX2Rvd25cIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBET00uc2VhcmNoLmRyb3BEb3duLnRvZ2dsZVNlYXJjaEJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uVG9nZ2xlU2VhcmNoQnRuQ2xpY2spO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25Eb2N1bWVudENsaWNrKTtcbiAgICB9O1xuXG4gICAgI29uVG9nZ2xlU2VhcmNoQnRuQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgeyB0b2dnbGVTZWFyY2hCdG4sIGZvcm0gfSA9IERPTS5zZWFyY2guZHJvcERvd247XG5cbiAgICAgICAgdG9nZ2xlU2VhcmNoQnRuLnBhcmVudE5vZGUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgICAgICAgdGhpcy5mb2N1cyhmb3JtLCBcImlucHV0LmZpZWxkXCIpO1xuICAgIH07XG5cbiAgICAjb25Eb2N1bWVudENsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIENvbGxhcHMgc2VhcmNoIGZvcm1cbiAgICAgICAgaWYgKCFldmVudC50YXJnZXQuY2xvc2VzdChcIiNzZWFyY2hmb3JtLWRyb3Bkb3duLnNob3dcIikpIHtcbiAgICAgICAgICAgIERPTS5zZWFyY2guZHJvcERvd24uZm9ybT8uY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICAgICAgICBET00uc2VhcmNoLmRyb3BEb3duLnRvZ2dsZVNlYXJjaEJ0bj8ucGFyZW50Tm9kZT8uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyb3BEb3duU2VhcmNoO1xuIiwiaW1wb3J0IHsgRE9NLCBvcHRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IFNlYXJjaEJhc2UgZnJvbSBcIi4vYmFzZVwiO1xuXG5jbGFzcyBIZWFkZXJSZXBsYWNlU2VhcmNoIGV4dGVuZHMgU2VhcmNoQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMubWVudVNlYXJjaFN0eWxlICE9PSBcImhlYWRlcl9yZXBsYWNlXCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgRE9NLnNlYXJjaC5oZWFkZXJSZXBsYWNlLnRvZ2dsZVNlYXJjaEJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uVG9nZ2xlU2VhcmNoQnRuQ2xpY2spO1xuICAgICAgICBET00uc2VhcmNoLmhlYWRlclJlcGxhY2UuY2xvc2VCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbkNsb3NlQnRuQ2xpY2spO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbkRvY3VtZW50Q2xpY2spO1xuICAgIH07XG5cbiAgICAjb25Ub2dnbGVTZWFyY2hCdG5DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCB7IGZvcm0gfSA9IERPTS5zZWFyY2guaGVhZGVyUmVwbGFjZTtcblxuICAgICAgICBmb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuXG4gICAgICAgIGlmICh0aGlzLiNoYXNUb3BIZWFkZXIoKSkge1xuICAgICAgICAgICAgRE9NLmhlYWRlci50b3BMZWZ0U2lkZS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgIERPTS5oZWFkZXIudG9wUmlnaHRTaWRlLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFET00ubWVudS5uYXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xuICAgICAgICAgICAgICAgIERPTS5tZW51Lm1haW4uc3R5bGUubWluV2lkdGggPSBcIjM3MHB4XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBET00ubWVudS5uYXYuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICAgICAgICBmb3JtLnN0eWxlLm1heFdpZHRoID1cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtbmF2aWdhdGlvbiA+IHVsLmRyb3Bkb3duLW1lbnVcIik/Lm9mZnNldFdpZHRoICsgNjAgKyBcInB4XCI7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZvY3VzKGZvcm0sICdpbnB1dFt0eXBlPVwic2VhcmNoXCJdJyk7XG4gICAgfTtcblxuICAgICNvbkNsb3NlQnRuQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB7IGZvcm0gfSA9IERPTS5zZWFyY2guaGVhZGVyUmVwbGFjZTtcblxuICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuXG4gICAgICAgIGlmICh0aGlzLiNoYXNUb3BIZWFkZXIoKSkge1xuICAgICAgICAgICAgRE9NLmhlYWRlci50b3BMZWZ0U2lkZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgIERPTS5oZWFkZXIudG9wUmlnaHRTaWRlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgRE9NLm1lbnUubmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgRE9NLm1lbnUubWFpbi5zdHlsZS5taW5XaWR0aCA9IFwiXCI7XG4gICAgICAgICAgICB9LCAyNTApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICNvbkRvY3VtZW50Q2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgLy8gQ29sbGFwcyBzZWFyY2ggZm9ybVxuICAgICAgICBpZiAoIWV2ZW50LnRhcmdldC5jbG9zZXN0KFwiI3NlYXJjaGZvcm0taGVhZGVyLXJlcGxhY2Uuc2hvd1wiKSkge1xuICAgICAgICAgICAgRE9NLnNlYXJjaC5oZWFkZXJSZXBsYWNlPy5mb3JtPy5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuI2hhc1RvcEhlYWRlcigpKSB7XG4gICAgICAgICAgICAgICAgRE9NLmhlYWRlci50b3BMZWZ0U2lkZT8uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgRE9NLmhlYWRlci50b3BSaWdodFNpZGU/LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBET00ubWVudS5uYXY/LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgICNoYXNUb3BIZWFkZXIgPSAoKSA9PiBET00uaGVhZGVyLnNpdGU/LmNsYXNzTGlzdC5jb250YWlucyhcInRvcC1oZWFkZXJcIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclJlcGxhY2VTZWFyY2g7XG4iLCJpbXBvcnQgeyBvcHRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmFkZUluLCBmYWRlT3V0IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi91dGlsc1wiO1xuaW1wb3J0IFNlYXJjaEJhc2UgZnJvbSBcIi4vYmFzZVwiO1xuXG5jbGFzcyBNb2JpbGVTZWFyY2hJY29uIGV4dGVuZHMgU2VhcmNoQmFzZSB7XG4gICAgI2VsZW1lbnRzO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMubW9iaWxlTWVudVNlYXJjaFN0eWxlID09PSBcImRpc2FibGVkXCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3NldEVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAjc2V0RWxlbWVudHMgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuI2VsZW1lbnRzID0ge1xuICAgICAgICAgICAgZHJvcGRvd25TZWFyY2hJY29uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1pY29uLWRyb3Bkb3duXCIpLFxuICAgICAgICAgICAgZHJvcGRvd25TZWFyY2hGb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1zdHlsZS1kcm9wZG93blwiKSxcbiAgICAgICAgICAgIG92ZXJsYXlTZWFyY2g6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLXN0eWxlLW92ZXJsYXlcIiksXG4gICAgICAgICAgICBvdmVybGF5U2VhcmNoSWNvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtaWNvbi1vdmVybGF5XCIpLFxuICAgICAgICAgICAgb3ZlcmxheVNlYXJjaENsb3NlSWNvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtc3R5bGUtb3ZlcmxheSAuc2VhcmNoLW92ZXJsYXktY2xvc2VcIiksXG4gICAgICAgICAgICBodG1sOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKSxcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zLm1vYmlsZU1lbnVTZWFyY2hTdHlsZSA9PT0gXCJkcm9wX2Rvd25cIikge1xuICAgICAgICAgICAgdGhpcy4jZWxlbWVudHMuZHJvcGRvd25TZWFyY2hJY29uPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jdG9nZ2xlRHJvcGRvd25TZWFyY2gpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uQ2xpY2tEb2N1bWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5tb2JpbGVNZW51U2VhcmNoU3R5bGUgPT09IFwib3ZlcmxheVwiKSB7XG4gICAgICAgICAgICB0aGlzLiNlbGVtZW50cy5vdmVybGF5U2VhcmNoSWNvbj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29wZW5PdmVybGF5U2VhcmNoKTtcbiAgICAgICAgICAgIHRoaXMuI2VsZW1lbnRzLm92ZXJsYXlTZWFyY2hDbG9zZUljb24/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNjbG9zZU92ZXJsYXlTZWFyY2gpO1xuICAgICAgICAgICAgdGhpcy4jZWxlbWVudHMub3ZlcmxheVNlYXJjaD8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uQ2xpY2tPdmVybGF5U2VhcmNoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjdG9nZ2xlRHJvcGRvd25TZWFyY2ggPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy4jZWxlbWVudHMuZHJvcGRvd25TZWFyY2hGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICAgICAgICB0aGlzLiNlbGVtZW50cy5kcm9wZG93blNlYXJjaEljb24uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcblxuICAgICAgICB0aGlzLmZvY3VzKHRoaXMuI2VsZW1lbnRzLmRyb3Bkb3duU2VhcmNoRm9ybS5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKSwgXCJpbnB1dC5maWVsZFwiKTtcbiAgICB9O1xuXG4gICAgI29wZW5PdmVybGF5U2VhcmNoID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy4jZWxlbWVudHMub3ZlcmxheVNlYXJjaC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBmYWRlSW4odGhpcy4jZWxlbWVudHMub3ZlcmxheVNlYXJjaCk7XG5cbiAgICAgICAgdGhpcy5mb2N1cyh0aGlzLiNlbGVtZW50cy5vdmVybGF5U2VhcmNoLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpLCBcImlucHV0Lm1vYmlsZS1zZWFyY2gtb3ZlcmxheS1pbnB1dFwiKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI2VsZW1lbnRzLmh0bWwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICB9LCA0MDApO1xuICAgIH07XG5cbiAgICAjY2xvc2VPdmVybGF5U2VhcmNoID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy4jZWxlbWVudHMub3ZlcmxheVNlYXJjaC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICBmYWRlT3V0KHRoaXMuI2VsZW1lbnRzLm92ZXJsYXlTZWFyY2gpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jZWxlbWVudHMuaHRtbC5zdHlsZS5vdmVyZmxvdyA9IFwidmlzaWJsZVwiO1xuICAgICAgICB9LCA0MDApO1xuICAgIH07XG5cbiAgICAjb25DbGlja092ZXJsYXlTZWFyY2ggPSAoZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy4jZWxlbWVudHMub3ZlcmxheVNlYXJjaC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikuZm9jdXMoKTtcbiAgICB9O1xuXG4gICAgI29uQ2xpY2tEb2N1bWVudCA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoIWV2ZW50LnRhcmdldC5jbG9zZXN0KFwiI2ljb24tc2VhcmNoZm9ybS1kcm9wZG93bi5zaG93XCIpKSB7XG4gICAgICAgICAgICB0aGlzLiNlbGVtZW50cy5kcm9wZG93blNlYXJjaEljb24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIHRoaXMuI2VsZW1lbnRzLmRyb3Bkb3duU2VhcmNoRm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vYmlsZVNlYXJjaEljb247XG4iLCJpbXBvcnQgeyBET00sIG9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmYWRlSW4sIGZhZGVPdXQgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzXCI7XG5pbXBvcnQgU2VhcmNoQmFzZSBmcm9tIFwiLi9iYXNlXCI7XG5cbmNsYXNzIE92ZXJsYXlTZWFyY2ggZXh0ZW5kcyBTZWFyY2hCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBpZiAob3B0aW9ucy5tZW51U2VhcmNoU3R5bGUgIT09IFwib3ZlcmxheVwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIERPTS5zZWFyY2gub3ZlcmxheS50b2dnbGVTZWFyY2hCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvblRvZ2dsZVNlYXJjaEJ0bkNsaWNrKTtcbiAgICAgICAgRE9NLnNlYXJjaC5vdmVybGF5LmNsb3NlQnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25DbG9zZUJ0bkNsaWNrKTtcbiAgICB9O1xuXG4gICAgI29uVG9nZ2xlU2VhcmNoQnRuQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB7IGZvcm0gfSA9IERPTS5zZWFyY2gub3ZlcmxheTtcblxuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIGZhZGVJbihmb3JtKTtcblxuICAgICAgICB0aGlzLmZvY3VzKGZvcm0sICdpbnB1dFt0eXBlPVwic2VhcmNoXCJdJyk7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBET00uaHRtbC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICAgIH0sIDQwMCk7XG4gICAgfTtcblxuICAgICNvbkNsb3NlQnRuQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB7IGZvcm0gfSA9IERPTS5zZWFyY2gub3ZlcmxheTtcblxuICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIGZhZGVPdXQoZm9ybSk7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBET00uaHRtbC5zdHlsZS5vdmVyZmxvdyA9IFwidmlzaWJsZVwiO1xuICAgICAgICB9LCA0MDApO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE92ZXJsYXlTZWFyY2g7XG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3Qge1xyXG4gICAgI3NlbGVjdDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLiNyZW5kZXIoKTtcclxuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgI3JlbmRlciA9ICgpID0+IHtcclxuICAgICAgICBET00uc2VsZWN0VGFncy5mb3JFYWNoKChzZWxlY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4jc2VsZWN0ID0gc2VsZWN0O1xyXG5cclxuICAgICAgICAgICAgdGhpcy4jc2VsZWN0Lmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgICAgICAgICAgIFwiYWZ0ZXJlbmRcIixcclxuICAgICAgICAgICAgICAgIGA8c3BhbiBjbGFzcz1cInRoZW1lLXNlbGVjdCAke3RoaXMuI3NlbGVjdC5jbGFzc0xpc3R9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aGVtZS1zZWxlY3RJbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuI3NlbGVjdC5vcHRpb25zW3RoaXMuI3NlbGVjdC5zZWxlY3RlZEluZGV4XS50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5gXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLiNzZWxlY3QuY2xhc3NMaXN0LmFkZChcImhhc0N1c3RvbVNlbGVjdFwiKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuI3N0eWxlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnNJdGVtKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICNzdHlsZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLiNzZWxlY3Quc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy4jc2VsZWN0LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgIHRoaXMuI3NlbGVjdC5zdHlsZS5oZWlnaHQgPSBcIjM0cHhcIjtcclxuICAgICAgICB0aGlzLiNzZWxlY3Quc3R5bGUuZm9udFNpemUgPSBcIjEzcHhcIjtcclxuICAgICAgICB0aGlzLiNzZWxlY3Quc3R5bGUuYXBwZWFyYW5jZSA9IFwibWVudWxpc3QtYnV0dG9uXCI7XHJcbiAgICAgICAgdGhpcy4jc2VsZWN0Lm5leHRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICAgIHRoaXMuI3NlbGVjdC5uZXh0U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgIH07XHJcblxyXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnNJdGVtID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuI3NlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCB0aGlzLiNvbk1vdXNlZW50ZXIpO1xyXG4gICAgICAgIHRoaXMuI3NlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCB0aGlzLiNvbk1vdXNlbGVhdmUpO1xyXG4gICAgICAgIHRoaXMuI3NlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRoaXMub25DaGFuZ2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25Nb3VzZWVudGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuXHJcbiAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQoXCJ0aGVtZS1zZWxlY3RIb3ZlclwiKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uTW91c2VsZWF2ZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcblxyXG4gICAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKFwidGhlbWUtc2VsZWN0SG92ZXJcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIG9uQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuXHJcbiAgICAgICAgc2VsZWN0Lm5leHRTaWJsaW5nLmlubmVySFRNTCA9IHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XS50ZXh0O1xyXG4gICAgfTtcclxuXHJcbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCB0aGlzLiNvbkRvY3VtZW50UmVhZHkpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuI29uRG9jdW1lbnRSZWFkeSk7XHJcbiAgICB9O1xyXG5cclxuICAgICNvbkRvY3VtZW50UmVhZHkgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBET00uc2VsZWN0VGFncy5mb3JFYWNoKChzZWxlY3QpID0+IHtcclxuICAgICAgICAgICAgc2VsZWN0LnN0eWxlLndpZHRoID0gc2VsZWN0Lm5leHRTaWJsaW5nLm9mZnNldFdpZHRoICsgXCJweFwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQgU2VsZWN0IGZyb20gXCIuL2NvbXBvbmVudHMvc2VsZWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9oZWFkZXJcIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4vY29tcG9uZW50cy9tZW51XCI7XHJcbmltcG9ydCBNb2JpbGVNZW51IGZyb20gXCIuL2NvbXBvbmVudHMvbW9iaWxlLW1lbnVcIjtcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi9jb21wb25lbnRzL3NlYXJjaFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2NvbXBvbmVudHMvZm9vdGVyXCI7XHJcbmltcG9ydCBCbG9nTWFzb25yeSBmcm9tIFwiLi9jb21wb25lbnRzL2Jsb2ctbWFzb25yeVwiO1xyXG5pbXBvcnQgU2Nyb2xsVG9wIGZyb20gXCIuL2NvbXBvbmVudHMvc2Nyb2xsLXRvcFwiO1xyXG5pbXBvcnQgU2Nyb2xsRWZmZWN0IGZyb20gXCIuL2NvbXBvbmVudHMvc2Nyb2xsLWVmZmVjdFwiO1xyXG5pbXBvcnQgRXF1YWxIZWlnaHRFbGVtZW50cyBmcm9tIFwiLi9jb21wb25lbnRzL2VxdWFsLWhlaWdodC1lbGVtZW50c1wiO1xyXG5pbXBvcnQgT1dJbmZpbml0ZVNjcm9sbCBmcm9tIFwiLi9jb21wb25lbnRzL293LWluZmluaXRlLXNjcm9sbFwiO1xyXG5pbXBvcnQgT1dTbGlkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9vdy1zbGlkZXJcIjtcclxuaW1wb3J0IE9XTGlnaHRib3ggZnJvbSBcIi4vY29tcG9uZW50cy9vdy1saWdodGJveFwiO1xyXG5cclxuY2xhc3MgVGhlbWUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAjc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3QgPSBuZXcgU2VsZWN0KCk7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcbiAgICAgICAgdGhpcy5tZW51ID0gbmV3IE1lbnUoKTtcclxuICAgICAgICB0aGlzLm1vYmlsZU1lbnUgPSBuZXcgTW9iaWxlTWVudSgpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoID0gbmV3IFNlYXJjaCgpO1xyXG4gICAgICAgIHRoaXMuZm9vdGVyID0gbmV3IEZvb3RlcigpO1xyXG4gICAgICAgIHRoaXMuYmxvZ01hc29ucnkgPSBuZXcgQmxvZ01hc29ucnkoKTtcclxuICAgICAgICB0aGlzLnNjcm9sbFRvcCA9IG5ldyBTY3JvbGxUb3AoKTtcclxuICAgICAgICB0aGlzLnNjcm9sbEVmZmVjdCA9IG5ldyBTY3JvbGxFZmZlY3QoKTtcclxuICAgICAgICB0aGlzLmVxdWFsSGVpZ2h0RWxlbWVudHMgPSBuZXcgRXF1YWxIZWlnaHRFbGVtZW50cygpO1xyXG4gICAgICAgIHRoaXMub3dMaWdodGJveCA9IG5ldyBPV0xpZ2h0Ym94KCk7XHJcbiAgICAgICAgdGhpcy5vd1NsaWRlciA9IG5ldyBPV1NsaWRlcigpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub3dJbmZpbml0ZVNjcm9sbCA9IG5ldyBPV0luZmluaXRlU2Nyb2xsKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaGVtZTtcclxuIiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9jbGFzc0FwcGx5RGVzY3JpcHRvckdldChyZWNlaXZlciwgZGVzY3JpcHRvcikge1xuICBpZiAoZGVzY3JpcHRvci5nZXQpIHtcbiAgICByZXR1cm4gZGVzY3JpcHRvci5nZXQuY2FsbChyZWNlaXZlcik7XG4gIH1cblxuICByZXR1cm4gZGVzY3JpcHRvci52YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NBcHBseURlc2NyaXB0b3JHZXQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2NsYXNzQXBwbHlEZXNjcmlwdG9yU2V0KHJlY2VpdmVyLCBkZXNjcmlwdG9yLCB2YWx1ZSkge1xuICBpZiAoZGVzY3JpcHRvci5zZXQpIHtcbiAgICBkZXNjcmlwdG9yLnNldC5jYWxsKHJlY2VpdmVyLCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFkZXNjcmlwdG9yLndyaXRhYmxlKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCByZWFkIG9ubHkgcHJpdmF0ZSBmaWVsZFwiKTtcbiAgICB9XG5cbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gdmFsdWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NBcHBseURlc2NyaXB0b3JTZXQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvcihyZWNlaXZlciwgcHJpdmF0ZU1hcCwgYWN0aW9uKSB7XG4gIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBcIiArIGFjdGlvbiArIFwiIHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xuICB9XG5cbiAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBjbGFzc0FwcGx5RGVzY3JpcHRvckdldCA9IHJlcXVpcmUoXCIuL2NsYXNzQXBwbHlEZXNjcmlwdG9yR2V0LmpzXCIpO1xuXG52YXIgY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yID0gcmVxdWlyZShcIi4vY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yLmpzXCIpO1xuXG5mdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBjbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IocmVjZWl2ZXIsIHByaXZhdGVNYXAsIFwiZ2V0XCIpO1xuICByZXR1cm4gY2xhc3NBcHBseURlc2NyaXB0b3JHZXQocmVjZWl2ZXIsIGRlc2NyaXB0b3IpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc1ByaXZhdGVGaWVsZEdldDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgY2xhc3NBcHBseURlc2NyaXB0b3JTZXQgPSByZXF1aXJlKFwiLi9jbGFzc0FwcGx5RGVzY3JpcHRvclNldC5qc1wiKTtcblxudmFyIGNsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvciA9IHJlcXVpcmUoXCIuL2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvci5qc1wiKTtcblxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xuICB2YXIgZGVzY3JpcHRvciA9IGNsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvcihyZWNlaXZlciwgcHJpdmF0ZU1hcCwgXCJzZXRcIik7XG4gIGNsYXNzQXBwbHlEZXNjcmlwdG9yU2V0KHJlY2VpdmVyLCBkZXNjcmlwdG9yLCB2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NQcml2YXRlRmllbGRTZXQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBET0NVTUVOVF9OT0RFX1RZUEUgPSA5O1xuXG4vKipcbiAqIEEgcG9seWZpbGwgZm9yIEVsZW1lbnQubWF0Y2hlcygpXG4gKi9cbmlmICh0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcbiAgICB2YXIgcHJvdG8gPSBFbGVtZW50LnByb3RvdHlwZTtcblxuICAgIHByb3RvLm1hdGNoZXMgPSBwcm90by5tYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLm9NYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xufVxuXG4vKipcbiAqIEZpbmRzIHRoZSBjbG9zZXN0IHBhcmVudCB0aGF0IG1hdGNoZXMgYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGNsb3Nlc3QgKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgd2hpbGUgKGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlVHlwZSAhPT0gRE9DVU1FTlRfTk9ERV9UWVBFKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5tYXRjaGVzID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgICAgICBlbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvc2VzdDtcbiIsInZhciBjbG9zZXN0ID0gcmVxdWlyZSgnLi9jbG9zZXN0Jyk7XG5cbi8qKlxuICogRGVsZWdhdGVzIGV2ZW50IHRvIGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtCb29sZWFufSB1c2VDYXB0dXJlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIF9kZWxlZ2F0ZShlbGVtZW50LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcbiAgICB2YXIgbGlzdGVuZXJGbiA9IGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXJGbiwgdXNlQ2FwdHVyZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lckZuLCB1c2VDYXB0dXJlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBEZWxlZ2F0ZXMgZXZlbnQgdG8gYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR8U3RyaW5nfEFycmF5fSBbZWxlbWVudHNdXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtCb29sZWFufSB1c2VDYXB0dXJlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGRlbGVnYXRlKGVsZW1lbnRzLCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcbiAgICAvLyBIYW5kbGUgdGhlIHJlZ3VsYXIgRWxlbWVudCB1c2FnZVxuICAgIGlmICh0eXBlb2YgZWxlbWVudHMuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gX2RlbGVnYXRlLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIEVsZW1lbnQtbGVzcyB1c2FnZSwgaXQgZGVmYXVsdHMgdG8gZ2xvYmFsIGRlbGVnYXRpb25cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gVXNlIGBkb2N1bWVudGAgYXMgdGhlIGZpcnN0IHBhcmFtZXRlciwgdGhlbiBhcHBseSBhcmd1bWVudHNcbiAgICAgICAgLy8gVGhpcyBpcyBhIHNob3J0IHdheSB0byAudW5zaGlmdCBgYXJndW1lbnRzYCB3aXRob3V0IHJ1bm5pbmcgaW50byBkZW9wdGltaXphdGlvbnNcbiAgICAgICAgcmV0dXJuIF9kZWxlZ2F0ZS5iaW5kKG51bGwsIGRvY3VtZW50KS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBTZWxlY3Rvci1iYXNlZCB1c2FnZVxuICAgIGlmICh0eXBlb2YgZWxlbWVudHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIEFycmF5LWxpa2UgYmFzZWQgdXNhZ2VcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gX2RlbGVnYXRlKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogRmluZHMgY2xvc2VzdCBtYXRjaCBhbmQgaW52b2tlcyBjYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuZXIoZWxlbWVudCwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5kZWxlZ2F0ZVRhcmdldCA9IGNsb3Nlc3QoZS50YXJnZXQsIHNlbGVjdG9yKTtcblxuICAgICAgICBpZiAoZS5kZWxlZ2F0ZVRhcmdldCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbChlbGVtZW50LCBlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWxlZ2F0ZTtcbiIsIi8vIGJ1dHRvblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHJlcXVpcmUoJy4vY29yZScpLFxuICAgICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpLFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHdpbmRvdy5JbmZpbml0ZVNjcm9sbCxcbiAgICAgICAgd2luZG93LmZpenp5VUlVdGlscyxcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBJbmZpbml0ZVNjcm9sbCwgdXRpbHMgKSB7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEluZmluaXRlU2Nyb2xsQnV0dG9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmNsYXNzIEluZmluaXRlU2Nyb2xsQnV0dG9uIHtcbiAgY29uc3RydWN0b3IoIGVsZW1lbnQsIGluZlNjcm9sbCApIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuaW5mU2Nyb2xsID0gaW5mU2Nyb2xsO1xuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuY2xpY2tIYW5kbGVyID0gdGhpcy5vbkNsaWNrLmJpbmQoIHRoaXMgKTtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIgKTtcbiAgICBpbmZTY3JvbGwub24oICdyZXF1ZXN0JywgdGhpcy5kaXNhYmxlLmJpbmQoIHRoaXMgKSApO1xuICAgIGluZlNjcm9sbC5vbiggJ2xvYWQnLCB0aGlzLmVuYWJsZS5iaW5kKCB0aGlzICkgKTtcbiAgICBpbmZTY3JvbGwub24oICdlcnJvcicsIHRoaXMuaGlkZS5iaW5kKCB0aGlzICkgKTtcbiAgICBpbmZTY3JvbGwub24oICdsYXN0JywgdGhpcy5oaWRlLmJpbmQoIHRoaXMgKSApO1xuICB9XG5cbiAgb25DbGljayggZXZlbnQgKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmluZlNjcm9sbC5sb2FkTmV4dFBhZ2UoKTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQuZGlzYWJsZWQgPSAnZGlzYWJsZWQnO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyICk7XG4gIH1cblxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJbmZpbml0ZVNjcm9sbCBtZXRob2RzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIEluZmluaXRlU2Nyb2xsLmRlZmF1bHRzLmJ1dHRvbiA9IG51bGw7XG5cbkluZmluaXRlU2Nyb2xsLmNyZWF0ZS5idXR0b24gPSBmdW5jdGlvbigpIHtcbiAgbGV0IGJ1dHRvbkVsZW0gPSB1dGlscy5nZXRRdWVyeUVsZW1lbnQoIHRoaXMub3B0aW9ucy5idXR0b24gKTtcbiAgaWYgKCBidXR0b25FbGVtICkge1xuICAgIHRoaXMuYnV0dG9uID0gbmV3IEluZmluaXRlU2Nyb2xsQnV0dG9uKCBidXR0b25FbGVtLCB0aGlzICk7XG4gIH1cbn07XG5cbkluZmluaXRlU2Nyb2xsLmRlc3Ryb3kuYnV0dG9uID0gZnVuY3Rpb24oKSB7XG4gIGlmICggdGhpcy5idXR0b24gKSB0aGlzLmJ1dHRvbi5kZXN0cm95KCk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuSW5maW5pdGVTY3JvbGwuQnV0dG9uID0gSW5maW5pdGVTY3JvbGxCdXR0b247XG5cbnJldHVybiBJbmZpbml0ZVNjcm9sbDtcblxufSApICk7XG4iLCIvLyBjb3JlXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgcmVxdWlyZSgnZXYtZW1pdHRlcicpLFxuICAgICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpLFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuSW5maW5pdGVTY3JvbGwgPSBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHdpbmRvdy5FdkVtaXR0ZXIsXG4gICAgICAgIHdpbmRvdy5maXp6eVVJVXRpbHMsXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgRXZFbWl0dGVyLCB1dGlscyApIHtcblxubGV0IGpRdWVyeSA9IHdpbmRvdy5qUXVlcnk7XG4vLyBpbnRlcm5hbCBzdG9yZSBvZiBhbGwgSW5maW5pdGVTY3JvbGwgaW50YW5jZXNcbmxldCBpbnN0YW5jZXMgPSB7fTtcblxuZnVuY3Rpb24gSW5maW5pdGVTY3JvbGwoIGVsZW1lbnQsIG9wdGlvbnMgKSB7XG4gIGxldCBxdWVyeUVsZW0gPSB1dGlscy5nZXRRdWVyeUVsZW1lbnQoIGVsZW1lbnQgKTtcblxuICBpZiAoICFxdWVyeUVsZW0gKSB7XG4gICAgY29uc29sZS5lcnJvciggJ0JhZCBlbGVtZW50IGZvciBJbmZpbml0ZVNjcm9sbDogJyArICggcXVlcnlFbGVtIHx8IGVsZW1lbnQgKSApO1xuICAgIHJldHVybjtcbiAgfVxuICBlbGVtZW50ID0gcXVlcnlFbGVtO1xuICAvLyBkbyBub3QgaW5pdGlhbGl6ZSB0d2ljZSBvbiBzYW1lIGVsZW1lbnRcbiAgaWYgKCBlbGVtZW50LmluZmluaXRlU2Nyb2xsR1VJRCApIHtcbiAgICBsZXQgaW5zdGFuY2UgPSBpbnN0YW5jZXNbIGVsZW1lbnQuaW5maW5pdGVTY3JvbGxHVUlEIF07XG4gICAgaW5zdGFuY2Uub3B0aW9uKCBvcHRpb25zICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgLy8gb3B0aW9uc1xuICB0aGlzLm9wdGlvbnMgPSB7IC4uLkluZmluaXRlU2Nyb2xsLmRlZmF1bHRzIH07XG4gIHRoaXMub3B0aW9uKCBvcHRpb25zICk7XG4gIC8vIGFkZCBqUXVlcnlcbiAgaWYgKCBqUXVlcnkgKSB7XG4gICAgdGhpcy4kZWxlbWVudCA9IGpRdWVyeSggdGhpcy5lbGVtZW50ICk7XG4gIH1cblxuICB0aGlzLmNyZWF0ZSgpO1xufVxuXG4vLyBkZWZhdWx0c1xuSW5maW5pdGVTY3JvbGwuZGVmYXVsdHMgPSB7XG4gIC8vIHBhdGg6IG51bGwsXG4gIC8vIGhpZGVOYXY6IG51bGwsXG4gIC8vIGRlYnVnOiBmYWxzZSxcbn07XG5cbi8vIGNyZWF0ZSAmIGRlc3Ryb3kgbWV0aG9kc1xuSW5maW5pdGVTY3JvbGwuY3JlYXRlID0ge307XG5JbmZpbml0ZVNjcm9sbC5kZXN0cm95ID0ge307XG5cbmxldCBwcm90byA9IEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZTtcbi8vIGluaGVyaXQgRXZFbWl0dGVyXG5PYmplY3QuYXNzaWduKCBwcm90bywgRXZFbWl0dGVyLnByb3RvdHlwZSApO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gZ2xvYmFsbHkgdW5pcXVlIGlkZW50aWZpZXJzXG5sZXQgR1VJRCA9IDA7XG5cbnByb3RvLmNyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBjcmVhdGUgY29yZVxuICAvLyBhZGQgaWQgZm9yIEluZmluaXRlU2Nyb2xsLmRhdGFcbiAgbGV0IGlkID0gdGhpcy5ndWlkID0gKytHVUlEO1xuICB0aGlzLmVsZW1lbnQuaW5maW5pdGVTY3JvbGxHVUlEID0gaWQ7IC8vIGV4cGFuZG9cbiAgaW5zdGFuY2VzWyBpZCBdID0gdGhpczsgLy8gYXNzb2NpYXRlIHZpYSBpZFxuICAvLyBwcm9wZXJ0aWVzXG4gIHRoaXMucGFnZUluZGV4ID0gMTsgLy8gZGVmYXVsdCB0byBmaXJzdCBwYWdlXG4gIHRoaXMubG9hZENvdW50ID0gMDtcbiAgdGhpcy51cGRhdGVHZXRQYXRoKCk7XG4gIC8vIGJhaWwgaWYgZ2V0UGF0aCBub3Qgc2V0LCBvciByZXR1cm5zIGZhbHNleSAjNzc2XG4gIGxldCBoYXNQYXRoID0gdGhpcy5nZXRQYXRoICYmIHRoaXMuZ2V0UGF0aCgpO1xuICBpZiAoICFoYXNQYXRoICkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Rpc2FibGluZyBJbmZpbml0ZVNjcm9sbCcpO1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnVwZGF0ZUdldEFic29sdXRlUGF0aCgpO1xuICB0aGlzLmxvZyggJ2luaXRpYWxpemVkJywgWyB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lIF0gKTtcbiAgdGhpcy5jYWxsT25Jbml0KCk7XG4gIC8vIGNyZWF0ZSBmZWF0dXJlc1xuICBmb3IgKCBsZXQgbWV0aG9kIGluIEluZmluaXRlU2Nyb2xsLmNyZWF0ZSApIHtcbiAgICBJbmZpbml0ZVNjcm9sbC5jcmVhdGVbIG1ldGhvZCBdLmNhbGwoIHRoaXMgKTtcbiAgfVxufTtcblxucHJvdG8ub3B0aW9uID0gZnVuY3Rpb24oIG9wdHMgKSB7XG4gIE9iamVjdC5hc3NpZ24oIHRoaXMub3B0aW9ucywgb3B0cyApO1xufTtcblxuLy8gY2FsbCBvbkluaXQgb3B0aW9uLCB1c2VkIGZvciBiaW5kaW5nIGV2ZW50cyBvbiBpbml0XG5wcm90by5jYWxsT25Jbml0ID0gZnVuY3Rpb24oKSB7XG4gIGxldCBvbkluaXQgPSB0aGlzLm9wdGlvbnMub25Jbml0O1xuICBpZiAoIG9uSW5pdCApIHtcbiAgICBvbkluaXQuY2FsbCggdGhpcywgdGhpcyApO1xuICB9XG59O1xuXG4vLyAtLS0tLSBldmVudHMgLS0tLS0gLy9cblxucHJvdG8uZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uKCB0eXBlLCBldmVudCwgYXJncyApIHtcbiAgdGhpcy5sb2coIHR5cGUsIGFyZ3MgKTtcbiAgbGV0IGVtaXRBcmdzID0gZXZlbnQgPyBbIGV2ZW50IF0uY29uY2F0KCBhcmdzICkgOiBhcmdzO1xuICB0aGlzLmVtaXRFdmVudCggdHlwZSwgZW1pdEFyZ3MgKTtcbiAgLy8gdHJpZ2dlciBqUXVlcnkgZXZlbnRcbiAgaWYgKCAhalF1ZXJ5IHx8ICF0aGlzLiRlbGVtZW50ICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBuYW1lc3BhY2UgalF1ZXJ5IGV2ZW50XG4gIHR5cGUgKz0gJy5pbmZpbml0ZVNjcm9sbCc7XG4gIGxldCAkZXZlbnQgPSB0eXBlO1xuICBpZiAoIGV2ZW50ICkge1xuICAgIC8vIGNyZWF0ZSBqUXVlcnkgZXZlbnRcbiAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbmV3LWNhcCAqL1xuICAgIGxldCBqUUV2ZW50ID0galF1ZXJ5LkV2ZW50KCBldmVudCApO1xuICAgIGpRRXZlbnQudHlwZSA9IHR5cGU7XG4gICAgJGV2ZW50ID0galFFdmVudDtcbiAgfVxuICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoICRldmVudCwgYXJncyApO1xufTtcblxubGV0IGxvZ2dlcnMgPSB7XG4gIGluaXRpYWxpemVkOiAoIGNsYXNzTmFtZSApID0+IGBvbiAke2NsYXNzTmFtZX1gLFxuICByZXF1ZXN0OiAoIHBhdGggKSA9PiBgVVJMOiAke3BhdGh9YCxcbiAgbG9hZDogKCByZXNwb25zZSwgcGF0aCApID0+IGAke3Jlc3BvbnNlLnRpdGxlIHx8ICcnfS4gVVJMOiAke3BhdGh9YCxcbiAgZXJyb3I6ICggZXJyb3IsIHBhdGggKSA9PiBgJHtlcnJvcn0uIFVSTDogJHtwYXRofWAsXG4gIGFwcGVuZDogKCByZXNwb25zZSwgcGF0aCwgaXRlbXMgKSA9PiBgJHtpdGVtcy5sZW5ndGh9IGl0ZW1zLiBVUkw6ICR7cGF0aH1gLFxuICBsYXN0OiAoIHJlc3BvbnNlLCBwYXRoICkgPT4gYFVSTDogJHtwYXRofWAsXG4gIGhpc3Rvcnk6ICggdGl0bGUsIHBhdGggKSA9PiBgVVJMOiAke3BhdGh9YCxcbiAgcGFnZUluZGV4OiBmdW5jdGlvbiggaW5kZXgsIG9yaWdpbiApIHtcbiAgICByZXR1cm4gYGN1cnJlbnQgcGFnZSBkZXRlcm1pbmVkIHRvIGJlOiAke2luZGV4fSBmcm9tICR7b3JpZ2lufWA7XG4gIH0sXG59O1xuXG4vLyBsb2cgZXZlbnRzXG5wcm90by5sb2cgPSBmdW5jdGlvbiggdHlwZSwgYXJncyApIHtcbiAgaWYgKCAhdGhpcy5vcHRpb25zLmRlYnVnICkgcmV0dXJuO1xuXG4gIGxldCBtZXNzYWdlID0gYFtJbmZpbml0ZVNjcm9sbF0gJHt0eXBlfWA7XG4gIGxldCBsb2dnZXIgPSBsb2dnZXJzWyB0eXBlIF07XG4gIGlmICggbG9nZ2VyICkgbWVzc2FnZSArPSAnLiAnICsgbG9nZ2VyLmFwcGx5KCB0aGlzLCBhcmdzICk7XG4gIGNvbnNvbGUubG9nKCBtZXNzYWdlICk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtZXRob2RzIHVzZWQgYW1vdW5nIGZlYXR1cmVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnByb3RvLnVwZGF0ZU1lYXN1cmVtZW50cyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLndpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgbGV0IHJlY3QgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHRoaXMudG9wID0gcmVjdC50b3AgKyB3aW5kb3cuc2Nyb2xsWTtcbn07XG5cbnByb3RvLnVwZGF0ZVNjcm9sbGVyID0gZnVuY3Rpb24oKSB7XG4gIGxldCBlbGVtZW50U2Nyb2xsID0gdGhpcy5vcHRpb25zLmVsZW1lbnRTY3JvbGw7XG4gIGlmICggIWVsZW1lbnRTY3JvbGwgKSB7XG4gICAgLy8gZGVmYXVsdCwgdXNlIHdpbmRvd1xuICAgIHRoaXMuc2Nyb2xsZXIgPSB3aW5kb3c7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGlmIHRydWUsIHNldCB0byBlbGVtZW50LCBvdGhlcndpc2UgdXNlIG9wdGlvblxuICB0aGlzLnNjcm9sbGVyID0gZWxlbWVudFNjcm9sbCA9PT0gdHJ1ZSA/IHRoaXMuZWxlbWVudCA6XG4gICAgdXRpbHMuZ2V0UXVlcnlFbGVtZW50KCBlbGVtZW50U2Nyb2xsICk7XG4gIGlmICggIXRoaXMuc2Nyb2xsZXIgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gZmluZCBlbGVtZW50U2Nyb2xsOiAke2VsZW1lbnRTY3JvbGx9YCk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHBhZ2UgcGF0aCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5wcm90by51cGRhdGVHZXRQYXRoID0gZnVuY3Rpb24oKSB7XG4gIGxldCBvcHRQYXRoID0gdGhpcy5vcHRpb25zLnBhdGg7XG4gIGlmICggIW9wdFBhdGggKSB7XG4gICAgY29uc29sZS5lcnJvcihgSW5maW5pdGVTY3JvbGwgcGF0aCBvcHRpb24gcmVxdWlyZWQuIFNldCBhczogJHtvcHRQYXRofWApO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBmdW5jdGlvblxuICBsZXQgdHlwZSA9IHR5cGVvZiBvcHRQYXRoO1xuICBpZiAoIHR5cGUgPT0gJ2Z1bmN0aW9uJyApIHtcbiAgICB0aGlzLmdldFBhdGggPSBvcHRQYXRoO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyB0ZW1wbGF0ZSBzdHJpbmc6ICcvcGFnZXMve3sjfX0uaHRtbCdcbiAgbGV0IHRlbXBsYXRlTWF0Y2ggPSB0eXBlID09ICdzdHJpbmcnICYmIG9wdFBhdGgubWF0Y2goJ3t7I319Jyk7XG4gIGlmICggdGVtcGxhdGVNYXRjaCApIHtcbiAgICB0aGlzLnVwZGF0ZUdldFBhdGhUZW1wbGF0ZSggb3B0UGF0aCApO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBzZWxlY3RvcjogJy5uZXh0LXBhZ2Utc2VsZWN0b3InXG4gIHRoaXMudXBkYXRlR2V0UGF0aFNlbGVjdG9yKCBvcHRQYXRoICk7XG59O1xuXG5wcm90by51cGRhdGVHZXRQYXRoVGVtcGxhdGUgPSBmdW5jdGlvbiggb3B0UGF0aCApIHtcbiAgLy8gc2V0IGdldFBhdGggd2l0aCB0ZW1wbGF0ZSBzdHJpbmdcbiAgdGhpcy5nZXRQYXRoID0gKCkgPT4ge1xuICAgIGxldCBuZXh0SW5kZXggPSB0aGlzLnBhZ2VJbmRleCArIDE7XG4gICAgcmV0dXJuIG9wdFBhdGgucmVwbGFjZSggJ3t7I319JywgbmV4dEluZGV4ICk7XG4gIH07XG4gIC8vIGdldCBwYWdlSW5kZXggZnJvbSBsb2NhdGlvblxuICAvLyBjb252ZXJ0IHBhdGggb3B0aW9uIGludG8gcmVnZXggdG8gbG9vayBmb3IgcGF0dGVybiBpbiBsb2NhdGlvblxuICAvLyBlc2NhcGUgcXVlcnkgKD8pIGluIHVybCwgYWxsb3dzIGZvciBwYXJzaW5nIEdFVCBwYXJhbWV0ZXJzXG4gIGxldCByZWdleFN0cmluZyA9IG9wdFBhdGhcbiAgICAucmVwbGFjZSggLyhcXFxcXFw/fFxcPykvLCAnXFxcXD8nIClcbiAgICAucmVwbGFjZSggJ3t7I319JywgJyhcXFxcZFxcXFxkP1xcXFxkPyknICk7XG4gIGxldCB0ZW1wbGF0ZVJlID0gbmV3IFJlZ0V4cCggcmVnZXhTdHJpbmcgKTtcbiAgbGV0IG1hdGNoID0gbG9jYXRpb24uaHJlZi5tYXRjaCggdGVtcGxhdGVSZSApO1xuXG4gIGlmICggbWF0Y2ggKSB7XG4gICAgdGhpcy5wYWdlSW5kZXggPSBwYXJzZUludCggbWF0Y2hbMV0sIDEwICk7XG4gICAgdGhpcy5sb2coICdwYWdlSW5kZXgnLCBbIHRoaXMucGFnZUluZGV4LCAndGVtcGxhdGUgc3RyaW5nJyBdICk7XG4gIH1cbn07XG5cbmxldCBwYXRoUmVnZXhlcyA9IFtcbiAgLy8gV29yZFByZXNzICYgVHVtYmxyIC0gZXhhbXBsZS5jb20vcGFnZS8yXG4gIC8vIEpla3lsbCAtIGV4YW1wbGUuY29tL3BhZ2UyXG4gIC9eKC4qP1xcLz9wYWdlXFwvPykoXFxkXFxkP1xcZD8pKC4qPyQpLyxcbiAgLy8gRHJ1cGFsIC0gZXhhbXBsZS5jb20vP3BhZ2U9MVxuICAvXiguKj9cXC8/XFw/cGFnZT0pKFxcZFxcZD9cXGQ/KSguKj8kKS8sXG4gIC8vIGNhdGNoIGFsbCwgbGFzdCBvY2N1cmVuY2Ugb2YgYSBudW1iZXJcbiAgLyguKj8pKFxcZFxcZD9cXGQ/KSg/IS4qXFxkKSguKj8kKS8sXG5dO1xuXG4vLyB0cnkgbWF0Y2hpbmcgaHJlZiB0byBwYXRoUmVnZXhlcyBwYXR0ZXJuc1xubGV0IGdldFBhdGhQYXJ0cyA9IEluZmluaXRlU2Nyb2xsLmdldFBhdGhQYXJ0cyA9IGZ1bmN0aW9uKCBocmVmICkge1xuICBpZiAoICFocmVmICkgcmV0dXJuO1xuICBmb3IgKCBsZXQgcmVnZXggb2YgcGF0aFJlZ2V4ZXMgKSB7XG4gICAgbGV0IG1hdGNoID0gaHJlZi5tYXRjaCggcmVnZXggKTtcbiAgICBpZiAoIG1hdGNoICkge1xuICAgICAgbGV0IFsgLCBiZWdpbiwgaW5kZXgsIGVuZCBdID0gbWF0Y2g7XG4gICAgICByZXR1cm4geyBiZWdpbiwgaW5kZXgsIGVuZCB9O1xuICAgIH1cbiAgfVxufTtcblxucHJvdG8udXBkYXRlR2V0UGF0aFNlbGVjdG9yID0gZnVuY3Rpb24oIG9wdFBhdGggKSB7XG4gIC8vIHBhcnNlIGhyZWYgb2YgbGluazogJy5uZXh0LXBhZ2UtbGluaydcbiAgbGV0IGhyZWZFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvciggb3B0UGF0aCApO1xuICBpZiAoICFocmVmRWxlbSApIHtcbiAgICBjb25zb2xlLmVycm9yKGBCYWQgSW5maW5pdGVTY3JvbGwgcGF0aCBvcHRpb24uIE5leHQgbGluayBub3QgZm91bmQ6ICR7b3B0UGF0aH1gKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgaHJlZiA9IGhyZWZFbGVtLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICBsZXQgcGF0aFBhcnRzID0gZ2V0UGF0aFBhcnRzKCBocmVmICk7XG4gIGlmICggIXBhdGhQYXJ0cyApIHtcbiAgICBjb25zb2xlLmVycm9yKGBJbmZpbml0ZVNjcm9sbCB1bmFibGUgdG8gcGFyc2UgbmV4dCBsaW5rIGhyZWY6ICR7aHJlZn1gKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgeyBiZWdpbiwgaW5kZXgsIGVuZCB9ID0gcGF0aFBhcnRzO1xuICB0aGlzLmlzUGF0aFNlbGVjdG9yID0gdHJ1ZTsgLy8gZmxhZyBmb3IgY2hlY2tMYXN0UGFnZSgpXG4gIHRoaXMuZ2V0UGF0aCA9ICgpID0+IGJlZ2luICsgKCB0aGlzLnBhZ2VJbmRleCArIDEgKSArIGVuZDtcbiAgLy8gZ2V0IHBhZ2VJbmRleCBmcm9tIGhyZWZcbiAgdGhpcy5wYWdlSW5kZXggPSBwYXJzZUludCggaW5kZXgsIDEwICkgLSAxO1xuICB0aGlzLmxvZyggJ3BhZ2VJbmRleCcsIFsgdGhpcy5wYWdlSW5kZXgsICduZXh0IGxpbmsnIF0gKTtcbn07XG5cbnByb3RvLnVwZGF0ZUdldEFic29sdXRlUGF0aCA9IGZ1bmN0aW9uKCkge1xuICBsZXQgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAvLyBwYXRoIGRvZXNuJ3Qgc3RhcnQgd2l0aCBodHRwIG9yIC9cbiAgbGV0IGlzQWJzb2x1dGUgPSBwYXRoLm1hdGNoKCAvXmh0dHAvICkgfHwgcGF0aC5tYXRjaCggL15cXC8vICk7XG4gIGlmICggaXNBYnNvbHV0ZSApIHtcbiAgICB0aGlzLmdldEFic29sdXRlUGF0aCA9IHRoaXMuZ2V0UGF0aDtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgeyBwYXRobmFtZSB9ID0gbG9jYXRpb247XG4gIC8vIHF1ZXJ5IHBhcmFtZXRlciAjODI5LiBleGFtcGxlLmNvbS8/cGc9MlxuICBsZXQgaXNRdWVyeSA9IHBhdGgubWF0Y2goIC9eXFw/LyApO1xuICAvLyAvZm9vL2Jhci9pbmRleC5odG1sID0+IC9mb28vYmFyXG4gIGxldCBkaXJlY3RvcnkgPSBwYXRobmFtZS5zdWJzdHJpbmcoIDAsIHBhdGhuYW1lLmxhc3RJbmRleE9mKCcvJykgKTtcbiAgbGV0IHBhdGhTdGFydCA9IGlzUXVlcnkgPyBwYXRobmFtZSA6IGRpcmVjdG9yeSArICcvJztcblxuICB0aGlzLmdldEFic29sdXRlUGF0aCA9ICgpID0+IHBhdGhTdGFydCArIHRoaXMuZ2V0UGF0aCgpO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbmF2IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIGhpZGUgbmF2aWdhdGlvblxuSW5maW5pdGVTY3JvbGwuY3JlYXRlLmhpZGVOYXYgPSBmdW5jdGlvbigpIHtcbiAgbGV0IG5hdiA9IHV0aWxzLmdldFF1ZXJ5RWxlbWVudCggdGhpcy5vcHRpb25zLmhpZGVOYXYgKTtcbiAgaWYgKCAhbmF2ICkgcmV0dXJuO1xuXG4gIG5hdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB0aGlzLm5hdiA9IG5hdjtcbn07XG5cbkluZmluaXRlU2Nyb2xsLmRlc3Ryb3kuaGlkZU5hdiA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMubmF2ICkgdGhpcy5uYXYuc3R5bGUuZGlzcGxheSA9ICcnO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZGVzdHJveSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5wcm90by5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuYWxsT2ZmKCk7IC8vIHJlbW92ZSBhbGwgZXZlbnQgbGlzdGVuZXJzXG4gIC8vIGNhbGwgZGVzdHJveSBtZXRob2RzXG4gIGZvciAoIGxldCBtZXRob2QgaW4gSW5maW5pdGVTY3JvbGwuZGVzdHJveSApIHtcbiAgICBJbmZpbml0ZVNjcm9sbC5kZXN0cm95WyBtZXRob2QgXS5jYWxsKCB0aGlzICk7XG4gIH1cblxuICBkZWxldGUgdGhpcy5lbGVtZW50LmluZmluaXRlU2Nyb2xsR1VJRDtcbiAgZGVsZXRlIGluc3RhbmNlc1sgdGhpcy5ndWlkIF07XG4gIC8vIHJlbW92ZSBqUXVlcnkgZGF0YS4gIzgwN1xuICBpZiAoIGpRdWVyeSAmJiB0aGlzLiRlbGVtZW50ICkge1xuICAgIGpRdWVyeS5yZW1vdmVEYXRhKCB0aGlzLmVsZW1lbnQsICdpbmZpbml0ZVNjcm9sbCcgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdXRpbGl0aWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIGh0dHBzOi8vcmVteXNoYXJwLmNvbS8yMDEwLzA3LzIxL3Rocm90dGxpbmctZnVuY3Rpb24tY2FsbHNcbkluZmluaXRlU2Nyb2xsLnRocm90dGxlID0gZnVuY3Rpb24oIGZuLCB0aHJlc2hvbGQgKSB7XG4gIHRocmVzaG9sZCA9IHRocmVzaG9sZCB8fCAyMDA7XG4gIGxldCBsYXN0LCB0aW1lb3V0O1xuXG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBsZXQgbm93ID0gK25ldyBEYXRlKCk7XG4gICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGV0IHRyaWdnZXIgPSAoKSA9PiB7XG4gICAgICBsYXN0ID0gbm93O1xuICAgICAgZm4uYXBwbHkoIHRoaXMsIGFyZ3MgKTtcbiAgICB9O1xuICAgIGlmICggbGFzdCAmJiBub3cgPCBsYXN0ICsgdGhyZXNob2xkICkge1xuICAgICAgLy8gaG9sZCBvbiB0byBpdFxuICAgICAgY2xlYXJUaW1lb3V0KCB0aW1lb3V0ICk7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dCggdHJpZ2dlciwgdGhyZXNob2xkICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyaWdnZXIoKTtcbiAgICB9XG4gIH07XG59O1xuXG5JbmZpbml0ZVNjcm9sbC5kYXRhID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIGVsZW0gPSB1dGlscy5nZXRRdWVyeUVsZW1lbnQoIGVsZW0gKTtcbiAgbGV0IGlkID0gZWxlbSAmJiBlbGVtLmluZmluaXRlU2Nyb2xsR1VJRDtcbiAgcmV0dXJuIGlkICYmIGluc3RhbmNlc1sgaWQgXTtcbn07XG5cbi8vIHNldCBpbnRlcm5hbCBqUXVlcnksIGZvciBXZWJwYWNrICsgalF1ZXJ5IHYzXG5JbmZpbml0ZVNjcm9sbC5zZXRKUXVlcnkgPSBmdW5jdGlvbigganFyeSApIHtcbiAgalF1ZXJ5ID0ganFyeTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHNldHVwIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnV0aWxzLmh0bWxJbml0KCBJbmZpbml0ZVNjcm9sbCwgJ2luZmluaXRlLXNjcm9sbCcgKTtcblxuLy8gYWRkIG5vb3AgX2luaXQgbWV0aG9kIGZvciBqUXVlcnkgQnJpZGdldC4gIzc2OFxucHJvdG8uX2luaXQgPSBmdW5jdGlvbigpIHt9O1xuXG5sZXQgeyBqUXVlcnlCcmlkZ2V0IH0gPSB3aW5kb3c7XG5pZiAoIGpRdWVyeSAmJiBqUXVlcnlCcmlkZ2V0ICkge1xuICBqUXVlcnlCcmlkZ2V0KCAnaW5maW5pdGVTY3JvbGwnLCBJbmZpbml0ZVNjcm9sbCwgalF1ZXJ5ICk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5yZXR1cm4gSW5maW5pdGVTY3JvbGw7XG5cbn0gKSApO1xuIiwiLy8gaGlzdG9yeVxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHJlcXVpcmUoJy4vY29yZScpLFxuICAgICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpLFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHdpbmRvdy5JbmZpbml0ZVNjcm9sbCxcbiAgICAgICAgd2luZG93LmZpenp5VUlVdGlscyxcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBJbmZpbml0ZVNjcm9sbCwgdXRpbHMgKSB7XG5cbmxldCBwcm90byA9IEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZTtcblxuT2JqZWN0LmFzc2lnbiggSW5maW5pdGVTY3JvbGwuZGVmYXVsdHMsIHtcbiAgaGlzdG9yeTogJ3JlcGxhY2UnLFxuICAvLyBoaXN0b3J5VGl0bGU6IGZhbHNlLFxufSApO1xuXG5sZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuLy8gLS0tLS0gY3JlYXRlL2Rlc3Ryb3kgLS0tLS0gLy9cblxuSW5maW5pdGVTY3JvbGwuY3JlYXRlLmhpc3RvcnkgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCAhdGhpcy5vcHRpb25zLmhpc3RvcnkgKSByZXR1cm47XG5cbiAgLy8gY2hlY2sgZm9yIHNhbWUgb3JpZ2luXG4gIGxpbmsuaHJlZiA9IHRoaXMuZ2V0QWJzb2x1dGVQYXRoKCk7XG4gIC8vIE1TIEVkZ2UgZG9lcyBub3QgaGF2ZSBvcmlnaW4gb24gbGlua1xuICAvLyBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xMjIzNjQ5My9cbiAgbGV0IGxpbmtPcmlnaW4gPSBsaW5rLm9yaWdpbiB8fCBsaW5rLnByb3RvY29sICsgJy8vJyArIGxpbmsuaG9zdDtcbiAgbGV0IGlzU2FtZU9yaWdpbiA9IGxpbmtPcmlnaW4gPT0gbG9jYXRpb24ub3JpZ2luO1xuICBpZiAoICFpc1NhbWVPcmlnaW4gKSB7XG4gICAgY29uc29sZS5lcnJvciggJ1tJbmZpbml0ZVNjcm9sbF0gY2Fubm90IHNldCBoaXN0b3J5IHdpdGggZGlmZmVyZW50IG9yaWdpbjogJyArXG4gICAgICBgJHtsaW5rLm9yaWdpbn0gb24gJHtsb2NhdGlvbi5vcmlnaW59IC4gSGlzdG9yeSBiZWhhdmlvciBkaXNhYmxlZC5gICk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gdHdvIHdheXMgdG8gaGFuZGxlIGNoYW5naW5nIGhpc3RvcnlcbiAgaWYgKCB0aGlzLm9wdGlvbnMuYXBwZW5kICkge1xuICAgIHRoaXMuY3JlYXRlSGlzdG9yeUFwcGVuZCgpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuY3JlYXRlSGlzdG9yeVBhZ2VMb2FkKCk7XG4gIH1cbn07XG5cbnByb3RvLmNyZWF0ZUhpc3RvcnlBcHBlbmQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy51cGRhdGVNZWFzdXJlbWVudHMoKTtcbiAgdGhpcy51cGRhdGVTY3JvbGxlcigpO1xuICAvLyBhcnJheSBvZiBzY3JvbGwgcG9zaXRpb25zIG9mIGFwcGVuZGVkIHBhZ2VzXG4gIHRoaXMuc2Nyb2xsUGFnZXMgPSBbXG4gICAgLy8gZmlyc3QgcGFnZVxuICAgIHtcbiAgICAgIHRvcDogMCxcbiAgICAgIHBhdGg6IGxvY2F0aW9uLmhyZWYsXG4gICAgICB0aXRsZTogZG9jdW1lbnQudGl0bGUsXG4gICAgfSxcbiAgXTtcbiAgdGhpcy5zY3JvbGxQYWdlID0gdGhpcy5zY3JvbGxQYWdlc1swXTtcbiAgLy8gZXZlbnRzXG4gIHRoaXMuc2Nyb2xsSGlzdG9yeUhhbmRsZXIgPSB0aGlzLm9uU2Nyb2xsSGlzdG9yeS5iaW5kKCB0aGlzICk7XG4gIHRoaXMudW5sb2FkSGFuZGxlciA9IHRoaXMub25VbmxvYWQuYmluZCggdGhpcyApO1xuICB0aGlzLnNjcm9sbGVyLmFkZEV2ZW50TGlzdGVuZXIoICdzY3JvbGwnLCB0aGlzLnNjcm9sbEhpc3RvcnlIYW5kbGVyICk7XG4gIHRoaXMub24oICdhcHBlbmQnLCB0aGlzLm9uQXBwZW5kSGlzdG9yeSApO1xuICB0aGlzLmJpbmRIaXN0b3J5QXBwZW5kRXZlbnRzKCB0cnVlICk7XG59O1xuXG5wcm90by5iaW5kSGlzdG9yeUFwcGVuZEV2ZW50cyA9IGZ1bmN0aW9uKCBpc0JpbmQgKSB7XG4gIGxldCBhZGRSZW1vdmUgPSBpc0JpbmQgPyAnYWRkRXZlbnRMaXN0ZW5lcicgOiAncmVtb3ZlRXZlbnRMaXN0ZW5lcic7XG4gIHRoaXMuc2Nyb2xsZXJbIGFkZFJlbW92ZSBdKCAnc2Nyb2xsJywgdGhpcy5zY3JvbGxIaXN0b3J5SGFuZGxlciApO1xuICB3aW5kb3dbIGFkZFJlbW92ZSBdKCAndW5sb2FkJywgdGhpcy51bmxvYWRIYW5kbGVyICk7XG59O1xuXG5wcm90by5jcmVhdGVIaXN0b3J5UGFnZUxvYWQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5vbiggJ2xvYWQnLCB0aGlzLm9uUGFnZUxvYWRIaXN0b3J5ICk7XG59O1xuXG5JbmZpbml0ZVNjcm9sbC5kZXN0cm95Lmhpc3RvcnkgPVxucHJvdG8uZGVzdHJveUhpc3RvcnkgPSBmdW5jdGlvbigpIHtcbiAgbGV0IGlzSGlzdG9yeUFwcGVuZCA9IHRoaXMub3B0aW9ucy5oaXN0b3J5ICYmIHRoaXMub3B0aW9ucy5hcHBlbmQ7XG4gIGlmICggaXNIaXN0b3J5QXBwZW5kICkge1xuICAgIHRoaXMuYmluZEhpc3RvcnlBcHBlbmRFdmVudHMoIGZhbHNlICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIGFwcGVuZCBoaXN0b3J5IC0tLS0tIC8vXG5cbnByb3RvLm9uQXBwZW5kSGlzdG9yeSA9IGZ1bmN0aW9uKCByZXNwb25zZSwgcGF0aCwgaXRlbXMgKSB7XG4gIC8vIGRvIG5vdCBwcm9jZWVkIGlmIG5vIGl0ZW1zLiAjNzc5XG4gIGlmICggIWl0ZW1zIHx8ICFpdGVtcy5sZW5ndGggKSByZXR1cm47XG5cbiAgbGV0IGZpcnN0SXRlbSA9IGl0ZW1zWzBdO1xuICBsZXQgZWxlbVNjcm9sbFkgPSB0aGlzLmdldEVsZW1lbnRTY3JvbGxZKCBmaXJzdEl0ZW0gKTtcbiAgLy8gcmVzb2x2ZSBwYXRoXG4gIGxpbmsuaHJlZiA9IHBhdGg7XG4gIC8vIGFkZCBwYWdlIGRhdGEgdG8gaGFzaFxuICB0aGlzLnNjcm9sbFBhZ2VzLnB1c2goe1xuICAgIHRvcDogZWxlbVNjcm9sbFksXG4gICAgcGF0aDogbGluay5ocmVmLFxuICAgIHRpdGxlOiByZXNwb25zZS50aXRsZSxcbiAgfSk7XG59O1xuXG5wcm90by5nZXRFbGVtZW50U2Nyb2xsWSA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICBpZiAoIHRoaXMub3B0aW9ucy5lbGVtZW50U2Nyb2xsICkge1xuICAgIHJldHVybiBlbGVtLm9mZnNldFRvcCAtIHRoaXMudG9wO1xuICB9IGVsc2Uge1xuICAgIGxldCByZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gcmVjdC50b3AgKyB3aW5kb3cuc2Nyb2xsWTtcbiAgfVxufTtcblxucHJvdG8ub25TY3JvbGxIaXN0b3J5ID0gZnVuY3Rpb24oKSB7XG4gIC8vIGN5Y2xlIHRocm91Z2ggcG9zaXRpb25zLCBmaW5kIGJpZ2dlc3Qgd2l0aG91dCBnb2luZyBvdmVyXG4gIGxldCBzY3JvbGxQYWdlID0gdGhpcy5nZXRDbG9zZXN0U2Nyb2xsUGFnZSgpO1xuICAvLyBzZXQgaGlzdG9yeSBpZiBjaGFuZ2VkXG4gIGlmICggc2Nyb2xsUGFnZSAhPSB0aGlzLnNjcm9sbFBhZ2UgKSB7XG4gICAgdGhpcy5zY3JvbGxQYWdlID0gc2Nyb2xsUGFnZTtcbiAgICB0aGlzLnNldEhpc3RvcnkoIHNjcm9sbFBhZ2UudGl0bGUsIHNjcm9sbFBhZ2UucGF0aCApO1xuICB9XG59O1xuXG51dGlscy5kZWJvdW5jZU1ldGhvZCggSW5maW5pdGVTY3JvbGwsICdvblNjcm9sbEhpc3RvcnknLCAxNTAgKTtcblxucHJvdG8uZ2V0Q2xvc2VzdFNjcm9sbFBhZ2UgPSBmdW5jdGlvbigpIHtcbiAgbGV0IHNjcm9sbFZpZXdZO1xuICBpZiAoIHRoaXMub3B0aW9ucy5lbGVtZW50U2Nyb2xsICkge1xuICAgIHNjcm9sbFZpZXdZID0gdGhpcy5zY3JvbGxlci5zY3JvbGxUb3AgKyB0aGlzLnNjcm9sbGVyLmNsaWVudEhlaWdodCAvIDI7XG4gIH0gZWxzZSB7XG4gICAgc2Nyb2xsVmlld1kgPSB3aW5kb3cuc2Nyb2xsWSArIHRoaXMud2luZG93SGVpZ2h0IC8gMjtcbiAgfVxuXG4gIGxldCBzY3JvbGxQYWdlO1xuICBmb3IgKCBsZXQgcGFnZSBvZiB0aGlzLnNjcm9sbFBhZ2VzICkge1xuICAgIGlmICggcGFnZS50b3AgPj0gc2Nyb2xsVmlld1kgKSBicmVhaztcblxuICAgIHNjcm9sbFBhZ2UgPSBwYWdlO1xuICB9XG4gIHJldHVybiBzY3JvbGxQYWdlO1xufTtcblxucHJvdG8uc2V0SGlzdG9yeSA9IGZ1bmN0aW9uKCB0aXRsZSwgcGF0aCApIHtcbiAgbGV0IG9wdEhpc3RvcnkgPSB0aGlzLm9wdGlvbnMuaGlzdG9yeTtcbiAgbGV0IGhpc3RvcnlNZXRob2QgPSBvcHRIaXN0b3J5ICYmIGhpc3RvcnlbIG9wdEhpc3RvcnkgKyAnU3RhdGUnIF07XG4gIGlmICggIWhpc3RvcnlNZXRob2QgKSByZXR1cm47XG5cbiAgaGlzdG9yeVsgb3B0SGlzdG9yeSArICdTdGF0ZScgXSggbnVsbCwgdGl0bGUsIHBhdGggKTtcbiAgaWYgKCB0aGlzLm9wdGlvbnMuaGlzdG9yeVRpdGxlICkgZG9jdW1lbnQudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCAnaGlzdG9yeScsIG51bGwsIFsgdGl0bGUsIHBhdGggXSApO1xufTtcblxuLy8gc2Nyb2xsIHRvIHRvcCB0byBwcmV2ZW50IGluaXRpYWwgc2Nyb2xsLXJlc2V0IGFmdGVyIHBhZ2UgcmVmcmVzaFxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE4NjMzOTE1LzE4MjE4M1xucHJvdG8ub25VbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLnNjcm9sbFBhZ2UudG9wID09PSAwICkgcmV0dXJuO1xuXG4gIC8vIGNhbGN1bGF0ZSB3aGVyZSBzY3JvbGwgcG9zaXRpb24gd291bGQgYmUgb24gcmVmcmVzaFxuICBsZXQgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZIC0gdGhpcy5zY3JvbGxQYWdlLnRvcCArIHRoaXMudG9wO1xuICAvLyBkaXNhYmxlIHNjcm9sbCBldmVudCBiZWZvcmUgc2V0dGluZyBzY3JvbGwgIzY3OVxuICB0aGlzLmRlc3Ryb3lIaXN0b3J5KCk7XG4gIHNjcm9sbFRvKCAwLCBzY3JvbGxZICk7XG59O1xuXG4vLyAtLS0tLSBsb2FkIGhpc3RvcnkgLS0tLS0gLy9cblxuLy8gdXBkYXRlIFVSTFxucHJvdG8ub25QYWdlTG9hZEhpc3RvcnkgPSBmdW5jdGlvbiggcmVzcG9uc2UsIHBhdGggKSB7XG4gIHRoaXMuc2V0SGlzdG9yeSggcmVzcG9uc2UudGl0bGUsIHBhdGggKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5yZXR1cm4gSW5maW5pdGVTY3JvbGw7XG5cbn0gKSApO1xuIiwiLyohXG4gKiBJbmZpbml0ZSBTY3JvbGwgdjQuMC4xXG4gKiBBdXRvbWF0aWNhbGx5IGFkZCBuZXh0IHBhZ2VcbiAqXG4gKiBMaWNlbnNlZCBHUEx2MyBmb3Igb3BlbiBzb3VyY2UgdXNlXG4gKiBvciBJbmZpbml0ZSBTY3JvbGwgQ29tbWVyY2lhbCBMaWNlbnNlIGZvciBjb21tZXJjaWFsIHVzZVxuICpcbiAqIGh0dHBzOi8vaW5maW5pdGUtc2Nyb2xsLmNvbVxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBNZXRhZml6enlcbiAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICAgIHJlcXVpcmUoJy4vY29yZScpLFxuICAgICAgICByZXF1aXJlKCcuL3BhZ2UtbG9hZCcpLFxuICAgICAgICByZXF1aXJlKCcuL3Njcm9sbC13YXRjaCcpLFxuICAgICAgICByZXF1aXJlKCcuL2hpc3RvcnknKSxcbiAgICAgICAgcmVxdWlyZSgnLi9idXR0b24nKSxcbiAgICAgICAgcmVxdWlyZSgnLi9zdGF0dXMnKSxcbiAgICApO1xuICB9XG5cbn0gKSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCBJbmZpbml0ZVNjcm9sbCApIHtcbiAgcmV0dXJuIEluZmluaXRlU2Nyb2xsO1xufSApO1xuIiwiLy8gcGFnZS1sb2FkXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgcmVxdWlyZSgnLi9jb3JlJyksXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgd2luZG93LkluZmluaXRlU2Nyb2xsLFxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEluZmluaXRlU2Nyb2xsICkge1xuXG5sZXQgcHJvdG8gPSBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGU7XG5cbk9iamVjdC5hc3NpZ24oIEluZmluaXRlU2Nyb2xsLmRlZmF1bHRzLCB7XG4gIC8vIGFwcGVuZDogZmFsc2UsXG4gIGxvYWRPblNjcm9sbDogdHJ1ZSxcbiAgY2hlY2tMYXN0UGFnZTogdHJ1ZSxcbiAgcmVzcG9uc2VCb2R5OiAndGV4dCcsXG4gIGRvbVBhcnNlUmVzcG9uc2U6IHRydWUsXG4gIC8vIHByZWZpbGw6IGZhbHNlLFxuICAvLyBvdXRsYXllcjogbnVsbCxcbn0gKTtcblxuSW5maW5pdGVTY3JvbGwuY3JlYXRlLnBhZ2VMb2FkID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuY2FuTG9hZCA9IHRydWU7XG4gIHRoaXMub24oICdzY3JvbGxUaHJlc2hvbGQnLCB0aGlzLm9uU2Nyb2xsVGhyZXNob2xkTG9hZCApO1xuICB0aGlzLm9uKCAnbG9hZCcsIHRoaXMuY2hlY2tMYXN0UGFnZSApO1xuICBpZiAoIHRoaXMub3B0aW9ucy5vdXRsYXllciApIHtcbiAgICB0aGlzLm9uKCAnYXBwZW5kJywgdGhpcy5vbkFwcGVuZE91dGxheWVyICk7XG4gIH1cbn07XG5cbnByb3RvLm9uU2Nyb2xsVGhyZXNob2xkTG9hZCA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMub3B0aW9ucy5sb2FkT25TY3JvbGwgKSB0aGlzLmxvYWROZXh0UGFnZSgpO1xufTtcblxubGV0IGRvbVBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcblxucHJvdG8ubG9hZE5leHRQYWdlID0gZnVuY3Rpb24oKSB7XG4gIGlmICggdGhpcy5pc0xvYWRpbmcgfHwgIXRoaXMuY2FuTG9hZCApIHJldHVybjtcblxuICBsZXQgeyByZXNwb25zZUJvZHksIGRvbVBhcnNlUmVzcG9uc2UsIGZldGNoT3B0aW9ucyB9ID0gdGhpcy5vcHRpb25zO1xuICBsZXQgcGF0aCA9IHRoaXMuZ2V0QWJzb2x1dGVQYXRoKCk7XG4gIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgaWYgKCB0eXBlb2YgZmV0Y2hPcHRpb25zID09ICdmdW5jdGlvbicgKSBmZXRjaE9wdGlvbnMgPSBmZXRjaE9wdGlvbnMoKTtcblxuICBsZXQgZmV0Y2hQcm9taXNlID0gZmV0Y2goIHBhdGgsIGZldGNoT3B0aW9ucyApXG4gICAgLnRoZW4oICggcmVzcG9uc2UgKSA9PiB7XG4gICAgICBpZiAoICFyZXNwb25zZS5vayApIHtcbiAgICAgICAgbGV0IGVycm9yID0gbmV3IEVycm9yKCByZXNwb25zZS5zdGF0dXNUZXh0ICk7XG4gICAgICAgIHRoaXMub25QYWdlRXJyb3IoIGVycm9yLCBwYXRoLCByZXNwb25zZSApO1xuICAgICAgICByZXR1cm4geyByZXNwb25zZSB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzcG9uc2VbIHJlc3BvbnNlQm9keSBdKCkudGhlbiggKCBib2R5ICkgPT4ge1xuICAgICAgICBsZXQgY2FuRG9tUGFyc2UgPSByZXNwb25zZUJvZHkgPT0gJ3RleHQnICYmIGRvbVBhcnNlUmVzcG9uc2U7XG4gICAgICAgIGlmICggY2FuRG9tUGFyc2UgKSB7XG4gICAgICAgICAgYm9keSA9IGRvbVBhcnNlci5wYXJzZUZyb21TdHJpbmcoIGJvZHksICd0ZXh0L2h0bWwnICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCByZXNwb25zZS5zdGF0dXMgPT0gMjA0ICkge1xuICAgICAgICAgIHRoaXMubGFzdFBhZ2VSZWFjaGVkKCBib2R5LCBwYXRoICk7XG4gICAgICAgICAgcmV0dXJuIHsgYm9keSwgcmVzcG9uc2UgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5vblBhZ2VMb2FkKCBib2R5LCBwYXRoLCByZXNwb25zZSApO1xuICAgICAgICB9XG4gICAgICB9ICk7XG4gICAgfSApXG4gICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xuICAgICAgdGhpcy5vblBhZ2VFcnJvciggZXJyb3IsIHBhdGggKTtcbiAgICB9ICk7XG5cbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCAncmVxdWVzdCcsIG51bGwsIFsgcGF0aCwgZmV0Y2hQcm9taXNlIF0gKTtcblxuICByZXR1cm4gZmV0Y2hQcm9taXNlO1xufTtcblxucHJvdG8ub25QYWdlTG9hZCA9IGZ1bmN0aW9uKCBib2R5LCBwYXRoLCByZXNwb25zZSApIHtcbiAgLy8gZG9uZSBsb2FkaW5nIGlmIG5vdCBhcHBlbmRpbmdcbiAgaWYgKCAhdGhpcy5vcHRpb25zLmFwcGVuZCApIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICB9XG4gIHRoaXMucGFnZUluZGV4Kys7XG4gIHRoaXMubG9hZENvdW50Kys7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCggJ2xvYWQnLCBudWxsLCBbIGJvZHksIHBhdGgsIHJlc3BvbnNlIF0gKTtcbiAgcmV0dXJuIHRoaXMuYXBwZW5kTmV4dFBhZ2UoIGJvZHksIHBhdGgsIHJlc3BvbnNlICk7XG59O1xuXG5wcm90by5hcHBlbmROZXh0UGFnZSA9IGZ1bmN0aW9uKCBib2R5LCBwYXRoLCByZXNwb25zZSApIHtcbiAgbGV0IHsgYXBwZW5kLCByZXNwb25zZUJvZHksIGRvbVBhcnNlUmVzcG9uc2UgfSA9IHRoaXMub3B0aW9ucztcbiAgLy8gZG8gbm90IGFwcGVuZCBqc29uXG4gIGxldCBpc0RvY3VtZW50ID0gcmVzcG9uc2VCb2R5ID09ICd0ZXh0JyAmJiBkb21QYXJzZVJlc3BvbnNlO1xuICBpZiAoICFpc0RvY3VtZW50IHx8ICFhcHBlbmQgKSByZXR1cm4geyBib2R5LCByZXNwb25zZSB9O1xuXG4gIGxldCBpdGVtcyA9IGJvZHkucXVlcnlTZWxlY3RvckFsbCggYXBwZW5kICk7XG4gIGxldCBwcm9taXNlVmFsdWUgPSB7IGJvZHksIHJlc3BvbnNlLCBpdGVtcyB9O1xuICAvLyBsYXN0IHBhZ2UgaGl0IGlmIG5vIGl0ZW1zLiAjODQwXG4gIGlmICggIWl0ZW1zIHx8ICFpdGVtcy5sZW5ndGggKSB7XG4gICAgdGhpcy5sYXN0UGFnZVJlYWNoZWQoIGJvZHksIHBhdGggKTtcbiAgICByZXR1cm4gcHJvbWlzZVZhbHVlO1xuICB9XG5cbiAgbGV0IGZyYWdtZW50ID0gZ2V0SXRlbXNGcmFnbWVudCggaXRlbXMgKTtcbiAgbGV0IGFwcGVuZFJlYWR5ID0gKCkgPT4ge1xuICAgIHRoaXMuYXBwZW5kSXRlbXMoIGl0ZW1zLCBmcmFnbWVudCApO1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KCAnYXBwZW5kJywgbnVsbCwgWyBib2R5LCBwYXRoLCBpdGVtcywgcmVzcG9uc2UgXSApO1xuICAgIHJldHVybiBwcm9taXNlVmFsdWU7XG4gIH07XG5cbiAgLy8gVE9ETyBhZGQgaG9vayBmb3Igb3B0aW9uIHRvIHRyaWdnZXIgYXBwZW5kUmVhZHlcbiAgaWYgKCB0aGlzLm9wdGlvbnMub3V0bGF5ZXIgKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwZW5kT3V0bGF5ZXJJdGVtcyggZnJhZ21lbnQsIGFwcGVuZFJlYWR5ICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGFwcGVuZFJlYWR5KCk7XG4gIH1cbn07XG5cbnByb3RvLmFwcGVuZEl0ZW1zID0gZnVuY3Rpb24oIGl0ZW1zLCBmcmFnbWVudCApIHtcbiAgaWYgKCAhaXRlbXMgfHwgIWl0ZW1zLmxlbmd0aCApIHJldHVybjtcblxuICAvLyBnZXQgZnJhZ21lbnQgaWYgbm90IHByb3ZpZGVkXG4gIGZyYWdtZW50ID0gZnJhZ21lbnQgfHwgZ2V0SXRlbXNGcmFnbWVudCggaXRlbXMgKTtcbiAgcmVmcmVzaFNjcmlwdHMoIGZyYWdtZW50ICk7XG4gIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCggZnJhZ21lbnQgKTtcbn07XG5cbmZ1bmN0aW9uIGdldEl0ZW1zRnJhZ21lbnQoIGl0ZW1zICkge1xuICAvLyBhZGQgaXRlbXMgdG8gZnJhZ21lbnRcbiAgbGV0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBpZiAoIGl0ZW1zICkgZnJhZ21lbnQuYXBwZW5kKCAuLi5pdGVtcyApO1xuICByZXR1cm4gZnJhZ21lbnQ7XG59XG5cbi8vIHJlcGxhY2UgPHNjcmlwdD5zIHdpdGggY29waWVzIHNvIHRoZXkgbG9hZFxuLy8gPHNjcmlwdD5zIGFkZGVkIGJ5IEluZmluaXRlU2Nyb2xsIHdpbGwgbm90IGxvYWRcbi8vIHNpbWlsYXIgdG8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjEwOTk1XG5mdW5jdGlvbiByZWZyZXNoU2NyaXB0cyggZnJhZ21lbnQgKSB7XG4gIGxldCBzY3JpcHRzID0gZnJhZ21lbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0Jyk7XG4gIGZvciAoIGxldCBzY3JpcHQgb2Ygc2NyaXB0cyApIHtcbiAgICBsZXQgZnJlc2hTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAvLyBjb3B5IGF0dHJpYnV0ZXNcbiAgICBsZXQgYXR0cnMgPSBzY3JpcHQuYXR0cmlidXRlcztcbiAgICBmb3IgKCBsZXQgYXR0ciBvZiBhdHRycyApIHtcbiAgICAgIGZyZXNoU2NyaXB0LnNldEF0dHJpYnV0ZSggYXR0ci5uYW1lLCBhdHRyLnZhbHVlICk7XG4gICAgfVxuICAgIC8vIGNvcHkgaW5uZXIgc2NyaXB0IGNvZGUuICM3MTgsICM3ODJcbiAgICBmcmVzaFNjcmlwdC5pbm5lckhUTUwgPSBzY3JpcHQuaW5uZXJIVE1MO1xuICAgIHNjcmlwdC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCggZnJlc2hTY3JpcHQsIHNjcmlwdCApO1xuICB9XG59XG5cbi8vIC0tLS0tIG91dGxheWVyIC0tLS0tIC8vXG5cbnByb3RvLmFwcGVuZE91dGxheWVySXRlbXMgPSBmdW5jdGlvbiggZnJhZ21lbnQsIGFwcGVuZFJlYWR5ICkge1xuICBsZXQgaW1hZ2VzTG9hZGVkID0gSW5maW5pdGVTY3JvbGwuaW1hZ2VzTG9hZGVkIHx8IHdpbmRvdy5pbWFnZXNMb2FkZWQ7XG4gIGlmICggIWltYWdlc0xvYWRlZCApIHtcbiAgICBjb25zb2xlLmVycm9yKCdbSW5maW5pdGVTY3JvbGxdIGltYWdlc0xvYWRlZCByZXF1aXJlZCBmb3Igb3V0bGF5ZXIgb3B0aW9uJyk7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gYXBwZW5kIG9uY2UgaW1hZ2VzIGxvYWRlZFxuICByZXR1cm4gbmV3IFByb21pc2UoIGZ1bmN0aW9uKCByZXNvbHZlICkge1xuICAgIGltYWdlc0xvYWRlZCggZnJhZ21lbnQsIGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IGJvZHlSZXNwb25zZSA9IGFwcGVuZFJlYWR5KCk7XG4gICAgICByZXNvbHZlKCBib2R5UmVzcG9uc2UgKTtcbiAgICB9ICk7XG4gIH0gKTtcbn07XG5cbnByb3RvLm9uQXBwZW5kT3V0bGF5ZXIgPSBmdW5jdGlvbiggcmVzcG9uc2UsIHBhdGgsIGl0ZW1zICkge1xuICB0aGlzLm9wdGlvbnMub3V0bGF5ZXIuYXBwZW5kZWQoIGl0ZW1zICk7XG59O1xuXG4vLyAtLS0tLSBjaGVja0xhc3RQYWdlIC0tLS0tIC8vXG5cbi8vIGNoZWNrIHJlc3BvbnNlIGZvciBuZXh0IGVsZW1lbnRcbnByb3RvLmNoZWNrTGFzdFBhZ2UgPSBmdW5jdGlvbiggYm9keSwgcGF0aCApIHtcbiAgbGV0IHsgY2hlY2tMYXN0UGFnZSwgcGF0aDogcGF0aE9wdCB9ID0gdGhpcy5vcHRpb25zO1xuICBpZiAoICFjaGVja0xhc3RQYWdlICkgcmV0dXJuO1xuXG4gIC8vIGlmIHBhdGggaXMgZnVuY3Rpb24sIGNoZWNrIGlmIG5leHQgcGF0aCBpcyB0cnV0aHlcbiAgaWYgKCB0eXBlb2YgcGF0aE9wdCA9PSAnZnVuY3Rpb24nICkge1xuICAgIGxldCBuZXh0UGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAgIGlmICggIW5leHRQYXRoICkge1xuICAgICAgdGhpcy5sYXN0UGFnZVJlYWNoZWQoIGJvZHksIHBhdGggKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgLy8gZ2V0IHNlbGVjdG9yIGZyb20gY2hlY2tMYXN0UGFnZSBvciBwYXRoIG9wdGlvblxuICBsZXQgc2VsZWN0b3I7XG4gIGlmICggdHlwZW9mIGNoZWNrTGFzdFBhZ2UgPT0gJ3N0cmluZycgKSB7XG4gICAgc2VsZWN0b3IgPSBjaGVja0xhc3RQYWdlO1xuICB9IGVsc2UgaWYgKCB0aGlzLmlzUGF0aFNlbGVjdG9yICkge1xuICAgIC8vIHBhdGggb3B0aW9uIGlzIHNlbGVjdG9yIHN0cmluZ1xuICAgIHNlbGVjdG9yID0gcGF0aE9wdDtcbiAgfVxuICAvLyBjaGVjayBsYXN0IHBhZ2UgZm9yIHNlbGVjdG9yXG4gIC8vIGJhaWwgaWYgbm8gc2VsZWN0b3Igb3Igbm90IGRvY3VtZW50IHJlc3BvbnNlXG4gIGlmICggIXNlbGVjdG9yIHx8ICFib2R5LnF1ZXJ5U2VsZWN0b3IgKSByZXR1cm47XG5cbiAgLy8gY2hlY2sgaWYgcmVzcG9uc2UgaGFzIHNlbGVjdG9yXG4gIGxldCBuZXh0RWxlbSA9IGJvZHkucXVlcnlTZWxlY3Rvciggc2VsZWN0b3IgKTtcbiAgaWYgKCAhbmV4dEVsZW0gKSB0aGlzLmxhc3RQYWdlUmVhY2hlZCggYm9keSwgcGF0aCApO1xufTtcblxucHJvdG8ubGFzdFBhZ2VSZWFjaGVkID0gZnVuY3Rpb24oIGJvZHksIHBhdGggKSB7XG4gIHRoaXMuY2FuTG9hZCA9IGZhbHNlO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoICdsYXN0JywgbnVsbCwgWyBib2R5LCBwYXRoIF0gKTtcbn07XG5cbi8vIC0tLS0tIGVycm9yIC0tLS0tIC8vXG5cbnByb3RvLm9uUGFnZUVycm9yID0gZnVuY3Rpb24oIGVycm9yLCBwYXRoLCByZXNwb25zZSApIHtcbiAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgdGhpcy5jYW5Mb2FkID0gZmFsc2U7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCggJ2Vycm9yJywgbnVsbCwgWyBlcnJvciwgcGF0aCwgcmVzcG9uc2UgXSApO1xuICByZXR1cm4gZXJyb3I7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBwcmVmaWxsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbkluZmluaXRlU2Nyb2xsLmNyZWF0ZS5wcmVmaWxsID0gZnVuY3Rpb24oKSB7XG4gIGlmICggIXRoaXMub3B0aW9ucy5wcmVmaWxsICkgcmV0dXJuO1xuXG4gIGxldCBhcHBlbmQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kO1xuICBpZiAoICFhcHBlbmQgKSB7XG4gICAgY29uc29sZS5lcnJvcihgYXBwZW5kIG9wdGlvbiByZXF1aXJlZCBmb3IgcHJlZmlsbC4gU2V0IGFzIDoke2FwcGVuZH1gKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy51cGRhdGVNZWFzdXJlbWVudHMoKTtcbiAgdGhpcy51cGRhdGVTY3JvbGxlcigpO1xuICB0aGlzLmlzUHJlZmlsbGluZyA9IHRydWU7XG4gIHRoaXMub24oICdhcHBlbmQnLCB0aGlzLnByZWZpbGwgKTtcbiAgdGhpcy5vbmNlKCAnZXJyb3InLCB0aGlzLnN0b3BQcmVmaWxsICk7XG4gIHRoaXMub25jZSggJ2xhc3QnLCB0aGlzLnN0b3BQcmVmaWxsICk7XG4gIHRoaXMucHJlZmlsbCgpO1xufTtcblxucHJvdG8ucHJlZmlsbCA9IGZ1bmN0aW9uKCkge1xuICBsZXQgZGlzdGFuY2UgPSB0aGlzLmdldFByZWZpbGxEaXN0YW5jZSgpO1xuICB0aGlzLmlzUHJlZmlsbGluZyA9IGRpc3RhbmNlID49IDA7XG4gIGlmICggdGhpcy5pc1ByZWZpbGxpbmcgKSB7XG4gICAgdGhpcy5sb2coJ3ByZWZpbGwnKTtcbiAgICB0aGlzLmxvYWROZXh0UGFnZSgpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuc3RvcFByZWZpbGwoKTtcbiAgfVxufTtcblxucHJvdG8uZ2V0UHJlZmlsbERpc3RhbmNlID0gZnVuY3Rpb24oKSB7XG4gIC8vIGVsZW1lbnQgc2Nyb2xsXG4gIGlmICggdGhpcy5vcHRpb25zLmVsZW1lbnRTY3JvbGwgKSB7XG4gICAgcmV0dXJuIHRoaXMuc2Nyb2xsZXIuY2xpZW50SGVpZ2h0IC0gdGhpcy5zY3JvbGxlci5zY3JvbGxIZWlnaHQ7XG4gIH1cbiAgLy8gd2luZG93XG4gIHJldHVybiB0aGlzLndpbmRvd0hlaWdodCAtIHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQ7XG59O1xuXG5wcm90by5zdG9wUHJlZmlsbCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmxvZygnc3RvcFByZWZpbGwnKTtcbiAgdGhpcy5vZmYoICdhcHBlbmQnLCB0aGlzLnByZWZpbGwgKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5yZXR1cm4gSW5maW5pdGVTY3JvbGw7XG5cbn0gKSApO1xuIiwiLy8gc2Nyb2xsLXdhdGNoXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgcmVxdWlyZSgnLi9jb3JlJyksXG4gICAgICAgIHJlcXVpcmUoJ2Zpenp5LXVpLXV0aWxzJyksXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgd2luZG93LkluZmluaXRlU2Nyb2xsLFxuICAgICAgICB3aW5kb3cuZml6enlVSVV0aWxzLFxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEluZmluaXRlU2Nyb2xsLCB1dGlscyApIHtcblxubGV0IHByb3RvID0gSW5maW5pdGVTY3JvbGwucHJvdG90eXBlO1xuXG4vLyBkZWZhdWx0IG9wdGlvbnNcbk9iamVjdC5hc3NpZ24oIEluZmluaXRlU2Nyb2xsLmRlZmF1bHRzLCB7XG4gIHNjcm9sbFRocmVzaG9sZDogNDAwLFxuICAvLyBlbGVtZW50U2Nyb2xsOiBudWxsLFxufSApO1xuXG5JbmZpbml0ZVNjcm9sbC5jcmVhdGUuc2Nyb2xsV2F0Y2ggPSBmdW5jdGlvbigpIHtcbiAgLy8gZXZlbnRzXG4gIHRoaXMucGFnZVNjcm9sbEhhbmRsZXIgPSB0aGlzLm9uUGFnZVNjcm9sbC5iaW5kKCB0aGlzICk7XG4gIHRoaXMucmVzaXplSGFuZGxlciA9IHRoaXMub25SZXNpemUuYmluZCggdGhpcyApO1xuXG4gIGxldCBzY3JvbGxUaHJlc2hvbGQgPSB0aGlzLm9wdGlvbnMuc2Nyb2xsVGhyZXNob2xkO1xuICBsZXQgaXNFbmFibGUgPSBzY3JvbGxUaHJlc2hvbGQgfHwgc2Nyb2xsVGhyZXNob2xkID09PSAwO1xuICBpZiAoIGlzRW5hYmxlICkgdGhpcy5lbmFibGVTY3JvbGxXYXRjaCgpO1xufTtcblxuSW5maW5pdGVTY3JvbGwuZGVzdHJveS5zY3JvbGxXYXRjaCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmRpc2FibGVTY3JvbGxXYXRjaCgpO1xufTtcblxucHJvdG8uZW5hYmxlU2Nyb2xsV2F0Y2ggPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLmlzU2Nyb2xsV2F0Y2hpbmcgKSByZXR1cm47XG5cbiAgdGhpcy5pc1Njcm9sbFdhdGNoaW5nID0gdHJ1ZTtcbiAgdGhpcy51cGRhdGVNZWFzdXJlbWVudHMoKTtcbiAgdGhpcy51cGRhdGVTY3JvbGxlcigpO1xuICAvLyBUT0RPIGRpc2FibGUgYWZ0ZXIgZXJyb3I/XG4gIHRoaXMub24oICdsYXN0JywgdGhpcy5kaXNhYmxlU2Nyb2xsV2F0Y2ggKTtcbiAgdGhpcy5iaW5kU2Nyb2xsV2F0Y2hFdmVudHMoIHRydWUgKTtcbn07XG5cbnByb3RvLmRpc2FibGVTY3JvbGxXYXRjaCA9IGZ1bmN0aW9uKCkge1xuICBpZiAoICF0aGlzLmlzU2Nyb2xsV2F0Y2hpbmcgKSByZXR1cm47XG5cbiAgdGhpcy5iaW5kU2Nyb2xsV2F0Y2hFdmVudHMoIGZhbHNlICk7XG4gIGRlbGV0ZSB0aGlzLmlzU2Nyb2xsV2F0Y2hpbmc7XG59O1xuXG5wcm90by5iaW5kU2Nyb2xsV2F0Y2hFdmVudHMgPSBmdW5jdGlvbiggaXNCaW5kICkge1xuICBsZXQgYWRkUmVtb3ZlID0gaXNCaW5kID8gJ2FkZEV2ZW50TGlzdGVuZXInIDogJ3JlbW92ZUV2ZW50TGlzdGVuZXInO1xuICB0aGlzLnNjcm9sbGVyWyBhZGRSZW1vdmUgXSggJ3Njcm9sbCcsIHRoaXMucGFnZVNjcm9sbEhhbmRsZXIgKTtcbiAgd2luZG93WyBhZGRSZW1vdmUgXSggJ3Jlc2l6ZScsIHRoaXMucmVzaXplSGFuZGxlciApO1xufTtcblxucHJvdG8ub25QYWdlU2Nyb2xsID0gSW5maW5pdGVTY3JvbGwudGhyb3R0bGUoIGZ1bmN0aW9uKCkge1xuICBsZXQgZGlzdGFuY2UgPSB0aGlzLmdldEJvdHRvbURpc3RhbmNlKCk7XG4gIGlmICggZGlzdGFuY2UgPD0gdGhpcy5vcHRpb25zLnNjcm9sbFRocmVzaG9sZCApIHtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3Njcm9sbFRocmVzaG9sZCcpO1xuICB9XG59ICk7XG5cbnByb3RvLmdldEJvdHRvbURpc3RhbmNlID0gZnVuY3Rpb24oKSB7XG4gIGxldCBib3R0b20sIHNjcm9sbFk7XG4gIGlmICggdGhpcy5vcHRpb25zLmVsZW1lbnRTY3JvbGwgKSB7XG4gICAgYm90dG9tID0gdGhpcy5zY3JvbGxlci5zY3JvbGxIZWlnaHQ7XG4gICAgc2Nyb2xsWSA9IHRoaXMuc2Nyb2xsZXIuc2Nyb2xsVG9wICsgdGhpcy5zY3JvbGxlci5jbGllbnRIZWlnaHQ7XG4gIH0gZWxzZSB7XG4gICAgYm90dG9tID0gdGhpcy50b3AgKyB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWSArIHRoaXMud2luZG93SGVpZ2h0O1xuICB9XG4gIHJldHVybiBib3R0b20gLSBzY3JvbGxZO1xufTtcblxucHJvdG8ub25SZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy51cGRhdGVNZWFzdXJlbWVudHMoKTtcbn07XG5cbnV0aWxzLmRlYm91bmNlTWV0aG9kKCBJbmZpbml0ZVNjcm9sbCwgJ29uUmVzaXplJywgMTUwICk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5yZXR1cm4gSW5maW5pdGVTY3JvbGw7XG5cbn0gKSApO1xuIiwiLy8gc3RhdHVzXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgcmVxdWlyZSgnLi9jb3JlJyksXG4gICAgICAgIHJlcXVpcmUoJ2Zpenp5LXVpLXV0aWxzJyksXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgd2luZG93LkluZmluaXRlU2Nyb2xsLFxuICAgICAgICB3aW5kb3cuZml6enlVSVV0aWxzLFxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEluZmluaXRlU2Nyb2xsLCB1dGlscyApIHtcblxubGV0IHByb3RvID0gSW5maW5pdGVTY3JvbGwucHJvdG90eXBlO1xuXG4vLyBJbmZpbml0ZVNjcm9sbC5kZWZhdWx0cy5zdGF0dXMgPSBudWxsO1xuXG5JbmZpbml0ZVNjcm9sbC5jcmVhdGUuc3RhdHVzID0gZnVuY3Rpb24oKSB7XG4gIGxldCBzdGF0dXNFbGVtID0gdXRpbHMuZ2V0UXVlcnlFbGVtZW50KCB0aGlzLm9wdGlvbnMuc3RhdHVzICk7XG4gIGlmICggIXN0YXR1c0VsZW0gKSByZXR1cm47XG5cbiAgLy8gZWxlbWVudHNcbiAgdGhpcy5zdGF0dXNFbGVtZW50ID0gc3RhdHVzRWxlbTtcbiAgdGhpcy5zdGF0dXNFdmVudEVsZW1lbnRzID0ge1xuICAgIHJlcXVlc3Q6IHN0YXR1c0VsZW0ucXVlcnlTZWxlY3RvcignLmluZmluaXRlLXNjcm9sbC1yZXF1ZXN0JyksXG4gICAgZXJyb3I6IHN0YXR1c0VsZW0ucXVlcnlTZWxlY3RvcignLmluZmluaXRlLXNjcm9sbC1lcnJvcicpLFxuICAgIGxhc3Q6IHN0YXR1c0VsZW0ucXVlcnlTZWxlY3RvcignLmluZmluaXRlLXNjcm9sbC1sYXN0JyksXG4gIH07XG4gIC8vIGV2ZW50c1xuICB0aGlzLm9uKCAncmVxdWVzdCcsIHRoaXMuc2hvd1JlcXVlc3RTdGF0dXMgKTtcbiAgdGhpcy5vbiggJ2Vycm9yJywgdGhpcy5zaG93RXJyb3JTdGF0dXMgKTtcbiAgdGhpcy5vbiggJ2xhc3QnLCB0aGlzLnNob3dMYXN0U3RhdHVzICk7XG4gIHRoaXMuYmluZEhpZGVTdGF0dXMoJ29uJyk7XG59O1xuXG5wcm90by5iaW5kSGlkZVN0YXR1cyA9IGZ1bmN0aW9uKCBiaW5kTWV0aG9kICkge1xuICBsZXQgaGlkZUV2ZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZCA/ICdhcHBlbmQnIDogJ2xvYWQnO1xuICB0aGlzWyBiaW5kTWV0aG9kIF0oIGhpZGVFdmVudCwgdGhpcy5oaWRlQWxsU3RhdHVzICk7XG59O1xuXG5wcm90by5zaG93UmVxdWVzdFN0YXR1cyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNob3dTdGF0dXMoJ3JlcXVlc3QnKTtcbn07XG5cbnByb3RvLnNob3dFcnJvclN0YXR1cyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNob3dTdGF0dXMoJ2Vycm9yJyk7XG59O1xuXG5wcm90by5zaG93TGFzdFN0YXR1cyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNob3dTdGF0dXMoJ2xhc3QnKTtcbiAgLy8gcHJldmVudCBsYXN0IHRoZW4gYXBwZW5kIGV2ZW50IHJhY2UgY29uZGl0aW9uIGZyb20gc2hvd2luZyBsYXN0IHN0YXR1cyAjNzA2XG4gIHRoaXMuYmluZEhpZGVTdGF0dXMoJ29mZicpO1xufTtcblxucHJvdG8uc2hvd1N0YXR1cyA9IGZ1bmN0aW9uKCBldmVudE5hbWUgKSB7XG4gIHNob3coIHRoaXMuc3RhdHVzRWxlbWVudCApO1xuICB0aGlzLmhpZGVTdGF0dXNFdmVudEVsZW1lbnRzKCk7XG4gIGxldCBldmVudEVsZW0gPSB0aGlzLnN0YXR1c0V2ZW50RWxlbWVudHNbIGV2ZW50TmFtZSBdO1xuICBzaG93KCBldmVudEVsZW0gKTtcbn07XG5cbnByb3RvLmhpZGVBbGxTdGF0dXMgPSBmdW5jdGlvbigpIHtcbiAgaGlkZSggdGhpcy5zdGF0dXNFbGVtZW50ICk7XG4gIHRoaXMuaGlkZVN0YXR1c0V2ZW50RWxlbWVudHMoKTtcbn07XG5cbnByb3RvLmhpZGVTdGF0dXNFdmVudEVsZW1lbnRzID0gZnVuY3Rpb24oKSB7XG4gIGZvciAoIGxldCB0eXBlIGluIHRoaXMuc3RhdHVzRXZlbnRFbGVtZW50cyApIHtcbiAgICBsZXQgZXZlbnRFbGVtID0gdGhpcy5zdGF0dXNFdmVudEVsZW1lbnRzWyB0eXBlIF07XG4gICAgaGlkZSggZXZlbnRFbGVtICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5mdW5jdGlvbiBoaWRlKCBlbGVtICkge1xuICBzZXREaXNwbGF5KCBlbGVtLCAnbm9uZScgKTtcbn1cblxuZnVuY3Rpb24gc2hvdyggZWxlbSApIHtcbiAgc2V0RGlzcGxheSggZWxlbSwgJ2Jsb2NrJyApO1xufVxuXG5mdW5jdGlvbiBzZXREaXNwbGF5KCBlbGVtLCB2YWx1ZSApIHtcbiAgaWYgKCBlbGVtICkge1xuICAgIGVsZW0uc3R5bGUuZGlzcGxheSA9IHZhbHVlO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5yZXR1cm4gSW5maW5pdGVTY3JvbGw7XG5cbn0gKSApO1xuIiwiLyoqXG4gKiBFdkVtaXR0ZXIgdjIuMC4wXG4gKiBMaWwnIGV2ZW50IGVtaXR0ZXJcbiAqIE1JVCBMaWNlbnNlXG4gKi9cblxuKCBmdW5jdGlvbiggZ2xvYmFsLCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTIC0gQnJvd3NlcmlmeSwgV2VicGFja1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgIGdsb2JhbC5FdkVtaXR0ZXIgPSBmYWN0b3J5KCk7XG4gIH1cblxufSggdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHRoaXMsIGZ1bmN0aW9uKCkge1xuXG5mdW5jdGlvbiBFdkVtaXR0ZXIoKSB7fVxuXG5sZXQgcHJvdG8gPSBFdkVtaXR0ZXIucHJvdG90eXBlO1xuXG5wcm90by5vbiA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGxpc3RlbmVyICkge1xuICBpZiAoICFldmVudE5hbWUgfHwgIWxpc3RlbmVyICkgcmV0dXJuIHRoaXM7XG5cbiAgLy8gc2V0IGV2ZW50cyBoYXNoXG4gIGxldCBldmVudHMgPSB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG4gIC8vIHNldCBsaXN0ZW5lcnMgYXJyYXlcbiAgbGV0IGxpc3RlbmVycyA9IGV2ZW50c1sgZXZlbnROYW1lIF0gPSBldmVudHNbIGV2ZW50TmFtZSBdIHx8IFtdO1xuICAvLyBvbmx5IGFkZCBvbmNlXG4gIGlmICggIWxpc3RlbmVycy5pbmNsdWRlcyggbGlzdGVuZXIgKSApIHtcbiAgICBsaXN0ZW5lcnMucHVzaCggbGlzdGVuZXIgKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8ub25jZSA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGxpc3RlbmVyICkge1xuICBpZiAoICFldmVudE5hbWUgfHwgIWxpc3RlbmVyICkgcmV0dXJuIHRoaXM7XG5cbiAgLy8gYWRkIGV2ZW50XG4gIHRoaXMub24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKTtcbiAgLy8gc2V0IG9uY2UgZmxhZ1xuICAvLyBzZXQgb25jZUV2ZW50cyBoYXNoXG4gIGxldCBvbmNlRXZlbnRzID0gdGhpcy5fb25jZUV2ZW50cyA9IHRoaXMuX29uY2VFdmVudHMgfHwge307XG4gIC8vIHNldCBvbmNlTGlzdGVuZXJzIG9iamVjdFxuICBsZXQgb25jZUxpc3RlbmVycyA9IG9uY2VFdmVudHNbIGV2ZW50TmFtZSBdID0gb25jZUV2ZW50c1sgZXZlbnROYW1lIF0gfHwge307XG4gIC8vIHNldCBmbGFnXG4gIG9uY2VMaXN0ZW5lcnNbIGxpc3RlbmVyIF0gPSB0cnVlO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8ub2ZmID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKSB7XG4gIGxldCBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHMgJiYgdGhpcy5fZXZlbnRzWyBldmVudE5hbWUgXTtcbiAgaWYgKCAhbGlzdGVuZXJzIHx8ICFsaXN0ZW5lcnMubGVuZ3RoICkgcmV0dXJuIHRoaXM7XG5cbiAgbGV0IGluZGV4ID0gbGlzdGVuZXJzLmluZGV4T2YoIGxpc3RlbmVyICk7XG4gIGlmICggaW5kZXggIT0gLTEgKSB7XG4gICAgbGlzdGVuZXJzLnNwbGljZSggaW5kZXgsIDEgKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8uZW1pdEV2ZW50ID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgYXJncyApIHtcbiAgbGV0IGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50cyAmJiB0aGlzLl9ldmVudHNbIGV2ZW50TmFtZSBdO1xuICBpZiAoICFsaXN0ZW5lcnMgfHwgIWxpc3RlbmVycy5sZW5ndGggKSByZXR1cm4gdGhpcztcblxuICAvLyBjb3B5IG92ZXIgdG8gYXZvaWQgaW50ZXJmZXJlbmNlIGlmIC5vZmYoKSBpbiBsaXN0ZW5lclxuICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuc2xpY2UoIDAgKTtcbiAgYXJncyA9IGFyZ3MgfHwgW107XG4gIC8vIG9uY2Ugc3R1ZmZcbiAgbGV0IG9uY2VMaXN0ZW5lcnMgPSB0aGlzLl9vbmNlRXZlbnRzICYmIHRoaXMuX29uY2VFdmVudHNbIGV2ZW50TmFtZSBdO1xuXG4gIGZvciAoIGxldCBsaXN0ZW5lciBvZiBsaXN0ZW5lcnMgKSB7XG4gICAgbGV0IGlzT25jZSA9IG9uY2VMaXN0ZW5lcnMgJiYgb25jZUxpc3RlbmVyc1sgbGlzdGVuZXIgXTtcbiAgICBpZiAoIGlzT25jZSApIHtcbiAgICAgIC8vIHJlbW92ZSBsaXN0ZW5lclxuICAgICAgLy8gcmVtb3ZlIGJlZm9yZSB0cmlnZ2VyIHRvIHByZXZlbnQgcmVjdXJzaW9uXG4gICAgICB0aGlzLm9mZiggZXZlbnROYW1lLCBsaXN0ZW5lciApO1xuICAgICAgLy8gdW5zZXQgb25jZSBmbGFnXG4gICAgICBkZWxldGUgb25jZUxpc3RlbmVyc1sgbGlzdGVuZXIgXTtcbiAgICB9XG4gICAgLy8gdHJpZ2dlciBsaXN0ZW5lclxuICAgIGxpc3RlbmVyLmFwcGx5KCB0aGlzLCBhcmdzICk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLmFsbE9mZiA9IGZ1bmN0aW9uKCkge1xuICBkZWxldGUgdGhpcy5fZXZlbnRzO1xuICBkZWxldGUgdGhpcy5fb25jZUV2ZW50cztcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5yZXR1cm4gRXZFbWl0dGVyO1xuXG59ICkgKTtcbiIsIi8qKlxuICogRml6enkgVUkgdXRpbHMgdjMuMC4wXG4gKiBNSVQgbGljZW5zZVxuICovXG5cbiggZnVuY3Rpb24oIGdsb2JhbCwgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSggZ2xvYmFsICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBnbG9iYWwuZml6enlVSVV0aWxzID0gZmFjdG9yeSggZ2xvYmFsICk7XG4gIH1cblxufSggdGhpcywgZnVuY3Rpb24gZmFjdG9yeSggZ2xvYmFsICkge1xuXG5sZXQgdXRpbHMgPSB7fTtcblxuLy8gLS0tLS0gZXh0ZW5kIC0tLS0tIC8vXG5cbi8vIGV4dGVuZHMgb2JqZWN0c1xudXRpbHMuZXh0ZW5kID0gZnVuY3Rpb24oIGEsIGIgKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKCBhLCBiICk7XG59O1xuXG4vLyAtLS0tLSBtb2R1bG8gLS0tLS0gLy9cblxudXRpbHMubW9kdWxvID0gZnVuY3Rpb24oIG51bSwgZGl2ICkge1xuICByZXR1cm4gKCAoIG51bSAlIGRpdiApICsgZGl2ICkgJSBkaXY7XG59O1xuXG4vLyAtLS0tLSBtYWtlQXJyYXkgLS0tLS0gLy9cblxuLy8gdHVybiBlbGVtZW50IG9yIG5vZGVMaXN0IGludG8gYW4gYXJyYXlcbnV0aWxzLm1ha2VBcnJheSA9IGZ1bmN0aW9uKCBvYmogKSB7XG4gIC8vIHVzZSBvYmplY3QgaWYgYWxyZWFkeSBhbiBhcnJheVxuICBpZiAoIEFycmF5LmlzQXJyYXkoIG9iaiApICkgcmV0dXJuIG9iajtcblxuICAvLyByZXR1cm4gZW1wdHkgYXJyYXkgaWYgdW5kZWZpbmVkIG9yIG51bGwuICM2XG4gIGlmICggb2JqID09PSBudWxsIHx8IG9iaiA9PT0gdW5kZWZpbmVkICkgcmV0dXJuIFtdO1xuXG4gIGxldCBpc0FycmF5TGlrZSA9IHR5cGVvZiBvYmogPT0gJ29iamVjdCcgJiYgdHlwZW9mIG9iai5sZW5ndGggPT0gJ251bWJlcic7XG4gIC8vIGNvbnZlcnQgbm9kZUxpc3QgdG8gYXJyYXlcbiAgaWYgKCBpc0FycmF5TGlrZSApIHJldHVybiBbIC4uLm9iaiBdO1xuXG4gIC8vIGFycmF5IG9mIHNpbmdsZSBpbmRleFxuICByZXR1cm4gWyBvYmogXTtcbn07XG5cbi8vIC0tLS0tIHJlbW92ZUZyb20gLS0tLS0gLy9cblxudXRpbHMucmVtb3ZlRnJvbSA9IGZ1bmN0aW9uKCBhcnksIG9iaiApIHtcbiAgbGV0IGluZGV4ID0gYXJ5LmluZGV4T2YoIG9iaiApO1xuICBpZiAoIGluZGV4ICE9IC0xICkge1xuICAgIGFyeS5zcGxpY2UoIGluZGV4LCAxICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIGdldFBhcmVudCAtLS0tLSAvL1xuXG51dGlscy5nZXRQYXJlbnQgPSBmdW5jdGlvbiggZWxlbSwgc2VsZWN0b3IgKSB7XG4gIHdoaWxlICggZWxlbS5wYXJlbnROb2RlICYmIGVsZW0gIT0gZG9jdW1lbnQuYm9keSApIHtcbiAgICBlbGVtID0gZWxlbS5wYXJlbnROb2RlO1xuICAgIGlmICggZWxlbS5tYXRjaGVzKCBzZWxlY3RvciApICkgcmV0dXJuIGVsZW07XG4gIH1cbn07XG5cbi8vIC0tLS0tIGdldFF1ZXJ5RWxlbWVudCAtLS0tLSAvL1xuXG4vLyB1c2UgZWxlbWVudCBhcyBzZWxlY3RvciBzdHJpbmdcbnV0aWxzLmdldFF1ZXJ5RWxlbWVudCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICBpZiAoIHR5cGVvZiBlbGVtID09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBlbGVtICk7XG4gIH1cbiAgcmV0dXJuIGVsZW07XG59O1xuXG4vLyAtLS0tLSBoYW5kbGVFdmVudCAtLS0tLSAvL1xuXG4vLyBlbmFibGUgLm9udHlwZSB0byB0cmlnZ2VyIGZyb20gLmFkZEV2ZW50TGlzdGVuZXIoIGVsZW0sICd0eXBlJyApXG51dGlscy5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgbGV0IG1ldGhvZCA9ICdvbicgKyBldmVudC50eXBlO1xuICBpZiAoIHRoaXNbIG1ldGhvZCBdICkge1xuICAgIHRoaXNbIG1ldGhvZCBdKCBldmVudCApO1xuICB9XG59O1xuXG4vLyAtLS0tLSBmaWx0ZXJGaW5kRWxlbWVudHMgLS0tLS0gLy9cblxudXRpbHMuZmlsdGVyRmluZEVsZW1lbnRzID0gZnVuY3Rpb24oIGVsZW1zLCBzZWxlY3RvciApIHtcbiAgLy8gbWFrZSBhcnJheSBvZiBlbGVtc1xuICBlbGVtcyA9IHV0aWxzLm1ha2VBcnJheSggZWxlbXMgKTtcblxuICByZXR1cm4gZWxlbXNcbiAgICAvLyBjaGVjayB0aGF0IGVsZW0gaXMgYW4gYWN0dWFsIGVsZW1lbnRcbiAgICAuZmlsdGVyKCAoIGVsZW0gKSA9PiBlbGVtIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgKVxuICAgIC5yZWR1Y2UoICggZmZFbGVtcywgZWxlbSApID0+IHtcbiAgICAgIC8vIGFkZCBlbGVtIGlmIG5vIHNlbGVjdG9yXG4gICAgICBpZiAoICFzZWxlY3RvciApIHtcbiAgICAgICAgZmZFbGVtcy5wdXNoKCBlbGVtICk7XG4gICAgICAgIHJldHVybiBmZkVsZW1zO1xuICAgICAgfVxuICAgICAgLy8gZmlsdGVyICYgZmluZCBpdGVtcyBpZiB3ZSBoYXZlIGEgc2VsZWN0b3JcbiAgICAgIC8vIGZpbHRlclxuICAgICAgaWYgKCBlbGVtLm1hdGNoZXMoIHNlbGVjdG9yICkgKSB7XG4gICAgICAgIGZmRWxlbXMucHVzaCggZWxlbSApO1xuICAgICAgfVxuICAgICAgLy8gZmluZCBjaGlsZHJlblxuICAgICAgbGV0IGNoaWxkRWxlbXMgPSBlbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoIHNlbGVjdG9yICk7XG4gICAgICAvLyBjb25jYXQgY2hpbGRFbGVtcyB0byBmaWx0ZXJGb3VuZCBhcnJheVxuICAgICAgZmZFbGVtcyA9IGZmRWxlbXMuY29uY2F0KCAuLi5jaGlsZEVsZW1zICk7XG4gICAgICByZXR1cm4gZmZFbGVtcztcbiAgICB9LCBbXSApO1xufTtcblxuLy8gLS0tLS0gZGVib3VuY2VNZXRob2QgLS0tLS0gLy9cblxudXRpbHMuZGVib3VuY2VNZXRob2QgPSBmdW5jdGlvbiggX2NsYXNzLCBtZXRob2ROYW1lLCB0aHJlc2hvbGQgKSB7XG4gIHRocmVzaG9sZCA9IHRocmVzaG9sZCB8fCAxMDA7XG4gIC8vIG9yaWdpbmFsIG1ldGhvZFxuICBsZXQgbWV0aG9kID0gX2NsYXNzLnByb3RvdHlwZVsgbWV0aG9kTmFtZSBdO1xuICBsZXQgdGltZW91dE5hbWUgPSBtZXRob2ROYW1lICsgJ1RpbWVvdXQnO1xuXG4gIF9jbGFzcy5wcm90b3R5cGVbIG1ldGhvZE5hbWUgXSA9IGZ1bmN0aW9uKCkge1xuICAgIGNsZWFyVGltZW91dCggdGhpc1sgdGltZW91dE5hbWUgXSApO1xuXG4gICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdGhpc1sgdGltZW91dE5hbWUgXSA9IHNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgIG1ldGhvZC5hcHBseSggdGhpcywgYXJncyApO1xuICAgICAgZGVsZXRlIHRoaXNbIHRpbWVvdXROYW1lIF07XG4gICAgfSwgdGhyZXNob2xkICk7XG4gIH07XG59O1xuXG4vLyAtLS0tLSBkb2NSZWFkeSAtLS0tLSAvL1xuXG51dGlscy5kb2NSZWFkeSA9IGZ1bmN0aW9uKCBvbkRvY1JlYWR5ICkge1xuICBsZXQgcmVhZHlTdGF0ZSA9IGRvY3VtZW50LnJlYWR5U3RhdGU7XG4gIGlmICggcmVhZHlTdGF0ZSA9PSAnY29tcGxldGUnIHx8IHJlYWR5U3RhdGUgPT0gJ2ludGVyYWN0aXZlJyApIHtcbiAgICAvLyBkbyBhc3luYyB0byBhbGxvdyBmb3Igb3RoZXIgc2NyaXB0cyB0byBydW4uIG1ldGFmaXp6eS9mbGlja2l0eSM0NDFcbiAgICBzZXRUaW1lb3V0KCBvbkRvY1JlYWR5ICk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ0RPTUNvbnRlbnRMb2FkZWQnLCBvbkRvY1JlYWR5ICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIGh0bWxJbml0IC0tLS0tIC8vXG5cbi8vIGh0dHA6Ly9iaXQubHkvM29ZTHVzY1xudXRpbHMudG9EYXNoZWQgPSBmdW5jdGlvbiggc3RyICkge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoIC8oLikoW0EtWl0pL2csIGZ1bmN0aW9uKCBtYXRjaCwgJDEsICQyICkge1xuICAgIHJldHVybiAkMSArICctJyArICQyO1xuICB9ICkudG9Mb3dlckNhc2UoKTtcbn07XG5cbmxldCBjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGU7XG5cbi8vIGFsbG93IHVzZXIgdG8gaW5pdGlhbGl6ZSBjbGFzc2VzIHZpYSBbZGF0YS1uYW1lc3BhY2VdIG9yIC5qcy1uYW1lc3BhY2UgY2xhc3Ncbi8vIGh0bWxJbml0KCBXaWRnZXQsICd3aWRnZXROYW1lJyApXG4vLyBvcHRpb25zIGFyZSBwYXJzZWQgZnJvbSBkYXRhLW5hbWVzcGFjZS1vcHRpb25zXG51dGlscy5odG1sSW5pdCA9IGZ1bmN0aW9uKCBXaWRnZXRDbGFzcywgbmFtZXNwYWNlICkge1xuICB1dGlscy5kb2NSZWFkeSggZnVuY3Rpb24oKSB7XG4gICAgbGV0IGRhc2hlZE5hbWVzcGFjZSA9IHV0aWxzLnRvRGFzaGVkKCBuYW1lc3BhY2UgKTtcbiAgICBsZXQgZGF0YUF0dHIgPSAnZGF0YS0nICsgZGFzaGVkTmFtZXNwYWNlO1xuICAgIGxldCBkYXRhQXR0ckVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggYFske2RhdGFBdHRyfV1gICk7XG4gICAgbGV0IGpRdWVyeSA9IGdsb2JhbC5qUXVlcnk7XG5cbiAgICBbIC4uLmRhdGFBdHRyRWxlbXMgXS5mb3JFYWNoKCAoIGVsZW0gKSA9PiB7XG4gICAgICBsZXQgYXR0ciA9IGVsZW0uZ2V0QXR0cmlidXRlKCBkYXRhQXR0ciApO1xuICAgICAgbGV0IG9wdGlvbnM7XG4gICAgICB0cnkge1xuICAgICAgICBvcHRpb25zID0gYXR0ciAmJiBKU09OLnBhcnNlKCBhdHRyICk7XG4gICAgICB9IGNhdGNoICggZXJyb3IgKSB7XG4gICAgICAgIC8vIGxvZyBlcnJvciwgZG8gbm90IGluaXRpYWxpemVcbiAgICAgICAgaWYgKCBjb25zb2xlICkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoIGBFcnJvciBwYXJzaW5nICR7ZGF0YUF0dHJ9IG9uICR7ZWxlbS5jbGFzc05hbWV9OiAke2Vycm9yfWAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBpbml0aWFsaXplXG4gICAgICBsZXQgaW5zdGFuY2UgPSBuZXcgV2lkZ2V0Q2xhc3MoIGVsZW0sIG9wdGlvbnMgKTtcbiAgICAgIC8vIG1ha2UgYXZhaWxhYmxlIHZpYSAkKCkuZGF0YSgnbmFtZXNwYWNlJylcbiAgICAgIGlmICggalF1ZXJ5ICkge1xuICAgICAgICBqUXVlcnkuZGF0YSggZWxlbSwgbmFtZXNwYWNlLCBpbnN0YW5jZSApO1xuICAgICAgfVxuICAgIH0gKTtcblxuICB9ICk7XG59O1xuXG4vLyAtLS0tLSAgLS0tLS0gLy9cblxucmV0dXJuIHV0aWxzO1xuXG59ICkgKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF91dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUmVzcG9uc2l2ZUF1dG9IZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFJlc3BvbnNpdmVBdXRvSGVpZ2h0KHNlbGVjdG9yLCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZXNwb25zaXZlQXV0b0hlaWdodCk7XG5cbiAgICB0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3I7XG4gICAgdGhpcy5lbGVtZW50cyA9IHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSA6IHNlbGVjdG9yO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnJ1bigpO1xuICAgIH0pO1xuICAgIHRoaXMucnVuKCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUmVzcG9uc2l2ZUF1dG9IZWlnaHQsIFt7XG4gICAga2V5OiAncmVjYWxjJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVjYWxjKCkge1xuICAgICAgdGhpcy5lbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZWxlY3Rvcik7XG4gICAgICB0aGlzLnJ1bigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ21ha2VHcm91cHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtYWtlR3JvdXBzKGVsZW1lbnRzKSB7XG4gICAgICB2YXIgZ3JvdXAgPSBbXTtcbiAgICAgIFtdLmZvckVhY2guY2FsbChlbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMXB4JztcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgfSk7XG4gICAgICB2YXIgaWR4ID0gMDtcbiAgICAgIHZhciBoZWlnaHQgPSAoMCwgX3V0aWwuZ2V0T2Zmc2V0KShlbGVtZW50c1swXSkudG9wO1xuICAgICAgZ3JvdXBbMF0gPSBbXTtcbiAgICAgIFtdLmZvckVhY2guY2FsbChlbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCgwLCBfdXRpbC5nZXRPZmZzZXQpKGVsZW1lbnQpLnRvcCAhPT0gaGVpZ2h0KSB7XG4gICAgICAgICAgaGVpZ2h0ID0gKDAsIF91dGlsLmdldE9mZnNldCkoZWxlbWVudCkudG9wO1xuICAgICAgICAgIGlkeCArPSAxO1xuICAgICAgICAgIGdyb3VwW2lkeF0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBncm91cFtpZHhdLnB1c2goZWxlbWVudCk7XG4gICAgICB9KTtcbiAgICAgIFtdLmZvckVhY2guY2FsbChlbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZ3JvdXA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYXV0b0hlaWdodCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGF1dG9IZWlnaHQoZ3JvdXApIHtcbiAgICAgIHZhciBoZWlnaHRzID0gZ3JvdXAubWFwKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHZhciBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgICAgICAgdmFyIGJveFNpemluZyA9IGNvbXB1dGVkU3R5bGUuYm94U2l6aW5nO1xuICAgICAgICBpZiAoYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCcpIHtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0SGVpZ2h0IC0gcGFyc2VGbG9hdChjb21wdXRlZFN0eWxlLnBhZGRpbmdUb3ApIC0gcGFyc2VGbG9hdChjb21wdXRlZFN0eWxlLnBhZGRpbmdCb3R0b20pO1xuICAgICAgfSk7XG4gICAgICB2YXIgbWF4SGVpZ2h0ID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgX3RvQ29uc3VtYWJsZUFycmF5KGhlaWdodHMpKTtcbiAgICAgIGdyb3VwLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBtYXhIZWlnaHQgKyAncHgnO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncnVuJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcnVuKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBlbGVtZW50cyA9IHRoaXMuZWxlbWVudHM7XG5cbiAgICAgIHZhciBncm91cHMgPSB0aGlzLm1ha2VHcm91cHMoZWxlbWVudHMpO1xuICAgICAgZ3JvdXBzLmZvckVhY2goZnVuY3Rpb24gKGdyb3VwKSB7XG4gICAgICAgIF90aGlzMi5hdXRvSGVpZ2h0KGdyb3VwKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSZXNwb25zaXZlQXV0b0hlaWdodDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUmVzcG9uc2l2ZUF1dG9IZWlnaHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBnZXRTY3JvbGxUb3AgPSBmdW5jdGlvbiBnZXRTY3JvbGxUb3AoKSB7XG4gIHJldHVybiB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCAwO1xufTtcblxudmFyIGdldFNjcm9sbExlZnQgPSBmdW5jdGlvbiBnZXRTY3JvbGxMZWZ0KCkge1xuICByZXR1cm4gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCB8fCAwO1xufTtcblxudmFyIGdldE9mZnNldCA9IGV4cG9ydHMuZ2V0T2Zmc2V0ID0gZnVuY3Rpb24gZ2V0T2Zmc2V0KGVsKSB7XG4gIHZhciByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiB7XG4gICAgdG9wOiByZWN0LnRvcCArIGdldFNjcm9sbFRvcCgpLFxuICAgIGxlZnQ6IHJlY3QubGVmdCArIGdldFNjcm9sbExlZnQoKVxuICB9O1xufTsiXX0=

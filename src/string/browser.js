/**
 * @desc 浏览器验证
 * @return {String} 返回boolen
 * 例如：getBrowserInfo().isMac
 */

const getBrowserInfo = function() {
    var userAgent = navigator.userAgent.toLowerCase();
    var isMobile = /iphone|ipad|ipod|android|windows phone/i.test(userAgent);
    var isiOS = /iphone|ipad|ipod/i.test(userAgent);
    var isAndroid = /android/i.test(userAgent);
    var isIPhone = /iphone/i.test(userAgent);
    var isIPad = /ipad/i.test(userAgent);
    var isMac = /mac os/i.test(userAgent);
    var isWebApp = window.matchMedia('(display-mode: standalone)').matches;
    var isWeChat = /micromessenger/i.test(userAgent);
    var isQQ = /qq/i.test(userAgent);
    var isWindowsPhone = /windows phone/i.test(userAgent);
    var isWindows = /windows nt/i.test(userAgent) && !/windows phone/i.test(userAgent);
    var isOpera = userAgent.indexOf('opera') > -1 || userAgent.indexOf('opr') > -1;
    var isFirefox = userAgent.indexOf('firefox') > -1;
    var isEdge = userAgent.indexOf('edge') > -1;
    var isIE = false || !!document.documentMode;
    var isChrome = userAgent.indexOf('chrome') > -1 && !isOpera && !isEdge;
  
    var browserInfo = {
      isOpera: isOpera,
      isIE: isIE,
      isEdge: isEdge,
      isFirefox: isFirefox,
      isChrome: isChrome,
      isSafari: !isChrome && userAgent.indexOf('safari') > -1,
      isMobile: isMobile,
      isWindowsPhone: isWindowsPhone,
      isWindows: isWindows,
      isiOS: isiOS,
      isAndroid: isAndroid,
      isIPhone: isIPhone,
      isIPad: isIPad,
      isMac: isMac,
      isWebApp: isWebApp,
      isWeChat: isWeChat,
      isQQ: isQQ
    };
  
    return browserInfo;
  }

  return getBrowserInfo
  
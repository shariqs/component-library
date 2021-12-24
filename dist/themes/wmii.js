
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

/* "WMII" by tPenguinLTG
 * https://www.deviantart.com/tpenguinltg/art/wmii-683233676
 */
var wmii = {
  name: 'wmii',
  anchor: 'rgb(129, 101, 79)',
  anchorVisited: 'rgb(129, 101, 79)',
  borderDark: 'rgb(145, 148, 75)',
  borderDarkest: 'rgb(64, 64, 64)',
  borderLight: 'rgb(193, 196, 139)',
  borderLightest: 'rgb(224, 225, 198)',
  canvas: 'rgb(255, 255, 255)',
  canvasText: 'rgb(0, 0, 0)',
  canvasTextDisabled: 'rgb(145, 148, 75)',
  canvasTextDisabledShadow: 'rgb(224, 225, 198)',
  canvasTextInvert: 'rgb(255, 255, 255)',
  checkmark: 'rgb(0, 0, 0)',
  checkmarkDisabled: 'rgb(145, 148, 75)',
  flatDark: 'rgb(145, 148, 75)',
  flatLight: 'rgb(193, 196, 139)',
  focusSecondary: 'rgb(224, 225, 198)',
  headerBackground: 'linear-gradient(to right, rgb(129, 101, 79), rgb(129, 101, 79))',
  headerNotActiveBackground: 'linear-gradient(to right, rgb(145, 148, 75), rgb(145, 148, 75))',
  headerNotActiveText: 'rgb(193, 196, 139)',
  headerText: 'rgb(255, 255, 255)',
  hoverBackground: 'rgb(0, 0, 0)',
  material: 'rgb(193, 196, 139)',
  materialDark: 'rgb(145, 148, 75)',
  materialText: 'rgb(0, 0, 0)',
  materialTextDisabled: 'rgb(145, 148, 75)',
  materialTextDisabledShadow: 'rgb(224, 225, 198)',
  materialTextInvert: 'rgb(255, 255, 255)',
  progress: 'rgb(0, 0, 0)',
  tooltip: 'rgb(255, 255, 225)'
};

module.exports = wmii;

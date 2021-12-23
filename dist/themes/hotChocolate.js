
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

/* "Hot Chocolate" by tPenguinLTG
 * https://www.deviantart.com/tpenguinltg/art/Hot-Chocolate-654380979
 */
var hotChocolate = {
  name: 'hotChocolate',
  anchor: 'rgb(128, 96, 64)',
  anchorVisited: 'rgb(128, 96, 64)',
  borderDark: 'rgb(128, 96, 64)',
  borderDarkest: 'rgb(64, 64, 64)',
  borderLight: 'rgb(181, 143, 106)',
  borderLightest: 'rgb(219, 200, 181)',
  canvas: 'rgb(219, 200, 181)',
  canvasText: 'rgb(57, 43, 28)',
  canvasTextDisabled: 'rgb(128, 96, 64)',
  canvasTextDisabledShadow: 'rgb(219, 200, 181)',
  canvasTextInvert: 'rgb(255, 255, 255)',
  checkmark: 'rgb(57, 43, 28)',
  checkmarkDisabled: 'rgb(128, 96, 64)',
  flatDark: 'rgb(128, 96, 64)',
  flatLight: 'rgb(181, 143, 106)',
  focusSecondary: 'rgb(219, 200, 181)',
  headerBackground: 'linear-gradient(to right, rgb(128, 96, 64), rgb(208, 183, 157))',
  headerNotActiveBackground: 'linear-gradient(to right, rgb(128, 96, 64), rgb(128, 96, 64))',
  headerNotActiveText: 'rgb(219, 200, 181)',
  headerText: 'rgb(255, 255, 255)',
  hoverBackground: 'rgb(128, 96, 64)',
  material: 'rgb(181, 143, 106)',
  materialDark: 'rgb(128, 96, 64)',
  materialText: 'rgb(57, 43, 28)',
  materialTextDisabled: 'rgb(128, 96, 64)',
  materialTextDisabledShadow: 'rgb(219, 200, 181)',
  materialTextInvert: 'rgb(255, 255, 255)',
  progress: 'rgb(128, 96, 64)',
  tooltip: 'rgb(219, 200, 181)'
};

module.exports = hotChocolate;


(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

/* "Red Wine" by tPenguinLTG
 * https://www.deviantart.com/tpenguinltg/art/Red-Wine-545729607
 */
var redWine = {
  name: 'redWine',
  anchor: 'rgb(255, 0, 0)',
  anchorVisited: 'rgb(255, 0, 0)',
  borderDark: 'rgb(67, 9, 5)',
  borderDarkest: 'rgb(64, 32, 32)',
  borderLight: 'rgb(102, 12, 8)',
  borderLightest: 'rgb(192, 64, 56)',
  canvas: 'rgb(64, 0, 0)',
  canvasText: 'rgb(255, 255, 255)',
  canvasTextDisabled: 'rgb(67, 9, 5)',
  canvasTextDisabledShadow: 'rgb(192, 64, 56)',
  canvasTextInvert: 'rgb(255, 255, 255)',
  checkmark: 'rgb(255, 255, 255)',
  checkmarkDisabled: 'rgb(192, 64, 64)',
  flatDark: 'rgb(67, 9, 5)',
  flatLight: 'rgb(102, 12, 8)',
  focusSecondary: 'rgb(192, 64, 56)',
  headerBackground: 'linear-gradient(to right, rgb(64, 0, 12), rgb(217, 11, 0))',
  headerNotActiveBackground: 'linear-gradient(to right, rgb(0, 0, 0), rgb(134, 4, 2))',
  headerNotActiveText: 'rgb(239, 44, 33)',
  headerText: 'rgb(255, 255, 255)',
  hoverBackground: 'rgb(192, 0, 0)',
  material: 'rgb(102, 12, 8)',
  materialDark: 'rgb(0, 0, 0)',
  materialText: 'rgb(255, 255, 255)',
  materialTextDisabled: 'rgb(67, 9, 5)',
  materialTextDisabledShadow: 'rgb(192, 64, 56)',
  materialTextInvert: 'rgb(255, 255, 255)',
  progress: 'rgb(192, 0, 0)',
  tooltip: 'rgb(64, 0, 0)'
};

module.exports = redWine;

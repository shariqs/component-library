
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

/* "PowerShell" by tPenguinLTG
 * https://www.deviantart.com/tpenguinltg/art/PowerShell-646065752
 */
var powerShell = {
  name: 'powerShell',
  anchor: 'rgb(0, 192, 0)',
  anchorVisited: 'rgb(0, 192, 0)',
  borderDark: 'rgb(128, 128, 128)',
  borderDarkest: 'rgb(128, 128, 128)',
  borderLight: 'rgb(128, 128, 128)',
  borderLightest: 'rgb(128, 128, 128)',
  canvas: 'rgb(1, 36, 86)',
  canvasText: 'rgb(238, 237, 240)',
  canvasTextDisabled: 'rgb(128, 128, 128)',
  canvasTextDisabledShadow: 'rgb(128, 128, 128)',
  canvasTextInvert: 'rgb(255, 255, 255)',
  checkmark: 'rgb(238, 237, 240)',
  checkmarkDisabled: 'rgb(180, 180, 180)',
  flatDark: 'rgb(128, 128, 128)',
  flatLight: 'rgb(128, 128, 128)',
  focusSecondary: 'rgb(128, 128, 128)',
  headerBackground: 'linear-gradient(to right, rgb(1, 36, 86), rgb(1, 36, 86))',
  headerNotActiveBackground: 'linear-gradient(to right, rgb(1, 36, 86), rgb(1, 36, 86))',
  headerNotActiveText: 'rgb(192, 192, 192)',
  headerText: 'rgb(255, 255, 255)',
  hoverBackground: 'rgb(0, 128, 128)',
  material: 'rgb(1, 36, 86)',
  materialDark: 'rgb(1, 36, 86)',
  materialText: 'rgb(255, 255, 255)',
  materialTextDisabled: 'rgb(128, 128, 128)',
  materialTextDisabledShadow: 'rgb(128, 128, 128)',
  materialTextInvert: 'rgb(255, 255, 255)',
  progress: 'rgb(0, 128, 128)',
  tooltip: 'rgb(255, 255, 225)'
};

module.exports = powerShell;

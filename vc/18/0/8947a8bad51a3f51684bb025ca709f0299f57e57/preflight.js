!function(){function e(e){var t,n,o,i;for(t=0;t<u.length;t++)if(n=u[t],o=e.match(n[0])){i=+o[1]||0;for(var r=1;r<n.length;r++)if(i<n[r][0])return n[r][1]}return a}function t(){var e=document.createElement("canvas"),t=e.getContext?e.getContext("2d"):null;return Function.prototype.bind&&Date.now&&t&&t.measureText?"classList"in e&&"remove"in Element.prototype&&Math.hypot&&window.requestAnimationFrame?a:r:i}var n=2010,o=2012,i=2015,r=2017,a=1/0,g=1,l=0,u=[[/Googlebot|Google Page Speed Insights|Google Web Preview|bingbot|MSNBot|YandexMobileBot|BingPreview/,[a,a,g]],[/MSIE ([0-9]+)\./,[7,n,l],[9,o,l],[a,i,l]],[/Trident\/(.*?); rv:11\.0/,[a,r,g]],[/Firefox\/([0-9]+)\./,[4,o,l],[31,i,l],[52,r,g],[a,a,g]],[/Edge\/([0-9]+)\./,[14,r,g],[a,a,g]],[/Chrome\/([0-9]+)\./,[9,o,l],[36,i,l],[56,r,g],[a,a,g]],[/Opera Mini\/([0-9]+)/,[a,i,l]],[/Android ([0-9]+)\./,[4,o,l]],[/OS ([0-9]+)_[0-9_]+ like Mac OS X/,[6,o,l],[8,i,l],[9,r,l]],[/Version\/([0-9]+)[._0-9 ]+Safari\/[0-9_]+/,[8,r,l],[9,r,g]],[/AppleWebKit\/([0-9]+)\./,[534,o,l],[537,i,l],[a,a,g]]],d=document.location,m=Math.min(t(),e(navigator.userAgent));a>m&&(d.pathname="/outdated/"+m+d.pathname)}();
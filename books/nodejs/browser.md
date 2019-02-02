Window

```javascript
'use strict'
console.log('window inner size: ' + window.innerWidth + ' x ' + window.innerHeight);
console.log('appName = ' + navigator.appName);
console.log('appVersion = ' + navigator.appVersion);
console.log('language = ' + navigator.language);
console.log('platform = ' + navigator.platform);
console.log('userAgent = ' + navigator.userAgent);
console.log('Screen size = ' + screen.width + ' x ' + screen.height);
location.href; // http://www.example.com:8080/path/index.html?a=1&b=2#TOP
location.protocol; // 'http'
location.host; // 'www.example.com'
location.port; // '8080'
location.pathname; // '/path/index.html'
location.search; // '?a=1&b=2'
location.hash; // 'TOP'
if (confirm('reload' + location.href + '?')) {
    location.reload();
} else {
    location.assign('/'); // new url
}
```

[![NPM](https://nodei.co/npm/isgd.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.com/package/isgd/)

# Is.gd [http://is.gd](http://is.gd) URL Shortener module

Example Shorten:

First run ```npm install isgd``` to install the Is.gd package to your system.

```javascript
import { shorten, custom, lookup } from 'isgd';

shorten('http://google.com').then(response => {
	console.log(response); // Returns a shorter version of http://google.com - http://is.gd/OwycZW
});

custom('http://google.com', 'MyGoogleShortcut').then(response => {
	console.log(response); // If the custom URL of MyGoogleShortcut is actually available, it should return http://is.gd/MyGoogleShortcut
});

lookup('http://is.gd/OwycZW').then(response => {
	console.log(response); // Returns a longer version of http://is.gd/OwycZW - http://google.com
});
```

[This Package Is Under The MIT License](https://raw.githubusercontent.com/AlphaT3ch/is.gd/master/LICENSE.txt)

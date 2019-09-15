
var s = document.createElement('script');
s.src = chrome.extension.getURL('script.js');
(document.head || document.documentElement).appendChild(s);
{
  "name": "Youtube text search",
  "version": "1.0.3",
  "manifest_version": 2,
  "description": "Youtube text search",
  "background": {
    "scripts": ["background.js"]
  },
  "content_scripts": [{
    "matches": ["*://*.youtube.com/watch*"],
    "js":      ["content.js"],
    "run_at":    "document_start"
  }],
  "browser_action": {
    "default_icon": "icon.png",
    "default_title": "Allow-Control-Allow-Origin",
    "default_popup": "popup.html"
  },
  "permissions": [
    "storage",
    "webRequest",
    "webRequestBlocking",
    "<all_urls>"
  ],
  "web_accessible_resources": ["script.js"]
}
{
  "web_accessible_resources": [
    "images/*.png",
    "style/double-rainbow.css",
    "script/double-rainbow.js",
    "script/main.js",
    "templates/*"
  ],

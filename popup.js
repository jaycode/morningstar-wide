let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.insertCSS(
        tabs[0].id,
        {code: '.mdc-page-shell__content {width: 100% !important;} ' +
               '.stock__content-sal {width: 100% !important;} ' +
               '.stock__content-ad {display: none !important;} '});
  });
};
function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText)
  };
  xhr.open('GET', url, true);
  xhr.send();
  return xhr;
}

export function getUsefulContents(url, callback) {
  console.log(getJSON(url, data => callback(JSON.parse(data))));
}

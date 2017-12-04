export function initComponents (selectorObjsArr) {
  selectorObjsArr.forEach(s => {
    document.querySelectorAll(s.selector).forEach(elem => {
      new window[s.classExtension]().$mount(elem)
    })
  })
}

// NodeList.prototype.forEach() polyfill
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this)
    }
  }
}

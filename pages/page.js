
 export default class Page {
  /**
  * Constructor for abstract Page class
  * @constructor
  */
  constructor () { }

  open (path) {
    browser.url(path)
  }
}

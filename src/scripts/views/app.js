import DrawerInitiator from '../utils/drawer-initiator.js';
import UrlParser from '../routes/url-parser.js';
import routes from '../routes/routes.js';
class App {
  constructor({ button, content, drawer }) {
    this._button = button;
    this._content = content;
    this._drawer = drawer;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      content: this._content,
      drawer: this._drawer,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }

}

export default App;
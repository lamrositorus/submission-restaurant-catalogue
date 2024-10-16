import DrawerInitiator from '../utils/drawer-initiator.js';
import UrlParser from '../routes/url-parser.js';
import routes from '../routes/routes.js';
import {
  createLoaderTemplate
} from './templates/template-creator.js';
class App {
  constructor({
    button,
    content,
    drawer
  }) {
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
    this._content.innerHTML = createLoaderTemplate();
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const loader = document.querySelector('#loader');
    if (loader) {
      loader.remove();
    }

  }

}

export default App;
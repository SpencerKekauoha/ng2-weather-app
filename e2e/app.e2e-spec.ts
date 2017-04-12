import { Ng2WeatherAppPage } from './app.po';

describe('ng2-weather-app App', () => {
  let page: Ng2WeatherAppPage;

  beforeEach(() => {
    page = new Ng2WeatherAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { AmChartsPage } from './app.po';

describe('am-charts App', () => {
  let page: AmChartsPage;

  beforeEach(() => {
    page = new AmChartsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

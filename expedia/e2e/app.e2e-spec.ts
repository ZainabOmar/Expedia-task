import { ExpediaPage } from './app.po';

describe('expedia App', () => {
  let page: ExpediaPage;

  beforeEach(() => {
    page = new ExpediaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

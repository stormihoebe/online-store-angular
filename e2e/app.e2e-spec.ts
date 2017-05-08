import { OnlineStPage } from './app.po';

describe('online-st App', () => {
  let page: OnlineStPage;

  beforeEach(() => {
    page = new OnlineStPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

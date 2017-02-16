import { Ng2NinjaPage } from './app.po';

describe('ng2-ninja App', function() {
  let page: Ng2NinjaPage;

  beforeEach(() => {
    page = new Ng2NinjaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

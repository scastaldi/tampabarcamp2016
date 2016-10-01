import { Tampabarcamp2016Page } from './app.po';

describe('tampabarcamp2016 App', function() {
  let page: Tampabarcamp2016Page;

  beforeEach(() => {
    page = new Tampabarcamp2016Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

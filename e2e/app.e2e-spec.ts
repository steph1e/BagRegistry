import { BagRegistryPage } from './app.po';

describe('bag-registry App', function() {
  let page: BagRegistryPage;

  beforeEach(() => {
    page = new BagRegistryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

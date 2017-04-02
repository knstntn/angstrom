import { AngstromPage } from './app.po';

describe('angstrom App', () => {
  let page: AngstromPage;

  beforeEach(() => {
    page = new AngstromPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { MybandPage } from './app.po';

describe('myband App', () => {
  let page: MybandPage;

  beforeEach(() => {
    page = new MybandPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

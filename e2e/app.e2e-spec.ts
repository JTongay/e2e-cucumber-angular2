import { TestingPracticeAngular2Page } from './app.po';

describe('testing-practice-angular2 App', function() {
  let page: TestingPracticeAngular2Page;

  beforeEach(() => {
    page = new TestingPracticeAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

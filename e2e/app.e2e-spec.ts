import { ProjectClientPage } from './app.po';

describe('project-client App', () => {
  let page: ProjectClientPage;

  beforeEach(() => {
    page = new ProjectClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

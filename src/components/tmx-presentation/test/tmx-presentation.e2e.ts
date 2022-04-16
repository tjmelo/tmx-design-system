import { newE2EPage } from '@stencil/core/testing';

describe('tmx-presentation', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tmx-presentation></tmx-presentation>');

    const element = await page.find('tmx-presentation');
    expect(element).toHaveClass('hydrated');
  });
});

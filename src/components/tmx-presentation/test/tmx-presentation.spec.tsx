import { newSpecPage } from '@stencil/core/testing';
import { TmxPresentation } from '../tmx-presentation';

describe('tmx-presentation', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TmxPresentation],
      html: `<tmx-presentation></tmx-presentation>`,
    });
    expect(page.root).toEqualHtml(`
      <tmx-presentation>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tmx-presentation>
    `);
  });
});

import { newSpecPage } from '@stencil/core/testing';
import { DotComponent } from './dot-component';

describe('dot-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [DotComponent],
      html: '<dot-component></dot-component>',
    });
    expect(root).toEqualHtml(`
      <dot-component>
        <mock:shadow-root>
          <div class="dot-component">
            <span class="dot-child dot-default dot-feint"></span>
            <span class="dot-child dot-default dot-feint"></span>
            <span class="dot-child dot-default dot-feint"></span>
          </div>
        </mock:shadow-root>
      </dot-component>
    `)
  });
});
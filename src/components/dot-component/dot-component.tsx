import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'dot-component',
  styleUrl: 'dot-component.css',
  shadow: true
})

export class DotComponent {
  @Prop() size?: 'default' | 'sm'
  @Prop() variant?: 'feint' | 'dark' = 'feint'
  // @Prop() orientation?: 'horizontal' | 'vertical'
  @Prop() customClass?: string
  // @Prop() onClick?: () => void

  render() {
    return (
      <div
        class='dot-component'
        // onClick={this.onClick}
      >
        {
          [...Array(3)].map((_) => {
            return (
              <span class={`dot-child dot-${this.variant}`}></span>
            )
          })
        }
      </div>
    );
  }
}
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'dot-component',
  styleUrl: 'dot-component.css',
  shadow: true
})

export class DotComponent {
  @Prop() size: 'default' | 'sm' = 'default'
  @Prop() variant: 'feint' | 'dark' = 'feint'
  @Prop() orientation: 'horizontal' | 'vertical' = 'horizontal'
  @Prop() customClass?: string
  @Prop() clickFunction?: () => void

  render() {
    return (
      <div
        class={`dot-component ${this.orientation === 'vertical' ? `dot-${this.orientation}` : ''}`}
        onClick={this.clickFunction}
      >
        {
          [...Array(3)].map((_) => {
            return (
              <span
                class={`dot-child ${this.customClass} dot-${this.size} dot-${this.variant}`}
              ></span>
            )
          })
        }
      </div>
    );
  }
}
# dot-component

A StencilJS component for rendering a set of dots with customizable size, variant, and orientation.

## Properties

| Property      | Attribute    | Description                                           | Type                          | Default      |
| ------------- | ------------ | ----------------------------------------------------- | ----------------------------- | ------------ |
| `size`        | `size`       | The size of the dots ('default' or 'sm').             | `'default' | 'sm'`            | `'default'`  |
| `variant`     | `variant`    | The variant of the dots ('feint' or 'dark').          | `'feint' | 'dark'`             | `'feint'`    |
| `orientation` | `orientation`| The orientation of the dots ('horizontal' or 'vertical'). | `'horizontal' | 'vertical'` | `'horizontal'` |
| `customClass` | `customClass`| Custom CSS class to apply to each dot.                 | `string`                      | `undefined`  |

## Events

| Event        | Description                                     | Type          |
| ------------ | ----------------------------------------------- | ------------- |
| `dotsClick`  | Emitted when the dot component is clicked.      | `CustomEvent` |

## Usage

```html
<dot-component size="default" variant="feint" orientation="horizontal" customClass="my-custom-class" onDotsClick={() => handleDotsClick()}></dot-component>

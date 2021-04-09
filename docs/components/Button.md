# Button

## Examples

### Default button

<r-button>Submit</r-button>

```vue
<r-button>Submit</r-button>
```

### Colored button

<r-button color="secondary">Submit</r-button>

```vue
<r-button color="secondary">Submit</r-button>
```

### Contrasted button

<r-section color="secondary">
  <r-button color="secondary" contrast>Submit</r-button>
</r-section>

```vue
<r-button contrast>Submit</r-button>
```

<div class="api">

## API

### Props

| Name         | Type    | Default     |                              |
| ------------ | ------- | ----------- | ---------------------------- |
| `color`      | String  | `'primary'` | `'primary'` or `'secondary'` |
| `contrast`   | Boolean | `false`     |
| `icon`       | String  | `null`      | @todo                        |
| `icon-after` | String  | `null`      | @todo                        |

### Events

| Name | Type | Default |     |
| ---- | ---- | ------- | --- |
|      |      |         |     |

### Slots

| Name      |                        |
| --------- | ---------------------- |
| `default` | The button label text. |

</div>

<template>
  <component
      :is="details.tag"
      v-bind="details.attrs">
    <slot/>
  </component>
</template>

<script>
import {computed, PropType} from 'vue'

export default {
  name: 'VLink',
  props: {
    to: {
      type: [Object, String],
      default: undefined,
    },
  },
  setup(props) {
    function isExternalLink() {
      return (
        typeof props.to === 'string' &&
        props.to.match(/^(http(s)?:\/\/)|(mailto:)|(tel:)/)
      )
    }

    const details = computed(() => {
      if (!props.to) {
        return {
          tag: 'div',
          attrs: {},
        }
      }

      if (isExternalLink()) {
        return {
          tag: 'a',
          attrs: {
            href: props.to,
          },
        }
      }

      return {
        tag: 'RouterLink',
        attrs: {
          to: props.to,
        },
      }
    })

    return {
      details,
    }
  },
}
</script>

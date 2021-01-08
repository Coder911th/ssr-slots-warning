<template>
  <div>
    <h1>Index</h1>
    <div>
      <VLink to="/test-vue-router">
        Vue Router Link
      </VLink>
    </div>
    <div>
      <VLink to="https://v3.vuejs.org/">
        Native &lt;a&gt; link
      </VLink>
    </div>
    <div>
      <VLink>
        Native &lt;div&gt; stub
      </VLink>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import VLink from '../components/VLink.vue'

export default {
  name: 'IndexPage',
  components: {VLink},
  setup() {
    return {}
  },
}
</script>

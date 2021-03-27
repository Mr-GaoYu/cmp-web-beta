<template>
  <Header>222</Header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Layout } from "ant-design-vue";
import { propTypes } from "../../../utils/propTypes";

export default defineComponent({
  name: "LayoutHeader",
  components: {
    Header: Layout.Header,
  },
  props: {
    fixed: propTypes.bool,
  },
  setup(props) {
      console.log(props)
  },
});
</script>

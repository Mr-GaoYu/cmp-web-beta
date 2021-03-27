<template>
  <Layout>
      <LayoutHeader />
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Layout } from "ant-design-vue";
import LayoutHeader from "./header/index.vue";

export default defineComponent({
  components: { Layout, LayoutHeader },
  setup() {},
});
</script>

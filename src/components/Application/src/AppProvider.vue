<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup(props, { slots }) {
    const isMobile = ref(false);
    const isSetState = ref(false);

    return () => slots.default?.();
  },
});
</script>

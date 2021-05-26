<template>
  <div
    :class="{
      'hidden': !mode,
      'bg-third h-screen fixed right-0 top-0 p-6': mode,
      'side-bar-container': true,
    }"
  >
    <new-class-form v-if="mode === 'new-class'" />
  </div>
</template>
<script>
import NewClassForm from './NewClassForm.vue';

export default {
  components: {
    NewClassForm,
  },
  props: {
    mode: {
      type: String,
      required: true,
      default: 'new-class'
    },
  },
};
</script>
<style>
.side-bar-container {
  width: 400px;
}
</style>

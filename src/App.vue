<template>
  <div id="app" class="font-mono">
    <amplify-authenticator>
      <class-planner></class-planner>
    </amplify-authenticator>
  </div>
</template>

<script>
import ClassPlanner from './containers/ClassPlanner.vue';

export default {
  components: { ClassPlanner },
  name: 'App',
};
</script>

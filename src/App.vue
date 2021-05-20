<template>
  <div id="app">
    <amplify-authenticator>
      <class-planner></class-planner>
      <amplify-sign-out></amplify-sign-out>
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

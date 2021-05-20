import ClassPlanner from '../containers/ClassPlanner.vue';

export default {
  title: 'Teacher Dashboard/ClassPlanner',
  component: ClassPlanner,
};

const Template = () => ({
  components: { ClassPlanner },
  template: '<class-planner/>',
});

export const Normal = Template.bind({});

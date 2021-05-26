<template>
  <div class="bg-primary h-screen text-white">
    <div class="p-8 bg-third">
      <h1 class="font-bold">CLASS PLANNER</h1>
    </div>
    <div
      :class="{
        'ml-8': true,
        'class-planner-content__with-side-bar-open': sideBarOpened,
      }"
    >
      <div
        class="w-60 h-40 mt-4 mr-4 p-4 rounded-md bg-secondary"
        v-for="item in classList"
        :key="item.id"
      >
        <h2>{{ item.name }}</h2>
        <p>{{ item.startTime }}</p>
      </div>
    </div>
    <side-bar v-if="sideBarOpened" />
  </div>
</template>
<script>
import { DataStore } from '@aws-amplify/datastore';
import { DateTime } from 'luxon';
import { Class } from '../models';
import SideBar from '../components/SideBar.vue';

export default {
  components: {
    SideBar,
  },
  async created() {
    await this.getClasses();
  },
  data() {
    const today = new Date();
    return {
      name: '',
      description: '',
      fee: '',
      classDate: today,
      startTime: today,
      endTime: today,
      today,
      classes: [],
      sideBarOpened: true,
    };
  },
  watch: {
    classDate(date) {
      this.startTime = date;
      this.endTime = date;
    },
  },
  computed: {
    classList() {
      return this.classes.map((item) => {
        return {
          ...item,
          startTime: DateTime.fromISO(item.startTime).toFormat('hh:mma'),
        };
      });
    },
  },
  methods: {
    async createClass() {
      const { name, description, fee, startTime, endTime } = this;
      if (!name || !description) return;
      const classObj = { name, description, fee, startTime, endTime };

      try {
        await DataStore.save(new Class(classObj));
      } catch (error) {
        console.error(error);
      }

      this.name = '';
      this.description = '';
      this.fee = '';
      this.startTime = '';
      this.endTime = '';
    },
    async getClasses() {
      this.classes = await DataStore.query(Class);
    },
  },
};
</script>
<style>
.class-planner-content__with-side-bar-open {
  margin-right: 430px;
}
</style>

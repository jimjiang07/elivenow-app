<template>
  <div class="m-4">
    <div class="pl-4">
      <h1>CLASS PLANNER</h1>
    </div>
    <div class="m-4 p-4 border-blue-500 border-4">
      <input type="text" v-model="name" placeholder="Name" />
      <input type="text" v-model="description" placeholder="Description" />
      <input type="number" v-model="fee" placeholder="Fee" />
      <input type="datetime" v-model="startTime" placeholder="Start Time" />
      <input type="datetime" v-model="endTime" placeholder="End Time" />
      <button class="rounded-2xl border-4 p-2 border-purple-400" v-on:click="createClass">Create Class</button>
    </div>
    <div
      class="m-4 p-4 border-solid border-4 border-black"
      v-for="item in classes"
      :key="item.id"
    >
      <h3>{{ item.name }}</h3>
      <h4>{{ item.description }}</h4>
      <p><label>Fee: </label>{{ item.fee }}</p>
      <p><label>Start Time: </label>{{ item.startTime }}</p>
      <p><label>End Time: </label>{{ item.endTime }}</p>
    </div>
  </div>
</template>
<script>
import { DataStore } from '@aws-amplify/datastore';
import { Class } from '../models';
export default {
  async created() {
    await this.getClasses();
  },
  data() {
    return {
      name: '',
      description: '',
      fee: '',
      startTime: '',
      endTime: '',
      classes: [],
    };
  },
  methods: {
    async createClass() {
      const { name, description, fee, startTime, endTime } = this;
      if (!name || !description) return;
      const classObj = { name, description, fee, startTime, endTime };

      try {
        await DataStore.save(new Class(classObj));
      } catch (error) {
        console.error(error)
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
<style></style>

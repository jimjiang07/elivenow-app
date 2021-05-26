<template>
  <div class="bg-primary h-screen text-white">
    <div class="p-8 bg-third">
      <h1 class="font-bold">CLASS PLANNER</h1>
    </div>
    <div class="m-4 p-4 border-blue-500 border-4">
      <input type="text" v-model="name" placeholder="Name" />
      <input type="text" v-model="description" placeholder="Description" />
      <input type="number" v-model="fee" placeholder="Fee" />
      <date-picker mode="date" v-model="classDate" :min-date="today">
        <template v-slot="{ inputValue, inputEvents }">
          <input
            class="bg-white border px-2 py-1 rounded"
            :value="inputValue"
            v-on="inputEvents"
          />
        </template>
      </date-picker>
      <date-picker mode="time" v-model="startTime" is24hr>
        <template v-slot="{ inputValue, inputEvents }">
          <input
            class="bg-white border px-2 py-1 rounded"
            :value="inputValue"
            v-on="inputEvents"
          />
        </template>
      </date-picker>
      <date-picker mode="time" v-model="endTime" :min-date="startTime" is24hr>
        <template v-slot="{ inputValue, inputEvents }">
          <input
            class="bg-white border px-2 py-1 rounded"
            :value="inputValue"
            v-on="inputEvents"
          />
        </template>
      </date-picker>
      <button
        class="rounded-2xl border-4 p-2 border-purple-400"
        v-on:click="createClass"
      >
        Create Class
      </button>
    </div>
    <div class="m-8">
      <div
        class="w-80 h-40 mr-4 p-4 rounded-md bg-secondary"
        v-for="item in classList"
        :key="item.id"
      >
        <h2>{{ item.name }}</h2>
        <p>{{ item.startTime }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { DataStore } from '@aws-amplify/datastore';
import { DatePicker } from 'v-calendar';
import { DateTime } from "luxon";
import { Class } from '../models';
export default {
  components: {
    DatePicker,
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
          startTime: DateTime.fromISO(item.startTime).toFormat('hh:mma')
        }
      })
    }
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
<style></style>

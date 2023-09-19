<template>
  <div class="tasks">
    <Tasks />
  </div>
</template>

<script>
// @ is an alias to /src
import Tasks from "@/components/Tasks.vue";

export default {
  name: "TasksView",
  components: {
    Tasks,
  },
};
</script>

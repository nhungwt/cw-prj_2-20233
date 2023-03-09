<template>
  <div class="">
    <ul class="row m-0 list-group list-group-flush list-group-horizontal">
      <router-link
        v-for="option in options"
        :key="option"
        :to="{ name: option }"
        class="list-group-item mx-2 rounded-5 col text-center"
        >{{ option }}</router-link
      >
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        general: "General",
        permissions: "Permissions",
        // shifts: "Shifts",
      },
    };
  },
  computed: {},
};
</script>

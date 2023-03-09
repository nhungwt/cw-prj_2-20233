<template>
  <div class="bg-light p-4">
    <div class="d-flex justify-content-center flex-column">
      <div v-for="(value, key, index) in user" :key="key" class="b-block">
        <h6 class="mt-3 text-secondary p-0">
          {{ infors[index] }}
        </h6>
        <div class="text-black border border-secondary rounded-2 p-2">
          {{ value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infors: ["Username", "Location"],
      user: {
        username: "Nhung",
        location: "Viet Nam",
      },
    };
  },
};
</script>

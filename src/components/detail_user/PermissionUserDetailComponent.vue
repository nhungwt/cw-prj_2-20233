<template>
  <div class="card w-75">
    <div class="card-body">
      <div
        v-for="permission in permissions"
        :key="permission"
        class="form-check form-switch align-items-center"
      >
        <input class="form-check-input" type="checkbox" />
        <label
          class="form-check-label fw-bold ms-4"
          for="flexSwitchCheckDefault"
          >{{ permission }}</label
        >
        <hr class="text-secondary mt-2 ms-4" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      permissions: {
        register: "Register shift",
        delete: "Delete",
      },
    };
  },
};
</script>

<style scoped>
.form-check-input {
  height: 1.5rem;
  width: 3rem;
}
.form-check-input:checked {
  background-color: red;
  border-color: pink;
}
</style>

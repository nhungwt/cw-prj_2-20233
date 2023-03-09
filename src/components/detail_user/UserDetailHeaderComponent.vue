<template>
  <div class="d-flex align-items-center justify-content-around">
    <div class="avatar">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
        class="rounded-circle"
        style="width: 150px"
        alt="Avatar"
      />
    </div>
    <div class="card w-50 border-0">
      <div class="card-body">
        <div v-for="(value, key, index) in user" :key="key" class="row">
          <span class="mb-0 text-black fw-bold col align-self-start">{{
            infors[index]
          }}</span>
          <span class="text-secondary col align-self-center">{{ value }}</span>
          <hr class="text-secondary mt-2" />
        </div>
        <div class="row">
          <div class="">
            <a class="btn btn-info" target="__blank" href="">Edit</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infors: ["Full name", "Email", "Mobile", "Department"],
      user: {
        id: "12345",
        full_name: "Nhung",
        email: "email@co-well.vn",
        department: "ES2-2",
      },
    };
  },
};
</script>

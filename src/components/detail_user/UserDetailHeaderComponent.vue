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
          <div
            class="btn btn-outline-secondary"
            @click.prevent="deleteUser(user.id)"
          >
            DeleteUser
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      infors: ["Full name", "Email", "Mobile", "Department"],
      // user: {
      //   id: "1",
      //   full_name: "Nhung",
      //   email: "email@co-well.vn",
      //   department: "ES2-2",,
      //   isActive: true
      // },
      user: "",
    };
  },
  async created() {
    try {
      const res = await axios.get("http://localhost:3000/users/1");
      this.user = res.data;
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    deleteUser() {
      if (confirm(`'Are you sure to delete user ${this.user.full_name}?'`)) {
        // this.axios
        //   .delete("http://localhost:3000/users/" + id)
        //   .then((result) => {
        //     console.warn(result);
        //     this.get;
        //   });
        this.user.isActive = false;
      }
    },
  },
};
</script>

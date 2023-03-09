<template>
  <div class="pt-3 mx-auto d-block w-100">
    <router-link :to="{ name: 'UserList' }" class="d-block"
      ><img
        class="img-fluid pt-3 mx-auto d-block w-100"
        src="@/assets/images/logo.jpg"
        alt="logo Co-Well"
    /></router-link>

    <div class="mt-5">
      <div
        class="list-group mt-5 flex-md-column flex-row justify-content-center"
      >
        <router-link
          v-for="content in contents"
          :key="content"
          :to="{ name: 'UserList' }"
          class="list-group-item w-75 d-flex align-items-center flex-nowrap mx-auto d-block border-0 mt-3 rounded-3 sidebar-option"
        >
          <!-- :to="{ name: `${content.name}` }" -->
          <img
            class="sidebar-icon m-2"
            :src="content.icon_src"
            :alt="content.alt"
          />
          <span class="m-3 d-md-block d-none sidebar-text">{{
            content.name
          }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contents: {
        Dashboard: {
          name: "Dashboard",
          icon_src: require("@/assets/svg/home-icon.svg"),
          alt: "Icon home",
        },
        UserList: {
          name: "UserList",
          icon_src: require("@/assets/svg/employees-icon.svg"),
          alt: "Icon employee card",
        },
        Departments: {
          name: "Departments",
          icon_src: require("@/assets/svg/departments-icon.svg"),
          alt: "Icon group",
        },
        Bonuses: {
          name: "Bonuses",
          icon_src: require("@/assets/svg/bonuses-icon.svg"),
          alt: "Icon pig",
        },
      },
    };
  },
};
</script>

<style scoped>
.sidebar-icon {
  width: 1.4rem;
}
.sidebar-option {
  width: 80%;
  height: 5vh;
  color: #5d7285;
  transition: 0.3s;
}

.sidebar-option:hover {
  background-color: #dce0e6;
  color: #09234f;
}
</style>

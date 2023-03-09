<template>
  <div class="full-cointainer">
    <div class="row vh-100 vw-100 m-0 g-0">
      <div class="col-4 col-lg-3 col-xl-2 p-0 shadow-lg pr-3 bg-white rounded">
        <sidebar-component class="" />
      </div>
      <div
        class="col col-8 col-lg-9 col-xl-10 p-0"
        style="background-color: #f2f5fa"
      >
        <div class="text-white p-3">
          <user-detail-header-component class="w-100 bg-white" />
        </div>
        <div class="mt-auto d-flex">
          <div class="bg-secondary">DeleteUser</div>
          <div class="bg-primary text-white">Btn_Back</div>
        </div>
        <div class="mt-3 rounded-4 bg-light" style="background-color: #f2f5fa">
          <navbar-user-detail-component class="w-100 p-2" />
        </div>
        <div class="bg-light my-3 p-3">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from "@/components/SidebarComponent.vue";
import UserDetailHeaderComponent from "@/components/detail_user/UserDetailHeaderComponent.vue";
import NavbarUserDetailComponent from "@/components/detail_user/NavbarUserDetailComponent.vue";
// import GeneralUserInforComponent from "@/components/detail_user/GeneralUserDetailComponent.vue";
export default {
  components: {
    SidebarComponent,
    UserDetailHeaderComponent,
    NavbarUserDetailComponent,
    // GeneralUserInforComponent,
  },
};
</script>

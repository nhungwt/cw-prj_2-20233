const routes = [
  {
    path: "/auth",
    component: () => import("@/layouts/AuthLayout.vue"),
    meta: {
      title: "Auth",
    },
    children: [
      {
        path: "register",
        name: "Register",
        component: () => import("@/views/Auth/RegisterFormView.vue"),
        meta: {
          title: "Register",
        },
      },
      {
        path: "login",
        name: "Login",
        component: () => import("@/views/Auth/LoginFormView.vue"),
        meta: {
          title: "Login",
        },
      },
      // {
      //   path: "login",
      //   name: "Login",
      //   component: () => import("@/views/Auth/CreateUserView.vue"),
      //   meta: {
      //     title: "Login",
      //   },
      // },
    ],
  },
  {
    path: "/users",
    component: () => import("@/layouts/UserLayout.vue"),
    meta: {
      title: "Users",
    },
    children: [
      {
        path: "",
        name: "UserList",
        component: () => import("@/views/Users/EmployeesView.vue"),
        meta: {
          title: "List Users",
        },
      },
      {
        path: "detail-user",
        name: "DetailUser",
        component: () => import("@/views/Users/DetailUserView.vue"),
        meta: {
          title: "User Detail",
        },
        children: [
          {
            path: "",
            name: "General",
            component: () =>
              import("@/components/detail_user/GeneralUserDetailComponent.vue"),
            meta: {
              title: "User General",
            },
          },
          {
            path: "permissions",
            name: "Permissions",
            component: () =>
              import(
                "@/components/detail_user/PermissionUserDetailComponent.vue"
              ),
            meta: {
              title: "User Permissions",
            },
          },
          {
            path: "shifts",
            name: "Shifts",
            component: () =>
              import("@/components/detail_user/GeneralUserDetailComponent.vue"),
            meta: {
              title: "User shifts",
            },
          },
        ],
      },
    ],
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import("@/views/ErrorView.vue"),
    meta: {
      title: "ErrorView",
    },
  },
];

export default routes;

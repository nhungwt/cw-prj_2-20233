<template>
  <div class="col-xl-2 col-md-3 sticky-top shadow-lg bg-white sidebar">
    <img
      class="img-fluid pt-3 mx-auto d-block logo"
      src="../assets/images/logo.jpg"
      alt="logo"
    />

    <div class="list-group mt-5 flex-md-column flex-row sidebar-list">
      <a
        href="#"
        class="list-group-item d-flex align-items-center flex-nowrap mx-auto d-block border-0 mt-3 rounded-3 sidebar-option"
      >
        <img
          class="sidebar-icon m-2"
          src="../assets/svg/home-icon.svg"
          alt=""
        />
        <span class="m-3 d-md-block d-none sidebar-text">Dashboard</span>
      </a>

      <a
        href="#"
        class="list-group-item d-flex align-items-center flex-nowrap mx-auto d-block border-0 mt-3 rounded-3 sidebar-option"
      >
        <img
          class="sidebar-icon m-2"
          src="../assets/svg/employees-icon.svg"
          alt=""
        />
        <span class="m-3 d-md-block d-none sidebar-text">Employees</span>
      </a>

      <a
        href="#"
        class="list-group-item d-flex align-items-center flex-nowrap mx-auto d-block border-0 mt-3 rounded-3 sidebar-option"
      >
        <img
          class="sidebar-icon m-2"
          src="../assets/svg/departments-icon.svg"
          alt=""
        />
        <span class="m-3 d-md-block d-none sidebar-text">Departments</span>
      </a>

      <a
        href="#"
        class="list-group-item d-flex align-items-center flex-nowrap mx-auto d-block border-0 mt-3 rounded-3 sidebar-option"
      >
        <img
          class="sidebar-icon m-2"
          src="../assets/svg/bonuses-icon.svg"
          alt=""
        />
        <span class="m-3 d-md-block d-none sidebar-text">Bonuses</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  height: 100vh;
  font-family: "Poppins", sans-serif;
}

.logo {
  width: 80%;
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

.sidebar-icon {
  width: 1.4rem;
}

@media (min-width: 1200px) and (max-width: 1400px) {
  .sidebar {
    font-size: 0.85rem;
  }
}

@media (min-width: 768px) and (max-width: 899px) {
  .sidebar {
    font-size: 0.8rem;
  }
}

@media only screen and (max-width: 767px) {
  .sidebar {
    height: 100px;
    display: flex;
  }

  .logo {
    width: auto;
  }

  .sidebar-list {
    margin: auto !important;
  }
}
</style>

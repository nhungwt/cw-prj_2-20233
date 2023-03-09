<template>
  <div>
    <h5 class="header_center color-dark-blue fw-bold d-grid align-items-center">
      Or
    </h5>
    <a href="#" class="social-network-link color-dark-blue d-inline-block">
      <div>
        <img
          src="@/assets/svg/facebook_logo.svg"
          alt="facebook logo"
          class="d-lg-inline-block d-sm-inline-block"
        />
        <span class="d-inline-block">Continue with Facebook</span>
      </div>
    </a>

    <a href="#" class="social-network-link color-dark-blue d-inline-block">
      <div>
        <img
          class="d-inline-block"
          src="@/assets/svg/google_logo.svg"
          alt="google logo"
        />
        <span class="d-inline-block">Continue with Google</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style>
.color-dark-blue {
  color: #0e4a67;
}
.header_center {
  font-size: larger;
  grid-template-columns: 1fr max-content 1fr;
  grid-column-gap: 1.2rem;
  margin-block-end: 1.25rem;
}

.header_center::before,
.header_center::after {
  content: "";
  display: block;
  height: 0.5px;
  background-color: #0e4a67;
}

.social-network-link {
  background-color: #e3f1fe;
  padding-block: 0.75rem;
  border: solid 1px #207198;
  border-radius: 10px;
  margin-block-end: 1.5rem;
  text-decoration: none;
  width: 100%;
  font-weight: bold;
}

.social-network-link > div {
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  position: relative;
  height: 1.8rem;
}

.social-network-link > div > span {
  display: inline-block;
  margin-inline-start: 1rem;
}

.social-network-link > div > span {
  transition: color 0.1s;
  transition: background-color 0.4s;
}

.social-network-link:hover {
  color: #0e4a67;
  background-color: #b5dcee;
}
</style>

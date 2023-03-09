<template>
  <div class="container row g-0 mx-auto main-div">
    <div class="col d-lg-flex d-none align-items-center">
      <img
        class="img-fluid w-100 mx-auto d-block"
        src="../../assets/images/logo.jpg"
        alt="logo"
      />
    </div>

    <div class="col">
      <p class="h1 fw-bolder text-sm-start text-center mt-5 title">
        Create Your Account
      </p>

      <p class="text-sm-start text-center" style="color: #37677e">
        Already have an account?
        <a class="text-decoration-none ms-1" style="color: #fe8d4b" href="#">
          Login
        </a>
      </p>

      <Form
        @submit="onSubmit"
        class="mt-4"
        style="color: #207198"
        :validation-schema="schema"
        v-slot="{ errors }"
      >
        <div class="form-floating mb-3">
          <Field
            name="firstName"
            type="text"
            class="form-control user-input"
            id="first-name-input"
            placeholder="Your first name"
            :class="{ 'is-invalid': errors.firstName }"
          />
          <label for="first-name-input">First name</label>
          <div class="invalid-feedback">
            {{ errors.firstName }}
          </div>
        </div>

        <div class="form-floating mb-3">
          <Field
            name="lastName"
            type="text"
            class="form-control user-input"
            id="last-name-input"
            placeholder="Your last name"
            :class="{ 'is-invalid': errors.lastName }"
          />
          <label for="last-name-input">Last name</label>
          <div class="invalid-feedback">
            {{ errors.lastName }}
          </div>
        </div>

        <div class="form-floating mb-3">
          <Field
            name="email"
            type="email"
            class="form-control user-input"
            id="email-input"
            placeholder="Your email"
            :class="{ 'is-invalid': errors.email }"
          />
          <label for="email-input">Email</label>
          <div class="invalid-feedback">
            {{ errors.email }}
          </div>
        </div>

        <div class="form-floating mb-3">
          <Field
            name="password"
            type="password"
            class="form-control user-input"
            id="password-input"
            placeholder="Your password"
            :class="{ 'is-invalid': errors.password }"
          />
          <label for="password-input">Password</label>
          <font-awesome-icon
            class="password-icon"
            icon="fa-solid fa-eye-slash"
            @click="revealPassword(1)"
          />
          <div class="invalid-feedback">
            {{ errors.password }}
          </div>
        </div>

        <div class="form-floating mb-3">
          <Field
            name="confirmPassword"
            type="password"
            class="form-control user-input"
            id="confirm-password-input"
            placeholder="Your confirm password"
            :class="{ 'is-invalid': errors.confirmPassword }"
          />
          <label for="confirm-password-input">Confirm Password</label>
          <font-awesome-icon
            class="password-icon"
            icon="fa-solid fa-eye-slash"
            @click="revealPassword(2)"
          />
          <div class="invalid-feedback">
            {{ errors.confirmPassword }}
          </div>
        </div>

        <button
          class="btn border-0 w-100 register-button rounded text-white mt-4 fw-bold"
          type="submit"
        >
          Register
        </button>
      </Form>

      <div class="d-flex align-items-center justify-content-center mt-4">
        <div class="line w-25"></div>
        <p class="fs-4 fw-bold mx-5">Or</p>
        <div class="line w-25"></div>
      </div>

      <div
        class="d-flex rounded align-items-center justify-content-center mt-4 other-auth"
      >
        <img
          class="other-auth-icon mx-4"
          src="../../assets/svg/icon-facebook.svg"
          alt=""
        />
        <p class="m-0">Continue with Facebook</p>
      </div>

      <div
        class="d-flex rounded align-items-center justify-content-center mt-4 other-auth"
      >
        <img
          class="other-auth-icon mx-4"
          src="../../assets/svg/icon-google.svg"
          alt=""
        />
        <p class="m-0">Continue with Google</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";

export default {
  data() {
    const schema = Yup.object().shape({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password must match")
        .required("Confirm password is required"),
    });

    return {
      schema,
    };
  },
  methods: {
    revealPassword(fieldNumber) {
      //1 mean password and 2 mean confirm password
      let inputField;
      if (fieldNumber == 1) {
        inputField = document.getElementById("password-input");
      } else {
        inputField = document.getElementById("confirm-password-input");
      }

      if (inputField.type == "password") {
        inputField.type = "text";
      } else {
        inputField.type = "password";
      }
    },
    onSubmit(values) {
      // display form values on success
      alert("SUCCESS!! :-)\n\n" + JSON.stringify(values, null, 4));
    },
  },
  components: { Form, Field },
};
</script>

<style scoped>
.main-div {
  font-family: "Source Sans Pro", sans-serif;
  height: 100vh;
}

.title {
  color: #0e4a67;
}

.user-input {
  border-width: 2px;
  margin-top: 1.3rem;
}

.user-input:hover,
.user-input:focus {
  border-color: #6fcf97;
  box-shadow: 0 0 0 0.25rem rgba(111, 207, 151, 0.5);
}

.password-icon {
  cursor: pointer;
  float: right;
  position: relative;
  left: -40px;
  color: #86c9f6;
  top: -2.3rem;
}

.register-button {
  height: 43px;
  font-size: 1.2rem;
  background: linear-gradient(
      90deg,
      var(--c1, #f6d365),
      var(--c2, #fda085) 51%,
      var(--c1, #f6d365)
    )
    var(--x, 0) / 200%;
  transition: 0.3s;
}

.register-button:hover {
  --x: 100%;
}

.line {
  background-color: #0e4a67;
  height: 2px;
}

.other-auth {
  background-color: #e3f1fe;
  border: 2px solid #207198;
  height: 3.5rem;
  color: #207198;
  cursor: pointer;
  transition: 0.3s;
}

.other-auth:hover {
  background-color: #207198;
  color: white;
}

.other-auth-icon {
  width: 2.4rem;
}
</style>

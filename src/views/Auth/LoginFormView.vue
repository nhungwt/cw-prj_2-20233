<template>
  <div class="full-container">
    <div class="row vh-100 vw-100 g-0">
      <div
        class="col d-lg-flex d-none justify-content-center align-items-center"
      >
        <logo-side
          class="h-75 w-lg-75 w-50 d-flex justify-content-center align-items-center"
        />
      </div>
      <div
        class="col d-flex justify-content-center justify-content-lg-start align-items-center"
      >
        <div class="h-75 w-75 mw-50 d-flex flex-column justify-content-center">
          <h2 class="title font-family fw-bold">{{ form_title }}</h2>
          <p class="another_choice mb-4">
            Don't have an account?
            <router-link :to="{ name: 'Register' }" title="Create account">
              Create now
            </router-link>
          </p>
          <Form
            class="full-container"
            @submit="onSubmit"
            :validation-schema="simpleSchema"
            v-slot="{ errors }"
          >
            <form-field-component
              type="email"
              name="email"
              label="Email"
              placeholder=""
              :error="errors.email"
            />

            <div class="mt-3">
              <label for="password" class="form-label m-0">Password</label>
              <div class="input-group mb-3">
                <Field
                  name="password"
                  :type="showPassword ? 'text' : 'password'"
                  id="password"
                  :class="`form-control shadow-none p-2 ${
                    errors.password
                      ? 'is-invalid border-danger'
                      : 'border-secondary'
                  }`"
                />
                <button
                  @click="togglePassword"
                  class="btn btn-outline-secondary"
                  type="button"
                >
                  <font-awesome-icon
                    :icon="`fa-solid ${
                      showPassword ? 'fa-eye-slash' : 'fa-eye'
                    }`"
                  />
                </button>
              </div>
              <div v-if="!!errors.password" class="invalid-feedback d-block">
                {{ errors.password }}
              </div>
            </div>

            <button
              type="submit"
              class="btn btn-customs text-white mt-4 fw-bold w-100 border-0 fs-6"
            >
              Login
            </button>
            <p class="another_choice mt-2 mb-3">
              <router-link :to="{ name: 'Login' }" style="color: #0e4a67"
                >Forgot password?</router-link
              >
            </p>
          </Form>
          <social-auth />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field } from "vee-validate";
import { string, object } from "yup";
import axios from "axios";
import FormFieldComponent from "@/components/FormFieldComponent.vue";
import SocialAuth from "@/components/SocialAuthComponent.vue";
import LogoSide from "@/components/LogoSideComponent.vue";

export default {
  components: { Form, Field, FormFieldComponent, SocialAuth, LogoSide },
  data() {
    const schema = object({
      email: string().required().email(),
      password: string().required().min(8),
    });

    return {
      form_title: "Login Form",
      showPassword: false,
      simpleSchema: schema,
    };
  },
  methods: {
    onSubmit(data) {
      console.log(data);
    },
    isRequired(value) {
      if (!value) {
        return "This field is required";
      }
      return true;
    },
    validateEmail(value) {
      if (!value) {
        return "This field is required";
      }
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "This field must be a valid email";
      }
      return true;
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
  },
  async mounted() {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          email: this.email,
          password: this.password,
        }
      );

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style>
.title {
  font-size: 2.5rem;
  color: #0e4a67;
}
.font-family {
  font-family: "Source Sans Pro", monospace;
}
.another_choice {
  color: #207198;
  font-size: smaller;
}

.another_choice > a {
  color: rgb(244, 158, 0);
  transition: all 500ms;
  text-decoration: none;
}

.btn-customs {
  background: linear-gradient(90deg, #ee5757, #fb724c);
  height: 3rem;
  transition: color 0.2s;
  letter-spacing: 1px;
}

.btn-customs:hover {
  background: linear-gradient(90deg, #df2727, #e6795c);
}
</style>

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
          <p class="another_choice mb-3">
            Already have an account?
            <router-link :to="{ name: 'Login' }" title="Login to account">
              Login
            </router-link>
          </p>
          <Form
            class="full-container"
            @submit="onSubmit"
            :validation-schema="simpleSchema"
            v-slot="{ errors }"
          >
            <div v-for="input in inputs" :key="input.name" class="mt-1">
              <form-field-component
                :type="input.type"
                :name="input.name"
                :label="input.label"
                :error="errors?.[`${input.name}`]"
              >
              </form-field-component>
            </div>

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

            <div class="mt-3">
              <label for="confirm_password" class="form-label m-0"
                >Confirm Password</label
              >
              <div class="input-group mb-3">
                <Field
                  name="confirm_password"
                  :type="showConfirmPassword ? 'text' : 'password'"
                  id="confirm_password"
                  :class="`form-control shadow-none p-2 ${
                    errors.confirm_password
                      ? 'is-invalid border-danger'
                      : 'border-secondary'
                  }`"
                />
                <button
                  @click="toggleConfirmPassword"
                  class="btn btn-outline-secondary"
                  type="button"
                >
                  <font-awesome-icon
                    :icon="`fa-solid ${
                      showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'
                    }`"
                  />
                </button>
              </div>
              <div
                v-if="!!errors.confirm_password"
                class="invalid-feedback d-block"
              >
                {{ errors.confirm_password }}
              </div>
            </div>
            <button
              type="submit"
              class="btn text-white btn-customs font-family mt-4 fw-bold w-100 border-0 fs-6"
            >
              Register
            </button>
          </Form>
          <social-auth class="mt-4" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field } from "vee-validate";
import { string, object, ref } from "yup";
import axios from "axios";
import FormFieldComponent from "@/components/FormFieldComponent.vue";
import SocialAuth from "@/components/SocialAuthComponent.vue";
import LogoSide from "@/components/LogoSideComponent.vue";

export default {
  components: { Form, Field, FormFieldComponent, SocialAuth, LogoSide },
  data() {
    const nameRegExp = /^[^\s]*$/;
    const schema = object({
      first_name: string()
        .required()
        .matches(nameRegExp, "Can not contain space"),
      last_name: string()
        .required()
        .matches(nameRegExp, "Can not contain space"),
      email: string().required().email(),
      password: string().required().min(8),
      confirm_password: string()
        .required()
        .oneOf([ref("password"), null], "Passwords must match"),
    });

    return {
      form_title: "Create Your Account",
      showPassword: false,
      showConfirmPassword: false,
      inputs: [
        {
          label: "First name",
          type: "text",
          name: "first_name",
          placeholder: "Enter Your First Name",
          rule: "isRequired",
        },
        {
          label: "Last Name",
          type: "text",
          name: "last_name",
          placeholder: "Enter Your Last Name",
          rule: "isRequired",
        },
        {
          label: "Email",
          type: "email",
          name: "email",
          placeholder: "Enter Email",
          rule: "validateEmail",
        },
      ],
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
    toggleConfirmPassword() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },
  },
  async mounted() {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
          confirm_password: this.confirm_password,
        }
      );

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style scoped>
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
  cursor: pointer;
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

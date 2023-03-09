<template>
  <Field
    :name="name"
    :id="id || name"
    :placeholder="placeholder"
    :disabled="disabled"
    :rule="rule"
    v-slot="{ field }"
  >
    <label :for="id || name" class="form-label mb-0">{{ label }}</label>
    <input
      v-bind="field"
      :type="type"
      :class="`form-control text-black p-2 mb-2 w-100 shadow-none  ${
        !!error ? 'is-invalid border-danger' : 'border-secondary'
      }`"
      :id="id || name"
      :placeholder="placeholder"
    />
    <div v-if="!!error" class="invalid-feedback d-block">{{ error }}</div>
  </Field>
</template>

<script>
import { Field } from "vee-validate";

export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
    error: {
      type: String,
      required: false,
      default: "",
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    rule: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  components: {
    Field,
  },
};
</script>
<style>
.form-label {
  color: #207198;
  font-size: 0.9rem;
}
</style>

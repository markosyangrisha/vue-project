<script setup lang="ts">
import { registrationRules, registrationState } from "@/utilities/form-validate/form-utilities.js";
import useVuelidate from "@vuelidate/core";
import Button from "primevue/button";
import InputText from "primevue/inputtext";

const v$ = useVuelidate(registrationRules, registrationState);

const handleSubmit = async () => {
  const result = await v$.value.$validate();
  v$.value.$touch();

  if (!result) {
    console.log("InValid");
    return;
  }
  console.log("Valid ");
};
</script>

<template>
  <div>
    <h2 class="mb-5 text-2xl font-mono w-full">Registration Form</h2>
    <form @submit.prevent="handleSubmit" class="form">
      <div class="mb-4">
        <label for="firstname" class="form-label">First Name</label>
        <InputText
          v-model="registrationState.firstname"
          id="firstname"
          class="form-input"
        />
        <p
          v-for="error in v$.firstname?.$errors"
          class="form-error"
          :key="error.$uid"
        >
          {{ error.$message }}
        </p>
      </div>
      <div class="mb-4">
        <label for="lastname" class="form-label">Last Name</label>
        <InputText
          v-model="registrationState.lastname"
          id="lastname"
          class="form-input"

        />
        <p
          v-for="error in v$.lastname.$errors"
          class="form-error"
          :key="error.$uid"
        >
          {{ error.$message }}
        </p>
      </div>
      <div class="mb-4">
        <label for="email" class="form-label">Email</label>
        <InputText
          id="email"
          v-model="registrationState.email"
          type="email"
          class="form-input"
        />
        <p
          v-for="error in v$.email.$errors"
          class="form-error"
          :key="error.$uid"
        >
          {{ error.$message }}
        </p>
      </div>
      <div class="mb-4">
        <label for="password" class="form-label">Password</label>
        <InputText
          id="password"
          type="password"
          v-model="registrationState.password"
          class="form-input"
        />
        <p
          v-for="error in v$.password.$errors"
          class="form-error"
          :key="error.$uid"
        >
          {{ error.$message }}
        </p>
      </div>
      <div class="mb-4">
        <label for="password" class="form-label">Confirm Password</label>
        <InputText
          id="confirmPassword"
          type="password"
          v-model="registrationState.confirmPassword"
          class="form-input"
        />
        <p
          v-for="error in v$.confirmPassword.$errors"
          class="form-error"
          :key="error.$uid"
        >
          {{ error.$message }}
        </p>
      </div>
      <Button type="submit" label="Sign Up" text />
    </form>
  </div>
</template>

<style scoped>
@import "@/assets/form-styles.css";
</style>

<script setup lang="ts">
import { loginRules, loginState } from "@/utilities/form-validate/form-utilities";
import useVuelidate from "@vuelidate/core";
import Button from "primevue/button";
import InputText from "primevue/inputtext";

const v$ = useVuelidate(loginRules, loginState);

const handleSubmit = async () => {
  const result = await v$.value.$validate();
  v$.value.$touch();

  if (!result) {
    console.log("InValid");
    return;
  }
  console.log("Valid");
};
</script>

<template>
  <div class="">
    <h2 class="mb-5 text-2xl font-mono w-full">Login Form</h2>
    <form @submit.prevent="handleSubmit" class="form">
      <div class="mb-4">
        <label for="email" class="form-label">Email</label>
        <InputText id="email" v-model="loginState.email" type="email" class="form-input" />
        <p v-for="error in v$.email.$errors" class="form-error" :key="error.$uid">{{ error.$message }}</p>
      </div>
      <div class="mb-4">
        <label for="password" class="form-label">Password</label>
        <InputText id="password" type="password" v-model="loginState.password" class="form-input" />
        <p v-for="error in v$.password.$errors" class="form-error" :key="error.$uid">{{ error.$message }}</p>
      </div>
      <Button type="submit" label="Login" text />
    </form>
  </div>
</template>

<style scoped>
@import '@/assets/form-styles.css';
</style>

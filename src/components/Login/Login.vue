<script setup lang="ts">
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import useVuelidate from '@vuelidate/core';
import {loginRules, loginState} from '../../utilities/form-utilities.ts'

const v$ = useVuelidate(loginRules, loginState);

const handleSubmit = async () => {
  const result = await v$.value.$validate();
  v$.value.$touch()

  if (!result) {
    console.log('InValid')
    return;
  }
  console.log('Valid')
}

</script>

<template>
  <div class="">
    <form @submit.prevent="handleSubmit" class="form">
      <div class="mb-4">
        <label for="email" class="form-label">Email</label>
        <InputText id="email" v-model="loginState.email" type="email" class="form-input" />
        <div v-if="v$.email.$error">
          <span v-for="error in v$.email.$errors" class="form-error" :key="error.$uid">{{error.$message}}</span>
        </div>
      </div>
      <div class="mb-4">
        <label for="password" class="form-label">Password</label>
        <InputText id="password" type="password" v-model="loginState.password" class="form-input  " />
        <div v-if="v$.password.$error">
          <span v-for="error in v$.password.$errors" class="form-error" :key="error.$uid">{{error.$message}}</span>
        </div>
      </div>
      <Button type="submit" label="Login" text />
    </form>
  </div>
</template>


<style scoped>
@import "../../assets/form-styles.css";
</style>
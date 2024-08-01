<script setup lang="ts">
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import useVuelidate from '@vuelidate/core';
import {registrationRules, registrationState} from '../../utilities/form-utilities.ts'
import {ref} from "vue";

const v$ = useVuelidate(registrationRules, registrationState);

let showError = ref<boolean>(false);

const handleSubmit = async () => {
  const result = await v$.value.$validate();
  v$.value.$touch()

  showError = true;

  if (!result) {
    console.log('InValid')
    return;
  }
  console.log('Valid ')
}

</script>

<template>
  <div>
    <form @submit.prevent="handleSubmit" class="form">
      <div class="mb-4">
        <label for="firstname" class="form-label">First Name</label>
        <InputText v-model="registrationState.firstname" id="firstname" class="form-input" />
        <div v-if="v$.firstname.$error">
          <span v-for="error in v$.firstname?.$errors" class="form-error" :key="error.$uid">{{error.$message}}</span>
        </div>
      </div>
      <div class="mb-4">
        <label for="lastname" class="form-label">Last Name</label>
        <InputText v-model="registrationState.lastname" id="lastname" class="form-input" />
        <div v-if="v$.lastname.$error">
          <span v-for="error in v$.lastname.$errors" class="form-error" :key="error.$uid">{{error.$message}}</span>
        </div>
      </div>
      <div class="mb-4">
        <label for="email" class="form-label">Email</label>
        <InputText id="email" v-model="registrationState.email" type="email" class="form-input" />
        <div v-if="v$.email?.$error">
          <span v-for="error in v$.email.$errors" class="form-error" :key="error.$uid">{{error.$message}}</span>
        </div>
      </div>
      <div class="mb-4">
        <label for="password" class="form-label">Password</label>
        <InputText id="password" type="password" v-model="registrationState.password" class="form-input  " />
            <div v-if="v$.password.$error">
              <span v-for="error in v$.password.$errors" class="form-error" :key="error.$uid">{{error.$message}}</span>
            </div>
      </div>
      <div class="mb-4">
        <label for="password" class="form-label">Confirm Password</label>
        <InputText id="confirmPassword" type="password" v-model="registrationState.confirmPassword" class="form-input" />
        <div v-if="showError && v$.confirmPassword.$error">
          <span v-for="error in v$.confirmPassword.$errors" class="form-error" :key="error.$uid">{{error.$message}}</span>
        </div>
      </div>
      <Button type="submit" label="Sign Up" text />
    </form>
  </div>
</template>

<style scoped>
@import "../../assets/form-styles.css";
</style>


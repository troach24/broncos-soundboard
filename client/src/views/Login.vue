<template>
  <v-container fluid>
    <v-flex xs-12 class="login-container">
      <v-form
        id="login-form"
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="email"
          :emailRules="emailRules"
          label="Email"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          :append-icon="showPassword ? 'visibility_off' : 'visibility'"
          :passwordRules="[passwordRules.required, passwordRules.min]"
          :type="showPassword ? 'text' : 'password'"
          name="input-10-2"
          label="Password"
          hint="At least 8 characters"
          class="input-group--focused"
          @click:append="showPassword = !showPassword"
        ></v-text-field>
        <v-btn
          id="login-button"
          color="#FB4F14"
          :disabled="!valid"
          @click.prevent="submit"
        >
          Login
        </v-btn>
      </v-form>
    </v-flex>
  </v-container>
</template>

<script>
import firebase from 'firebase';

export default {
  props: [
    user
  ],
  data: () => ({
    valid: true,
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    showPassword: false,
    password: '',
    passwordRules: {
      required: value => !!value || 'Required.',
      min: v => (v.length > 0 && v.length >= 8) || 'Min 8 characters',
      emailMatch: () => ('The email and password you entered don\'t match')
    }
  }),
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(user => {
          console.log('authorized')
          this.$router.push('admin')
        })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
      }
    },
    clear () {
      this.$refs.form.reset()
    },
  }
}
</script>

<style scoped>
  .login-container {
    display: flex;
    justify-content: center;
  }
  #login-form {
    min-width: 300px;
  }
  #login-button {
    margin: 0;
  }
</style>

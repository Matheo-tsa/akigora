<template>
  <div>
    <v-app>
      <v-row>
        <v-col class="form-container">
          <span>Connectez vous à votre compte avec vos identifiants</span>
          <v-form>
            <v-text-field label="Email" type="email" solo dense></v-text-field>
            <v-text-field
              label="Mot de passe"
              type="password"
              solo
              dense
            ></v-text-field>
            <v-checkbox label="Se souvenir de moi"></v-checkbox>
            <div class="submit-container">
              <v-btn color="success"> Connexion </v-btn>
              <a href="">Mot de passe oublié ?</a>
            </div>
          </v-form>
        </v-col>
      </v-row>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'Index',
  layout: 'auth/auth',
}
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.submit-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

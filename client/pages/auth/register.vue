<template>
  <div>
    <v-app>
      <v-row>
        <v-col class="form-container">
          <span class="mb-4">S'inscrire</span>
          <v-form>
            <v-row>
              <v-col>
                <v-text-field label="Civilité" solo dense></v-text-field>
                <v-text-field label="Nom" solo dense></v-text-field>
                <v-text-field
                  label="Numéro de téléphone"
                  solo
                  dense
                ></v-text-field>
                <v-text-field
                  label="Confirmation mot de passe"
                  solo
                  dense
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field label="Prénom" solo dense></v-text-field>
                <v-text-field label="Adresse email" solo dense></v-text-field>
                <v-text-field label="Mot de passe" solo dense></v-text-field>
                <v-text-field
                  label="Ou avez-vous entendu parler Akigora"
                  solo
                  dense
                ></v-text-field>
              </v-col>
            </v-row>

            <v-checkbox
              label="J’accepte les conditions générales d’utilisation"
            ></v-checkbox>
            <v-checkbox
              label="J’accepte de recevoir des mails de la part d’Akigora (newsletters,  informations)"
            ></v-checkbox>
            <div class="submit-container">
              <v-btn class="mb-4" color="success"> S'inscrire </v-btn>
            </div>
          </v-form>
        </v-col>
      </v-row>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'Register',
  layout: 'auth/auth',
}
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.submit-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

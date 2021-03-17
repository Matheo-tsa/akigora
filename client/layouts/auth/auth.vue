<template>
  <div>
    <v-app>
      <v-row>
        <v-col>
          <img
            class="logo"
            src="@/assets/logo-akigora.png"
            alt="akigora-logo"
          />
          <v-item-group>
            <v-row align="center" justify="space-between" class="mb-6">
              <v-item>
                <v-btn fab>
                  <v-icon color="#2869E5">mdi-facebook</v-icon>
                </v-btn>
              </v-item>
              <v-item>
                <v-btn fab>
                  <v-icon color="#4ECAEF">mdi-twitter</v-icon>
                </v-btn>
              </v-item>
              <v-item>
                <v-btn fab>
                  <v-icon color="#3377BC">mdi-linkedin</v-icon>
                </v-btn>
              </v-item>
              <v-item>
                <v-btn fab>
                  <v-icon color="#E21E1E">mdi-youtube</v-icon>
                </v-btn>
              </v-item>
            </v-row>
          </v-item-group>
          <v-row align="center" justify="center">
            <div class="register">
              <span>Vous n'avez pas de compte ?</span>
              <v-btn>S'enregistrer</v-btn>
            </div>
          </v-row>
        </v-col>

        <v-col>
          <nuxt />
        </v-col>
      </v-row>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'Auth',
}
</script>

<style scoped>
#app {
  background: url('../../assets/backgroundimg.jpg') no-repeat fixed !important;
  background-size: cover;
}
.logo {
  display: flex;
  margin: 0 auto;
}

.register {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

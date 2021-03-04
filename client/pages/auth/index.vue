<template>
  <div>
    <v-app>
      <v-container fluid>
        <v-card>
          <v-form v-model="valid">
            <v-container>
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="password"
                    label="Mot de passe"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-btn color="success" class="mr-4" @click="validate">
                Validate
              </v-btn>
            </v-container>
          </v-form>
        </v-card>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'Index',
  layout: 'auth/auth',
}
</script>

<style scoped></style>

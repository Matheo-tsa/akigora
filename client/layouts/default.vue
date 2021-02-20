<template>
  <div>
    <v-card height="60" width="256">
      <v-navigation-drawer fixed app permanent>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title"> Application </v-list-item-title>
            <v-list-item-subtitle> subtext </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>

    <div>
      <v-app-bar fixed flat color="#f4f5f7">
        <v-spacer> </v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-menu left bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-bell-outline</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="n in 5" :key="n" @click="() => {}">
              <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-badge
          bordered
          bottom
          color="deep-purple"
          dot
          offset-x="10"
          offset-y="10"
        >
          <v-avatar size="40">
            <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
          </v-avatar>
        </v-badge>

        <v-title> Bonjour, [Nom de l'utilisateur]</v-title>
      </v-app-bar>
    </div>
    <v-app>
      <v-content>
        <nuxt />
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Photos', icon: 'mdi-image' },
        { title: 'About', icon: 'mdi-help-box' },
      ],
      right: null,
    }
  },
}
</script>

<style scoped>
.v-application {
  background-color: #f4f5f7;
}
</style>

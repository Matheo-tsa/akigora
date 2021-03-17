<template>
  <div>
    <v-app>
      <v-card height="60" width="256">
        <v-navigation-drawer fixed app permanent>
          <img src="@/assets/logo-akigora.png" alt="akigora-logo" />

          <v-list dense nav>
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link
              :to="item.link"
            >
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

          <span> Bonjour, [Nom de l'utilisateur]</span>
        </v-app-bar>
      </div>
      <div>
        <v-content>
          <nuxt />
        </v-content>
      </div>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', link: '/' },
        { title: 'Messages', icon: 'mdi-message', link: '/messages' },
        {
          title: 'Mes experts',
          icon: 'mdi-account-group',
          link: '/experts',
        },
        { title: 'Agenda', icon: 'mdi-calendar', link: '/agenda' },
        {
          title: 'Annonces',
          icon: 'mdi-text-box-check-outline',
          link: '/annonces',
        },
        {
          title: 'Factures',
          icon: 'mdi-file-table',
          link: '/factures',
        },
        {
          title: 'Mes statistiques',
          icon: 'mdi-chart-box',
          link: '/statistiques',
        },
        {
          title: 'Recherche intervenants',
          icon: 'mdi-magnify',
          link: '/recherche',
        },
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

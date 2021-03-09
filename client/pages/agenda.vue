<template>
  <div>
    <v-container>
      <v-card>
        <v-row>
          <v-col class="calendar-container">
            <v-card-title>
              <v-icon>mdi-calendar</v-icon>
              Février 2021
              <v-spacer></v-spacer>
              <v-btn icon><v-icon>mdi-chevron-left</v-icon></v-btn>
              <v-btn icon><v-icon>mdi-chevron-right</v-icon></v-btn>
            </v-card-title>
          </v-col>
          <v-col>
            <v-card-title>
              Mon agenda
              <v-spacer></v-spacer>
              <v-btn elevation="1" small fab><v-icon>mdi-plus</v-icon></v-btn>
            </v-card-title>
          </v-col>
          <v-col class="note-container">
            <v-card-title> Notes récentes </v-card-title>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Agenda',
}
</script>

<style scoped>
.note-container {
  background-color: #e4e7f0;
}
.calendar-container {
  background-color: #eaf0ff;
}
</style>

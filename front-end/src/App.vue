<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title class="white--text text-uppercase">
        <span class="font-weight-light">ticket</span>
        <span class="font-weight-black">system</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-hover v-slot:default="{ hover }" close-delay="200">
        <v-btn icon href="https://github.com/wyattlefevre/ticket-system">
          <v-icon size="2em" :color="hover ? 'accent' : 'white'">mdi-github</v-icon>
        </v-btn>
      </v-hover>
      <v-hover v-slot:default="{ hover }" close-delay="200">
        <v-btn icon href="https://wyattlefevre.com/">
          <v-icon size="2em" :color="hover ? 'accent' : 'white'">mdi-home</v-icon>
        </v-btn>
      </v-hover>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer color="secondary" dark>
      <v-col class="text-center">
        <div class="font-weight-bold text-h5">Wyatt LeFevre</div>
        <v-hover v-slot:default="{ hover }" close-delay="200">
          <v-btn icon href="https://wyattlefevre.com/">
            <v-icon size="2em" :color="hover ? 'accent' : 'white'">mdi-home</v-icon>
          </v-btn>
        </v-hover>
        <v-hover v-slot:default="{ hover }" close-delay="200">
          <v-btn icon href="https://github.com/wyattlefevre/">
            <v-icon size="2em" :color="hover ? 'accent' : 'white'">mdi-github</v-icon>
          </v-btn>
        </v-hover>
        <v-hover v-slot:default="{ hover }" close-delay="200">
          <v-btn icon href="https://www.linkedin.com/in/wyatt-lefevre-a22b261a6/">
            <v-icon size="2em" :color="hover ? 'accent' : 'white'">mdi-linkedin</v-icon>
          </v-btn>
        </v-hover>
        <v-hover v-slot:default="{ hover }" close-delay="200">
          <v-btn icon href="mailto:wyattlefevre@gmail.com">
            <v-icon size="2em" :color="hover ? 'accent' : 'white'">mdi-email</v-icon>
          </v-btn>
        </v-hover>
      </v-col>
    </v-footer>
  </v-app>
</template>

<style>
/* green yellow red orange */
/* 96ceb4 ffeead d9534f ffad60 */
/* body {
  margin: 0px;
  background: #F7F5F7;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


.brand {
  display: flex;
  background: #96ceb4;
  padding: 10px 100px;
}

.brand h1 {
  display: inline-block;
  background: #DB9964;
  padding: 10px;
  border-radius: 30px;
  font-size: 14px;
}

.brand h2 {
  font-size: 12px;
  padding: 10px;
  margin-top: 12px;
}

.main {
  padding: 20px 100px;
}

.pure-button {
  font-size: 10px;
}

h1 {
  font-size: 16px;
}

h2 {
  font-size: 12px;
}

.space-right {
  margin-right: 10px;
}

a {
  color: #ffad60;
}

.pure-button-primary {
  background-color: #ffad60;
  color: #333;
  border-radius: 30px;
} */
</style>

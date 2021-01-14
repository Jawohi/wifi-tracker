<template>
    <v-toolbar app color="blue darken-4" dark>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>{{appTitle}}</v-toolbar-title>
        <v-btn flat>Tracker</v-btn>
        <v-btn flat>About</v-btn>
    </v-toolbar>
</template>

<script>
export default {
    name: 'AppNavigation',
    data(){
        return {
            appTitle: 'Wifi Tracker'
        };
    }

};
</script>

<style scoped>
</style>

<template>
  <div id="app">
    <!-- Lorsqu'un étudiant est ajouté, fetchStudents sera appelé grâce à l'événement @studentAdded -->
    <Form @studentAdded="fetchStudents" />
    <!-- Référence ajoutée à StudentsList pour pouvoir appeler directement fetchStudents dessus -->
    <StudentsList ref="studentsList" />
  </div>
</template>

<script>
import StudentsList from './components/StudentsList.vue';
import Form from './components/Form.vue';

export default {
  name: 'App',
  components: {
    StudentsList,
    Form // Ajoute Form à la liste des composants
  },
  methods: {
    fetchStudents() {
      // Appelle fetchStudents sur StudentsList en utilisant la référence 'studentsList'
      if (this.$refs.studentsList) {
        this.$refs.studentsList.fetchStudents();
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

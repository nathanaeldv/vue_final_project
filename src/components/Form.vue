<template>
  <form @submit.prevent="addStudent">
    <input v-model="name" type="text" placeholder="Prénom">
    <input v-model="grade" type="number" placeholder="Note">
    <button type="submit">Ajouter</button>
  </form>
</template>

<script>
export default {
data() {
  return {
    name: '',
    grade: null
  };
},
methods: {
  async addStudent() {
    try {
      await this.$axios.post('/students', { name: this.name, grade: this.grade });
      this.name = '';
      this.grade = null;
      this.$emit('studentAdded');
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'étudiant:', error);
    }
  }
}
};
</script>

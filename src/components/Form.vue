<template>
    <form @submit.prevent="addStudent">
      <input v-model="prenom" type="text" placeholder="Prénom">
      <input v-model="note" type="number" placeholder="Note">
      <button type="submit">Ajouter</button>
    </form>
</template>

<script>
export default {
  data() {
    return {
      prenom: '', // Utilise 'prenom' au lieu de 'name'
      note: null // Utilise 'note' au lieu de 'grade'
    };
  },
  methods: {
    async addStudent() {
      try {
        await this.$axios.post('/students', { prenom: this.prenom, note: this.note });
        this.prenom = ''; // Réinitialise 'prenom' au lieu de 'name'
        this.note = null; // Réinitialise 'note' au lieu de 'grade'
        this.$emit('studentAdded');
      } catch (error) {
        console.error('Erreur lors de l\'ajout de l\'étudiant:', error);
      }
    }
  }
};
</script>

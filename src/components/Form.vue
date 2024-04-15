<template>
  <form @submit.prevent="addStudent" class="max-w-md mx-auto mt-10 space-y-6">
    <input v-model="name" type="text" placeholder="Prénom" class="input input-bordered w-full dark:bg-gray-800 dark:text-white">
    <input v-model="grade" type="number" placeholder="Note" class="input input-bordered w-full dark:bg-gray-800 dark:text-white">
    <button type="submit" class="btn btn-primary w-full dark:bg-blue-700 dark:border-blue-700">Ajouter</button>
  </form>
</template>


<script>
export default {
  data() {
    return {
      name: '',
      grade: null
    }
  },
  methods: {
    async addStudent() {
      try {
        await this.$axios.post('/students', {
          name: this.name,
          grade: this.grade
        })
        this.name = ''
        this.grade = null
        this.$emit('studentAdded')
      } catch (error) {
        console.error("Erreur lors de l'ajout de l'étudiant:", error)
      }
    }
  }
}
</script>

<template>
  <div class="max-w-md mx-auto mt-10">
    <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Liste des étudiants</h2>
    <div v-if="isLoading" class="text-center">Chargement...</div>
    <div v-if="error" class="text-red-500">{{ error }}</div>
    <ul v-else>
      <li v-for="student in students" :key="student.id" class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-2 shadow dark:shadow-md dark:text-white">
        {{ student.name }} - Note: {{ student.grade }}
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      students: [],
      error: null,
      isLoading: false
    }
  },
  async mounted() {
    await this.fetchStudents()
  },
  methods: {
    async fetchStudents() {
      this.isLoading = true
      this.error = null
      try {
        const response = await this.$axios.get('/students')
        this.students = response.data
      } catch (error) {
        this.error = 'Impossible de récupérer les étudiants.'
        console.error('Erreur lors de la récupération des étudiants :', error)
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>

<style scoped>
div {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  color: #334;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #f0f0f0;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

li:hover {
  background-color: #e4e4e4;
}

/* Chargement et erreurs */
div[v-if='isLoading'],
div[v-if='error'] {
  text-align: center;
  margin: 20px 0;
}

button {
  background-color: #008cba; /* Blue */
  border: none;
  color: white;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
}

input[type='text'],
input[type='number'] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>

<template>
  <div class="results">
    <h2>
      Созданные <br />
      {{ name }}
    </h2>
    <ul>
      <li v-for="(item, index) in results" :key="index" class="result-item">
        ID: {{ item.id }} <br />
        Имя: {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useEntityStore } from "../store/entityStore.ts";

export default defineComponent({
  name: "ResultsDisplay",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const entitiesStore = useEntityStore();

    const results = computed(() => {
      switch (props.name) {
        case "сделки":
          return entitiesStore.getLeads();
        case "контакты":
          return entitiesStore.getContacts();
        case "компании":
          return entitiesStore.getCompanies();
        default:
          return [];
      }
    });

    return {
      results,
    };
  },
});
</script>

<style scoped>
.results {
  margin-top: 16px;
  padding: 5px 16px 16px 16px;
  border-radius: 8px;
  min-width: 100px;
}

h2 {
  background-color: #3498db;
  border-radius: 8px;
  margin: 0;
  font-size: 0.9rem;
}

ul {
  list-style: none;
  margin: 5px;
  padding: 0;
}

.result-item {
  padding: 5px 5px;
  margin-top: 4px;
  background-color: rgba(42, 114, 210, 0.73);
  border-radius: 8px;
  text-align: start;
  word-wrap: break-word;
}

.result-item:last-child {
  border-bottom: none;
}
</style>

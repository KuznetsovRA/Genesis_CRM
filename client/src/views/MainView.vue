<template>
  <div class="main__container">
    <h1>Меню управления для создания сущностей</h1>
    <div class="control__container">
      <TheDropdown :options="Entity" @selected="handleSelectionUpdate" />
      <input v-model="entityData" placeholder="Введите имя" />
      <TheButton
        :disabled="isSelectEmpty || !entityData"
        :loading="loading"
        buttonText="Создать"
        @click="createNewEntity"
      />
    </div>

    <div class="result__container">
      <TheResultsDisplay name="сделки" />
      <TheResultsDisplay name="контакты" />
      <TheResultsDisplay name="компании" />
    </div>
    <p v-if="error" style="color: red">{{ error }}</p>
  </div>
</template>

<script lang="ts">
import { Ref, ref } from "vue";
import { Entity } from "../../const.ts";
import { TEntityType } from "../../type.ts";
import TheButton from "../components/TheButton.vue";
import TheDropdown from "../components/TheDropdown.vue";
import TheResultsDisplay from "../components/TheResultsDisplay.vue";
import { useEntityStore } from "../store/entityStore.ts";

export default {
  name: "EntityCreator",
  components: {
    TheDropdown,
    TheButton,
    TheResultsDisplay,
  },
  setup() {
    const loading: Ref<boolean> = ref(false);
    const isSelectEmpty: Ref<boolean> = ref(true);
    const error: Ref<string | null> = ref(null);
    const selectedEntityType: Ref<TEntityType> = ref(null);
    const entityData: Ref<string> = ref("");

    const store = useEntityStore();
    store.loadEntitiesFromSessionStorage();

    const handleSelectionUpdate = (value: string) => {
      selectedEntityType.value = value;
      isSelectEmpty.value = !value;
    };

    const createNewEntity = async (): Promise<void> => {
      loading.value = true;
      error.value = null;
      try {
        await store.createEntityAction(
          selectedEntityType.value!,
          entityData.value,
        );
      } catch (err: any) {
        error.value = "Ошибка при создании сущности: " + err.message;
      } finally {
        loading.value = false;
      }
    };

    return {
      loading,
      error,
      selectedEntityType,
      entityData,
      Entity,
      handleSelectionUpdate,
      createNewEntity,
      isSelectEmpty,
    };
  },
};
</script>

<style scoped>
.main__container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

.control__container {
  width: 80%;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
}

input {
  height: 42px;
  min-width: 135px;
  background-color: #ffffff;
  color: #333;
  border: 2px solid #3498db;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
  width: 100%;
}

.result__container {
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-around;
  align-items: start;
}

@media screen and (max-width: 650px) {
  .control__container {
    flex-direction: column;
    min-width: 256px;
  }

  .result__container {
    min-width: 256px;
  }
}
</style>

<template>
  <div class="dropdown">
    <select v-model="selected" class="dropdown-select">
      <option
        v-for="option in options"
        :key="option.label"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, Ref, ref, watch } from "vue";
import { TEntityType } from "../../type.ts";

export default defineComponent({
  name: "Dropdown",
  props: {
    options: {
      type: Array as PropType<Array<{ value: string | null; label: string }>>,
      required: true,
    },
  },
  setup(_, { emit }) {
    const selected: Ref<TEntityType> = ref(null);

    watch(selected, (newValue) => {
      emit("selected", newValue);
    });

    return {
      selected,
    };
  },
});
</script>

<style scoped>
.dropdown {
  width: 100%;
  min-width: 135px;
}

.dropdown-select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.dropdown-select:focus {
  border-color: #3498db;
  outline: none;
}
</style>

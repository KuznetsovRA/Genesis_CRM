<template>
  <button :disabled="disabled" class="styled-button">
    <span v-if="loading" class="loader"></span>
    <span v-if="!loading">{{ buttonText }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "TheButton",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    buttonText: {
      type: String,
      default: "Создать",
    },
  },
  setup(props) {
    const { disabled, loading, buttonText } = toRefs(props);

    return {
      disabled,
      loading,
      buttonText,
    };
  },
});
</script>

<style scoped>
.styled-button {
  background-color: #3498db;
  color: white;
  position: relative;
  min-width: 120px;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.styled-button:disabled {
  background-color: #ccc;
  color: #000000;
  cursor: not-allowed;
}

.styled-button:not(:disabled):hover {
  background-color: #2980b9;
}

.loader {
  display: inline-block;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  margin-right: 10px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

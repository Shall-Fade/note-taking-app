<template>
  <div class="px-[20px]">
    <div class="flex items-center justify-between mb-[30px]">
      <img src="/logo.svg" alt="Logo" />
      <button @click="openSearchBlock">
        <img
          class="w-[20px] h-[20px]"
          src="/images/search-icon.svg"
          alt="Search"
        />
      </button>
    </div>
    <div v-if="isSearchVisible" class="relative flex items-center mb-[30px]">
      <input
        class="bg-white/5 pl-[38px] py-[10px] rounded-[3px] font-semibold text-[16px] leading-[20px] text-white/60 placeholder:text-white/60 w-full"
        type="text"
        placeholder="Search note"
      />
      <img
        class="absolute left-[10px] w-[20px] h-[20px]"
        src="/images/search-icon.svg"
        alt="Search"
      />
    </div>
    <button
      v-else
      class="flex items-center justify-center py-[10px] bg-white/5 w-full rounded-[3px] mb-[30px]"
      @click="openModal"
    >
      <img
        class="w-[20px] h-[20px] mr-[8px]"
        src="/images/plus-icon.svg"
        alt="Plus"
      />
      <p class="text-[16px] leading-[20px] font-semibold">New Note</p>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

// Переменные
const store = useStore();
const isNoteModalVisible = store.state.isNoteModalVisible;
const isSearchVisible = computed(() => store.state.isSearchVisible);

// Открыть модалку
function openModal() {
  store.commit("TOGGLE_NOTE_MODAL", !isNoteModalVisible);
}

// Открыть поисковое окно
function openSearchBlock() {
  store.commit("TOGGLE_SEARCH_BLOCK", !isSearchVisible.value);
}
</script>

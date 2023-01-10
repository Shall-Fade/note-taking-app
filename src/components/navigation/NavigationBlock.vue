<template>
  <section class="col-span-2 h-screen py-[30px] bg-black overflow-y-auto scrollbar-thin scrollbar-thumb-white/60 scrollbar-track-white/[10%]">
    <NavigationBlockSearch />
    <NavigationBlockRecents />
    <NavigationBlockFolders />
    <NavigationBlockModal />
    <NavigationBlockFoldersModal />
  </section>
</template>

<script setup lang="ts">
import NavigationBlockSearch from "./NavigationBlockSearch.vue";
import NavigationBlockRecents from "./NavigationBlockRecents.vue";
import NavigationBlockFolders from "./NavigationBlockFolders.vue";
import NavigationBlockModal from "./NavigationBlockModal.vue";
import NavigationBlockFoldersModal from "./NavigationBlockFoldersModal.vue";
</script>

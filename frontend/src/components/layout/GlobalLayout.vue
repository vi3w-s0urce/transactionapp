<script setup lang="ts">
import SidebarLayout from "./SidebarLayout.vue";
</script>

<template>
    <main class="bg-slate-100 min-h-[100dvh]">
        <SidebarLayout />
        <section class="ml-[300px] px-8 py-6">
            <slot />
        </section>
    </main>
</template>

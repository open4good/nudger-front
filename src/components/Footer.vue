<template>
  <footer class="bg-gray-100 p-6 text-gray-700 text-sm">
    <div class="container mx-auto flex justify-between">
      <slot>
        <p>&copy; {{ new Date().getFullYear() }} Nudger</p>
      </slot>
    </div>
  </footer>
</template>

<script setup lang="ts">
// No props
</script>

<template>
  <div class="flex flex-col min-h-screen bg-neutral-50 dark:bg-neutral-800 dark:text-white">
    <Header />
    <main class="flex-1">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </main>
    <Footer />
  </div>
</template>

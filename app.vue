<template>
  <div class="flex flex-col justify-between dark:bg-neutral-800 dark:text-white">
    <Header />
    <div class="md:min-h-[calc(100vh-3.25rem)] min-h-[calc(100vh-4rem)]">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
    <Footer />
  </div>
</template>

<template>
    <h1 class="text-3xl text-emerald-700 font-semibold dark:text-emerald-500 mb-3">
        Overview
    </h1>
    <p>
        This section is meant to teach you how to get the most out of SaveApp.<br>
        You can save data and see simple statistics from your phone, but for a deeper analysis,
        we encourage you to use your PC, where you can access powerful tools,
        like spreadsheets and data analysis with Python.<br>
        Thanks to the <span class="text-emerald-700 dark:text-emerald-500 font-semibold">export</span>
        feature, you can easily access your data in '.csv' format.
    </p>
    <h3 class="text-2xl text-emerald-700 font-semibold dark:text-emerald-500 mt-6 mb-2">
        Community Support
    </h3>
    <p>
        Get in contact with us at
        <a href="https://github.com/ferrariofilippo/SaveApp_Kotlin"
            class="underline hover:text-emerald-700 dark:hover:text-emerald-500">GitHub</a>.
        Report bugs & issues, propose new features and more!<br>
        We'll try to catch you up ASAP!
    </p>
</template>

<script setup>
definePageMeta({
    layout: 'docs'
})

useHead({
    title: 'SaveApp @ Documentation',
    meta: [
        { name: 'description', content: 'SaveApp documentation, get the best of our app.' },
        { name: 'icon', content: '/logo_512.png' },
        { name: 'lang', content: 'en' },
        { name: 'og:title', content: 'SaveApp @ Documentation' },
        { name: 'og:image', content: '/logo_512.png' },
        { name: 'og:description', content: 'SaveApp documentation, get the best of our app.' },
        { name: 'og:url', content: 'https://saveapp.vercel.app' },
        { name: 'twitter:title', content: 'SaveApp @ Contribute' },
        { name: 'twitter:description', content: 'SaveApp documentation, get the best of our app.' },
        { name: 'twitter:image', content: '/logo_512.png' },
        { name: 'twitter:card', content: 'summary' },
    ]
})
</script>

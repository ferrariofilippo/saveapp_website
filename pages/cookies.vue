<template>
    <div class="flex flex-col w-screen my-16">
        <h1 class="text-center mb-5 text-6xl text-emerald-700 font-semibold dark:text-emerald-500">
            Cookies policy
        </h1>
        <span class="lg:w-1/2 sm:w-2/3 sm:mx-auto px-4 w-screen text-sm text-neutral-500 dark:text-neutral-300">
            Date: August 22, 2024
        </span>
        <h3
            class="lg:w-1/2 sm:w-2/3 sm:mx-auto px-4 w-screen text-emerald-700 font-semibold text-2xl dark:text-emerald-500">
            Information We Collect
        </h3>
        <p class="lg:w-1/2 sm:w-2/3 sm:mx-auto px-4 w-screen tracking-tight">
            This website uses analytical cookies to provide us with anonymized and aggregated data for statistical use.
            Such data comprehend pages visited; the referrer you used (if you reached this website from another one);
            the country, operating system and browser from which you accessed this website.
        </p>
        <h3
            class="lg:w-1/2 sm:w-2/3 sm:mx-auto px-4 w-screen mt-3 text-emerald-700 font-semibold text-2xl dark:text-emerald-500">
            Future Changes To This Policy
        </h3>
        <p class="lg:w-1/2 sm:w-2/3 sm:mx-auto px-4 w-screen tracking-tight">
            We may modify or update this Policy to better adapt it to SaveApp's changes. When We change this Policy, We
            will
            inform You through an update of the 'Date' notice. It is Your responsibility to review this Policy
            periodically
            to stay informed of any updates. Your continued use of the Application after any modifications to this
            Policy
            constitutes Your acceptance of those changes.
        </p>
        <h3
            class="lg:w-1/2 sm:w-2/3 sm:mx-auto px-4 w-screen mt-3 text-emerald-700 font-semibold text-2xl dark:text-emerald-500">
            Contact Us
        </h3>
        <p class="lg:w-1/2 sm:w-2/3 sm:mx-auto px-4 w-screen tracking-tight">
            If You have any questions or concerns about this Policy or Our practices regarding Your
            personal information, please contact Us at
            <a href="mailto:ferrario.filippo.dev@gmail.com"
                class="underline hover:text-emerald-700 hover:dark:text-emerald-500">ferrario.filippo.dev@gmail.com</a>.
        </p>
    </div>
</template>

<script setup>
useHead({
    title: 'SaveApp @ Cookies policy',
    meta: [
        { name: 'description', content: 'SaveApp\'s cookies policy.' },
        { name: 'icon', content: '/logo_512.png' },
        { name: 'lang', content: 'en' },
        { name: 'og:title', content: 'SaveApp @ Cookies policy' },
        { name: 'og:image', content: '/logo_512.png' },
        { name: 'og:description', content: 'SaveApp\'s cookies policy.' },
        { name: 'og:url', content: 'https://saveapp.vercel.app/privacy' },
        { name: 'twitter:title', content: 'SaveApp @ Cookies policy' },
        { name: 'twitter:description', content: 'SaveApp\' cookies policy.' },
        { name: 'twitter:image', content: '/logo_512.png' },
        { name: 'twitter:card', content: 'summary' },
    ]
})
</script>

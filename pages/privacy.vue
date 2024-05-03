<template>
    <div class="flex flex-col w-screen my-16">
        <h1 class="mx-auto mb-5 text-3xl text-emerald-700 font-semibold dark:text-emerald-500">
            Privacy
        </h1>
        <span class="lg:w-1/2 sm:w-2/3 sm:mx-auto px-4 w-screen text-sm text-neutral-500 dark:text-neutral-300">
            Date: May 3, 2024
        </span>
        <p class="lg:w-1/2 sm:w-2/3 sm:mx-auto px-4 w-screen tracking-tight">
            This Privacy Policy (hereinafter, "Policy") for SaveApp (which may be referred to as "we", "us", "our",
            "product") describes how and what kind of information we collect and use about users (hereinafter, "you") when
            they use our Android application ("SaveApp", "the application"). By using SaveApp, you acknowledge and consent
            to the practices described in this Policy.
        </p>
        <h3 class="lg:w-1/2 sm:w-2/3 sm:mx-auto px-4 w-screen mt-3 mb-1 text-emerald-700 font-semibold text-xl dark:text-emerald-500">
            Information we collect
        </h3>
        <p class="lg:w-1/2 sm:w-2/3 sm:mx-auto px-4 w-screen tracking-tight">
            SaveApp collects non-personably identifiable diagnostic data such as crash and performance reports. This
            information may include technical details about your device, Android version and application version.
        </p>
        <h3 class="lg:w-1/2 sm:w-2/3 sm:mx-auto px-4 w-screen mt-3 mb-1 text-emerald-700 font-semibold text-xl dark:text-emerald-500">
            Where do we save your data
        </h3>
        <p class="lg:w-1/2 sm:w-2/3 sm:mx-auto px-4 w-screen tracking-tight">
            By default, all your data is stored exclusively on your phone. You are solely responsible for it. If you install the
            application using the Google Play Store, your data may be backed up.
            You may delete all your data by clearing the application cache and memory. Please note, in this case, you will
            not be able to recover your data in any way.
        </p>
        <h3 class="lg:w-1/2 sm:w-2/3 sm:mx-auto px-8 w-screen text-emerald-700 font-semibold text-lg dark:text-emerald-500">
            @ Google Drive
        </h3>
        <p class="lg:w-1/2 sm:w-2/3 sm:mx-auto px-8 w-screen tracking-tight">
            Since version <span class="text-emerald-700 dark:text-emerald-500">1.06</span>, you may choose to save and restore your data on 
            <a href="https://drive.google.com/" class="font-semibold hover:text-emerald-700 hover:dark:text-emerald-500">Google Drive</a>.<br/>
            SaveApp will only be allowed to access its own data, including the app's database 
            (containing movements, budgets, subscriptions and tags) and the settings file.<br/>
            Once uploaded, this data may be removed by clicking on:
            <ol class="sm:mx-auto mx-2 bg-neutral-100 dark:bg-neutral-700 px-4 py-1 rounded-lg mt-1 mb-2 inline-flex flex-wrap items-center rtl:space-x-reverse text-sm">
                <li class="inline-flex items-center">
                    Google Drive
                </li>
                <li class="flex items-center">
                    <svg
                        class="rtl:rotate-180 block w-2 h-2 mx-1 text-neutral-700 dark:text-neutral-100"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    Settings    
                </li>
                <li class="flex items-center">
                    <svg
                        class="rtl:rotate-180 block w-2 h-2 mx-1 text-neutral-700 dark:text-neutral-100"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    Manage apps
                </li>
                <li class="flex items-center">
                    <svg
                        class="rtl:rotate-180 block w-2 h-2 mx-1 text-neutral-700 dark:text-neutral-100"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    SaveApp
                </li>
            </ol>
        </p>
        <h3 class="lg:w-1/2 sm:w-2/3 sm:mx-auto px-4 w-screen mt-3 mb-1 text-emerald-700 font-semibold text-xl dark:text-emerald-500">
            Future changes to This Policy
        </h3>
        <p class="lg:w-1/2 sm:w-2/3 sm:mx-auto px-4 w-screen tracking-tight">

            We may modify or update this Policy to better adapt it to SaveApp's changes. When we change this Policy, we will
            inform you through an update of the 'Date' notice. It is your responsibility to review this Policy periodically
            to stay informed of any updates. Your continued use of the application after any modifications to this Policy
            constitutes your acceptance of those changes.
        </p>
    </div>
</template>

<script setup>
useHead({
    title: 'SaveApp @ Privacy',
    meta: [
        { name: 'description', content: 'SaveApp privacy policy.' },
        { name: 'icon', content: '/logo_512.png' },
        { name: 'lang', content: 'en' },
        { name: 'og:title', content: 'SaveApp @ Privacy' },
        { name: 'og:image', content: '/logo_512.png' },
        { name: 'og:description', content: 'SaveApp privacy policy.' },
        { name: 'og:url', content: 'https://saveapp.vercel.app/privacy' },
        { name: 'twitter:title', content: 'SaveApp @ Privacy' },
        { name: 'twitter:description', content: 'SaveApp privacy policy.' },
        { name: 'twitter:image', content: '/logo_512.png' },
        { name: 'twitter:card', content: 'summary' },
    ]
})
</script>

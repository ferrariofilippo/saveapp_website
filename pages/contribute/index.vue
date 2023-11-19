<template>
    <div class="flex flex-col w-screen my-16">
        <h1 class="mx-auto mb-5 text-3xl text-emerald-700 font-semibold dark:text-emerald-500">
            Contribute
        </h1>
        <p class="lg:w-1/2 sm:w-2/3 sm:mx-auto px-4 w-screen">
            All code submitted to the repository must follow MVVM (
            <a
                class="font-semibold hover:text-emerald-700 hover:dark:text-emerald-500"
                href="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel"
            >
                Model-View-ViewModel
            </a>
            ) design pattern.<br />
            The code you submit must be readable and maintainable. Make sure you use abstraction to reduce code duplication. 
            You should always test your code before opening a Pull Request, both manually and using unit tests.<br />
            Format your code (<span  class="text-neutral-500 dark:text-neutral-300">.kt</span> / 
            <span class="text-neutral-500 dark:text-neutral-300">.xml</span>) before committing it.
        </p>
        <p class="lg:w-1/2 sm:w-2/3 sm:mx-auto px-4 w-screen py-1">
            Please, follow this basic project structure:
            <ul class="list-outside list-disc lg:w-1/2 sm:w-2/3 sm:mx-auto sm:px-9 ms-5 px-4">
                <li>
                    <span class="font-semibold">converters:</span> data converters and adapters for the UI
                </li>
                <li>
                    <span class="font-semibold">data:</span> storage-related classes
                </li>
                <li>
                    <span class="font-semibold">model:</span> classes that represent any kind of data
                </li>
                <li>
                    <span class="font-semibold">util:</span> static classes or objects
                </li>
                <li>
                    <span class="font-semibold">view:</span> fragments code
                    <ul class="ms-4 list-outside list-decimal">
                        <li>
                            <span class="font-semibold">adapters:</span> Recycler View or AutoCompleteTextView adapters
                        </li>
                        <li>
                            <span class="font-semibold">viewmodels:</span> fragment ViewModels
                        </li>
                    </ul>
                </li>
            </ul>
        </p>
        <h3
            class="lg:w-1/2 sm:w-2/3 sm:mx-auto px-4 mt-3 mb-1 text-emerald-700 font-semibold text-xl dark:text-emerald-500"
        >
            Kotlin Style Guide
        </h3>
        <p class="lg:w-1/2 sm:w-2/3 sm:mx-auto px-4 w-screen">
            To keep the codebase maintainable and easy to read, you are encouraged to follow this Google 
            <a
                class="font-semibold hover:text-emerald-700 hover:dark:text-emerald-500"
                href="https://developer.android.com/kotlin/style-guide"
            >
                style guide
            </a>
            . Please, make sure the code you want to submit follows those rules before opening a Pull Request. 
            This will make the review process easier for us.
        </p>
        <h3
            class="lg:w-1/2 sm:w-2/3 mt-3 mb-1 sm:mx-auto px-4 text-emerald-700 font-semibold text-xl dark:text-emerald-500 pt-1"
        >
            Required Tools
        </h3>
        <p class="lg:w-1/2 sm:w-2/3 sm:mx-auto px-4 w-screen">
            Here is a list of tools you may need to contribute to SaveApp:
            <ul class="list-outside list-disc lg:w-1/2 sm:w-2/3 sm:mx-auto sm:px-9 ms-5 px-4">
                <li>
                    <a
                        href="https://git-scm.com/"
                        class="font-semibold hover:text-emerald-700 hover:dark:text-emerald-500"
                    >
                        Git
                    </a>
                </li>
                <li>
                    <a
                        href="https://developer.android.com/studio"
                        class="font-semibold hover:text-emerald-700 hover:dark:text-emerald-500"
                    >
                        Android Studio
                    </a>
                    <ul class="ms-4 list-outside list-decimal">
                        <li class="text-sm">Gradle</li>
                        <li class="text-sm">Kotlin</li>
                    </ul>
                </li>
            </ul>
        </p>
        <p></p>
        <p></p>
        <p></p>
        <!-- The three <p> above prevent an error where the last three <div>s would not be visible -->
    </div>
</template>

<script setup>
useHead({
    title: 'SaveApp @ Contribute',
    meta: [
        { name: 'description', content: 'Contribute to SaveApp, an open-source budgeting Android app.' },
        { name: 'icon', content: '/logo_512.png' },
        { name: 'lang', content: 'en' },
        { name: 'og:title', content: 'SaveApp @ Contribute' },
        { name: 'og:image', content: '/logo_512.png' },
        { name: 'og:description', content: 'Contribute to SaveApp, an open-source budgeting Android app.' },
        { name: 'og:url', content: 'https://saveapp.vercel.app' },
        { name: 'twitter:title', content: 'SaveApp @ Contribute' },
        { name: 'twitter:description', content: 'Contribute to SaveApp, an open-source budgeting Android app.' },
        { name: 'twitter:image', content: '/logo_512.png' },
        { name: 'twitter:card', content: 'summary' },
    ]
})
</script>

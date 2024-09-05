<template>
    <footer
        class="border-t-2 border-neutral-200 bg-neutral-50 dark:bg-neutral-800 dark:border-neutral-700 dark:border-t-3">
        <div class="flex w-screen md:px-10 px-3 justify-between md:py-2 py-5 md:flex-row flex-col">
            <div class="md:mx-0 mx-auto flex flex-col gap-y-2">
                <a class="flex gap-1 sm:mx-0 mx-auto" href="/">
                    <NuxtImg class="rounded-full me-1 md:w-8 md:h-8 sm:w-12 sm:h-12" src="/logo_512.png" width="64"
                        height="64" loading="lazy" alt="SaveApp logo" />
                    <span
                        class="my-auto md:text-lg sm:text-2xl text-3xl font-bold text-emerald-700 dark:text-emerald-500">
                        SaveApp
                    </span>
                </a>
                <span
                    class="md:uppercase md:text-xs md:ps-10 ps-3 text-neutral-600 sm:text-md text-md dark:text-neutral-300 sm:text-left text-center">
                    Copyright &copy; 2024
                    <a class="hover:text-emerald-700 md:text-xs sm:text-md text-lg dark:hover:text-emerald-500"
                        href="https://ferrariofilippo.vercel.app">
                        Ferrario Filippo
                    </a>
                </span>
            </div>
            <div
                class="md:text-xs flex gap-x-20 gap-y-4 md:w-[50vw] w-screen md:pt-0 pt-4 sm:flex-row flex-col md:mx-0 mx-auto sm:justify-end">
                <a class="hover:text-emerald-700 md:mx-0 mx-auto sm:p-0 p-2 sm:m-0 m-1 md:text-sm sm:text-md text-lg dark:hover:text-emerald-500"
                    href="/privacy">
                    Privacy
                </a>
                <div class="md:mx-0 mx-auto sm:text-left text-center">
                    <span class="text-neutral-600 sm:text-sm text-md dark:text-neutral-300">
                        Useful informations:
                    </span>
                    <ul>
                        <li class="sm:mb-0 mb-2">
                            <a class="hover:text-emerald-700 sm:p-0 p-2 sm:m-0 m-1 md:text-sm sm:text-md text-lg dark:hover:text-emerald-500"
                                href="https://github.com/ferrariofilippo/SaveApp_Kotlin">
                                GitHub repository
                            </a>
                        </li>
                        <li class="sm:my-0 my-2">
                            <a class="hover:text-emerald-700 sm:p-0 p-2 sm:m-0 m-1 md:text-sm sm:text-md text-lg dark:hover:text-emerald-500"
                                href="https://github.com/ferrariofilippo/SaveApp_Kotlin/blob/master/NOTICE.md">
                                Third-party libraries
                            </a>
                        </li>
                        <li class="sm:mt-0 mt-2">
                            <a class="hover:text-emerald-700 sm:p-0 p-2 sm:m-0 m-1 md:text-sm sm:text-md text-lg dark:hover:text-emerald-500"
                                href="mailto:ferrario.filippo.dev@gmail.com">
                                Contact me
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="md:mx-0 mx-auto sm:text-left text-center">
                    <span class="text-neutral-600 sm:text-sm text-md dark:text-neutral-300">
                        Credits
                    </span>
                    <ul>
                        <li class="sm:mb-0 mb-2">
                            <a class="hover:text-emerald-700 sm:p-0 p-2 sm:m-0 m-1 md:text-sm sm:text-md text-lg dark:hover:text-emerald-500"
                                href="https://vercel.com/">
                                Powered by Vercel
                            </a>
                        </li>
                        <li class="sm:my-0 my-2">
                            <a class="hover:text-emerald-700 sm:p-0 p-2 sm:m-0 m-1 md:text-sm sm:text-md text-lg dark:hover:text-emerald-500"
                                href="https://tailwindcss.com/">
                                Tailwind
                            </a>
                        </li>
                        <li class="sm:my-0 my-2">
                            <a class="hover:text-emerald-700 sm:p-0 p-2 sm:m-0 m-1 md:text-sm sm:text-md text-lg dark:hover:text-emerald-500"
                                href="https://heroicons.com/">
                                Icons
                            </a>
                        </li>
                        <li class="sm:mt-0 y-2">
                            <a class="hover:text-emerald-700 sm:p-0 p-2 sm:m-0 m-1 md:text-sm sm:text-md text-lg dark:hover:text-emerald-500"
                                href="https://fonts.google.com/specimen/Quicksand?query=quicksand">
                                Fonts
                            </a>
                        </li>
                        <li class="sm:mt-0 mt-2">
                            <a class="hover:text-emerald-700 sm:p-0 p-2 sm:m-0 m-1 md:text-sm sm:text-md text-lg dark:hover:text-emerald-500"
                                href="https://flowbite.com">
                                Flowbite
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>

</script>

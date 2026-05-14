<template>
    <header class="sticky top-0 z-50">
        <div id="cookieBanner"
            class="hidden flex bg-neutral-100 dark:bg-neutral-800 text-sm justify-between px-3 py-1.5 border-b border-neutral-200 dark:border-neutral-700">
            <span class="my-auto text-neutral-600 dark:text-neutral-300">
                This website uses analytical cookies.
                <a id="go_to_cookies" aria-label="See cookie policy" href="/cookies"
                    class="text-emerald-700 hover:underline dark:text-emerald-400 font-medium">
                    See Policy
                </a>
            </span>
            <button id="close_cookie_button" aria-label="Close cookies banner" type="button" @click="closeCookieBanner"
                class="text-neutral-400 hover:text-emerald-700 dark:hover:text-emerald-400 p-1">
                <XMarkIcon class="h-4 w-4" />
            </button>
        </div>
        <nav class="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
            <div class="max-w-6xl mx-auto flex justify-between items-center px-4 md:h-[3.25rem] h-14">
                <a class="flex items-center gap-2" href="/">
                    <NuxtImg src="/logo_512.png" class="rounded-full" width="32" height="32" densities="x2 x2"
                        preload alt="SaveApp logo" />
                    <span class="text-xl font-bold text-emerald-700 dark:text-emerald-500">SaveApp</span>
                </a>
                <ul class="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    <li>
                        <a href="/" class="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/docs" class="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
                            Docs
                        </a>
                    </li>
                    <li>
                        <a href="/contribute" class="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
                            Contribute
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/ferrariofilippo/SaveApp_Kotlin/issues/"
                            class="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
                            Report a bug
                        </a>
                    </li>
                </ul>
                <div class="hidden md:flex items-center gap-4">
                    <a href="https://github.com/ferrariofilippo/SaveApp_Kotlin"
                        aria-label="View source on GitHub"
                        class="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
                        GitHub
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.ferrariofilippo.saveapp"
                        class="bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
                        Download
                    </a>
                </div>
                <button id="dropdown-menu-toggle" aria-label="Menu" type="button" @click="toggleDropdown"
                    class="md:hidden text-neutral-600 dark:text-neutral-400 hover:text-emerald-700 dark:hover:text-emerald-400 p-2">
                    <Bars3Icon class="h-6 w-6" />
                </button>
            </div>
        </nav>
        <div id="dropdown-menu"
            class="z-50 md:hidden hidden absolute w-full shadow-lg bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 px-4 py-3"
            style="position: absolute;">
            <ul class="flex flex-col gap-1">
                <li>
                    <a href="/"
                        class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium transition-colors">
                        <HomeIcon class="h-5 w-5 text-emerald-700 dark:text-emerald-500 shrink-0" />
                        Home
                    </a>
                </li>
                <li>
                    <a href="/docs"
                        class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium transition-colors">
                        <DocumentTextIcon class="h-5 w-5 text-emerald-700 dark:text-emerald-500 shrink-0" />
                        Docs
                    </a>
                </li>
                <li>
                    <a href="/contribute"
                        class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium transition-colors">
                        <CommandLineIcon class="h-5 w-5 text-emerald-700 dark:text-emerald-500 shrink-0" />
                        Contribute
                    </a>
                </li>
                <li>
                    <a href="https://github.com/ferrariofilippo/SaveApp_Kotlin/issues/"
                        class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium transition-colors">
                        <BugAntIcon class="h-5 w-5 text-emerald-700 dark:text-emerald-500 shrink-0" />
                        Report a bug
                    </a>
                </li>
                <li class="mt-2 pt-2 border-t border-neutral-200 dark:border-neutral-700">
                    <a href="https://play.google.com/store/apps/details?id=com.ferrariofilippo.saveapp"
                        class="flex justify-center bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-4 py-2.5 rounded-lg transition-colors">
                        Download on Android
                    </a>
                </li>
            </ul>
        </div>
    </header>
</template>

<script setup>
import { HomeIcon, BugAntIcon, DocumentTextIcon, Bars3Icon, CommandLineIcon, XMarkIcon } from "@heroicons/vue/24/outline";

var isDropdownHidden = true;
const msDuration = 800;

onMounted(() => {
    window.onresize = onWidthChanged;

    const bannerHidden = sessionStorage.getItem('cookiesBannerHidden');
    if (bannerHidden === null || bannerHidden == false) {
        const banner = document.getElementById('cookieBanner');
        banner.classList.remove('hidden');
    }
});

function toggleDropdown() {
    const menu = document.getElementById('dropdown-menu');
    if (isDropdownHidden) {
        menu.classList.remove('hidden');
        menu.classList.add('fade-in');
        menu.classList.add('block');
        setTimeout(() => {
            menu.classList.remove('fade-in');
        }, msDuration);
    } else {
        menu.classList.add('fade-out');
        setTimeout(() => {
            menu.classList.remove('fade-out');
            menu.classList.add('hidden');
            menu.classList.remove('block');
        }, msDuration);
    }

    isDropdownHidden = !isDropdownHidden;
}

function closeCookieBanner() {
    const banner = document.getElementById('cookieBanner');
    banner.classList.add('hidden');
    sessionStorage.setItem('cookiesBannerHidden', true);
}

function onWidthChanged() {
    if (window.innerWidth > 768 && !isDropdownHidden) {
        toggleDropdown()
    }
}
</script>

<style>
.fade-in {
    animation: fade-in-anim 0.8s linear;
}

.fade-out {
    animation: fade-out-anim 0.8s linear;
}

@keyframes fade-in-anim {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

@keyframes fade-out-anim {
    0% { opacity: 1; }
    100% { opacity: 0; }
}
</style>

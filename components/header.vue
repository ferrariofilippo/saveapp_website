<template>
    <header>
        <div 
            id="cookieBanner"
            class="hidden flex bg-neutral-100 dark:bg-neutral-950 text-sm justify-between px-1"
        >
            <span class="my-auto">
                This website uses analytical cookies.
                <a
                    id="go_to_cookies"
                    aria-label="See cookie policy"
                    href="/cookies"
                    class="hover:text-emerald-500 my-auto p-1 "
                >
                    See Policy
                </a>
            </span>
            <button
                id="close_cookie_button"
                aria-label="Close cookies banner"
                type="button"
                @click="closeCookieBanner"
                class="block  hover:text-emerald-500 my-auto p-1"
            >
                <XMarkIcon class="md:h-5 h-7 md:w-5 w-7" />
            </button>
        </div>
        <nav
            class="flex justify-between w-screen px-3 py-1 md:h-[3.25rem] h-16 border-b-2 border-neutral-100 dark:bg-neutral-900 dark:border-neutral-800"
        >
            <div class="flex gap-5">
                <a class="flex" href="/">
                    <NuxtImg
                        src="/logo_512.png"
                        class="rounded-full my-auto"
                        width="40"
                        height="40"
                        densities="x2 x2"
                        preload
                        alt="SaveApp logo"
                    />
                    <span class="my-auto text-2xl font-bold text-emerald-700 ms-2 dark:text-emerald-500">
                        SaveApp
                    </span>
                </a>
                <ul class="md:flex hidden gap-3 my-auto">
                    <li>
                        <a
                            href="/"
                            class="flex hover:text-emerald-700 bg-neutral-50 border hover:border-emerald-700 border-neutral-100 p-1 rounded-lg dark:hover:text-emerald-500 dark:border-neutral-900 dark:bg-neutral-700"
                        >
                            <HomeIcon class="h-5 w-5 my-auto mx-1" />
                            <span class="tracking-tight pe-1">
                                Home
                            </span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs"
                            class="flex hover:text-emerald-700 bg-neutral-50 border hover:border-emerald-700 border-neutral-100 p-1 rounded-lg dark:hover:text-emerald-500 dark:border-neutral-900 dark:bg-neutral-700"
                        >
                            <DocumentTextIcon class="h-5 w-5 my-auto mx-1" />
                            <span class="tracking-tight pe-1">
                                Docs
                            </span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/contribute"
                            class="flex hover:text-emerald-700 bg-neutral-50 border hover:border-emerald-700 border-neutral-100 p-1 rounded-lg dark:hover:text-emerald-500 dark:border-neutral-900 dark:bg-neutral-700"
                        >
                            <CommandLineIcon class="h-5 w-5 my-auto mx-1" />
                            <span class="tracking-tight pe-1">
                                Contribute
                            </span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/ferrariofilippo/SaveApp_Kotlin/issues/"
                            class="flex hover:text-emerald-700 bg-neutral-50 border hover:border-emerald-700 border-neutral-100 p-1 rounded-lg dark:hover:text-emerald-500 dark:border-neutral-900 dark:bg-neutral-700"
                        >
                            <BugAntIcon class="h-5 w-5 my-auto mx-1" />
                            <span class="tracking-tight pe-1">
                                Report a bug
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="flex gap-x-2">
                <a
                    id="source_code"
                    aria-label="Explore the source code on GitHub."
                    href="https://github.com/ferrariofilippo/SaveApp_Kotlin"
                    class="md:block hidden hover:text-emerald-700 my-auto hover:border hover:border-emerald-700 hover:rounded-lg p-2 dark:hover:border-emerald-500 dark:hover:text-emerald-500"
                >
                    <CodeBracketIcon class="md:h-5 h-7 md:w-5 w-7" />
                </a>
                <button
                    id="dropdown-menu-toggle"
                    aria-label="Menu"
                    type="button"
                    @click="toggleDropdown"
                    class="md:hidden block hover:text-emerald-700 my-auto hover:border hover:border-emerald-700 hover:rounded-lg p-2 dark:hover:border-emerald-500 dark:hover:text-emerald-500"
                >
                    <Bars3Icon class="md:h-5 h-7 md:w-5 w-7" />
                </button>
            </div>
        </nav>
        <div
            id="dropdown-menu"
            class="z-50 md:hidden hidden rounded-b-3xl w-full shadow bg-neutral-50 dark:bg-neutral-800 px-5 py-5 md:top-[3.25rem] top-16"
            style="position: absolute;"
        >
            <ul class="flex flex-col gap-3 my-auto">
                <li class="mx-auto">
                    <a
                        href="/"
                        class="flex hover:text-emerald-700 bg-neutral-50 border hover:border-emerald-700 border-neutral-50 p-1 rounded-lg dark:hover:text-emerald-500 dark:border-neutral-800 dark:bg-neutral-700"
                    >
                        <HomeIcon class="h-5 w-5 my-auto mx-1" />
                        <span class="tracking-tight pe-1">
                            Home
                        </span>
                    </a>
                </li>
                <li class="mx-auto">
                    <a
                        href="/docs"
                        class="flex hover:text-emerald-700 bg-neutral-50 border hover:border-emerald-700 border-neutral-50 p-1 rounded-lg dark:hover:text-emerald-500 dark:border-neutral-800 dark:bg-neutral-700"
                    >
                        <DocumentTextIcon class="h-5 w-5 my-auto mx-1" />
                        <span class="tracking-tight pe-1">
                            Docs
                        </span>
                    </a>
                </li>
                <li class="mx-auto">
                    <a
                        href="/contribute"
                        class="flex hover:text-emerald-700 bg-neutral-50 border hover:border-emerald-700 border-neutral-50 p-1 rounded-lg dark:hover:text-emerald-500 dark:border-neutral-800 dark:bg-neutral-700"
                    >
                        <CommandLineIcon class="h-5 w-5 my-auto mx-1" />
                        <span class="tracking-tight pe-1">
                            Contribute
                        </span>
                    </a>
                </li>
                <li class="mx-auto">
                    <a
                        href="https://github.com/ferrariofilippo/SaveApp_Kotlin/issues/"
                        class="flex hover:text-emerald-700 bg-neutral-50 border hover:border-emerald-700 border-neutral-50 p-1 rounded-lg dark:hover:text-emerald-500 dark:border-neutral-800 dark:bg-neutral-700"
                    >
                        <BugAntIcon class="h-5 w-5 my-auto mx-1" />
                        <span class="tracking-tight pe-1">
                            Report a bug
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    </header>
</template>

<script setup>
import { HomeIcon, CodeBracketIcon, BugAntIcon, DocumentTextIcon, Bars3Icon, CommandLineIcon, XMarkIcon } from "@heroicons/vue/24/outline";

var isDropdownHidden = true;
const msDuration = 800;

onMounted(() => {
    window.onresize = onWidthChanged;

    const bannerHidden = sessionStorage.getItem('cookiesBannerHidden');
    if (bannerHidden === null ||  bannerHidden == false) {
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

<template>
    <div class="flex w-screen md:min-h-[calc(100vh-3.25rem)] min-h-[calc(100vh-4rem)]">
        <div
            class="md:block hidden bg-neutral-50 dark:bg-neutral-900 xl:w-1/5 lg:w-1/4 md:w-1/3 w-full md:relative absolute md:min-h-[calc(100vh-3.25rem)] min-h-[calc(100vh-4rem)] z-10 rounded-r-lg my-1 transition-all"
            id="sidebar"
        >
            <button 
                @click="toggleSidebar()"
                type="button"
                class="md:hidden flex items-end p-2 mt-3 me-3 ms-auto text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800"
            >
                <XMarkIcon class="h-6 w-6" />
            </button>
            <ul class="m-3">
                <li>
                    <a
                        href="/docs"
                        class="p-2 text-gray-900 flex w-full transition duration-75 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800"
                    >
                        Overview
                    </a>
                </li>
                <li>
                    <button
                        @click="toggleToolsDropdown()"
                        type="button"
                        class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800"
                    >
                        <WrenchScrewdriverIcon class="h-6 w-6" />
                        <span class="flex-1 ms-3 text-left whitespace-nowrap">
                            SaveApp Tools
                        </span>
                        <ChevronUpIcon v-if="data.isToolsSectionVisible" class="h-6 w-6" />
                        <ChevronDownIcon v-else class="h-6 w-6" />
                    </button>
                    <ul id="tools-dropdown" class="py-2 space-y-2 transition-all">
                        <li>
                            <a
                                href="/docs/tools/cli"
                                class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800"
                            >
                                <CommandLineIcon class="h-5 w-5 me-2" />
                                CLI
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/ferrariofilippo/SaveApp_Tools/issues/new"
                                class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800"
                            >
                                <SquaresPlusIcon class="h-5 w-5 me-2" />
                                Propose a tool
                            </a>
                        </li>
                    </ul>
                </li>

            </ul>
        </div>
        <div class="xl:w-4/5 lg:w-3/4 md:w-2/3 w-full md:p-12 p-8">
            <div class="xl:w-1/2 lg:w-2/3 w-full">
                <button
                    @click="toggleSidebar()"
                    type="button"
                    class="sm:hidden flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-700 -ml-2 mb-3"
                >
                    <Bars3BottomLeftIcon class="h-6 w-6" />
                </button>
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>
import { WrenchScrewdriverIcon, ChevronUpIcon, ChevronDownIcon, CommandLineIcon, SquaresPlusIcon, Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/vue/24/outline";

const msDuration = 400;

const data = reactive({
    isToolsSectionVisible: true,
});

function toggleToolsDropdown() {
    const menu = document.getElementById('tools-dropdown');

    if (data.isToolsSectionVisible) {
        menu.classList.add('hidden');
        menu.classList.remove('block');
    } else {
        menu.classList.add('block');
        menu.classList.remove('hidden');
    }

    data.isToolsSectionVisible = !data.isToolsSectionVisible;
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');

    if (sidebar.classList.contains('hidden')) {
        sidebar.classList.add('slide-in');
        sidebar.classList.add('block');
        sidebar.classList.remove('hidden');
        setTimeout(() => {
            sidebar.classList.remove('slide-in');
        }, msDuration);
    } else {
        sidebar.classList.add('slide-out');
        setTimeout(() => {
            sidebar.classList.remove('slide-out');
            sidebar.classList.add('hidden');
            sidebar.classList.remove('block');
        }, msDuration);
    }
}
</script>

<style>
.slide-in {
    animation: slide-in-frames 0.4s ease-in-out;
}

.slide-out {
    animation: slide-out-frames 0.4s ease-in-out;
}

@keyframes slide-in-frames {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(0px); }
}

@keyframes slide-out-frames {
    0% { transform: translateX(0px); }
    100% { transform: translateX(-100%); }
}
</style>

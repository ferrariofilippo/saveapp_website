<template>
    <h1 class="text-6xl text-emerald-700 font-semibold dark:text-emerald-500 mb-2">
        SaveApp CLI
    </h1>
    <p>
        A simple cli-tool to analyze your SaveApp data.
    </p>
    <h3 class="text-2xl text-emerald-700 font-semibold dark:text-emerald-500 mt-6 mb-2">
        Get Started
    </h3>
    <ul class="list-decimal list-inside ms-4">
        <li class="mb-3">
            Install <a href="https://www.python.org/"
                class="underline hover:text-emerald-700 dark:hover:text-emerald-500">Python</a>
        </li>
        <li class="mb-3">
            Install <a href="https://matplotlib.org/"
                class="underline hover:text-emerald-700 dark:hover:text-emerald-500">matplotlib</a>:
            <div class="px-5 rounded-lg bg-neutral-200 dark:bg-neutral-700 m-2 w-full flex justify-between">
                <span class="my-auto">
                    <code>
                        python3 -m pip install matplotlib
                    </code>
                </span>
                <button @click="copy('python3 -m pip install matplotlib', 'matplotlib')" type="button"
                    class="flex items-center rounded-lg p-2">
                    <ClipboardIcon
                        :class="(data.copied['matplotlib'] ? 'text-emerald-700 dark:text-emerald-300' : '') + 'h-6 w-6 font-bold'" />
                </button>
            </div>
        </li>
        <li class="mb-3">
            Set your <span class="text-emerald-700 dark:text-emerald-500 font-semibold">.csv</span> file path:
            <div class="py-2 px-5 rounded-lg bg-neutral-200 dark:bg-neutral-700 m-2 w-full">
                <code>
                    YOUR_FILE_PATH = 'INSERT PATH TO YOUR FILE HERE'
                </code>
            </div>
        </li>
        <li class="mb-3">
            Set your custom thresholds:
            <div class="py-2 px-5 rounded-lg bg-neutral-200 dark:bg-neutral-700 m-2 w-full">
                <code>
                    thresholds = [ 10, 50, 200, 1000 ]
                </code>
            </div>
        </li>
        <li>
            You are good to go!
        </li>
    </ul>
    <h3 class="text-2xl text-emerald-700 font-semibold dark:text-emerald-500 mt-6">
        Options
    </h3>
    <p>
        Except for <span class="text-emerald-700 dark:text-emerald-500 font-semibold">-h</span>,
        each option should be preceeded by the list of income tags ids. See the example below:
    </p>
    <div class="py-2 px-5 rounded-lg bg-neutral-200 dark:bg-neutral-700 m-2 w-full">
        <code>
            python3 ./main.py 1 2 -g
        </code>
    </div>
    <ul class="list-disc list-inside ms-4">
        <li class="mb-2">
            <span class="text-emerald-700 dark:text-emerald-500 font-semibold me-3">-s</span> print statistics
        </li>
        <li class="mb-2">
            <span class="text-emerald-700 dark:text-emerald-500 font-semibold me-3">-c</span> create a .csv
            file containing the net-worth for each month
        </li>
        <li class="mb-2">
            <span class="text-emerald-700 dark:text-emerald-500 font-semibold me-3">-g</span> open the graph menu
        </li>
        <li>
            <span class="text-emerald-700 dark:text-emerald-500 font-semibold me-3">-h</span> show the help menu
        </li>
    </ul>
    <h3 class="text-2xl text-emerald-700 font-semibold dark:text-emerald-500 mt-6">
        Code
    </h3>
    <p>
        All the code is available on
        <a href="https://github.com/ferrariofilippo/SaveApp_Tools/tree/master/CLI"
            class="underline hover:text-emerald-700 dark:hover:text-emerald-500">
            GitHub</a>.
    </p>
</template>

<script setup>
import { ClipboardIcon } from "@heroicons/vue/24/outline";

definePageMeta({
    layout: 'docs'
})

const data = reactive({
    copied: {
        'matplotlib': false
    }
})

function copy(str, key) {
    navigator.clipboard.writeText(str);
    data.copied[key] = true;
}
</script>

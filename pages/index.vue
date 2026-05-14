<template>
    <div>
        <!-- Hero -->
        <section class="min-h-[calc(100vh-3.5rem)] flex items-center bg-white dark:bg-neutral-900">
            <div class="max-w-6xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
                <div class="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div class="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
                        <span
                            class="bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                            Android
                        </span>
                        <span
                            class="bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                            Open Source
                        </span>
                        <span
                            class="bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                            Free
                        </span>
                    </div>
                    <h1
                        class="text-5xl lg:text-7xl font-bold text-emerald-700 dark:text-white leading-[1.08] mb-6 tracking-tight">
                        Budgeting<br />made simple.
                    </h1>
                    <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-10 max-w-md leading-relaxed">
                        Track expenses, set budgets, and visualize your finances.<br />
                        No account. No ads. Completely free.
                    </p>
                    <div class="flex flex-col sm:flex-row items-center gap-4">
                        <a href="https://play.google.com/store/apps/details?id=com.ferrariofilippo.saveapp&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                            <img class="h-14"
                                alt="Get it on Google Play"
                                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" />
                        </a>
                        <a href="https://github.com/ferrariofilippo/SaveApp_Kotlin"
                            class="flex items-center gap-2 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-emerald-700 hover:text-emerald-700 dark:hover:border-emerald-500 dark:hover:text-emerald-400 font-semibold px-5 py-3 rounded-lg transition-colors text-sm">
                            <CodeBracketIcon class="h-4 w-4" />
                            View on GitHub
                        </a>
                    </div>
                </div>
                <div class="flex justify-center lg:justify-end">
                    <div
                        class="relative mx-auto border-neutral-600 dark:border-neutral-950 bg-neutral-600 dark:bg-neutral-950 xl:rounded-t-[2rem] lg:rounded-t-[1.6rem] sm:rounded-t-[1.25rem] rounded-t-2xl xl:border-t-[18px] lg:border-t-[16px] sm:border-t-[14px] border-t-[12px] xl:border-l-[18px] lg:border-l-[16px] sm:border-l-[14px] border-l-[12px] xl:border-r-[18px] lg:border-r-[16px] sm:border-r-[14px] border-r-[12px] xl:w-[475px] lg:w-[375px] sm:w-[300px] w-[250px] xl:h-[658px] lg:h-[519px] sm:h-[394px] h-[329px]">
                        <div
                            class="xl:h-[53px] lg:h-[42px] sm:h-[32px] h-[27px] lg:w-[10px] w-[3px] bg-neutral-600 dark:bg-neutral-950 absolute xl:-start-[28px] lg:-start-[22px] sm:-start-[17px] -start-[14px] xl:top-[120px] lg:top-[95px] sm:top-[72px] top-[60px] sm:rounded-s-lg rounded-s-md">
                        </div>
                        <div
                            class="xl:h-[77px] lg:h-[61px] sm:h-[46px] h-[38px] lg:w-[10px] w-[3px] bg-neutral-600 dark:bg-neutral-950 absolute xl:-start-[28px] lg:-start-[22px] sm:-start-[17px] -start-[14px] xl:top-[207px] lg:top-[164px] sm:top-[124px] top-[103px] sm:rounded-s-lg rounded-s-md">
                        </div>
                        <div
                            class="xl:h-[77px] lg:h-[61px] sm:h-[46px] h-[38px] lg:w-[10px] w-[3px] bg-neutral-600 dark:bg-neutral-950 absolute xl:-start-[28px] lg:-start-[22px] sm:-start-[17px] -start-[14px] xl:top-[297px] lg:top-[235px] sm:top-[178px] top-[148px] sm:rounded-s-lg rounded-s-md">
                        </div>
                        <div
                            class="xl:h-[77px] lg:h-[61px] sm:h-[46px] h-[38px] lg:w-[10px] w-[3px] bg-neutral-600 dark:bg-neutral-950 absolute xl:-end-[28px] lg:-end-[22px] sm:-end-[17px] -end-[14px] xl:top-[237px] lg:top-[187px] sm:top-[142px] top-[118px] sm:rounded-e-lg rounded-e-md">
                        </div>
                        <div
                            class="overflow-hidden xl:w-[439px] lg:w-[343px] sm:w-[272px] w-[226px] xl:h-[636px] lg:h-[499px] sm:h-[376px] h-[314px] absolute bottom-0">
                            <NuxtImg src="/home_page_cut.png"
                                class="xl:w-[439px] lg:w-[343px] sm:w-[272px] w-[226px] xl:h-[636px] lg:h-[499px] sm:h-[376px] h-[314px]"
                                alt="Home page" format="webp" preload />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features -->
        <section class="py-24 bg-neutral-50 dark:bg-neutral-800">
            <div class="max-w-6xl mx-auto px-4">
                <div class="mb-12">
                    <h2 class="text-4xl font-bold text-emerald-700 dark:text-white mb-3 tracking-tight">
                        Everything you need.
                    </h2>
                    <p class="text-neutral-500 dark:text-neutral-400 text-lg">Powerful tools, zero complexity.</p>
                </div>
                <div class="flex lg:flex-row flex-col gap-12 items-start">
                    <div class="grid sm:grid-cols-2 gap-4 flex-1">
                        <div v-for="f in data.features" :key="f.id" @click="onFeatureSelect(f.id)"
                            :class="[
                                f.isSelected
                                    ? 'border-emerald-600 dark:border-emerald-500 shadow-sm'
                                    : 'border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600',
                                'relative rounded-xl border-2 bg-white dark:bg-neutral-900 p-5 cursor-pointer transition-all duration-200 overflow-hidden'
                            ]">
                            <div
                                :class="[f.isSelected ? 'bg-emerald-600 dark:bg-emerald-500' : 'bg-transparent', 'absolute left-0 top-0 bottom-0 w-1 transition-colors duration-200']" />
                            <h3 class="text-base font-semibold text-neutral-800 dark:text-neutral-100 mb-1 pl-3">
                                {{ f.title }}
                            </h3>
                            <p class="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed pl-3">
                                {{ f.description }}
                            </p>
                        </div>
                    </div>
                    <div class="lg:sticky lg:top-20 flex justify-center shrink-0">
                        <div
                            class="relative mx-auto border-neutral-600 dark:border-neutral-950 bg-neutral-600 dark:bg-neutral-950 sm:border-[14px] border-[12px] sm:rounded-[1.25rem] rounded-2xl sm:h-[632px] h-[528px] sm:w-[300px] w-[250px]">
                            <div
                                class="sm:h-[32px] h-[27px] w-[3px] bg-neutral-600 dark:bg-neutral-950 absolute sm:-start-[17px] -start-[14px] sm:top-[72px] top-[60px] sm:rounded-s-lg rounded-s-md">
                            </div>
                            <div
                                class="sm:h-[46px] h-[38px] w-[3px] bg-neutral-600 dark:bg-neutral-950 absolute sm:-start-[17px] -start-[14px] sm:top-[124px] top-[103px] sm:rounded-s-lg rounded-s-md">
                            </div>
                            <div
                                class="sm:h-[46px] h-[38px] w-[3px] bg-neutral-600 dark:bg-neutral-950 absolute sm:-start-[17px] -start-[14px] sm:top-[178px] top-[148px] sm:rounded-s-lg rounded-s-md">
                            </div>
                            <div
                                class="sm:h-[46px] h-[38px] w-[3px] bg-neutral-600 dark:bg-neutral-950 absolute sm:-end-[17px] -end-[14px] sm:top-[142px] top-[118px] sm:rounded-e-lg rounded-e-md">
                            </div>
                            <div class="overflow-hidden sm:w-[272px] w-[227px] sm:h-[604px] h-[504px]">
                                <NuxtImg :src="data.features[data.oldSelectedId].path"
                                    class="sm:w-[272px] w-[227px] sm:h-[604px] h-[504px]" format="webp"
                                    :alt="data.features[data.oldSelectedId].alt" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Bottom CTA -->
        <section class="bg-emerald-700 dark:bg-emerald-900 py-24">
            <div class="max-w-2xl mx-auto px-4 text-center">
                <h2 class="text-4xl font-bold text-white mb-4 tracking-tight">
                    Take control of your finances.
                </h2>
                <p class="text-emerald-100 text-lg mb-10 leading-relaxed">
                    Free, open-source, no account required.<br />Start budgeting today.
                </p>
                <a href="https://play.google.com/store/apps/details?id=com.ferrariofilippo.saveapp&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                    class="inline-block">
                    <img class="h-16 mx-auto" alt="Get it on Google Play"
                        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" />
                </a>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { CodeBracketIcon } from "@heroicons/vue/24/outline";

class Feature {
    id: number;
    title: string;
    description: string;
    path: string;
    alt: string;
    isSelected: boolean;

    constructor(id: number, title: string, description: string, path: string, alt: string, isSelected = false) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.path = path;
        this.alt = alt;
        this.isSelected = isSelected;
    }
}

useHead({
    title: 'SaveApp — Budgeting Made Simple',
    meta: [
        { name: 'description', content: 'SaveApp is a free, open-source budgeting app for Android. Track expenses, manage budgets, and visualize your finances.' },
        { name: 'icon', content: '/logo_512.png' },
        { name: 'lang', content: 'en' },
        { name: 'og:title', content: 'SaveApp — Budgeting Made Simple' },
        { name: 'og:image', content: '/logo_512.png' },
        { name: 'og:description', content: 'Free, open-source Android budgeting app. Track expenses, manage budgets, visualize your finances.' },
        { name: 'og:url', content: 'https://www.saveapp.cloud' },
        { name: 'twitter:title', content: 'SaveApp — Budgeting Made Simple' },
        { name: 'twitter:description', content: 'Free, open-source Android budgeting app.' },
        { name: 'twitter:image', content: '/logo_512.png' },
        { name: 'twitter:card', content: 'summary' },
    ],
    link: [
        { rel: 'canonical', href: 'https://www.saveapp.cloud/' },
    ],
})

const data = reactive({
    features: getFeatures(),
    oldSelectedId: 0,
});

function getFeatures() {
    return [
        new Feature(0, 'Record Transactions', 'Log your spending instantly and keep every purchase accounted for.', '/transaction_page.png', 'Create transaction page', true),
        new Feature(1, 'Subscriptions', 'Manage recurring payments in one place so nothing slips through.', '/subscriptions_page.png', 'Subscriptions page'),
        new Feature(2, 'Budgets', 'Set spending limits per category and get notified before you overspend.', '/budgets_page.png', 'Budgets page'),
        new Feature(3, 'Tags', 'Organize transactions with fully customizable tags and filters.', '/history_page.png', 'History page'),
        new Feature(4, 'Graphs', 'Visualize your financial data with clear, interactive charts.', '/statistics_page.png', 'Statistics page'),
        new Feature(5, 'Export to CSV', 'Export all your data in one tap for use in Excel or Google Sheets.', '/settings_page.png', 'Settings page'),
    ]
}

function onFeatureSelect(id: number) {
    data.features[data.oldSelectedId].isSelected = false;
    data.features[id].isSelected = true;
    data.oldSelectedId = id;
}
</script>

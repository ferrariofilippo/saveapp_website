<template>
    <div class="flex flex-col">
        <div class="flex flex-col md:min-h-[calc(100vh-3.25rem)] min-h-[calc(100vh-4rem)]">
            <a
                class="my-5 mx-auto"
                href='https://play.google.com/store/apps/details?id=com.ferrariofilippo.saveapp&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
            >
                <img
                    class="h-16"
                    alt='Get it on Google Play'
                    src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
                />
            </a>
            <div class="flex md:flex-row flex-col min-h-[calc(100vh-4rem-4rem)] w-screen">
                <div class="md:w-1/2 w-full min-h-full flex flex-col justify-center">
                    <div
                        class="flex flex-wrap gap-y-4 justify-center"
                    >
                        <span
                            class="bg-neutral-100 text-emerald-900 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-neutral-700 dark:text-neutral-300 border-emerald-700 border dark:border-0"
                        >
                            Android
                        </span>
                        <span
                            class="bg-neutral-100 text-emerald-900 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-neutral-700 dark:text-neutral-300 border-emerald-700 border dark:border-0"
                        >
                            Open-Source
                        </span>
                        <span
                            class="bg-neutral-100 text-emerald-900 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-neutral-700 dark:text-neutral-300 border-emerald-700 border dark:border-0"
                        >
                            Free
                        </span>
                    </div>
                    <h1
                        class="xl:text-5xl lg:text-4xl text-3xl font-semibold mx-auto py-4 text-center text-emerald-700 dark:text-white"
                    >
                        Budgeting made simple.
                    </h1>
                    <p
                        class="text-center sm:mx-16 mx-4 text-neutral-700 dark:text-neutral-200"
                    >
                        Take your first step into the budgeting world thanks to SaveApp. <br />
                        Track your expenses quickly and easily. See summaries and statistics.<br />
                        <span
                            class="text-neutral-900 dark:text-neutral-50 font-medium"
                        >
                            And even more.
                        </span>
                    </p>
                    <p
                        class="text-center sm:mx-16 mx-4 text-neutral-700 dark:text-neutral-200 pt-2"
                    >
                        Keep scrolling to see the core features...
                    </p>
                </div>
                <div class="md:w-1/2 w-full min-h-full flex flex-col justify-center my-12">
                    <div
                       class="relative mx-auto border-neutral-600 dark:border-neutral-950 bg-neutral-600 dark:bg-neutral-950 sm:border-[14px] border-[12px] sm:rounded-[1.25rem] rounded-2xl sm:h-[632px] h-[528px] sm:w-[300px] w-[250px]"
                    >
                       <div
                            class="sm:h-[32px] h-[27px] w-[3px] bg-neutral-600 dark:bg-neutral-950 absolute sm:-start-[17px] -start-[14px] sm:top-[72px] top-[60px] sm:rounded-s-lg rounded-s-md"
                        >
                        </div>
                        <div
                            class="sm:h-[46px] h-[38px] w-[3px] bg-neutral-600 dark:bg-neutral-950 absolute sm:-start-[17px] -start-[14px] sm:top-[124px] top-[103px] sm:rounded-s-lg rounded-s-md"
                        >
                        </div>
                        <div
                            class="sm:h-[46px] h-[38px] w-[3px] bg-neutral-600 dark:bg-neutral-950 absolute sm:-start-[17px] -start-[14px] sm:top-[178px] top-[148px] sm:rounded-s-lg rounded-s-md"
                        >
                        </div>
                        <div
                            class="sm:h-[46px] h-[38px] w-[3px] bg-neutral-600 dark:bg-neutral-950 absolute sm:-end-[17px] -end-[14px] sm:top-[142px] top-[118px] sm:rounded-e-lg rounded-e-md"
                        >
                        </div>
                        <div class="overflow-hidden sm:w-[272px] w-[227px] sm:h-[604px] h-[504px]">
                            <NuxtImg
                                src="/home_page.png"
                                class="sm:w-[272px] w-[227px] sm:h-[604px] h-[504px]"
                                alt="Home page"
                                format="webp"
                                preload
                            /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex lg:flex-row flex-col min-h-screen w-screen py-16 bg-neutral-50 dark:bg-[#222222]">
            <div class="flex flex-col 2xl:w-4/7 xl:w-7/12 lg:w-2/3 w-full my-auto p-5 xl:ms-16 lg:ms-8 lg:me-0 mx-1">
                <h2 class="text-2xl font-semibold">Supported features:</h2>
                <div class="grid sm:grid-cols-2 grid-cols-1 gap-4 my-5">
                    <div
                        v-for="f in data.features"
                        @click="() => onFeatureSelect(f.id)"
                        :class="[f.isSelected ? 'border-emerald-700 dark:border-emerald-500' : 'border-neutral-200 dark:border-neutral-900', 'bg-gradient-to-tr from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-700 rounded-md border-2 h-32 w-full p-3 hover:border-emerald-700 dark:hover:border-emerald-500']"
                    >
                        <h3 class="text-xl font-semibold text-neutral-800 dark:text-neutral-100">{{ f.title }}</h3>
                        <p class="text-neutral-700 dark:text-neutral-200">{{ f.description }}</p>
                    </div>
                </div>
            </div>
            <div class="2xl:w-3/7 xl:w-5/12 lg:w-1/3 w-full my-auto flex justify-center">
                <div
                    class="relative mx-auto border-neutral-600 dark:border-neutral-950 bg-neutral-600 dark:bg-neutral-950 sm:border-[14px] border-[12px] sm:rounded-[1.25rem] rounded-2xl sm:h-[632px] h-[528px] sm:w-[300px] w-[250px]"
                >
                    <div
                        class="sm:h-[32px] h-[27px] w-[3px] bg-neutral-600 dark:bg-neutral-950 absolute sm:-start-[17px] -start-[14px] sm:top-[72px] top-[60px] sm:rounded-s-lg rounded-s-md"
                    >
                    </div>
                    <div
                        class="sm:h-[46px] h-[38px] w-[3px] bg-neutral-600 dark:bg-neutral-950 absolute sm:-start-[17px] -start-[14px] sm:top-[124px] top-[103px] sm:rounded-s-lg rounded-s-md"
                    >
                    </div>
                    <div
                        class="sm:h-[46px] h-[38px] w-[3px] bg-neutral-600 dark:bg-neutral-950 absolute sm:-start-[17px] -start-[14px] sm:top-[178px] top-[148px] sm:rounded-s-lg rounded-s-md"
                    >
                    </div>
                    <div
                        class="sm:h-[46px] h-[38px] w-[3px] bg-neutral-600 dark:bg-neutral-950 absolute sm:-end-[17px] -end-[14px] sm:top-[142px] top-[118px] sm:rounded-e-lg rounded-e-md"
                    >
                    </div>
                    <div class="overflow-hidden sm:w-[272px] w-[227px] sm:h-[604px] h-[504px]">
                        <NuxtImg
                            :src="data.features[data.oldSelectedId].path"
                            class="sm:w-[272px] w-[227px] sm:h-[604px] h-[504px]"
                            format="webp"
                            :alt="data.features[data.oldSelectedId].alt"
                        /> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
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
    title: 'SaveApp @ Home',
    meta: [
        { name: 'description', content: 'SaveApp, an open-source budgeting Android app.' },
        { name: 'icon', content: '/logo_512.png' },
        { name: 'lang', content: 'en' },
        { name: 'og:title', content: 'SaveApp' },
        { name: 'og:image', content: '/logo_512.png' },
        { name: 'og:description', content: 'SaveApp, an open-source budgeting Android app.' },
        { name: 'og:url', content: 'https://saveapp.vercel.app' },
        { name: 'twitter:title', content: 'SaveApp' },
        { name: 'twitter:description', content: 'SaveApp, an open-source budgeting Android app.' },
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
        new Feature(
            0,
            'Record Movements',
            'Save your movements to track them.',
            '/new_movement_page.png',
            'Create movement page',
            true
        ),
        new Feature(
            1,
            'Subscriptions',
            'Use subscriptions to manage recurring movements.',
            '/subscriptions_page.png',
            'Subscriptions page'
        ),
        new Feature(
            2,
            'Budgets',
            'Create budgets to manage your money.',
            '/budgets_page.png',
            'Budgets page'
        ),
        new Feature(
            3,
            'Tags',
            'Organize your movements using custom tags.',
            '/history_page.png',
            'History page'
        ),
        new Feature(
            4,
            'Graphs',
            'Visualize movements\' statistics using graphs.',
            '/statistics_page.png',
            'Statistics page'
        ),
        new Feature(
            5,
            'Export to .csv',
            'Quickly export your data to .csv to edit it using Excel or Sheets.',
            '/settings_page.png',
            'Settings page'
        ),
    ]
}

function onFeatureSelect(id: number) {
    data.features[data.oldSelectedId].isSelected = false;
    data.features[id].isSelected = true;
    data.oldSelectedId = id;
}
</script>

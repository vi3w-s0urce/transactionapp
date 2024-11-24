<script setup lang="ts">
import { IonIcon } from "@ionic/vue";
import { cubeOutline, easelOutline, logOutOutline, personCircleOutline, receiptOutline } from "ionicons/icons";
import { useRouter } from "vue-router";

const router = useRouter();

const navigatePage = (name: string) => {
    router.push({ name });
};
</script>

<template>
    <aside class="fixed top-0 left-0 bg-white h-[100dvh] w-[300px] rounded-r-3xl flex flex-col justify-between border-r-2 border-emerald-200">
        <div class="flex flex-col">
            <h1 class="text-2xl mx-auto mt-6 text-emerald-600 font-bold">TransactionApp</h1>
            <div class="flex flex-col gap-3 px-5 mt-8">
                <div class="bg-emerald-200 flex items-center px-3 py-2 rounded-xl gap-3 text-emerald-600 cursor-pointer" @click="navigatePage('dashboard')">
                    <IonIcon :icon="easelOutline" class="text-[20px]" />
                    <p class="font-semibold">Dashboard</p>
                </div>
                <div
                    class="flex items-center px-3 py-2 rounded-xl gap-3 text-slate-600 cursor-pointer hover:bg-slate-200 transition-colors"
                    @click="navigatePage('product')"
                >
                    <IonIcon :icon="cubeOutline" class="text-[20px]" />
                    <p class="font-semibold">Product</p>
                </div>
                <div class="flex items-center px-3 py-2 rounded-xl gap-3 text-slate-600 cursor-pointer hover:bg-slate-200 transition-colors">
                    <IonIcon :icon="receiptOutline" class="text-[20px]" />
                    <p class="font-semibold">Transaction</p>
                </div>
            </div>
        </div>
        <div class="flex flex-col my-6">
            <div class="flex flex-col gap-3 px-5 mt-8">
                <div class="flex items-center px-2 py-2 rounded-xl gap-2">
                    <div class="h-[42px]">
                        <IonIcon :icon="personCircleOutline" class="text-[42px]" />
                    </div>
                    <div class="flex flex-col">
                        <p class="font-semibold">Alex Sweneger</p>
                        <div class="flex flex-col">
                            <p class="text-xs text-slate-500">alexganteng032@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div class="flex items-center px-3 py-2 rounded-xl gap-3 text-red-500 cursor-pointer hover:bg-red-100 transition-colors">
                    <IonIcon :icon="logOutOutline" class="text-[20px]" />
                    <p class="font-semibold">Logout</p>
                </div>
            </div>
        </div>
    </aside>
</template>

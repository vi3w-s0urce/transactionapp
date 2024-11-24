<script setup lang="ts">
import GraphLine from "@/components/dashboard/GraphLine.vue";
import { IonIcon } from "@ionic/vue";
import { cube, receipt, receiptOutline, today } from "ionicons/icons";
import { Button, Skeleton } from "primevue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

const products = [
    {
        id: "1",
        invoiceNo: "INV-098132",
        customer: "Samuel Smith",
        date: "06/24/2025",
        totalProduct: 2,
    },
    {
        id: "2",
        invoiceNo: "INV-098132",
        customer: "Samuel Smith",
        date: "06/24/2025",
        totalProduct: 2,
    },
    {
        id: "3",
        invoiceNo: "INV-098132",
        customer: "Samuel Smith",
        date: "06/24/2025",
        totalProduct: 2,
    },
    {
        id: "4",
        invoiceNo: "INV-098132",
        customer: "Samuel Smith",
        date: "06/24/2025",
        totalProduct: 2,
    },
    {
        id: "5",
        invoiceNo: "INV-098132",
        customer: "Samuel Smith",
        date: "06/24/2025",
        totalProduct: 2,
    },
];
</script>

<template>
    <GlobalLayout>
        <!-- TITLE -->
        <div class="flex flex-col gap-1 mb-6">
            <h1 class="text-2xl font-semibold">Welcome to TransactionApp</h1>
            <p class="text-sm text-slate-500">Dashboard summary information for you</p>
        </div>
        <!-- SUMMARY INFORMATION -->
        <div class="w-full flex gap-6">
            <div class="grow bg-white flex items-center p-4 rounded-2xl gap-4">
                <div class="w-[72px] h-[72px] flex items-center justify-center bg-emerald-100 rounded-xl">
                    <IonIcon :icon="cube" class="text-[38px] text-emerald-600" />
                </div>
                <div class="flex flex-col gap-1">
                    <h1 class="text-3xl font-bold">30</h1>
                    <p class="text-slate-500 text-sm">Total of your products</p>
                </div>
            </div>
            <div class="grow bg-white flex items-center p-4 rounded-2xl gap-4">
                <div class="w-[72px] h-[72px] flex items-center justify-center bg-emerald-100 rounded-xl">
                    <IonIcon :icon="receipt" class="text-[38px] text-emerald-600" />
                </div>
                <div class="flex flex-col gap-1">
                    <h1 class="text-3xl font-bold">12</h1>
                    <p class="text-slate-500 text-sm">Total of your transaction</p>
                </div>
            </div>
            <div class="grow bg-white flex items-center p-4 rounded-2xl gap-4">
                <div class="w-[72px] h-[72px] flex items-center justify-center bg-emerald-100 rounded-xl">
                    <IonIcon :icon="today" class="text-[38px] text-emerald-600" />
                </div>
                <div class="flex flex-col gap-1">
                    <h1 class="text-3xl font-bold">4</h1>
                    <p class="text-slate-500 text-sm">Your transaction Today</p>
                </div>
            </div>
        </div>
        <!-- GRAPH TRANSACTION -->
        <div class="w-full mt-6 bg-white p-6 rounded-2xl">
            <div class="flex flex-col gap-1 mb-4">
                <h1 class="text-2xl font-semibold">Transaction Analytics</h1>
                <p class="text-sm text-slate-500">Transactions data in the last week</p>
            </div>
            <GraphLine />
        </div>
        <!-- PRODUCT AND TRANSACTION SUMMARY -->
        <div class="flex gap-6 mt-6">
            <!-- PRODUCT -->
            <div class="rounded-2xl bg-white p-5 w-1/2 h-fit">
                <h1 class="text-2xl font-semibold mb-1">Best Selling Product</h1>
                <div class="flex flex-col">
                    <div class="flex items-center justify-between py-4 border-b-[1px] gap-3">
                        <div class="flex items-center gap-4">
                            <Skeleton class="!w-[100px] !h-[72px]" />
                            <div class="flex flex-col gap-2">
                                <h3 class="text-lg font-semibold">Kacang Borobudur</h3>
                                <div class="flex items-center gap-2">
                                    <div class="bg-emerald-100 rounded-lg py-1 px-2">
                                        <p class="text-sm font-medium text-emerald-600">Sold: 10</p>
                                    </div>
                                    <div class="bg-slate-200 rounded-lg py-1 px-2">
                                        <p class="text-sm font-medium">Stock: 20</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 class="text-xl font-semibold mr-4 text-nowrap">Rp 200.000</h1>
                    </div>
                    <div class="flex items-center justify-between py-4 border-b-[1px] gap-3">
                        <div class="flex items-center gap-4">
                            <Skeleton class="!w-[100px] !h-[72px]" />
                            <div class="flex flex-col gap-2">
                                <h3 class="text-lg font-semibold">Kacang Borobudur</h3>
                                <div class="flex items-center gap-2">
                                    <div class="bg-emerald-100 rounded-lg py-1 px-2">
                                        <p class="text-sm font-medium text-emerald-600">Sold: 10</p>
                                    </div>
                                    <div class="bg-slate-200 rounded-lg py-1 px-2">
                                        <p class="text-sm font-medium">Stock: 20</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 class="text-xl font-semibold mr-4 text-nowrap">Rp 200.000</h1>
                    </div>
                    <div class="flex items-center justify-between py-4 border-b-[1px] gap-3">
                        <div class="flex items-center gap-4">
                            <Skeleton class="!w-[100px] !h-[72px]" />
                            <div class="flex flex-col gap-2">
                                <h3 class="text-lg font-semibold">Kacang Borobudur</h3>
                                <div class="flex items-center gap-2">
                                    <div class="bg-emerald-100 rounded-lg py-1 px-2">
                                        <p class="text-sm font-medium text-emerald-600">Sold: 10</p>
                                    </div>
                                    <div class="bg-slate-200 rounded-lg py-1 px-2">
                                        <p class="text-sm font-medium">Stock: 20</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 class="text-xl font-semibold mr-4 text-nowrap">Rp 200.000</h1>
                    </div>
                </div>
            </div>
            <!-- TRANSACTION -->
            <div class="rounded-2xl bg-white p-5 w-1/2 h-fit">
                <h1 class="text-2xl font-semibold mb-4">Last Transaction</h1>
                <DataTable :value="products" size="small" tableClass="w-full text-sm">
                    <Column
                        field="invoiceNo"
                        header="Invoice No"
                        headerClass="!border-none !bg-slate-200 !rounded-l-lg !py-3 !px-3"
                        bodyClass="!py-3 !font-semibold !text-slate-500"
                    ></Column>
                    <Column field="customer" header="Customer" headerClass="!border-none !bg-slate-200 !py-3 !px-3" bodyClass="!py-3 !font-semibold"></Column>
                    <Column field="date" header="Date" headerClass="!border-none !bg-slate-200 !py-3 !px-3" bodyClass="!py-3 !font-semibold"></Column>
                    <Column
                        field="totalProduct"
                        header="Total Product"
                        headerClass="!border-none !bg-slate-200 !py-3 !px-3"
                        bodyClass="!py-3 !font-semibold"
                    ></Column>
                    <Column header="Action" headerClass="!border-none !bg-slate-200 !rounded-r-lg !py-3 !px-3" bodyClass="!py-3 !font-semibold !text-slate-500">
                        <template #body>
                            <Button class="!text-xs !w-fit !min-w-0 !px-2 !py-2 !bg-transparent !border-0 hover:!bg-emerald-200"
                                ><IonIcon :icon="receiptOutline" class="text-[20px] text-emerald-600"
                            /></Button>
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    </GlobalLayout>
</template>

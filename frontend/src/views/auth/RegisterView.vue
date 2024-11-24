<script setup lang="ts">
import { call, logoGithub, logoLinkedin, mail, pencil, person } from "ionicons/icons";
import { IonIcon } from "@ionic/vue";
import { Button, FloatLabel, IconField, InputIcon, InputNumber, InputText, Password } from "primevue";
import { RouterLink } from "vue-router";
</script>

<template>
    <div class="flex items-center justify-center h-[100dvh] w-full bg-gradient-to-br from-slate-200 to-emerald-100 px-12">
        <main class="flex max-w-[1200px] w-full bg-white max-h-[700px] h-full border-[2px] border-emerald-200 rounded-3xl overflow-hidden">
            <!-- ILLUSTRATION -->
            <section class="w-1/2 bg-[#10b981] h-full flex flex-col items-center justify-center p-6 relative">
                <img src="/assets/svg/loginImg.svg" alt="login-image" class="max-w-[424px]" />
                <div class="flex flex-col mt-10 items-center gap-1">
                    <h1 class="text-white font-bold text-2xl">TransactionApp</h1>
                    <p class="text-white">Always Note Your Transactions of Your Product</p>
                </div>
                <div class="flex items-center absolute bottom-12 gap-6">
                    <a href="https://github.com/vi3w-s0urce" class="flex items-center gap-2" target="_blank">
                        <IonIcon :icon="logoGithub" class="text-[26px] text-white" />
                    </a>
                    <a href="https://www.linkedin.com/in/vi3w-s0urce" class="flex items-center gap-2" target="_blank">
                        <IonIcon :icon="logoLinkedin" class="text-[26px] text-white" />
                    </a>
                </div>
            </section>
            <!-- FORM -->
            <section class="w-1/2 h-full flex flex-col items-center justify-center">
                <div class="rounded-full flex items-center justify-center bg-emerald-200 w-[56px] h-[56px] mb-4">
                    <IonIcon :icon="pencil" class="text-emerald-600 text-[32px]" />
                </div>
                <div class="flex flex-col gap-1 items-center">
                    <h1 class="text-3xl font-semibold">Let's Get Started!</h1>
                    <p class="text-sm text-center text-zinc-500">Make your account with fill the form below</p>
                </div>
                <form class="mt-6 max-w-[352px] w-full">
                    <div class="flex flex-col items-center justify-center gap-4">
                        <FloatLabel variant="on" class="!w-full">
                            <IconField>
                                <InputText id="name" type="name" class="!w-full" />
                                <InputIcon>
                                    <IonIcon :icon="person" class="text-zinc-400" />
                                </InputIcon>
                            </IconField>
                            <label for="name" class="!font-normal">Name</label>
                        </FloatLabel>
                        <FloatLabel variant="on" class="!w-full">
                            <IconField>
                                <InputText id="email" type="email" class="!w-full" />
                                <InputIcon>
                                    <IonIcon :icon="mail" class="text-zinc-400" />
                                </InputIcon>
                            </IconField>
                            <label for="email" class="!font-normal">Email</label>
                        </FloatLabel>
                        <FloatLabel variant="on" class="!w-full">
                            <IconField>
                                <InputNumber inputId="phone" prefix="+" :useGrouping="false" class="!w-full" />
                                <InputIcon>
                                    <IonIcon :icon="call" class="text-zinc-400" />
                                </InputIcon>
                            </IconField>
                            <label for="phone" class="!font-normal">Phone Number</label>
                        </FloatLabel>
                        <FloatLabel variant="on" class="!w-full">
                            <Password id="password" fluid toggleMask />
                            <label for="password" class="!font-normal">Password</label>
                        </FloatLabel>
                    </div>
                    <Button label="Register" class="!text-sm !font-bold mt-5 w-full" />
                    <p class="mt-4 text-xs text-slate-500 text-center">
                        Already have an account? <RouterLink :to="{ name: 'login' }" class="text-emerald-600 font-semibold">Login</RouterLink>
                    </p>
                </form>
            </section>
        </main>
    </div>
</template>

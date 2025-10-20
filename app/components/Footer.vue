<template>
    <div class="bg-gray-400 h-[50vh] ">

        <div class="flex items-center gap-4 flex-row-reverse countainer pt-4">
            <NuxtImg src="/img/Logo/logo.svg" class="filter brightness-[10%]" alt="logo" width="150" height="50" />
            <span class="h-[1px] w-full border-t border-black "></span>
        </div>

        

        <div  class="countainer flex justify-center gap-[10rem] items-baseline" >
            <div class="w-[290px] h-[300px]">
                <FooterContactus />
            </div>
            <FooterLinks dir="rtl" class="w-[62%] " />
        </div>

        <div class="download"></div>

        <div class="about-us"></div>

        <div class="subText"></div>



    </div>
</template>

<style scoped>
    .countainer{
        width: 85%;
        margin: auto;
    }
</style>
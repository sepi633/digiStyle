<template>
    <div class="bg-gray-400 ">

        <div class="flex items-center gap-4 countainer pt-4">
            <NuxtImg src="/img/Logo/logo.svg" class="filter brightness-[10%]" alt="logo" width="150" height="50" />
            <span class="h-[1px] w-full border-t border-black "></span>
        </div>



        <div class="countainer flex justify-center gap-[10rem] items-baseline">
            <FooterLinks dir="rtl" class="w-[62%] " />
            <div class="w-[290px] h-[300px]">
                <FooterContactus />
            </div>
        </div>

        <FooterDownload />

        <div class="about-us flex gap-10 w-[85%] justify-between mx-auto">

            <div class="about ">
                <h3>فروشگاه اینترنتی مد و لباس دیجی‌استایل</h3>
                <p>دیجی‌استایل، پس از تجربه‌ی موفق فروشگاه اینترنتی دیجی‌کالا به صورت تخصصی پا به عرصه مد، پوشاک و سبک
                    زندگی گذاشت تا همان تجربه‌ی شیرین، در قالبی نو تکرار شود. در دیجی ‌استایل می‌توانید همه آنچه مرتبط
                    با مد و پوشاک از انواع لباس زنانه، لباس مردانه و لباس بچگانه گرفته تا کیف و کفش و اکسسوری را با
                    تخفیف ویژه در حراج ها، پیدا کنید و به سادگی یک ست کامل از جدیدترین‌ برندهای معتبر را بخرید.</p>
            </div>
            <FooterCertificate  />

        </div>

        <div class="subText"></div>



    </div>
</template>

<style scoped>
.countainer {
    width: 85%;
    margin: auto;
}
</style>
<template>
    <div class=" ">

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

        <FooterDownload class="-mt-20" />

        <div class="about-us flex gap-10 w-[85%] justify-between mx-auto">

            <div class="about ">
                <h3 class="text-[var(--color-text)] mb-2">فروشگاه اینترنتی مد و لباس دیجی‌استایل</h3>
                <p class="text-justify text-[var(--color-muted)] text-sm">دیجی‌استایل، پس از تجربه‌ی موفق فروشگاه
                    اینترنتی دیجی‌کالا به صورت تخصصی پا به عرصه مد، پوشاک و سبک
                    زندگی گذاشت تا همان تجربه‌ی شیرین، در قالبی نو تکرار شود. در دیجی ‌استایل می‌توانید همه آنچه مرتبط
                    با مد و پوشاک از انواع لباس زنانه، لباس مردانه و لباس بچگانه گرفته تا کیف و کفش و اکسسوری را با
                    تخفیف ویژه در حراج ها، پیدا کنید و به سادگی یک ست کامل از جدیدترین‌ برندهای معتبر را بخرید.
                </p>

                <NuxtLink to="/more"
                    class="flex items-center text-xs text-[var(--color-text)] gap-1.5 mt-4 duration-200 ">
                    <span>مشاهده بیشتر</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <!-- Icon from Lucide by Lucide Contributors -->
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" d="m12 19l-7-7l7-7m7 7H5" />
                    </svg>
                </NuxtLink>
            </div>
            <FooterCertificate />

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
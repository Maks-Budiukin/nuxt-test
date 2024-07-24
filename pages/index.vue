<template>
    <HeroSection />

    <NavBar :page="'home'" />

    <ExperienceSection />

    <PortfolioSection :data="data" />

    <SkillsSection />
</template>

<script setup>

const { data } = await useApi()

</script>

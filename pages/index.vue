<template>
    <HeroSection />

    <NavBar :page="'home'" />

    <ExperienceSection />

    <PortfolioSection :data="data" />

    <SkillsSection />

    <ContactsSection />

</template>

<script setup>

const { data } = await useApi()

</script>

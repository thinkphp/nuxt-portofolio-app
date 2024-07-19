<template>
    <header id="header" class="fixed top-0 left-0 w-full z-10 bg-bodyColor">
        <nav class="flex justify-between items-center h-14 max-w-screen-lg mx-4 md:mx-auto text-menuColorAlt">
            <a href="#" class="text-menuColorAlt font-medium duration-300 hover:text-menuColor group">
                THIS<div class="inline text-menuColor group-hover:text-menuColorAlt">IS</div>ME
            </a>

            <div data-aos="fade-up"
                class="fixed bg-navColor bottom-5 rounded-[4rem] py-4 px-9 w-[90%] backdrop-blur md:w-[328px] md:left-0 md:right-0 md:my-0 md:mx-auto">
                <ul class="flex justify-between items-center">
                    <li class="nav-item" v-for="menu in menuList" :key="menu.name">
                        <a @click="toggleMenu(menu.name)" :href="menu.link"
                            class="flex rounded-[5rem] p-[0.4rem] text-xl active-link text-textColor hover:bg-activeMenu hover:text-titleColor hover:shadow-customShadow transition-all duration-100"
                            :class="{ 'bg-activeMenu text-titleColor shadow-customShadow': menuActive === menu.name }">
                            <i class="bx" :class="menu.icon"></i>
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Theme Toggle -->
            <i class="bx bx-moon text-xl duration-300 cursor-pointer hover:text-menuColor" id="theme-toggle"></i>
        </nav>
    </header>
</template>

<script>
import { defineComponent, ref } from 'vue';

const menuList = [
    {
        name: 'home',
        link: '#home',
        icon: 'bx-home-alt'
    },
    {
        name: 'about',
        link: '#about',
        icon: 'bx-user'
    },
    {
        name: 'skills',
        link: '#skills',
        icon: 'bx-code-block'
    },
    {
        name: 'certificates',
        link: '#certificates',
        icon: 'bx-badge-check'
    },
    {
        name: 'works',
        link: '#works',
        icon: 'bx-briefcase'
    },
    // {
    //     name: 'portfolio',
    //     link: '#portfolio',
    //     icon: 'bx-book-content'
    // },
    {
        name: 'contacts',
        link: '#contacts',
        icon: 'bx-phone'
    },
]

export default defineComponent({
    name: 'Header',
    setup() {
        const menuActive = ref('home');

        const toggleMenu = (value) => {
            menuActive.value = value;
        }

        const onScroll = () => {
            const sections = document.querySelectorAll('section');
            let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

            sections.forEach(section => {
                if (scrollPosition >= section.offsetTop - section.offsetHeight / 2 &&
                    scrollPosition < section.offsetTop + section.offsetHeight / 2) {
                    menuActive.value = section.id;
                }
            });
        }

        return {
            menuList,
            menuActive,
            toggleMenu,
            onScroll
        }
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll);
    }
})
</script>
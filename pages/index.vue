<template>
  <div>
    <main class="overflow-hidden">
      <!-- Hero Section -->
      <Section id="home">
        <div
          class="relative gap-y-[4.5rem] md:pt-8 md:grid-cols-2 md:items-center md:px-16 max-w-screen-lg mx-4 md:mx-auto grid gap-5">
          <div class="text-center md:text-left" data-aos="fade-up">
            <span class="block text-textColor font-medium text-sm mb-1">Hello, my name is</span>
            <h1 class="text-3xl font-bold mb-1">{{ data.main.full_name }}</h1>
            <h2 class="text-xl font-medium text-menuColorAlt">{{ data.main.job_title }}</h2>

            <div class="flex justify-center md:justify-start gap-4 mt-8 font-medium">
              <a href="#"
                class="inline border-solid border-2 border-navColor py-2 px-3 rounded bg-navColor hover:bg-transparent duration-200 transition-colors">Download
                CV</a>
              <a href="#about"
                class="inline border-solid border-2 border-navColor py-2 px-3 rounded hover:bg-navColor duration-200 transition-colors">About
                Me</a>
            </div>
          </div>

          <!-- Images Profile -->
          <div data-aos="zoom-in"
            class="w-[150px] h-[210px] sm:w-[190px] sm:h-[290px] md:w-[290px] md:h-[400px] justify-self-center flex items-end justify-center overflow-hidden bg-gradient-to-tr from-menuColorAlt via-30% to-navColor rounded-t-[10rem] rounded-b-2xl ">
            <img :src="data.main.profile_photo_path_1" alt="my-image" class="w-[140px] sm:w-[180px] md:w-[260px]">
          </div>

          <!-- Social Media -->
          <div data-aos="fade-right"
            class="absolute left-0 bottom-[8rem] grid gap-y-2 after:content-[''] after:w-[32px] after:md:w-[50px] after:h-[2px] after:bg-menuColor after:rotate-90 after:translate-y-6 after:md:translate-y-8 after:translate-x-[-3px] after:md:translate-x-[-11px] text-titleColor">
            <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank"
              class="w-max flex justify-center items-center p-1 bg-textColor rounded hover:bg-menuColorAlt">
              <i class="bx md:text-[1.15rem]" :class="social.icon"></i>
            </a>
          </div>

          <!-- Scroll Down About -->
          <a href="#about" data-aos="fade-left"
            class="absolute right-[-1.5rem] bottom-[8rem] grid justify-center gap-y-2 text-textColor group">
            <i class="bx bx-mouse text-xl group-hover:text-menuColorAlt translate-x-[30px] translate-y-[-25px]"></i>
            <span class="inline rotate-90 text-sm group-hover:text-menuColorAlt">Scroll Down</span>
          </a>
        </div>
      </Section>

      <!-- About Section -->
      <Section id="about">
        <h2
          class="relative w-max mb-1 mx-auto px-1 text-center text-[1.25rem] font-bold text-menuColor z-[1] before:content-[''] before:inline-block before:w-[160px] before:h-[1px] before:bg-menuColorAlt before:absolute before:bottom-2/4 before:left-2/4 before:translate-x-[-50%] before:translate-y-[50%] before:z-[-1] after:content-[''] after:inline-block after:w-full after:h-[2px] after:bg-bodyColor after:absolute after:bottom-2/4 after:left-2/4 after:translate-x-[-50%] after:translate-y-[50%] after:z-[-1]">
          About Me</h2>
        <div class="text-center text-xs">Who Am I</div>

        <div
          class="grid gap-5 md:grid-cols-2 md:items-center md:gap-x-16 gap-y-10 md:px-16 max-w-screen-lg mx-4 md:mx-auto pt-8">
          <div class="px-4 justify-self-center bg-navColor rounded-3xl"  data-aos="flip-left">
            <img :src="data.main.profile_photo_path_2" alt="about-me" class="h-[350px] md:h-[400px] object-cover">
          </div>

          <div class="text-center md:text-left h-full">
            <div class="grid grid-cols-3 gap-2 mb-6" data-aos="flip-up">
              <div class="text-center rounded-xl py-2 bg-menuColorAlt">
                <i class="bx bx-award text-menuColor text-xl"></i>
                <h3 class="text-sm md:text-md font-medium">Experience</h3>
                <span class="text-xs md:text-sm">{{ workingYears }}</span>
              </div>
              <div class="text-center rounded-xl py-2 bg-menuColorAlt">
                <i class="bx bx-briefcase-alt text-menuColor text-xl"></i>
                <h3 class="text-sm md:text-md font-medium">Completed</h3>
                <span class="text-xs md:text-sm">{{ data.main.total_projects }} Projects</span>
              </div>
              <div class="text-center rounded-xl py-2 bg-menuColorAlt">
                <i class="bx bx-code-alt text-menuColor text-xl"></i>
                <h3 class="text-sm md:text-md font-medium">Programming</h3>
                <span class="text-xs md:text-sm">6 Language</span>
              </div>
            </div>

            <!-- Self Descriptions -->
            <p  data-aos="fade-left" class="text-justify text-sm md:text-md">{{ data.main.self_descriptions }}</p>

            <!-- Contact Me -->
            <div class="mt-8 flex justify-center md:justify-end" data-aos="fade-down">
              <a href="#contact"
                class="inline border-solid border-2 border-navColor py-2 px-3 rounded bg-navColor hover:bg-transparent duration-200 transition-colors">Contact
                Me</a>
            </div>
          </div>
        </div>
      </Section>

      <!-- Skills Section -->
      <Section id="skills">
        <h2
          class="relative w-max mb-1 mx-auto px-1 text-center text-[1.25rem] font-bold text-menuColor z-[1] before:content-[''] before:inline-block before:w-[150px] before:h-[1px] before:bg-menuColorAlt before:absolute before:bottom-2/4 before:left-2/4 before:translate-x-[-50%] before:translate-y-[50%] before:z-[-1] after:content-[''] after:inline-block after:w-full after:h-[2px] after:bg-bodyColor after:absolute after:bottom-2/4 after:left-2/4 after:translate-x-[-50%] after:translate-y-[50%] after:z-[-1]">
          My Skills</h2>
        <div class="text-center text-xs">What Can I Do</div>

        <div class="max-w-screen-lg mx-4 md:mx-auto pt-8">
          <div class="grid gap-3 grid-cols-4 md:grid-cols-8">
            <div v-for="skill in skills" :key="skill.name" data-aos="zoom-in"
              class="bg-white px-1 drop-shadow-md flex gap-2 flex-col justify-center items-center rounded-md py-2 group">
              <img :src="skill.icon" :alt="skill.name"
                class="h-14 grayscale group-hover:grayscale-0 trasnsition-all ease-in-out duration-500">
              <h4 class="font-bold text-[10px] md:text-xs text-center">{{ skill.name }}</h4>
            </div>
          </div>
        </div>
      </Section>

      <!-- Certificate Section -->
      <Section id="certificates">
        <h2
          class="relative w-max mb-1 mx-auto px-1 text-center text-[1.25rem] font-bold text-menuColor z-[1] before:content-[''] before:inline-block before:w-[190px] before:h-[1px] before:bg-menuColorAlt before:absolute before:bottom-2/4 before:left-2/4 before:translate-x-[-50%] before:translate-y-[50%] before:z-[-1] after:content-[''] after:inline-block after:w-full after:h-[2px] after:bg-bodyColor after:absolute after:bottom-2/4 after:left-2/4 after:translate-x-[-50%] after:translate-y-[50%] after:z-[-1]">
          Certificates</h2>
        <div class="text-center text-xs">What I Got</div>

        <div class="max-w-screen-lg mx-4 md:mx-auto pt-8">
          <div class="grid grid-cols-2 lg:grid-cols-3 gap-6">
            <a v-for="certificate in certificates" :key="certificate.name" :href="certificate.detail_url" data-aos="zoom-out"
              target="_blank" class="relative overflow-hidden rounded-lg drop-shadow-lg group">
              <img :src="certificate.image_url" :alt="certificate.name"
                class="w-full h-auto transform transition-transform duration-300 group-hover:scale-110">
              <div
                class="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-4 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                <h3 class="text-sm md:text-md">{{ certificate.name }}</h3>
                <p class="text-xs md:text-sm">{{ certificate.issuer }}</p>
                <p class="text-xs font-bold">{{ certificate.issuer_date }}</p>
              </div>
            </a>
          </div>
          <div class="flex justify-center mt-6" data-aos="fade-down">
            <button v-if="limitCertificates != 0" @click="setLimitCertificates(0)"
              class="nline border-solid border-2 border-navColor py-2 px-3 rounded bg-navColor hover:bg-transparent duration-200 transition-colors">Load
              More</button>
          </div>
        </div>
      </Section>

      <!-- Working Section -->
      <Section id="works">
        <h2
          class="relative w-max mb-1 mx-auto px-1 text-center text-[1.25rem] font-bold text-menuColor z-[1] before:content-[''] before:inline-block before:w-[250px] before:h-[1px] before:bg-menuColorAlt before:absolute before:bottom-2/4 before:left-2/4 before:translate-x-[-50%] before:translate-y-[50%] before:z-[-1] after:content-[''] after:inline-block after:w-full after:h-[2px] after:bg-bodyColor after:absolute after:bottom-2/4 after:left-2/4 after:translate-x-[-50%] after:translate-y-[50%] after:z-[-1]">
          Working Experience</h2>
        <div class="text-center text-xs">What Have I Done</div>

        <div class="max-w-screen-lg mx-4 md:mx-auto pt-8 pl-3">
          <ol class="relative border-s border-menuColor">
            <li v-for="(work, index) in works" :key="index" class="mb-10 ms-6" data-aos="fade-up">
              <span
                class="absolute flex items-center justify-center w-6 h-6 bg-menuColorAlt rounded-full -start-3 ring-2 ring-menuColorAlt">
                <svg class="w-2.5 h-2.5 text-menuColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <a :href="work.office_web"
                class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{{ work.position }} -
                {{ work.office }}
                <span v-if="index == 0"
                  class="bg-navColor text-menuColor text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">Current</span>
              </a>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400">{{ work.status }} | {{ work.date
                }}</time>
              <ul class="list-disc list-inside">
                <li v-for="(value, index2) in work.jobdesc" :key="index2" class="text-base font-normal text-gray-500">{{
                  value }}</li>
              </ul>
            </li>
          </ol>
        </div>
      </Section>

      <!-- Contact Section -->
      <Section id="contacts">
        <h2
          class="relative w-max mb-1 mx-auto px-1 text-center text-[1.25rem] font-bold text-menuColor z-[1] before:content-[''] before:inline-block before:w-[200px] before:h-[1px] before:bg-menuColorAlt before:absolute before:bottom-2/4 before:left-2/4 before:translate-x-[-50%] before:translate-y-[50%] before:z-[-1] after:content-[''] after:inline-block after:w-full after:h-[2px] after:bg-bodyColor after:absolute after:bottom-2/4 after:left-2/4 after:translate-x-[-50%] after:translate-y-[50%] after:z-[-1]">
          Contact Me</h2>
        <div class="text-center text-xs">Where Can Reach Me</div>

        <div class="max-w-screen-lg mx-4 md:mx-auto pt-8 pl-3" data-aos="fade-up">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ul class="mb-6 md:mb-0">
                <li class="flex items-center mb-4" v-for="contact in contacts" :key="contact.name">
                  <div class="flex h-10 w-10 items-center justify-center rounded bg-textColor text-gray-50">
                    <i class='bx text-2xl' :class="contact.icon"></i>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-medium leading-6 text-gray-900">{{ contact.name }}</h3>
                    <p class="text-gray-600">{{ contact.value }}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <form id="contactForm">
                <div class="mb-6">
                  <div class="mx-0 mb-1 sm:mb-4">
                    <div class="mx-0 mb-1 sm:mb-4">
                      <label for="name" class="pb-1 text-xs uppercase tracking-wider"></label><input type="text"
                        id="name" autocomplete="given-name" placeholder="Your name"
                        class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="name">
                    </div>
                    <div class="mx-0 mb-1 sm:mb-4">
                      <label for="email" class="pb-1 text-xs uppercase tracking-wider"></label><input type="email"
                        id="email" autocomplete="email" placeholder="Your email address"
                        class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="email">
                    </div>
                  </div>
                  <div class="mx-0 mb-1 sm:mb-4">
                    <label for="textarea" class="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea"
                      name="textarea" cols="30" rows="5" placeholder="Write your message..."
                      class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                  </div>
                </div>
                <div class="text-center">
                  <button disabled type="submit" class="w-full bg-textColor text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send
                    Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Section>

      <!-- Footer -->
      <footer class="w-full h-25 bg-textColor text-white text-center pb-24 pt-5 mt-4">
        <h2 class="text-xl font-bold">Let's Connect</h2>
        <ul class="flex flex-row justify-center gap-3 mt-2 mb-6">
          <li v-for="item in connects" :key="item.name">
            <a :href="item.url" class="flex h-10 w-10 items-center justify-center rounded bg-navColor text-gray-50">
              <i class='bx text-2xl' :class="item.icon"></i>
            </a>
          </li>
        </ul>
        <div>
          &copy; Copyright 2024 
          <p class="inline font-bold text-menuColorAlt">THIS<span class="text-white">IS</span>ME</p> 
          | Created with <i class='bx bxs-heart text-red-300' ></i> by <a href="github.com/rikhoari01" class="underline">Rikho Ari</a>
        </div>
      </footer>
    </main>
  </div>
</template>

<script>
import data from '~/data/data.json'
import Section from '~/components/layouts/section.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    Section
  },
  setup() {
    const workingYears = ref('');
    const limitCertificates = ref(6);
    const socials = data.main.social;
    const skills = data.main.skills;
    const works = data.main.working_experiences;
    const certificates = ref(data.main.certificates);
    const contacts = data.main.contacts;
    const connects = data.main.connects;

    const calculateWorking = (date) => {
      const startDate = new Date(date);
      const endDate = new Date();

      let totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());

      const years = Math.floor(totalMonths / 12);
      const months = totalMonths % 12;

      workingYears.value = years + ' Years ' + months + ' Months';
    }

    const setLimitCertificates = (value) => {
      limitCertificates.value = value;
      if (limitCertificates.value != 0) {
        certificates.value = certificates.value.slice(0, limitCertificates.value)
      } else {
        certificates.value = data.main.certificates;
      }
    }

    return {
      data,
      socials,
      skills,
      certificates,
      workingYears,
      limitCertificates,
      works,
      contacts,
      connects,
      setLimitCertificates,
      calculateWorking
    }
  },
  mounted() {
    this.calculateWorking('2022-11-01'),
      this.setLimitCertificates(this.limitCertificates)
  }
})
</script>
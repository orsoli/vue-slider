// Destructuring createApp
const { createApp } = Vue;
// Create an instance app of vue app
const app = createApp({
  data() {
    return {
      // Create variable list of img and data img
      media: [
        {
          id: 1,
          image: "img/01.webp",
          title: `Marvel's Spiderman Miles Morale`,
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        },
        {
          id: 2,
          image: "img/02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        },
        {
          id: 3,
          image: "img/03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
          id: 4,
          image: "img/04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        },
        {
          id: 5,
          image: "img/05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],
      activeIndex: 0, // ActiveIndex initial value
      interval: null, // Create interval initial value
    };
  },

  computed: {
    // Create a function for the last activeIndex
    lastActiveIndex() {
      return this.media.length - 1;
    },
  },

  methods: {
    // Create a function to set the activeIndex in click
    setActiveIndex(direction) {
      if (direction === "prev") {
        // Ternary condition if click in chevron up is the firs img, if not decrement
        this.activeIndex === 0
          ? (this.activeIndex = this.lastActiveIndex)
          : this.activeIndex--;
      } else if (direction === "next") {
        // Ternary condition if click in chevron down is the last img, and increment
        this.activeIndex === this.lastActiveIndex
          ? (this.activeIndex = 0)
          : this.activeIndex++;
      } else this.activeIndex = direction; // If click in thumbnails this activeIndex = i
    },

    slideAutoPlay() {
      // Set interval for next img every 3 secs
      this.interval = setInterval(() => this.setActiveIndex("next"), 3000);
    },

    slidePause() {
      clearInterval(this.interval); // Pause the slidAuto play with clearInterval
      this.interval = null; // Get the interval variable the initial value
    },
  },

  mounted() {
    this.slideAutoPlay();
  },
}).mount("#app");

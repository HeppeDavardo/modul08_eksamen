<template>
    <section class="vueMenu">
      <section class="menuNav">
      <button class="menuNavBtn"
        v-for="tab in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab.compName }]"
        @click="currentTab = tab.compName">
        {{ tab.navName }}
      </button>
    </section>
      <component :is="currentTab" class="tab menuTxt"></component>
    </section>
  </template>
  
  <script>
  import Frokost from './components/Frokost.vue'
  import IndenMaden from './components/IndenMaden.vue'
  import SeasonMenu from './components/SeasonMenu.vue'
  import Pizza from './components/Pizza.vue'
  import AlaCarte from './components/AlaCarte.vue'
  import Vin from './components/Vin.vue'
  import Drikkevare from './components/Drikkevare.vue'
  
  export default {
    components: {
      Frokost,
      IndenMaden,
      SeasonMenu,
      Pizza,
      AlaCarte,
      Vin,
      Drikkevare
    },
    data() {
      return {
        currentTab: 'Frokost',
        tabs: [
            { navName: "Frokost", compName: "Frokost" },
            { navName: "Inden maden", compName: "IndenMaden" },
            { navName: "Sæson menu", compName: "SeasonMenu" },
            { navName: "Pizza", compName: "Pizza" },
            { navName: "A la carte", compName: "AlaCarte" },
            { navName: "Vin", compName: "Vin" },
            { navName: "Drikkevare", compName: "Drikkevare" }
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap");
  .vueMenu {
    display: flex;
  }
  .menuNav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 20%;
    margin-top: 5rem;
    padding-left: 8rem;
    border-right: 2px solid #707070;
  }
  .menuNavBtn{
    background-color: transparent;
    border: none;
    text-align: left;
    font-size: 20px;
    font-weight: normal;
    cursor: pointer;
  }

  .menuTxt {
    
  }
  </style>
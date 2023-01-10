<template>
  <section class="vueMenu">
    <section class="menuNav">
    <button class="menuNavBtn"
      v-for="tab in tabs"
      :key="tab"
      :class="['tab-button', { active: currentTab === tab }]"
      @click="currentTab = tab">
      {{ tab }}
    </button>
    <section class="menuImg">
      <img src="" alt="">
    </section>
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
      tabs: ['Frokost', 'IndenMaden', 'SeasonMenu', 'Pizza', 'AlaCarte', 'Vin', 'Drikkevare'] 
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap");
body {
  margin: 0;
  padding: 0;
}

.centerMenu {
  justify-content: center;
  text-align: center;
}

.vueMenu {
  font-family: "Titillium Web", sans-serif;
  display: flex;
  margin-top: 5rem;
  padding-right: 20rem;
  min-height: 100vh;
}
.menuNav {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding-top: 1rem;
  padding-left: 20rem;
  border-right: 2px solid #707070;
}
.menuNavBtn{
  font-family: "Titillium Web", sans-serif;
  color: #646B41;
  background-color: transparent;
  border: none;
  text-align: left;
  font-size: 1.9rem;
  font-weight: normal; 
  cursor: pointer;
  width: 250px;
}
.menuNavBtn.active, 
.menuNavBtn:hover {
  border-right: 4px solid #646B41;

}

.menuImg {
  position: absolute;
  display: flex;
  justify-content: center;
  top: 20rem;
  left: 0;
  width: 100%;
  height: 60%;
  z-index: -10;
  pointer-events: none;
  object-fit: cover;
  overflow: hidden;
  
}


.menuTxt {
  padding-left: 3rem;
  color: #4D594D;
}
.dish {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: end;
}

#menupunkt {
  color: #646B41;
  font-size: 3.5rem;
  font-weight: 600;
  margin: 0;
}
.menupunktDesc {
  margin: 2rem 0 4rem;
  font-size: 1.5rem;
  color: #646B41;
}
#kategori{
  color: #8AA08A;
  margin: 0;
  padding: 3rem 0 0.5rem;
  font-size: 1.8rem;
}

#navn {
  margin: 0;
  padding-bottom: 1rem;
  font-weight: 600;
  font-size: 1.5rem;
}
#ingredienser {
  margin: 0;
  padding-bottom: 1rem;
  font-size: 1.5rem;
}
#pris {
  margin: 0;
  padding-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
}

/* Hvis at kontaineren er tom, skal den ikke vises */
.dish:empty {
  display: none;
}
#navn:empty {
  display: none;
}
#ingredienser:empty {
  display: none;
}
#pris:empty {
  display: none;
}
</style>

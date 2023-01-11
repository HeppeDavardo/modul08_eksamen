<template>
  <section class="grayBG">
    <section class="menuApp">
      <section class="vueMenu">
        <section class="menuNav">
          <button
            class="menuNavBtn"
            v-for="tab in tabs"
            :key="tab"
            :class="['tab-button', { active: currentTab === tab.compName }]"
            @click="currentTab = tab.compName"
          >
            {{ tab.navName }}
          </button>
          <section class="menuImg">
            <img :src="`./assets/img/menuImg/${currentTab}.png`" alt="" />
          </section>
        </section>
        <component :is="currentTab" class="tab menuTxt"></component>
      </section>

      <section class="menuDec">
        <img
          class="dec1"
          src="../public/assets/img/menuImg/menuDec1.png"
          alt=""
        />
        <img
          class="dec2"
          src="../public/assets/img/menuImg/menuDec2.png"
          alt=""
        />
      </section>
    </section>
  </section>
</template>

<script>
import Frokost from "./components/Frokost.vue";
import IndenMaden from "./components/IndenMaden.vue";
import SeasonMenu from "./components/SeasonMenu.vue";
import Pizza from "./components/Pizza.vue";
import AlaCarte from "./components/AlaCarte.vue";
import Vin from "./components/Vin.vue";
import Drikkevare from "./components/Drikkevare.vue";
import MenuImg from "./components/menuImg.vue";

export default {
  components: {
    Frokost,
    IndenMaden,
    SeasonMenu,
    Pizza,
    AlaCarte,
    Vin,
    Drikkevare,
    MenuImg,
  },
  data() {
    return {
      currentTab: "Frokost",
      tabs: [
        {
          navName: "Frokost",
          compName: "Frokost",
          url: "Frokost.jpg",
        },
        {
          navName: "Inden maden",
          compName: "IndenMaden",
          url: "Indenmaden.jpg",
        },
        {
          navName: "Sæson menu",
          compName: "SeasonMenu",
          url: "Saeson.jpg",
        },
        {
          navName: "Pizza",
          compName: "Pizza",
          url: "Pizza.jpg",
        },
        {
          navName: "A la carte",
          compName: "AlaCarte",
          url: "AlaCarte.jpg",
        },
        { navName: "Vin", compName: "Vin", url: "Vin.jpg" },
        {
          navName: "Drikkevare",
          compName: "Drikkevare",
          url: "Drikkevare.jpg",
        },
      ],
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap");
template {
  background-color: #707070;
}

.menuApp {
  position: relative;
  margin: 4rem 12rem;
  border: 4px solid #646b41;
  border-radius: 50px;
  background-color: white;
  min-height: 120vh;
}

.centerMenu {
  justify-content: center;
  text-align: center;
}
.centerBtn {
  width: 100%;
  display: flex;
  justify-content: center;
}
.vueMenu {
  font-family: "Titillium Web", sans-serif;
  display: flex;
  margin-top: 5rem;
  width: 85%;
  min-height: 100vh;
}
.menuNav {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-left: 20rem;
  border-right: 2px solid #707070;
  z-index: 5;
}
.menuNavBtn {
  font-family: "Titillium Web", sans-serif;
  color: #646b41;
  background-color: transparent;
  border: none;
  text-align: left;
  font-size: 1.9rem;
  font-weight: normal;
  cursor: pointer;
  width: 250px;
}
.menuNavBtn.active {
  border-right: 4px solid #646b41;
}
.menuNavBtn.active,
.menuNavBtn:hover {
  font-weight: 600;
}

.menuDec {
  width: 100%;
  height: 100%;
  z-index: -10;
}
.dec1,
.dec2 {
  position: absolute;
}
.dec1 {
  top: 0;
  right: 0;
  border-radius: 0 50px 0 0;
}
.dec2 {
  right: 0;
  bottom: 0;
  border-radius: 0 0 50px 0;
}

.menuImg {
  position: absolute;
  display: flex;
  justify-content: center;
  align-content: center;
  top: 15rem;
  left: 0;
  width: 100%;
  z-index: -1;
  overflow: hidden;
}
.menuImg > img {
  pointer-events: none;
  object-fit: cover;
  object-position: center;
  width: 100%;
}

.menuTxt {
  padding-left: 3rem;
  color: #4d594d;
}
.dish {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: end;
}

#menupunkt {
  color: #646b41;
  font-size: 3.5rem;
  font-weight: 600;
  margin: 0;
}
.menupunktDesc {
  margin: 2rem 0 4rem;
  font-size: 1.5rem;
  color: #646b41;
}
#kategori {
  color: #8aa08a;
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

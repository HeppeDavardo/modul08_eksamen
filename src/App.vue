<template>
  <section class="grayBG">
    <section class="menuApp">
      <section class="vueMenu">
        <section class="menuNav">
          <!-- laver en knap for hver tab der er i arrayet tabs -->
          <!-- Den aktive knap er den der stemmer overens med currentTab -->
          <!-- Når man klikker på en knap, bliver currentTab lavet om til det tilsvarende -->
          <button
            class="menuNavBtn"
            v-for="tab in tabs"
            :key="tab"
            :class="['tab-button', { active: currentTab === tab.compName }]"
            @click="currentTab = tab.compName"
          >
            {{ tab.navName }}
          </button>
          <!-- Viser det billede, der stemmer overens med currentTab -->
          <section class="menuImg">
            <img :src="`./assets/img/menuImg/${currentTab}.png`" alt="menu picture" />
          </section>
        </section>
        <!-- Viser det indhold fra den component, der stemmer overens med currentTab -->
        <component :is="currentTab" class="tab menuTxt"></component>
      </section>

      <section class="menuDec">
        <img
          class="dec1"
          src="../public/assets/img/menuImg/menuDec1.png"
          alt="leaf decoration"
        />
        <img
          class="dec2"
          src="../public/assets/img/menuImg/menuDec2.png"
          alt="leaf decoration"
        />
      </section>
    </section>
  </section>
</template>

<script>
// Importerer alle vores components ind
import Frokost from "./components/Frokost.vue";
import IndenMaden from "./components/IndenMaden.vue";
import SeasonMenu from "./components/SeasonMenu.vue";
import Pizza from "./components/Pizza.vue";
import AlaCarte from "./components/AlaCarte.vue";
import Vin from "./components/Vin.vue";
import Drikkevare from "./components/Drikkevare.vue";
import MenuImg from "./components/menuImg.vue";

export default {
  // liste over vores components
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
      // Array med objekter i til hver af vores menupunkter
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
  margin: 0 12rem;
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
  gap: 2rem;
}
.vueMenu {
  font-family: "Titillium Web", sans-serif;
  display: flex;
  margin-top: 10rem;
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
  text-align: right;
  padding-right: 1rem;
  font-size: 1.8rem;
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
  font-size: 2.8rem;
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
  font-size: 1.3rem;
}
#ingredienser {
  margin: 0;
  padding-bottom: 1rem;
  font-size: 1.3rem;
}
#pris {
  margin: 0;
  padding-bottom: 1rem;
  font-size: 1.3rem;
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

@media (max-width: 1180px) {
  .menuApp {
    margin: 0 2rem;
  }
  .vueMenu {
    margin-top: 1rem;
    padding: 10rem 0 4rem;
    width: 90%;
  }
  .menuNav {
    padding-left: 4rem;
  }
  .menuImg {
    top: 17rem;
  }
  .dec1{
    width: 500px;
  }
  .dec2 {
    width: 200px;
  }
}
@media (max-width: 844px) {
  .vueMenu {
    display: block;
    padding-right: 0;
    margin-right: 0;
  }
  .menuNav {
    padding-left: 0;
    border: none;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
  .menuNavBtn {
    width: 200px;
    text-align: center;
    padding: 0;
    border: 2px solid #4d594d;
    margin: 4px;
    border-radius: 25px;
  }
  .menuNavBtn.active {
    border-right: 2px solid #4d594d;
    background-color: #4d594d;
    color: white;
  }
  .menuImg{
    display: none;
  }
  .menuTxt {
    padding-left: 1rem;
  }
  .dec1{
    width: 400px;
  }
  .dec2 {
    width: 160px;
  }
}
@media (max-width: 480px) {
  .menuApp {
    margin: 0;
    border-radius: 0;
    border: none;
    background-color: #ebebeb;
  }
  .vueMenu {
    margin-top: 0;
    padding: 0 0 4rem;
    width: 100%;
  }
  .menuNav {
    padding: 0;
    margin-bottom: 2rem;
  }
  .menuNavBtn {
    width: 90%;
  }
  .menuTxt {
    padding: 0 1rem;
  }
  .dec1,
  .dec2 {
    display: none;
  }
  .dish {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  #menupunkt {
    text-align: center;
  }
  #kategori {
    padding-top: 1rem;
    text-align: center;
  }
  #navn,
  #ingredienser {
    padding-bottom: 0;
    text-align: center;
  }

  #pris {
    padding-bottom: 1rem;
  }
}
</style>

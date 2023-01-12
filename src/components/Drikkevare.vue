<template>
    <div id="ret"></div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      retter: undefined
    };
  },
  created() {
    let token;
         // fetcher vores token
        fetch('https://helenamarias.com/wp-json/jwt-auth/v1/token',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // login informationer til admin brugeren
            body: JSON.stringify({
                 "username": "projektadmin",
                "password": "helenajeppeadmin"
            })
        })
        // Laver dataen om til JSON format
        .then(response => response.json())
        // Sætter dataen sammen med vores token så vi kan tilgå den
        .then(data => { 
            token = data.data.token;
        })
        // fetcher vores posts fra WordPress
        .then(() => {
            fetch('https://helenamarias.com/wp-json/wp/v2/posts?status=private&categories=34',{
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}` // tilføjer vores token til headers, så vi kan tilgå vores posts
                }
            })
            .then(response => response.json())
            .then(data => { 
                console.log(data);
                let ret = document.querySelector('#ret'); // fanger vores div oppe i html

                ret.innerHTML = `<h2 id="menupunkt">Drikkevare</h2>`; //overskrift på menu
                // Looper igennem alle posts og skriver dem ind i html dokumentet
                for (let i = data.length-1; i >= 0; i--) {
                    ret.innerHTML += `
                    <h2 id="kategori">${data[i].acf.kategori}</h2>
                    <article class="dish">
                        <h3 id="navn">${data[i].acf.navn1}</h3>
                        <p id="ingredienser">${data[i].acf.ingredienser1}</p>
                        <h3 id="pris">${data[i].acf.pris1}</h3>
                    </article>
                    <article class="dish">
                        <h3 id="navn">${data[i].acf.navn2}</h3>
                        <p id="ingredienser">${data[i].acf.ingredienser2}</p>
                        <h3 id="pris">${data[i].acf.pris2}</h3>
                    </article>
                    <article class="dish">
                        <h3 id="navn">${data[i].acf.navn3}</h3>
                        <p id="ingredienser">${data[i].acf.ingredienser3}</p>
                        <h3 id="pris">${data[i].acf.pris3}</h3>
                    </article>
                    <article class="dish">
                        <h3 id="navn">${data[i].acf.navn4}</h3>
                        <p id="ingredienser">${data[i].acf.ingredienser4}</p>
                        <h3 id="pris">${data[i].acf.pris4}</h3>
                    </article>
                    <article class="dish">
                        <h3 id="navn">${data[i].acf.navn5}</h3>
                        <p id="ingredienser">${data[i].acf.ingredienser5}</p>
                        <h3 id="pris">${data[i].acf.pris5}</h3>
                    </article>
                    <article class="dish">
                        <h3 id="navn">${data[i].acf.navn6}</h3>
                        <p id="ingredienser">${data[i].acf.ingredienser6}</p>
                        <h3 id="pris">${data[i].acf.pris6}</h3>
                    </article>
                    <article class="dish">
                        <h3 id="navn">${data[i].acf.navn7}</h3>
                        <p id="ingredienser">${data[i].acf.ingredienser7}</p>
                        <h3 id="pris">${data[i].acf.pris7}</h3>
                    </article>
                    <article class="dish">
                        <h3 id="navn">${data[i].acf.navn8}</h3>
                        <p id="ingredienser">${data[i].acf.ingredienser8}</p>
                        <h3 id="pris">${data[i].acf.pris8}</h3>
                    </article>
                    `;
                }
                ret.innerHTML += `
                    <article class="centerBtn">
                        <a href="./bookbord.html"><button class="btn1">Book bord</button></a>
                        <a href="./takeaway.html"><button class="btn2">Take Away</button></a>
                    </article>
                    `;
            });
        });
  }
};
</script>

<style scoped>

</style>
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
        // fetching private posts from category frokost
        fetch('https://helenamarias.com/wp-json/jwt-auth/v1/token',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                 "username": "projektadmin",
                "password": "helenajeppeadmin"
            })
        })
        .then(response => response.json())
        .then(data => { 
            token = data.data.token;
        })
        .then(() => {
            fetch('https://helenamarias.com/wp-json/wp/v2/posts?status=private&categories=6',{
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => response.json())
            .then(data => { 
                console.log(data);
                let ret = document.querySelector('#ret');

                ret.innerHTML = `<h2 id="menupunkt">Inden maden</h2>`;
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
            });
        });
  }
};
</script>

<style scoped>

</style>
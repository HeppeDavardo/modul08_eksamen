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
            fetch('https://helenamarias.com/wp-json/wp/v2/posts?status=private&categories=8',{
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => response.json())
            .then(data => { 
                console.log(data);
                let ret = document.querySelector('#ret');


                for (let i = data.length-1; i >= 0; i--) {
                    ret.innerHTML += `
                    <h1>${data[i].acf.kategori}</h1>
                    <h2>${data[i].acf.navn1}</h2>
                    <p>${data[i].acf.ingredienser1}</p>
                    <h2>${data[i].acf.pris1}</h2>
                    <h2>${data[i].acf.navn2}</h2>
                    <p>${data[i].acf.ingredienser2}</p>
                    <h2>${data[i].acf.pris2}</h2>
                    <h2>${data[i].acf.navn3}</h2>
                    <p>${data[i].acf.ingredienser3}</p>
                    <h2>${data[i].acf.pris3}</h2>
                    <h2>${data[i].acf.navn4}</h2>
                    <p>${data[i].acf.ingredienser4}</p>
                    <h2>${data[i].acf.pris4}</h2>
                    <h2>${data[i].acf.navn5}</h2>
                    <p>${data[i].acf.ingredienser5}</p>
                    <h2>${data[i].acf.pris5}</h2>
                    <h2>${data[i].acf.navn6}</h2>
                    <p>${data[i].acf.ingredienser6}</p>
                    <h2>${data[i].acf.pris6}</h2>
                    <h2>${data[i].acf.navn7}</h2>
                    <p>${data[i].acf.ingredienser7}</p>
                    <h2>${data[i].acf.pris7}</h2>
                    <h2>${data[i].acf.navn8}</h2>
                    <p>${data[i].acf.ingredienser8}</p>
                    <h2>${data[i].acf.pris8}</h2>
                    `;
                }
            });
        });
  }
};
</script>

<style scoped>

</style>
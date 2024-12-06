let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
   let joke = await getJoke();
    console.log(joke);
   let p = document.querySelector("#result");
   p.innerText = joke;
});

 let url = "https://icanhazdadjoke.com/";
async function getJoke (){
    try {
        let res = await axios.get (url, {
            headers: {
                "Accept": "application/json"
            }  
        });
        console.log(res.data);
        return res.data.joke;
    }
    catch (e){
        console.error("error -",e);
        return"Something went wrong";
    }
}


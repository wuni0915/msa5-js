  let nextBtn = document.querySelector("#next_btn")
  let btn = document.querySelector("#btn")
  let clear = document.querySelector("#clear")
  const container = document.querySelector(".container")
  let page = 0;
let limit = 3;
        const cardContainer = document.querySelector(".card-container")
  
  btn.addEventListener("click", async (e)=>{
    // console.log(e);
    if(e.target === nextBtn ){
      const baseURL = "https://picsum.photos";
      const path = '/v2/list'

      page++;
      
    const url = `${baseURL}${path}?page=${page}&limit=${limit}`;

    
    try{
      
      let response = await axios.get(url);
      
      
      console.log(response.data);
      response.data.forEach((item)=>{
        // console.log(item);
        

      
      const card = document.createElement('div')
      card.classList.add('card')
      
      const cardImg = document.createElement('div')
      cardImg.classList.add('card-img')
      cardImg.style.backgroundImage = `url('${item.download_url}')`
      
      const cardTxt = document.createElement('p')
      cardTxt.innerHTML = `${item.id}: ${item.author}`
      container.appendChild(cardContainer)
      cardContainer.appendChild(card)
      card.appendChild(cardImg)
      card.appendChild(cardTxt)
      
    })
  }catch(error){
    console.log(error);
    
  }
}else if (e.target === clear ){
      cardContainer.textContent = '';
      page = 0;
    }
    

  })



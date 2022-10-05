function renderCard(list){
    const listAlbum = document.querySelector('.list-albums')

    list.forEach(element => {
        const li          = document.createElement('li')
        const img         = document.createElement('img')
        const divAlbum    = document.createElement('div')
        const divYear     = document.createElement('div')
        const spanName    = document.createElement('span')
        const spanYear    = document.createElement('span')
        const h3          = document.createElement('h3')
        const divPrice    = document.createElement('div')
        const pPrice      = document.createElement('p')
        const buttonPrice = document.createElement('button')

        li.classList.add('card-albums')
        img.src = element.img

        divAlbum.classList.add('div-albums-description')

        divYear.classList.add('div-albums-year')
        spanName.innerText = element.band
        spanYear.innerText = element.year 

        h3.innerText = element.title 

        divPrice.classList.add('div-price-btnBuy')
        pPrice.innerText = `R$ ${element.price.toFixed(2)}`
        buttonPrice.classList = 'button-buyAndPrice'
        buttonPrice.innerText = 'Comprar'

        divPrice.append(pPrice,buttonPrice)
        divYear.append(spanName,spanYear)
        divAlbum.append(divYear,h3,divPrice)
        li.append(img,divAlbum)
        
        listAlbum.append(li)
    });
    return listAlbum
}

renderCard(products)

{/* <li class="card-albums">
    <img src="/assets/img/1.jpg" alt="Foto Album">
        <div class="div-albums-description">
            <div class="div-albums-year">
                <span>Scalene</span>
                <span>2017</span>
            </div>
            <h3>Magnetite</h3>
            <div class="div-price-btnBuy">
                <p>R$ 70,00</p>
                <button class="button-buyAndPrice">Comprar</button>
            </div>
        </div>
</li> */}
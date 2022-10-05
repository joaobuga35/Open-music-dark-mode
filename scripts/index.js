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

        li.classList = 'card-albums animation'
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
function filterButtons(){
    const buttons = document.querySelectorAll('.button-genres')
    const mainList = document.querySelector('#list-albums-id')

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.innerText

            if (filter === 'Todos') {
                mainList.innerHTML = ""
                renderCard(products)
            }
            const datasFiltered = filterDatas(filter)
            mainList.innerHTML = ""
            renderCard(datasFiltered)
        })
    });
}

filterButtons()

function filterDatas(text){
    const newFilter = products.filter((item) => {
        return item.category.includes(text)
    })
    return newFilter
}

function filterInput (){
    const inputRange = document.querySelector('#rangeValues')
    const priceValue = document.querySelector('#price')
    const mainList = document.querySelector('#list-albums-id')
    const buttons = document.querySelectorAll('.button-genres')


    inputRange.addEventListener('input', () => {
        priceValue.innerText = `R$ ${inputRange.value},00`

        const newArrayPrice = products.filter((element) => {
            return inputRange.value > element.price
        })
        mainList.innerHTML = ""
        renderCard(newArrayPrice)
    })
}

filterInput ()

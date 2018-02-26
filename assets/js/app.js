function openNav() {
  document.getElementById("mySidenav").style.width = "70%";
  // document.getElementById("flipkart-navbar").style.width = "50%";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "rgba(0,0,0,0)";
}



fetch('https://api.mercadolibre.com/sites/MLC/search?condition=all&q=all', {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  })
  .then(function (respt) {
    //Turns the the JSON into a JS object
    return respt.json();
  })
  .then(function (product) {
    console.log('a', product);
    let listCateg = product;
    let butt = document.querySelector('.butt');
    let inputSearch = document.querySelector('.inputSearch');

    butt.addEventListener('click', function () {

      let valueFlip = (inputSearch.value);
      for (let i = 0; i < listCateg.results.length; i++) {
        let valuesResults = (listCateg.results[i].title);
        let regex = new RegExp(valueFlip, 'i', 'g');
        if (regex.test(valuesResults) === true) {
          // console.log(listCateg.results[i].title);
          // console.log(listCateg.results[i].price);
          // console.log(listCateg.results[i].available_quantity);
          // console.log(listCateg.results[i].thumbnail);

          let resultsSearchInput = document.querySelector('.resultsSearchInput');
          let divResultsInput = document.createElement('div');
          divResultsInput.className = 'divResultsInput';
          let divImages = document.createElement('div');
          divImages.className = 'divImages';
          let image = document.createElement('img');
          image.className = 'image';
          image.setAttribute('src', listCateg.results[i].thumbnail);
          divImages.appendChild(image);

          let titleProduc = document.createTextNode(listCateg.results[i].title);
          let pTitle = document.createElement('p');
          pTitle.appendChild(titleProduc);
          divTitle = document.createElement('div');
          divTitle.className = 'divTitle';
          divTitle.appendChild(pTitle);
          divTitle.className = 'divTitle';


          let priceProduc = document.createTextNode(listCateg.results[i].price);
          let simbol = document.createTextNode('$ ');
          let pPrice = document.createElement('p');
          pPrice.appendChild(simbol);
          pPrice.appendChild(priceProduc);
          divPrice = document.createElement('div');
          divPrice.appendChild(pPrice);
          divPrice.className = 'divPrice';

          let pAvailable = document.createElement('p');
          let pDisp = document.createTextNode('Disponibilidad: ');
          let availableProduc = document.createTextNode(listCateg.results[i].available_quantity);
          pAvailable.appendChild(pDisp);
          pAvailable.appendChild(availableProduc);
          divAvailable = document.createElement('div');
          divAvailable.appendChild(pAvailable);
          divAvailable.className = 'divAvailable';

          let divButton = document.createElement('div');
          let buttonCart = document.createElement('button');
          buttonCart.className = 'buttonCart';
          buttonCart.appendChild(document.createTextNode('Add to Cart'));
          divButton.appendChild(buttonCart);
          let itemNumber = document.querySelector('.item-number');

          // let WishList = document.querySelector('.WishList');

          // buttonCart.addEventListener('click', function () {




          //     let numerActual = itemNumber.textContent;
          //     let actual = parseInt(numerActual) + 1;
          //     itemNumber.innerHTML = '';
          //     itemNumber.appendChild(document.createTextNode(actual));
          // })







          let heart = document.createElement('img');
          heart.setAttribute('src', 'assets/images/nolike.png');
          let divHeart = document.createElement('div');
          divHeart.appendChild(heart);
          divResultsInput.appendChild(divImages);
          divResultsInput.appendChild(divTitle);
          divResultsInput.appendChild(divPrice);
          divResultsInput.appendChild(divAvailable);
          divResultsInput.appendChild(divButton);
          // divResultsInput.appendChild(divHeart);
          resultsSearchInput.appendChild(divResultsInput);



          // divHeart.addEventListener('click', function(){
          //     heart.setAttribute('src', 'assets/images/like.png');
          //     let element = event.target.parentNode.parentNode.firstChild.nextSibling.firstChild.textContent;
          //     let itemNumber = document.querySelector('.item-number');
          //     let divWish = document.createElement('div');
          //     let textDivWish = document.createElement('p');

          //     let text = document.createTextNode(element);
          //     textDivWish.appendChild(text);
          //     divWish.appendChild(textDivWish);
          //     WishList.appendChild(divWish);
          // })

          let detailProduct = document.querySelector('.detailProduct');

          image.addEventListener('click', function () {
            detailProduct.innerHTML = '';
            let divimageTitle = document.createElement('div');
            divimageTitle.className = 'divimageTitle';
            let divImag = document.createElement('div');
            let imag = document.createElement('img');
            imag.setAttribute('src', event.target.getAttribute('src'));
            divImag.appendChild(imag);
            divImag.className = 'divImag';
            imag.className = 'imagenP';


            let divTexts = document.createElement('div');
            let titleDetail = event.target.parentNode.parentNode.firstChild.nextSibling.firstChild.textContent;
            let ptitleDetail = document.createElement('p');
            let divtitleDetail = document.createElement('div');
            ptitleDetail.appendChild(document.createTextNode(titleDetail));
            divTexts.appendChild(ptitleDetail);
            divTexts.className = 'divTexts';

            let priceDetail = event.target.parentNode.parentNode.firstChild.nextSibling.nextSibling.firstChild.textContent;
            let ppriceDetail = document.createElement('p');
            ppriceDetail.appendChild(document.createTextNode(priceDetail));
            divTexts.appendChild(ppriceDetail);


            let availableDetail = event.target.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.textContent;
            let pavailableDetail = document.createElement('p');
            pavailableDetail.appendChild(document.createTextNode(availableDetail));
            divTexts.appendChild(pavailableDetail);

            let pointerName = event.target.parentNode.parentNode.firstChild.nextSibling.firstChild.textContent;
            for (let index = 0; index < listCateg.results.length; index++) {
              if (pointerName === listCateg.results[index].title) {
                let condition = listCateg.results[index].condition;
                let pCondition;
                if (condition === 'new') {

                  pCondition = document.createTextNode('Nuevo');
                } else {
                  pCondition = document.createTextNode('Usado');
                }
                let pCond = document.createElement('p');
                pCond.appendChild(pCondition);
                divTexts.appendChild(pCond);
                let shiping = listCateg.results[index].shipping.free_shipping;
                console.log(shiping)
                let pshiping;
                if (shiping === true) {
                  pshiping = document.createTextNode('Envío gratis a todo el país');
                } else {
                  pshiping = document.createTextNode('El envio no es gratis');
                }
                let pShiping = document.createElement('p');
                pShiping.appendChild(pshiping);
                divTexts.appendChild(pShiping);



                let buttonBuy = document.createElement('button');
                buttonBuy.appendChild(document.createTextNode('Comprar'));
                buttonBuy.className = 'buttonBuy';
                divTexts.appendChild(buttonBuy);


                let precioNormal = listCateg.results[index].original_price;
                if (precioNormal === null) {
                  let oferta = document.createTextNode('No posee oferta');
                } else {
                  let oferta = document.createTextNode('Posee oferta');
                }
                let precioActual = listCateg.results[index].price;





              }

            }



            divimageTitle.appendChild(divImag)
            divimageTitle.appendChild(divTexts)


            detailProduct.appendChild(divimageTitle);

            let cart = document.querySelector('cart');

            // buttonBuy.addEventListener('click', function () {

            let titulo = event.target.parentNode.parentNode.firstChild.nextSibling.firstChild.textContent;
            let imagenBuy = event.target.parentNode.parentNode.firstChild.firstChild.getAttribute('src');
            console.log(imagenBuy);



            for (let z = 0; z < listCateg.results.length; z++) {
              if (titulo === listCateg.results[z].title) {
                let selectQuantity = document.createElement('select');
                selectQuantity.className = 'selectQuantity';
                let quantityThis = listCateg.results[z].available_quantity;
                for (let y = 0; y < quantityThis; y++) {
                  let option = document.createElement('option');
                  let textQ = document.createTextNode(y + 1);
                  console.log(textQ);
                  let pQ = document.createElement('p');
                  pQ.appendChild(textQ);
                  option.appendChild(pQ);
                  selectQuantity.appendChild(option);
                }
                let divTexts = document.querySelector('.divTexts');
                divTexts.appendChild(selectQuantity);

              }
            }
            let cartBuy = document.querySelector('.cartt');
            let buttonBuy = document.querySelector('.buttonBuy');
            let selectQuantity = document.querySelector('.selectQuantity');
            buttonBuy.addEventListener('click', function () {
              let buyTitle = event.target.parentNode.parentNode.firstChild.nextSibling.firstChild.textContent;
              let pBuy = document.createElement('p');
              pBuy.appendChild(document.createTextNode(buyTitle));
              cartBuy.appendChild(pBuy);
              let valueQuantity = selectQuantity.value;
              let precioUnity = event.target.parentNode.firstChild.nextSibling.firstChild.textContent;
              let precioClear = precioUnity.toString().replace('$ ', '');
              console.log(precioClear);
              let textPrecio = document.createElement('p');
              textPrecio.appendChild(document.createTextNode(precioClear));
              cartBuy.appendChild(textPrecio);


            })

















            // })


          })






        }
      }
      inputSearch.value = '';



    })



  })


let listCategories;

fetch('https://api.mercadolibre.com/sites/MLC/categories', {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  })
  .then(function (respt) {
    //Turns the the JSON into a JS object
    return respt.json();
  })
  .then(function (info) {
    listCategories = info;
    console.log(info);

    let categoriesSelect = document.querySelector('.categoriesSelect');

    for (let i = 0; i < info.length; i++) {
      let textOption = info[i].name;
      let pOption = document.createTextNode(textOption);
      let option = document.createElement('option');
      option.value = info[i].id;
      option.appendChild(pOption);
      categoriesSelect.appendChild(option);
    }
  })

let categoriesSelect = document.querySelector('.categoriesSelect');

categoriesSelect.addEventListener('change', function () {
  let idCategoria = categoriesSelect.value;

  fetch('https://api.mercadolibre.com/sites/MLC/search?category=' + idCategoria, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then(function (respt) {
      //Turns the the JSON into a JS object
      return respt.json();
    })
    .then(function (info) {
      console.log(info);

      for (let k = 0; k < info.results.length; k++) {
        // console.log(info.results[k].price);
        // console.log(info.results[k].title);
        // console.log(info.results[k].available_quantity);
        // console.log(info.results[k].thumbnail);

        let resultsList = document.querySelector('.resultsList');
        let divResultsInput = document.createElement('div');
        divResultsInput.className = 'divResultsInput';
        let divImages = document.createElement('div');
        divImages.className = 'divImages';
        let image = document.createElement('img');
        image.className = 'image';
        image.setAttribute('src', info.results[k].thumbnail);
        divImages.appendChild(image);

        let titleProduc = document.createTextNode(info.results[k].title);
        let pTitle = document.createElement('p');
        pTitle.appendChild(titleProduc);
        divTitle = document.createElement('div');
        divTitle.appendChild(pTitle);
        divTitle.className = 'divTitle';


        let priceProduc = document.createTextNode(info.results[k].price);
        let pPrice = document.createElement('p');
        let simbol = document.createTextNode('$ ');
        pPrice.appendChild(simbol);
        pPrice.appendChild(priceProduc);
        divPrice = document.createElement('div');
        divPrice.appendChild(pPrice);
        divPrice.className = 'divPrice';

        let pAvailable = document.createElement('p');
        let availableProduc = document.createTextNode(info.results[k].available_quantity);
        pAvailable.className = 'pAvailable';
        let textA = document.createTextNode('Disponibilidad: ');
        pAvailable.appendChild(textA);

        pAvailable.appendChild(availableProduc);
        divAvailable = document.createElement('div');
        divAvailable.appendChild(pAvailable);

        let divButton = document.createElement('div');
        let buttonCart = document.createElement('button');
        buttonCart.className = 'buttonCart';
        buttonCart.appendChild(document.createTextNode('Add to Cart'));
        divButton.appendChild(buttonCart);

        let itemNumber = document.querySelector('.item-number');
        let WishList = document.querySelector('.WishList');

        buttonCart.addEventListener('click', function () {

          let element = event.target.parentNode.parentNode.firstChild.nextSibling.firstChild.textContent;
          let itemNumber = document.querySelector('.item-number');
          let divWish = document.createElement('div');
          let textDivWish = document.createElement('p');

          let text = document.createTextNode(element);
          textDivWish.appendChild(text);
          divWish.appendChild(textDivWish);
          WishList.appendChild(divWish);


          let numerActual = itemNumber.textContent;
          let actual = parseInt(numerActual) + 1;
          itemNumber.innerHTML = '';
          itemNumber.appendChild(document.createTextNode(actual));
        })

        divResultsInput.appendChild(divImages);
        divResultsInput.appendChild(divTitle);
        divResultsInput.appendChild(divPrice);
        divResultsInput.appendChild(divAvailable);
        divResultsInput.appendChild(divButton);

        resultsList.appendChild(divResultsInput);


      }
    })
})
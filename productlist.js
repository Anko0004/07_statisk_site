const mycategory = new URLSearchParams(window.location.search).get("category");

const productContainer = document.querySelector(".product_list_container");
const overskirft = document.querySelector("h2");

overskirft.innerHTML = mycategory;

// fetch(`https://kea-alt-del.dk/t7/api/products?category=${mycategory}`)
//   .then((response) => response.json())
//   .then((data) => showList(data));

// function showList(data) {
//   const markup = data
//     .map(
//       (product) => `

//       <div class="product_item">
//                  <a href="product.html?id=${product.id}">

//                     <div>
//                         <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="tshirt">
//                         <p class="bold"> ${product.productdisplayname}</p>
//                         <p>${product.price} DKK</p>
//                         <div class="new_price"></div>

//                         <P class="read_more">READ MORE</P>

//                         <div class="soldout ${product.soldout && "isSoldOut"}">
//                             <p class="bold">SOLDOUT</p>
//                         </div>

//                         <div class="sale ${product.discount && "isOnSale"}">
//                             <p class="bold"> ${product.discount} %</p>
//                         </div>

//                     </div>
//                 </a>
//             </div>
//    `
//     )
//     .join("");
//   productContainer.innerHTML = markup;
// }

// Filtrering af knapper //
//const myfilter = new URLSearchParams(window.location.search).get("gender");

//const filterContainer = document.querySelector(".filter_container");

document.querySelectorAll("button").forEach((knap) => knap.addEventListener("click", showFiltered));

function showFiltered() {
  console.log("filter kører");
  const filter = this.dataset.gender;
  if (filter == "ALL") {
    showProducts(allData);
  } else {
    console.log("not all kører");
    let fraction = allData.filter((product) => product.gender === filter);
    console.log("allData", allData);
    showProducts(fraction);
  }
}

let allData;

fetch(`https://kea-alt-del.dk/t7/api/products?limit=50&category=${mycategory}`)
  .then((response) => response.json())
  .then((json) => {
    allData = json;
    showProducts(allData);
  });

function showProducts(data) {
  const markup = data
    .map(
      (product) => `
      
      <div class="product_item"> 
                 <a href="product.html?id=${product.id}">
                
                    <div>
                        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="tshirt">
                        <p class="bold"> ${product.productdisplayname}</p>
                        <p>${product.price} DKK</p>
                        <div class="new_price"></div>

                        <P class="read_more">READ MORE</P>

                        <div class="soldout ${product.soldout && "isSoldOut"}">
                            <p class="bold">SOLDOUT</p>
                        </div>

                        <div class="sale ${product.discount && "isOnSale"}">
                            <p class="bold"> ${product.discount} %</p>
                        </div>

                    </div>
                </a>
            </div>
   `
    )
    .join("");
  productContainer.innerHTML = markup;
}

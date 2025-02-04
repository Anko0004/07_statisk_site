const myProduct = new URLSearchParams(window.location.search);
const productId = myProduct.get("id");

let productContainer = document.querySelector(".productContainer");
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `

            <div>
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="tshirt">
            </div>

            <div class="product_info">
                <h2>${data.productdisplayname} </h2>

                <div class="model_name">
                    <p class="bold">Model name</p>
                    <p> ${data.productdisplayname} </p>
                </div>

                <div class="price">
                    <p> ${data.price} DKK</p>
                </div> 

                

                 <div class="soldout ${data.soldout && "isSoldOut"}">
                            <p class="bold">SOLDOUT</p>
                        </div>

                        <div class="sale ${data.discount && "isOnSale"}">
                            <p class="bold"> ${data.discount} %</p>
                        </div>

                <div class="color">
                    <p class="bold">Color</p>
                    <p> ${data.color1}</p>
                </div>

                <div class="Inventory_number">
                    <p class="bold">Inventory number</p>
                    <p> ${data.id}</p>
                </div>

                <div class="sizes">
                    <p class="bold">Sizes</p>
                    <span class="size">S</span>
                    <span class="size">M</span>
                    <span class="size">L</span>
                </div>

                <div>
                    <p>ADD TO BASKET</p>
                </div>

            
            </div>

    `;
  });

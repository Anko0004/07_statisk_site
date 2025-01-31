let productId = 1163;
let productContainer = document.querySelector(".productContainer");
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => respose.json())
  .then((data) => {
    productContainer.innerHTML = `

            <div>
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="tshirt">
            </div>

            <div class="product_info">
                <h2>Product information </h2>

                <div class="model_name">
                    <p class="bold">Model name</p>
                    <p> ${data.productdisplayname} </p>
                </div>

                <div class="price">
                    <p> ${data.price}</p>
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

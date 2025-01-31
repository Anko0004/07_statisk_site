let productId = 1163;
const listContainer = document.querySelector(".product_list_container");

fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  let markup = "";
  products
    .map((product) => {
      markup += `<div class="product_item">
                <a href="product.html">
                    <div>
                        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="tshirt">
                        <p class="bold"> ${product.productdisplayname}</p>
                        <p>${product.price}</p>
                        <P class="read_more">READ MORE</P>
                    </div>
                </a>
            </div>`;
    })
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}

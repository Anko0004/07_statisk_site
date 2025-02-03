const listContainer = document.querySelector(".product_list_container");

fetch(`https://kea-alt-del.dk/t7/api/products?limit=100`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  const markup = data
    .map(
      (product) => `
      <div class="product_item">
                <a href="product.html">
                    <div>
                        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="tshirt">
                        <p class="bold"> ${product.productdisplayname}</p>
                        <p>${product.price}</p>
                        <P class="read_more">READ MORE</P>
                    </div>
                </a>
            </div>
   `
    )
    .join("");
  listContainer.innerHTML = markup;
}

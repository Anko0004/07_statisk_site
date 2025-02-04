const listContainer = document.querySelector(".category_list_container");

fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then((data) => showCategory(data));

function showCategory(categories) {
  const markup = categories
    .map(
      (element) => ` 
    
                <a href="productlist.html?category=${element.category}">
                    <div>
                        <p>${element.category}</p>
                    </div>
                </a>
   `
    )
    .join("");
  listContainer.innerHTML = markup;
}
//

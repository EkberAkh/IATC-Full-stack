const url = "https://dummyjson.com/products";

const productsContainer = document.getElementById("productsContainer");
const openCartBtn = document.getElementById("openCard");
const cardsContainer = document.getElementById("cardContainer");
const closeCartBtn = document.getElementById("closeButton");
const loadMoreBtn = document.getElementById("loadMoreButton");
const sideCart = document.getElementById("sideCart");

openCartBtn.addEventListener("click", () => {
  cardsContainer.classList.add("translate-x-0");
});
closeCartBtn.addEventListener("click", () => {
  cardsContainer.classList.remove("translate-x-0");
});

function fetchData() {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const products = data.products;

      displayData(products.slice(0, 12));

      function displayData(products) {
        products.forEach((product) => {
          productsContainer.dataset.id = product.id;

          productsContainer.innerHTML += `
          <div
          data-id="${product.id}"
         class="card w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
       >
         <div
           class="flex items-end justify-end h-56 w-full bg-cover"
           style="background-image: url('${product.thumbnail}');"
         >
           <button
             class="add-to-card p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
           >
             <svg
               class="h-5 w-5 pointer-events-none"
               fill="none"
               stroke-linecap="round"
               stroke-linejoin="round"
               stroke-width="2"
               viewBox="0 0 24 24"
               stroke="currentColor"
             >
               <path
                 d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
               ></path>
             </svg>
           </button>
         </div>
         <div class="px-5 py-3">
           <h3 class="text-gray-700 uppercase">${product.title}</h3>
           <span class="text-gray-500 mt-2">$${product.price}</span>
         </div>
       </div>
   
         `;
        });
      }

      const remainingProducts = products.slice(12);
      loadMoreBtn.addEventListener("click", () => {
        displayData(remainingProducts);
        loadMoreBtn.classList.add("hidden");
      });
let count = 1;
let productArr = [];
      productsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("add-to-card")) {
          const product = e.target.closest(".card");
          

          const id = product.dataset.id;
       

          products.forEach((product) => {
            if (id == product.id ) {
             
              if (productArr.includes(id)) {
                console.log(sideCart.querySelector('span'))
                sideCart.querySelector('span').textContent = count++
              }else{
                productArr.push(id)
   

                sideCart.innerHTML += `
                <div class="flex">
                <img
                  class="h-20 w-20 object-cover rounded"
                  src="${product.thumbnail}"
                  alt=""
                />
                <div class="mx-3">
                  <h3 class="text-sm text-gray-600">${product.title}</h3>
                  <div class="flex items-center mt-2">
                    <button
                    id = "plusBtn"
                      class="text-gray-500 focus:outline-none focus:text-gray-600"
                    >
                      <svg
                        class="h-5 w-5"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </button>
                    <span id="countBar" class="text-gray-700 mx-2">1</span>
                    <button
                    id= "minusBtn"
                      class="text-gray-500 focus:outline-none focus:text-gray-600"
                    >
                      <svg
                        class="h-5 w-5"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <span class="text-gray-600">${product.price}$</span>
                `
              }
              sideCart.querySelector("#plusBtn").addEventListener("click", () =>{
                sideCart.querySelector('span').innerHTML = ++count
              })
              sideCart.querySelector("#minusBtn").addEventListener("click", () =>{
                if(count>0){

                  sideCart.querySelector('span').innerHTML = --count
                }
              })
            }
            
          })
       
        }
        console.log(productArr)
      });
      
    }).then(()=>{
      const plusBtn = document.getElementById('plusBtn');
      const minusBtn = document.getElementById('minusBtn');
      console.log(plusBtn)
    })
  // .then(() => {
  //   const addToCartBtn = document.querySelector(".add-to-card");

  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const allProducts = data.products;
  //       allProducts.forEach((product) => {

  //       });
  //     });
  // });
}

fetchData();

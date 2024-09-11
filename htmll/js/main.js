const hero = document.querySelector(".hero_left_block")
const product = document.querySelector(".products_list")
const newProducts = document.querySelector(".new_list")
const rek = document.querySelector(".rek_list")
import { getBanner, getProducts, getnewProducts, getRek} from "./service.js";


const renderHero = async () => {
    const data = await getBanner();

    hero.innerHTML = data.map((item) => `
        <img class="hero_left_img"
        src="${item.img}"
        alt=""
      />
    `).join("")
}

renderHero();


const renderProducts = async () => {
    const data = await getProducts();

    product.innerHTML = data.map((item) => `
        <li class = "products_item">
        <img src="${item.img}" alt="img"/>
        <p class = "products_price">${item.price}</p>
        <p class = "products_des">${item.text}</p>
        </li>
    `
    ).join("")
}

renderProducts();

const renderNewProducts = async () => {
    const data = await getnewProducts();

    newProducts.innerHTML = data.map((item) => `
        <li class = "products_item">
        <img src="${item.img}" alt="img"/>
        <p class = "new_price">${item.price}</p>
        <p class = "products_des">${item.text}</p>
        </li>
    `).join("")
}

renderNewProducts()

const renderRek = async () => {
    const data = await getRek();

    rek.innerHTML = data.map((item) => `
        <li class = "products_item">
        <img src="${item.img}" alt="img"/>
        <p class = "new_price">${item.price}</p>
        <p class = "products_des">${item.text}</p>
        </li>
    `).join("")
}

renderRek()
// ALL PLANTS

const loadCategoryAll = () => {
    const url = 'https://openapi.programming-hero.com/api/plants';
    fetch(url)
        .then((res) => res.json())
        .then((json) => displayCategoryAll(json.plants));
    // showPlantsCategory(json.plants)
}

// DISPLAY ALL PLANTS
const displayCategoryAll = (names) => {
    const allCategory = document
        .getElementById('plants-container')
    allCategory.innerHTML = '';

    for (let plant of names) {
        // console.log(name);
        const buttonLi = document.createElement('div')
        buttonLi.innerHTML =
            `
                    <div class="inter shadow-sm rounded-xl h-full">
                        <img class="h-50 w-full mx-auto shadow-sm bg-position-[center_top_3rem]" src="${plant.image}" alt="">
                        <div class="p-3">
                            <h4 class="font-bold">${plant.name}</h4>
                            <p class="text-[13px] my-2">${plant.description}</p>
                            <div class="flex justify-between my-3">
                                <h6 class="text-[14px] rounded-2xl bg-[#DCFCE7] text-[#15803D] p-2 font-semibold">${plant.category}</h6>
                                <h6 class="text-[14px] font-semibold items-center"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${plant.price}</h6>
                            </div>
                            <button id="addToCart-${plant.id}" class="w-full bg-[#15803D] p-2 text-[#fff] rounded-full text-[10px]">Add to Cart</button>
                        </div>
                    </div>
            `
        allCategory.append(buttonLi)

    }
}
loadCategoryAll()



// LOAD PLANTS IN CATEGORY LIST
const loadCategories = () => {
    const url = 'https://openapi.programming-hero.com/api/categories';
    fetch(url)
        .then((res) => res.json())
        .then((json) => displayCategory(json.categories));
}

// DISPLAY PLANTS CONTAINER 
const displayCategory = (names) => {
    const displayCategory = document.getElementById('category-container')
    displayCategory.innerHTML = '';

    for (let name of names) {
        // console.log(name);
        const btnLi = document.createElement('li')
        btnLi.innerHTML = `        
        <li id="${name.id}" class="btn bg-[#DCFCE7] w-full hover:bg-[#15803D]  hover:text-[#ffff]">${name.category_name}</li>
    `
        displayCategory.append(btnLi)


        btnLi.addEventListener('click', (e) => {

            const allLi = document.querySelectorAll('li')
            allLi.forEach(li => {
                li.classList.remove('border-4', '!bg-[#15803D]')
            })
            if (e.target.localName === 'li') {
                // console.log(e.target.id)
                e.target.classList.add('border-4', '!bg-[#15803D]')
                loadTreeCategory(e.target.id)
            }
        })

        const loadTreeCategory = (categoryId) => {
            // console.log(categoryId)
            fetch(`https://openapi.programming-hero.com/api/category/${categoryId}`)
                .then(res => res.json())
                .then(data => {
                    showPlantsCategory(data.plants)
                })

                .catch(err => {
                    console.log(err)
                })
        }
    }


    const showPlantsCategory = (fruits) => {
        const plantsContainer = document.getElementById('plants-container')
        plantsContainer.innerHTML = '';
        fruits.forEach(plant => {
            // console.log(plant)
            plantsContainer.innerHTML +=
                `
                    <div class="inter shadow-sm rounded-xl h-full">
                        <img class="h-50 w-full mx-auto shadow-sm bg-position-[center_top_3rem]" src="${plant.image}" alt="">
                        <div class="p-3">
                            <h4 class="font-bold">${plant.name}</h4>
                            <p class="text-[13px] my-2">${plant.description}</p>
                            <div class="flex justify-between my-3">
                                <h6 class="text-[14px] rounded-2xl bg-[#DCFCE7] text-[#15803D] p-2 font-semibold">${plant.category}</h6>
                                <h6 class="text-[14px] font-semibold items-center"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${plant.price}</h6>
                            </div>
                            <button  class=" w-full bg-[#15803D] p-2 text-[#fff] rounded-full text-[10px]">Add to Cart</button>
                        </div>
                    </div>
            `
        })
    }
}


let addCarts = []
const select = document.getElementById('plants-container')
select.addEventListener('click', (e) => {
    // console.log(e.target)
    if (e.target.innerText === 'Add to Cart') {
        handelAddToCart(e)
    }
})

const handelAddToCart = (e) => {
    console.log(e.target)
    const title = e.target.parentNode.children[0].innerText
    const price = e.target.parentNode.children[2].children[1].innerText
    // console.log(title, price)
    addCarts.push({
        title: title,
        price: price
    })

    alert(title + ' ' + 'has been added to the cart')

    showAddtoCart(addCarts)
}

let total = 0;
const showAddtoCart = (addCarts) => {
    const addContainer = document.getElementById('addContainer')
    addContainer.innerHTML = '';

    addCarts.forEach(addCart => {
        total = total + parseInt(addCart.price)
        addContainer.innerHTML += `
            <div class="shadow-sm my-2 w-full p-2 bg-[#CFF0DC] rounded-xl">
                <div class="flex justify-between ">
                    <h1 class="text-[13px] font-bold">${addCart.title}</h1>
                    <span><i class="fa-solid fa-xmark text-red-500"></i></span>
                </div>
                <div id="price">
                    <p class="text-[13px]"><i class="fa-solid fa-bangladeshi-taka-sign"></i> ${addCart.price}</p>
                </div>
            </div>

        `
    })
    const totalElement = document.getElementById('total')
    totalElement.innerText = total;
}
    

loadCategories()
loadCategoryAll()



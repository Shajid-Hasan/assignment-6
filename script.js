// Category container All
const loadCategoryAll = () => {
    const url = 'https://openapi.programming-hero.com/api/plants';
    fetch(url)
    .then((res) => res.json())
    .then((json) => displayCategoryAll(json.plants));
    // showPlantsCategory(json.plants)
}

const displayCategoryAll = (names) => {
    const allCategory = document
    .getElementById('plants-container')
    allCategory.innerHTML = '';

    for(let plant of names){
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
                            <button onclick="addToCart('${plant.id}')" id="add-to-cart-${plant.id}" class="add-to-cart-btn w-full bg-[#15803D] p-2 text-[#fff] rounded-full text-[10px]">Add to Cart</button>
                        </div>
                    </div>
            `
    allCategory.append(buttonLi)

    }
}
loadCategoryAll()



// Load Categories
const loadCategories = () => {
    const url = 'https://openapi.programming-hero.com/api/categories';
    fetch(url)
        .then((res) => res.json())
        .then((json) => displayCategory(json.categories));
}


const displayCategory = (names) => {
    const displayCategory = document
        .getElementById('category-container')
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
            console.log(categoryId)
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
            console.log(plant)
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
                            <button onclick="addToCart('${plant.id}')" id="add-to-cart-${plant.id}" class="add-to-cart-btn w-full bg-[#15803D] p-2 text-[#fff] rounded-full text-[10px]">Add to Cart</button>
                        </div>
                    </div>
            `
            // plantsContainer.querySelector('button').addEventListener('click', () => {
            //     console.log("add to cart clicked")
            // })
            // const addToCart = () => {
            // conaole.log("click")

    
        })
    }
}
function addToCart(id){
    console.log('click')
    const selectTree = document.getElementsByClassName('add-to-cart-btn')
    // console.log(selectTree)
    for(let tree of selectTree){
        tree.addEventListener('click', function(){
            const tree1 = tree.parentNode.parentNode
        })
    }

}
loadCategories()
loadCategoryAll()



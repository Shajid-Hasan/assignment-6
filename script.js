// Category container All
// const loadCategoryAll = () => {
//     const url = 'https://openapi.programming-hero.com/api/plants';
//     fetch(url)
//     .then((res) => res.json())
//     .then((json) => displayCategoryAll(json.plants));
// }

// const displayCategoryAll = (names) => {
//     const allCategory = document
//     .getElementById('category-container-all')
//     allCategory.innerHTML = '';

//     for(let name of names){
//     // console.log(name);
//     const buttonLi = document.createElement('li')
//     buttonLi.innerHTML = `  
//         <li  class="btn bg-[#DCFCE7] w-full hover:bg-[#15803D]  hover:text-[#ffff]">${name.name}</li>
//     `
//     allCategory.append(buttonLi)

//     }
// }
// loadCategoryAll()



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
        fruits.forEach(plant => {
            console.log(plant)
            plantsContainer.innerHTML += `
                    <div class="inter shadow-sm rounded-xl h-full">
                        <img class="h-50 w-full mx-auto shadow-sm" src="${plant.image}" alt="">
                        <div class="p-3">
                            <h4 class="font-bold">${plant.name}</h4>
                            <p class="text-[13px] my-2">${plant.description}</p>
                            <div class="flex justify-between my-3">
                                <h6 class="text-[14px] rounded-2xl bg-[#DCFCE7] text-[#15803D] p-2 font-semibold">${plant.category}</h6>
                                <h6 class="text-[14px] font-semibold"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${plant.price}</h6>
                            </div>
                            <button class="w-full bg-[#15803D] p-2 text-[#fff] rounded-full text-[10px]">Add to Cart</button>
                        </div>
                    
                    </div>
                    
            `
        })
    }
}


loadCategories()
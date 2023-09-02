// DATA LOAD FUNCTION

function removeAll() {
    const main = document.getElementById('main')
    while (main.firstChild) {
        main.removeChild(main.firstChild)
    }

    const displayCards = document.getElementById('displayCards');
    while (displayCards.firstChild) {
        displayCards.removeChild(displayCards.firstChild);
    }
}

let currentPage=1000;

async function loadCatagories(selectedPage = '', providedCategoryName = '', providedCategoryID = 0) {


    if (selectedPage != '' && providedCategoryID != '' && providedCategoryName != 0) {
        removeAll()
        const url = await fetch(`https://openapi.programming-hero.com/api/videos/${selectedPage}/${providedCategoryName}/${providedCategoryID}`)
        const res = await url.json()
        const catagories = await res.data
        const lengthCount = [...catagories]

        if (lengthCount.length === 0) {
            emptyCatagory()
        }
        else {

            displayCatagories(catagories, providedCategoryName, providedCategoryID)
        }
    }
    else if (selectedPage != '' && providedCategoryID === 0 && providedCategoryName === '') {
        removeAll()
        const url = await fetch(`https://openapi.programming-hero.com/api/videos/${selectedPage}`)
        const res = await url.json()
        const catagories = await res.data
        const lengthCount = [...catagories]
        if (lengthCount.length === 0) {
            emptyCatagory()
        }
        else {

            displayCatagories(catagories, providedCategoryName, providedCategoryID)
        }
    }
    else {
        removeAll()
        const url = await fetch(`https://openapi.programming-hero.com/api/videos/${selectedPage}/${providedCategoryID}`)
        const res = await url.json()
        const catagories = await res.data
        const lengthCount = [...catagories]
        if (lengthCount.length === 0) {
            emptyCatagory()
        }
        else {
            removeAll()

            displayCatagories(catagories, providedCategoryName, providedCategoryID)
        }
    }
}

// DATA DISPLAY FUNCTION

function displayCatagories(catagories, providedCategoryName, providedCategoryID) {
    const catagoriesContainer = document.getElementById('categories')
    let displayCards = document.getElementById('displayCards')

    // const categoryID =singleCategory.category_id
    // const categoryName = singleCategory.category


    // category features starts
    if (providedCategoryName === '' && providedCategoryID === 0) {
        catagories.forEach(singleCategory => {
            const categoryConatiner = document.createElement('div')
            categoryConatiner.innerHTML = `
            <button id="${singleCategory.category}" class="btn-primary bg-slate-200 rounded hover:bg-red-200 text-black p-2 px-10 "> 
            ${singleCategory.category}
             </button>
            `
            catagoriesContainer.appendChild(categoryConatiner)
        })

        function activeCategory(buttonName, prevBtnColor = '', currentBtnColor = '') {
            buttonName.classList.remove(prevBtnColor)
            buttonName.classList.add(currentBtnColor)

        }

        const allBtn = document.getElementById('All')
        allBtn.classList.remove('bg-slate-200')
        allBtn.classList.add('active')
        allBtn.addEventListener('click', () => {
            // these buttons will not active
            activeCategory(musicBtn, 'active', 'bg-slate-200')
            activeCategory(comedyBtn, 'active', 'bg-slate-200')
            activeCategory(drawingBtn, 'active', 'bg-slate-200')

            currentPage = 1000;
            //only this button is active 
            activeCategory(allBtn, 'bg-slate-200', 'active')

            loadCatagories("category", '', 1000)
        })
        const musicBtn = document.getElementById('Music')
        musicBtn.addEventListener('click', () => {
            // these buttons will not active
            activeCategory(allBtn, 'active', 'bg-slate-200')
            activeCategory(comedyBtn, 'active', 'bg-slate-200')
            activeCategory(drawingBtn, 'active', 'bg-slate-200')

            currentPage = 1001;
            //only this button is active 
            activeCategory(musicBtn, 'bg-slate-200', 'active')

            loadCatagories("category", '', 1001)
        })



        const comedyBtn = document.getElementById('Comedy')
        comedyBtn.addEventListener('click', () => {
            // these buttons will not active
            activeCategory(musicBtn, 'active', 'bg-slate-200')
            activeCategory(drawingBtn, 'active', 'bg-slate-200')
            activeCategory(allBtn, 'active', 'bg-slate-200')

            //only this button is active 
            activeCategory(comedyBtn, 'bg-slate-200', 'active')
            currentPage = 1003;
            loadCatagories("category", '', 1003)
        })

        const drawingBtn = document.getElementById('Drawing')
        drawingBtn.addEventListener('click', () => {
            // these buttons will not active
            activeCategory(comedyBtn, 'active', 'bg-slate-200')
            activeCategory(allBtn, 'active', 'bg-slate-200')
            activeCategory(musicBtn, 'active', 'bg-slate-200')

            //only this button is active 
            activeCategory(drawingBtn, 'bg-slate-200', 'active')
            currentPage = 1005;
            loadCatagories("category", '', 1005)
        })
    }
    // category features ends

    else if (providedCategoryName === '' && (providedCategoryID === 1000 || providedCategoryID === 1001 || providedCategoryID === 1002 || providedCategoryID === 1003)) {
        catagories.forEach(card => {
            const singleCard = document.createElement('div')
            singleCard.classList.add('card')
            singleCard.classList.add('bg-slate-100')
            singleCard.classList.add('shadow-2xl')
            singleCard.innerHTML = `
            <figure>
            <img class="h-52 w-full" src=${card.thumbnail}>
            <div id="datePosted" class="absolute mt-36 ml-28 ${card.others.posted_date === "" ? "hidden" : ""}">
                <h2 class="bg-slate-700 text-white font-bold rounded p-1 px-5">
                ${Math.floor(parseInt(card.others.posted_date) / 3600)}hrs ${Math.floor((parseInt(card.others.posted_date) % 3600) / 60)} min ago
                </h2>
            </div>
            </figure>
            <div class="card-body">
            <div id="details" class="flex items-center gap-3">
            <!-- user image beside the title of the video in a circular shape -->
            <div id="user-image" class="">
            <img class="w-8 h-8 rounded-2xl" src=${card.authors[0].profile_picture} alt="user">
            </div>
            <!-- video title under video thumbnail -->
            <div id="video-title">
            <h2> ${card.title} </h2>
            </div>
            </div>
            <!-- user info under video thumbnail -->
            <div class="ml-10" id="user-stats">
            <div class="flex gap-3 items-center" id="userName">
            <div id="name">
            ${card.authors[0].profile_name}
            </div>
            <div class=${card.authors[0].verified != false ? "" : "hidden"} id="verifiedBlueTick">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
            fill="none">
            <g clip-path="url(#clip0_11_34)">
            <path
            d="M19.375 10.0001C19.375 10.8001 18.3922 11.4595 18.1953 12.197C17.9922 12.9595 18.5063 14.022 18.1203 14.6892C17.7281 15.3673 16.5484 15.4486 15.9984 15.9986C15.4484 16.5486 15.3672 17.7282 14.6891 18.1204C14.0219 18.5064 12.9594 17.9923 12.1969 18.1954C11.4594 18.3923 10.8 19.3751 10 19.3751C9.2 19.3751 8.54062 18.3923 7.80312 18.1954C7.04062 17.9923 5.97813 18.5064 5.31094 18.1204C4.63281 17.7282 4.55156 16.5486 4.00156 15.9986C3.45156 15.4486 2.27187 15.3673 1.87969 14.6892C1.49375 14.022 2.00781 12.9595 1.80469 12.197C1.60781 11.4595 0.625 10.8001 0.625 10.0001C0.625 9.20012 1.60781 8.54075 1.80469 7.80325C2.00781 7.04075 1.49375 5.97825 1.87969 5.31106C2.27187 4.63293 3.45156 4.55168 4.00156 4.00168C4.55156 3.45168 4.63281 2.272 5.31094 1.87981C5.97813 1.49387 7.04062 2.00793 7.80312 1.80481C8.54062 1.60793 9.2 0.625122 10 0.625122C10.8 0.625122 11.4594 1.60793 12.1969 1.80481C12.9594 2.00793 14.0219 1.49387 14.6891 1.87981C15.3672 2.272 15.4484 3.45168 15.9984 4.00168C16.5484 4.55168 17.7281 4.63293 18.1203 5.31106C18.5063 5.97825 17.9922 7.04075 18.1953 7.80325C18.3922 8.54075 19.375 9.20012 19.375 10.0001Z"
            fill="#2568EF" />
            <path
            d="M12.7094 7.20637L9.14062 10.7751L7.29062 8.92668C6.88906 8.52512 6.2375 8.52512 5.83594 8.92668C5.43437 9.32824 5.43437 9.97981 5.83594 10.3814L8.43125 12.9767C8.82187 13.3673 9.45625 13.3673 9.84687 12.9767L14.1625 8.66106C14.5641 8.25949 14.5641 7.60793 14.1625 7.20637C13.7609 6.80481 13.1109 6.80481 12.7094 7.20637Z"
            fill="#FFFCEE" />
            </g>
            <defs>
            <clipPath id="clip0_11_34">
            <rect width="20" height="20" fill="white" />
            </clipPath>
            </defs>
            </svg>
            </div>
            </div>
            <div class="" id="views">
            <h2>${card.others.views} views</h2>
            </div>
            </div>
            </div>`
            displayCards.appendChild(singleCard)
        }
        )
    }


}

//  EMPTY DATA DISPLAY

function emptyCatagory() {
    const main = document.getElementById('main')
    const emptyDisplay = document.createElement('div')
    emptyDisplay.innerHTML = `
        <div class="flex justify-center items-center gap-5 flex-col text-center mt-40"> 
        <img class="w-fit" src="./Icon.png">
        <h2 class="text-2xl font-bold">Oops!! Sorry, There is no content here </h2>
        </div>
        `
    main.appendChild(emptyDisplay)

}

// LOADING & DISPLAYING ALL DATA

loadCatagories("categories") /* it will load all the categories name in the categoryField at the beginning */

loadCatagories("category", '', 1000) /** it will load all categories at the beginning */


// SORT


const sortBtn = document.getElementById('sortByView')

async function sort(categoryId) {
    const url = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await url.json()
    const mainData = data.data
    // const newView = parseInt(singleData.others.views.split('k')[0]);
    // const arrayMainData = Array.from(mainData)
    mainData.sort((a,b)=> {
        const B = parseFloat((b.others.views || '0').replace('k',''))
        const A = parseFloat((a.others.views || '0').replace('k',''))
        return B - A
    }
    )
    displayCatagories(mainData,'',categoryId)
    console.log(mainData)
    
}

sortBtn.addEventListener('click',()=>{
    displayCards.innerHTML=''
    sort(currentPage)
})



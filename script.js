const galleryData = [
    // --- TECH MEMES SECTION ---
    {
        title: "The Existential Crisis",
        category: "memes",
        imgSrc: "https://i.pinimg.com/1200x/ab/da/6e/abda6ee8e592894ed0173150a661edcb.jpg", 
        desc: "Am I testing my code or is it testing me?"
    },
    {
        title: "The Ghost Character Error",
        category: "memes",
        imgSrc: "https://i.pinimg.com/736x/5f/dd/e1/5fdde1410480c7ab8aa316b3e769bd8b.jpg",
        desc: "Compiler: Error on line 265. Me looking closely at line 265: Just a random 'I' sitting there chilling."
    },
{
    title: "Post-Exam Trauma",
        category: "memes",
        imgSrc: "https://i.pinimg.com/736x/11/25/ef/1125efd25e1180051bca4f0b1c66cf71.jpg",
        desc: "Everyone asked how the exam went, but nobody asked if I survived it."
    },
    {
        title: "Coding in My Zone",
        category: "chibi", 
        imgSrc: "https://i.pinimg.com/736x/79/37/d9/7937d92d703baf478878b8f8c163f626.jpg",
        desc: "Headphones on, world off, music high, and code flying."
    },
    // --- Cute Companions Section (Clean Minimal Version) ---
    {
        title: "Smol Fluffball",
        category: "cute-pets",
        imgSrc: "https://i.pinimg.com/736x/f5/6b/30/f56b3094f1ae52d3a7c940962aebf17f.jpg"
    },
    {
        title: "Teacup Bunny",
        category: "cute-pets",
        imgSrc: "https://i.pinimg.com/control1/736x/ae/58/1d/ae581dcf48c86359fd7365b789c42592.jpg"
    },
    {
        title: "Pocket-Sized Bun",
        category: "cute-pets",
        imgSrc: "https://i.pinimg.com/control1/736x/b9/9d/bf/b99dbfe12f4bb0ba0ad612fee9e8a286.jpg"
    },
    
// --- Anime Vibes Section (Clean Minimal Version) ---
    {
        title: "Traditional Elegance",
        category: "chibi",
        imgSrc: "https://i.pinimg.com/736x/4d/00/d2/4d00d24686c2dc04080646c2163d2b4d.jpg"
    },
    {
        title: "Snow White Chibi",
        category: "chibi",
        imgSrc: "https://i.pinimg.com/control1/736x/79/9b/a5/799ba50e0434d8d15ed4b45c1d4faa77.jpg"
    },
    {
        title: "Flower Power Chibi",
        category: "chibi",
        imgSrc: "https://i.pinimg.com/control1/736x/e4/ec/10/e4ec10aa77ccaa32a12979dee8e31337.jpg"
    },
    {
        title: "Pink Blossom Smile",
        category: "chibi",
        imgSrc: "https://i.pinimg.com/736x/24/eb/ee/24ebee3ce8c84d2173f596a87bd6e820.jpg"
    },
    {
        title: "Princess Sketch",
        category: "chibi",
        imgSrc: "https://i.pinimg.com/control1/736x/5b/16/9e/5b169e00db96b3250c563d5cecc62e7c.jpg"
    },
    {
        title: "Whimsical Flower Wish",
        category: "chibi",
        imgSrc: "https://i.pinimg.com/control1/736x/c3/c5/5c/c3c55c7c71d2b035dedf3060db40fddc.jpg"
    },
    
    {
        title: "Neon Waterfall Night",
        category: "scenery",
        imgSrc: "https://i.pinimg.com/736x/ed/a6/c2/eda6c25f4888224230200a98085cf052.jpg" 
    },
    {
        title: "Dreamy Lake Lighthouse",
        category: "scenery",
        imgSrc: "https://i.pinimg.com/control1/1200x/19/aa/f4/19aaf42969bac1d0fab96ef526b210a6.jpg"
    },
    {
        title: "Magic River Bridge",
        category: "scenery",
        imgSrc: "https://i.pinimg.com/736x/7e/2b/d9/7e2bd9f5c6e3674bd7e2ab1fd61c8c80.jpg"
    },
    {
        title: "Cosmic Starry Sea",
        category: "scenery",
        imgSrc: "https://i.pinimg.com/736x/6e/a1/6b/6ea16b08a7f72772a7bf573188b3aaa5.jpg"
    },
    ];
    // DOM Elements
const gridContainer = document.getElementById("gallery-grid");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");

let currentImgIndex = 0;
let visibleImages = [...galleryData]; // Filtered images track karne ke liye

// 2. Render Gallery Function (Bina description ke cards)
function renderGallery(items) {
    gridContainer.innerHTML = "";
    items.forEach((item, index) => {
        const card = document.createElement("div");
        card.classList.add("gallery-item");
        card.onclick = () => openLightbox(index);
        
        card.innerHTML = `
            <div class="img-container">
                <img src="${item.imgSrc}" alt="${item.title}" loading="lazy">
            </div>
            <div class="item-info">
                <h3>${item.title}</h3>
            </div>
        `;
        gridContainer.appendChild(card);
    });
}

// 3. Filter Function
function filterGallery(category) {
    // Button Active State styling change karne ke liye
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
    if (category === "all") {
        visibleImages = [...galleryData];
    } else {
        visibleImages = galleryData.filter(item => item.category === category);
    }
    renderGallery(visibleImages);
}

// 4. Lightbox Functions (Popup modal aur dynamic next/prev button)
function openLightbox(index) {
    currentImgIndex = index;
    lightboxImg.src = visibleImages[currentImgIndex].imgSrc;
    lightboxCaption.innerText = visibleImages[currentImgIndex].title;
    lightbox.classList.add("active");
}

function closeLightbox() {
    lightbox.classList.remove("active");
}
function changeImage(direction) {
    currentImgIndex += direction;
    
    // Loop navigation (agar end par pohoch jayein toh wapas start)
    if (currentImgIndex >= visibleImages.length) currentImgIndex = 0;
    if (currentImgIndex < 0) currentImgIndex = visibleImages.length - 1;
    
    lightboxImg.src = visibleImages[currentImgIndex].imgSrc;
    lightboxCaption.innerText = visibleImages[currentImgIndex].title;
}

// Page load hote hi saari images show karne ke liye initialization
window.onload = () => {
    renderGallery(galleryData);
};
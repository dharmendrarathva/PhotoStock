const images = [
    // Mountain 
    { id: 1, title: "Mountain Landscape", author: "John Doe", category: "mountain", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754713980/img1mountain_yu3b9e.avif" },
    { id: 2, title: "Mountain Snowy Peak", author: "George Turner", category: "mountain", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754713980/photo-1546866581-ca8d558d0095_xnyssi.avif" },
    { id: 3, title: "Mountain Desert Dunes", author: "Peter Scott", category: "mountain", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754713980/img2mountain_cfu8ih.avif" },
    { id: 4, title: "Mountain Rocky Hills", author: "Michael Brown", category: "mountain", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754713980/photo-1546866581-ca8d558d0095_xnyssi.avif" },
    { id: 5, title: "Mountain Waterfall", author: "Jennifer Adams", category: "mountain", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754713980/photo-1511300636408-a63a89df3482_qo9nrw.avif" },
    { id: 6, title: "Mountain Cabin", author: "Thomas Martin", category: "mountain", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754713980/photo-1508739773434-c26b3d09e071_td4n7v.avif" },
    { id: 7, title: "Mountain Lake View", author: "Emily Chen", category: "mountain", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754713980/photo-1519681393784-d120267933ba_yckemh.avif" },
    { id: 8, title: "Mountain Foggy  Range", author: "Emma Baker", category: "mountain", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754713980/istockphoto-488870098-612x612_atzqk8.webp" },
    { id: 9, title: "Mountain Sunrise", author: "Andrew Young", category: "mountain", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754713981/photo-1530631383307-4a02169e6133_qspbnz.avif" },
    { id: 10, title: " Mountains Hiking Trail", author: "Victoria Nelson", category: "mountain", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754713989/premium_photo-1672762542894-caaa8d4f0a77_lxtjtt.avif" },

    // Forest
    { id: 11, title: "Forest Path", author: "Michael Brown", category: "forest", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754714950/premium_photo-1675355675464-2deabb1f893b_uu7hqw.avif" },
    { id: 12, title: "Autumn Forest", author: "Emma Baker", category: "forest", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754714948/premium_photo-1661915593326-9c0a4ed44d22_ioaj76.avif" },
    { id: 13, title: "Dense Green Forest", author: "Jennifer Adams", category: "forest", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754714949/premium_photo-1661941498559-dcc4967731fc_bzzjpj.avif" },
    { id: 14, title: "Rainforest Waterfall", author: "Peter Scott", category: "forest", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754714947/photo-1542273917363-3b1817f69a2d_dcvm5g.avif" },
    { id: 15, title: "Pine Tree Woods", author: "George Turner", category: "forest", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754714943/photo-1511497584788-876760111969_xo3e8r.avif" },
    { id: 16, title: "Misty Forest Morning", author: "Thomas Martin", category: "forest", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754714941/photo-1476231682828-37e571bc172f_o26yic.avif" },
    { id: 17, title: "River in Forest", author: "Emily Chen", category: "forest", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754714933/photo-1473448912268-2022ce9509d8_vi967j.avif" },
    { id: 18, title: "Tropical Jungle", author: "Victoria Nelson", category: "forest", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754714933/photo-1470115636492-6d2b56f9146d_qe1qn3.avif" },
    { id: 19, title: "Wildlife in Forest", author: "Andrew Young", category: "forest", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754714933/photo-1448375240586-882707db888b_npp99x.avif" },
    { id: 20, title: "Sunlight Through Trees", author: "John Doe", category: "forest", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754714933/photo-1426170042593-200f250dfdaf_kmhe3p.avif" },
    { id: 21, title: "Mountain Forest", author: "Hannah Evans", category: "forest", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754714932/photo-1542202229-7d93c33f5d07_sjbarb.avif" },
    { id: 22, title: "Forest Bridge", author: "Karen Lee", category: "forest", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754714932/istockphoto-598520904-612x612_p8kuyf.webp" },

    // Flowers 
    { id: 23, title: "Fresh Roses", author: "Amanda White", category: "flowers", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754715742/photo-1530209925954-8aecf4eb1e43_e2hwsr.avif" },
    { id: 24, title: "Sunflower Field", author: "Christopher Allen", category: "flowers", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754715747/photo-1682686580024-580519d4b2d2_hpois0.avif" },
    { id: 25, title: "Butterfly on Flower", author: "Diana Campbell", category: "flowers", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754715742/photo-1530209925954-8aecf4eb1e43_e2hwsr.avif" },
    { id: 26, title: "Cherry Blossoms", author: "Kevin Hall", category: "flowers", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754715721/photo-1515865404355-ddb5b0910878_smp2ca.avif" },
    { id: 27, title: "Tulip Garden", author: "Karen Lee", category: "flowers", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754715719/photo-1496661415325-ef852f9e8e7c_jwxlzy.avif" },
    { id: 28, title: "Daisy Bloom", author: "Sophia Hill", category: "flowers", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754715715/photo-1492463104320-56094d69c6c4_wcgwsg.avif" },
    { id: 29, title: "Orchid Beauty", author: "Jason Wright", category: "flowers", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754715714/photo-1490750967868-88aa4486c946_mmvhdq.avif" },
    { id: 30, title: "Lavender Field", author: "Hannah Evans", category: "flowers", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754715714/photo-1486944859394-ed1c44255713_xx6djq.avif" },
    { id: 31, title: "Wildflowers", author: "Daniel Clark", category: "flowers", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754715708/photo-1455659817273-f96807779a8a_fpekuu.avif" },
    { id: 32, title: "Marigold Blossom", author: "Nathan Carter", category: "flowers", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754715708/photo-1471696035578-3d8c78d99684_ceoipb.avif" },
    { id: 33, title: "Pink Lotus", author: "Emily Chen", category: "flowers", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754715708/photo-1454262041357-5d96f50a2f27_gdnp9y.avif" },
    { id: 34, title: "Bluebell Woods", author: "Michael Brown", category: "flowers", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754715708/photo-1444930694458-01babf71870c_l0amgl.avif" },

    // Beach
    { id: 35, title: "Beach Sunset", author: "Jane Smith", category: "beach", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754716065/photo-1682695798522-6e208131916d_ojee2k.avif" },
    { id: 36, title: "Palm Trees on Beach", author: "Andrew Young", category: "beach", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754716062/photo-1682695796497-31a44224d6d6_ksdbes.avif" },
    { id: 37, title: "Tropical Beach", author: "Emily Chen", category: "beach", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754716061/photo-1519046904884-53103b34b206_cnrk0x.avif" },
    { id: 38, title: "Golden Sand Beach", author: "Thomas Martin", category: "beach", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754716057/photo-1515238152791-8216bfdf89a7_riy1lr.avif" },
    { id: 39, title: "Beach Waves", author: "Victoria Nelson", category: "beach", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754716053/photo-1510414842594-a61c69b5ae57_ke6j8h.avif" },
    { id: 40, title: "Island Shore", author: "George Turner", category: "beach", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754716052/photo-1507525428034-b723cf961d3e_xrph2r.avif" },
    { id: 41, title: "Rocky Beach", author: "John Doe", category: "beach", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754716049/photo-1473116763249-2faaef81ccda_djq1ye.avif" },
    { id: 42, title: "Beach Chairs", author: "Peter Scott", category: "beach", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754716048/photo-1471922694854-ff1b63b20054_xbc3kp.avif" },
    { id: 43, title: "Coastal Sunset", author: "Emma Baker", category: "beach", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754716044/photo-1468413253725-0d5181091126_kpvf9o.avif" },
    { id: 44, title: "Seashells on Sand", author: "Michael Brown", category: "beach", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754716036/photo-1437719417032-8595fd9e9dc6_p5ai7s.avif" },
    { id: 45, title: "Beach Bonfire", author: "Sophia Hill", category: "beach", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754716034/photo-1432889490240-84df33d47091_ckuygp.avif" },
    { id: 46, title: "Surfing Adventure", author: "Daniel Clark", category: "beach", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754716033/photo-1424581342241-2b1aba4d3462_daugp5.avif" },

    // Sea
    { id: 47, title: "Tropical Fish", author: "Sophia Hill", category: "sea", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754716295/premium_photo-1667149988086-faabd5a500b3_doztx7.avif" },
    { id: 48, title: "Underwater Coral Reef", author: "Andrew Young", category: "sea", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754716294/photo-1507525428034-b723cf961d3e_1_oltasm.avif" },
    { id: 49, title: "Sea Waves", author: "Jane Smith", category: "sea", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754716291/photo-1468581264429-2548ef9eb732_bcq8ej.avif" },
    { id: 50, title: "Sea Fishing Boat", author: "Jason Wright", category: "sea", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754716290/photo-1457195740896-7f345efef228_wd2yyb.avif" },
    { id: 51, title: "Sailing on Sea", author: "Victoria Nelson", category: "sea", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754716286/photo-1439405326854-014607f694d7_tatyep.avif" },
    { id: 52, title: "Sea Sunset", author: "Emily Chen", category: "sea", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754716285/istockphoto-476111648-612x612_vropss.webp" },
    { id: 53, title: "Sea Blue Ocean View", author: "Thomas Martin", category: "sea", url: "https://res.cloudinary.com/ddpvhxnus/image/upload/v1754716285/istockphoto-1166376628-612x612_djtva7.webp" },

];

const imageGrid = document.getElementById('imageGrid');
const categoryTags = document.querySelectorAll('.category-tag');
const searchInput = document.querySelector('.search-bar input');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const imageTitle = document.getElementById('imageTitle');
const imageAuthor = document.getElementById('imageAuthor');
const downloadBtn = document.getElementById('downloadBtn');
const closeBtn = document.querySelector('.close-btn');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const joinBtn = document.querySelector('.join-btn');
const loginBtn = document.querySelector('.login-btn');
const authModal = document.getElementById('authModal');
const closeAuth = document.querySelector('.close-auth');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

let currentCategory = 'all';
let currentSearch = '';

function displayImages() {
    imageGrid.innerHTML = '';
    const filteredImages = images.filter(image => {
        const matchesCategory = currentCategory === 'all' || image.category === currentCategory;
        const matchesSearch = image.title.toLowerCase().includes(currentSearch.toLowerCase()) || image.author.toLowerCase().includes(currentSearch.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (!filteredImages.length) {
        imageGrid.innerHTML = '<p class="no-results">No images found matching your criteria.</p>';
        return;
    }

    filteredImages.forEach(image => {
        const imageCard = document.createElement('div');
        imageCard.className = 'image-card';
        imageCard.innerHTML = `
            <img src="${image.url}" alt="${image.title}" data-id="${image.id}" loading="lazy">
            <div class="image-overlay">
                <h3>${image.title}</h3>
                <p>By ${image.author}</p>
            </div>
        `;
        imageGrid.appendChild(imageCard);

        const imgElement = imageCard.querySelector('img');
        imgElement.addEventListener('error', () => {
            imgElement.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
        });

        imageCard.style.cursor = 'pointer';
        imageCard.addEventListener('click', () => openModal(image));
    });
}

function openModal(image) {
    modalImage.src = image.url;
    modalImage.alt = image.title;
    imageTitle.textContent = image.title;
    imageAuthor.textContent = `By ${image.author}`;
    downloadBtn.onclick = () => {
        const link = document.createElement('a');
        link.href = image.url;
        link.download = `${image.title.replace(/\s+/g, '_')}_by_${image.author.replace(/\s+/g, '_')}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
}

function handleKeyDown(e) {
    if (e.key === 'Escape') closeModal();
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.removeEventListener('keydown', handleKeyDown);
}

function openAuthModal(tab = 'login') {
    authModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    switchAuthTab(tab);
}

function closeAuthModal() {
    authModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function switchAuthTab(tab) {
    tabBtns.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    document.querySelector(`.tab-btn[data-tab="${tab}"]`).classList.add('active');
    document.getElementById(tab).classList.add('active');
}

function init() {
    displayImages();

    categoryTags.forEach(tag => {
        tag.addEventListener('click', () => {
            categoryTags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            currentCategory = tag.dataset.category;
            displayImages();
        });
    });

    searchInput.addEventListener('input', () => {
        currentSearch = searchInput.value.trim();
        displayImages();
    });

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', e => {
        if (e.target === modal) closeModal();
        if (e.target === authModal) closeAuthModal();
    });

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    joinBtn.addEventListener('click', () => openAuthModal('join'));
    loginBtn.addEventListener('click', () => openAuthModal('login'));

    closeAuth.addEventListener('click', closeAuthModal);

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            switchAuthTab(btn.dataset.tab);
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                navLinks.classList.remove('active');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', init);
document.querySelector('.logo').addEventListener('click', () => {
    window.location.href = '_0index.html';
});

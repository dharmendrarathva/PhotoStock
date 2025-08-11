
const authModal = document.getElementById('authModal');
const closeAuth = document.querySelector('.close-auth');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const joinBtn = document.querySelector('.join-btn');
const loginBtn = document.querySelector('.login-btn');


function openAuthModal(tab = 'login') {
    if (!authModal) return; // in case the page has no modal
    authModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    switchAuthTab(tab);
}

function closeAuthModal() {
    if (!authModal) return;
    authModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function switchAuthTab(tab) {
    tabBtns.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    const activeBtn = document.querySelector(`.tab-btn[data-tab="${tab}"]`);
    const activeContent = document.getElementById(tab);

    if (activeBtn) activeBtn.classList.add('active');
    if (activeContent) activeContent.classList.add('active');
}


if (joinBtn) joinBtn.addEventListener('click', () => openAuthModal('join'));
if (loginBtn) loginBtn.addEventListener('click', () => openAuthModal('login'));
if (closeAuth) closeAuth.addEventListener('click', closeAuthModal);

window.addEventListener('click', (e) => {
    if (e.target === authModal) closeAuthModal();
});

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => switchAuthTab(btn.dataset.tab));
});



document.querySelector('.logo').addEventListener('click', () => {
    window.location.href = 'Html/Home.html';
});

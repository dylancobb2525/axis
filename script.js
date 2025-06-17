// Activities data
const activities = [
    {
        id: 1,
        title: "Optimizing Perioperative Therapy in Early-Stage NSCLC: A Multidisciplinary Approach",
        category: "EARLY-STAGE NSCLC",
        specialText: "Activity Includes Mini-Focus Group Discussion",
        code: "AXIS 17488",
        chairperson: "Heather Wakelee, MD, FASCO",
        institution: "Stanford University and Stanford Cancer Institute",
        location: "Palo Alto, CA",
        poweredBy: "AXIS Powered by GLC",
        supportedBy: "Merck & BMS",
        hasNewBadge: true,
        image: "/activitylogos/cell1.jpg"
    },
    {
        id: 2,
        title: "Enhancing Diagnosis, Treatment, and Outcomes in Paroxysmal Nocturnal Hemoglobinuria with Novel Oral Therapeutics",
        category: "PAROXYSMAL NOCTURNAL HEMOGLOBINURIA ORAL THERAPEUTICS",
        code: "AXIS 14967",
        chairperson: "Carlos M. De Castro, III, MD",
        institution: "Duke Comprehensive Cancer Center",
        location: "Durham, NC",
        supportedBy: "Novartis",
        hasNewBadge: true,
        image: "/activitylogos/cell2.jpg"
    },
    {
        id: 3,
        title: "Improving HR+/HER2- Breast Cancer Outcomes with TROP2 Antibody-Drug Conjugates",
        category: "BREAST CANCER WITH TROP2 ADCS",
        code: "AXIS 16178",
        chairperson: "Aditya Bardia, MD, MPH, FASCO",
        institution: "University of California",
        location: "Los Angeles, CA",
        supportedBy: "DSI & AZ",
        hasNewBadge: false,
        image: "/activitylogos/cell3.jpg"
    },
    {
        id: 4,
        title: "Redefining Treatment Across the Spectrum of HR+ HER2-expressing Metastatic Breast Cancer",
        category: "ULTRA LOW BREAST CANCER",
        code: "AXIS 16169",
        chairperson: "Sara Tolaney, MD, MPH",
        institution: "Dana-Farber Cancer Institute / Harvard Medical School",
        location: "Boston, MA",
        supportedBy: "DSI & AZ",
        hasNewBadge: false,
        image: "/activitylogos/cell4.jpg"
    },
    {
        id: 5,
        title: "Novel Treatments for Newly Diagnosed Ph+CML-CP: Striking the Balance of Treatment with Patient Goals and QoL",
        category: "NOVEL TREATMENTS FOR PH+CML-CP",
        code: "AXIS 15852",
        chairperson: "Jorge Cortes, MD",
        institution: "Georgia Cancer Center at Augusta University",
        location: "Augusta, GA",
        supportedBy: "Novartis",
        hasNewBadge: false,
        image: "/activitylogos/cell5.jpg"
    },
    {
        id: 6,
        title: "The Evolving Role of Bispecific Antibody Therapy in Relapsed or Refractory Follicular Lymphoma",
        category: "BISPECIFIC ANTIBODY THERAPY IN R/R FOLLICULAR LYMPHOMA",
        code: "AXIS 15533",
        chairperson: "Tycel Phillips, MD",
        institution: "City of Hope",
        location: "Duarte, CA",
        supportedBy: "Genmab",
        hasNewBadge: false,
        image: "/activitylogos/cell6.jpg"
    },
    {
        id: 7,
        title: "Practice Changing Strategies in Community Care Settings for Patients with CLL/SLL/MCL",
        category: "CLL/SLL/MCL",
        code: "AXIS 13955",
        chairperson: "Matthew S. Davids, MD",
        institution: "Harvard Medical School/Dana-Farber Cancer Institute",
        location: "Boston, MA",
        supportedBy: "Lilly",
        hasNewBadge: false,
        hasSpecialBadge: "ASH Updates",
        image: "/activitylogos/cell7.jpg"
    },
    {
        id: 8,
        title: "Community Practice Perspectives: Exploring Treatment Intensification with CDK 4/6i in Adjuvant HR+, HER2-, High-Risk Early Breast Cancer",
        category: "HIGH-RISK EARLY BREAST CANCER",
        code: "AXIS 13830",
        chairperson: "Adam Brufsky, MD, PhD",
        institution: "UPMC Hillman Cancer Center, University of Pittsburgh",
        location: "Pittsburgh, PA",
        supportedBy: "Lilly",
        hasNewBadge: false,
        hasSpecialBadge: "SABCS Updates",
        image: "/activitylogos/cell8.jpg"
    },
    {
        id: 9,
        title: "Advancing ALK Inhibition into Early-Stage NSCLC: Integrating Biomarker-Driven Therapies to Reduce Recurrence Risk Post Resection",
        category: "EARLY STAGE NSCLC",
        code: "AXIS 13434",
        chairperson: "Mark A. Socinski, MD",
        institution: "AdventHealth Cancer Institute",
        location: "Orlando, FL",
        supportedBy: "Genentech",
        hasNewBadge: false,
        image: "/activitylogos/cell9.jpg"
    }
];

// Global variables
let currentActivity = null;
const CORRECT_PASSWORD = 'ushaxisdemo$';

// DOM Elements
const passwordModal = document.getElementById('passwordModal');
const mainContent = document.getElementById('mainContent');
const passwordForm = document.getElementById('passwordForm');
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('passwordError');
const togglePassword = document.getElementById('togglePassword');

// Modal elements
const activityModal = document.getElementById('activityModal');
const bookNowModal = document.getElementById('bookNowModal');
const bookActivityModal = document.getElementById('bookActivityModal');
const askQuestionModal = document.getElementById('askQuestionModal');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    generateActivitiesGrid();
    setupCounters();
    checkAuthenticationStatus();
});

// Check if user was previously authenticated
function checkAuthenticationStatus() {
    const wasAuthenticated = sessionStorage.getItem('axis-authenticated');
    if (wasAuthenticated === 'true') {
        showMainContent();
    }
}

// Initialize app
function initializeApp() {
    // Check scroll position for back to top button
    window.addEventListener('scroll', handleScroll);
}

// Handle scroll events
function handleScroll() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (window.scrollY > 300) {
        backToTopBtn.classList.remove('hidden');
    } else {
        backToTopBtn.classList.add('hidden');
    }
}

// Setup event listeners
function setupEventListeners() {
    // Password form
    passwordForm.addEventListener('submit', handlePasswordSubmit);
    togglePassword.addEventListener('click', togglePasswordVisibility);
    
    // Navigation buttons
    document.getElementById('bookNowBtn').addEventListener('click', () => openModal('bookNow'));
    document.getElementById('bookNowHeroBtn').addEventListener('click', () => openModal('bookNow'));
    document.getElementById('exploreActivitiesBtn').addEventListener('click', scrollToActivities);
    
    // Modal close buttons
    document.getElementById('closeBookNowModal').addEventListener('click', () => closeModal('bookNow'));
    document.getElementById('closeBookActivityModal').addEventListener('click', () => closeModal('bookActivity'));
    document.getElementById('closeAskQuestionModal').addEventListener('click', () => closeModal('askQuestion'));
    
    // Cancel buttons
    document.getElementById('cancelBookNow').addEventListener('click', () => closeModal('bookNow'));
    document.getElementById('cancelBookActivity').addEventListener('click', () => closeModal('bookActivity'));
    document.getElementById('cancelAskQuestion').addEventListener('click', () => closeModal('askQuestion'));
    
    // Form submissions
    document.getElementById('bookNowForm').addEventListener('submit', handleFormSubmit);
    document.getElementById('bookActivityForm').addEventListener('submit', handleFormSubmit);
    document.getElementById('askQuestionForm').addEventListener('submit', handleFormSubmit);
    
    // Back to top button
    document.getElementById('backToTopBtn').addEventListener('click', scrollToTop);
    
    // Logout button
    document.getElementById('logoutBtn').addEventListener('click', logout);
    
    // Modal backdrop clicks
    [activityModal, bookNowModal, bookActivityModal, askQuestionModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeAllModals();
            }
        });
    });
}

// Password handling
function handlePasswordSubmit(e) {
    e.preventDefault();
    const password = passwordInput.value;
    
    if (password === CORRECT_PASSWORD) {
        sessionStorage.setItem('axis-authenticated', 'true');
        showMainContent();
    } else {
        showPasswordError('Incorrect password. Please try again.');
        passwordInput.value = '';
    }
}

function togglePasswordVisibility() {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
}

function showPasswordError(message) {
    passwordError.textContent = message;
    passwordError.classList.remove('hidden');
    setTimeout(() => {
        passwordError.classList.add('hidden');
    }, 5000);
}

function showMainContent() {
    passwordModal.classList.add('hidden');
    mainContent.classList.remove('hidden');
}

function logout() {
    sessionStorage.removeItem('axis-authenticated');
    passwordModal.classList.remove('hidden');
    mainContent.classList.add('hidden');
    passwordInput.value = '';
    closeAllModals();
}

// Generate activities grid
function generateActivitiesGrid() {
    const grid = document.getElementById('activitiesGrid');
    grid.innerHTML = '';
    
    activities.forEach(activity => {
        const card = createActivityCard(activity);
        grid.appendChild(card);
    });
}

// Create activity card
function createActivityCard(activity) {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer fade-in';
    card.onclick = () => openActivityModal(activity);
    
    card.innerHTML = `
        <div class="relative">
            <img src="${activity.image}" alt="Activity Image" class="w-full h-48 object-cover">
            ${activity.hasNewBadge ? '<span class="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">NEW</span>' : ''}
            ${activity.hasSpecialBadge ? `<span class="absolute top-4 right-4 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">${activity.hasSpecialBadge}</span>` : ''}
        </div>
        <div class="p-6">
            <div class="text-sm text-orange-500 font-semibold mb-2">${activity.category}</div>
            <h3 class="text-lg font-bold text-gray-800 mb-3 line-clamp-2">${activity.title}</h3>
            <div class="space-y-2 text-sm text-gray-600 mb-4">
                <div><strong>Code:</strong> ${activity.code}</div>
                <div><strong>Chair:</strong> ${activity.chairperson}</div>
                <div><strong>Institution:</strong> ${activity.institution}</div>
                <div><strong>Location:</strong> ${activity.location}</div>
                ${activity.supportedBy ? `<div><strong>Supported by:</strong> ${activity.supportedBy}</div>` : ''}
                ${activity.poweredBy ? `<div><strong>Powered by:</strong> ${activity.poweredBy}</div>` : ''}
            </div>
            <button class="w-full bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors">
                View Details
            </button>
        </div>
    `;
    
    return card;
}

// Open activity modal
function openActivityModal(activity) {
    currentActivity = activity;
    const modalContent = document.getElementById('activityModalContent');
    
    modalContent.innerHTML = `
        <div class="p-6 border-b flex justify-between items-center">
            <h2 class="text-xl font-semibold text-gray-800">Activity Details</h2>
            <button onclick="closeModal('activity')" class="text-gray-400 hover:text-gray-600 text-2xl">×</button>
        </div>
        
        <div class="p-6">
            <div class="relative mb-6">
                <img src="${activity.image}" alt="Activity Image" class="w-full h-64 object-cover rounded-lg">
                ${activity.hasNewBadge ? '<span class="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">NEW</span>' : ''}
                ${activity.hasSpecialBadge ? `<span class="absolute top-4 right-4 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">${activity.hasSpecialBadge}</span>` : ''}
            </div>
            
            <div class="text-sm text-orange-500 font-semibold mb-2">${activity.category}</div>
            <h3 class="text-2xl font-bold text-gray-800 mb-4">${activity.title}</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div class="space-y-3">
                    <div><span class="font-semibold text-gray-700">Activity Code:</span> ${activity.code}</div>
                    <div><span class="font-semibold text-gray-700">Chairperson:</span> ${activity.chairperson}</div>
                    <div><span class="font-semibold text-gray-700">Institution:</span> ${activity.institution}</div>
                    <div><span class="font-semibold text-gray-700">Location:</span> ${activity.location}</div>
                </div>
                <div class="space-y-3">
                    ${activity.supportedBy ? `<div><span class="font-semibold text-gray-700">Supported by:</span> ${activity.supportedBy}</div>` : ''}
                    ${activity.poweredBy ? `<div><span class="font-semibold text-gray-700">Powered by:</span> ${activity.poweredBy}</div>` : ''}
                    ${activity.specialText ? `<div class="text-blue-600 font-medium">${activity.specialText}</div>` : ''}
                </div>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-3">
                <button onclick="openBookActivityModal('${activity.code}')" class="flex-1 bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors font-medium">
                    Book This Activity
                </button>
                <button onclick="openAskQuestionModal('${activity.code}')" class="flex-1 border-2 border-orange-500 text-orange-500 py-3 px-6 rounded-lg hover:bg-orange-50 transition-colors font-medium">
                    Ask a Question
                </button>
            </div>
        </div>
    `;
    
    activityModal.classList.remove('hidden');
}

// Open book activity modal
function openBookActivityModal(activityCode = '') {
    closeModal('activity');
    document.getElementById('activityEventId').value = activityCode;
    openModal('bookActivity');
}

// Open ask question modal
function openAskQuestionModal(activityCode = '') {
    closeModal('activity');
    document.getElementById('questionEventId').value = activityCode;
    openModal('askQuestion');
}

// Modal management
function openModal(modalType) {
    closeAllModals();
    
    switch(modalType) {
        case 'bookNow':
            bookNowModal.classList.remove('hidden');
            break;
        case 'bookActivity':
            bookActivityModal.classList.remove('hidden');
            break;
        case 'askQuestion':
            askQuestionModal.classList.remove('hidden');
            break;
        case 'activity':
            activityModal.classList.remove('hidden');
            break;
    }
}

function closeModal(modalType) {
    switch(modalType) {
        case 'bookNow':
            bookNowModal.classList.add('hidden');
            resetForm('bookNowForm');
            break;
        case 'bookActivity':
            bookActivityModal.classList.add('hidden');
            resetForm('bookActivityForm');
            break;
        case 'askQuestion':
            askQuestionModal.classList.add('hidden');
            resetForm('askQuestionForm');
            break;
        case 'activity':
            activityModal.classList.add('hidden');
            break;
    }
}

function closeAllModals() {
    [activityModal, bookNowModal, bookActivityModal, askQuestionModal].forEach(modal => {
        modal.classList.add('hidden');
    });
}

// Form handling
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Simple form validation
    const form = e.target;
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('border-red-500');
            isValid = false;
        } else {
            input.classList.remove('border-red-500');
        }
        
        // Email validation
        if (input.type === 'email' && input.value.trim()) {
            if (!input.value.includes('@')) {
                input.classList.add('border-red-500');
                isValid = false;
            }
        }
    });
    
    if (isValid) {
        // Show success message
        showSuccessMessage(form);
    } else {
        // Show error message
        showFormError('Please fill out all required fields with valid information.');
    }
}

function showSuccessMessage(form) {
    const formContainer = form.parentElement;
    
    formContainer.innerHTML = `
        <div class="text-center py-8">
            <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Message Sent!</h3>
            <p class="text-sm text-gray-500">Thank you for your request. We'll get back to you soon!</p>
        </div>
    `;
    
    // Close modal after 3 seconds
    setTimeout(() => {
        closeAllModals();
    }, 3000);
}

function showFormError(message) {
    // Create error message element
    const errorDiv = document.createElement('div');
    errorDiv.className = 'bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm mb-4';
    errorDiv.textContent = message;
    
    // Remove existing error messages
    document.querySelectorAll('.bg-red-50').forEach(el => el.remove());
    
    // Add error message to active modal
    const activeModal = document.querySelector('[class*="modal"]:not(.hidden) form');
    if (activeModal) {
        activeModal.insertBefore(errorDiv, activeModal.firstChild);
        
        // Remove error after 5 seconds
        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    }
}

function resetForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.reset();
        // Remove error styling
        form.querySelectorAll('input, textarea').forEach(input => {
            input.classList.remove('border-red-500');
        });
    }
}

// Utility functions
function scrollToActivities() {
    document.getElementById('activities').scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Animated counters
function setupCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.counter);
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const duration = 2000; // 2 seconds
    const stepTime = duration / 100;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // Format number with commas for large numbers
        const displayValue = Math.floor(current).toLocaleString();
        element.textContent = target >= 1000 ? displayValue : Math.floor(current);
    }, stepTime);
}

// Keyboard event handling
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeAllModals();
    }
});

// Fade in elements on scroll
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        observer.observe(el);
    });
}

// Initialize scroll animations when DOM is ready
document.addEventListener('DOMContentLoaded', setupScrollAnimations); 
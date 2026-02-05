// Destinations data
const destinations = {
    paris: {
        name: "Paris 1889 - Belle Époque",
        year: "1889",
        icon: "🗼",
        description: "Plongez dans le Paris de la Belle Époque, assister à l'inauguration de la Tour Eiffel et découvrir l'Exposition Universelle de 1889.",
        highlights: [
            "Inauguration de la Tour Eiffel par Gustave Eiffel",
            "Visite de l'Exposition Universelle",
            "Promenade sur les Champs-Élysées",
            "Découverte du Moulin Rouge et du Cabaret",
            "Rencontre avec les impressionnistes",
            "Dégustation de la gastronomie française raffinée"
        ],
        price: "4,500€",
        duration: "7 jours",
        keywords: ["art", "culture", "raffinement", "architecture", "gastronomie"]
    },
    cretace: {
        name: "Crétacé -65M - Ère des Dinosaures",
        year: "-65 millions d'années",
        icon: "🦕",
        description: "Explorez la Terre préhistorique et observez les dinosaures dans leur habitat naturel. Une aventure extraordinaire dans un monde perdu.",
        highlights: [
            "Safari dinosaures avec T-Rex et Triceratops",
            "Observation des Ptérodactyles",
            "Exploration de forêts préhistoriques luxuriantes",
            "Découverte de la flore du Crétacé",
            "Randonnée dans des paysages vierges",
            "Bivouac sous un ciel étoilé préhistorique"
        ],
        price: "8,900€",
        duration: "10 jours",
        keywords: ["nature", "aventure", "science", "découverte", "sauvage"]
    },
    florence: {
        name: "Florence 1504 - Renaissance",
        year: "1504",
        icon: "🎨",
        description: "Vivez l'âge d'or de la Renaissance italienne, rencontrez Michel-Ange et Léonard de Vinci, et découvrez les chefs-d'œuvre qui ont changé l'histoire de l'art.",
        highlights: [
            "Rencontre avec Michel-Ange dans son atelier",
            "Visite privée de la Chapelle Sixtine en création",
            "Découverte du David de Michel-Ange",
            "Atelier avec Léonard de Vinci",
            "Exploration du Duomo et ses merveilles",
            "Dégustation de cuisine toscane authentique"
        ],
        price: "6,200€",
        duration: "8 jours",
        keywords: ["art", "culture", "histoire", "architecture", "raffinement"]
    }
};

// Quiz data
const quizQuestions = [
    {
        question: "Quel type d'expérience recherchez-vous ?",
        options: [
            { text: "Culturelle et artistique", value: "culture", icon: "🎨" },
            { text: "Aventure et nature", value: "aventure", icon: "🌿" },
            { text: "Élégance et raffinement", value: "elegance", icon: "✨" }
        ]
    },
    {
        question: "Votre période préférée ?",
        options: [
            { text: "Histoire moderne (XIXe-XXe siècle)", value: "moderne", icon: "🏙️" },
            { text: "Temps anciens et origines", value: "ancien", icon: "🦕" },
            { text: "Renaissance et classicisme", value: "renaissance", icon: "🏛️" }
        ]
    },
    {
        question: "Vous préférez :",
        options: [
            { text: "L'effervescence urbaine", value: "urbain", icon: "🌆" },
            { text: "La nature sauvage", value: "nature", icon: "🌳" },
            { text: "L'art et l'architecture", value: "art", icon: "🖼️" }
        ]
    },
    {
        question: "Votre activité idéale :",
        options: [
            { text: "Visiter des monuments", value: "monuments", icon: "🏰" },
            { text: "Observer la faune", value: "faune", icon: "🦎" },
            { text: "Explorer des musées", value: "musees", icon: "🖼️" }
        ]
    }
];

let currentQuestion = 0;
let quizAnswers = [];

// Initialize quiz
function initQuiz() {
    currentQuestion = 0;
    quizAnswers = [];
    displayQuestion();
}

// Display current question
function displayQuestion() {
    const quizContent = document.getElementById('quiz-content');
    
    if (currentQuestion < quizQuestions.length) {
        const question = quizQuestions[currentQuestion];
        
        quizContent.innerHTML = `
            <div class="mb-6">
                <div class="flex justify-between items-center mb-6">
                    <span class="text-time-gold font-semibold">Question ${currentQuestion + 1} sur ${quizQuestions.length}</span>
                    <div class="flex space-x-2">
                        ${quizQuestions.map((_, i) => `
                            <div class="w-3 h-3 rounded-full ${i < currentQuestion ? 'bg-time-gold' : i === currentQuestion ? 'bg-time-gold/50' : 'bg-gray-600'}"></div>
                        `).join('')}
                    </div>
                </div>
                <h3 class="text-2xl font-bold mb-8">${question.question}</h3>
                <div class="space-y-4">
                    ${question.options.map((option, index) => `
                        <button 
                            onclick="selectAnswer('${option.value}')"
                            class="quiz-option w-full p-4 border-2 border-gray-600 rounded-xl text-left hover:border-time-gold transition flex items-center space-x-4 group"
                        >
                            <span class="text-3xl">${option.icon}</span>
                            <span class="text-lg group-hover:text-time-gold">${option.text}</span>
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    } else {
        showQuizResults();
    }
}

// Select quiz answer
function selectAnswer(value) {
    quizAnswers.push(value);
    currentQuestion++;
    
    // Add animation
    const quizContent = document.getElementById('quiz-content');
    quizContent.style.opacity = '0';
    setTimeout(() => {
        displayQuestion();
        quizContent.style.opacity = '1';
    }, 300);
}

// Calculate and show quiz results
function showQuizResults() {
    const quizContent = document.getElementById('quiz-content');
    
    // Scoring logic
    const scores = { paris: 0, cretace: 0, florence: 0 };
    
    quizAnswers.forEach(answer => {
        if (['culture', 'elegance', 'moderne', 'urbain', 'monuments'].includes(answer)) {
            scores.paris += 1;
        }
        if (['aventure', 'ancien', 'nature', 'faune'].includes(answer)) {
            scores.cretace += 1;
        }
        if (['culture', 'renaissance', 'art', 'musees'].includes(answer)) {
            scores.florence += 1;
        }
    });
    
    // Find best destination
    const bestDestination = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    const destination = destinations[bestDestination];
    
    quizContent.innerHTML = `
        <div class="text-center">
            <div class="text-6xl mb-6">${destination.icon}</div>
            <h3 class="text-3xl font-bold mb-4 text-time-gold">Votre destination idéale :</h3>
            <h4 class="text-2xl font-bold mb-6">${destination.name}</h4>
            <p class="text-gray-300 mb-8 text-lg">${destination.description}</p>
            
            <div class="bg-gray-900 rounded-xl p-6 mb-8">
                <h5 class="font-bold text-time-gold mb-4 text-xl">Pourquoi cette destination ?</h5>
                <p class="text-gray-300">
                    Basé sur vos réponses, ${destination.name} correspond parfaitement à vos attentes. 
                    Cette destination offre ${destination.keywords.slice(0, 3).join(', ')} que vous recherchez.
                </p>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button onclick="openDestinationModal('${bestDestination}')" class="bg-time-gold text-time-dark px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
                    En savoir plus
                </button>
                <button onclick="initQuiz()" class="border-2 border-time-gold text-time-gold px-8 py-3 rounded-full font-semibold hover:bg-time-gold hover:text-time-dark transition">
                    Recommencer le quiz
                </button>
            </div>
        </div>
    `;
}

// Open destination modal
function openDestinationModal(destinationKey) {
    const modal = document.getElementById('destinationModal');
    const modalContent = document.getElementById('modalContent');
    const destination = destinations[destinationKey];
    
    modalContent.innerHTML = `
        <div class="text-center mb-6">
            <span class="text-6xl">${destination.icon}</span>
        </div>
        <h2 class="text-3xl font-bold mb-4 text-time-gold">${destination.name}</h2>
        <p class="text-gray-300 mb-6 text-lg">${destination.description}</p>
        
        <div class="bg-gray-800 rounded-xl p-6 mb-6">
            <h3 class="font-bold text-time-gold mb-4 text-xl">Points forts du voyage :</h3>
            <ul class="space-y-3">
                ${destination.highlights.map(highlight => `
                    <li class="flex items-start space-x-3">
                        <span class="text-time-gold mt-1">✓</span>
                        <span class="text-gray-300">${highlight}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
        
        <div class="grid grid-cols-2 gap-4 mb-6">
            <div class="bg-gray-800 rounded-xl p-4 text-center">
                <div class="text-3xl mb-2">💰</div>
                <div class="text-sm text-gray-400">Prix</div>
                <div class="font-bold text-time-gold">${destination.price}</div>
            </div>
            <div class="bg-gray-800 rounded-xl p-4 text-center">
                <div class="text-3xl mb-2">⏱️</div>
                <div class="text-sm text-gray-400">Durée</div>
                <div class="font-bold text-time-gold">${destination.duration}</div>
            </div>
        </div>
        
        <button onclick="contactForBooking('${destination.name}')" class="w-full bg-time-gold text-time-dark py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 transition">
            Réserver maintenant
        </button>
    `;
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

// Close modal
function closeModal(event) {
    const modal = document.getElementById('destinationModal');
    if (!event || event.target === modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

// Contact for booking
function contactForBooking(destinationName) {
    closeModal();
    toggleChat();
    
    setTimeout(() => {
        addBotMessage(`Excellent choix ! Vous souhaitez réserver ${destinationName}. Je vais vous mettre en relation avec un conseiller en voyage temporel. Quel est le meilleur moment pour vous contacter ?`);
    }, 500);
}

// Toggle chat window
function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.classList.toggle('active');
}

// Chatbot functionality
const chatbotKnowledge = {
    greetings: [
        "Bonjour ! Je suis ravi de vous aider à planifier votre voyage temporel.",
        "Bienvenue chez TimeTravel Agency ! Comment puis-je vous assister aujourd'hui ?"
    ],
    destinations: {
        paris: "Paris 1889 est une destination extraordinaire ! Vous assisterez à l'inauguration de la Tour Eiffel, symbole de la Belle Époque. C'est parfait pour les amateurs d'art, d'architecture et de gastronomie raffinée. Prix : 4,500€ pour 7 jours.",
        cretace: "Le Crétacé est une aventure unique ! Vous voyagerez 65 millions d'années en arrière pour observer les dinosaures. C'est idéal pour les aventuriers et les passionnés de nature. Prix : 8,900€ pour 10 jours.",
        florence: "Florence 1504, c'est le cœur de la Renaissance ! Vous rencontrerez Michel-Ange et Léonard de Vinci. Parfait pour les amateurs d'art et d'histoire. Prix : 6,200€ pour 8 jours."
    },
    faq: {
        prix: "Nos tarifs varient selon la destination : Paris 1889 (4,500€), Florence 1504 (6,200€), et Crétacé (8,900€). Ces prix incluent le transport temporel, l'hébergement et toutes les excursions.",
        securite: "La sécurité est notre priorité absolue ! Nos machines temporelles sont certifiées et nos guides sont des experts. Nous respectons scrupuleusement les protocoles de sécurité temporelle.",
        paradoxe: "Excellente question ! Nous avons mis en place des protocoles stricts pour éviter tout paradoxe temporel. Vous êtes uniquement observateur et ne pouvez pas modifier le cours de l'histoire.",
        equipement: "Nous fournissons tous les équipements nécessaires : vêtements d'époque, traducteur universel, et guide de survie temporelle. Pour le Crétacé, équipement de sécurité renforcé inclus.",
        reservation: "Pour réserver, contactez-nous au +33 (0)1 TEMPO RAL ou par email à contact@timetravel-agency.com. Notre équipe vous accompagnera dans toutes les démarches."
    }
};

// Simple AI chatbot response
function getBotResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Greetings
    if (message.match(/bonjour|salut|hello|hey/i)) {
        return chatbotKnowledge.greetings[Math.floor(Math.random() * chatbotKnowledge.greetings.length)];
    }
    
    // Destinations
    if (message.match(/paris|tour eiffel|1889|belle époque/i)) {
        return chatbotKnowledge.destinations.paris;
    }
    if (message.match(/crétacé|dinosaure|préhistoire/i)) {
        return chatbotKnowledge.destinations.cretace;
    }
    if (message.match(/florence|renaissance|michel-ange|léonard/i)) {
        return chatbotKnowledge.destinations.florence;
    }
    
    // FAQ
    if (message.match(/prix|tarif|coût|combien/i)) {
        return chatbotKnowledge.faq.prix;
    }
    if (message.match(/sécurité|sûr|dangereux|risque/i)) {
        return chatbotKnowledge.faq.securite;
    }
    if (message.match(/paradoxe|temps|modifier|changer/i)) {
        return chatbotKnowledge.faq.paradoxe;
    }
    if (message.match(/équipement|matériel|fournir/i)) {
        return chatbotKnowledge.faq.equipement;
    }
    if (message.match(/réserver|réservation|booking|contact/i)) {
        return chatbotKnowledge.faq.reservation;
    }
    
    // Recommendations
    if (message.match(/conseil|recommand|quel|choisir/i)) {
        return "Je vous recommande de faire notre quiz personnalisé pour trouver la destination qui vous correspond le mieux ! Sinon, dites-moi ce qui vous intéresse : l'art et la culture, l'aventure, ou l'histoire ?";
    }
    
    // Default response
    return "C'est une excellente question ! Pour des informations plus détaillées, je vous invite à consulter nos destinations ou à nous contacter directement. Comment puis-je vous aider autrement ?";
}

// Send message in chat
function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (message === '') return;
    
    // Add user message
    addUserMessage(message);
    input.value = '';
    
    // Simulate bot thinking
    setTimeout(() => {
        const response = getBotResponse(message);
        addBotMessage(response);
    }, 800);
}

// Add user message to chat
function addUserMessage(message) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'flex items-start space-x-2 justify-end';
    messageDiv.innerHTML = `
        <div class="bg-time-gold text-time-dark rounded-lg p-3 max-w-[80%]">
            <p>${message}</p>
        </div>
        <div class="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
            <span>👤</span>
        </div>
    `;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Add bot message to chat
function addBotMessage(message) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'flex items-start space-x-2';
    messageDiv.innerHTML = `
        <div class="w-8 h-8 rounded-full bg-time-gold flex items-center justify-center flex-shrink-0">
            <span class="text-time-dark">🤖</span>
        </div>
        <div class="bg-gray-100 rounded-lg p-3 max-w-[80%] text-gray-800">
            <p>${message}</p>
        </div>
    `;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Initialize quiz on page load
window.addEventListener('DOMContentLoaded', () => {
    initQuiz();
    
    // Add scroll animations
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
    
    document.querySelectorAll('.destination-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});

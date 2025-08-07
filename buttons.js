// Example of flashcards for each deck
const decks = {
    spanish: [
        { front: "Hola", back: "Hello" },
        { front: "Adiós", back: "Goodbye" },
        { front: "Gracias", back: "Thank you" },
        { front: "Por favor", back: "Please" },
        { front: "¿Cómo estás?", back: "How are you?" },
        { front: "Buenos días", back: "Good morning" },
        { front: "Buenas noches", back: "Good night" },
        { front: "¿Qué tal?", back: "What's up?" },
        { front: "Lo siento", back: "Sorry" },
        { front: "Salud", back: "Bless you" },
        { front: "Te quiero", back: "I love you" },
        { front: "¿Dónde?", back: "Where?" },
        { front: "¿Cuándo?", back: "When?" },
        { front: "¿Por qué?", back: "Why?" },
        { front: "¿Quién?", back: "Who?" },
        { front: "¿Qué?", back: "What?" },
        { front: "Sí", back: "Yes" },
        { front: "No", back: "No" },
        { front: "Tal vez", back: "Maybe" },
        { front: "Nunca", back: "Never" },
        { front: "Siempre", back: "Always" },
        { front: "Hoy", back: "Today" },
        { front: "Mañana", back: "Tomorrow" },
        { front: "Ayer", back: "Yesterday" },
        { front: "Amigo", back: "Friend" }
    ],
    spanish_intermediate: [
        { front: "¿Cómo te llamas?", back: "What's your name?" },
        { front: "Me llamo...", back: "My name is..." },
        { front: "¿De dónde eres?", back: "Where are you from?" },
        { front: "Soy de...", back: "I'm from..." },
        { front: "¿Cuántos años tienes?", back: "How old are you?" },
        { front: "Tengo ... años", back: "I am ... years old" },
        { front: "¿Tienes hermanos?", back: "Do you have siblings?" },
        { front: "Sí, tengo un hermano", back: "Yes, I have a brother" },
        { front: "No, soy hijo único", back: "No, I'm an only child" },
        { front: "¿Cuál es tu comida favorita?", back: "What's your favorite food?" },
        { front: "Me gusta la pizza", back: "I like pizza" },
        { front: "¿Qué te gusta hacer en tu tiempo libre?", back: "What do you like to do in your free time?" },
        { front: "Me gusta leer y escuchar música", back: "I like to read and listen to music" },
        { front: "¿Tienes mascotas?", back: "Do you have pets?" },
        { front: "Sí, tengo un perro", back: "Yes, I have a dog" },
        { front: "No, no tengo mascotas", back: "No, I don't have pets" },
        { front: "¿Qué tipo de música te gusta?", back: "What kind of music do you like?" },
        { front: "Me gusta el rock y el pop", back: "I like rock and pop" },
        { front: "¿Has viajado a algún país de habla hispana?", back: "Have you traveled to any Spanish-speaking country?" },
        { front: "Sí, he estado en México y España", back: "Yes, I have been to Mexico and Spain" },
        { front: "No, pero me gustaría visitar uno", back: "No, but I would like to visit one" }
    ],
    spanish_advanced: [
        { front: "¿Cuál es tu opinión sobre el cambio climático?", back: "What is your opinion on climate change?" },
        { front: "Creo que es un problema grave que necesita atención", back: "I think it's a serious problem that needs attention" },
        { front: "¿Qué harías para mejorar el medio ambiente?", back: "What would you do to improve the environment?" },
        { front: "Intentaría reducir la contaminación y promovería el uso de energías renovables", back: "I would try to reduce pollution and promote the use of renewable energy" },
        { front: "¿Cómo describirías tu ciudad natal?", back: "How would you describe your hometown?" },
        { front: "Es una ciudad pequeña y tranquila, rodeada de montañas", back: "It's a small, quiet town, surrounded by mountains" },
        { front: "¿Qué te motivó a aprender español?", back: "What motivated you to learn Spanish?" },
        { front: "Me apasiona la cultura hispana y quiero poder comunicarme con más personas", back: "I'm passionate about Hispanic culture and I want to be able to communicate with more people" },
        { front: "¿Cuál es el libro más interesante que has leído en español?", back: "What is the most interesting book you have read in Spanish?" },
        { front: "Cien años de soledad de Gabriel García Márquez", back: "One Hundred Years of Solitude by Gabriel García Márquez" },
        { front: "¿Qué consejo le darías a alguien que empieza a aprender español?", back: "What advice would you give to someone who is just starting to learn Spanish?" },
        { front: "Que sea paciente y practique todos los días", back: "To be patient and practice every day" }
    ],
    anishnabek: [
        { front: "Aaniin", back: "Hello" },
        { front: "Miigwech", back: "Thank you" },
        { front: "Baamaapii", back: "See you later" },
        { front: "Mino giizhigad", back: "Good day" },
        { front: "Gego", back: "Don't" },
        { front: "Boozhoo", back: "Greetings" },
        { front: "Nishin", back: "Good" },
        { front: "Mino dibishkaa", back: "Happy birthday" },
        { front: "Mino bimaadiziwin", back: "Good life" },
        { front: "Mino ayaawin", back: "Good health" },
        { front: "Mii dash", back: "That's all" },
        { front: "Giiwenh", back: "The end" },
        { front: "Nimino ayaawin", back: "I am well" },
        { front: "Giin", back: "You" },
        { front: "Nin", back: "I/me" },
        { front: "Gii", back: "Past tense marker" },
        { front: "Bimaadiziwin", back: "Life" },
        { front: "Zaagi’idiwin", back: "Love" },
        { front: "Nibi", back: "Water" },
        { front: "Aki", back: "Earth" },
        { front: "Giizis", back: "Sun" },
        { front: "Dibishkaa", back: "Birthday" },
        { front: "Makwa", back: "Bear" },
        { front: "Migizi", back: "Eagle" },
        { front: "Waawaashkeshi", back: "Deer" }
    ],
    anishnabek_intermediate: [
        { front: "¿Cómo te llamas en anishnabek?", back: "What's your name in Anishnabek?" },
        { front: "Me llamo... en anishnabek", back: "My name is... in Anishnabek" },
        { front: "¿De dónde eres en anishnabek?", back: "Where are you from in Anishnabek?" },
        { front: "Soy de... en anishnabek", back: "I'm from... in Anishnabek" },
        { front: "¿Cuántos años tienes en anishnabek?", back: "How old are you in Anishnabek?" },
        { front: "Tengo ... años en anishnabek", back: "I am ... years old in Anishnabek" },
        { front: "¿Tienes hermanos en anishnabek?", back: "Do you have siblings in Anishnabek?" },
        { front: "Sí, tengo un hermano en anishnabek", back: "Yes, I have a brother in Anishnabek" },
        { front: "No, soy hijo único en anishnabek", back: "No, I'm an only child in Anishnabek" },
        { front: "¿Cuál es tu comida favorita en anishnabek?", back: "What's your favorite food in Anishnabek?" },
        { front: "Me gusta la pizza en anishnabek", back: "I like pizza in Anishnabek" },
        { front: "¿Qué te gusta hacer en tu tiempo libre en anishnabek?", back: "What do you like to do in your free time in Anishnabek?" },
        { front: "Me gusta leer y escuchar música en anishnabek", back: "I like to read and listen to music in Anishnabek" },
        { front: "¿Tienes mascotas en anishnabek?", back: "Do you have pets in Anishnabek?" },
        { front: "Sí, tengo un perro en anishnabek", back: "Yes, I have a dog in Anishnabek" },
        { front: "No, no tengo mascotas en anishnabek", back: "No, I don't have pets in Anishnabek" },
        { front: "¿Qué tipo de música te gusta en anishnabek?", back: "What kind of music do you like in Anishnabek?" },
        { front: "Me gusta el rock y el pop en anishnabek", back: "I like rock and pop in Anishnabek" },
        { front: "¿Has viajado a algún país de habla anishnabek?", back: "Have you traveled to any Anishnabek-speaking country?" },
        { front: "Sí, he estado en México y España en anishnabek", back: "Yes, I have been to Mexico and Spain in Anishnabek" },
        { front: "No, pero me gustaría visitar uno en anishnabek", back: "No, but I would like to visit one in Anishnabek" }
    ],
    anishnabek_advanced: [
        { front: "¿Cuál es tu opinión sobre el cambio climático en anishnabek?", back: "What is your opinion on climate change in Anishnabek?" },
        { front: "Creo que es un problema grave que necesita atención en anishnabek", back: "I think it's a serious problem that needs attention in Anishnabek" },
        { front: "¿Qué harías para mejorar el medio ambiente en anishnabek?", back: "What would you do to improve the environment in Anishnabek?" },
        { front: "Intentaría reducir la contaminación y promovería el uso de energías renovables en anishnabek", back: "I would try to reduce pollution and promote the use of renewable energy in Anishnabek" },
        { front: "¿Cómo describirías tu ciudad natal en anishnabek?", back: "How would you describe your hometown in Anishnabek?" },
        { front: "Es una ciudad pequeña y tranquila, rodeada de montañas en anishnabek", back: "It's a small, quiet town, surrounded by mountains in Anishnabek" },
        { front: "¿Qué te motivó a aprender anishnabek?", back: "What motivated you to learn Anishnabek?" },
        { front: "Me apasiona la cultura hispana y quiero poder comunicarme con más personas en anishnabek", back: "I'm passionate about Hispanic culture and I want to be able to communicate with more people in Anishnabek" },
        { front: "¿Cuál es el libro más interesante que has leído en anishnabek?", back: "What is the most interesting book you have read in Anishnabek?" },
        { front: "Cien años de soledad de Gabriel García Márquez en anishnabek", back: "One Hundred Years of Solitude by Gabriel García Márquez in Anishnabek" },
        { front: "¿Qué consejo le darías a alguien que empieza a aprender anishnabek?", back: "What advice would you give to someone who is just starting to learn Anishnabek?" },
        { front: "Que sea paciente y practique todos los días en anishnabek", back: "To be patient and practice every day in Anishnabek" }
    ]
};

function getLevelFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('level') || 'basic';
}

function getDeckTitle(language, level) {
    if (language === "spanish") {
        if (level === "intermediate") return "Spanish - Intermediate";
        if (level === "advanced") return "Spanish - Advanced";
        return "Spanish - Basic";
    }
    if (language === "anishnabek") {
        if (level === "intermediate") return "Anishnabek - Intermediate";
        if (level === "advanced") return "Anishnabek - Advanced";
        return "Anishnabek - Basic";
    }
    return "Flashcards";
}

// Detect language and level
let language = "spanish";
if (window.location.pathname.includes("anishnabek")) language = "anishnabek";
const level = getLevelFromUrl();

// Cambia el título dinámicamente
const deckTitleEl = document.querySelector(".deck-title");
if (deckTitleEl) {
    deckTitleEl.textContent = getDeckTitle(language, level);
}

// Define decks[deckType + '_' + level] en tu objeto decks
// Ejemplo: decks['spanish_intermediate']

// ...y selecciona las cards así:
const cards = decks[language + (level !== 'basic' ? '_' + level : '')];
let currentIndex = 0;
let flipped = false;

// Elements for the flashcard and buttons
const flashcard = document.getElementById("flashcard");
const cardFront = flashcard?.querySelector(".card-front .card-text");
const cardBack = flashcard?.querySelector(".card-back .card-text");
const previousBtn = document.getElementById("previousCardBtn");
const nextBtn = document.getElementById("nextCardBtn");
const flipBtn = document.getElementById("flipCardBtn");

// Show the current card
function showCard() {
    if (!cardFront || !cardBack) return;
    cardFront.textContent = cards[currentIndex].front;
    cardBack.textContent = cards[currentIndex].back;
    flashcard.classList.remove("flipped");
    flipped = false;
}

// Navigation
previousBtn?.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard();
});
nextBtn?.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard();
});
flipBtn?.addEventListener("click", () => {
    flipped = !flipped;
    flashcard.classList.toggle("flipped", flipped);
});

// Initialize
showCard();

const addCardBtn = document.getElementById("addCardBtn");
const editDeckBtn = document.getElementById("editDeckBtn");
const deleteDeckBtn = document.getElementById("deleteDeckBtn");

// Add new card
addCardBtn?.addEventListener("click", () => {
    const front = prompt("Enter text for the front of the card:");
    const back = prompt("Enter text for the back of the card:");
    if (front && back) {
        cards.push({ front, back });
        currentIndex = cards.length - 1;
        showCard();
        alert("Card added!");
    }
});

// Edit current card
editDeckBtn?.addEventListener("click", () => {
    if (!cards.length) return;
    const front = prompt("Edit the front of the card:", cards[currentIndex].front);
    const back = prompt("Edit the back of the card:", cards[currentIndex].back);
    if (front && back) {
        cards[currentIndex] = { front, back };
        showCard();
        alert("Card edited!");
    }
});

// Delete current card
deleteDeckBtn?.addEventListener("click", () => {
    if (!cards.length) return;
    if (confirm("Are you sure you want to delete this card?")) {
        cards.splice(currentIndex, 1);
        if (cards.length === 0) {
            cardFront.textContent = "";
            cardBack.textContent = "";
            alert("No more cards in the deck.");
            return;
        }
        currentIndex = currentIndex % cards.length;
        showCard();
        alert("Card deleted!");
    }
});

// Animation for card sliding

function animateCard(direction) {
    if (!flashcard) return;
    flashcard.classList.remove("slide-left", "slide-right");
    void flashcard.offsetWidth; // Force reflow
    flashcard.classList.add(direction === "left" ? "slide-left" : "slide-right");
    setTimeout(() => {
        flashcard.classList.remove("slide-left", "slide-right");
    }, 350);
}

// Navigation
previousBtn?.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    animateCard("left");
    setTimeout(showCard, 175); // Show after half animation
});
nextBtn?.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length;
    animateCard("right");
    setTimeout(showCard, 175);
});

// Search and filter functionality
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const languageFilter = document.getElementById("languageFilter");
    const deckCards = document.querySelectorAll(".deck-grid .card");
    const noResultsMsg = document.getElementById("noResultsMsg");

    function filterDecks() {
        const searchValue = searchInput.value.toLowerCase();
        const languageValue = languageFilter.value;
        let anyVisible = false;

        deckCards.forEach(card => {
            const title = card.querySelector(".card-title").textContent.toLowerCase();
            const cardLang = card.getAttribute("data-language");

            const matchesText = title.includes(searchValue);
            const matchesLang = (languageValue === "all") || (cardLang === languageValue);

            if (matchesText && matchesLang) {
                card.style.display = "";
                anyVisible = true;
            } else {
                card.style.display = "none";
            }
        });

        if (noResultsMsg) {
            noResultsMsg.style.display = anyVisible ? "none" : "block";
        }
    }

    searchInput?.addEventListener("input", filterDecks);
    languageFilter?.addEventListener("change", filterDecks);
});
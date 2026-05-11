const restaurants = [
    {
        name: "Le Jules Verne",
        cuisine: "Gourmet",
        country: "França",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1550966841-3ee7adac166e?q=80&w=1000",
        feedback: "Uma experiência gastronômica inesquecível na Torre Eiffel com vista para Paris.",
        address: "Avenue Gustave Eiffel, 75007 Paris, França",
        hours: "12:00 - 13:30, 19:00 - 21:00",
        dishImages: [
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=400",
            "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400"
        ],
        reviews: [
            { user: "Jean L.", text: "A vista é tão espetacular quanto a comida.", stars: 5 },
            { user: "Marta F.", text: "Alta gastronomia francesa impecável.", stars: 5 }
        ],
        priceLevel: "$$$$",
        instagram: "@lejulesverneparis",
        whatsapp: "+33145556144"
    },
    {
        name: "Franklin Barbecue",
        cuisine: "Gourmet",
        country: "EUA",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1000",
        feedback: "O melhor churrasco texano. O brisket derrete na boca e vale a fila.",
        address: "900 E 11th St, Austin, TX 78702, EUA",
        hours: "11:00 - 15:00",
        dishImages: [
            "https://images.unsplash.com/photo-1529692236671-f1f6e9460272?q=80&w=400",
            "https://images.unsplash.com/photo-1563245332-69217277d704?q=80&w=400"
        ],
        reviews: [
            { user: "Ricardo O.", text: "A carne é de outro mundo, muito macia e saborosa.", stars: 5 },
            { user: "Felipe S.", text: "A espera na fila faz parte da experiência.", stars: 5 }
        ],
        priceLevel: "$$",
        instagram: "@franklinbbq",
        whatsapp: "+15124446300"
    },
    {
        name: "Pujol",
        cuisine: "Gourmet",
        country: "México",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000",
        feedback: "Culinária mexicana reinventada. O Mole Madre é uma obra de arte.",
        address: "Tennyson 133, Polanco, Cidade do México, México",
        hours: "13:30 - 22:45",
        dishImages: [
            "https://images.unsplash.com/photo-1603894584373-5ac82b0f501b?q=80&w=400",
            "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=400"
        ],
        reviews: [
            { user: "Carlos S.", text: "Sabores complexos e autênticos do México.", stars: 5 },
            { user: "Clara M.", text: "Serviço atencioso e pratos surpreendentes.", stars: 5 }
        ],
        priceLevel: "$$$",
        instagram: "@pujolrestaurant",
        whatsapp: "+525555454111"
    },
    {
        name: "Gaggan Anand",
        cuisine: "Gourmet",
        country: "Tailândia",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=1000",
        feedback: "Culinária indiana progressiva em Bangkok. Uma jornada sensorial única.",
        address: "68/1 Soi Langsuan, Ploenchit Road, Bangkok, Tailândia",
        hours: "17:30 - 23:00",
        dishImages: [
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400",
            "https://images.unsplash.com/photo-1544124499-58ec52cf3967?q=80&w=400"
        ],
        reviews: [
            { user: "Sofia A.", text: "Uma experiência teatral e deliciosa.", stars: 5 },
            { user: "Gustavo H.", text: "Sabores inovadores que quebram todas as regras.", stars: 5 }
        ],
        priceLevel: "$$$$",
        instagram: "@gaggan_anand",
        whatsapp: "+6620677050"
    },
    {
        name: "Osteria Francescana",
        cuisine: "Italiana",
        country: "Itália",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000",
        feedback: "A perfeição da culinária italiana moderna por Massimo Bottura.",
        address: "Via Stella, 22, 41121 Modena, Itália",
        hours: "12:30 - 13:30, 20:00 - 21:00",
        dishImages: [
            "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=400",
            "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=400"
        ],
        reviews: [
            { user: "Lorenzo M.", text: "Uma verdadeira obra-prima gastronômica.", stars: 5 },
            { user: "Ana Paula", text: "Cinco texturas de Parmigiano Reggiano é inesquecível.", stars: 5 }
        ],
        priceLevel: "$$$$",
        instagram: "@osteriafrancescana",
        whatsapp: "+39059223912"
    },
    {
        name: "Sukiyabashi Jiro",
        cuisine: "Japonesa",
        country: "Japão",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1000",
        feedback: "O mais famoso sushi do mundo. Ingredientes na sua forma mais pura.",
        address: "4-2-15 Ginza, Chuo City, Tokyo 104-0061, Japão",
        hours: "11:30 - 14:00, 17:30 - 20:30",
        dishImages: [
            "https://images.unsplash.com/photo-1617196034796-735a72952402?q=80&w=400",
            "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=400"
        ],
        reviews: [
            { user: "Kenji T.", text: "A precisão e dedicação ao ofício são palpáveis.", stars: 5 },
            { user: "Julia L.", text: "O melhor sushi da minha vida.", stars: 5 }
        ],
        priceLevel: "$$$$",
        instagram: "@jirosushi_official",
        whatsapp: "+81335353600"
    },
    {
        name: "D.O.M.",
        cuisine: "Brasileira",
        country: "Brasil",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd679?q=80&w=1000",
        feedback: "Ingredientes amazônicos elevados à alta gastronomia internacional.",
        address: "Rua Barão de Capanema, 549 - Jardins, São Paulo, Brasil",
        hours: "12:00 - 15:00, 19:00 - 23:00",
        dishImages: [
            "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?q=80&w=400",
            "https://images.unsplash.com/photo-1558039064-3fa0277bd5e3?q=80&w=400"
        ],
        reviews: [
            { user: "Marcos V.", text: "Alex Atala mostra o verdadeiro potencial dos ingredientes do Brasil.", stars: 5 },
            { user: "Bia R.", text: "A formiga amazônica é surpreendente e deliciosa.", stars: 4 }
        ],
        priceLevel: "$$$$",
        instagram: "@domrestaurante",
        whatsapp: "+551130880761"
    },
    {
        name: "The Fat Duck",
        cuisine: "Gourmet",
        country: "Reino Unido",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000",
        feedback: "Gastronomia molecular e experiências multissensoriais no interior da Inglaterra.",
        address: "High St, Bray SL6 2AQ, Reino Unido",
        hours: "12:00 - 13:15, 19:00 - 20:15",
        dishImages: [
            "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=400",
            "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=400"
        ],
        reviews: [
            { user: "Heloisa C.", text: "O Som do Mar é um prato que você ouve e degusta.", stars: 5 },
            { user: "Fernando P.", text: "Magia pura em cada prato servido.", stars: 5 }
        ],
        priceLevel: "$$$$",
        instagram: "@thefatduck",
        whatsapp: "+441628580333"
    },
    {
        name: "Belcanto",
        cuisine: "Portuguesa",
        country: "Portugal",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000",
        feedback: "O melhor da cozinha portuguesa contemporânea por José Avillez.",
        address: "Rua Serpa Pinto, 10A, 1200-026 Lisboa, Portugal",
        hours: "12:30 - 15:00, 19:00 - 23:00",
        dishImages: [
            "https://images.unsplash.com/photo-1562601579-599dec554e85?q=80&w=400",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=400"
        ],
        reviews: [
            { user: "Miguel R.", text: "Simplesmente divino, o melhor de Lisboa.", stars: 5 },
            { user: "Sofia P.", text: "Uma explosão de sabores portugueses.", stars: 5 }
        ],
        priceLevel: "$$$$",
        instagram: "@belcanto_joseavillez",
        whatsapp: "+351213420407"
    },
    {
        name: "Asador Etxebarri",
        cuisine: "Gourmet",
        country: "Espanha",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000",
        feedback: "O domínio absoluto do fogo e da brasa no País Basco.",
        address: "San Juan Plaza, 1, 48291 Atxondo, Bizkaia, Espanha",
        hours: "13:00 - 15:30",
        dishImages: [
            "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=400",
            "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=400"
        ],
        reviews: [
            { user: "Iñaki L.", text: "A melhor carne grelhada que já comi.", stars: 5 },
            { user: "Elena M.", text: "A simplicidade elevada à perfeição.", stars: 5 }
        ],
        priceLevel: "$$$",
        instagram: "@asadoretxebarri_oficial",
        whatsapp: "+34946583042"
    },
    {
        name: "Don Julio",
        cuisine: "Argentina",
        country: "Argentina",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1000",
        feedback: "A autêntica parrillada argentina. Carnes de qualidade excepcional.",
        address: "Guatemala 4699, C1425 Cdad. Autónoma de Buenos Aires, Argentina",
        hours: "12:00 - 16:00, 19:00 - 00:00",
        dishImages: [
            "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400"
        ],
        reviews: [
            { user: "Juan P.", text: "Ojo de bife inigualável.", stars: 5 },
            { user: "Maria G.", text: "Melhor experiência de churrasco em Buenos Aires.", stars: 5 }
        ],
        priceLevel: "$$$",
        instagram: "@donjuliobsas",
        whatsapp: "+541148323654"
    },
    {
        name: "Disfrutar",
        cuisine: "Gourmet",
        country: "Espanha",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1000",
        feedback: "Inovação e surpresa constante no coração de Barcelona.",
        address: "C. de Villarroel, 163, 08036 Barcelona, Espanha",
        hours: "13:00 - 15:00, 20:00 - 22:00",
        dishImages: [
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=400",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400"
        ],
        reviews: [
            { user: "Xavi R.", text: "Uma jornada criativa sem igual.", stars: 5 },
            { user: "Ana B.", text: "O menu degustação é uma obra-prima.", stars: 5 }
        ],
        priceLevel: "$$$$",
        instagram: "@disfrutarbarcelona",
        whatsapp: "+34933486896"
    },
    {
        name: "Fogón Asado",
        cuisine: "Argentina",
        country: "Argentina",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1529692236671-f1f6e9460272?q=80&w=1000",
        feedback: "Uma experiência íntima de asado com os melhores cortes da Argentina.",
        address: "Uriarte 1423, C1414 Cdad. Autónoma de Buenos Aires, Argentina",
        hours: "19:00 - 23:00",
        dishImages: [
            "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400",
            "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=400"
        ],
        reviews: [
            { user: "Lucas M.", text: "Atendimento impecável e carne perfeita.", stars: 5 },
            { user: "Elena F.", text: "O melhor asado que já experimentei.", stars: 5 }
        ],
        priceLevel: "$$$",
        instagram: "@fogon_asado",
        whatsapp: "+541130541423"
    },
    {
        name: "Mirazur",
        cuisine: "Gourmet",
        country: "França",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000",
        feedback: "Cozinha inspirada no mar, nas montanhas e nos jardins da Riviera Francesa.",
        address: "30 Av. Aristide Briand, 06500 Menton, França",
        hours: "12:15 - 14:00, 19:15 - 21:30",
        dishImages: [
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=400",
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=400"
        ],
        reviews: [
            { user: "Marie L.", text: "A horta própria faz toda a diferença nos sabores.", stars: 5 },
            { user: "Pierre D.", text: "Uma vista de tirar o fôlego e pratos divinos.", stars: 5 }
        ],
        priceLevel: "$$$$",
        instagram: "@restaurantmirazur",
        whatsapp: "+33492418686"
    },
    {
        name: "Eleven Madison Park",
        cuisine: "Gourmet",
        country: "EUA",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000",
        feedback: "Alta gastronomia baseada em plantas com foco na sustentabilidade e elegância de NY.",
        address: "11 Madison Ave, New York, NY 10010, EUA",
        hours: "17:30 - 22:00",
        dishImages: [
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400",
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400"
        ],
        reviews: [
            { user: "John K.", text: "Surpreendente o que eles fazem apenas com vegetais.", stars: 5 },
            { user: "Emily R.", text: "A experiência gastronômica mais refinada de Nova York.", stars: 5 }
        ],
        priceLevel: "$$$$",
        instagram: "@elevenmadisonpark",
        whatsapp: "+12128890905"
    },
    {
        name: "Quintonil",
        cuisine: "Gourmet",
        country: "México",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1000",
        feedback: "Uma visão moderna da cozinha mexicana com foco em ingredientes locais e frescos.",
        address: "Newton 55, Polanco, Cidade do México, México",
        hours: "13:00 - 22:00",
        dishImages: [
            "https://images.unsplash.com/photo-1603894584373-5ac82b0f501b?q=80&w=400",
            "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?q=80&w=400"
        ],
        reviews: [
            { user: "Andrés G.", text: "Sabores autênticos com um toque contemporâneo fantástico.", stars: 5 },
            { user: "Lucia M.", text: "O melhor da Cidade do México, sem dúvidas.", stars: 5 }
        ],
        priceLevel: "$$$",
        instagram: "@rest_quintonil",
        whatsapp: "+525552801660"
    },
    {
        name: "Mani",
        cuisine: "Brasileira",
        country: "Brasil",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?q=80&w=1000",
        feedback: "Cozinha autoral brasileira que mistura tradição com vanguarda em São Paulo.",
        address: "Rua Joaquim Antunes, 210 - Jardim Paulistano, São Paulo, Brasil",
        hours: "12:00 - 15:00, 19:30 - 23:00",
        dishImages: [
            "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?q=80&w=400",
            "https://images.unsplash.com/photo-1558039064-3fa0277bd5e3?q=80&w=400"
        ],
        reviews: [
            { user: "Fernanda L.", text: "Helena Rizzo é uma artista. O ovo perfeito é de outro mundo.", stars: 5 },
            { user: "Ricardo P.", text: "Ambiente acolhedor e comida excepcional.", stars: 5 }
        ],
        priceLevel: "$$$",
        instagram: "@manimanimani",
        whatsapp: "+551130854148"
    },
    {
        name: "Narisawa",
        cuisine: "Japonesa",
        country: "Japão",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1000",
        feedback: "Cozinha satoyama que conecta o homem e a natureza através dos sentidos.",
        address: "2-6-15 Minami Aoyama, Minato-ku, Tokyo, Japão",
        hours: "12:00 - 13:00, 18:00 - 20:00",
        dishImages: [
            "https://images.unsplash.com/photo-1617196034796-735a72952402?q=80&w=400",
            "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=400"
        ],
        reviews: [
            { user: "Yuki S.", text: "Uma experiência poética e deliciosa.", stars: 5 },
            { user: "James W.", text: "O respeito pelos ingredientes é inspirador.", stars: 5 }
        ],
        priceLevel: "$$$$",
        instagram: "@restaurantnarisawa",
        whatsapp: "+81357850077"
    },
    {
        name: "L'Enclume",
        cuisine: "Gourmet",
        country: "Reino Unido",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1544124499-58ec52cf3967?q=80&w=1000",
        feedback: "Gastronomia sustentável e ingredientes colhidos diretamente da fazenda em Cumbria.",
        address: "Cavendish St, Cartmel, Grange-over-Sands LA11 6PZ, Reino Unido",
        hours: "12:00 - 13:30, 18:30 - 20:00",
        dishImages: [
            "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=400",
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400"
        ],
        reviews: [
            { user: "Sarah J.", text: "O frescor dos vegetais é algo nunca visto antes.", stars: 5 },
            { user: "David T.", text: "Simon Rogan elevou a cozinha britânica a um novo patamar.", stars: 5 }
        ],
        priceLevel: "$$$$",
        instagram: "@lenclume",
        whatsapp: "+441539536362"
    },
    {
        name: "Da Vittorio",
        cuisine: "Italiana",
        country: "Itália",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=1000",
        feedback: "A tradição e elegância da cozinha italiana em um ambiente familiar luxuoso.",
        address: "Via Cantalupa, 17, 24060 Brusaporto BG, Itália",
        hours: "12:30 - 14:30, 19:30 - 22:00",
        dishImages: [
            "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=400",
            "https://images.unsplash.com/photo-1481931098730-318b6f776db0?q=80&w=400"
        ],
        reviews: [
            { user: "Giulia B.", text: "Os Paccheri alla Vittorio são lendários por um motivo.", stars: 5 },
            { user: "Marco R.", text: "Serviço de classe mundial e sabores autênticos.", stars: 5 }
        ],
        priceLevel: "$$$$",
        instagram: "@davittoriorestaurant",
        whatsapp: "+39035681024"
    }
];

const restaurantList = document.getElementById('restaurant-list');
const filterBtns = document.querySelectorAll('.filter-btn');
const countryFilter = document.getElementById('country-filter');
const searchInput = document.getElementById('search-input');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Tab Logic
const navTabs = document.querySelectorAll('.nav-tab');
const tabContents = document.querySelectorAll('.tab-content');

// Modal Elements
const detailsModal = document.getElementById('details-modal');
const modalOverlay = document.getElementById('modal-overlay');
const authModal = document.getElementById('auth-modal');
const loginTrigger = document.getElementById('login-trigger');
const closeAuthModal = document.getElementById('close-auth-modal');
const authTabs = document.querySelectorAll('.auth-tab');
const authFormContainers = document.querySelectorAll('.auth-form-container');

// Hamburger Menu Logic
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

function openDetails(restaurant) {
    const modalContent = document.getElementById('modal-body');
    
    let dishPhotosHTML = '';
    restaurant.dishImages.forEach(img => {
        dishPhotosHTML += `<img src="${img}" alt="Prato do ${restaurant.name}" class="dish-photo">`;
    });

    let reviewsHTML = '';
    restaurant.reviews.forEach(rev => {
        reviewsHTML += `
            <div class="review-item">
                <div class="review-header">
                    <strong>${rev.user}</strong>
                    <span class="review-stars">${'★'.repeat(rev.stars)}</span>
                </div>
                <p>${rev.text}</p>
            </div>
        `;
    });

    modalContent.innerHTML = `
        <div class="modal-header-img" style="background-image: url('${restaurant.image}')">
            <button class="close-modal" id="close-modal">&times;</button>
        </div>
        <div class="modal-info">
            <span class="cuisine-tag">${restaurant.cuisine}</span>
            <h2>${restaurant.name}</h2>
            <div class="modal-stats">
                <span>⭐ ${restaurant.rating}</span>
                <span class="price-tag">${restaurant.priceLevel}</span>
                <span>📅 ${restaurant.hours}</span>
            </div>
            <p class="modal-address">📍 ${restaurant.address}</p>
            
            <div class="modal-socials">
                <a href="https://instagram.com/${restaurant.instagram.replace('@', '')}" target="_blank" class="social-link insta">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram">
                    <span>${restaurant.instagram}</span>
                </a>
                <a href="https://wa.me/${restaurant.whatsapp.replace(/\D/g, '')}" target="_blank" class="social-link whats">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp">
                    <span>Contato WhatsApp</span>
                </a>
            </div>

            <div class="modal-section">
                <h3>Galeria de Pratos</h3>
                <div class="dish-gallery">${dishPhotosHTML}</div>
            </div>

            <div class="modal-section" id="modal-map-section">
                <h3>Localização</h3>
                <div class="modal-map-wrapper">
                    <iframe class="modal-iframe" src="https://maps.google.com/maps?q=${encodeURIComponent(restaurant.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>

            <div class="modal-actions">
                <button class="modal-map-btn" id="modal-scroll-map">📍 Ver no Mapa</button>
                <button class="modal-reserve-btn" id="modal-reserve-now">Reservar Mesa Agora</button>
            </div>
        </div>
    `;

    detailsModal.classList.add('active');
    modalOverlay.classList.add('active');

    // Close Modal Event
    document.getElementById('close-modal').addEventListener('click', closeDetails);
    
    // Scroll to Map Action
    document.getElementById('modal-scroll-map').addEventListener('click', () => {
        document.getElementById('modal-map-section').scrollIntoView({ behavior: 'smooth' });
    });

    // Direct Reservation Action
    document.getElementById('modal-reserve-now').addEventListener('click', () => {
        closeDetails();
        document.querySelector('[data-tab="reservations-tab"]').click();
        const resSelect = document.getElementById('res-restaurant');
        resSelect.value = restaurant.name;
    });
}

function closeDetails() {
    detailsModal.classList.remove('active');
    modalOverlay.classList.remove('active');
}

// Auth Modal Logic
function openAuth() {
    authModal.classList.add('active');
    modalOverlay.classList.add('active');
}

function closeAuth() {
    authModal.classList.remove('active');
    if (!detailsModal.classList.contains('active') && !paymentModal.classList.contains('active')) {
        modalOverlay.classList.remove('active');
    }
}

loginTrigger.addEventListener('click', () => {
    // Fechar menu mobile ao abrir auth
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    openAuth();
});
closeAuthModal.addEventListener('click', closeAuth);

authTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        authTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const target = tab.getAttribute('data-auth');
        authFormContainers.forEach(container => {
            container.classList.remove('active');
            if (container.id === `${target}-form-container`) {
                container.classList.add('active');
            }
        });
    });
});

let currentUserEmail = null;

// Google Login Simulation
document.getElementById('google-login').addEventListener('click', () => {
    const btn = document.getElementById('google-login');
    const originalText = btn.innerHTML;
    btn.innerHTML = 'Conectando ao Google...';
    
    setTimeout(() => {
        btn.innerHTML = 'Sucesso!';
        currentUserEmail = "usuario@google.com"; // Email simulado
        setTimeout(() => {
            closeAuth();
            loginTrigger.textContent = 'Olá, Gourmet';
            btn.innerHTML = originalText;
        }, 1000);
    }, 1500);
});

// Form Submissions Simulation
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    currentUserEmail = document.getElementById('login-email').value; // Captura o email
    btn.textContent = 'Entrando...';
    setTimeout(() => {
        closeAuth();
        loginTrigger.textContent = 'Olá, Gourmet';
        btn.textContent = 'Entrar';
    }, 1200);
});

document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    currentUserEmail = document.getElementById('reg-email').value; // Captura o email
    btn.textContent = 'Criando Conta...';
    setTimeout(() => {
        closeAuth();
        loginTrigger.textContent = 'Olá, Gourmet';
        btn.textContent = 'Criar Conta';
    }, 1200);
});

modalOverlay.addEventListener('click', closeDetails);

navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Fechar menu mobile ao clicar
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');

        navTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const target = tab.getAttribute('data-tab');
        tabContents.forEach(content => {
            content.classList.remove('active');
            if (content.id === target) {
                content.classList.add('active');
            }
        });
    });
});

// Reservation Logic
const resSelect = document.getElementById('res-restaurant');
const bookingForm = document.getElementById('booking-form');
const bookingMessage = document.getElementById('booking-message');
const applyCouponBtn = document.getElementById('apply-coupon-btn');
const resCouponInput = document.getElementById('res-coupon');
const couponMessage = document.getElementById('coupon-message');

function populateRestaurantSelect() {
    restaurants.forEach(res => {
        const option = document.createElement('option');
        option.value = res.name;
        option.textContent = res.name;
        resSelect.appendChild(option);
    });
}

// Coupon Logic
let isDiscountApplied = false;

if (applyCouponBtn) {
    applyCouponBtn.addEventListener('click', () => {
        const code = resCouponInput.value.trim().toUpperCase();
        
        if (code === 'GOROUTE') {
            isDiscountApplied = true;
            couponMessage.textContent = 'Parceria PLANGO ativada! Desconto de 15% aplicado à sua reserva.';
            couponMessage.className = 'coupon-message success';
            
            // Visual feedback
            resCouponInput.style.borderColor = '#2ecc71';
        } else if (code === '') {
            couponMessage.textContent = 'Por favor, digite um cupom.';
            couponMessage.className = 'coupon-message error';
        } else {
            isDiscountApplied = false;
            couponMessage.textContent = 'Cupom inválido.';
            couponMessage.className = 'coupon-message error';
            resCouponInput.style.borderColor = 'var(--glass-border)';
        }
    });
}

const paymentModal = document.getElementById('payment-modal');
const closePaymentModalBtn = document.getElementById('close-payment-modal');
const paymentMethodBtns = document.querySelectorAll('.payment-method-btn');
const paymentDetailsContainer = document.getElementById('payment-details-container');
const creditForm = document.getElementById('credit-form');
const pixInfo = document.getElementById('pix-info');
const confirmPaymentBtn = document.getElementById('confirm-payment-btn');

let currentReservationData = {};

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('res-name').value;
    const restaurant = resSelect.value;
    
    currentReservationData = { name, restaurant };

    // Abrir modal de pagamento
    paymentModal.classList.add('active');
    modalOverlay.classList.add('active');
});

function closePaymentModal() {
    paymentModal.classList.remove('active');
    // Só remover overlay se o detailsModal também não estiver aberto
    if (!detailsModal.classList.contains('active')) {
        modalOverlay.classList.remove('active');
    }
    // Resetar estado do modal de pagamento
    paymentMethodBtns.forEach(b => b.classList.remove('active'));
    paymentDetailsContainer.style.display = 'none';
    creditForm.style.display = 'none';
    pixInfo.style.display = 'none';
    confirmPaymentBtn.style.display = 'none';
}

closePaymentModalBtn.addEventListener('click', closePaymentModal);

// Permitir fechar os modais pelo overlay
modalOverlay.addEventListener('click', () => {
    if (paymentModal.classList.contains('active')) {
        closePaymentModal();
    }
    if (authModal.classList.contains('active')) {
        closeAuth();
    }
    if (detailsModal.classList.contains('active')) {
        closeDetails();
    }
});

paymentMethodBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        paymentMethodBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const method = btn.getAttribute('data-method');
        paymentDetailsContainer.style.display = 'block';
        confirmPaymentBtn.style.display = 'block';
        
        if (method === 'credit') {
            creditForm.style.display = 'block';
            pixInfo.style.display = 'none';
        } else if (method === 'pix') {
            creditForm.style.display = 'none';
            pixInfo.style.display = 'block';
        }
    });
});

confirmPaymentBtn.addEventListener('click', () => {
    // Simular processamento
    confirmPaymentBtn.textContent = 'Processando...';
    setTimeout(() => {
        confirmPaymentBtn.textContent = 'Finalizar Reserva';
        closePaymentModal();
        
        // Mostrar mensagem de sucesso original
        bookingMessage.style.display = 'block';
        const emailDestino = currentUserEmail ? ` para <strong>${currentUserEmail}</strong>` : '';
        bookingMessage.innerHTML = `<strong>Sucesso!</strong> Sua reserva foi confirmada. Um email de confirmação foi enviado${emailDestino}. Acesse o email para comprovar a reserva no local.`;
        bookingMessage.className = 'booking-message success-message';
        
        bookingForm.reset();
        isDiscountApplied = false;
        if (couponMessage) couponMessage.textContent = '';
        if (resCouponInput) resCouponInput.style.borderColor = 'var(--glass-border)';

        setTimeout(() => {
            bookingMessage.style.display = 'none';
            bookingMessage.className = 'booking-message';
        }, 5000);
    }, 1500);
});

// Map Integration
const googleMap = document.getElementById('google-map');
const mapPlaceholder = document.getElementById('map-placeholder');

function updateMap(address) {
    if (!address) return;
    
    const encodedAddress = encodeURIComponent(address);
    const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyA_NOT_A_REAL_KEY&q=${encodedAddress}`;
    // Nota: Como não temos uma chave real aqui, usaremos o formato de busca comum que não exige key para demonstração simples (ou o formato q=)
    const simpleMapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    
    mapPlaceholder.style.display = 'none';
    googleMap.style.display = 'block';
    googleMap.src = simpleMapUrl;
}

// Função para renderizar os cards
function displayRestaurants(filteredList) {
    restaurantList.innerHTML = '';
    
    if (filteredList.length === 0) {
        restaurantList.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">Nenhum restaurante encontrado.</p>';
        return;
    }

    filteredList.forEach(res => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${res.image}" alt="${res.name}" class="card-img">
            <div class="card-content">
                <span class="cuisine-tag">${res.cuisine}</span>
                <h3>${res.name}</h3>
                <div class="rating">
                    ${'★'.repeat(Math.floor(res.rating))} 
                    <span style="color: var(--text-muted); font-size: 0.9rem;">${res.rating}</span>
                    <span class="price-indicator">${res.priceLevel}</span>
                </div>
                <p class="feedback">"${res.feedback}"</p>
            </div>
        `;
        
        card.addEventListener('click', () => {
            updateMap(res.address);
            openDetails(res);
            // Em dispositivos móveis, rolar até o mapa (opcional agora com o modal aberto)
            if (window.innerWidth <= 1100) {
                document.querySelector('.map-container').scrollIntoView({ behavior: 'smooth' });
            }
        });
        
        restaurantList.appendChild(card);
    });
}

// Filter State
let currentCuisine = 'all';
let currentCountry = 'all';
let currentSearch = '';

function applyFilters() {
    const filtered = restaurants.filter(res => {
        const matchesCuisine = currentCuisine === 'all' || res.cuisine === currentCuisine;
        const matchesCountry = currentCountry === 'all' || res.country === currentCountry;
        const matchesSearch = res.name.toLowerCase().includes(currentSearch) || 
                              res.cuisine.toLowerCase().includes(currentSearch) ||
                              res.country.toLowerCase().includes(currentSearch);
        
        return matchesCuisine && matchesCountry && matchesSearch;
    });
    
    displayRestaurants(filtered);
}

// Lógica de Filtro por Culinária
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        currentCuisine = btn.getAttribute('data-cuisine');
        applyFilters();
    });
});

// Lógica de Filtro por País
countryFilter.addEventListener('change', (e) => {
    currentCountry = e.target.value;
    applyFilters();
});

// Lógica de Busca
searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value.toLowerCase();
    applyFilters();
});

// Hero Interactivity: Parallax and Mouse Glow
function initHeroInteraction() {
    const hero = document.getElementById('hero');
    const heroBg = document.getElementById('hero-bg');
    const mouseGlow = document.getElementById('mouse-glow');

    if (!hero || !heroBg || !mouseGlow) return;

    hero.addEventListener('mousemove', (e) => {
        const { width, height, left, top } = hero.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        // Mouse Glow Position
        mouseGlow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(230, 126, 34, 0.4) 0%, transparent 50%)`;

        // Parallax Effect
        const moveX = (x - width / 2) / width * 20; // Move up to 20px
        const moveY = (y - height / 2) / height * 20;

        heroBg.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
    });

    hero.addEventListener('mouseleave', () => {
        heroBg.style.transform = `translate(0, 0) scale(1.1)`;
    });
}

// Inicialização
window.addEventListener('DOMContentLoaded', () => {
    displayRestaurants(restaurants);
    populateRestaurantSelect();
    initHeroInteraction();
});

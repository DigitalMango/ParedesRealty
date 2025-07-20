// Script para los carruseles de propiedades y su grid
// Datos para cada propiedad (imágenes y textos que rotarán)
const propertyContents = {
    property1: [
        {
            image: "img/properties/1565TrumballTer/front.jpg",
            alt: "1565 Trumball Ter",
            tag: "Lakefront Living",
            title: "1565 Trumball Ter",
            location: "Plattsmouth, NE",
            price: "$369,000",
            days: "20 days"
        },
        {
            image: "img/properties/1112HackneyDr/front.jpg",
            alt: "1112 Hackney Dr",
            tag: "Spacious Living",
            title: "1112 Hackney Dr",
            location: "Papillion, NE",
            price: "$285,000",
            days: "20 days"
        },
        {
            image: "img/properties/3476SpauldingSt/front.png",
            alt: "3476 Spaulding St",
            tag: "Half-Acre Lot",
            title: "3476 Spaulding St",
            location: "Omaha, NE",
            price: "200,000",
            days: "1 Year"
        },
        {
            image: "img/properties/3820GordonSt/front.png",
            alt: "3820 Gordon St",
            tag: "Desirable Neighborhood",
            title: "3820 Gordon St",
            location: "Omaha, NE",
            price: "205,000",
            days: "1 Year"
        },
        {
            image: "img/properties/3711SewardSt/front.png",
            alt: "3711 Seward St",
            tag: "Perfect Home for a Small Family",
            title: "3711 Seward St",
            location: "Omaha, NE",
            price: "155,000",
            days: "1 Year"
        },
        {
            image: "img/properties/7072SewardSt/front.png",
            alt: "7072 Seward St",
            tag: "Charming 1.5-Story Vinyl Sided Haven",
            title: "7072 Seward St",
            location: "Omaha, NE",
            price: "220,000",
            days: "6 Months"
        },
        {
            image: "img/properties/4741S17thSt/front.png",
            alt: "4741 S 17t St",
            tag: "In The Heart Of South Omaha",
            title: "4741 S1 7th St",
            location: "Omaha, NE",
            price: "135,000",
            days: "3 Months"
        },
        {
            image: "img/properties/8716ValleySt/front.png",
            alt: "8716 Valley St",
            tag: "Centrally Located",
            title: "8716 Valley St",
            location: "Omaha, NE",
            price: "$238,325",
            days: "1 Month"
        }
    ],
    property2: [
        {
            image: "img/properties/5727S15thSt/front.png",
            alt: "5727S15thSt",
            tag: "Quarter-Acre Lot",
            title: "5727 S 15th St",
            location: "Omaha, NE",
            price: "$295,000",
            days: "20 days"
        },
        {
            image: "img/properties/12807S45thSt/front.png",
            alt: "12807S45thSt",
            tag: "Built in 2022",
            title: "12807 S 45th St",
            location: "Bellevue, NE",
            price: "$345,000",
            days: "20 days"
        },
        {
            image: "img/properties/15075thCorso/front.png",
            alt: "1507 5th Corso",
            tag: "Impeccable Condition",
            title: "1507 5th Corso",
            location: "Nebraska City, NE",
            price: "$174,000",
            days: "1 Year"
        },
        {
            image: "img/properties/3347N40thAve/front.png",
            alt: "3347 N 40th Ave",
            tag: "Adorable Home",
            title: "3347 N 40th Ave",
            location: "Omaha, NE",
            price: "$100,000",
            days: "1 Year"
        },
        {
            image: "img/properties/3716TSt/front.png",
            alt: "3716 T St",
            tag: "Great Duplex",
            title: "3716 T St",
            location: "Omaha, NE",
            price: "$222,000",
            days: "6 Months"
        },
        {
            image: "img/properties/3210HamiltonSt/front.png",
            alt: "3210 Hamilton St",
            tag: "Dreamlike House",
            title: "3210 Hamilton St",
            location: "Omaha, NE",
            price: "$275,000",
            days: "5 Months"
        },
        {
            image: "img/properties/2318BensonGardensBlvd/front.png",
            alt: "2318 Benson Gardens Blvd",
            tag: "3-Bedroom Townhouse Condo",
            title: "2318 Benson Gardens Blvd",
            location: "Omaha, NE",
            price: "$161,000",
            days: "1 Month"
        },
        {
            image: "img/properties/112CitadelDr/front.png",
            alt: "112 Citadel Dr",
            tag: "Well-Maintained Home",
            title: "112 Citadel Dr",
            location: "Papillion, NE",
            price: "$290,000",
            days: "1 Month"
        }
    ],
    property3: [
        {
            image: "img/properties/9119MeadowDr/front.png",
            alt: "9119 Meadow Dr",
            tag: "Modern Design",
            title: "9119 Meadow Dr",
            location: "Omaha, NE",
            price: "$270,000",
            days: "2 months"
        },
        {
            image: "img/properties/3146MayberryCt/front.png",
            alt: "3146 Mayberry Ct",
            tag: "Urban Living",
            title: "3146 Mayberry Ct",
            location: "Omaha, NE",
            price: "$300,000",
            days: "2 months"
        },
        {
            image: "img/properties/12731WoodcrestPlz3-320/front.png",
            alt: "12731 Woodcrest Plz #3-320",
            tag: "Renovated Condo",
            title: "12731 Woodcrest Plz #3-320",
            location: "Omaha, NE",
            price: "$165,000",
            days: "1 Year"
        },
        {
            image: "img/properties/4401LeavenworthSt/front.png",
            alt: "4401 Leavenworth St",
            tag: "Spacious Home",
            title: "4401 Leavenworth St",
            location: "Omaha, NE",
            price: "$296,000",
            days: "1 Year"
        },
        {
            image: "img/properties/7318S24thAve/front.png",
            alt: "7318 S 24th Ave",
            tag: "Ranch Style Home",
            title: "7318 S 24th Ave",
            location: "Bellevue, NE",
            price: "$220,000",
            days: "4 Months"
        },
        {
            image: "img/properties/1401N58thSt/front.png",
            alt: "1401 N 58th St",
            tag: "Prime Omaha Location",
            title: "1401 N 58th St",
            location: "Omaha, NE",
            price: "$350,000",
            days: "3 Months"
        },
        {
            image: "img/properties/128S110thSt/front.png",
            alt: "128 S 110th St",
            tag: "Split-Entry Home",
            title: "128 S 110th St",
            location: "Omaha, NE",
            price: "$225,000",
            days: "1 Month"
        },
        {
            image: "img/properties/2415S25thSt/front.png",
            alt: "2415 S 25th St",
            tag: "Thoughtfully Updated Home",
            title: "2415 S 25th St",
            location: "Omaha, NE",
            price: "$186,000",
            days: "1 Month"
        }
    ],
    property4: [
        {
            image: "img/properties/802N4thSt/front.png",
            alt: "802 N 4th St",
            tag: "Mid-Century Modern",
            title: "802 N 4th St",
            location: "Bellevue, NE",
            price: "$240,000",
            days: "3 months"
        },
        {
            image: "img/properties/4118SSt/front.png",
            alt: "4118 S St",
            tag: "Fully Renovated",
            title: "4118 S St",
            location: "Omaha, NE",
            price: "$217,500",
            days: "3 months"
        },
        {
            image: "img/properties/5321N36thSt/front.png",
            alt: "5321 N 36th St",
            tag: "New Construction",
            title: "5321 N 36th St",
            location: "Omaha, NE",
            price: "$245,500",
            days: "1 Year"
        },
        {
            image: "img/properties/1203JSt/front.png",
            alt: "1203 J St",
            tag: "Victorian Home",
            title: "1203 J St",
            location: "Tekamah, NE",
            price: "$180,000",
            days: "1 Year"
        },
        {
            image: "img/properties/4516FranklinSt/front.png",
            alt: "4516 Franklin St",
            tag: "Updated Raised Ranch",
            title: "4516 Franklin St",
            location: "Omaha, NE",
            price: "$171,000",
            days: "1 Year"
        },
        {
            image: "img/properties/1616MandersonSt/front.png",
            alt: "1616 Manderson St",
            tag: "Over 1,200 sq ft",
            title: "1616 Manderson St",
            location: "Omaha, NE",
            price: "$145,000",
            days: "4 Months"
        },
        {
            image: "img/properties/2820N66thSt214/front.png",
            alt: "2820 N 66th St #214",
            tag: "One Bedroom Condo",
            title: "2820 N 66th St #214",
            location: "Omaha, NE",
            price: "$89,750",
            days: "1 Month"
        }
    ],
    property5: [
        {
            image: "img/properties/5864S104thAve/front.png",
            alt: "5864 S 104th Ave",
            tag: "Tri Level Home",
            title: "5864 S 104th Ave",
            location: "Omaha, NE",
            price: "$317,000",
            days: "1 month"
        },
        {
            image: "img/properties/1820N31stSt/front.png",
            alt: "1820 N 31st St",
            tag: "Cozy and Affordable",
            title: "1820 N 31st St",
            location: "Omaha, NE",
            price: "$149,000",
            days: "1 month"
        },
        {
            image: "img/properties/822ChicagoAve/front.png",
            alt: "822 Chicago Ave",
            tag: "Move in ready home",
            title: "822 Chicago Ave",
            location: "Plattsmouth, NE",
            price: "$199,000",
            days: "1 Year"
        },
        {
            image: "img/properties/6528S115thSt/front.png",
            alt: "6528 S 115th St",
            tag: "2,000 sq ft",
            title: "6528 S 115th St",
            location: "Omaha, NE",
            price: "$275,000",
            days: "1 Year"
        },
        {
            image: "img/properties/4526S32ndSt/front.png",
            alt: "4526 S 32nd St",
            tag: "Prime Location",
            title: "4526 S 32nd St",
            location: "Omaha, NE",
            price: "$110,000",
            days: "6 Months"
        },
        {
            image: "img/properties/302S71stSt/front.png",
            alt: "302 S 71st St",
            tag: "Mid Century Raised Ranch",
            title: "302 S 71st St",
            location: "Omaha, NE",
            price: "$290,000",
            days: "3 Months"
        },
        {
            image: "img/properties/2554N48thAve/front.png",
            alt: "2554 N 48th Ave",
            tag: "Fully Remodeled Home",
            title: "2554 N 48th Ave",
            location: "Omaha, NE",
            price: "$230,500",
            days: "1 Month"
        }
    ]
};

// Función para rotar el contenido de una propiedad
function rotatePropertyContent(propertyId, contents) {
    let currentIndex = 0;
    const container = document.getElementById(propertyId);
    function updateContent() {
        const content = contents[currentIndex];
        container.innerHTML = '';
        const wrapper = document.createElement('div');
        wrapper.className = 'relative w-full h-full animate-fade-in';
        wrapper.innerHTML = `
            <img src="${content.image}" alt="${content.alt}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
            <div class="property-info absolute bottom-0 left-0 p-6 w-full z-20 bg-gradient-to-t from-black/80 to-transparent">
                <span class="text-accent bg-black/70 rounded-full text-xs px-3 py-1">${content.tag}</span>
                <h3 class="text-xl font-bold mt-2">${content.title}</h3>
                <p class="text-gray-300 mt-1">${content.location}</p>
                <div class="flex justify-between items-center mt-4">
                    <span class="text-sm">Closing Price: <span class="text-accent">${content.price}</span></span>
                    <span class="text-xs bg-deepgreen rounded-full px-2 py-1">${content.days}</span>
                </div>
            </div>
        `;
        container.appendChild(wrapper);
        currentIndex = (currentIndex + 1) % contents.length;
    }
    updateContent();
    setInterval(updateContent, 10000);
}

// Iniciar rotación para cada propiedad al cargar el DOM
document.addEventListener('DOMContentLoaded', function() {
    for (const [propertyId, contents] of Object.entries(propertyContents)) {
        rotatePropertyContent(propertyId, contents);
    }
}); 
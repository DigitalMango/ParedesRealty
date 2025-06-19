// Script para los carruseles de propiedades y su grid
// Datos para cada propiedad (imágenes y textos que rotarán)
const propertyContents = {
    property1: [
        {
            image: "img/properties/prop1/front.jpg",
            alt: "1565 Trumball Ter",
            tag: "Lakefront Living",
            title: "1565 Trumball Ter",
            location: "Plattsmouth, NE",
            price: "$369,000",
            days: "20 days"
        },
        {
            image: "img/properties/prop2/front.jpg",
            alt: "Living Room",
            tag: "Spacious Living",
            title: "1565 Trumball Ter",
            location: "2,450 sqft • 4 Bed",
            price: "$369,000",
            days: "20 days"
        },
    ],
    property2: [
        {
            image: "img/properties/prop3/front.png",
            alt: "1112 Hackney Dr",
            tag: "Single Family Residence",
            title: "1112 Hackney Dr",
            location: "Papillion, NE",
            price: "$285,000",
            days: "20 days"
        },
        {
            image: "img/properties/prop4/front.png",
            alt: "Backyard",
            tag: "Landscaped Garden",
            title: "1112 Hackney Dr",
            location: "0.5 acre lot",
            price: "$285,000",
            days: "20 days"
        }
    ],
    property3: [
        {
            image: "img/properties/prop5/front.png",
            alt: "5727 S 15th St",
            tag: "All-cash offer",
            title: "5727 S 15th St",
            location: "Omaha, NE",
            price: "$295,000",
            days: "2 months"
        },
        {
            image: "img/properties/prop6/front.png",
            alt: "Living Area",
            tag: "Open Concept",
            title: "5727 S 15th St",
            location: "1,850 sqft",
            price: "$295,000",
            days: "2 months"
        }
    ],
    property4: [
        {
            image: "img/properties/prop7/front.png",
            alt: "12807 S 45th St",
            tag: "Built in 2022",
            title: "12807 S 45th St",
            location: "Bellevue, NE",
            price: "$345,000",
            days: "3 months"
        },
        {
            image: "img/properties/prop8/front.png",
            alt: "Luxury Bath",
            tag: "Modern Finishes",
            title: "12807 S 45th St",
            location: "3.5 Baths",
            price: "$345,000",
            days: "3 months"
        }
    ],
    property5: [
        {
            image: "img/properties/prop9/front.png",
            alt: "9119 Meadow Dr",
            tag: "One with Nature",
            title: "9119 Meadow Dr",
            location: "Omaha, NE 68114",
            price: "$270,000",
            days: "1 month"
        },
        {
            image: "img/properties/prop10/front.png",
            alt: "Outdoor Living",
            tag: "Private Oasis",
            title: "9119 Meadow 802 N 4th St",
            location: "Bellevue, NE 68005",
            price: "$240,000",
            days: "1 month"
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
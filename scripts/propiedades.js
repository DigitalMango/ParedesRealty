// Script para los carruseles de propiedades y su grid
// Datos para cada propiedad (imágenes y textos que rotarán)
const propertyContents = {
    "property1": [
        {
            "image": "img/properties/zillow/zillow_prop_1.jpg",
            "alt": "4212 S 27th St",
            "tag": "Recent Sale",
            "title": "4212 S 27th St",
            "location": "Omaha, NE, 68107",
            "price": "$160,500",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_2.jpg",
            "alt": "4713 N 14th St",
            "tag": "Recent Sale",
            "title": "4713 N 14th St",
            "location": "Omaha, NE, 68110",
            "price": "$90,000",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_3.jpg",
            "alt": "1616 S 6th St",
            "tag": "Recent Sale",
            "title": "1616 S 6th St",
            "location": "Omaha, NE, 68108",
            "price": "$225,000",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_4.jpg",
            "alt": "5640 Ruggles St",
            "tag": "Recent Sale",
            "title": "5640 Ruggles St",
            "location": "Omaha, NE, 68104",
            "price": "$215,000",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_1.jpg",
            "alt": "4212 S 27th St",
            "tag": "Recent Sale",
            "title": "4212 S 27th St",
            "location": "Omaha, NE, 68107",
            "price": "$160,500",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_2.jpg",
            "alt": "4713 N 14th St",
            "tag": "Recent Sale",
            "title": "4713 N 14th St",
            "location": "Omaha, NE, 68110",
            "price": "$90,000",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_3.jpg",
            "alt": "1616 S 6th St",
            "tag": "Recent Sale",
            "title": "1616 S 6th St",
            "location": "Omaha, NE, 68108",
            "price": "$225,000",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_4.jpg",
            "alt": "5640 Ruggles St",
            "tag": "Recent Sale",
            "title": "5640 Ruggles St",
            "location": "Omaha, NE, 68104",
            "price": "$215,000",
            "days": "Sold"
        }
    ],
    "property2": [
        {
            "image": "img/properties/zillow/zillow_prop_5.jpg",
            "alt": "58655 284th St",
            "tag": "Recent Sale",
            "title": "58655 284th St",
            "location": "Malvern, IA, 51551",
            "price": "$530,000",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_6.jpg",
            "alt": "5102 S 40th St",
            "tag": "Recent Sale",
            "title": "5102 S 40th St",
            "location": "Omaha, NE, 68107",
            "price": "$170,000",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_7.jpg",
            "alt": "9170 Black St",
            "tag": "Recent Sale",
            "title": "9170 Black St",
            "location": "Omaha, NE, 68122",
            "price": "$275,000",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_8.jpg",
            "alt": "6557 Maple St",
            "tag": "Recent Sale",
            "title": "6557 Maple St",
            "location": "Omaha, NE, 68104",
            "price": "$197,000",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_5.jpg",
            "alt": "58655 284th St",
            "tag": "Recent Sale",
            "title": "58655 284th St",
            "location": "Malvern, IA, 51551",
            "price": "$530,000",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_6.jpg",
            "alt": "5102 S 40th St",
            "tag": "Recent Sale",
            "title": "5102 S 40th St",
            "location": "Omaha, NE, 68107",
            "price": "$170,000",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_7.jpg",
            "alt": "9170 Black St",
            "tag": "Recent Sale",
            "title": "9170 Black St",
            "location": "Omaha, NE, 68122",
            "price": "$275,000",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_8.jpg",
            "alt": "6557 Maple St",
            "tag": "Recent Sale",
            "title": "6557 Maple St",
            "location": "Omaha, NE, 68104",
            "price": "$197,000",
            "days": "Sold"
        }
    ],
    "property3": [
        {
            "image": "img/properties/zillow/zillow_prop_9.jpg",
            "alt": "7001 Emiline St",
            "tag": "Recent Sale",
            "title": "7001 Emiline St",
            "location": "La Vista, NE, 68128",
            "price": "$185,000",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_10.jpg",
            "alt": "4121 N 44th St",
            "tag": "Recent Sale",
            "title": "4121 N 44th St",
            "location": "Omaha, NE, 68111",
            "price": "$140,000",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_11.jpg",
            "alt": "8000 Park Dr",
            "tag": "Recent Sale",
            "title": "8000 Park Dr",
            "location": "Ralston, NE, 68127",
            "price": "$225,000",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_12.jpg",
            "alt": "4220 S 12th St",
            "tag": "Recent Sale",
            "title": "4220 S 12th St",
            "location": "Omaha, NE, 68107",
            "price": "$183,600",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_9.jpg",
            "alt": "7001 Emiline St",
            "tag": "Recent Sale",
            "title": "7001 Emiline St",
            "location": "La Vista, NE, 68128",
            "price": "$185,000",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_10.jpg",
            "alt": "4121 N 44th St",
            "tag": "Recent Sale",
            "title": "4121 N 44th St",
            "location": "Omaha, NE, 68111",
            "price": "$140,000",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_11.jpg",
            "alt": "8000 Park Dr",
            "tag": "Recent Sale",
            "title": "8000 Park Dr",
            "location": "Ralston, NE, 68127",
            "price": "$225,000",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_12.jpg",
            "alt": "4220 S 12th St",
            "tag": "Recent Sale",
            "title": "4220 S 12th St",
            "location": "Omaha, NE, 68107",
            "price": "$183,600",
            "days": "Sold"
        }
    ],
    "property4": [
        {
            "image": "img/properties/zillow/zillow_prop_13.jpg",
            "alt": "4819 Franklin St",
            "tag": "Recent Sale",
            "title": "4819 Franklin St",
            "location": "Omaha, NE, 68104",
            "price": "$30,000",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_14.jpg",
            "alt": "4251 Patrick Ave",
            "tag": "Recent Sale",
            "title": "4251 Patrick Ave",
            "location": "Omaha, NE, 68111",
            "price": "$152,500",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_15.jpg",
            "alt": "6032 S 41st St",
            "tag": "Recent Sale",
            "title": "6032 S 41st St",
            "location": "Omaha, NE, 68107",
            "price": "$257,500",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_16.jpg",
            "alt": "3227 6th Ave",
            "tag": "Recent Sale",
            "title": "3227 6th Ave",
            "location": "Council Bluffs, IA, 51501",
            "price": "$45,500",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_13.jpg",
            "alt": "4819 Franklin St",
            "tag": "Recent Sale",
            "title": "4819 Franklin St",
            "location": "Omaha, NE, 68104",
            "price": "$30,000",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_14.jpg",
            "alt": "4251 Patrick Ave",
            "tag": "Recent Sale",
            "title": "4251 Patrick Ave",
            "location": "Omaha, NE, 68111",
            "price": "$152,500",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_15.jpg",
            "alt": "6032 S 41st St",
            "tag": "Recent Sale",
            "title": "6032 S 41st St",
            "location": "Omaha, NE, 68107",
            "price": "$257,500",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_16.jpg",
            "alt": "3227 6th Ave",
            "tag": "Recent Sale",
            "title": "3227 6th Ave",
            "location": "Council Bluffs, IA, 51501",
            "price": "$45,500",
            "days": "Sold"
        }
    ],
    "property5": [
        {
            "image": "img/properties/zillow/zillow_prop_17.jpg",
            "alt": "3351 Patrick Ave",
            "tag": "Recent Sale",
            "title": "3351 Patrick Ave",
            "location": "Omaha, NE, 68111",
            "price": "$135,000",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_18.jpg",
            "alt": "3279 Hascall St",
            "tag": "Recent Sale",
            "title": "3279 Hascall St",
            "location": "Omaha, NE, 68105",
            "price": "$210,000",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_19.jpg",
            "alt": "2602 Geri Dr",
            "tag": "Recent Sale",
            "title": "2602 Geri Dr",
            "location": "Bellevue, NE, 68147",
            "price": "$287,500",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_20.jpg",
            "alt": "5801 S 119th Plz",
            "tag": "Recent Sale",
            "title": "5801 S 119th Plz",
            "location": "Omaha, NE, 68137",
            "price": "$499,000",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_17.jpg",
            "alt": "3351 Patrick Ave",
            "tag": "Recent Sale",
            "title": "3351 Patrick Ave",
            "location": "Omaha, NE, 68111",
            "price": "$135,000",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_18.jpg",
            "alt": "3279 Hascall St",
            "tag": "Recent Sale",
            "title": "3279 Hascall St",
            "location": "Omaha, NE, 68105",
            "price": "$210,000",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_19.jpg",
            "alt": "2602 Geri Dr",
            "tag": "Recent Sale",
            "title": "2602 Geri Dr",
            "location": "Bellevue, NE, 68147",
            "price": "$287,500",
            "days": "Sold"
        },
        {
            "image": "img/properties/zillow/zillow_prop_20.jpg",
            "alt": "5801 S 119th Plz",
            "tag": "Recent Sale",
            "title": "5801 S 119th Plz",
            "location": "Omaha, NE, 68137",
            "price": "$499,000",
            "days": "Sold"
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
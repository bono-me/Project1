const eventinfo = [
  {
    eventName: "Neon Pulse Festival",
    mainImage: "pictures/stage2.png",
    program: {
      title: "Stage Schedule",
      acts: [
        {
          name: "Day 1",
        },
        {
          name: "Dua Lipa",
          time: "23:00 - 01:00"
        },
        {
          name: "Harry Styles",
          time: "22:00 - 23:00"
        },
        {
          name: "Ariana Grande",
          time: "21:00 - 22:00"
        },
        {
          name: "The Weeknd",
          time: "20:00 - 21:00"
        },
        {
          name: "Billie Eilish",
          time: "19:00 - 20:00"
        },
        {
          name: "Olivia Rodrigo",
          time: "18:00 - 19:00"
        },

        {
          name: "Day 2",
        },
        {
          name: "Taylor Swift",
          time: "23:00 - 01:00"
        },
        {
          name: "Bruno Mars",
          time: "22:00 - 23:00"
        },
        {
          name: "Doja Cat",
          time: "21:00 - 22:00"
        },
        {
          name: "Post Malone",
          time: "20:00 - 21:00"
        },
        {
          name: "Katy Perry",
          time: "19:00 - 20:00"
        },
        {
          name: "Lizzo",
          time: "18:00 - 19:00"
        },
        {
          name: "Day 3",
        },
        {
          name: "Ed Sheeran",
          time: "23:00 - 01:00"
        },
        {
          name: "Justin Bieber",
          time: "22:00 - 23:00"
        },
        {
          name: "Rihanna",
          time: "21:00 - 22:00"
        },
        {
          name: "Shawn Mendes",
          time: "20:00 - 21:00"
        },
        {
          name: "Halsey",
          time: "19:00 - 20:00"
        },
        {
          name: "Charlie Puth",
          time: "18:00 - 19:00"
        }

      ]
    },

    sections: {
      map: {
        title: "Map & Navigation",
        image: "pictures/eventmap2.png",
        description: `The festival takes place at Görlitzer Park, Berlin.<br>
                      Gates open daily at 15:00.<br><br>
                       Main entrances are accessible from Görlitzer Straße, Wiener Straße, and Skalitzer Straße.<br>
              The nearest public transport stops are Görlitzer Bahnhof (U1, U3) and Schlesisches Tor (U1), both within walking distance.<br><br>
              We strongly encourage visitors to use public transport or bicycles, as parking in the surrounding area is very limited.<br><br>
              The park is largely barrier-free and offers accessible pathways; however, some grassy areas may be uneven.<br>
              Accessible restrooms and designated assistance points are available near the main stage and food areas.<br><br>
              Clearly marked emergency exits, first aid stations, water refill points, and information booths are distributed throughout the park.<br>
              Please follow all posted signage and staff instructions to ensure a safe and enjoyable experience for everyone.`,
        items: [
        ]
      },

      tickets: {
        title: "Tickets & Services",
        totalCapacity: "Maximum venue capacity: 12,000 tickets",
        items: [
          {
            name: "Day Pass",
            price: "35€"
          },
          {
            name: "Weekend Pass",
            price: "90€"
          },
          {
            name: "VIP Day Pass",
            price: "120€"
          },
          {
            name: "VIP Weekend Pass",
            price: "250€"
          },
          {
            name: "Early Entry Upgrade",
            price: "25€"
          },
          {
            name: "Locker Rental",
            price: "10€"
          },
          {
            name: "Parking Pass",
            price: "15€"
          }
        ]
      },

      rules: {
        title: "Safety & Rules",
        items: [
          {
            name: "Please stay hydrated and take breaks when needed",
          },
          {
            name: "No glass containers or sharp objects allowed",
          },
          {
            name: "Smoking permitted only in designated areas"
          },
          {
            name: "Follow staff instructions at all times"
          },
          {
            name: "No professional recording equipment without accreditation"
          },
        ]
      },

      food: {
        title: "Food Menu",
        items: [
          {
            name: "Gourmet Burger",
            price: "6€"
          },
          {
            name: "Vegan Bowl",
            price: "5€"
          },
          {
            name: "Loaded Fries",
            price: "4€"
          },
          {
            name: "Chicken Tacos",
            price: "5€"
          },
          {
            name: "Pizza Slice",
            price: "3€"
          },
          {
            name: "Fruit Cup",
            price: "2.5€"
          },
          {
            name: "Ice Cream",
            price: "2€"
          }
        ]
      },

      drinks: {
        title: "Drinks",
        items: [
          {
            name: "Water",
            price: "1.5€"
          },
          {
            name: "Soft Drinks",
            price: "2.5€"
          },
          {
            name: "Energy Drink",
            price: "3.5€"
          },
          {
            name: "Beer",
            price: "4€"
          },
          {
            name: "Cocktail",
            price: "6€"
          },
          {
            name: "Wine",
            price: "5€"
          }
        ]
      },

      merch: {
        title: "Merchandise",
        items: [
          {
            name: "Festival T-shirt",
            price: "20€"
          },
          {
            name: "Hoodie",
            price: "45€"
          },
          {
            name: "Cap",
            price: "15€"
          },
          {
            name: "Poster",
            price: "5€"
          },
          {
            name: "Tote Bag",
            price: "10€"
          },
          {
            name: "Sticker Pack",
            price: "3€"
          }
        ]
      }
    }
  }
];

document.addEventListener('DOMContentLoaded', () => {
    const center = document.getElementById('centerContent');
    const items = document.querySelectorAll('.item');

    const data = eventinfo[0];

    const headerTitle = document.querySelector('.header-main h1');
    headerTitle.textContent = data.eventName;

    const topImage = document.querySelector('.top img');
    if (topImage && data.mainImage) {
        topImage.src = data.mainImage;
    }

    items.forEach(item => {
        item.addEventListener('click', () => {
            const sectionId = item.id;

            // Program overview
            if (sectionId === "program") {
                renderProgram(data.program);
            } 
            // Other sections
            else {
                const section = data.sections[sectionId];
                if (!section) return;
                renderSection(section);
            }

            items.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    function renderProgram(program) {
    let html = `<h3>${program.title}</h3>`;

    program.acts.forEach((act, index) => {
        const isDay = !act.time;
        const isFirst = index === 0;

         html += `
          <p style="${isDay && !isFirst ? "margin-top:30px;" : ""}">
            <b>${act.name}</b>${act.time ? ` <span class="highlight">${act.time}</span>` : ""}
          </p>
      `;
    });

    center.innerHTML = html;
    }

    function renderSection(section) {
    let html = `<h3>${section.title}</h3>`;

    // Show map image if it exists
    if (section.image) {
        html += `
            <img 
                src="${section.image}" 
                alt="${section.title}" 
                class="section-image"
            >
        `;
    }

    // Show description if it exists
    if (section.description) {
        html += `<p class="section-description">${section.description}</p>`;
    }

    // Render list items
    section.items.forEach(item => {
        html += `<p><b>${item.name}</b>`;

        if (item.price) {
          html += ` <span class="highlight">${item.price}</span>`;
        }

        html += `</p>`;
    });

    // Add total capacity line if it exists
    if (section.totalCapacity) {
      html += `<p class="ticket-max">${section.totalCapacity}</p>`;
    }

    center.innerHTML = html;
}
});
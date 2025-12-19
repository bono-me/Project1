const eventinfo = [
  {
    eventName: "Midnight X",
    mainImage: "pictures/stage5.png",
    program: {
      title: "Stage Schedule",
      acts: [
        {
          name: "Day 1",
        },
        {
          name: "Travis Scott",
          time: "22:30 - 00:00"
        },
        {
          name: "Playboi Carti",
          time: "21:00 - 22:30"
        },
        {
          name: "Lil Uzi Vert",
          time: "19:30 - 21:00"
        },
        {
          name: "Don Toliver",
          time: "18:00 - 19:30"
        },
        {
          name: "Ken Carson",
          time: "16:30 - 18:00"
        },

        {
          name: "Day 2",
        },
        {
          name: "Future",
          time: "22:30 - 00:00"
        },
        {
          name: "21 Savage",
          time: "21:00 - 22:30"
        },
        {
          name: "Metro Boomin",
          time: "19:30 - 21:00"
        },
        {
          name: "Gunna",
          time: "18:00 - 19:30"
        },
        {
          name: "Destroy Lonely",
          time: "16:30 - 18:00"
        },

        {
          name: "Day 3",
        },
        {
          name: "A$AP Rocky",
          time: "22:00 - 23:30"
        },
        {
          name: "Lil Baby",
          time: "20:30 - 22:00"
        },
        {
          name: "Yeat",
          time: "19:00 - 20:30"
        },
        {
          name: "Sheck Wes",
          time: "17:30 - 19:00"
        },
        {
          name: "SoFaygo",
          time: "16:00 - 17:30"
        },
      ]
    },

    sections: {
      map: {
        title: "Map & Navigation",
        image: "pictures/eventmap5.png",
        description: `The festival takes place at Grant Park, a central outdoor venue located in downtown Chicago, USA.<br>
                      Gates open daily from 15:00.<br><br>
                      Grant Park is easily accessible via public transportation, including multiple CTA bus routes and nearby L train stations.<br>
                      Visitors arriving by train can use the Roosevelt or Monroe stations for quick access.<br><br>
                      Bicycle racks are available near the main entrances, and ride-share drop-off zones are clearly marked around the park.<br><br>
                      The venue offers paved pathways suitable for wheelchair access.<br>
                      Accessible restrooms, seating areas, and assistance points are located throughout the festival grounds.<br><br>
                      Emergency exits, first aid stations, water refill points, and information booths are clearly signposted.<br>
                      Please follow staff guidance and signage to ensure a safe and smooth festival experience.`,
        items: [
        ]
      },

      tickets: {
        title: "Tickets & Services",
        totalCapacity: "Maximum venue capacity: 35,000 tickets",
        items: [
          {
            name: "Day Ticket",
            price: "65$"
          },
          {
            name: "Weekend Pass",
            price: "180$"
          },
          {
            name: "VIP Pass",
            price: "320$"
          },
          {
            name: "Early Entry Upgrade",
            price: "40$"
          },
          {
            name: "Locker Rental",
            price: "15$"
          },
          {
            name: "Parking Pass",
            price: "25$"
          }
        ]
      },

      rules: {
        title: "Safety & Rules",
        items: [
          {
            name: "No weapons, sharp objects, or illegal substances allowed",
          },
          {
            name: "Bag checks will be conducted at all entrances",
          },
          {
            name: "Respect artists, staff, and fellow attendees at all times",
          },
          {
            name: "Stay hydrated and use water refill stations",
          },
          {
            name: "Follow all security and staff instructions"
          },
        ]
      },

      food: {
        title: "Food Menu",
        items: [
          {
            name: "BBQ Chicken Plate",
            price: "9$"
          },
          {
            name: "Cheeseburger",
            price: "8$"
          },
          {
            name: "Fried Chicken Sandwich",
            price: "8.5$"
          },
          {
            name: "Loaded Fries",
            price: "6$"
          },
          {
            name: "Vegan Burrito",
            price: "7$"
          },
          {
            name: "Donuts",
            price: "4$"
          }
        ]
      },

      drinks: {
        title: "Drinks",
        items: [
          {
            name: "Water",
            price: "3$"
          },
          {
            name: "Soft Drinks",
            price: "4$"
          },
          {
            name: "Energy Drink",
            price: "5$"
          },
          {
            name: "Beer",
            price: "7$"
          },
          {
            name: "Cocktail",
            price: "10$"
          },
          {
            name: "Iced Tea",
            price: "4$"
          }
        ]
      },

      merch: {
        title: "Merchandise",
        items: [
          {
            name: "Festival T-shirt",
            price: "30$"
          },
          {
            name: "Hoodie",
            price: "60$"
          },
          {
            name: "Snapback Cap",
            price: "25$"
          },
          {
            name: "Poster",
            price: "10$"
          },
          {
            name: "Sticker Pack",
            price: "5$"
          },
          {
            name: "Wristband",
            price: "6$"
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
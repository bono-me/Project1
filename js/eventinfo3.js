const eventinfo = [
  {
    eventName: "Nocturne Eternal",
    mainImage: "pictures/stage3.png",
    program: {
      title: "Stage Schedule",
      acts: [
        {
          name: "Day 1",
        },
        {
          name: "Charlotte de Witte",
          time: "23:30 - 01:30"
        },
        {
          name: "Amelie Lens",
          time: "22:00 - 23:30"
        },
        {
          name: "Adam Beyer",
          time: "20:30 - 22:00"
        },
        {
          name: "ANNA",
          time: "19:00 - 20:30"
        },
        {
          name: "Reinier Zonneveld",
          time: "17:30 - 19:00"
        },

        {
          name: "Day 2",
        },
        {
          name: "Ben Klock",
          time: "23:30 - 01:30"
        },
        {
          name: "Dax J",
          time: "22:00 - 23:30"
        },
        {
          name: "Paula Temple",
          time: "20:30 - 22:00"
        },
        {
          name: "Helena Hauff",
          time: "19:00 - 20:30"
        },
        {
          name: "Rødhåd",
          time: "17:30 - 19:00"
        },

        {
          name: "Day 3",
        },
        {
          name: "Jeff Mills",
          time: "23:00 - 01:00"
        },
        {
          name: "Kobosil",
          time: "21:30 - 23:00"
        },
        {
          name: "VTSS",
          time: "20:00 - 21:30"
        },
        {
          name: "Blawan",
          time: "18:30 - 20:00"
        },
        {
          name: "Phase Fatale",
          time: "17:00 - 18:30"
        },
      ]
    },

    sections: {
      map: {
        title: "Map & Navigation",
        image: "pictures/eventmap3.png",
        description: `The event takes place at NDSM Wharf, a former shipyard located in Amsterdam Noord, Netherlands.<br>
                      Gates open daily from 16:00.<br><br>
                      The venue is easily accessible via the free ferry from Amsterdam Central Station to NDSM.<br>
                      Additional access is available by bus and bicycle, with dedicated bike parking near the entrance.<br><br>
                      Due to limited car access in the area, visitors are strongly encouraged to use public transport or bicycles.<br><br>
                      The site features wide, flat concrete surfaces suitable for wheelchair access.<br>
                      Accessible restrooms and assistance points are located near each stage and chill-out area.<br><br>
                      Emergency exits, first aid stations, water refill points, and information booths are clearly marked throughout the festival grounds.<br>
                      Please follow signage and staff instructions to ensure safe movement and crowd flow.`,
        items: [
        ]
      },

      tickets: {
        title: "Tickets & Services",
        totalCapacity: "Maximum venue capacity: 15,000 tickets",
        items: [
          {
            name: "Day Ticket",
            price: "45€"
          },
          {
            name: "Weekend Ticket",
            price: "120€"
          },
          {
            name: "Early Raver Entry",
            price: "25€"
          },
          {
            name: "Backstage Access",
            price: "160€"
          },
          {
            name: "Locker Rental",
            price: "12€"
          },
          {
            name: "Parking Pass",
            price: "20€"
          }
        ]
      },

      rules: {
        title: "Safety & Rules",
        items: [
          {
            name: "Respect fellow attendees and personal space at all times",
          },
          {
            name: "No glass containers or hazardous materials allowed",
          },
          {
            name: "Hearing protection is strongly recommended",
          },
          {
            name: "Zero tolerance for harassment or discrimination",
          },
          {
            name: "Follow all staff instructions and emergency procedures"
          },
        ]
      },

      food: {
        title: "Food Menu",
        items: [
          {
            name: "Vegan Ramen",
            price: "7€"
          },
          {
            name: "Falafel Wrap",
            price: "5€"
          },
          {
            name: "Loaded Fries",
            price: "4.5€"
          },
          {
            name: "Grilled Sandwich",
            price: "5€"
          },
          {
            name: "Fruit Bowl",
            price: "3€"
          },
          {
            name: "Energy Bar",
            price: "2.5€"
          }
        ]
      },

      drinks: {
        title: "Drinks",
        items: [
          {
            name: "Water",
            price: "2€"
          },
          {
            name: "Electrolyte Drink",
            price: "3€"
          },
          {
            name: "Energy Drink",
            price: "4€"
          },
          {
            name: "Beer",
            price: "5€"
          },
          {
            name: "Long Drink",
            price: "7.5€"
          },
          {
            name: "Espresso",
            price: "2.5€"
          }
        ]
      },

      merch: {
        title: "Merchandise",
        items: [
          {
            name: "Festival T-shirt",
            price: "25€"
          },
          {
            name: "Hoodie",
            price: "55€"
          },
          {
            name: "Cap",
            price: "18€"
          },
          {
            name: "Vinyl Record",
            price: "30€"
          },
          {
            name: "Sticker Pack",
            price: "4€"
          },
          {
            name: "Poster",
            price: "8€"
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
const eventinfo = [
  {
    eventName: "GCG Fest",
    mainImage: "pictures/stage4.png",
    program: {
      title: "Stage Schedule",
      acts: [
        {
          name: "Day 1",
        },
        {
          name: "Tame Impala",
          time: "22:30 - 00:00"
        },
        {
          name: "Florence + The Machine",
          time: "21:00 - 22:30"
        },
        {
          name: "Arctic Monkeys",
          time: "19:30 - 21:00"
        },
        {
          name: "The National",
          time: "18:00 - 19:30"
        },
        {
          name: "Phoebe Bridgers",
          time: "16:30 - 18:00"
        },

        {
          name: "Day 2",
        },
        {
          name: "Bon Iver",
          time: "22:30 - 00:00"
        },
        {
          name: "Vampire Weekend",
          time: "21:00 - 22:30"
        },
        {
          name: "HAIM",
          time: "19:30 - 21:00"
        },
        {
          name: "Father John Misty",
          time: "18:00 - 19:30"
        },
        {
          name: "Maggie Rogers",
          time: "16:30 - 18:00"
        },

        {
          name: "Day 3",
        },
        {
          name: "Arcade Fire",
          time: "22:00 - 23:30"
        },
        {
          name: "LCD Soundsystem",
          time: "20:30 - 22:00"
        },
        {
          name: "Alt-J",
          time: "19:00 - 20:30"
        },
        {
          name: "Glass Animals",
          time: "17:30 - 19:00"
        },
        {
          name: "Big Thief",
          time: "16:00 - 17:30"
        },
      ]
    },

    sections: {
      map: {
        title: "Map & Navigation",
        image: "pictures/eventmap4.png",
        description: `The festival takes place at Parc del Fòrum, a large open-air venue located along the coastline of Barcelona, Spain.<br>
                      Gates open daily from 15:00.<br><br>
                      The venue is easily accessible via public transport, including El Maresme–Fòrum metro station (L4) and multiple tram and bus lines.<br><br>
                      Bicycle parking areas are available near the main entrances, and visitors are encouraged to use public transport due to limited car access.<br><br>
                      Parc del Fòrum offers flat, spacious walkways suitable for wheelchair access.<br>
                      Accessible restrooms, shaded rest areas, and assistance points are available throughout the festival grounds.<br><br>
                      Emergency exits, first aid stations, water refill points, and information booths are clearly marked.<br>
                      Please follow signage and staff instructions to ensure safe navigation and crowd flow.`,
        items: [
        ]
      },

      tickets: {
        title: "Tickets & Services",
        totalCapacity: "Maximum venue capacity: 20,000 tickets",
        items: [
          {
            name: "Day Ticket",
            price: "50€"
          },
          {
            name: "Weekend Pass",
            price: "135€"
          },
          {
            name: "Early Entry Pass",
            price: "30€"
          },
          {
            name: "Premium Viewing Upgrade",
            price: "80€"
          },
          {
            name: "Locker Rental",
            price: "12€"
          },
          {
            name: "Parking Pass",
            price: "18€"
          }
        ]
      },

      rules: {
        title: "Safety & Rules",
        items: [
          {
            name: "Please respect fellow attendees and the surrounding environment",
          },
          {
            name: "No glass containers or sharp objects allowed",
          },
          {
            name: "Stay hydrated and make use of shaded rest areas",
          },
          {
            name: "Smoking permitted only in designated areas",
          },
          {
            name: "Follow all staff instructions and posted signage"
          },
        ]
      },

      food: {
        title: "Food Menu",
        items: [
          {
            name: "Paella Bowl",
            price: "7€"
          },
          {
            name: "Grilled Vegetable Wrap",
            price: "5.5€"
          },
          {
            name: "Pulled Jackfruit Sandwich",
            price: "6€"
          },
          {
            name: "Patatas Bravas",
            price: "4€"
          },
          {
            name: "Fresh Fruit Cup",
            price: "3€"
          },
          {
            name: "Churros",
            price: "3.5€"
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
            name: "Sparkling Water",
            price: "2.5€"
          },
          {
            name: "Soft Drinks",
            price: "3€"
          },
          {
            name: "Beer",
            price: "5€"
          },
          {
            name: "Wine",
            price: "5.5€"
          },
          {
            name: "Iced Coffee",
            price: "3€"
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
            name: "Crewneck Sweater",
            price: "45€"
          },
          {
            name: "Canvas Tote Bag",
            price: "15€"
          },
          {
            name: "Poster",
            price: "8€"
          },
          {
            name: "Sticker Pack",
            price: "4€"
          },
          {
            name: "Enamel Pin",
            price: "6€"
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
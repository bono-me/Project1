const eventinfo = [
  {
    eventName: "Echo Horizon",
    mainImage: "pictures/stage.png",
    program: {
      title: "Stage Schedule",
      acts: [
        {
          name: "Day 1",
        },
        {
          name: "Linkin Park",
          time: "23:00 - 01:00"
        },
        {
          name: "Limp Bizkit",
          time: "22:00 - 23:00"
        },
        {
          name: "System of a Down",
          time: "21:00 - 22:00"
        },
        {
          name: "Sum41",
          time: "20:00 - 21:00"
        },
        {
          name: "Blink182",
          time: "19:00 - 20:00"
        },
        {
          name: "Red Hot Chili Peppers",
          time: "18:00 - 19:00"
        },

        {
          name: "Day 2",
        },
        {
          name: "Metallica",
          time: "23:00 - 01:00"
        },
        {
          name: "Slipknot",
          time: "22:00 - 23:00"
        },
        {
          name: "Korn",
          time: "21:00 - 22:00"
        },
        {
          name: "Foo Fighters",
          time: "20:00 - 21:00"
        },
        {
          name: "Green Day",
          time: "19:00 - 20:00"
        },
        {
          name: "Muse",
          time: "18:00 - 19:00"
        },
      ]
    },

    sections: {
      map: {
        title: "Map & Navigation",
        image: "pictures/eventmap.png",
        description: `The event will be held at Devonshire Square, London.<br>
                      Entry will be open from 16:00.<br><br>
                      Main entrances are located on Devonshire Place and Bishopsgate.<br>
                      Parking is available at the nearby Devonshire Square Car Park (limited spaces).<br>
                      We encourage attendees to use public transport: Liverpool Street Station is a 5-minute walk from the venue.<br><br>
                      The venue is fully accessible for people with disabilities. Wheelchair ramps and accessible restrooms are available throughout the grounds.<br><br>
                      Emergency exits are clearly marked and located at all corners of the event area.<br>
                      Information booths, first aid stations, and water refill points are available near each stage and food court.<br><br>
                      Please follow all directional signs and staff instructions to ensure a safe and smooth navigation experience.`,
        items: [
        ]
      },

      tickets: {
        title: "Tickets & Services",
        totalCapacity: "Maximum venue capacity: 1000 tickets",
        items: [
          {
            name: "Day Pass",
            price: "20€"
          },
          {
            name: "Weekend Pass",
            price: "50€"
          },
          {
            name: "VIP Day Pass",
            price: "75€"
          },
          {
            name: "VIP Weekend Pass",
            price: "150€"
          },
          {
            name: "Backstage Access",
            price: "100€"
          },
          {
            name: "Camping Pass",
            price: "15€"
          },
          {
            name: "Parking Pass",
            price: "10€"
          },
          {
            name: "Locker Rental",
            price: "5€"
          },
          {
            name: "Merch Voucher",
            price: "20€"
          }
        ]
      },

      rules: {
        title: "Safety & Rules",
        items: [
          {
            name: "Advisable to bring personal hearing protection",
          },
          {
            name: "No glass bottles",
          },
          {
            name: "No smoking in indoor areas"
          },
          {
            name: "Keep pathways clear at all times"
          },
          {
            name: "No pets allowed"
          },
        ]
      },

      food: {
        title: "Food Menu",
        items: [
          {
            name: "Hamburger",
            price: "2€"
          },
          {
            name: "Cheeseburger",
            price: "3€"
          },
          {
            name: "French fries",
            price: "2€"
          },
          {
            name: "Hotdog",
            price: "2€"
          },
          {
            name: "Veggie Burger",
            price: "3€"
          },
          {
            name: "Chicken Wrap",
            price: "3€"
          },
          {
            name: "Pizza Slice",
            price: "2.5€"
          },
          {
            name: "Nachos",
            price: "2€"
          },
          {
            name: "Onion Rings",
            price: "2€"
          },
          {
            name: "Falafel Bowl",
            price: "3€"
          },
          {
            name: "Ice Cream",
            price: "1.5€"
          }
        ]
      },

      drinks: {
        title: "Drinks",
        items: [
          {
            name: "Water",
            price: "1€"
          },
          {
            name: "Coca-Cola",
            price: "2€"
          },
          {
            name: "Sprite",
            price: "2€"
          },
          {
            name: "Beer",
            price: "3€"
          },
          {
            name: "Gatorade",
            price: "2.5€"
          },
          {
            name: "Orange Juice",
            price: "2€"
          },
          {
            name: "Apple Juice",
            price: "2€"
          },
          {
            name: "Iced Tea",
            price: "2€"
          },
          {
            name: "Energy Drink",
            price: "3€"
          },
          {
            name: "Red Wine",
            price: "4€"
          },
          {
            name: "White Wine",
            price: "4€"
          },
          {
            name: "Cider",
            price: "3€"
          }
        ]
      },

      merch: {
        title: "Merchandise",
        items: [
          {
            name: "T-shirt",
            price: "2€"
          },
          {
            name: "Jacket",
            price: "5€"
          },
          {
            name: "Poster",
            price: "1€"
          },
          {
            name: "Hoodie",
            price: "8€"
          },
          {
            name: "Cap",
            price: "3€"
          },
          {
            name: "Beanie",
            price: "3€"
          },
          {
            name: "Tote Bag",
            price: "2€"
          },
          {
            name: "Sticker Pack",
            price: "1€"
          },
          {
            name: "Keychain",
            price: "1.5€"
          },
          {
            name: "Signed Poster",
            price: "10€"
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
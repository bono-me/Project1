const eventinfo = [
  {
    eventName: "Blue Note Evenings",
    mainImage: "pictures/stage6.png",
    program: {
      title: "Stage Schedule",
      acts: [
        {
          name: "Day 1",
        },
        {
          name: "Herbie Hancock",
          time: "21:30 - 23:00"
        },
        {
          name: "Esperanza Spalding",
          time: "20:00 - 21:30"
        },
        {
          name: "Robert Glasper",
          time: "18:30 - 20:00"
        },
        {
          name: "Kamasi Washington",
          time: "17:00 - 18:30"
        },

        {
          name: "Day 2",
        },
        {
          name: "Norah Jones",
          time: "21:30 - 23:00"
        },
        {
          name: "Gregory Porter",
          time: "20:00 - 21:30"
        },
        {
          name: "Snarky Puppy",
          time: "18:30 - 20:00"
        },
        {
          name: "Yussef Dayes",
          time: "17:00 - 18:30"
        },
      ]
    },

    sections: {
      map: {
        title: "Map & Navigation",
        image: "pictures/eventmap6.png",
        description: `The festival takes place at Parc Floral de Paris, located within the Bois de Vincennes.<br>
                      Gates open daily from 16:00.<br><br>
                      The venue is accessible via Metro Line 1 (Château de Vincennes) followed by a short bus or walk.<br><br>
                      The park offers wide pathways, seating areas, and shaded zones.<br>
                      Accessible restrooms and assistance points are available throughout the venue.`,
        items: [
        ]
      },

      tickets: {
        title: "Tickets & Services",
        totalCapacity: "Maximum venue capacity: 8,000 tickets",
        items: [
          {
            name: "Day Ticket",
            price: "45€"
          },
          {
            name: "Weekend Pass",
            price: "110€"
          },
          {
            name: "Premium Seating",
            price: "35€"
          }
        ]
      },

      rules: {
        title: "Safety & Rules",
        items: [
          { name: "Please remain seated during performances where indicated" },
          { name: "No professional recording equipment allowed" },
          { name: "Respect quiet zones during performances" }
        ]
      },

      food: {
        title: "Food Menu",
        items: [
          { name: "Cheese & Charcuterie Plate", price: "7€" },
          { name: "Quiche Lorraine", price: "5€" },
          { name: "Fresh Salad Bowl", price: "6€" }
        ]
      },

      drinks: {
        title: "Drinks",
        items: [
          { name: "Mineral Water", price: "2€" },
          { name: "Red Wine", price: "4€" },
          { name: "Espresso", price: "2.5€" }
        ]
      },

      merch: {
        title: "Merchandise",
        items: [
          { name: "Festival Poster", price: "8€" },
          { name: "Vinyl Tote Bag", price: "12€" }
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
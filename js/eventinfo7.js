const eventinfo = [
  {
    eventName: "Alpine Symphony",
    mainImage: "pictures/stage7.png",
    program: {
      title: "Grand Orchestra Program",
      acts: [
        {
          name: "Day 1",
        },
        {
          name: "Vienna Philharmonic Orchestra",
          time: "20:00 - 22:00"
        },
        {
          name: "Lang Lang",
          time: "18:30 - 19:45"
        },

        {
          name: "Day 2",
        },
        {
          name: "London Symphony Orchestra",
          time: "20:00 - 22:00"
        },
        {
          name: "Anne-Sophie Mutter",
          time: "18:30 - 19:45"
        },

        {
          name: "Day 3",
        },
        {
          name: "Royal Concertgebouw Orchestra",
          time: "20:00 - 22:00"
        },
        {
          name: "Yo-Yo Ma",
          time: "18:30 - 19:45"
        },
      ]
    },

    sections: {
      map: {
        title: "Map & Navigation",
        image: "pictures/eventmap7.png",
        description: `The festival is held at Schloss Schönbrunn Gardens in Vienna, Austria.<br>
                      Gates open from 17:00.<br><br>
                      The venue is accessible via U4 Schönbrunn station.<br>
                      Seating areas are arranged across the garden terraces.<br><br>
                      Wheelchair-accessible seating and restrooms are available.`,
        items: [
        ]
      },

      tickets: {
        title: "Tickets & Services",
        totalCapacity: "Maximum venue capacity: 6,500 tickets",
        items: [
          { name: "Evening Concert Ticket", price: "60€" },
          { name: "Three-Day Pass", price: "160€" },
          { name: "Reserved Seating", price: "40€" }
        ]
      },

      rules: {
        title: "Safety & Rules",
        items: [
          { name: "Please arrive early to avoid disruption" },
          { name: "No flash photography during performances" },
          { name: "Mobile phones must be silenced" }
        ]
      },

      food: {
        title: "Food Menu",
        items: [
          { name: "Pretzel", price: "3€" },
          { name: "Sausage Roll", price: "4€" },
          { name: "Apple Strudel", price: "4€" }
        ]
      },

      drinks: {
        title: "Drinks",
        items: [
          { name: "Water", price: "2€" },
          { name: "White Wine", price: "4€" },
          { name: "Sparkling Wine", price: "5€" }
        ]
      },

      merch: {
        title: "Merchandise",
        items: [
          { name: "Program Booklet", price: "6€" },
          { name: "Festival Scarf", price: "15€" }
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
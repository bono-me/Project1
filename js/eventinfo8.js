const eventinfo = [
  {
    eventName: "Rhythms of the Coast",
    mainImage: "pictures/stage8.png",
    program: {
      title: "Stage Schedule",
      acts: [
        {
          name: "Day 1",
        },
        {
          name: "Burna Boy",
          time: "22:00 - 23:30"
        },
        {
          name: "Yemi Alade",
          time: "20:30 - 22:00"
        },
        {
          name: "Sauti Sol",
          time: "19:00 - 20:30"
        },

        {
          name: "Day 2",
        },
        {
          name: "Stonebwoy",
          time: "22:00 - 23:30"
        },
        {
          name: "Wizkid",
          time: "20:30 - 22:00"
        },
        {
          name: "Amaarae",
          time: "19:00 - 20:30"
        },
      ]
    },

    sections: {
      map: {
        title: "Map & Navigation",
        image: "pictures/eventmap8.png",
        description: `The festival takes place at Labadi Beach, Accra, Ghana.<br>
                      Gates open daily from 16:00.<br><br>
                      The beach venue offers open sandy areas and seaside walkways.<br>
                      Shuttle services operate from central Accra.<br><br>
                      Medical tents, hydration stations, and shaded areas are available throughout the grounds.`,
        items: [
        ]
      },

      tickets: {
        title: "Tickets & Services",
        totalCapacity: "Maximum venue capacity: 12,000 tickets",
        items: [
          { name: "Day Ticket", price: "40$" },
          { name: "Weekend Pass", price: "95$" },
          { name: "Beachfront Upgrade", price: "60$" }
        ]
      },

      rules: {
        title: "Safety & Rules",
        items: [
          { name: "Respect local customs and traditions" },
          { name: "No littering on the beach area" },
          { name: "Follow security instructions at all times" }
        ]
      },

      food: {
        title: "Food Menu",
        items: [
          { name: "Jollof Rice", price: "5$" },
          { name: "Grilled Plantain", price: "3$" },
          { name: "Fried Fish Plate", price: "6$" }
        ]
      },

      drinks: {
        title: "Drinks",
        items: [
          { name: "Water", price: "2$" },
          { name: "Fresh Coconut", price: "3$" },
          { name: "Fruit Juice", price: "3$" }
        ]
      },

      merch: {
        title: "Merchandise",
        items: [
          { name: "Festival T-shirt", price: "20$" },
          { name: "Handmade Bracelet", price: "8$" }
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
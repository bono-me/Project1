const eventinfo = [
  {
    program: {
      title: "Stage Info",
      acts: [
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
        }
      ]
    },

    sections: {
      map: {
        title: "Map & Navigation",
        image: "pictures/eventmap.png",
        description: "The event will be held at the Devonshire Square, London. Entry will be open from 16:00.",
        items: [
        ]
      },

      tickets: {
        title: "Tickets & Services",
        items: [
          {
            name: "Day Pass",
            price: "20€"
          },
          {
            name: "Weekend Pass",
            price: "50€"
          }
        ]
      },

      rules: {
        title: "Safety & Rules",
        items: [
          {
            name: "No glass bottles",
          },
          {
            name: "Advisable to bring personal hearing protection",
          }
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
            name: "Tortilla",
            price: "2€"
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
        program.acts.forEach(act => {
            html += `<p><b>${act.name}</b> ${act.time}</p>`;
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
            html += ` ${item.price}`;
        }

        html += `</p>`;
    });

    center.innerHTML = html;
}
});
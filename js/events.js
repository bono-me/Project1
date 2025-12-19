// =====================
// Event data (JSON)
// =====================
const events = [
  {
    title: "Echo Horizon",
    image: "pictures/stage.png",
    link: "event.html",
    date: "2025-12-25"
  },
  {
    title: "Neon Pulse Festival",
    image: "pictures/stage2.png",
    link: "event2.html",
    date: "2025-12-26"
  },
  {
    title: "Nocturne Eternal",
    image: "pictures/stage3.png",
    link: "event3.html",
    date: "2025-12-27"
  },
  {
    title: "GCG Fest",
    image: "pictures/stage4.png",
    link: "event4.html",
    date: "2025-12-28"
  },
  {
    title: "Midnight X",
    image: "pictures/stage5.png",
    link: "event5.html",
    date: "2025-12-29"
  },
  {
    title: "Blue Note Evenings",
    image: "pictures/stage6.png",
    link: "event6.html",
    date: "2025-12-30"
  },
  {
    title: "Alpine Symphony",
    image: "pictures/stage7.png",
    link: "event7.html",
    date: "2025-12-31"
  },
  {
    title: "Rhythms of the Coast",
    image: "pictures/stage8.png",
    link: "event8.html",
    date: "2026-1-1"
  }
];

// =====================
// Render events dynamically
// =====================
const container = document.getElementById('events-container');

// Sort events by date (chronological order)
events.sort((a, b) => new Date(a.date) - new Date(b.date));

// Loop through events and render
events.forEach(event => {
  const eventLink = document.createElement('a');
  eventLink.href = event.link;
  eventLink.className = 'center-item';

  const eventImg = document.createElement('img');
  eventImg.src = event.image;
  eventImg.alt = event.title;

  // Flex container for title and date
  const titleContainer = document.createElement('div');
  titleContainer.className = 'title-container';

  const eventTitle = document.createElement('p');
  eventTitle.className = 'event-title';
  eventTitle.textContent = event.title;

  const eventDate = document.createElement('span');
  eventDate.className = 'event-date';

  // Format date nicely (e.g., "Dec 25, 2025")
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  eventDate.textContent = new Date(event.date).toLocaleDateString(undefined, options);

  titleContainer.appendChild(eventTitle);
  titleContainer.appendChild(eventDate);

  eventLink.appendChild(eventImg);
  eventLink.appendChild(titleContainer);

  container.appendChild(eventLink);
});
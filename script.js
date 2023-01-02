
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

}
const navLink = document.querySelectorAll(".nav-link");


function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
let links = document.querySelectorAll("nav a");

// Add an event listener to each link
links.forEach(link => {
  link.addEventListener("click", e => {
    // Prevent the default link behavior (following the link)
    e.preventDefault();
    closeMenu();
    // Get the URL of the link
    let url = link.getAttribute("href");

    // Update the header of the page

    // Use the fetch function to retrieve the content of the page

    fetch(url)
      .then(response => response.text())
      .then(html => {
        // Update the content of the page
        let temp = document.createElement("div");
        temp.innerHTML = html;
        // Select the element you want to remove
        // Check if the element exists
        const hehe = temp.querySelector("#occupation");
        const he = temp.querySelector("#para");
        
        
        if(hehe) {
          const messages = [
      "Frontend developer",
      "Student",
      "Space enthusiast",
      "Rizzologist"
    ];

    // Set the initial index to 0
    let index = 0;

    // Set the interval to 1000 milliseconds (1 second)
    const interval = 2000;

    // Use setInterval to execute the updateText function every 1 second
    setInterval(updateText, interval);

    function updateText() {
      const container = document.getElementById("occupation");

      // Update the text of the container
      container.innerHTML = messages[index];

      // Increment the index
      index++;

      // If the index is greater than the length of the messages array, reset it to 0
      if (index >= messages.length) {
        index = 0;
      }
    }
    }
        
        // Update the content of the page with the modified HTML content
        document.querySelector("#content").innerHTML = temp.innerHTML;
        // Update the URL in the address bar
        
      });
  });
});
      const projectCardsContainer = document.querySelector('.project-cards');
const projectCardTemplate = document.querySelector('#project-card-template');
const projects = [
  {
    
    title: 'Geet Music',
    description: 'An amazing app cum webplayer to play unlimited songs free of cost without any ads and need to login.',
    link: 'https://geet.gq'
  },
  {
    
    title: 'Weather-Web',
    description: 'An simple Webpage to get weather info of any point on the planet.',
    link: 'https://weather-web.tk'
  },
  {
    title: 'Musicalsmth',
    description: 'A simple yet beautiful personal collection of music.',
    link: 'https://musicalsmth.ga'
  },//gg
  {
    title: 'Locker-Room',
    description: 'A private group chat room',
    link: 'https://locker-room.jatinsharma24.repl.co'
  },
  {
    title: 'IndianGPT',
    description: 'An AI Chatbot that will answer all of your questions.',
    link: 'https://indiangpt.jatinsharma24.repl.co'
  },
  {
    title: 'Ai-images',
    description: 'A website to generate images with the help of ai',
    link: 'https://aiimages.tk'
  },
  {
    title: 'TimeCapsule',
    description: 'A place where you can store you memories and revisite them whenever you wish',
    link: 'https://timecapsule.jatinsharma24.repl.co'
  },
  {
    title: 'Diwali-Diya',
    description: 'A Replit Diwali Jam winner project.',
    link: 'https://diwali.ml'
  },
  {
    title: 'Yeti',
    description: 'A Replit Halloween Jam winner.',
    link: 'https://yeti.jatinsharma24.repl.co'
  },


  // Add more projects here
];
function projectDetails() {
  
for (const project of projects) {
  // Clone the project card template
  const projectCard = projectCardTemplate.content.cloneNode(true);

  // Set the project image
/*  projectCard.querySelector('.project-image img').src = project.image;*/

  // Set the project title
  projectCard.querySelector('.project-title').textContent = project.title;

  // Set the project description
  projectCard.querySelector('.project-description').textContent = project.description;

  // Set the project link
  projectCard.querySelector('.project-link').href = project.link;
  projectCardsContainer.appendChild(projectCard);
      }
}

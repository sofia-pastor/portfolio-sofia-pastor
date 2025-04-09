import bettingImg from "../assets/betting-simulator.png";
import dictionaryImg from "../assets/dictionary-project.png";
import surfboardImg from "../assets/surfboard-selector.png";
import weatherImg from "../assets/weather-react-app.png";
import edinburghImg from "../assets/edinburgh-website.png";

export default function ProjectsData() {
  const projectsData = [
    {
      id: 1,
      title: "Betting Simulator",
      image: bettingImg,
      alt: "Betting Simulator Image",
      description: [
        "A dynamic sports betting simulator where users can place virtual bets on real UEFA matches using live odds from the Odds API. The app includes a fallback to local data if the API request limit is reached, ensuring uninterrupted usability.",
        "Users can simulate bets, manage a virtual wallet with a €50 top-up limit, and track both active and historical bets. Wallet actions include predefined values and custom inputs.",
        "With real-time feedback through success, error, and limit messages, this project ensures a smooth and intuitive user experience, with a custom favicon for branding consistency.",
      ],
      technologies:
        "React, Axios, Odds API, Bootstrap, HTML5, CSS3, User-Centered Design",
      launchUrl: "https://betting-simulator.netlify.app/",
      githubUrl: "https://github.com/sofia-pastor/betting-simulator",
      anchorId: "betting-simulator",
    },
    {
      id: 2,
      title: "Dictionary",
      image: dictionaryImg,
      alt: "Dictionary Image",
      description: [
        "A comprehensive dictionary app designed with an intuitive user interface, allowing users to search for word definitions, synonyms and phonetic spellings.",
        "It also displays examples of how the word is used in sentences, helping users better understand its context.",
        "The app enhances the user experience with relevant images fetched from the Unsplash API, providing both functional and visual elements for easier learning.",
      ],
      technologies:
        "React, Axios, SheCodes Dictionary API, Unsplash API, Bootstrap, HTML5, CSS3, User-Centered Design",
      launchUrl: "https://dictionary-app-sp.netlify.app",
      githubUrl: "https://github.com/sofia-pastor/dictionary-project",
      anchorId: "dictionary-app",
    },
    {
      id: 3,
      title: "AI Surfboard Selector",
      image: surfboardImg,
      alt: "Surfboard Selector Image",
      description: [
        "A fun, interactive app with an easy-to-navigate interface, guiding users to find the best surfboard based on their personal preferences.",
        "The dynamic form and the AI-powered recommendation process are integrated into a simple layout, ensuring a smooth and enjoyable experience.",
      ],
      technologies:
        "JavaScript, AI API, HTML5, CSS3, Custom Form Logic, User-Centered Design",
      launchUrl: "https://surfboard-selector.netlify.app",
      githubUrl: "https://github.com/sofia-pastor/surfboard-selector",
    },
    {
      id: 4,
      title: "Weather App",
      image: weatherImg,
      alt: "Weather App Image",
      description: [
        "A React app, with a polished and dynamic interface, that provides real-time weather data for any searched city (with a default city initially).",
        "It displays the current weather, a 6-day forecast, with a temperature conversion feature, a city-specific background image, and animated weather icons for an engaging and dynamic user experience.",
      ],
      technologies:
        "React, Axios, Unsplash API, OpenWeather API, SheCodes Weather API, npm (animated weather icons), Bootstrap, HTML5, CSS3, User-Centered Design",
      launchUrl: "https://weather-react-app-sp.netlify.app",
      githubUrl: "https://github.com/sofia-pastor/weather-react-app",
      anchorId: "weather-app",
    },
    {
      id: 5,
      title: "Edinburgh Travel Website",
      image: edinburghImg,
      alt: "Edinburgh Website Image",
      description: [
        "A responsive travel website designed with a clean and user-friendly layout, showcasing the beauty of Edinburgh.",
        "The site's interactive elements, like embedded maps and its easy navigation, make it a pleasure for users to explore the cultural and historical highlights of the city.",
      ],
      technologies:
        "HTML5, CSS3, JavaScript, Responsive Design, Custom Grid Layouts, User-Centered Design",
      launchUrl: "https://edimburgh-travel.netlify.app",
      githubUrl: "https://github.com/sofia-pastor/travel-project",
    },
  ];

  return projectsData;
}

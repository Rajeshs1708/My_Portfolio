import urlShortener from "../Assets/urlShortener.png";
import loginSystem from "../Assets/loginSystem.png";
import crm from "../Assets/crm.png";
import chatApp from "../Assets/chatapp.png";
import toDoList from "../Assets/toDOList.png";
import amazon from "../Assets/amazon.png";
import youtube from "../Assets/youtube.png";
import facebook from "../Assets/facebook.png";
import blogApp from "../Assets/blogApp.png";
import thirukkural from "../Assets/thirukkural.png";
import iceAndFire from "../Assets/ice&fire.png";
import covid19 from "../Assets/covid19.png";
import htmlForm from "../Assets/htmlForm.png";
import infiniteScroll from "../Assets/infiniteScroll.png";
import calculator from "../Assets/calculator.png";
import oAuth from "../Assets/oAuth.png";

const ProjectList = [
  {
    name: "Blog_App(MERN)",
    alt: "Blog_App",
    image: blogApp,
    skills: "React, Material UI, Node JS, Express JS, MongoDB",
    gitLink1: "https://github.com/Rajeshs1708/Blog_app_Frontend",
    gitLink2: "https://github.com/Rajeshs1708/Blog_app_Backend",
    netlifyLink: "https://blog-app-001.netlify.app/",
    description:
      "Blog MERN is a web application that makes it easy to create and manage content-rich blogs. It is built with the MERN (MongoDB, Express, React, Node.js) stack and is designed to be fast, secure, and user-friendly. With its simple yet modern user interface, Blog MERN provides users with an efficient way to create and manage their blogs.This blog app is a type of website where the content is presented in reverse chronological order (newer content appear first).",
    category: "MERN",
  },
  {
    name: "CRM(MERN)",
    alt: "Customer Relationship Management",
    image: crm,
    skills: "React, Bootstrap, Node JS, Express JS, MongoDB, Stripe(Payment)",
    gitLink1: "https://github.com/Rajeshs1708/CPM-webcode-frontend",
    gitLink2: "https://github.com/Rajeshs1708/CPM-webcode-backend",
    netlifyLink: "https://cpm-app-489603.netlify.app/",
    description:
      "CRM MERN application is a powerful customer relationship management (CRM) solution built with MongoDB, Express, React, and Node.js. This full-stack application lets you store information about customers to help you track the status of every customer relationship. The application will be able to store and edit customer details, as well as keep notes about them",
    category: "MERN",
  },
  {
    name: "Chat App(MERN)",
    alt: "Chat App",
    image: chatApp,
    skills: "React, Redux, Bootstrap, Socket.io, Node JS, Express JS, MongoDB",
    gitLink1: "https://github.com/Rajeshs1708/chatapp-frontend",
    gitLink2: "https://github.com/Rajeshs1708/chatapp-backend",
    netlifyLink: "https://chatapp-03-23.netlify.app/",
    description:
      "A Chat App(MERN) is an application that allows users to communicate with each other in real-time via chat messages This application is built using the MongoDB, Express.js, React.js, and Node.js (MERN).Users must sign up and log in to use the app. Users can send and receive messages in real-time, without having to refresh the page. Users can send private messages to other users and can see the online status of other users and Users receive notifications when they receive new messages.",
    category: "MERN",
  },
  {
    name: "Find Articles",
    alt: "OAuth",
    image: oAuth,
    skills: "React,Bootstrap, Node JS, Express JS, MongoDB",
    gitLink1:
      "https://github.com/Rajeshs1708/Login-logout-with-multiple-OAuth-frontend-",
    gitLink2:
      "https://github.com/Rajeshs1708/Login-logout-with-multiple-OAuth-backend",
    netlifyLink: "https://login-with-oauth.netlify.app/",
    description:
      "Find Articles app is built with the MERN (MongoDB, Express, React, Node.js) stack and is designed to be fast, secure, and user-friendly.This Find Articles app is a type of website where the content is read only and we can add to favourite. ",

    category: "MERN",
  },
  {
    name: "Login System(MERN)",
    alt: "Login System",
    image: loginSystem,
    skills: "React, Node JS, Express JS, MongoDB ",
    gitLink1: "https://github.com/Rajeshs1708/Password_Reset_Flow-frontend",
    gitLink2: "https://github.com/Rajeshs1708/Password_Reset_Flow-backend",
    netlifyLink: "https://password-reset-flow-app.netlify.app/",
    description:
      "Login MERN application is a full-stack web application that provides users with an easy way to create and manage their account and log in to a secure profile. It is built with the MERN stack (MongoDB, Express, React, Node.js) and provides users with an intuitive, secure, and user-friendly interface.It also supports secure authentication.",

    category: "MERN",
  },
  {
    name: "URL Shortener(MERN)",
    alt: "URL Shortener",
    image: urlShortener,
    skills: "React, Bootstrap, Node JS, Express JS, MongoDB ",
    gitLink1: "https://github.com/Rajeshs1708/URL-Shortener-app-frontend",
    gitLink2: "https://github.com/Rajeshs1708/URL-Shortener-app-backend",
    netlifyLink: "https://url-shortener-app-finaltask.netlify.app/",
    description:
      "This URL shortener application is a web application built with the MERN (MongoDB, Express, React, and Node.js) stack that is designed to shorten lengthy URLs into shorter, more manageable ones. It allows users to quickly and easily create, share, and track shortened URLs. The application can also track the number of clicks each URL has received. The idea is to minimize the web page address into something that's easier to remember and track.",

    category: "MERN",
  },
  {
    name: "TO-DO-LIST",
    alt: "To-Do List",
    image: toDoList,
    skills: "JavaScript, HTML, CSS",
    gitLink1: "https://github.com/Rajeshs1708/to-do-list-using-JavaScript",
    netlifyLink: "https://to-do-list-using-js-01.netlify.app/",
    description:
      "Our JavaScript To-Do List App with Local Storage is a simple and efficient way to keep track of your tasks and ensure that they persist even when you refresh the page. This user-friendly web application empowers you to manage your to-do list effortlessly, with the ability to mark tasks as completed and delete them as needed.",
    category: "Javascript",
  },
  {
    name: "Amazon Clone (UI)",
    alt: "Amazon",
    image: amazon,
    skills: "React, Material UI",
    gitLink1: "https://github.com/Rajeshs1708/amazon-clone",
    gitLink2: "https://github.com/Rajeshs1708/amazon-clone",
    netlifyLink: "https://amazon-clone-123.netlify.app/",
    description:
      "Amazon Clone UI is an application that replicates the look and feel of the popular Amazon website. It is designed to provide users with a seamless and easy shopping experience. The app features a modern and intuitive user interface, with easy-to-navigate menus and a wide range of product categories.The app also provides users with the ability to save their favorite items to a wishlist for later",

    category: "React",
  },
  {
    name: "YouTube Clone (UI)",
    alt: "YouTube",
    image: youtube,
    skills: "React, Material UI",
    gitLink1: "https://github.com/Rajeshs1708/YouTube-Clone",
    gitLink2: "https://github.com/Rajeshs1708/YouTube-Clone",
    netlifyLink: "https://youtube-clone-007.netlify.app/",
    description:
      "It provides a familiar user interface that allows users to easily navigate and manage their own YouTube-like content.",

    category: "React",
  },
  {
    name: "Facebook Clone (UI)",
    alt: "Facebook",
    image: facebook,
    skills: "React, Material UI",
    gitLink1: "https://github.com/Rajeshs1708/facebook-clone",
    gitLink2: "https://github.com/Rajeshs1708/facebook-clone",
    netlifyLink: "https://facebook-clone-0001.netlify.app/",
    description:
      "Facebook clone UI only application is a clone of the popular social media platform, Facebook. It offers users a clone of the user interface of the original platform, with a few minor changes",

    category: "React",
  },
  {
    name: "Thirukkural (API call)",
    alt: "Thirukkural",
    image: thirukkural,
    skills: "HTML, CSS, JavaScript, Bootstrap",
    gitLink1: "https://github.com/Rajeshs1708/Day-20th-Task-13-Thirukkural-API",
    gitLink2: "https://github.com/Rajeshs1708/Day-20th-Task-13-Thirukkural-API",
    netlifyLink: "https://clever-dasik-75cb83.netlify.app/",
    description:
      "This API enables users to fetch data from the Thirukkural, an ancient Tamil collection of moral proverbs. It provides access to all 1330 couplets from the Thirukkural and their English translations, as well as other detailed information such as the chapters, adhikarams, and authors. This API can be used to develop applications for learning, studying, and teaching the Thirukkural",
    category: "Javascript",
  },
  {
    name: "Ice and Fire (API call)",
    alt: "Ice and Fire",
    image: iceAndFire,
    skills: "HTML, CSS, JavaScript, Bootstrap",
    gitLink1:
      "https://github.com/Rajeshs1708/Day-20th-Task-13-Ice-and-Fire-API",
    gitLink2:
      "https://github.com/Rajeshs1708/Day-20th-Task-13-Ice-and-Fire-API",
    netlifyLink: "https://relaxed-kangaroo-35a38d.netlify.app/",
    description:
      "Fetch data from the Ice and Fire API is a process of retrieving data from the Ice and Fire API, an open-source database of information related to the fantasy world of George R.R. Martin's A Song of Ice and Fire series. The API provides access to a variety of data, including book and character details, location information, and more.",
    category: "Javascript",
  },
  {
    name: "Covid-19 (API call)",
    alt: "Covid-19",
    image: covid19,
    skills: "HTML, CSS, JavaScript, Bootstrap",
    gitLink1: " https://github.com/Rajeshs1708/Day-20th-Task-Covid-19-API",
    gitLink2: " https://github.com/Rajeshs1708/Day-20th-Task-Covid-19-API",
    netlifyLink: "https://soft-selkie-b8e4fa.netlify.app/",
    description:
      "Fetching data from a third-party COVID-19 API allows users to access up-to-date information about the current coronavirus pandemic. This data can be used to create detailed reports, track trends, and provide insights into the spread of the virus. It includes statistics such as the total number of confirmed cases, deaths, and recoveries, as well as detailed breakdowns by country, region, or other demographic categories. The data can also be used to generate interactive maps and charts, making it easier to visualize the impact of the virus.",
    category: "Javascript",
  },
  {
    name: "Infinite Scroll",
    alt: "Images",
    image: infiniteScroll,
    skills: "HTML, CSS, JavaScript, Bootstrap",
    gitLink1: "https://github.com/Rajeshs1708/Infinite_Scroll",
    gitLink2: "https://github.com/Rajeshs1708/Infinite_Scroll",
    netlifyLink: "https://infinite-scroll-001.netlify.app/",
    description:
      "Unsplash API's infinite scrolling feature allows developers to quickly and easily access large volumes of images at once. It enables developers to retrieve an unlimited number of images from the Unsplash library, without having to manually make multiple requests. The infinite scrolling feature is incredibly efficient and effective, as it enables developers to quickly and easily access high-quality images in large quantities.",
    category: "Javascript",
  },
  {
    name: "HTML Form",
    alt: "Form",
    image: htmlForm,
    skills: "HTML, CSS, JavaScript, Bootstrap",
    gitLink1: "https://github.com/Rajeshs1708/Day-16-Task-11-HTML-Form-Table",
    netlifyLink: " https://rainbow-medovik-b02910.netlify.app/",
    description:
      "CRUD (Create, Read, Update, Delete) is a set of operations that is used to manage data in a database. It is commonly used when developing web applications.HTML is used to create the structure of the web page, while CSS is used to style the page. JavaScript can be used to create forms and to interact with the database.",
    category: "Javascript",
  },
  {
    name: "Calculator",
    alt: "Calculator",
    image: calculator,
    skills: "HTML, CSS, JavaScript, Bootstrap",
    gitLink1: "https://github.com/Rajeshs1708/Day-16-Task-11-Calculator",
    netlifyLink: " https://papaya-horse-8c84c5.netlify.app/",
    description:
      "This application can be used to perform mathematical operations such as addition, subtraction, multiplication, and division. HTML is used to create the structure of the calculator, while CSS is used to style it. JavaScript can be used to capture user input, process the calculations, and display the results on the page. ",
    category: "Javascript",
  },
];

export default ProjectList;

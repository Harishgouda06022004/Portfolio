/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "HarishGouda G Patil",
  title: "Hi all, I'm Harish",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1m6ytuXV56031-osPmv-7vNuDHl9fNePz/preview", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Harishgouda06022004/",
  linkedin: "https://www.linkedin.com/in/harish-patil-283819258/",
  gmail: "harishgouda213@gmail.com",
  medium: "medium.com/@harishgouda216",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Visvesvaraya Technological University",
      logo: require("./assets/images/vtu.jpeg"),
      subHeader: "Bachelor of Science in Computer Science CGPA:9",
      duration: "December 2022 - December 2026",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Vidyaniketan P.U. Science College",
      logo: require("./assets/images/vidyniketan.jpeg"),
      subHeader: "Science Percentage-84%",
      duration: "October 2020 - October 2022",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "Shanti Niketan English Medium School Hubli",
      logo: require("./assets/images/school.jpeg"),
      subHeader: "School 10th Percentage 94%",
      duration: "October 2008 - October 2020",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Intern",
      company: "Sathvik Softech",
      companylogo: require("./assets/images/sathvik.jpeg"),
      date: "October 2024 – January 2025",
      desc: "Assisted in developing internal tools and automated routine backend tasks using Python scripts. Gained hands-on experience with real-world software workflows.",
      descBullets: [
        "Worked on automating Excel-based reports using Python",
        "Supported minor bug fixes in legacy software modules"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Samarth Meditech",
      companylogo: require("./assets/images/smarthmeditech.png"),
      date: "February 2025 – May 2025",
      desc: "Built and maintained responsive healthcare dashboards using React.js. Collaborated with designers to improve UX for medical staff and patients.",
      descBullets: [
        "Developed dynamic patient data views and appointment modules",
        "Integrated APIs for real-time diagnostic updates"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Arilikat",
      companylogo: require("./assets/images/arlikat11 (2).png"),
      date: "Jun 2025 – present",
      desc: "Currently building scalable React components for an AI-powered productivity platform. Involved in code reviews, testing, and Agile sprint planning.",
      descBullets: [
        "Contributing to reusable UI library with Tailwind CSS",
        "Integrated ChatGPT-based assistant into core UI flow"
      ]
    }
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
  contributions: [
    {
      title: "Care OHC Network",
      description: "Contributed to the front-end of the Care OHC Network platform.",
      prLink: "https://github.com/ohcnetwork/care_fe/pull/11869"
    }
  ]
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/xirr.png"),
      projectName: "XIRR",
      projectDesc: "A platform to streamline startup investment tracking and financial analytics for founders",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://thexirr.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/autocrud.png"),
      projectName: "Auto-Crud",
      projectDesc: "A tool that auto-generates full CRUD operations for Laravel projects with minimal setup.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://app.autocrud.com/space/12CEBefqGY1rKIHJ/dashboard"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "LeetCode",
      subtitle:
        "First 50 days badage",
      image: require("./assets/images/leetcode.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://leetcode.com/medal/?showImg=0&id=6276283&isLevel=false"
        // },
        {
          name: "Award Letter",
          url: "https://leetcode.com/medal/?showImg=0&id=6276283&isLevel=false"
        },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 8867355035",
  email_address: "Harishgouda213@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  // podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

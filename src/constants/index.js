import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    bootstrap,
    jquery,
    mysql,
    php,
    reactjs,
    codeigniter,
    wordpress,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    linux,
    meta,
    starbucks,
    kansai_logo,
    logics_capital,
    jfi1,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Wordpress Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "bootstrap",
      icon: bootstrap,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "jquery",
      icon: jquery,
    },
    {
      name: "mysql",
      icon: mysql,
    },
    
    {
      name: "php",
      icon: php,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "codeigniter",
      icon: codeigniter,
    },
 
    {
      name: "wordpress",
      icon: wordpress,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    {
      name: "linux",
      icon: linux,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // }, 
    // {
    //   name: "docker",
    //   icon: docker,  
    // },
  ];
  
  const experiences = [
    {
      title: "React.js | CodeIgniter | php Developer",
      company_name: "Kansaigroup",
      icon: kansai_logo,
      iconBg: "#FFFFFF",
      date: "May 2023 - Sep 2023",
      points: [
        // "Developing and maintaining web applications using React.js and other related technologies.",
        // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        // "Implementing responsive design and ensuring cross-browser compatibility.",
        // "Participating in code reviews and providing constructive feedback to other developers.",

        "Built and maintained web applications using CodeIgniter, React.js, and related technologies, with a focus on scalability and performance.",

        " Worked with cross-functional teams to develop and improve features, enhancing user experience and functionality",

        "Participated in code reviews to ensure high code quality, offering constructive feedback to colleagues.",

        "Assisted in resolving application issues, ensuring smooth and reliable operations.",

        "Implemented responsive design and ensured cross-browser compatibility for consistent user experiences across devices and platforms.",
      ],
    },
    {
      title: "React.js | Wordpress | php Developer",
      company_name: "Logics Capital",
      icon: logics_capital,
      iconBg: "#E6DEDD",
      date: "Aug 2023 - Jan 2023",
      points: [
        " Developed and maintained WordPress-based websites, leveraging PHP for custom functionality and theme customization.",

        "Created dynamic user interfaces and components using React.js, ensuring responsiveness and seamless integration with backend services.",

        " Built and customized WordPress plugins and themes to meet specific client requirements and enhance website functionality",
        
        "Collaborated with designers, content creators, and marketing teams to create cohesive and engaging websites.",
        
        "Conducted thorough testing of web applications to ensure functionality, responsiveness, and cross-browser compatibility.",

        "Regularly updated websites and applications to incorporate new features, security patches, and performance enhancements.",

      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "Full stack Developer",
      company_name: "JFI Business Services",
      icon: jfi1,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Hamza proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Hamza does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Hamza optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
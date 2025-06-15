const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 10, suffix: "+", label: "Personal Projects" },
    { value: 20, suffix: "+", label: "GitHub Repositories" },
    { value: 4, suffix: "", label: "Coding Competitions/ Hackathons Won" },
    { value: 2, suffix: "", label: "Internships" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "/images/problem-solving.webp",
        title: "Problem Solving",
        desc: "Strong analytical thinking with a focus on writing efficient and optimized code.",
    },
    {
        imgPath: "/images/learning.jpg",
        title: "Fast Learner",
        desc: "Quickly picks up new technologies, tools, and frameworks through hands-on practice.",
    },
    {
        imgPath: "/images/collaboration.jpg",
        title: "Team Collaboration",
        desc: "Experience working in teams during hackathons, college projects and internship projects using Git & GitHub.",
    },
];


const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review:
            "Santpal played a key role as a full stack developer in our Peer Evaluation System project. His contributions to both backend logic and frontend design were instrumental in delivering a functional and user-friendly system.",
        imgPath: "/images/peer-eval.png",
        logoPath: "/images/iitrpr-logo.png",
        title: "Full Stack Developer – Peer Evaluation System",
        date: "May 2025 – July 2025",
        responsibilities: [
            "Developed REST APIs using Node.js, Express, and MongoDB for role-based access control.",
            "Built responsive React components with Tailwind CSS for four different user dashboards.",
            "Handled image uploads, flagging logic, and evaluation flows for thousands of student submissions.",
        ],
    },
    {
        review:
            "At Dimensional Academy, Santpal designed and developed an AI-based furcation detection model, showing remarkable initiative in applying machine learning to real-world dental imaging challenges.",
        imgPath: "/images/ai-project.png",
        logoPath: "/images/dimensional-logo.png",
        title: "AI Intern – Furcation Detection System",
        date: "January 2025 – April 2025",
        responsibilities: [
            "Preprocessed dental x-ray images and annotated datasets for model training.",
            "Trained object detection models (YOLOv8) to detect furcations with high precision.",
            "Built a simple web demo to visualize predictions and assist dental professionals.",
        ],
    },
    {
        review:
            "Santpal consistently demonstrated curiosity and a deep commitment to learning during his time at the Next Tech Lab. His work in quantum computing research and simulations stood out.",
        imgPath: "/images/quantum.png",
        logoPath: "/images/nexttech-logo.png",
        title: "Quantum Computing Associate – Next Tech Lab",
        date: "June 2024 – April 2025",
        responsibilities: [
            "Explored quantum computing principles using Qiskit and IBM Quantum simulators.",
            "Collaborated with peers to create quantum algorithm demos and basic research notes.",
            "Presented findings internally and contributed to lab documentation and tutorials.",
        ],
    },
];


const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/iitrpr-logo.png",
    },
    {
        name: "logo2",
        imgPath: "/images/dimensional-logo.png",
    },
    {
        name: "logo3",
        imgPath: "/images/nexttech-logo.png",
    },
];

const testimonials = [
    {
        name: "Esther Howard",
        mentions: "@estherhoward",
        review:
            "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
        imgPath: "/images/client1.png",
    },
    {
        name: "Wade Warren",
        mentions: "@wadewarren",
        review:
            "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
        imgPath: "/images/client3.png",
    },
    {
        name: "Guy Hawkins",
        mentions: "@guyhawkins",
        review:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        imgPath: "/images/client2.png",
    },
    {
        name: "Marvin McKinney",
        mentions: "@marvinmckinney",
        review:
            "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Floyd Miles",
        mentions: "@floydmiles",
        review:
            "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: "/images/client4.png",
    },
    {
        name: "Albert Flores",
        mentions: "@albertflores",
        review:
            "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
        imgPath: "/images/client6.png",
    },
];

const socialImgs = [
    {
        name: "insta",
        url: "https://www.instagram.com/",
        imgPath: "/images/insta.png",
    },
    {
        name: "fb",
        url: "https://www.facebook.com/",
        imgPath: "/images/fb.png",
    },
    {
        name: "x",
        url: "https://www.x.com/",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/",
        imgPath: "/images/linkedin.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};
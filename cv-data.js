const cvData = {
    personal: {
        firstName: "Julian",
        lastName: "Gonzalez Fernandez",
        title: "Développeur Fullstack (Python · Full Stack)",
        seeking: "Disponible juillet 2026 — Alternance BAC+3 ou Stage",
        bio: "Après 10 ans d'expérience dans le commerce international, transition vers le développement web fullstack au sein d'Holberton School. Maîtrise des flux agiles et livrables en anglais. Rigueur et expertise technique permettant une intégration immédiate dans des équipes multiculturelles sur des projets complexes.",
        location: "Rennes",
        phone: "+33(0)6 95 17 06 76",
        phoneHref: "tel:+33695170676",
        email: "juliangf94@hotmail.com",
        github: "https://github.com/juliangf94",
        githubLabel: "github.com/juliangf94",
        linkedin: "https://linkedin.com/in/julian-gonzalez-fernandez",
        linkedinLabel: "linkedin/julian-gonzalez-fernandez",
        portfolio: "https://julian-myportfolio.netlify.app/",
        photo: "images/yo.png",
    },

    skills: {
        "Front-end": [
            { name: "HTML5",      icon: "images/html5.svg",                    invert: false },
            { name: "CSS3",       icon: "images/css.png",                      invert: false },
            { name: "JavaScript", icon: "images/js.png",                       invert: false },
            { name: "Bootstrap",  icon: "images/bootstrap.svg",                invert: false },
            { name: "Sass",       icon: "images/sass.svg",                     invert: false },
            { name: "React",      icon: "images/react.svg",                    invert: false },
            { name: "Vue.js",     icon: "images/vuejs.png",                    invert: false },
        ],
        "Back-end": [
            { name: "Python",  icon: "images/python.png",                      invert: false },
            { name: "Flask",   icon: "images/flask2.svg",                      invert: true  },
            { name: "Node.js", icon: "images/nodejs.png",                      invert: false },
            { name: "PHP",     icon: "images/php.svg",                         invert: false },
            { name: "C",       icon: "images/C_Programming_Language.svg.png",  invert: false },
        ],
        "Bases de données": [
            { name: "MySQL",  icon: "images/mysql.svg",  invert: true  },
            { name: "SQLite", icon: "images/Sqlite.png", invert: false },
            { name: "JSON",   icon: "images/json.svg",   invert: true  },
        ],
        "Outils": [
            { name: "Git",        icon: "images/git.svg",        invert: false },
            { name: "GitHub",     icon: "images/github.svg",     invert: true  },
            { name: "Docker",     icon: "images/docker.svg",     invert: false },
            { name: "Bash/Shell", icon: "images/bash.png",       invert: false },
            { name: "REST API",   icon: "images/restapi.svg",    invert: true  },
            { name: "Sanity",     icon: "images/sanity.svg",     invert: true  },
        ],
    },

    softSkills: [
        { title: "Rigueur analytique", desc: "Appliquée à la conception d'algorithmes complexes et au débogage (printf, shell)." },
        { title: "Gestion de projet",  desc: "Maîtrise des flux Agiles et collaboration via Git/GitHub." },
        { title: "Autonomie",          desc: "Transition réussie vers la tech avec une formation intensive 100% en anglais." },
    ],

    languages: [
        { name: "Espagnol", level: "Langue maternelle" },
        { name: "Français", level: "Professionnel (B2)" },
        { name: "Anglais",  level: "Courant (C1)" },
    ],

    hobbies: [
        { icon: null, img: "images/natation.png", label: "Natation" },
        { icon: "bi-dice-5",   label: "Jeux de société" },
        { icon: "bi-cup-hot",  label: "Cuisine et pâtisserie" },
    ],

    experiences: [
        {
            title: "Adjoint au dédouanement",
            badge: "CDI / Télétravail",
            company: "Impex Cargo SRL",
            period: "fév. 2016 – fév. 2026 (10 ans)",
            location: "Buenos Aires, Argentine",
            bullets: [
                "Piloté une équipe de 3 personnes et l'intégralité du flux import/export, atteignant un taux de succès de <strong>100%</strong> sur plus de <strong>30 dossiers</strong> hebdomadaires.",
                "Coordonné la facturation et le recouvrement, garantissant un flux de trésorerie constant.",
            ],
        },
        {
            title: "Développeur Web",
            badge: "Stagiaire",
            company: "Killian Tollec",
            period: "fév. 2023 – mars 2023 (4 semaines)",
            location: "Rennes, France",
            bullets: [
                "Optimisé la performance applicative de <strong>25%</strong> en concevant une API RESTful avec <strong>FastAPI</strong> et en automatisant le déploiement via <strong>Docker</strong>.",
                "Conçu des composants front-end en <strong>React</strong> et intégré des services via la <strong>Fetch API</strong>.",
                "Configuré et déployé le serveur web <strong>Caddy</strong> sur une instance <strong>Oracle Cloud</strong>.",
            ],
        },
    ],

    projects: [
        {
            title: "AirBnB Clone (HBnB) — Application Web Full Stack",
            stack: "Python · Flask · MySQL · HTML/CSS/JavaScript",
            url: "https://github.com/juliangf94/holbertonschool-hbnb",
            urlLabel: "github.com/juliangf94/holbertonschool-hbnb",
            desc: "Développé une application web full stack reproduisant les fonctionnalités principales d'AirBnB, incluant un ORM personnalisé, l'implémentation complète du CRUD via une <strong>API REST (Flask)</strong>, et un front-end dynamique avec intégration <strong>MySQL</strong>.",
        },
        {
            title: "Simple Shell — Interpréteur de commandes UNIX",
            stack: "Langage C · Linux · Gestion mémoire",
            url: "https://github.com/juliangf94/holbertonschool-simple_shell",
            urlLabel: "github.com/juliangf94/holbertonschool-simple_shell",
            desc: "Développé un interpréteur de commandes UNIX en <strong>C</strong>, intégrant la gestion des processus (fork, execve) et la résolution dynamique du PATH. Zéro fuite mémoire (Valgrind).",
        },
        {
            title: "Réimplémentation de la fonction printf",
            stack: "Langage C · Bas niveau · Fonctions variadiques",
            url: "https://github.com/juliangf94/holbertonschool-printf",
            urlLabel: "github.com/juliangf94/holbertonschool-printf",
            desc: "Conçu et implémenté une bibliothèque <strong>C</strong> personnalisée gérant les fonctions variadiques et le formatage complexe de données (10+ spécificateurs de format).",
        },
    ],

    education: [
        {
            title: "Développeur Web et Web Mobile",
            institution: "Holberton School",
            period: "sept. 2025 – juil. 2026 (9 mois)",
            location: "Rennes, France",
            bullets: ["Formation intensive <strong>100% en anglais</strong> — Titre RNCP Niveau 5 (BAC+2)."],
        },
        {
            title: "Licence en Commerce International (BAC+5)",
            institution: "Universidad Nacional de Quilmes",
            period: "mars 2018 – déc. 2022 (5 ans)",
            location: "Buenos Aires, Argentine",
            bullets: [],
        },
    ],
};

import {Section} from '../model/section.interface';
import {CurriculumVitae} from '../model/curriculumvitae.interface';


export var SKILLS_SECTION:Section[] = [{
                    title: "Langages",
                    items: [
                        { label: "Java 8", score: 1 },
                        { label: "PL/SQL", score: 0.8 },
                        { label: "HTML5/CSS3", score: 0.8 },
                        { label: "Javascript (ES6)", score: 0.7 },
                        { label: "TypdeScript", score: 0.7 }
                    ]
                }, {
                    title: "Côté serveur",
                    items: [
                        { label: "JEE", score: 0.8 },
                        { label: "Hibernate 4", score: 1 },
                        { label: "Spring 4", score: 1 },
                        { label: "JSF2/Primefaces", score: 0.8 }
                    ]
                }, {
                    title: "Serveur",
                    items: [
                        { label: "Tomcat", score: 0.8 },
                        { label: "JBoss", score: 0.8 }
                    ]
                }, {
                    title: "Web services",
                    items: [
                        { label: "Rest", score: 1 },
                        { label: "Soap", score: 0.8 }
                    ]
                }, {
                    title: "Côté client",
                    items: [
                        { label: "Angular2", score: 0.6 },
                        { label: "jQuery", score: 0.6 },
                        { label: "SDK Android", score: 0.4 }
                    ]
                }, {
                    title: "Base de données",
                    items: [
                        { label: "Oracle", score: 0.8 },
                        { label: "SQL Server", score: 0.5 },
                        { label: "MongoDB", score: 0.5 }            
                    ]
                }, {
                    title: "Méthodes",
                    items: [
                        { label: "Agile", score: 0.8 },
                        { label: "XP", score: 1 },
                        { label: "TDD", score: 1 }
                    ]
                }, {
                    title: "Outils",
                    items: [
                        { label: "Eclipse", score: 1 },
                        { label: "Svn", score: 0.8 },
                        { label: "Git", score: 0.6 },
                        { label: "JIRA", score: 0.4 },
                        { label: "Node.js", score: 0.6 }
                    ]
                }, {
                    title: "Tests et Integration continue",
                    items: [
                        { label: "Maven", score: 0.8 },
                        { label: "Gradle", score: 0.6 },
                        { label: "JUnit", score: 1 },
                        { label: "Jenkins", score: 0.6 },
                        { label: "Selenium", score: 0.8 },
                        { label: "Jasmine", score: 0.4 }
                    ]
                }
            ];


 

export var CV: CurriculumVitae = {
    linkedin: "https://www.linkedin.com/in/guillaume-plumey-b669729b",
    picture: "",
    firstName: "Guillaume",
    lastName: "Plumey",
    birthday: new Date("1982/02/24"),
    gender: "male",
    address: {
        city: "Cormeilles-en-Parisis",
        zipcode: "95240",
        country:"France"
    },
    permit: "Permis B + véhicule",
    additionalSections: [{
        title: "Compétences linguistiques",
        items: [
            { label: "Français (natif)", score: 1 },
            { label: "Anglais (professionel)", score: 0.4 }]
    }, {
            title: "Centres d’intérêts",
            items: [
                { label: "Menuiserie", score: null },
                { label: "Volley-ball", score: null }]
        }],
    sections: [{
        title: "Expérience professionelle",
        items: [
            {
                label: "Architecte logiciel - leader technique", date: "Depuis 2012", duration:"4 ans", company: "IMS Health (ex Cegedim)", companyId: 1,
                subject: "Création d'une plateforme réglementaire globale en Saas, destinée à la transparence des laboratoires pharmaceutiques.",
                environment: "Java/JEE, Spring, Spring security, Spring batch, JSF 2.0, Primefaces, Hibernate, RestEasy, Soap, Javascript, Jquery, Oracle, Apache, Jboss 6, Maven 2, Selenium, Jenkins",
                functions:[
                    "Définir une architecure multi-tenant",
                    "Gèrer l'intégralité du cycle de vie de l'application (de l'analyse à la mise en production).",
                    "Participer au processus de développement Agile au sein d’une équipe de 6 personnes (SCRUM, XP et TDD).",
                    "Orienter l’équipe dans les choix de conception et modélisation.",
                    "Mettre en œuvre l’interopérabilité via des web services en REST.",
                    "Mettre en place un moteur BPM adaptable aux règles métier en fonction du pays.",
                    "Concevoir des composants graphiques afin de faciliter la globalisation de la platforme.",
                    "Animer un workshop autour de l'Agilité",
                    "Réaliser un POC et présenter à des développeurs un framework front-end moderne (Angular2)."]    
            },
            {
                label: "Ingénieur en développement confirmé", date: "2010 à 2012", duration:"2 ans", company: "Cegedim", companyId: 0,
                subject: "Développement d’un moteur d’historisation et de consolidation de données, afin d’alimenter des data warehouses destinés à la Business Intelligence.",
                environment: "Java/J2EE, Spring, Spring security, JSF 2.0, Hibernate, Javascript, Jquery, Oracle et SQL Server, Apache, Tomcat 6, Maven 2",
                functions:[
                    "Implémenter la couche de validation.",
                    "Gèrer la partie front end en JSF2/Primefaces."
                 ]   
         },
            {
                label: "Ingénieur en développement", date: "2008 à 2010",duration:"2 ans", company: "Cegedim", companyId: 0,
                subject: "Développement et maintenance de logiciels (CRM) aidant les laboratoires pharmaceutiques à organiser les événements promotionnels et à gérer l’activité des visiteurs médicaux.",
                environment: "Java/J2EE, Flex 4, Oracle, Apache, Jboss 4, Maven",
                functions:[
                    "Industrialiser les applications dans le cadre d’une intégration en continue et de déploiement automatisé.",
                    "Dévolepper de nouvelles fonctionalités.",
                    "Coriger les bugs remontés en recette et en production."
                ]   
            }
        ]
    }, {
            title: "Formation initiale",
            items: [{ label: "Master I.M.A. (Génie informatique) ", date: "2007", company: "UFR La Rochelle" }]
        }, {
            title: "Formation continue",
            items: [
                { label: "Méthode Agile", date: "2016", company: "Linda" },
                { label: "Architecture logicielle", date: "2015", company: "Valtech", duration: "5 jours" },
                { label: "Flex 4", date: "2010", company: "BaaO", duration: "4 jours" },
                { label: "Oracle : Développer en PL/SQL", date: "2008", company: "Orsys", duration: "3 jours" },
                { label: "Java/J2EE", date: "2007", company: "Sodifrance", duration: "2 mois" }]
        }, {
            title: "Compétences techniques",
            // type: SectionCONST.SKILLS;
            sections: SKILLS_SECTION// SKILLS_SECTION
        }],
    professionTitle: "Ingénieur en développement - Leader technique",
    professionSubTitle: " Java/JEE - Spring",
    catchPhrase:"8 ans d’expérience dans le développement d’applications web en java et de programmation orientée objets"
};
import {Section} from '../model/section.interface';
import {CurriculumVitae} from '../model/curriculumvitae.interface';


export var SKILLS_SECTION_EN:Section[] = [{
                    title: "Languages",
                    items: [
                        { label: "Java 8", score: 1 },
                        { label: "PL/SQL", score: 0.8 },
                        { label: "Javascript (ES6)", score: 0.7 },
                        { label: "TypdeScript", score: 0.7 }
                    ]
                }, {
                    title: "Back-end",
                    items: [
                        { label: "JEE", score: 0.8 },
                        { label: "Hibernate 4", score: 1 },
                        { label: "Spring 4", score: 1 }
                    ]
                }, {
                    title: "Servers",
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
                    title: "Front-end",
                    items: [
                        { label: "HTML5/CSS3", score: 0.8 },
                        { label: "Sass", score: 0.8 },
                        { label: "Angular2", score: 0.6 },
                        { label: "jQuery", score: 0.6 },
                        { label: "SDK Android", score: 0.4 },
                        { label: "JSF2/Primefaces", score: 0.8 }
                    ]
                }, {
                    title: "Databases",
                    items: [
                        { label: "Oracle", score: 0.8 },
                        { label: "SQL Server", score: 0.5 },
                        { label: "MongoDB", score: 0.5 }            
                    ]
                }, {
                    title: "Methology",
                    items: [
                        { label: "Agile", score: 0.8 },
                        { label: "XP", score: 1 },
                        { label: "TDD", score: 1 }
                    ]
                }, {
                    title: "Tools",
                    items: [
                        { label: "Eclipse", score: 1 },
                        { label: "Svn", score: 0.8 },
                        { label: "Git", score: 0.6 },
                        { label: "JIRA", score: 0.4 },
                        { label: "Node.js", score: 0.6 }
                    ]
                }, {
                    title: "Tests & CI",
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


 

export var CV_EN: CurriculumVitae = {
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
    permit: "License + car",
    additionalSections: [{
        title: "Languages",
        items: [
            { label: "French (native)", score: 1 },
            { label: "English (professional)", score: 0.4 }]
    }, {
            title: "Hobbies",
            items: [
                { label: "Woodworking", score: null },
                { label: "Volley-ball", score: null }]
        }],
    sections: [{
        title: "Professional skills",
        items: [
            {
                label: "Software architect - Technical leader", date: "Since 2012", duration:"4 years", 
                company: "IMS Health (ex Cegedim)", /*companyId: 1,*/
                subject: "Setting up the architecture for a global regulatory platform as Saas for the transparency of pharmaceutical companies.",
                environment: "Java/JEE, Spring, Spring security, Spring batch, JSF 2.0, Primefaces, Hibernate, RestEasy, Soap, Javascript, Jquery, Oracle, Apache, Jboss 6, Maven 2, Selenium, Jenkins",
                functions:[
                    "Setting up the multi-tenant architecture",
                    "Manage the entire life cycle of the application (from analysis to production).",
                    "Participate in the Agile development process within a team of 6 people (SCRUM, XP et TDD).",
                    "Help the team in the choices of design and modeling.",
                    "Implement interoperability via Web services into REST.",
                    "Guarantee the quality by automating unit tests and end-to-end tests with continuous integration.",
                    "Realize an adaptable BPM engine based on the country's business rules",
                    "Design a graphic components framework to simplify the globalization.",
                    "Animate workshop about the Agility",
                    "Create a Proof of concept and explain to developers about a modern front-end framework (Angular2)."]    
            },
            {
                label: "Confirmed software engineer", date: "2010 to 2012", duration:"2 years", 
                company: "Cegedim" , /*companyId: 0,*/
                subject: "Development a data archiving and consolidation engine to feed data warehouses for business intelligence.",
                environment: "Java/J2EE, Spring, Spring security, JSF 2.0, Hibernate, Javascript, Jquery, Oracle et SQL Server, Apache, Tomcat 6, Maven 2",
                functions:[
                    "Implement the validation layer.",
                    "Manage the front end with JSF 2/Primefaces framework."
                 ]   
         },
            {
                label: "Junior software engineer", date: "2008 to 2010",duration:"2 years", 
                company: "Cegedim",/* companyId: 0,*/
                subject: "Development and maintenance of software (CRM) helping pharmaceutical companies to organize promotional events and manage the activity of medical representatives.",
                environment: "Java/J2EE, Flex 4, Oracle, Apache, Jboss 4, Maven",
                functions:[
                    "Industrialize the applications as part of a continuous chain integration and automatic deployment",
                    "Implements new functionalities.",
                    "Fix bugs raised from QA and production."
                ]   
            }
        ]
    }, {
            title: "Degree",
            items: [{ label: "Master 2 in Computer Science and Applied Mathematics (Computer Engineering)", date: "2007", company: "UFR La Rochelle" }]
        }, {
            title: "Training",
            items: [
                { label: "Agile methology", date: "2016", company: "Linda" },
                { label: "Software architecte", date: "2015", company: "Valtech", duration: "5 days" },
                { label: "Flex 4", date: "2010", company: "BaaO", duration: "4 days" },
                { label: "Oracle : Developing in PL/SQL", date: "2008", company: "Orsys", duration: "3 days" },
                { label: "Java/J2EE", date: "2007", company: "Sodifrance", duration: "2 months" }]
        }, {
            title: "Technical skills",
            // type: SectionCONST.SKILLS;
            sections: SKILLS_SECTION_EN// SKILLS_SECTION
        }],
    professionTitle: "Senior software engineer - Technical leader",
    professionSubTitle: " Java/JEE - Spring",
    catchPhrase:"8 years of experience in developing web applications in Java and object oriented programming"
};
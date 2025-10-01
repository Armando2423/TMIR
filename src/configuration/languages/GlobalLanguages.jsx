import React, { createContext, useState, useEffect, useContext } from 'react';

// Traducciones globales
const translations = {
    /* SPANISH */
    es: {
        loading: 'Cargando...',
        changeLang: 'Cambiar lenguaje:',
        options: {
            es: 'Español',
            en: 'Inglés',
            zh: 'Chino',
            fr: 'Francés',
            it: 'Italiano',
            ger: 'Alemán',
        },
        /* COMPONENT NAVIGATION */
        navigation_elements: {
            element_1: 'Acerca de mí',
            element_2: 'Habilidades Blandas',
            element_3: 'Habilidades Técnicas',
            element_4: '¿Qué hago ahora?',
            element_5: 'Contáctame',
            element_6: 'Visualizar CV',
        },
        /* COMPONENT HOME */
        home: {
            title: 'Hola, soy desarrollador de apps móvil y web. . .',
            txt: 'Cambia el tema (claro ó oscuro) y el idioma (Español, Ingles, Chino, Frances, Italiano y Alemán) en el menú.',
            btn: 'Contáctame',
        },
        /* COMPONENT ABOUT ME */
        about_me: {
            title: 'Sobre mí',
            txt: 'Soy un desarrollador Full Stack, enfocado en el desarrollo de aplicaciones ágiles y rápidas, con un principal enfoque en UI. Para el mercado web y móvil. Mi prioridad es ofrecer un enfoque único y personalizado a clientes y empresas, diseñando, implementando y analizando soluciones que se adapten a sus necesidades y expectativas. Con la experiencia en React (web) y React Native (móvil), con +3 años de experiencia.'
        },
        /* COMPONENT SKILLS */
        skills: {
            title: 'Habilidades Blandas',
            skill_1: {
                title: 'Ingles',
                skill_txt: 'Capacidad de lectura y comprensión del inglés. Al igual que escritura y dialecto.',
            },
            skill_2: {
                title: 'Pensamiento lógico',
                skill_txt: 'Capacidad para comprender la lógica de los problemas y buscar soluciones eficientes.',
            },
            skill_3: {
                title: 'Adaptabilidad',
                skill_txt: 'Facilidad para ajustarse a nuevos entornos, herramientas y requisitos del proyecto.',
            },
            skill_4: {
                title: 'Comunicación en equipo',
                skill_txt: 'Habilidad para trabajar de manera colaborativa, comprender ideas y transmitir información claramente.',
            },
            skill_5: {
                title: 'Resolución de problemas',
                skill_txt: 'Competencia para identificar errores, analizarlos con profundidad y proponer soluciones efectivas.',
            },

            skill_6: {
                title: 'Gestión del tiempo',
                skill_txt: 'Organización adecuada del tiempo para cumplir objetivos y entregar proyectos puntualmente.',
            },
        },
        /* COMPONENT TECH SKILLS */
        tech_skills: {
            title: 'Habilidades Técnicas',
            txt: 'Presiona para ver con más exatitud, el nivel de habilidad de cada tecnología.',
            label: 'Habilidadad Técnica',
        },
        /* COMPONENT WHAT I DO NOW */
        what_i_do_now: {
            title: '¿Qué hago ahora?',
            txt: 'Actualmente, me estoy capacitando sobre la rama de ciberseguridad, ya que es una de las áreas más importantes en la industria. Estoy interesado en aprender sobre las técnicas y herramientas necesarias para mejorar mi capacidad de análisis y resolución de problemas en el campo de la seguridad de la información.'
        },
        /* COMPONENT GET IN TOUCH */
        get_in_touch: {
            title: 'Contáctame',
            inputs: {
                input_name: {
                    label: 'Nombre',
                    placeholder: 'Nombre...',
                },
                input_last_name: {
                    label: 'Apellido',
                    placeholder: 'Apellido...',
                },
                input_email: {
                    label: 'Correo',
                    placeholder: 'Correo...',
                },
                input_description: {
                    label: 'Descripción',
                    placeholder: 'Descripción del proyecto...',
                },
            },
            txt_lbl: '¿La descripción del proyecto es para tu emprendimiento o por parte de una empresa?',
            radio_btns: {
                btn_staff: {
                    label: 'Personal',
                },
                btn_company: {
                    label: 'Empresa',
                },
            },
            btn_txt: 'Enviar',
            hint_txt: 'Tus datos estarán protegidos y no serán compartidos con nadie.',
            form: {
                name_mensages: {
                    mensage_1: 'Por favor. Ingresa tu nombre',
                    mensage_2: 'Por favor. Nombre no válido',
                    mensage_3: 'Por favor. Máximo 40 caracteres'
                },
                last_name_mensages: {
                    mensage_1: 'Por favor. Ingresa tu apellido',
                    mensage_2: 'Apellido no válido',
                    mensage_3: 'Máximo 40 caracteres'
                },
                email_mensages: {
                    mensage_1: 'Por favor. Ingresa tu email',
                    mensage_2: 'Email no válido',

                },
                description_mensages: {
                    mensage_1: 'Por favor. Ingresa tu mensaje acerca de tu proyecto',
                    mensage_2: 'Máximo 100 caracteres',
                },
                type_proyecto_mensages: {
                    mensage_1: 'Tienes que seleccionar al menos uno',
                },
                mensage_alert_1: '❌ Error al enviar el formulario',
                mensage_alert_2: '✅ ¡Gracias, nos pondremos en contacto pronto!',
            },
        },
        download_pdf: {
            txt: 'Descargar CV',
        },
        made_by: {
            title: 'Sitio web creado por:',
            txt: '@Armando Reyes',
            date: 'Publicado el: 24/04/2025'
        },
    },
    /* ENGLISH */
    en: {
        loading: 'Loading...',
        changeLang: 'Change language:',
        options: {
            es: 'Spanish',
            en: 'English',
            zh: 'Chinese',
            fr: 'French',
            it: 'Italian',
            ger: 'German',
        },
        navigation_elements: {
            element_1: 'About Me',
            element_2: 'Soft Skills',
            element_3: 'Technical Skills',
            element_4: 'What I Do Now',
            element_5: 'Get in Touch',
            element_6: 'View Resume',
        },
        home: {
            title: 'Hi, I am a mobile and web app developer...',
            txt: 'Change the theme (light or dark) and the language (Spanish, English, Chinese, French, Italian and German) in the menu.',
            btn: 'Get in Touch',
        },
        about_me: {
            title: 'About Me',
            txt: "I am a Full Stack developer focused on building agile and fast applications, with a strong emphasis on UI for both web and mobile markets. My priority is to provide a unique and personalized approach to clients and companies by designing, implementing, and analyzing solutions that adapt to their needs and expectations. I have  +3 years of experience with React (web) and React Native (mobile)."

        },
        skills: {
            title: 'Soft Skills',
            skill_1: {
                title: 'English',
                skill_txt: 'Ability to read and understand English, as well as writing and speaking skills.',
            },
            skill_2: {
                title: 'Logical Thinking',
                skill_txt: 'Ability to understand problem logic and seek efficient solutions.',
            },
            skill_3: {
                title: 'Adaptability',
                skill_txt: 'Ease of adjusting to new environments, tools, and project requirements.',
            },
            skill_4: {
                title: 'Team Communication',
                skill_txt: 'Ability to work collaboratively, understand ideas, and clearly convey information.',
            },
            skill_5: {
                title: 'Problem Solving',
                skill_txt: 'Competence in identifying errors, analyzing them deeply, and proposing effective solutions.',
            },
            skill_6: {
                title: 'Time Management',
                skill_txt: 'Proper organization of time to meet goals and deliver projects on time.',
            },
        },
        tech_skills: {
            title: 'Technical Skills',
            txt: 'Click to see more accurately the skill level for each technology.',
            label: 'Technical Skill',
        },
        what_i_do_now: {
            title: 'What I Do Now',
            txt: 'I am currently training in the field of cybersecurity, as it is one of the most important areas in the industry. I am interested in learning the techniques and tools needed to improve my analytical and problem-solving skills in the field of information security.'
        },
        get_in_touch: {
            title: 'Get in Touch',
            inputs: {
                input_name: {
                    label: 'Name',
                    placeholder: 'Name...',
                },
                input_last_name: {
                    label: 'Last Name',
                    placeholder: 'Last name...',
                },
                input_email: {
                    label: 'Email',
                    placeholder: 'Email...',
                },
                input_description: {
                    label: 'Description',
                    placeholder: 'Project description...',
                },
            },
            txt_lbl: 'Is this project description for your personal venture or for a company?',
            radio_btns: {
                btn_staff: {
                    label: 'Personal',
                },
                btn_company: {
                    label: 'Company',
                },
            },
            btn_txt: 'Send',
            hint_txt: 'Your data will be protected and will not be shared with anyone.',
            form: {
                name_mensages: {
                    mensage_1: 'Please enter your first name',
                    mensage_2: 'Invalid first name',
                    mensage_3: 'Maximum 40 characters'
                },
                last_name_mensages: {
                    mensage_1: 'Please enter your last name',
                    mensage_2: 'Invalid last name',
                    mensage_3: 'Maximum 40 characters'
                },
                email_mensages: {
                    mensage_1: 'Please enter your email',
                    mensage_2: 'Invalid email',
                },
                description_mensages: {
                    mensage_1: 'Please enter a message about your project',
                    mensage_2: 'Maximum 100 characters',
                },
                type_proyecto_mensages: {
                    mensage_1: 'You must select at least one option',
                },
                mensage_alert_1: '❌ Error sending the form',
                mensage_alert_2: '✅ Thank you, we will get in touch soon!',
            },

        },
        download_pdf: {
            txt: 'Download CV',
        },
        made_by: {
            title: 'Website created by:',
            txt: '@Armando Reyes',
            date: 'Published  on: April 24, 2025'
        }

    },
    /* CHINESE */
    zh: {
        loading: '加载中...',
        changeLang: '切换语言：',
        options: {
            es: '西班牙语',
            en: '英语',
            zh: '中文',
            fr: '法语',
            it: '意大利语',
            ger: '德语',
        },
        navigation_elements: {
            element_1: '关于我',
            element_2: '软技能',
            element_3: '技术技能',
            element_4: '我现在在做什么',
            element_5: '联系我',
            element_6: '查看简历',

        },
        home: {
            title: '你好，我是一名移动端和网页应用开发者...',
            txt: '在菜单中更改主题（浅色或深色）和语言（西班牙语、英语、中文、法语、意大利语和德语.',
            btn: '联系我',
        },
        about_me: {
            title: '关于我',
            txt: "我是一名全栈开发者，专注于开发敏捷快速的应用程序，主要关注网页和移动端的用户界面。我的首要任务是通过设计、实施和分析解决方案，为客户和公司提供独特且个性化的方法，以满足他们的需求和期望。我拥有超过三年的 React（网页）和 React Native（移动端）开发经验。"

        },
        skills: {
            title: '软技能',
            skill_1: {
                title: '英语',
                skill_txt: '具备英语阅读和理解能力，以及写作和口语表达能力。',
            },
            skill_2: {
                title: '逻辑思维',
                skill_txt: '能够理解问题的逻辑，并寻找高效的解决方案。',
            },
            skill_3: {
                title: '适应能力',
                skill_txt: '能够轻松适应新环境、新工具和项目需求。',
            },
            skill_4: {
                title: '团队沟通',
                skill_txt: '具备协作能力，能够理解想法并清晰传达信息。',
            },
            skill_5: {
                title: '问题解决',
                skill_txt: '具备识别错误、深入分析并提出有效解决方案的能力。',
            },
            skill_6: {
                title: '时间管理',
                skill_txt: '能够合理安排时间，按时完成目标并交付项目。',
            },
        },
        tech_skills: {
            title: '技术技能',
            txt: '点击查看每项技术的技能水平。',
            label: '技术能力'
        },
        what_i_do_now: {
            title: '我现在在做什么',
            txt: '我目前正在接受网络安全领域的培训，因为这是行业中最重要的领域之一。我有兴趣学习提高信息安全领域分析和解决问题能力所需的技术和工具。'
        },
        get_in_touch: {
            title: '联系我',
            inputs: {
                input_name: {
                    label: '名字',
                    placeholder: '名字...',
                },
                input_last_name: {
                    label: '姓氏',
                    placeholder: '姓氏...',
                },
                input_email: {
                    label: '电子邮件',
                    placeholder: '电子邮件...',
                },
                input_description: {
                    label: '项目描述',
                    placeholder: '项目描述...',
                },
            },
            txt_lbl: '这个项目描述是你的个人项目还是来自一家公司？',
            radio_btns: {
                btn_staff: {
                    label: '个人',
                },
                btn_company: {
                    label: '公司',
                },
            },
            btn_txt: '发送',
            hint_txt: '你的数据将受到保护，不会与任何人分享。',
            form: {
                name_mensages: {
                    mensage_1: '请输入你的名字',
                    mensage_2: '名字无效',
                    mensage_3: '最多40个字符'
                },
                last_name_mensages: {
                    mensage_1: '请输入你的姓氏',
                    mensage_2: '姓氏无效',
                    mensage_3: '最多40个字符'
                },
                email_mensages: {
                    mensage_1: '请输入你的电子邮箱',
                    mensage_2: '电子邮箱无效',
                },
                description_mensages: {
                    mensage_1: '请输入关于你的项目的描述',
                    mensage_2: '最多100个字符',
                },
                type_proyecto_mensages: {
                    mensage_1: '你必须至少选择一个选项',
                },
                mensage_alert_1: '❌ 表单提交失败',
                mensage_alert_2: '✅ 谢谢！我们会尽快与您联系！',
            },

        },
        download_pdf: {
            txt: '下载简历',
        },
        made_by: {
            title: '网站由以下人员创建：',
            txt: '@Armando Reyes',
            date: '2025年4月24日',
        }

    },
    /* FRENCH */
    fr: {
        loading: 'Chargement...',
        changeLang: 'Changer de langue :',
        options: {
            es: 'Espagnol',
            en: 'Anglais',
            zh: 'Chinois',
            fr: 'Français',
            it: 'Italien',
            ger: 'Allemand',
        },
        navigation_elements: {
            element_1: 'À propos de moi',
            element_2: 'Compétences Douces',
            element_3: 'Compétences Techniques',
            element_4: 'Que fais-je maintenant ?',
            element_5: 'Contactez-moi',
            element_6: 'Voir le CV',
        },
        home: {
            title: 'Bonjour, je suis développeur d’applications mobiles et web...',
            txt: 'Changez le thème (clair ou sombre) et la langue (espagnol, anglais, chinois, français, italien et allemand) dans le menu.',
            btn: 'Contactez-moi',
        },
        about_me: {
            title: 'À propos de moi',
            txt: 'Je suis développeur Full Stack, spécialisé dans la création d’applications rapides et agiles avec un accent particulier sur l’UI, pour le web et le mobile. Ma priorité est d’offrir une approche unique et personnalisée aux clients et entreprises, en concevant et mettant en œuvre des solutions adaptées à leurs besoins. Expérience avec React (web) et React Native (mobile), plus de 3 ans d’expérience.',
        },
        skills: {
            title: 'Compétences Douces',
            skill_1: {
                title: 'Anglais',
                skill_txt: 'Capacité de lecture, de compréhension, d’écriture et de communication en anglais.',
            },
            skill_2: {
                title: 'Pensée logique',
                skill_txt: 'Capacité à comprendre la logique des problèmes et à trouver des solutions efficaces.',
            },
            skill_3: {
                title: 'Adaptabilité',
                skill_txt: 'Facilité à s’adapter à de nouveaux environnements, outils et exigences de projet.',
            },
            skill_4: {
                title: 'Communication en équipe',
                skill_txt: 'Capacité à travailler en collaboration, comprendre les idées et transmettre clairement les informations.',
            },
            skill_5: {
                title: 'Résolution de problèmes',
                skill_txt: 'Compétence à identifier les erreurs, les analyser en profondeur et proposer des solutions efficaces.',
            },
            skill_6: {
                title: 'Gestion du temps',
                skill_txt: 'Organisation efficace du temps pour atteindre les objectifs et livrer les projets à temps.',
            },
        },
        tech_skills: {
            title: 'Compétences Techniques',
            txt: 'Cliquez pour voir plus précisément le niveau de chaque technologie.',
            label: 'Compétence Technique',
        },
        what_i_do_now: {
            title: 'Que fais-je maintenant ?',
            txt: 'Actuellement, je me forme dans le domaine de la cybersécurité, car c’est l’un des secteurs les plus importants. Je souhaite apprendre les techniques et outils nécessaires pour améliorer mes capacités d’analyse et de résolution de problèmes dans le domaine de la sécurité de l’information.',
        },
        get_in_touch: {
            title: 'Contactez-moi',
            inputs: {
                input_name: {
                    label: 'Nom',
                    placeholder: 'Nom...',
                },
                input_last_name: {
                    label: 'Prénom',
                    placeholder: 'Prénom...',
                },
                input_email: {
                    label: 'Email',
                    placeholder: 'Email...',
                },
                input_description: {
                    label: 'Description',
                    placeholder: 'Description du projet...',
                },
            },
            txt_lbl: 'La description du projet concerne-t-elle votre initiative ou une entreprise ?',
            radio_btns: {
                btn_staff: {
                    label: 'Personnel',
                },
                btn_company: {
                    label: 'Entreprise',
                },
            },
            btn_txt: 'Envoyer',
            hint_txt: 'Vos données seront protégées et ne seront partagées avec personne.',
            form: {
                name_mensages: {
                    mensage_1: 'Veuillez entrer votre nom',
                    mensage_2: 'Nom invalide',
                    mensage_3: '40 caractères maximum',
                },
                last_name_mensages: {
                    mensage_1: 'Veuillez entrer votre prénom',
                    mensage_2: 'Prénom invalide',
                    mensage_3: '40 caractères maximum',
                },
                email_mensages: {
                    mensage_1: 'Veuillez entrer votre email',
                    mensage_2: 'Email invalide',
                },
                description_mensages: {
                    mensage_1: 'Veuillez entrer un message concernant votre projet',
                    mensage_2: '100 caractères maximum',
                },
                type_proyecto_mensages: {
                    mensage_1: 'Vous devez en sélectionner au moins un',
                },
                mensage_alert_1: '❌ Erreur lors de l’envoi du formulaire',
                mensage_alert_2: '✅ Merci, nous vous contacterons bientôt !',
            },
        },
        download_pdf: {
            txt: 'Télécharger le CV',
        },
        made_by: {
            title: 'Site web créé par :',
            txt: '@Armando Reyes',
            date: 'Publié le : 24/04/2025',
        },
    },
    /* ITALIAN */
    it: {
        loading: 'Caricamento...',
        changeLang: 'Cambia lingua:',
        options: {
            es: 'Spagnolo',
            en: 'Inglese',
            zh: 'Cinese',
            fr: 'Francese',
            it: 'Italiano',
            ger: 'Tedesco',
        },
        navigation_elements: {
            element_1: 'Chi sono',
            element_2:  'Competenze trasversali',
            element_3: 'Competenze Tecniche',
            element_4: 'Cosa faccio ora?',
            element_5: 'Contattami',
            element_6: 'Visualizza CV',
        },
        home: {
            title: 'Ciao, sono uno sviluppatore di app mobili e web...',
            txt: 'Cambia il tema (chiaro o scuro) e la lingua (Spagnolo, Inglese e Cinese) nel menu.',
            btn: 'Contattami',
        },
        about_me: {
            title: 'Su di me',
            txt: 'Sono uno sviluppatore Full Stack, focalizzato nello sviluppo di applicazioni agili e veloci, con particolare attenzione all’UI. Lavoro per il mercato web e mobile. La mia priorità è offrire un approccio unico e personalizzato a clienti e aziende, progettando, implementando e analizzando soluzioni su misura. Con esperienza in React (web) e React Native (mobile), con oltre 3 anni di esperienza.',
        },
        skills: {
            title: 'Competenze trasversali',
            skill_1: {
                title: 'Inglese',
                skill_txt: 'Capacità di lettura e comprensione dell’inglese, nonché scrittura e parlato.',
            },
            skill_2: {
                title: 'Pensiero logico',
                skill_txt: 'Capacità di comprendere la logica dei problemi e trovare soluzioni efficienti.',
            },
            skill_3: {
                title: 'Adattabilità',
                skill_txt: 'Facilità ad adattarsi a nuovi ambienti, strumenti e requisiti del progetto.',
            },
            skill_4: {
                title: 'Comunicazione in team',
                skill_txt: 'Abilità nel lavorare in modo collaborativo, comprendere idee e trasmettere informazioni chiaramente.',
            },
            skill_5: {
                title: 'Problem solving',
                skill_txt: 'Competenza nell’identificare errori, analizzarli in profondità e proporre soluzioni efficaci.',
            },
            skill_6: {
                title: 'Gestione del tempo',
                skill_txt: 'Organizzazione del tempo per raggiungere obiettivi e consegnare progetti puntualmente.',
            },
        },
        tech_skills: {
            title: 'Competenze Tecniche',
            txt: 'Clicca per vedere con maggiore precisione il livello di ciascuna tecnologia.',
            label: 'Competenza Tecnica',
        },
        what_i_do_now: {
            title: 'Cosa faccio ora?',
            txt: 'Attualmente mi sto formando in ambito cybersecurity, una delle aree più importanti del settore. Sono interessato ad apprendere tecniche e strumenti necessari per migliorare la mia capacità di analisi e risoluzione di problemi nel campo della sicurezza delle informazioni.',
        },
        get_in_touch: {
            title: 'Contattami',
            inputs: {
                input_name: {
                    label: 'Nome',
                    placeholder: 'Nome...',
                },
                input_last_name: {
                    label: 'Cognome',
                    placeholder: 'Cognome...',
                },
                input_email: {
                    label: 'Email',
                    placeholder: 'Email...',
                },
                input_description: {
                    label: 'Descrizione',
                    placeholder: 'Descrizione del progetto...',
                },
            },
            txt_lbl: 'La descrizione del progetto è per la tua iniziativa o per un’azienda?',
            radio_btns: {
                btn_staff: {
                    label: 'Personale',
                },
                btn_company: {
                    label: 'Azienda',
                },
            },
            btn_txt: 'Invia',
            hint_txt: 'I tuoi dati saranno protetti e non verranno condivisi con nessuno.',
            form: {
                name_mensages: {
                    mensage_1: 'Per favore, inserisci il tuo nome',
                    mensage_2: 'Nome non valido',
                    mensage_3: 'Massimo 40 caratteri',
                },
                last_name_mensages: {
                    mensage_1: 'Per favore, inserisci il tuo cognome',
                    mensage_2: 'Cognome non valido',
                    mensage_3: 'Massimo 40 caratteri',
                },
                email_mensages: {
                    mensage_1: 'Per favore, inserisci la tua email',
                    mensage_2: 'Email non valida',
                },
                description_mensages: {
                    mensage_1: 'Per favore, inserisci il messaggio riguardo al tuo progetto',
                    mensage_2: 'Massimo 100 caratteri',
                },
                type_proyecto_mensages: {
                    mensage_1: 'Devi selezionare almeno uno',
                },
                mensage_alert_1: '❌ Errore nell’invio del modulo',
                mensage_alert_2: '✅ Grazie, ti contatteremo presto!',
            },
        },
        download_pdf: {
            txt: 'Scarica CV',
        },
        made_by: {
            title: 'Sito web creato da:',
            txt: '@Armando Reyes',
            date: 'Pubblicato il: 24/04/2025',
        },
    },
    /* GERMAN */
    ger: {
        loading: 'Wird geladen...',
        changeLang: 'Sprache ändern:',
        options: {
            es: 'Spanisch',
            en: 'Englisch',
            zh: 'Chinesisch',
            fr: 'Französisch',
            it: 'Italienisch',
            ger: 'Deutsch',
        },
        navigation_elements: {
            element_1: 'Über mich',
            element_2:  'Soziale Kompetenzen',
            element_3: 'Technische Fähigkeiten',
            element_4: 'Was mache ich jetzt?',
            element_5: 'Kontaktiere mich',
            element_6: 'Lebenslauf ansehen',
        },
        home: {
            title: 'Hallo, ich bin Entwickler für mobile und Web-Apps...',
            txt: 'Ändern Sie das Thema (hell oder dunkel) und die Sprache (Spanisch, Englisch, Chinesisch, Französisch, Italienisch und Deutsch) im Menü.',
            btn: 'Kontaktiere mich',
        },
        about_me: {
            title: 'Über mich',
            txt: 'Ich bin ein Full-Stack-Entwickler, spezialisiert auf die Entwicklung agiler und schneller Anwendungen mit Schwerpunkt auf UI, für Web und Mobile. Mein Ziel ist es, Kunden und Unternehmen maßgeschneiderte Lösungen anzubieten, die ihren Bedürfnissen entsprechen. Erfahrung mit React (Web) und React Native (Mobil) mit über 3 Jahren Erfahrung.',
        },
        skills: {
            title: 'Soziale Kompetenzen',
            skill_1: {
                title: 'Englisch',
                skill_txt: 'Fähigkeit, Englisch zu lesen, zu verstehen, zu schreiben und zu sprechen.',
            },
            skill_2: {
                title: 'Logisches Denken',
                skill_txt: 'Fähigkeit, die Logik von Problemen zu verstehen und effiziente Lösungen zu finden.',
            },
            skill_3: {
                title: 'Anpassungsfähigkeit',
                skill_txt: 'Leichtigkeit, sich an neue Umgebungen, Werkzeuge und Projektanforderungen anzupassen.',
            },
            skill_4: {
                title: 'Teamkommunikation',
                skill_txt: 'Fähigkeit, kollaborativ zu arbeiten, Ideen zu verstehen und Informationen klar zu vermitteln.',
            },
            skill_5: {
                title: 'Problemlösung',
                skill_txt: 'Kompetenz, Fehler zu identifizieren, sie gründlich zu analysieren und effektive Lösungen vorzuschlagen.',
            },
            skill_6: {
                title: 'Zeitmanagement',
                skill_txt: 'Effektive Organisation der Zeit, um Ziele zu erreichen und Projekte rechtzeitig zu liefern.',
            },
        },
        tech_skills: {
            title: 'Technische Fähigkeiten',
            txt: 'Klicke, um das Fähigkeitsniveau jeder Technologie genauer zu sehen.',
            label: 'Technische Fähigkeit',
        },
        what_i_do_now: {
            title: 'Was mache ich jetzt?',
            txt: 'Zurzeit bilde ich mich im Bereich Cybersicherheit weiter, da dies eines der wichtigsten Felder in der Branche ist. Ich möchte Techniken und Werkzeuge erlernen, um meine Analyse- und Problemlösungsfähigkeiten im Bereich Informationssicherheit zu verbessern.',
        },
        get_in_touch: {
            title: 'Kontaktiere mich',
            inputs: {
                input_name: {
                    label: 'Name',
                    placeholder: 'Name...',
                },
                input_last_name: {
                    label: 'Nachname',
                    placeholder: 'Nachname...',
                },
                input_email: {
                    label: 'E-Mail',
                    placeholder: 'E-Mail...',
                },
                input_description: {
                    label: 'Beschreibung',
                    placeholder: 'Projektbeschreibung...',
                },
            },
            txt_lbl: 'Ist die Projektbeschreibung für dein eigenes Vorhaben oder für ein Unternehmen?',
            radio_btns: {
                btn_staff: {
                    label: 'Persönlich',
                },
                btn_company: {
                    label: 'Unternehmen',
                },
            },
            btn_txt: 'Senden',
            hint_txt: 'Deine Daten sind geschützt und werden nicht weitergegeben.',
            form: {
                name_mensages: {
                    mensage_1: 'Bitte gib deinen Namen ein',
                    mensage_2: 'Ungültiger Name',
                    mensage_3: 'Maximal 40 Zeichen',
                },
                last_name_mensages: {
                    mensage_1: 'Bitte gib deinen Nachnamen ein',
                    mensage_2: 'Ungültiger Nachname',
                    mensage_3: 'Maximal 40 Zeichen',
                },
                email_mensages: {
                    mensage_1: 'Bitte gib deine E-Mail ein',
                    mensage_2: 'Ungültige E-Mail',
                },
                description_mensages: {
                    mensage_1: 'Bitte gib eine Beschreibung deines Projekts ein',
                    mensage_2: 'Maximal 100 Zeichen',
                },
                type_proyecto_mensages: {
                    mensage_1: 'Du musst mindestens eine auswählen',
                },
                mensage_alert_1: '❌ Fehler beim Senden des Formulars',
                mensage_alert_2: '✅ Danke, wir melden uns bald!',
            },
        },
        download_pdf: {
            txt: 'Lebenslauf herunterladen',
        },
        made_by: {
            title: 'Website erstellt von:',
            txt: '@Armando Reyes',
            date: 'Veröffentlicht am: 24/04/2025',
        },
    },

};



// Creamos el contexto
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const [texts, setTexts] = useState(translations['en']);

    useEffect(() => {
        const savedLang = localStorage.getItem('language') || 'en';
        setLanguage(savedLang);
        setTexts(translations[savedLang]);
    }, []);


    useEffect(() => {
        setTexts(translations[language]);
        localStorage.setItem('language', language);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, texts }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Custom hook para usar el contexto fácilmente
export const useLanguage = () => useContext(LanguageContext);
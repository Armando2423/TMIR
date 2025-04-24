import { desc, input, label, title } from 'framer-motion/client';
import React, { createContext, useState, useEffect, useContext } from 'react';

// Traducciones globales
const translations = {
    es: {
        loading: 'Cargando...',
        changeLang: 'Cambiar lenguaje:',
        options: {
            es: 'Español',
            en: 'Inglés',
            zh: 'Chino',
        },
        /* COMPONENT NAVIGATION */
        navigation_elements: {
            element_1: 'Acerca de mí',
            element_2: 'Habilidades',
            element_3: 'Habilidades Técnicas',
            element_4: '¿Qué hago ahora?',
            element_5: 'Contáctame',
        },
        /* COMPONENT HOME */
        home: {
            title: 'Hola, soy desarrollador. . .',
            btn: 'Contáctame',
        },
        /* COMPONENT ABOUT ME */
        about_me: {
            title: 'Sobre mí',
            txt: 'Soy un desarrollador enfocado últimamente en el desarrollo web y móvil. Mi principal prioridad es ofrecer un enfoque único y personalizado a los clientes, diseñando soluciones que se adapten a sus necesidades y expectativas.',
        },
        /* COMPONENT SKILLS */
        skills: {
            title: 'Habilidades',
            skill_1: {
                title: 'Pensamiento lógico',
                skill_txt: 'Capacidad para comprender la lógica de los problemas y buscar soluciones eficientes.',
            },
            skill_2: {
                title: 'Adaptabilidad',
                skill_txt: 'Facilidad para ajustarse a nuevos entornos, herramientas y requisitos del proyecto.',
            },
            skill_3: {
                title: 'Comunicación en equipo',
                skill_txt: 'Habilidad para trabajar de manera colaborativa, comprender ideas y transmitir información claramente.',
            },
            skill_4: {
                title: 'Resolución de problemas',
                skill_txt: 'Competencia para identificar errores, analizarlos con profundidad y proponer soluciones efectivas.',
            },
            skill_5: {
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
            txt: 'Actualmente, me estoy estudiando sobre la rama de ciberseguridad, ya que es una de las áreas más importantes en la industria. Estoy interesado en aprender sobre las técnicas y herramientas necesarias para mejorar mi capacidad de análisis y resolución de problemas en el campo de la seguridad de la información.'
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
        made_by: {
            title: 'Sitio web creado por:',
            txt: '@Armando Reyes',
        },
    },
    en: {
        loading: 'Loading...',
        changeLang: 'Change language:',
        options: {
            es: 'Spanish',
            en: 'English',
            zh: 'Chinese',
        },
        navigation_elements: {
            element_1: 'About Me',
            element_2: 'Skills',
            element_3: 'Technical Skills',
            element_4: 'What I Do Now',
            element_5: 'Get in Touch',
        },
        home: {
            title: 'Hi, I’m a developer. . .',
            btn: 'Get in Touch',
        },
        about_me: {
            title: 'About Me',
            txt: 'I am a developer currently focused on web and mobile development. My main priority is to provide a unique and personalized approach to clients, designing solutions tailored to their needs and expectations.',
        },
        skills: {
            title: 'Skills',
            skill_1: {
                title: 'Logical Thinking',
                skill_txt: 'Ability to understand the logic behind problems and find efficient solutions.',
            },
            skill_2: {
                title: 'Adaptability',
                skill_txt: 'Ease in adjusting to new environments, tools, and project requirements.',
            },
            skill_3: {
                title: 'Team Communication',
                skill_txt: 'Ability to collaborate effectively, understand ideas, and clearly share information.',
            },
            skill_4: {
                title: 'Problem Solving',
                skill_txt: 'Competence in identifying errors, deeply analyzing them, and proposing effective solutions.',
            },
            skill_5: {
                title: 'Time Management',
                skill_txt: 'Proper time organization to meet goals and deliver projects on time.',
            },
        },
        tech_skills: {
            title: 'Technical Skills',
            txt: 'Click to see more accurately the skill level for each technology.',
            label: 'Technical Skill',
        },
        what_i_do_now: {
            title: 'What I Do Now',
            txt: 'I’m currently studying cybersecurity, as it’s one of the most important fields in the industry. I’m interested in learning the techniques and tools necessary to improve my analytical and problem-solving skills in the field of information security.'
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
        made_by: {
            title: 'Website created by:',
            txt: '@Armando Reyes',
        }
        
    },
    zh: {
        loading: '加载中...',
        changeLang: '切换语言：',
        options: {
            es: '西班牙语',
            en: '英语',
            zh: '中文',
        },
        navigation_elements: {
            element_1: '关于我',
            element_2: '技能',
            element_3: '技术技能',
            element_4: '我现在在做什么',
            element_5: '联系我',
        },
        home: {
            title: '你好，我是一名开发者. . .',
            btn: '联系我',
        },
        about_me: {
            title: '关于我',
            txt: '我是一名开发者，目前专注于网页和移动开发。我的主要目标是为客户提供独特且个性化的服务，设计符合其需求和期望的解决方案。',
        },
        skills: {
            title: '技能',
            skill_1: {
                title: '逻辑思维',
                skill_txt: '理解问题的逻辑并寻找高效解决方案的能力。',
            },
            skill_2: {
                title: '适应能力',
                skill_txt: '能够适应新环境、新工具和项目需求的能力。',
            },
            skill_3: {
                title: '团队沟通',
                skill_txt: '能够有效协作、理解想法并清晰传达信息的能力。',
            },
            skill_4: {
                title: '问题解决',
                skill_txt: '识别错误、深入分析并提出有效解决方案的能力。',
            },
            skill_5: {
                title: '时间管理',
                skill_txt: '合理安排时间以实现目标并按时交付项目。',
            },
        },
        tech_skills: {
            title: '技术技能',
            txt: '点击查看每项技术的技能水平。',
            label: '技术能力'
        },
        what_i_do_now: {
            title: '我现在在做什么',
            txt: '我目前正在学习网络安全领域，因为这是行业中最重要的领域之一。我希望学习必要的技术和工具，以提高我在信息安全领域的分析和解决问题的能力。'
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
        made_by: {
            title: '网站由以下人员创建：',
            txt: '@Armando Reyes',
        }
        
    },
};



// Creamos el contexto
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('es');
    const [texts, setTexts] = useState(translations['es']);

    useEffect(() => {
        const savedLang = localStorage.getItem('language') || 'es';
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

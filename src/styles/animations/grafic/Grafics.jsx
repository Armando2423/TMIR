import React, { useState, useEffect } from 'react';
import './Grafic.css';

import { FaJsSquare, FaGithub } from "react-icons/fa"; // js & github
import { FaReact } from "react-icons/fa6"; // react
import { LiaReact } from "react-icons/lia"; // react-native
import { IoLogoNodejs } from "react-icons/io"; // nodejs
import { SiMongodb, SiTypescript } from "react-icons/si"; // mongodb & typescript
// language
import { useLanguage } from "../../../configuration/languages/GlobalLanguages";

import { Bar } from 'react-chartjs-2'; // Importar el gráfico de barras de react-chartjs-2
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'; // Importar módulos de chart.js

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


export default function Grafics() {
    const { texts } = useLanguage();
    const [desplaceBar, setDesplaceBar] = useState([]);
    const [chartOptions, setChartOptions] = useState({});

    const DATA_GRAFICS = [
        {
            id: 1,
            title: 'Javascript',
            icon: <FaJsSquare />,
            number: 8.5,
            barColor: '#fffb17',
        },
        {
            id: 2,
            title: 'TypeScript',
            icon: <SiTypescript />,
            number: 8.7,
            barColor: '#e60026',
        },
        {
            id: 2,
            title: 'React',
            icon: <FaReact />,
            number: 8.8,
            barColor: '#0066ff',
        },
        {
            id: 3,
            title: 'React Native',
            icon: <LiaReact />,
            number: 9.0,
            barColor: '#0400ff',
        },
        {
            id: 4,
            title: 'MongoDB',
            icon: <SiMongodb />,
            number: 9.0,
            barColor: '#0aee69',
        },
        {
            id: 5,
            title: 'Nodejs',
            icon: <IoLogoNodejs />,
            number: 7.1,
            barColor: '#3ff127',
        },
        {
            id: 6,
            title: 'GitHub',
            icon: <FaGithub />,
            number: 8.1,
            barColor: '#474747',
        }
    ];

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            setDesplaceBar((prevData) => {
                const nextSkill = DATA_GRAFICS[index];
                if (nextSkill) {
                    index++;
                    return [...prevData, nextSkill];
                } else {
                    clearInterval(interval);
                    return prevData;
                }
            });
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const rootStyles = () => getComputedStyle(document.body);

        const updateChartOptions = () => {
            const styles = rootStyles();

            const options = {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                    },
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                return `${tooltipItem.raw} de habilidad`;
                            }
                        }
                    },
                    legend: {
                        labels: {
                            color: styles.getPropertyValue('--black').trim()
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 10,
                        ticks: {
                            stepSize: 1,
                            color: styles.getPropertyValue('--black').trim(),
                            font: {
                                weight: 'bold',
                                size: 14
                            }
                        },
                        grid: {
                            color: styles.getPropertyValue('--black').trim(),
                            borderColor: styles.getPropertyValue('--black').trim(),
                            borderWidth: 2,
                            lineWidth: 1,
                        }
                    },
                    x: {
                        ticks: {
                            color: styles.getPropertyValue('--black').trim(),
                            font: {
                                weight: 'bold',
                                size: 14
                            }
                        },
                        grid: {
                            color: styles.getPropertyValue('--black').trim(),
                            borderColor: styles.getPropertyValue('--black').trim(),
                            borderWidth: 2,
                            lineWidth: 1,
                        }
                    }
                }
            };

            setChartOptions(options);
        };

        // Ejecutar al montar
        updateChartOptions();

        // Observador para detectar cambio en modo claro/oscuro
        const observer = new MutationObserver(() => {
            updateChartOptions();
        });

        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, []);


    const chartData = {
        labels: desplaceBar.map(skill => skill.title),
        datasets: [
            {
                label: texts.tech_skills.label,
                data: desplaceBar.map(skill => skill.number),
                backgroundColor: desplaceBar.map(skill => skill.barColor),
                borderRadius: 25,
            }
        ]
    };

    return (
        <div className="chart-container">
            {Object.keys(chartOptions).length > 0 && (
                <Bar data={chartData} options={chartOptions} />
            )}
        </div>
    );
}

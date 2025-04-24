import React, { useState, useEffect } from 'react';
import './GetInTouch.css';
// icons
import { FaUserCheck } from "react-icons/fa";

// form
import SplitText from '../../styles/animations/SplitText';
import Input from '../../styles/animations/input/Input';
import InputDescription from '../../styles/animations/inputDescription/InputDescription';
import Button from '../../styles/animations/button/Button';
import RadioBtns from '../../styles/animations/radioBtns/RadioBtns';
// language
import { useLanguage } from '../../configuration/languages/GlobalLanguages';

export default function GetInTouch() {
    const { texts } = useLanguage();

    const [inputs, setInputs] = useState({
        name: '',
        lastName: '',
        email: '',
        description: '',
        typeProyecto: ''
    });

    const [errors, setErrors] = useState({});

    const validate = (inputs, texts) => {
        const newErrors = {};

        if (!inputs.name.trim()) {
            newErrors.name = texts.get_in_touch.form.name_mensages.mensage_1;
        } else if (!/^[A-Za-z\s]+$/.test(inputs.name)) {
            newErrors.name = texts.get_in_touch.form.name_mensages.mensage_2;
        } else if (inputs.name.length > 40) {
            newErrors.name = texts.get_in_touch.form.name_mensages.mensage_3;
        }

        if (!inputs.lastName.trim()) {
            newErrors.lastName = texts.get_in_touch.form.last_name_mensages.mensage_1;
        } else if (!/^[A-Za-z\s]+$/.test(inputs.lastName)) {
            newErrors.lastName = texts.get_in_touch.form.last_name_mensages.mensage_2;
        } else if (inputs.lastName.length > 40) {
            newErrors.lastName = texts.get_in_touch.form.last_name_mensages.mensage_3;
        }

        if (!inputs.email.trim()) {
            newErrors.email = texts.get_in_touch.form.email_mensages.mensage_1;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs.email)) {
            newErrors.email = texts.get_in_touch.form.email_mensages.mensage_2;
        }

        if (!inputs.description.trim()) {
            newErrors.description = texts.get_in_touch.form.description_mensages.mensage_1;
        } else if (inputs.description.length > 100) {
            newErrors.description = texts.get_in_touch.form.description_mensages.mensage_2;
        }

        if (!inputs.typeProyecto) {
            newErrors.typeProyecto = texts.get_in_touch.form.type_proyecto_mensages.mensage_1;
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate(inputs, texts);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            fetch('https://my-cv-backend-pe81.onrender.com/api/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nombre: inputs.name,
                    apellido: inputs.lastName,
                    email: inputs.email,
                    descripcion: inputs.description,
                    typeProyecto: inputs.typeProyecto
                })
            })
                .then(response => {
                    if (!response.ok) throw new Error('Error al enviar datos');
                    return response.json();
                })
                .then(() => {
                    alert(texts.get_in_touch.form.mensage_alert_2);
                    setInputs({
                        name: '',
                        lastName: '',
                        email: '',
                        description: '',
                        typeProyecto: '',
                    });
                    setErrors({});
                })
                .catch(error => {
                    alert(texts.get_in_touch.form.mensage_alert_1);
                    console.error(error);
                });
        }
    };

    // Reactualiza errores si cambian los textos (por ejemplo, al cambiar el idioma)
    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            const updatedErrors = validate(inputs, texts);
            setErrors(updatedErrors);
        }
    }, [texts]);

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };


    return (
        <section id="get-in-touch">
            <div className="container-get-in-touch">
                <div className="container-form">
                    <div className="form-titule">
                        <SplitText
                            key={texts.get_in_touch.title}
                            text={texts.get_in_touch.title}
                            className="split-text"
                            delay={150}
                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            easing="easeOutCubic"
                            threshold={0.2}
                            rootMargin="-50px"
                            onLetterAnimationComplete={handleAnimationComplete}
                        />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="inputs-form">
                            <div className="form-input-user-last-name">
                                <Input
                                    label={texts.get_in_touch.inputs.input_name.label}
                                    type="text"
                                    placeholder={texts.get_in_touch.inputs.input_name.placeholder}
                                    name="name"
                                    onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
                                    value={inputs.name}
                                    error={errors.name}
                                />
                                <Input
                                    label={texts.get_in_touch.inputs.input_last_name.label}
                                    type="text"
                                    placeholder={texts.get_in_touch.inputs.input_last_name.placeholder}
                                    name="lastName"
                                    value={inputs.lastName}
                                    onChange={(e) => setInputs({ ...inputs, lastName: e.target.value })}
                                    error={errors.lastName}
                                />
                            </div>

                            <Input
                                label={texts.get_in_touch.inputs.input_email.label}
                                type="email"
                                placeholder={texts.get_in_touch.inputs.input_email.placeholder}
                                name="email"
                                value={inputs.email}
                                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                                error={errors.email}
                            />

                            <InputDescription
                                label={texts.get_in_touch.inputs.input_description.label}
                                placeholder={texts.get_in_touch.inputs.input_description.placeholder}
                                name="description"
                                value={inputs.description}
                                onChange={(e) => setInputs({ ...inputs, description: e.target.value })}
                                error={errors.description}
                            />
                            <div className="container-txt">
                                <label className="hint-text">
                                    {texts.get_in_touch.txt_lbl}
                                </label>
                            </div>
                            <RadioBtns
                                options={[
                                    { label: texts.get_in_touch.radio_btns.btn_staff.label, value: 'personal' },
                                    { label: texts.get_in_touch.radio_btns.btn_company.label, value: 'empresa' },
                                ]}
                                selected={inputs.typeProyecto}
                                onChange={(value) => setInputs({ ...inputs, typeProyecto: value })}
                                error={errors.typeProyecto}
                            />


                            {/* <RadioBtns
                                select_1={texts.get_in_touch.radio_btns.btn_staff.label}
                                select_2={texts.get_in_touch.radio_btns.btn_company.label}
                                onChange={(value) => setInputs({ ...inputs, single: value })}
                                error={errors.single}
                            /> */}


                            <div className="form-button">
                                <Button
                                    onClick={handleSubmit}
                                    text={texts.get_in_touch.btn_txt}
                                />
                            </div>
                            <div className="container-txt">
                                <label className="hint-text">
                                    {texts.get_in_touch.hint_txt}
                                </label>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
};


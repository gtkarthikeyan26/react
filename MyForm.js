import React, { useState } from 'react';
import axios from 'axios';

export default function Create() {
    const [form, setForm] = useState({
        student_id: '',
        name: '',
        Class: '', // Keeping as Class, but consider renaming to className or similar
        teacher_id: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const submitHandler = (event) => {
        event.preventDefault();

        // Use the state directly instead of event.target
        const { student_id, name, Class, teacher_id } = form;

        axios
            .post('https://backend-0a7f.onrender.com/v2/student', {
                student_id,
                name,
                Class,
                teacher_id,
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor='student_id'>StudentID:</label>
                <input
                    type='text'
                    id='student_id'
                    name='student_id'
                    value={form.student_id}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='name'>Name:</label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='Class'>Class:</label>
                <input
                    type='text'
                    id='Class'
                    name='Class' // Ensure this matches your state key exactly
                    value={form.Class}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='teacher_id'>TeacherId:</label>
                <input
                    type='text'
                    id='teacher_id'
                    name='teacher_id'
                    value={form.teacher_id}
                    onChange={handleChange}
                />
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
}
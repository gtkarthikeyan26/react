import React, { useState } from 'react'
import './StudentPage.css'

export const StudentForm = () => {
	const [student, setStudent] = useState({
		studentId: '',
		name: '',
		class: '',
		teacherId: '',
	})

	const handleChange = (e) => {
		const { name, value } = e.target
		setStudent({ ...student, [name]: value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log(student)
		// axios.post('your_api_endpoint_here', student)
		//   .then((response) => {
		//     console.log(response.data); // handle success response
		//     // Optionally, you can reset the form
		//     setStudent({
		//       id: '',
		//       name: '',
		//       class: '',
		//       teacherId: ''
		//     });
		//   })
		//   .catch((error) => {
		//     console.error('Error:', error); // handle error
		//   });
		try {
			//http://localhost:5000/v2/student
			const response = await fetch('https://backend-0a7f.onrender.com/v2/student', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(student),
				//mode: 'no-cors',
			})
			console.log(response)
			if(response.status === 200){
				alert('Student Added')
			}
			else if(response.status === 400){
				alert('Student Already exist')
			}
		} catch (error) {
			console.log('Submitting', error)
		}
	}

	return (
		<div className='student-form-container'>
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label htmlFor='studentId'>Student ID:</label>
					<input
						type='text'
						id='studentId'
						name='studentId'
						value={student.studentId}
						onChange={handleChange}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='name'>Name:</label>
					<input
						type='text'
						id='name'
						name='name'
						value={student.name}
						onChange={handleChange}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='class'>Class:</label>
					<input
						type='text'
						id='class'
						name='class'
						value={student.class}
						onChange={handleChange}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='teacherId'>Teacher ID:</label>
					<input
						type='text'
						id='teacherId'
						name='teacherId'
						value={student.teacherId}
						onChange={handleChange}
					/>
				</div>
				<button type='submit'>Submit</button>
			</form>
		</div>
	)
}

export default StudentForm

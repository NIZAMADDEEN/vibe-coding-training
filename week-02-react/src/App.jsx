
import { useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [department, setDepartment] = useState('')
  const [level, setLevel] = useState('')
  const [students, setStudents] = useState([])
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!name.trim() || !email.trim() || !department || !level) {
      setMessage('Please complete all fields.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage('Please enter a valid email address.')
      return
    }

    const newStudent = {
      id: Date.now(),
      name,
      email,
      department,
      level
    }

    setStudents(previous => [...previous, newStudent])

    setName('')
    setEmail('')
    setDepartment('')
    setLevel('')
    setMessage('Student registered successfully!')
  }

  function removeStudent(id) {
    setStudents(previous =>
      previous.filter(student => student.id !== id)
    )
  }

  return (
    <div>
      <h1>Student Registration System</h1>

      <h2>Register New Student</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <select
          value={department}
          onChange={event => setDepartment(event.target.value)}
        >
          <option value="">Select Department</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Software Engineering">
            Software Engineering
          </option>
          <option value="Information Technology">
            Information Technology
          </option>
        </select>

        <select
          value={level}
          onChange={event => setLevel(event.target.value)}
        >
          <option value="">Select Level</option>
          <option value="100 Level">100 Level</option>
          <option value="200 Level">200 Level</option>
          <option value="300 Level">300 Level</option>
          <option value="400 Level">400 Level</option>
        </select>

        <button type="submit">Register Student</button>
      </form>

      {message && <p>{message}</p>}

      <h2>Registered Students ({students.length})</h2>

      {students.length === 0 ? (
        <p>No students registered yet.</p>
      ) : (
        students.map(student => (
          <div key={student.id}>
            <h3>{student.name}</h3>
            <p>Email: {student.email}</p>
            <p>Department: {student.department}</p>
            <p>Level: {student.level}</p>

            <button onClick={() => removeStudent(student.id)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  )
}

export default App

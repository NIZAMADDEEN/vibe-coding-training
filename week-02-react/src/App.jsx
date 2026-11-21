
import { useState } from 'react'
import Header from './components/Header'
import StudentCard from './components/StudentCard'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [department, setDepartment] = useState('')
  const [level, setLevel] = useState('')
  const [search, setSearch] = useState('')
  const [students, setStudents] = useState([])
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (
      !name.trim() ||
      !email.trim() ||
      !department ||
      !level
    ) {
      setMessage('Please complete all fields.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage('Enter a valid email address.')
      return
    }

    const newStudent = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim(),
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

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="app">
      <Header />

      <main className="container">

        <section className="stats">
          <h2>Total Students: {students.length}</h2>
        </section>

        <section className="form-section">
          <h2>Register New Student</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Student Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <select
              value={department}
              onChange={e => setDepartment(e.target.value)}
            >
              <option value="">Select Department</option>
              <option value="Computer Science">
                Computer Science
              </option>
              <option value="Software Engineering">
                Software Engineering
              </option>
              <option value="Information Technology">
                Information Technology
              </option>
            </select>

            <select
              value={level}
              onChange={e => setLevel(e.target.value)}
            >
              <option value="">Select Level</option>
              <option value="100 Level">100 Level</option>
              <option value="200 Level">200 Level</option>
              <option value="300 Level">300 Level</option>
              <option value="400 Level">400 Level</option>
            </select>

            <button type="submit">
              Register Student
            </button>
          </form>

          {message && <p>{message}</p>}
        </section>

        <section className="student-section">
          <h2>Student Records</h2>

          <input
            type="search"
            placeholder="Search students by name..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Level</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map(student => (
                  <StudentCard
                    key={student.id}
                    student={student}
                    onRemove={removeStudent}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="5">
                    No students found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>

      </main>
    </div>
  )
}

export default App


import { useState } from 'react'

function App() {

  const [name, setName] = useState('')
  const [department, setDepartment] = useState('')
  const [students, setStudents] = useState([])

  function handleSubmit(event) {
    event.preventDefault()

    if (!name.trim() || !department.trim()) {
      return
    }

    const newStudent = {
      id: Date.now(),
      name: name,
      department: department
    }

    setStudents([...students, newStudent])

    setName('')
    setDepartment('')
  }

  function removeStudent(id) {
    setStudents(students.filter(student => student.id !== id))
  }

  return (
    <div>
      <h1>Student Registration System</h1>

      <h2>Register a Student</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(event) => setDepartment(event.target.value)}
        />

        <button type="submit">Register Student</button>

      </form>

      <h2>Registered Students ({students.length})</h2>

      {students.map(student => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>{student.department}</p>

          <button onClick={() => removeStudent(student.id)}>
            Remove
          </button>
        </div>
      ))}

    </div>
  )
}

export default App

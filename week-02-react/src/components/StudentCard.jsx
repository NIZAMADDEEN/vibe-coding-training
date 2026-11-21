
function StudentCard({ student, onRemove }) {
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.email}</td>
      <td>{student.department}</td>
      <td>{student.level}</td>
      <td>
        <button onClick={() => onRemove(student.id)}>
          Remove
        </button>
      </td>
    </tr>
  )
}

export default StudentCard

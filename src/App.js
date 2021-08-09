import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react"


function App() {

  const [tasks, setTasks ] = useState(
    [
        {
            id: 1,
            text:  "Doctor's appointmen",
            day: 'Feb 8',
            reminder: true,
        },
        {
            id: 2,
            text:  "Neelofar",
            day: 'Feb 8',
            reminder: true,
        },
        {
          id: 3,
          text:  "Shanaz",
          day: 'Feb 4',
          reminder: false,
      },
      {
        id: 4,
        text:  "Fauzia",
        day: 'Feb 5',
        reminder: false,
    }

    ]
)

//Delete task

const deleteTask = (id) => {
  setTasks(tasks.filter( (task) => task.id !==id))
}

//Toggle Reminder

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id ===id ? { ...task, reminder: !task.reminder} : task
   )
   )
}

return (
    <div className="container">
  <Header />
  {tasks.length > 0 ? <Tasks tasks= {tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks To show'}

    </div>
  );
}

export default App;

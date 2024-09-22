import { useEffect, useState } from 'react'
import { type DragEndEvent, DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor, useSensors, } from '@dnd-kit/core'
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable'
import axios from "axios"

import { BASE_URL } from "../utils/config"
import Column from './components/Column'
import './App.css'


function App() {
  const [tasks, setTasks] = useState<TTask[]>([]);

  // Fetch tasks
  useEffect(() => {
    (async () => {
      const data: TTask[] = await axios.get(`${BASE_URL}/get-posts`)
        .then(data => data.data)
        .catch(err => console.error("Error", err))

      setTasks(data);
    })()
  }, [])

  const getTaskPosition = (id: unknown) => {
    return tasks.findIndex(task => task.id === id)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id === over?.id) return;

    setTasks(prev => {
      const originalPosition = getTaskPosition(active.id);
      const newPosition = getTaskPosition(over?.id);

      return arrayMove(prev, originalPosition, newPosition);
    })
  }


  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )


  return (
    <section>
      <h1 className='text-xl'>My Tasks</h1>
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <SortableContext
          items={tasks}
          strategy={verticalListSortingStrategy}
        >
          <div className='space-y-4'>
            {tasks.map((task) => (
              <Column {...task} key={task.id} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </section>
  )
}

export default App

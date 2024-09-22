import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Column = ({ id, title }: TTask) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="flex items-center gap-10 bg-zinc-200 w-72 p-4 rounded-lg touch-none"
    >
      <p>{id}</p>
      <h3>{title}</h3>
    </div>
  )
}

export default Column
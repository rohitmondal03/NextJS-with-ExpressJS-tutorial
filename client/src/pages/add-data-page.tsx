import { useState } from "react"
import { submitData } from "../functions/submit-data"

function AddDataPage() {
  const [data, setData]= useState({
    name: "",
    email: "",
  })

  return (
    <div className="p-10 space-y-8">
      <h1 className="text-xl font-semibold">
        Add data to your database here !!
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitData(data)
        }}
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="enter name.."
          name="name"
          className="border-2 p-2"
          value={data.name}
          onChange={e=> setData(prev => ({
            ...prev,
            name: e.target.value
          }))}
        />
        <input
          type="email"
          placeholder="enter email.."
          name="email"
          className="border-2 p-2"
          value={data.email}
          onChange={e=> setData(prev => ({
            ...prev,
            email: e.target.value
          }))}
        />
        <button
          type="submit"
          className="bg-black p-2 text-white"
        >
          Send data
        </button>
      </form>
    </div>
  )
}

export default AddDataPage
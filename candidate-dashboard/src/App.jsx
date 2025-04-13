import Header from "./component/Header"
import { useState } from "react"
function App() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    linkedin: '',
    github: '',
    experience: '',
    techStack: []
  })
  const [currentTech, setCurrentTech] = useState('')
  
  const handleChange = (e) =>{
    const {name,value} = e.target
    setFormData(prev=>({...prev,[name]:value}))
    console.log(e.target)
  }

  const HandleAddTech = () =>{
    if(currentTech.trim() && !formData.techStack.includes(currentTech.trim())){
      setFormData(prev=>({...prev,techStack: [...prev.techStack, currentTech.trim()]}))
      setCurrentTech('')
    }
  }

  const HandleSubmit = (e) =>{
    e.preventDefault()
    if(formData.name && formData.role && formData.github && formData.experience){
      console.log(formData)
      // Reset form
      setFormData({
        name: '',
        role: '',
        linkedin: '',
        github: '',
        experience: '',
        techStack: []
      })
    }
  }

  return (
    <>
      <Header/>
      <main className="grid grid-cols-1 lg:grid-cols-7 gap-4 p-4 text-sm">
        <section className="lg:col-span-2 bg-white p-4 rounded shadow-2xl">
            <h2 className="font-bold text-lg pb-3">ADD NEW CANDIDATE</h2>  
            <form className="flex flex-col gap-2">
              
              <div className="flex flex-col gap-1">
                <label htmlFor="candidate-name" className="font-medium">Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Candidate Name" required className="border p-2 rounded"/>
              </div>
              
              <div className="flex flex-col gap-1">
                <label htmlFor="Job-Role" className="font-medium">Job Role</label>
                <input type="text" name="role" value={formData.role} onChange={handleChange} placeholder="Frontend Developer" required className="border p-2 rounded"/>
              </div>
              
              <div className="flex flex-col gap-1">
                <label htmlFor="LinkedIn" className="font-medium">LinkedIn</label>
                <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="LinkedIn URL" className="border p-2 rounded"/>
              </div>
              
              <div className="flex flex-col gap-1">
                <label htmlFor="GitHub" className="font-medium">GitHub</label>
                <input type="url" name="github" required value={formData.github} onChange={handleChange} placeholder="GitHub URL" className="border p-2 rounded"/>
              </div>
              
              <div className="flex flex-col gap-1">
                <label htmlFor="Experience" className="font-medium">Experience Level</label>
                <select name="experience" value={formData.experience} onChange={handleChange} className="border p-2 rounded bg-[#ddd9d9]" required> 
                  <option value="">Select Experience Level</option>
                  <option value="junior">Junior</option>
                  <option value="mid">Mid</option>
                  <option value="senior">Senior</option>
                </select> 
              </div>
              
              <div className="flex flex-col gap-1"> 
                <label htmlFor="TechStack" className="font-medium">Tech Stack</label>
                <div className="grid grid-cols-5 md:grid-cols-7 gap-2">
                   <input type="text" value={currentTech} onChange={(e)=>setCurrentTech(e.target.value)} placeholder="React, Node.js, etc." className="border col-span-4 md:col-span-6 lg:col-span-5 p-2 rounded"/>
                   <button type="button" onClick={HandleAddTech} className=" bg-blue-500 text-white px-2 p-2 md:col-span-1 lg:col-span-2 rounded">Add </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.techStack.map((stack,index)=>(
                      <span key={index} className="bg-[#ddd9d9] text-[#035003] px-2 py-1 rounded-full">
                        {stack}
                        <button type="button" onClick={()=>setFormData(prev=>({...prev,techStack: prev.techStack.filter((_,i)=>i!==index)}))} className="text-red-500 ml-2">x</button>
                      </span>
                    ))
                  }
                </div>
              </div>
              <button type="submit" onSubmit={HandleSubmit} className="bg-[#035003] text-white px-4 py-2 rounded">Add Candidate</button>
            </form> 
        </section>
        <section>

        </section>
      </main>
    </>
  )
}

export default App

import Header from "./component/Header"
function App() {
 

  return (
    <>
      <Header/>
      <main className="grid grid-cols-1 lg:grid-cols-7 gap-4 p-4 text-sm">
        <section className="lg:col-span-2 bg-white p-4 rounded shadow-2xl">
            <h2 className="font-bold text-lg pb-3">ADD NEW CANDIDATE</h2>  
            <form className="flex flex-col gap-2">
              
              <div className="flex flex-col gap-1">
                <label htmlFor="candidate-name" className="font-medium">Full Name</label>
                <input type="text" placeholder="Candidate Name" required className="border p-2 rounded"/>
              </div>
              
              <div className="flex flex-col gap-1">
                <label htmlFor="Job-Role" className="font-medium">Job Role</label>
                <input type="text" placeholder="Frontend Developer" required className="border p-2 rounded"/>
              </div>
              
              <div className="flex flex-col gap-1">
                <label htmlFor="LinkedIn" className="font-medium">LinkedIn</label>
                <input type="url" placeholder="LinkedIn URL" className="border p-2 rounded"/>
              </div>
              
              <div className="flex flex-col gap-1">
                <label htmlFor="GitHub" className="font-medium">GitHub</label>
                <input type="url" placeholder="GitHub URL" className="border p-2 rounded"/>
              </div>
              
              <div className="flex flex-col gap-1">
                <label htmlFor="Experience" className="font-medium">Experience Level</label>
                <select className="border p-2 rounded bg-[#ddd9d9]" required> 
                  <option value="">Select Experience Level</option>
                  <option value="junior">Junior</option>
                  <option value="mid">Mid</option>
                  <option value="senior">Senior</option>
                </select> 
              </div>
              
              <div className="flex flex-col gap-1"> 
                <label htmlFor="TechStack" className="font-medium">Tech Stack</label>
                <div className="grid grid-cols-5 md:grid-cols-7 gap-2">
                   <input type="text" placeholder="React, Node.js, etc." required className="border col-span-4 md:col-span-6 lg:col-span-5 p-2 rounded"/>
                   <button type="button" className=" bg-blue-500 text-white px-2 p-2 md:col-span-1 lg:col-span-2 rounded">Add </button>
                </div>
                
              </div>
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Add Candidate</button>
            </form> 
        </section>
        <section>

        </section>
      </main>
    </>
  )
}

export default App

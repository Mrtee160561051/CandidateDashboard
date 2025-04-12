import Header from "./component/Header"
function App() {
 

  return (
    <>
      <Header/>
      <main className="grid grid-cols-1 lg:grid-cols-7 gap-4 p-4 text-sm">
        <section className="lg:col-span-2 bg-white p-4 rounded shadow">
            <h2 className="font-bold text-lg">ADD NEW CANDIDATE</h2>  
            <form className="flex flex-col gap-3">
              
              <div className="flex flex-col gap-1">
                <label htmlFor="candidate-name">Full Name</label>
                <input type="text" placeholder="Candidate Name" className="border p-2 rounded"/>
              </div>
              
              <div className="flex flex-col gap-1">
                <label htmlFor="Job-Role">Job Role</label>
                <input type="text" placeholder="Frontend Developer" className="border p-2 rounded"/>
              </div>
              
              <div className="flex flex-col gap-1">
                <label htmlFor="LinkedIn">LinkedIn</label>
                <input type="text" placeholder="LinkedIn URL" className="border p-2 rounded"/>
              </div>
              
              <div className="flex flex-col gap-1">
                <label htmlFor="GitHub">GitHub</label>
                <input type="text" placeholder="GitHub URL" className="border p-2 rounded"/>
              </div>
              
              <div className="flex flex-col gap-1">
                <label htmlFor="Experience">Experience Level</label>
                <select className="border p-2 rounded"> 
                  <option value="">Select Experience Level</option>
                  <option value="junior">Junior</option>
                  <option value="mid">Mid</option>
                  <option value="senior">Senior</option>
                </select> 
              </div>
              
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Candidate</button>
            </form> 
        </section>
        <section>

        </section>
      </main>
    </>
  )
}

export default App

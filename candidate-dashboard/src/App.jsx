import Header from "./component/Header"
import Form from "./component/Form"
function App() {
  

  return (
    <>
      <Header/>
      <main className="grid grid-cols-1 lg:grid-cols-7 gap-4 p-4 text-sm">
        <Form/>
        <section className="lg:col-span-5 bg-white p-4 rounded shadow-2xl">
             <article>
                {/* Score */}
                <div className="flex flex-row justify-between gap-2 items-center border-b-2 pb-2">
                  <h2 className="font-medium text-lg ">Candidate Dashboard</h2>
                  <p className="text-nowrap">Total Candidates: 0</p>
                </div>

                {/* Filters */}
                <div className="flex flex-row justify-between flex-wrap md:flex-nowrap gap-2 items-center pb-2 pt-2">
                  <div>
                    <label htmlFor="name" className="font-medium">Filter by Name:</label>
                    <input type="text" name="name" placeholder="e.g John Doe" className="border p-2 rounded w-full border-neutral-200"/>
                  </div>
                  <div>
                    <label htmlFor="filter" className="font-medium">Filter by Role:</label>
                    <input type="text" name="filter" placeholder="e.g Backend" className="border p-2 rounded w-full border-neutral-200"/>
                  </div>
                  <div>
                    <label htmlFor="experience" className="font-medium">Filter by Experience:</label>
                    <select name="experience" className="border p-2 rounded w-full bg-[#ddd9d9] border-neutral-200">
                      <option value="">Select Experience Level</option>
                      <option value="junior">Junior</option>
                      <option value="mid">Mid</option>
                      <option value="senior">Senior</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="tech" className="font-medium">Filter by Tech:</label>
                    <input type="text" name="tech" placeholder="e.g React" className="border p-2 rounded w-full border-neutral-200"/>
                  </div>
                </div>
             </article>
              
              {/* Summary */}
             <article className="flex flex-col gap-2">

             </article>
              
              {/* Candidates table*/}
             <article> 
             
            </article>
        </section>
      </main>
    </>
  )
}

export default App

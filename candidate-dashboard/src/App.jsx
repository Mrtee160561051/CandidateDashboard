import Header from "./component/Header"
import Form from "./component/Form"
function App() {
  

  return (
    <>
      <Header/>
      <main className="grid grid-cols-1 lg:grid-cols-7 gap-4 p-4 text-sm">
        <Form/>
        <section>

        </section>
      </main>
    </>
  )
}

export default App

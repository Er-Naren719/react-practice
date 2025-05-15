import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-500 text-white font-bold p-4 rounded-lg text-center'>Tailwind</h1>
      <div className='flex justify-between gap-x-2 items-center'>
        <Card username={"Naren"} />
        <Card username={"Radhika"} />
        <Card username={"Vardhaman"} />
      </div>
    </>
  )
}

export default App

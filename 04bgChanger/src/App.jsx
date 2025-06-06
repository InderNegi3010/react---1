import { useState } from 'react'


function App() {

  const [color, setColor] = useState('olive')

  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      
      <div className=' fixed flex justify-center flex-wrap bottom-12 inset-x-0 px-2 items-center h-screen  ' >

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white  px-3 py-1 rounded-3xl'>

          <button
            className=' outline-none px-4 rounded-full shadow-lg bg-red-500 text-white px-4 py-1 '
            onClick={() => setColor('red')}
            style={{backgroundColor: 'red'}}
          >
            Red
          </button>
          <button
            className=' outline-none px-4 py-1 rounded-full shadow-lg bg-green-500 text-white px-4 py-2 '
            onClick={() => setColor('green')}
             style={{backgroundColor: 'green'}}
          >
            Green
          </button>
          <button
            className=' outline-none px-4 py-1 rounded-full shadow-lg  bg-blue-500 text-white px-4 py-2 '
            onClick={() => setColor('blue')}
             style={{backgroundColor: 'blue'}}
          >
            Blue
          </button>

          <button
            className=' outline-none px-4 py-1 rounded-full shadow-lg bg-olive-500 text-white px-4 py-2 '
            onClick={() => setColor('olive')}
             style={{backgroundColor: 'olive'}}
          >
            Olive
          </button>

          <button
            className=' outline-none px-4 py-1 rounded-full shadow-lg bg-gray-500 text-white px-4 py-2 '
            onClick={() => setColor('gray')}
             style={{backgroundColor: 'gray'}}
          >
            Gray
          </button>

          <button
            className=' outline-none px-4 py-1 rounded-full shadow-lg bg-yellow-500 text-black px-4 py-2 '
            onClick={() => setColor('yellow')}
             style={{backgroundColor: 'yellow'}}
          >
            Yellow
          </button>

          <button
            className=' outline-none px-4 py-1 rounded-full shadow-lg bg-pink-500 text-white px-4 py-2 '
            onClick={() => setColor('pink')}
             style={{backgroundColor: 'pink'}}
          >
            Pink
          </button>

          <button
            className=' outline-none px-4 py-1 rounded-full shadow-lg bg-purple-500 text-white px-4 py-2 '
            onClick={() => setColor('purple')}
             style={{backgroundColor: 'purple'}}
          >
            Purple
          </button>

          <button
            className=' outline-none px-4 py-1 rounded-full shadow-lg bg-lavender-500 text-black px-4 py-2 '
            onClick={() => setColor('lavender')}
             style={{backgroundColor: 'lavender'}}
          >
            Lavender
          </button>

          <button
            className=' outline-none px-4 py-1 rounded-full shadow-lg bg-white-500 text-black px-4 py-2 '
            onClick={() => setColor('white')}
             style={{backgroundColor: 'white'}}
          >
            White
          </button>

          <button
            className='outline-none px-4 py-1 rounded-full shadow-lg bg-black-700 text-white px-4 py-2 '
            onClick={() => setColor('black')}
             style={{backgroundColor: 'black'}}
          >
            Black
          </button>

        </div>

      </div>
    </div>
    </>
  )
}

export default App

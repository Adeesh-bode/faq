import questions from './data.js';
import Question from './question.jsx';
import './index.css';

export default function App() {
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-6 bg-blue-300'>
      <h1 className='text-3xl '>FAQ</h1>
      <ul className=' flex flex-col justify-start items-start gap-5 w-1/2 h-2/3 p-6 overflow-auto bg-white' >
      {
        questions.map((item)=><Question id={ item.id } title={ item.title } info={ item.info } />)
      }    
      </ul>
    </div>
  )
}
import React from 'react'
import Slider from './Slider'
import Qsomme from './Qsomme'
import Bar from './Bar'
import Services from './Services'

const Home = () => {
  return (
    <div>
      <Slider />
      <Qsomme />
      <Bar />
      <Services/>

      <p className='content'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
        cupiditate voluptatem nihil repellendus id nemo nam facilis culpa ex
        tempora. Similique eius suscipit officiis voluptas a dicta! Quas, quasi?
        Corrupti?
      </p>
    </div>
  )
}

export default Home
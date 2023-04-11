import React from 'react'
import a from '../image/im.gif'
const Qsomme = () => {
  return (
    <div className='section-center qsom '>   
      <div className='qsom-container'> 
        <article className='fits-para'>
          <h5>volkeno</h5>
          <h1>Qui sommes nous?</h1>
          <div className='ligne'></div>
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti adipisci a, pariatur aliquam odio doloribus perferendis blanditiis quod voluptas totam natus illum provident amet quis impedit aut consequatur, veniam velit iste ipsam eveniet cumque numquam! Dignissimos ex nobis id fugit eos inventore, cum porro cupiditate iusto quae nam officiis nemo!
          </p>
        </article>
        <article>
         <img src={a} alt="photo-gif"  className='image-qsom' />
        </article>
      </div>
    </div>
  )
}

export default Qsomme
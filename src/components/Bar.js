import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const Bar = () => {
  const [count, setCount] = useState(false)
  return (
    <section className='section-center bar-content'>
      <ScrollTrigger
        onEnter={() => setCount(true)}
        onExit={() => setCount(false)}
      >
        <div className='pro-bar'>
          <div className='bar bar-1'>

            <h1>
              {count && (
                <CountUp start={0} end={2320} duration={20} delay={0} />
              )}
              +
            </h1>
            <span>Projets</span>
          </div>

          <div className='bar bar-2'>
            <h1>
              {count && (
                <CountUp start={0} end={2320} duration={20} delay={0} />
              )}
              +
            </h1>
            <span>Projets</span>
          </div>
          <div className='bar bar-3'>
            <h1>
              {count && (
                <CountUp start={0} end={2320} duration={20} delay={0} />
              )}
              +
            </h1>
            <span>Projets</span>
          </div>
          <div className='bar bar-4'>
            <h1>
              {count && (
                <CountUp start={0} end={2320} duration={20} delay={0} />
              )}
              +
            </h1>
            <span>Projets</span>
          </div>
        </div>
      </ScrollTrigger>
    </section>
  )
}


export default Bar

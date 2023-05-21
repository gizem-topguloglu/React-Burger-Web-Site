import React from 'react'


function About() {
  const imageUrl = "https://c.ndtvimg.com/2022-06/gp4k2jro_burgers_625x300_20_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350?im=FaceCrop,algorithm=dnn,width=1200,height=886"
  return (
    <div className='about'>
        <div className='aboutTop'
         style={{backgroundImage: `url(${imageUrl})`}}>
      
        </div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae gravida ante, quis fermentum velit. Aliquam erat volutpat. Integer tempor, dui in scelerisque commodo, ex nisi mollis augue, id iaculis massa ipsum ut nisl. Nam blandit dapibus pulvinar. Phasellus eu dignissim turpis. Nullam aliquam eleifend risus sit amet sagittis.</p>
        </div>
    </div>
  )
}

export default About
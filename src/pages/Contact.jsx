import React from 'react'

function Contact() {
  const imageUrl = "https://i4.hurimg.com/i/hurriyet/75/750x422/5e79be0d7152d817f09823cf.jpg"
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage: `url(${imageUrl})`}}></div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae gravida ante, quis fermentum velit. Aliquam erat volutpat. Integer tempor, dui in scelerisque commodo, ex nisi mollis augue, id iaculis massa ipsum ut nisl. Nam blandit dapibus pulvinar. Phasellus eu dignissim turpis. Nullam aliquam eleifend risus sit amet sagittis. Ut orci ex, tincidunt ut iaculis consequat, feugiat id erat. Donec quis nisl semper, fringilla nibh sed, pharetra lectus. Sed placerat posuere lectus, at bibendum purus aliquam ac. Quisque quis lectus et velit lobortis scelerisque non in ligula. Sed a eros ligula. Cras arcu velit, hendrerit at fermentum ut, iaculis in ex. Sed in felis sed felis viverra tristique. Integer posuere nulla id turpis tempor, eu scelerisque dui euismod.</p>
        </div>
    </div>
  )
}

export default Contact
import React from 'react'

const Blog = () => {
  return (
    <div className='blog' style={{
      background: '#201919',
      width: '100vw',
      height: '100vh',
      position: 'absolute',
      top: '0',
      bottom: '0',
      right: '0',
      left: '0',
      zIndex: '-1',
      display: 'flex',
      flexDirection: 'column',  
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <p style={{ fontSize: '2rem'}}>Coming Soon...</p>
      <img src={'https://i.pinimg.com/originals/de/32/d6/de32d6f4a601b278c99fd36347dc0dbe.gif'} alt="" />
    </div>
  )
}

export default Blog
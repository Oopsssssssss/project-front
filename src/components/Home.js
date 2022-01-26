import React from 'react'
import '../Home.scss'
const Home = () => {
  return (
    <>
      <div className='title'>
        <h1>Socket to Me</h1>
      </div>
      <div className='description'>
        <h2>Revolutionary  idea</h2>
        <h2>Unique + texting + different</h2>
        <h2>And</h2>
        <h2>Socket</h2>
      </div>
      <div className='idea1'>
        <img className='Picture1' src={require('../img/Texting 1.png').default}/>
      </div>
      <div className='img-description'>
        <h3 className='Title'>Unique Socket Experience</h3>
        <p className='TitleDescription'>With Socket Message you will discover a unique Experience,<br></br> that is design to enjoy and fulfill the user interaction.</p>
      </div>
      <div className='idea2'>
        <img className='Picture2' src={require('../img/Texting 3.jpeg').default}/>
      </div>
      <div className='img2-description'>
        <h3 className='Title'>Texting Socket </h3>
        <p className='TitleDescription'>With Unique texting Experience,<br></br> like never before, meet people and make friend in the way.</p>
      </div>
      <div className='idea3'>
        <img className='Picture3' src={require('../img/Texting 4.jpeg').default} />
      </div>
      <div className='img3-description'>
        <h3 className='Title'>Different From Competition</h3>
        <p className='TitleDescription'>Thats correct, different from competition,<br></br> unique socket, unique user, unique you.</p>
      </div>
      <div className='idea4'>
        <img className='Picture4' src={require('../img/Texting 6.webp').default}/>
      </div>
      <div className='img4-description'>
        <h3 className='Title'>iPhone Support</h3>
        <p className='TitleDescription'>Support to the most popular line up, that is correct<br></br> iphone will support Socket app, so not need to worry just<br></br> sit down and socket. </p>
      </div>
      <div className='idea5'>
        <img className='Picture5' src={require('../img/Texting 5.jpeg').default}/>
      </div>
      <div className='img5-description'>
        <h3 className='Title'>Android Support</h3>
        <p className='TitleDescription'>And Why not?, We also decide <br></br> to bring Android support, because we love you.</p>
      </div>
      < div className='idea6'>
        <img className='Cool1' src={require('../img/Message4.png').default}/>
      </div>
      <div className='idea7'>
        <img className='Cool2' src={require('../img/Message2.png').default}/>
      </div>
      <div className='idea8'>
        <img className='Cool3' src={require('../img/Message3.png').default} />
      </div>
      <div className='idea9'>
        <img className='Cool4' src={require('../img/Message6.png').default} />
      </div>
    </>
  )
}

export default Home

import React, { useEffect, useRef, useState } from 'react'
import {Container,Row ,Col,Stack} from 'react-bootstrap'
import strwberry from '../img/strwberry-delights.jpg'
import berries from '../img/berries.png'
import dite from '../img/on-diet.png'
const Blogs = () => {
    const imgRef= useRef(null)
    const [height,setHeight] = useState(0)
  


    useEffect(()=>{
    //     console.log(imgRef.current.offsetWidth)
    
    //   setHeight(imgRef.current.offsetWidth)

    //   window.onresize = function(){
    //     setHeight(imgRef.current.offsetWidth)
    //   }
    },[])
  return (
    <div>
    <h1 className='p-2 text-primary text-center m-0 '>BLOG</h1>
    <Container>
     <Row className='my-5 p-2'>
     <Col md={9} >
         <Row className='mt-4 p-2'>
            <Col md={3} className="text-center mb-3">
             <img ref={imgRef} src={strwberry} width={150} height={150} style={{borderRadius:"50%"}}/>
            </Col>
            <Col md={9}>
              <h5 className='p-1 text-danger m-0'>NEW CHILLS FOR SUMMER</h5>
              <span className='text-muted'>By Admin on November 28, 2023</span>
              <p className='text-secondary p-1 mt-4'>
              This website template has been designed by Free
               Website Templates for you, for free. You can 
               replace all this text with your own text. Want
                an easier solution for a Free Website?
                 Head straight to Wix and immediately start customizing your 
                 website! Wix is an online website builder with a simple drag & drop
                  interface, meaning you do the work online and instantly publish
                   to the web. Nothing to download, nothing to upload. All Wix
                    templates are fully customizable and free to use. Just pick 
                    one you like, click Edit
              , and enter the online editor. Change, add, and remove items as you like.
              
              </p>

              <button className='btn btn-outline-primary'>READ MORE</button>
            </Col>
         </Row>

    
         <Row className='mt-4 p-2'>
            <Col md={3} className="text-center mb-3">
             <img ref={imgRef} src={berries} width={150} height={150} style={{borderRadius:"50%"}}/>
            </Col>
            <Col md={9}>
              <h5 className='p-1 text-danger m-0'>NEW CHILLS FOR SUMMER</h5>
              <span className='text-muted'>By Admin on November 28, 2023</span>
              <p className='text-secondary p-1 mt-4'>
              This website template has been designed by Free
               Website Templates for you, for free. You can 
               replace all this text with your own text. Want
                an easier solution for a Free Website?
                 Head straight to Wix and immediately start customizing your 
                 website! Wix is an online website builder with a simple drag & drop
                  interface, meaning you do the work online and instantly publish
                   to the web. Nothing to download, nothing to upload. All Wix
                    templates are fully customizable and free to use. Just pick 
                    one you like, click Edit
              , and enter the online editor. Change, add, and remove items as you like.
              
              </p>

              <button className='btn btn-outline-primary'>READ MORE</button>
            </Col>
         </Row>

    
     </Col>

     <Col md={3} className="p-2 bg-light">
     <Stack gap={3} >
     <h5 className='text-center p-1 text-danger'>Recent Posts</h5>
   <div className='text-center' >
   <img ref={imgRef} src={dite} width={150} height={150} style={{borderRadius:"50%"}}/> 
   </div>   

  <div>
   <h5 className='m-0 text-center text-danger'>ON THE DIET</h5>
   <span className='d-block m-0 text-center'>By Admin on may 28,2022</span>
   </div>
   <p className='p-1 text-secondary text-center'>
   This is just a place holder, so you can see what the site would look like.
   </p>
<button className='btn btn-outline-primary'>READ MORE</button>
     </Stack>

     </Col>
     </Row>
    </Container>
    
    </div>
  )
}

export default Blogs
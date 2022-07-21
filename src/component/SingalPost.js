import React from 'react'
import {Row,Col,Stack,Container,Form ,Button} from 'react-bootstrap'
import strwberry from '../img/strwberry-delights.jpg'
import dite from '../img/on-diet.png'
const SingalPost = () => {
  return (
    <div>
    <h1 className='p-2 text-primary text-center m-0 '>Singal Post</h1>

    <Container>
    <Row className='p-2 my-5'>
     <Col md={8} className="mb-3 p-1">
     <div className='col-11 m-auto'>
       <Stack gap={2}>
        <div className=''>
         <img src={strwberry} width="100%" height={300}  />
        </div>

        <div>
        <h5 className='text-danger p-1 m-0'>NEW CHILLS FOR SUMMER</h5>
        <span className='d-block m-0 text-muted'>By Admin on may 28, 2022</span>
        </div>
         <p className='p-1 text-secondary'>
         This website template has been designed by 
         omar ali Templates for you, for free. You can replace all
          this text with your own text. Want an easier solution for 
          a Free Website? Head straight to Wix and immediately 
           customizing your website! Wix is an online website builder 
           with a simple drag & drop interface, meaning you do the work
            online and instantly publish to the web. Nothing to download,
             nothing to upload. All Wix templates are fully customizable and
              free to use. Just pick one you like,
          click Edit, and enter the online editor. Change, add, 
          and remove items as you like.
         </p>
       <p className='p-1 text-secondary'>
       Want an easier solution for a Free Website? Head straight
        to Wix and immediately start customizing your website! Wix is
         an online website builder with a simple drag & drop interface,
          meaning you do the work online and instantly publish to the web.
           Nothing to download, nothing to upload. All Wix templates are fully
            customizable and free to use. Just pick one you like, click Edit,
             and enter the online editor. Change, add, and remove items as you like.
              Wix also offers a ton of free design elements right inside the editor
             , like images, icons, animation files, and interactive widgets.
             Publish your Free Website in minutes!
       </p>
       <a className='btn btn-outline-primary' href='/blog'>Back To Blog</a>
       </Stack>
     </div>
     </Col>
   
     <Col md={4} className="p-2 bg-light">
     <Stack gap={3} >
     <h5 className='text-center p-1 text-danger'>Recent Posts</h5>
   <div className='text-center' >
   <img src={dite} width={150} height={150} style={{borderRadius:"50%"}}/> 
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

export default SingalPost
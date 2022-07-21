import React from 'react'
import {Row,Col,Stack,Container,Figure } from 'react-bootstrap'
import kiwi from '../img/kiwi.jpg'
import mango from '../img/mango.jpg'
import cantalop from '../img/cantaloupe.jpg'
import blackberry from '../img/blackberry.jpg'
import strwberry from '../img/strawberry.jpg'
import blueberry from '../img/blueberry.jpg'
import grapps from '../img/grapes.jpg'
import greenapple from '../img/green-apple.jpg'
import pineapple from '../img/pineapple.jpg'
const Product = () => {
  return (
    <div>
    <h1 className='p-2 text-primary text-center m-0 '>Product</h1>
    <Container>
       <Row className='mt-4'>
         <Col md={3} className="mb-2"> 
           <Stack gap={5}>
            <h3 className='p-1 text-danger '>All Time Classic</h3>
            <p className='text-muted'>This website template has been
             designed by Free Website Templates for you, for free.
             You can replace all this text with your own text.</p>
           </Stack>
         </Col>

         <Col md={3} className="mb-2">
            <Stack gap={2}>
            <img src={kiwi} width="100%" height={190} />
            <h3 className='p-1 text-danger text-center'>KIWI</h3>
            </Stack>
         </Col>

         <Col md={3} className="mb-2">
         <Stack gap={2}>
         <img src={mango} width="100%" height={190} />
         <h3 className='p-1 text-danger text-center'>MANGO</h3>
         </Stack>
      </Col>

        <Col md={3} className="mb-2">
            <Stack gap={2}>
            <img src={cantalop} width="100%" height={190} />
            <h3 className='p-1 text-danger text-center'>CANTALOUPE</h3>
            </Stack>
         </Col>
       </Row>
    
       <Row className='mt-4'>
       <Col md={3} className="mb-2"> 
         <Stack gap={5}>
          <h3 className='p-1 text-danger '>Berry Special</h3>
          <p className='text-muted'>Want an easier solution for a Free Website?
           Head straight to Wix and immediately start customizing your website!
           .</p>
         </Stack>
       </Col>

       <Col md={3} className="mb-2">
          <Stack gap={2}>
          <img src={blackberry} width="100%" height={190} />
          <h3 className='p-1 text-danger text-center'>BLACKBERRY</h3>
          </Stack>
       </Col>

       <Col md={3} className="mb-2">
       <Stack gap={2}>
       <img src={strwberry} width="100%" height={190} />
       <h3 className='p-1 text-danger text-center'>STRAWBERRY</h3>
       </Stack>
    </Col>

      <Col md={3} className="mb-2">
          <Stack gap={2}>
          <img src={blueberry} width="100%" height={190} />
          <h3 className='p-1 text-danger text-center'>BLUEBERRY</h3>
          </Stack>
       </Col>
     </Row>


     
     <Row className='mt-4'>
     <Col md={3} className="mb-2"> 
       <Stack gap={5}>
        <h3 className='p-1 text-danger '>Fruit Blast</h3>
        <p className='text-muted'>All Wix templates are fully customizable 
        and free to use. Just pick one you like, click Edit,
         and enter the online editor. Change, add, and remove items as you like.
         .</p>
       </Stack>
     </Col>

     <Col md={3} className="mb-2">
        <Stack gap={2}>
        <img src={grapps} width="100%" height={190} />
        <h3 className='p-1 text-danger text-center'>GRAPES</h3>
        </Stack>
     </Col>

     <Col md={3} className="mb-2">
     <Stack gap={2}>
     <img src={greenapple} width="100%" height={190} />
     <h3 className='p-1 text-danger text-center'>GREEN APPLE</h3>
     </Stack>
  </Col>

    <Col md={3} className="mb-2">
        <Stack gap={2}>
        <img src={pineapple} width="100%" height={190} />
        <h3 className='p-1 text-danger text-center'>PINEAPPLE</h3>
        </Stack>
     </Col>
   </Row>
    
    </Container>
    
    </div>
  )
}

export default Product
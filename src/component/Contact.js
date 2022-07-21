import React from 'react'
import {Row,Col,Stack,Container,Form ,Button} from 'react-bootstrap'
const Contact = () => {
  return (
    <div>
    <h1 className='p-2 text-primary text-center m-0 '>Contact</h1>
    <Container>
     <Row className='col-10 m-auto my-4'>
         <Col md={2} className="d-flex justify-content-center">
         <svg xmlns="http://www.w3.org/2000/svg" width="60" height="120" fill="currentColor" class="bi bi-geo-alt-fill text-danger" viewBox="0 0 16 16">
         <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
       </svg>
         </Col>
         <Col md={10} >
          <Stack>
          <h4 className='text-danger p-1'>UNIT 0123 , ABC BUILDING, BUSSINESS PARK</h4>
          <p className='p-2 text-muted '>
          This website template has been designed by omar ali, for free.
           You can replace all this text with your own text.
          </p>
          </Stack>
         </Col>
     </Row>

     <Row className='mb-5'>
       <Col md={8} className="mb-3 p-3">
          <div className='col-11'>
            <Stack gap={3}>
               <h5 className='p-1 text-danger'>INQUIRY FORM</h5>
               <Form >
               <Stack gap={2}  >
                 <Form.Control type="text" placeholder="Name" />
                 <Form.Control type="email" placeholder="Email" />
                 <Form.Control type="text" placeholder="Subject" />
                 <Form.Control as="textarea"  cols={50} rows={7} placeholder="Share your thoughts" />
                 <Button variant="primary" type="submit">
               SEND
               </Button>
               </Stack>
               </Form>
            </Stack>
          </div>
       </Col>




       <Col md={4} className="p-3 bg-light">
           <Stack gap={2} className="col-10 m-auto">
               <h5 className='text-center text-danger p-2 '>
               WE’D LOVE TO HEAR FROM YOU.
               </h5>
               <p className='text-muted tex-center p-2'>
               If you're having problems editing this website template,
                then don't hesitate to ask for help on the Forums.
               </p>
           </Stack>
       </Col>
     </Row>
    </Container>
    </div>
  )
}

export default Contact
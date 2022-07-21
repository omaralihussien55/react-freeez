import React from 'react'
import {Container} from 'react-bootstrap'
import styled from 'styled-components'
import {Row,Col,Stack} from 'react-bootstrap'
import bg_about from '../img/bg-header-about.jpg'

const Slider= styled.div `
width: 100%;
height: 50vh;
background-image:url(${bg_about}) ;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
margin:0
`
const About = () => {
  return (
    <div>
      
         <h1 className='p-2 text-primary text-center m-0 '>About</h1>
         <Slider>
         
         </Slider>
 
         <Container className='my-5'>
         <Row className=''>
          <Col md={4}  className="bg-light p-2">
              <Stack gap={2}>
              <h3 className='text-center text-danger'>BE PART OF OUR COMMUNITY</h3>
              <ul className='text-center p-2 '>
                <li className='mb-3 p-2 text-center text-muted'>If you’re experiencing</li>
                <li className='mb-3 p-2 text-center text-muted'>issues or having concerns</li>
                <li className='mb-3 p-2 text-center text-muted'>about this website</li>
                <li className='mb-3 p-2 text-center text-muted'>template, join the</li>
                <li className='mb-3 p-2 text-center text-muted'>discussion on our forum</li>
                <li className='mb-3 p-2 text-center text-muted'>the community who share</li>
                <li className='mb-3 p-2 text-center text-muted'>the same interests.</li>

              </ul>
              </Stack>
          </Col>

          <Col md={8}  className="p-2">
          <div className='ml-4'>
          <div >
            <Stack gap={2}>
              <h4 className='text-danger p-1'>WE HAVE FREE TEMPLATES FOR EVERYONE</h4>
              <p className='p-1 text-secondary'>
              Our website templates are created with inspiration, checked for quality 
              and originality and meticulously sliced and coded.
               What’s more, they’re absolutely free! You can do 
               a lot with them. You can modify them.

              You can use them to design websites for clients, 
              so long as you agree with the Terms of Use. You can even
               remove all our links if you want to.
              </p>
            </Stack>
          </div>


    
        <div >
        <Stack gap={2}>
          <h4 className='text-danger p-1'>WE HAVE MORE TEMPLATES FOR YOU</h4>
          <p className='p-1 text-secondary'>
          Looking for more templates? Just browse through all our 
          Free Website Templates. But if you can’t find any website
           templates you can use, try our Free Web Design service and
            tell us all about it. We love a good challenge!
          </p>
        </Stack>
      </div>


      <div >
      <Stack gap={2}>
        <h4 className='text-danger p-1'>TEMPLATE DETAILS</h4>
        <p className='p-1 text-secondary'>
        Our website templates are created with inspiration, checked for quality 
        and originality and meticulously sliced and coded.

        </p>
      </Stack>
    </div>


        

          
          </div>
          
          </Col>
         </Row>
         </Container>
    </div>
  )
}

export default About
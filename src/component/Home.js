import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import {Container,Row,Col,Stack} from 'react-bootstrap'
import bg_home from '../img/bg-home.jpg'
import yogurt from '../img/yogurt.jpg'

const Slider = styled.div`
width: 100%;
height: 100vh;
background-image:url(${bg_home}) ;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`
const Twist = styled.div`
background-color : #ebe7e8;
`

const Home = () => {
  return (
    <div className='home'>
         <Slider className=''>
         
         </Slider>

         <Twist className='p-2'>
             <Container>
                  <Row>
                     <Col md={6} >
                           <Stack gap={2} className="my-5">
                           <h3  className="p-1 text-secondary">NEW PRODUCT</h3>
                           <h2 className="text-danger">The Twist of Healthy Yogurt</h2>
                           <p className='text-muted'>
                           Lorem Ipsum is simply dummy text of the printing and typesetting 
                           industry. Lorem Ipsum has been the industry's standard dummy
                           </p>
                         
                           </Stack>
                     </Col>
                     <Col md={6} className="d-flex">
                         <img src={yogurt}  className="w-75 m-auto "/>
                     </Col>
                  </Row>
             </Container>
         </Twist>

         <div className='icon-home bg-white p-4'>
           <Container>



           <Row as="ul">

           <Col md={3} as="li">
              <Stack gap={2} className=" align-items-center">
                   <a href=''><svg xmlns="http://www.w3.org/2000/svg" width="60" height="120" fill="currentColor" class="bi bi-cup-fill text-primary" viewBox="0 0 16 16">
                   <path fill-rule="evenodd" d="M.11 3.187A.5.5 0 0 1 .5 3h13a.5.5 0 0 1 .488.608l-.22.991a3.001 3.001 0 0 1-1.3 5.854l-.132.59A2.5 2.5 0 0 1 9.896 13H4.104a2.5 2.5 0 0 1-2.44-1.958L.012 3.608a.5.5 0 0 1 .098-.42Zm12.574 6.288a2 2 0 0 0 .866-3.899l-.866 3.9Z"/>
                 </svg></a>
                  <h6>PRODUCTS</h6>
              </Stack>
           </Col>





           <Col md={3} as="li" >
           <Stack gap={1} className=" align-items-center">
                <a href=''>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="120" fill="currentColor" class="bi bi-hourglass-bottom text-success" viewBox="0 0 16 16">
                <path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702s.18.149.5.149.5-.15.5-.15v-.7c0-.701.478-1.236 1.011-1.492A3.5 3.5 0 0 0 11.5 3V2h-7z"/>
              </svg>
                </a>
               <h6>OUR STORY</h6>
           </Stack>
        </Col>




        <Col md={3} as="li">
        <Stack gap={1} className=" align-items-center">
             <a href=''>
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="120" fill="currentColor" class="bi bi-balloon-heart-fill text-info" viewBox="0 0 16 16">
                 <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"/>
                  </svg>
             </a>
            <h6>FLAVORS</h6>
        </Stack>
     </Col>




     <Col md={3} as="li">
     <Stack gap={1} className=" align-items-center">
          <a href=''>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="120" fill="currentColor" class="bi bi-geo-alt-fill text-danger" viewBox="0 0 16 16">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
        </svg>
          </a>
         <h6>OUR LOCATION</h6>
     </Stack>
  </Col>

           </Row>
           
           </Container>
         </div>
    </div>
  )
}

export default Home
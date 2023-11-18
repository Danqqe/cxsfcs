import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div className="MainContent">
    <MDBFooter bgColor='warning' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Сделано с помощью:</span>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Компании
              </h6>
              <p>
                Тинькофф,Сбербанк
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Основная тема</h6>
              <p>
                <a >
                  Еда
                </a>
              </p>
              <p>
                <a >
                  Рецепты
                </a>
              </p>
              <p>
                <a>
                  Блюда
                </a>
              </p>
              <p>
                <a >
                  Блог
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Помощники</h6>
              <p>
                <a>
                  Евгений Денисович
                </a>
              </p>
              <p>
                <a>
                  Бог
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Контакты</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Дом 2 Морская 24
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                panutadanil@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> +7 918 777 52 32
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> +7 918 666 42 22
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

    </MDBFooter>
    </div>
  );
}
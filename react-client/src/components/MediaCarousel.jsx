import React from 'react';
import { Accordion, Carousel, Card, Row, Col, Media } from 'react-bootstrap';

const MediaCarousel = (props) => (
  <Carousel>
    <Carousel.Item>
      <a href="https://www.cnbc.com/video/2019/09/10/alibaba-is-perfectly-well-off-as-it-transitions-analyst.html" target="_blank">
      <img src="https://image.cnbcfm.com/api/v1/image/106120420-15680781882ED2-ASB-ZacharySchwartz-090919.jpg?v=1568078188 slide&bg=20232" className="d-block w-100" alt="Alibaba is ‘perfectly well off’ as it transitions - CNBC"/>
      </a>
      <Carousel.Caption>
        <a href="https://www.cnbc.com/video/2019/09/10/alibaba-is-perfectly-well-off-as-it-transitions-analyst.html" target="_blank">
          <h3 style={{fontSize: '1.25rem'}}>RBC - Alibaba is ‘perfectly well off’</h3>
        </a>
        {/* <p>Jack Ma is stepping down as chairman of Alibaba. Zachary Schwartzman of RBC Capital Markets says Ma paved the way for good leadership in the company.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <a href="https://www.cnbc.com/video/2019/11/11/singles-day-sales-numbers-were-robust-for-alibaba-says-rbc-analyst.html" target="_blank">
      <img src="https://image.cnbcfm.com/api/v1/image/106237360-1573480463354rtx78d9l.jpg?v=1573480528 slide&bg=20232" className="d-block w-100" alt="Singles Day sales numbers were robust for Alibaba, says RBC analyst - CNBC"/>
      </a>
      <Carousel.Caption>
        <a href="https://www.cnbc.com/video/2019/11/11/singles-day-sales-numbers-were-robust-for-alibaba-says-rbc-analyst.html" target="_blank">
          <h3 style={{fontSize: '1.25rem'}}>Singles Day sales numbers were robust for Alibaba, says RBC analyst - CNBC</h3>
        </a>
        <p style={{fontSize: '1rem'}}>Zachary Schwartzman of RBC and Joel Kulina of Wedbush join “Squawk Alley” to discuss Alibaba’s dip in the market despite strong sales during Singles Day.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)

export default MediaCarousel;
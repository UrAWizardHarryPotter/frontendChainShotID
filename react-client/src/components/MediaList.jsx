import React from 'react';
import { Accordion, Card, Row, Col, Media } from 'react-bootstrap';

const MediaList = (props) => (
  <div>
    <h3>Media Links</h3>
    <ul className="list-unstyled">
      <li className="media">
        <a href="https://www.cnbc.com/video/2019/09/10/alibaba-is-perfectly-well-off-as-it-transitions-analyst.html" target="_blank">
        <img src="https://image.cnbcfm.com/api/v1/image/106120420-15680781882ED2-ASB-ZacharySchwartz-090919.jpg?v=1568078188" className="mr-3" alt="..." width="192" height="108"/>
        </a>
        <div className="media-body">
          <a href="https://www.cnbc.com/video/2019/09/10/alibaba-is-perfectly-well-off-as-it-transitions-analyst.html" target="_blank">
          <h5 className="mt-0 mb-1">Alibaba is ‘perfectly well off’ as it transitions - CNBC</h5>
          </a>
          Jack Ma is stepping down as chairman of Alibaba. Zachary Schwartzman of RBC Capital Markets says Ma paved the way for good leadership in the company, and the firm still probably has one of the strongest management teams among global internet companies.
        </div>
      </li>
      <li className="media my-4">
      <a href="https://www.cnbc.com/video/2019/11/11/singles-day-sales-numbers-were-robust-for-alibaba-says-rbc-analyst.html" target="_blank">
        <img src="https://image.cnbcfm.com/api/v1/image/106237360-1573480463354rtx78d9l.jpg?v=1573480528" className="mr-3" alt="..." width="192" height="108"/>
        </a>
        <div className="media-body">
          <a href="https://www.cnbc.com/video/2019/11/11/singles-day-sales-numbers-were-robust-for-alibaba-says-rbc-analyst.html" target="_blank">
          <h5 className="mt-0 mb-1">Singles Day sales numbers were robust for Alibaba, says RBC analyst - CNBC</h5>
          </a>
          Zachary Schwartzman of RBC and Joel Kulina of Wedbush join “Squawk Alley” to discuss Alibaba’s dip in the market despite strong sales during Singles Day.
        </div>
      </li>
      <li className="media">
      <a href="https://www.wsj.com/articles/facebook-unveils-crypto-wallet-based-on-currency-libra-11560850141" target="_blank">
        <img src="https://images.wsj.net/im-82813?width=1260&size=custom_1280x720" className="mr-3" alt="..." width="192" height="108"/>
        </a>
        <div className="media-body">
          <a href="https://www.wsj.com/articles/facebook-unveils-crypto-wallet-based-on-currency-libra-11560850141" target="_blank">
          <h5 className="mt-0 mb-1">Facebook Unveils Cryptocurrency Libra in Bid to Reshape Finance - WSJ</h5>
          </a>
          In a note to clients after Facebook’s Libra disclosures, Royal Bank of Canada analysts Mark Mahaney and Zachary Schwartzman described the project as the foundation for fundamental changes to the digital consumer economy.
        </div>
      </li>
      <li className="media my-4">
      <a href="https://www.cnbc.com/2019/10/15/china-races-to-launch-a-cryptocurrency-that-could-rival-facebooks.html" target="_blank">
        <img src="https://images.wsj.net/im-140614?width=1260&size=1.51" className="mr-3" alt="..." width="192" height="108"/>
        </a>
        <div className="media-body">
          <a href="https://www.cnbc.com/2019/10/15/china-races-to-launch-a-cryptocurrency-that-could-rival-facebooks.html" target="_blank">
          <h5 className="mt-0 mb-1">As Facebook’s libra faces headwinds, China is racing to launch its own global cryptocurrency - CNBC</h5>
          </a>
          Based on recent conversations and meetings in Beijing, RBC told clients this week that China “has expedited its development of a Central Bank Digital Currency” after Facebook’s announcement in June.
        </div>
      </li>
      <li className="media">
      <a href="https://www.cnbc.com/2019/08/26/facebooks-libra-cryptocurrency-raises-political-stakes-for-regulators.html" target="_blank">
        <img src="https://image.cnbcfm.com/api/v1/image/106021691-1563288803354gettyimages-1155893911.jpeg?v=1571083857&w=678&h=381" className="mr-3" alt="..." width="192" height="108"/>
        </a>
        <div className="media-body">
          <a href="https://www.cnbc.com/2019/08/26/facebooks-libra-cryptocurrency-raises-political-stakes-for-regulators.html" target="_blank">
          <h5 className="mt-0 mb-1">Facebook’s dream of a global cryptocurrency raises political stakes for the regulators themselves - CNBC</h5>
          </a>
          Some investors say the attention Libra has received from regulators bolsters the case that cryptocurrencies will soon become part of the financial system. “We find this dynamic interesting and believe internet investors should continue to monitor the shift...” RBC analyst Zachary Schwartzman said in a note Thursday.
        </div>
      </li>
    </ul>
  </div>
)

export default MediaList;
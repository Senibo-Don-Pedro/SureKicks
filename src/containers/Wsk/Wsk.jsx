import { Feature } from '../../components';
import './Wsk.css';

const Wsk = () => {
  return (
    <div className='sk__wsk section__margin' id='wsk'>
      <div className='sk__wsk-feature'>
        <Feature title="Why Sure Kicks?" text="We're on a mission to provide the most stylish and comfortable shoes to our valued customers, all while ensuring the highest quality and unbeatable customer service. We believe that the right pair of shoes can transform not just your outfit but your entire day." />
      </div>
      <div className='sk__wsk-heading'>
        <h1 className='gradient__text'>We stand by the quality of every pair of shoes we offer</h1>
        <p>Explore the Library</p>
      </div>
      <div className="sk__wsk-container">
        <Feature title="Customer Satisfaction" text="We prioritize your satisfaction and offer easy returns and outstanding customer support." />
        <Feature title="Exclusive Deals" text="Stay updated on exclusive discounts and early access to the latest arrivals." />
        <Feature title="Style Variety" text="Our selection caters to diverse tastes, ensuring there's something for everyone." />
      </div>
    </div>
  )
}

export default Wsk
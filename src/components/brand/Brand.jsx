import './brand.css';
import {facebook, paypal, shopify, shoppee, venmo} from './imports';

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <a href='https://www.facebook.com'>
        <img src={facebook} alt='facebook' />
      </a>
      <a href='https://www.paypal.com'>
        <img src={paypal} alt='paypal' />
      </a>
      <a href='https://www.shopify.com'>
        <img src={shopify} alt='shopify' />
      </a>
      <a href='https://www.shopee.com'>
        <img src={shoppee} alt='shopee' />
      </a>
      <a href='https://venmo.com'>
        <img src={venmo} alt='venmo' />
      </a>
    </div>
  )
}

export default Brand
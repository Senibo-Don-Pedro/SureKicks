import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png';



const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Sure Kicks: 
          <br />
          Where Every Step is a Style Statement!
        </h1>
        <p>At Sure Kicks, we're more than just a shoe company; we're your gateway to a world of style, comfort, and self-expression. With a passion for footwear that's second to none, we're dedicated to helping you put your best foot forward.</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder='Your Email Address' />
          <button type='buton'>Get started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people}  alt='people' />
          <p>1,600 people Browsed our collection in the last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
          <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header
import './blog.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from './Product';
import { shoe01 , shoe02, shoe03, shoe04, shoe05, shoe06, shoe07, shoe08, shoe09, shoe10 } from './imports';


const Blog = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const productData = [
    {
      id: 1,
      imgurl: shoe01  ,
      name: 'product name1',
      price: '$1,000'
    },
    {
      id: 2,
      imgurl: shoe02 ,
      name: 'product name2',
      price: '$1,000'
    },
    {
      id: 3,
      imgurl: shoe03 ,
      name: 'product name',
      price: '$1,000'
    },
    {
      id: 4,
      imgurl: shoe04 ,
      name: 'product name',
      price: '$1,000'
    },
    {
      id: 5,
      imgurl: shoe05 ,
      name: 'product name',
      price: '$1,000'
    },
    {
      id: 6,
      imgurl: shoe06 ,
      name: 'product name',
      price: '$1,000'
    },
    {
      id: 7,
      imgurl: shoe07 ,
      name: 'product name',
      price: '$1,000'
    },
    {
      id: 8,
      imgurl: shoe08 ,
      name: 'product name',
      price: '$1,000'
    },
    {
      id: 9,
      imgurl: shoe09 ,
      name: 'product name',
      price: '$1,000'
    },
    {
      id: 10,
      imgurl: shoe10 ,
      name: 'product name',
      price: '$1,000'
    }
  ]

  const product = productData.map(item => (
    <Product 
      name = {item.name}
      url = {item.imgurl}
      price = {item.price}
    />
  ))


  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>Explore our vast collection of shoes, from timeless classics to trendy must-haves. Find the perfect pair for every occasion.</h1>
      </div>
      <Carousel responsive={responsive}>
        {product}
      </Carousel>;
    </div>
  )
}

export default Blog
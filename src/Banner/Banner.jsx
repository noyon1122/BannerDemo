import './Banner.css'

const Banner = () => {
  return (
    <div className="banner_container">
        <div className=''>
           <h1 className='feet_text text_container'>Your feet Deserve the best</h1>
           <p className='para'>A shoe is an item of footwear intended to protect and comfort the human foot. Though the human foot can adapt to varied terrains and climate conditions.</p>
        
            <button className='button'>Shop Now</button>
            <button className='category'>Category</button>

            <h5>Also Available On</h5>
            
                <img className='brand' src="../../public/images/amazon.png" alt="" />
                <img src="../../public/images/flipkart.png" alt="" />
            
         
        </div>
        <div>
            <img src="../../public/images/hero-image.png" alt="" />
        </div>
    </div>
  )
}

export default Banner
import React, { useState,useEffect } from 'react';
import './ProductList.css'
import CartItem from './CartItem';
import { addItem } from './CartSlice';
import { useDispatch, useSelector } from 'react-redux';

function ProductList() {
    const [showCart, setShowCart] = useState(false); 
    const [addedToCart, setAddedToCart] = useState({});
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const clothingArray = [
        {
            category: "Casual Wear",
            items: [
                {
                    name: "Basic T-Shirt",
                    image: "https://outoforder.in/wp-content/uploads/2020/03/mens-black-t-sirt.jpg",
                    description: "Soft cotton tee, perfect for everyday wear.",
                    cost: "$15"
                },
                {
                    name: "Denim Jeans",
                    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/jean/g/f/j/8-9-years-aw24bjp840-black-md-wash-lt-wash-kiddopanti-original-imah3j86zncez3vp.jpeg",
                    description: "Classic blue denim, comfortable and durable.",
                    cost: "$45"
                },
                {
                    name: "Casual Sneakers",
                    image: "https://rukminim2.flixcart.com/image/416/416/xif0q/shoe/o/t/n/-original-imah4zh49dgaybb5.jpeg",
                    description: "Versatile sneakers with a minimalist design.",
                    cost: "$60"
                },
                {
                    name: "Hooded Sweatshirt",
                    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/8/n/4/l-ts572-frenchcrown-original-imagh74yrgftfkhd.jpeg",
                    description: "Warm and cozy hoodie for a laid-back look.",
                    cost: "$35"
                }
            ]
        },
        {
            category: "Formal Wear",
            items: [
                {
                    name: "Blazer Jacket",
                    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/blazer/m/u/j/12-13-years-kids-party-wear-blazer-for-boys-seetoo-original-imagz7yzwuwb8z7q.jpeg",
                    description: "Elegant blazer suitable for formal events.",
                    cost: "$120"
                },
                {
                    name: "Dress Pants",
                    image: "https://image.hm.com/assets/hm/f1/d3/f1d3706245f9cfe53380b07d8d42f49a4a740f6a.jpg",
                    description: "Tailored pants with a classic fit.",
                    cost: "$55"
                },
                {
                    name: "Oxford Shirt",
                    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/3/5/5/xxl-004-givuil-original-imahfxhjwrg9ggrk.jpeg",
                    description: "Crisp, button-down shirt for professional wear.",
                    cost: "$40"
                },
                {
                    name: "Silk Tie",
                    image: "https://rukminim2.flixcart.com/image/416/416/ktuewsw0/cufflink-tie-pin/s/t/h/self-silk-necktie-gift-set-with-pocket-square-cufflinks-brooch-original-imag73kvgt2hefgp.jpeg",
                    description: "Silk tie with a subtle pattern, perfect for business.",
                    cost: "$25"
                }
            ]
        },
        {
            category: "Sportswear",
            items: [
                {
                    name: "Running Shoes",
                    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/0/c/3/6-rng-854-grey-40-bruton-grey-original-imah3xh6a6ecvmng.jpeg",
                    description: "Lightweight and durable, designed for runners.",
                    cost: "$80"
                },
                {
                    name: "Workout Leggings",
                    image: "https://image.hm.com/assets/hm/42/9b/429b2fff84bc208e35862b20f05cd351913dfe82.jpg",
                    description: "Flexible and breathable leggings for high-intensity workouts.",
                    cost: "$30"
                },
                {
                    name: "Sports Bra",
                    image: "https://image.hm.com/assets/hm/f5/9a/f59ad73b8a05c220fb0d0dbd3837586b1441d067.jpg",
                    description: "Supportive and comfortable sports bra for activewear.",
                    cost: "$25"
                },
                {
                    name: "Athletic Jacket",
                    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/jacket/k/r/g/l-no-ntf700e-lripsome-original-imah374fxyt8exwy.jpeg",
                    description: "Lightweight and water-resistant, ideal for outdoor activities.",
                    cost: "$55"
                }
            ]
        },
        {
            category: "Winter Wear",
            items: [
                {
                    name: "Puffer Jacket",
                    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/jacket/2/d/e/m-no-puff900e-lripsome-original-imah49y3khdt5xjj.jpeg",
                    description: "Insulated jacket for ultimate warmth during winter.",
                    cost: "$100"
                },
                {
                    name: "Wool Scarf",
                    image: "https://rukminim2.flixcart.com/image/416/416/xif0q/scarf/c/8/g/free-black-side-line-muffler-al-alexvyan-original-imagkvaymcqh45su.jpeg",
                    description: "Cozy wool scarf, perfect for chilly days.",
                    cost: "$20"
                },
                {
                    name: "Beanie Hat",
                    image: "https://rukminim2.flixcart.com/image/832/832/kwtkxow0/cap/n/x/c/free-fs48-beanie-hat-grey-firmed-string-original-imag9e88j7hg6bem.jpeg",
                    description: "Warm and stylish beanie to keep you warm.",
                    cost: "$15"
                },
                {
                    name: "Leather Gloves",
                    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/glove/t/q/n/free-men-black-zigzag-winter-gloves-a-alexvyan-original-imah4fchsxu4g4kw.jpeg",
                    description: "Premium leather gloves with a soft lining.",
                    cost: "$30"
                }
            ]
        }
    ];
   const styleObj={
    backgroundColor: '#d2b48c',
    color: '#fff!important',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignIems: 'center',
    fontSize: '20px',
   }
   const styleObjUl={
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1100px',
   }
   const styleA={
    color: 'white',
    fontSize: '30px',
    textDecoration: 'none',
   }
   const styleA1={
    color: '#556B2F',
    fontSize: '30px',
    textDecoration: 'none',
   }
   const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
    };
    const handleWardrobeClick = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    const handleContinueShopping = () => {
        setShowCart(false);
      };
      

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart((prevState) => ({
        ...prevState,
        [product.name]: true,
        }));
    };
   const calculateTotalQuantity = () => {
        return cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;
    };
    const reactivateAddButton = (product) => {
        setAddedToCart((prevState) => ({
            ...prevState,
            [product.name]: false, // Correctly reset based on name
        }));    
    };

    const checkDisabled = (name) => {
        return addedToCart[name] === true;
    };

    const [totalQuantity, setTotalQuantity] = useState(calculateTotalQuantity());

    useEffect(() => {
        setTotalQuantity(calculateTotalQuantity());
    }, [cartItems]);

    return (
        <div>
             <div className="navbar" style={styleObj}>
            <div className="tag">
               <div className="luxury">
               <img src="https://img.freepik.com/free-vector/flat-design-clothing-store-logo-design_23-2149496415.jpg?t=st=1730543876~exp=1730547476~hmac=ce534e7d3703835d9821960037e5eefd109a33641a5f1aed37bfb6d9b5377c40&w=740" alt="" />
               <a href="/" style={{textDecoration:'none'}}>
                    <div>
                        <h3 style={{color:'white'}}>Vision Fashion</h3>
                        <i style={{color:'white'}}>where style meets elegance!</i>
                    </div>
                    </a>
                </div>
              
            </div>
            <div style={styleObjUl}>
                <div> <a href="#" onClick={(e)=>handleWardrobeClick(e)} style={styleA}>Wardrobe</a></div>
                <div> <a href="#" onClick={(e) => handleCartClick(e)} style={styleA1}><h1 className='cart'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68"><rect width="156" height="156" fill="none"></rect><circle cx="80" cy="216" r="12"></circle><circle cx="184" cy="216" r="12"></circle><path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" id="mainIconPathAttribute"></path></svg><div className='cart_quantity_count'>{totalQuantity}</div></h1></a></div>
            </div>
        </div>
        {!showCart? (
        <div className="product-grid">
        {clothingArray.map((category, index) => (
            <div key={index}>
                <h1>{category.category}</h1>
                <div className="product-list">
                    {category.items.map((item) => (
                        <div className="product-card" key={item.name}>
                        <img className="product-image" src={item.image} alt={item.name} onError={(e) => { e.target.src = 'fallback-image.jpg'; }} />
                        <div className="product-title">{item.name}</div>
                        <div className="product-description">{item.description}</div>
                        <div className="product-price">{item.cost}</div>
                        <button className="product-button" onClick={() => handleAddToCart(item)} disabled={checkDisabled(item.name)}>{checkDisabled(item.name)?"Added":"Add"} to Cart</button>
                    </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
 ) :  (
        <CartItem addedToCart={addedToCart}
        reactivateAddButton={reactivateAddButton}
        onContinueShopping={handleContinueShopping} />
)}
    </div>
    );
}

export default ProductList;

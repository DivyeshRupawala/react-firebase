import React from 'react'
import {
	  Carousel,
	  CarouselItem,
	  CarouselControl,
	  CarouselIndicators,
	  CarouselCaption,
	  Button
	} from 'reactstrap';

import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import Rating from 'react-rating'
import Loading from "../share/components/LoadingImage";


		// const imgList = [
		// 	"https://rukminim1.flixcart.com/image/400/400/jh3q6q80/shoe/9/v/f/gp-162-9-sparx-black-01-original-imaf5fd6az58vhft.jpeg?q=70",
		// 	"https://rukminim1.flixcart.com/image/312/312/j5mrxjk0/shoe/6/s/y/vertigo-8-lotto-10-original-imaewa2sjfnjh6up.jpeg?q=70",
		// 	"https://rukminim1.flixcart.com/image/312/312/jfzpuvk0/shoe/3/g/7/ax-001-8-adza-navyblue-grey-original-imaf4c5kacgc2yzh.jpeg?q=70",
		// 	"https://rukminim1.flixcart.com/image/312/312/shoe/c/r/h/blue-dps01-gs-10-original-imae4zqgvqmyaxmb.jpeg?q=70",
		// 	"https://rukminim1.flixcart.com/image/312/312/jezzukw0/shoe/f/x/s/wndr-13-11-asian-white-blue-original-imaeprfg8g64ajzb.jpeg?q=70",
		// 	"https://rukminim1.flixcart.com/image/400/400/jh3q6q80/shoe/9/v/f/gp-162-9-sparx-black-01-original-imaf5fd6az58vhft.jpeg?q=70",
		// 	"https://rukminim1.flixcart.com/image/312/312/j5mrxjk0/shoe/6/s/y/vertigo-8-lotto-10-original-imaewa2sjfnjh6up.jpeg?q=70",
		// 	"https://rukminim1.flixcart.com/image/312/312/jfzpuvk0/shoe/3/g/7/ax-001-8-adza-navyblue-grey-original-imaf4c5kacgc2yzh.jpeg?q=70",
		// 	"https://rukminim1.flixcart.com/image/312/312/shoe/c/r/h/blue-dps01-gs-10-original-imae4zqgvqmyaxmb.jpeg?q=70",
		// 	"https://rukminim1.flixcart.com/image/312/312/jezzukw0/shoe/f/x/s/wndr-13-11-asian-white-blue-original-imaeprfg8g64ajzb.jpeg?q=70",
		// 	"https://rukminim1.flixcart.com/image/400/400/jh3q6q80/shoe/9/v/f/gp-162-9-sparx-black-01-original-imaf5fd6az58vhft.jpeg?q=70",
		// 	"https://rukminim1.flixcart.com/image/312/312/j5mrxjk0/shoe/6/s/y/vertigo-8-lotto-10-original-imaewa2sjfnjh6up.jpeg?q=70",
		// 	"https://rukminim1.flixcart.com/image/312/312/jfzpuvk0/shoe/3/g/7/ax-001-8-adza-navyblue-grey-original-imaf4c5kacgc2yzh.jpeg?q=70",
		// 	"https://rukminim1.flixcart.com/image/312/312/shoe/c/r/h/blue-dps01-gs-10-original-imae4zqgvqmyaxmb.jpeg?q=70",
		// 	"https://rukminim1.flixcart.com/image/312/312/jezzukw0/shoe/f/x/s/wndr-13-11-asian-white-blue-original-imaeprfg8g64ajzb.jpeg?q=70",
		// 	"https://rukminim1.flixcart.com/image/400/400/jh3q6q80/shoe/9/v/f/gp-162-9-sparx-black-01-original-imaf5fd6az58vhft.jpeg?q=70",
		// 	"https://rukminim1.flixcart.com/image/312/312/j5mrxjk0/shoe/6/s/y/vertigo-8-lotto-10-original-imaewa2sjfnjh6up.jpeg?q=70",
		// 	"https://rukminim1.flixcart.com/image/312/312/jfzpuvk0/shoe/3/g/7/ax-001-8-adza-navyblue-grey-original-imaf4c5kacgc2yzh.jpeg?q=70",
		// 	"https://rukminim1.flixcart.com/image/312/312/shoe/c/r/h/blue-dps01-gs-10-original-imae4zqgvqmyaxmb.jpeg?q=70",
		// 	"https://rukminim1.flixcart.com/image/312/312/jezzukw0/shoe/f/x/s/wndr-13-11-asian-white-blue-original-imaeprfg8g64ajzb.jpeg?q=70",
		// 	"https://rukminim1.flixcart.com/image/400/400/jh3q6q80/shoe/9/v/f/gp-162-9-sparx-black-01-original-imaf5fd6az58vhft.jpeg?q=70"
		// ];

class CustomCarouselList extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = { 	    	
	    	activeItemIndex : 0,
	    	children: []
	    };

	    this.createChildren = this.createChildren.bind(this); 
	}	

	createChildren(productList) {
		const imgStyle = {
			height: 200, 
			width:300, 
			border: '1px solid gray',
			padding:25 
		};

		return productList.map(i => {
			return (
				<div style={{textAlign : 'left'}} key={i}>					
					<img style={imgStyle} src={i.image}/>
					<div>
						<span>{i.name}</span>
					</div>
					<div>
						<Rating step={1} start={0} stop={5} initialRating={i.startCount}/>
						<span style={{position: 'relative',top: '-8px',fontSize: '20px'}}> ({i.reviewCount}) </span>
					</div>
					<div>
						&#x20b9; {i.price - (i.price/100*i.discount)}
						<span style={{textDecoration: 'line-through',fontSize: '14px',color: '#878787'}}> &#x20b9; {i.price} </span> 
						<span style={{color: '#388e3c',fontSize: '13px'}}>{i.discount}% off </span>											
					</div>
					<div>
						<Button color="primary" size="sm" block> Add To Cart </Button>
						<Button color="success" size="sm" block> Buy Now</Button>
					</div>
				</div>
			);
		});	
	}
		
	componentWillMount() {

		window.db.collection("products").doc("productList").collection("shoes").get().then((querySnapshot) => {
        	
        	let productList = [];
	        querySnapshot.forEach((doc) => {
	              productList.push(doc.data());
	        });

	         this.setState({
		       children: this.createChildren(productList),
		       activeItemIndex: 0,
		    });
	    });	   	   
	}

  	changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

	render() {
		const { children, activeItemIndex} = this.state;

		const divStyle = {
	      marginTop : "20px"
	    };

		return(
			<div style={divStyle}>
				{children.length > 0 ? (
						<div>
							<h4 style={{float:'left'}}> Shoes </h4>
							<ItemsCarousel
						        // Placeholder configurations
						        enablePlaceholder
						        numberOfPlaceholderItems={5}
						        minimumPlaceholderTime={1000}
						        placeholderItem={<div style={{ height: 200, background: '#900' }}>Placeholder</div>}

						        // Carousel configurations
						        numberOfCards={4}
						        gutter={12}
						        showSlither={true}
						        firstAndLastGutter={true}
						        freeScrolling={false}

						        // Active item configurations
						        requestToChangeActive={this.changeActiveItem}
						        activeItemIndex={activeItemIndex}
						        activePosition={'center'}

						        chevronWidth={24}
						        rightChevron={'>>'}
						        leftChevron={'<<'}
						        outsideChevron={false}
						      >
						        {children}
						      </ItemsCarousel>
					      </div>
					) : <Loading height="280px"/>}
				
			</div>
		)	
	}
	
}

export default CustomCarouselList

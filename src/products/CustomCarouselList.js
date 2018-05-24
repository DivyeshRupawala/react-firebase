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

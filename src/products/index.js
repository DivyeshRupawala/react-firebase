import React from 'react'
import { 
	InputGroup, 
	InputGroupAddon, 
	Button, 
	Input, 
	Carousel,
  	CarouselItem,
  	CarouselControl,
  	CarouselIndicators,
  	CarouselCaption } from 'reactstrap';

import ReactDOM from 'react-dom';
import $ from 'jquery'

import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import Rating from 'react-rating'

const items = [
  {
    src: 'https://rukminim1.flixcart.com/flap/3376/560/image/9f3187.jpg?q=50',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://rukminim1.flixcart.com/flap/3376/560/image/5a9185.jpg?q=50',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://rukminim1.flixcart.com/flap/3376/560/image/a93617.jpg?q=50',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

class Products extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = { 
	    	activeIndex: 0,
	    	activeItemIndex : 0,
	    	children: []
	    };

	    this.next = this.next.bind(this);
	    this.previous = this.previous.bind(this);
	    this.goToIndex = this.goToIndex.bind(this);
	    this.onExiting = this.onExiting.bind(this);
	    this.onExited = this.onExited.bind(this);
	    this.createChildren = this.createChildren.bind(this);    
	}

	onExiting() {
		this.animating = true;
	}

	onExited() {
		this.animating = false;
	}

	next() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
		this.setState({ activeIndex: nextIndex });
	}

	previous() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
		this.setState({ activeIndex: nextIndex });
	}

	goToIndex(newIndex) {
		if (this.animating) return;
		this.setState({ activeIndex: newIndex });
	}

	createChildren(n) {
		const imgStyle = {
			height: 200, 
			width:300, 
			border: '1px solid gray',
			padding:25 
		};

		const imgList = [
			"https://rukminim1.flixcart.com/image/400/400/jh3q6q80/shoe/9/v/f/gp-162-9-sparx-black-01-original-imaf5fd6az58vhft.jpeg?q=70",
			"https://rukminim1.flixcart.com/image/312/312/j5mrxjk0/shoe/6/s/y/vertigo-8-lotto-10-original-imaewa2sjfnjh6up.jpeg?q=70",
			"https://rukminim1.flixcart.com/image/312/312/jfzpuvk0/shoe/3/g/7/ax-001-8-adza-navyblue-grey-original-imaf4c5kacgc2yzh.jpeg?q=70",
			"https://rukminim1.flixcart.com/image/312/312/shoe/c/r/h/blue-dps01-gs-10-original-imae4zqgvqmyaxmb.jpeg?q=70",
			"https://rukminim1.flixcart.com/image/312/312/jezzukw0/shoe/f/x/s/wndr-13-11-asian-white-blue-original-imaeprfg8g64ajzb.jpeg?q=70",
			"https://rukminim1.flixcart.com/image/400/400/jh3q6q80/shoe/9/v/f/gp-162-9-sparx-black-01-original-imaf5fd6az58vhft.jpeg?q=70",
			"https://rukminim1.flixcart.com/image/312/312/j5mrxjk0/shoe/6/s/y/vertigo-8-lotto-10-original-imaewa2sjfnjh6up.jpeg?q=70",
			"https://rukminim1.flixcart.com/image/312/312/jfzpuvk0/shoe/3/g/7/ax-001-8-adza-navyblue-grey-original-imaf4c5kacgc2yzh.jpeg?q=70",
			"https://rukminim1.flixcart.com/image/312/312/shoe/c/r/h/blue-dps01-gs-10-original-imae4zqgvqmyaxmb.jpeg?q=70",
			"https://rukminim1.flixcart.com/image/312/312/jezzukw0/shoe/f/x/s/wndr-13-11-asian-white-blue-original-imaeprfg8g64ajzb.jpeg?q=70",
			"https://rukminim1.flixcart.com/image/400/400/jh3q6q80/shoe/9/v/f/gp-162-9-sparx-black-01-original-imaf5fd6az58vhft.jpeg?q=70",
			"https://rukminim1.flixcart.com/image/312/312/j5mrxjk0/shoe/6/s/y/vertigo-8-lotto-10-original-imaewa2sjfnjh6up.jpeg?q=70",
			"https://rukminim1.flixcart.com/image/312/312/jfzpuvk0/shoe/3/g/7/ax-001-8-adza-navyblue-grey-original-imaf4c5kacgc2yzh.jpeg?q=70",
			"https://rukminim1.flixcart.com/image/312/312/shoe/c/r/h/blue-dps01-gs-10-original-imae4zqgvqmyaxmb.jpeg?q=70",
			"https://rukminim1.flixcart.com/image/312/312/jezzukw0/shoe/f/x/s/wndr-13-11-asian-white-blue-original-imaeprfg8g64ajzb.jpeg?q=70",
			"https://rukminim1.flixcart.com/image/400/400/jh3q6q80/shoe/9/v/f/gp-162-9-sparx-black-01-original-imaf5fd6az58vhft.jpeg?q=70",
			"https://rukminim1.flixcart.com/image/312/312/j5mrxjk0/shoe/6/s/y/vertigo-8-lotto-10-original-imaewa2sjfnjh6up.jpeg?q=70",
			"https://rukminim1.flixcart.com/image/312/312/jfzpuvk0/shoe/3/g/7/ax-001-8-adza-navyblue-grey-original-imaf4c5kacgc2yzh.jpeg?q=70",
			"https://rukminim1.flixcart.com/image/312/312/shoe/c/r/h/blue-dps01-gs-10-original-imae4zqgvqmyaxmb.jpeg?q=70",
			"https://rukminim1.flixcart.com/image/312/312/jezzukw0/shoe/f/x/s/wndr-13-11-asian-white-blue-original-imaeprfg8g64ajzb.jpeg?q=70",
			"https://rukminim1.flixcart.com/image/400/400/jh3q6q80/shoe/9/v/f/gp-162-9-sparx-black-01-original-imaf5fd6az58vhft.jpeg?q=70"
		];

		return range(n).map(i => {
			return (
				<div style={{textAlign : 'left'}}>					
					<img style={imgStyle} src={imgList[i]}/>
					<div>
						<span>Product Name</span>
					</div>
					<div>
						<Rating step={1} start={0} stop={5} initialRating={3}/>
						<span style={{position: 'relative',top: '-8px',fontSize: '20px'}}> (20) </span>
					</div>
					<div>
						&#x20b9; 431 
						<span style={{textDecoration: 'line-through',fontSize: '14px',color: '#878787'}}> &#x20b9; 499 </span> 
						<span style={{color: '#388e3c',fontSize: '13px'}}>13% off </span>											
					</div>	
				</div>
			);
		});	
		
	}

	componentWillMount() {
	    this.setState({
	       children: this.createChildren(20),
	      activeItemIndex: 0,
	    });	   
	}

  	changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

	componentDidMount() {
		
	}

	render() {
		const { activeIndex, children, activeItemIndex} = this.state;

		const divStyle = {
	      marginTop : "20px"
	    };

		const slides = items.map((item) => {
	      return (
	        <CarouselItem
	          onExiting={this.onExiting}
	          onExited={this.onExited}
	          key={item.src}
	        >
	          <img src={item.src} alt={item.altText} width="100%" height="280px"/>
	          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
	        </CarouselItem>
	      );
	    });

		return(
			<div>

				<div>
					<InputGroup>			       
				    	<Input placeholder="Search Product by Name or Category..." />
				        <InputGroupAddon addonType="append">
				          <Button color="info">Search</Button>
				        </InputGroupAddon>
				    </InputGroup>
				</div>

				<div style={divStyle}>
					<Carousel
				        activeIndex={activeIndex}
				        next={this.next}
				        previous={this.previous}
				      >
				        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
				        {slides}
				        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
				        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
				    </Carousel>
				</div>

				<div style={divStyle}>
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

				<div style={divStyle}>
					<h4 style={{float:'left'}}> Clothes </h4>
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

			</div>
		)	
	}
	
}

export default Products
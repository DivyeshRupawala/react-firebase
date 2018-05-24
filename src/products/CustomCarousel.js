import React from 'react'
import {
	  Carousel,
	  CarouselItem,
	  CarouselControl,
	  CarouselIndicators,
	  CarouselCaption
	} from 'reactstrap';

import Loading from "../share/components/LoadingImage";

class CustomCarousel extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = { activeIndex: 0, items : [] };
	    this.next = this.next.bind(this);
	    this.previous = this.previous.bind(this);
	    this.goToIndex = this.goToIndex.bind(this);
	    this.onExiting = this.onExiting.bind(this);
	    this.onExited = this.onExited.bind(this);
	}

	componentWillMount() {
		window.db.collection("carousel").get().then((querySnapshot) => {
			let itemList = [];
          	querySnapshot.forEach((doc) => {              
              itemList.push(doc.data());
          	});
          	this.setState({items : itemList})
      	});
	}

	onExiting() {
    	this.animating = true;
  	}

	onExited() {
		this.animating = false;
	}

	next() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
		this.setState({ activeIndex: nextIndex });
  	}

	previous() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
		this.setState({ activeIndex: nextIndex });
	}

	goToIndex(newIndex) {
		if (this.animating) return;
		this.setState({ activeIndex: newIndex });
	}

	render() {
		const { activeIndex, items } = this.state;

		const slides = items.map((item) => {
	      return (
	        <CarouselItem
	          onExiting={this.onExiting}
	          onExited={this.onExited}
	          key={item.name}
	        >
	          <img src={item.url} alt={item.altText} height="280px"/>
	          <CarouselCaption captionText={item.name} captionHeader={item.name} />
	        </CarouselItem>
	      );
	    });		 

		return(
			<div style={{ marginTop : "20px"}}>
				{items.length > 0 ? (<Carousel
								        activeIndex={activeIndex}
								        next={this.next}
								        previous={this.previous}>

								        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
								        	{slides}
								        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
								        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
								    </Carousel>) : <Loading height="280px"/>}
			</div>		
		)	
	}
	
}

export default CustomCarousel

import React from 'react'

import SearchBox from './SearchBox'
import CustomCarousel from './CustomCarousel'
import CustomCarouselList from './CustomCarouselList'

const products = () => {
	return(
		<div>
			<SearchBox />			
			<CustomCarousel />
			<CustomCarouselList />
			<CustomCarouselList />
		</div>
	)	
}

export default products
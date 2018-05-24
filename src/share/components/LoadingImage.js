import React from 'react'
import loadingImg from "../../assets/images/loading.gif";

const loading = ({height="500px"}) => {
	return(
		<img src={loadingImg} height={height}/>
	)
}

export default loading;
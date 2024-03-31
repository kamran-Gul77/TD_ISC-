import React from 'react'
interface IProps {
	heading: string;
	classname?: string;
}

const Heading :React.FC<IProps>= ({heading,classname}) => {
	return (
		<h1 className={'heading text-[#222222] text-[64px] font-bold leading[83px]'+classname}>{ heading}</h1> 
	)
}

export default Heading
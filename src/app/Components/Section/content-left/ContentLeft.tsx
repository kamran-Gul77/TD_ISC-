import React, { ReactNode } from 'react'
import Heading from '../../Elements/Heading'
import Button from '../../Elements/Button';

interface IProps{
	heading: string;
	text: string;
	children: ReactNode;
	classname: string;
	icon:string
}
const ContentLeft :React.FC<IProps> = ({heading,children,icon,text,classname}) => {
	return (
		<div className='contentLeft grid gap-[24px]'>
			<Heading heading={heading}></Heading>
			<p className='text-[$444444] leading-[24px] font-medium text-[#444444][16px]'>{ text}</p>
			<Button children ={children} classname={classname} icon={icon}></Button>
		</div>
	)
}

export default ContentLeft
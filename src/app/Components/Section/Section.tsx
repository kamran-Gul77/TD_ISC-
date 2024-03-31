import React from 'react'
import ContentLeft from './content-left/ContentLeft'
import btnIcon from "/public/button-circle-icon.png";
import "@/app/Components/Section/style.scss";


const Section = () => {
	return (
		<div className='max-w-[1240px] section_card'>
`			<ContentLeft children={"Get Started"} heading='Design your personalized debit card.' icon={btnIcon} text='You have the freedom to personalize the design of your credit card, ensuring a truly unique experience that makes you feel extraordinary' classname=''></ContentLeft>
		</div>
	)
}

export default Section
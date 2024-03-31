import React, { ReactNode } from 'react';
import Card from './card/Card';
import iconImage from "/public/testimo-icon2.svg";
import userImg1 from "/public/user1.svg";
import userImg2 from "/public/user2.svg";
import userImg3 from "/public/user3.svg";
import "@/app/Components/Testimonial/style.scss";


const db = [
	{
		userImg: userImg1,
		img: iconImage,
		passion:"UIUX Designer",
		text: "Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings.",
		userName : "Hadid Khan",
		
	},
	{
		userImg: userImg2,
		userName : "Wade Warren",
		passion:"Web Designer",
		img: iconImage,
		text: "It's is both attractive and highly adaptable. It's exactly what I've been looking forefinitely wo lorem ipsum dolorth the investment."
	},
	{
		
		passion:" Administrator signer",
		userName : "Jenny Wilson",
		userImg: userImg3,
		img: iconImage,
		text: "I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking."
	}
]

const Testimonial = () => {
	return (
		<div className='testimonial_container max-w-[1200px] mx-[auto] grid grid-cols-3 gap-8' >
			{ db.map(({img,text,userName,passion,userImg},ind)=>(
				<Card icon={img} text={ text} name={userName} passion={passion} userImg={userImg}></Card>
			))}
		</div>
	)
}

export default Testimonial
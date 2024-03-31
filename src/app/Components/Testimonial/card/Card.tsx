import React from 'react'
import { text } from 'stream/consumers';
import Image from 'next/image';
import UserProfile from '@/app/Components/Elements/UserProfile';
import "@/app/Components/Testimonial/style.scss";



interface Iprops{
	icon: string;
	text: string;
	userImg: string;
	name: string;
	passion: string;
}
const Card :React.FC<Iprops>= ({icon,text,name,passion,userImg}) => {
	return (
		<div className="testimonial_card px-[24px] py-[48px] gap-8 bg-[#F8F8F8] rounded-[32px]">
			<Image src={icon} alt='user profile'></Image>
				<p className='testimonial_card--text  text-[16px] text-[#444444] mt-[32px] mb-[32px]'>{text}</p>
			<UserProfile img={userImg} name={name } passion={passion} />
			</div>
	)
}

export default Card
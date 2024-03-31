import React from 'react';
import "../Elements/elements.style.scss";
import Image from 'next/image';





interface Iprops{
	img: string;
	name: string;
	passion: string;
}



const UserProfile :React.FC<Iprops>= ({img,name,passion}) => {
	return (

		<div className='test_user flex gap-[8px]'>
			<Image src={img} alt=''/>
			<div className="test_user--about">
				<p className='test_user--name text-[16px] font-medium text-[#222222] '>{name}</p>
				<p className='test_user--profession text-[12px] text-[#444444]'>{passion}</p>
</div>
		</div>
	)
}

export default UserProfile
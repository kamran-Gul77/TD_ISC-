import React, { ReactNode } from 'react'
import "../Elements/elements.style.scss";
import Image from 'next/image';


interface IProps{
	children: ReactNode;
	icon: string;
	style?: React.CSSProperties;
	classname: string;
}

const Button :React.FC<IProps> = ({children,classname,icon,style={}}) => {
	return (
		<div className="button">
			<p className={'button_text text-[#FFFFFF] text-[18px] font-medium' + classname}>{children}</p>
			<Image src={icon} alt='' />
	</div>
	)
}

export default Button
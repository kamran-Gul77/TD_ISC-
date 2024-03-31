import React from 'react'
import "@/app/Components/FAQs/style.scss"

const faqDb = [
	{
		title: "What document do I need to apply for a debit card?",
		description: "The required document may vary depending on the specific debit card."
	},
	{
		title:" How can I apply for a account online?",
		description:"The required document may vary depending on the specific debit card."
		
	},
	{
		title:"Are there any annual fees associated with the debit card?",
		description:"The required document may vary depending on the specific debit card."
	},
	{
		title:"Is my account information secure?",
		description:"The required document may vary depending on the specific debit card."
	}
]

interface Iprops{
	isopen: boolean;
	heading: string;
	toggle?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;

}


const Faqs :React.FC<Iprops>= ({isopen,heading,toggle}) => {
	return (
	    <div className='faqs_wraper max-w-[1020px] grid palce-item-center  m-[auto]' onClick={toggle}>
            <h1 className='text-center font-bold text-[40px]  mb-[64px] '>{heading}</h1>
            {faqDb.map(({ title, description }, index) => (
                <div className="faqs_wraper--content gap-[16px] mt-[24px]" key={index} >
                    <p className='faqs_wraper--content--title text-[24px] font-bold'>{title}</p>
                    <p className='faqs_wraper--content--description text-[16px]'>{description}</p>
								<hr className='bg-[#ADB2B1]' />
								
                </div>
            ))}
        </div>
	)
}

export default Faqs
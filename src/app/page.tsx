import Image from "next/image";
import Faqs from "./Components/FAQs/Faqs";
import Testimonial from "./Components/Testimonial/Testimonial";
import Button from "./Components/Elements/Button";
import btnIcon from "/public/button-circle-icon.png";
import Section from "./Components/Section/Section";





export default function Home() {
  // const [open, setOpen] = useState(false);
  // const toggle = (index) => {
  //   if (open==index) {
  //     return
      
  //   }
  // }
  
  return (
    <main className="max-w-[1440px]  mx-[auto]">
      <div className="max-w-[100%]">
        <Section></Section>
      </div>
      <div className="max-w-[100%]">
      <Testimonial/>
      </div>

      <div className="max-w-[100%] mt-[104px]">
      <Faqs heading="FAQs" key={1} isopen></Faqs>
      </div>
      
    </main>
  );
}

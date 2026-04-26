import { Button } from "@heroui/react";
import Marquee from "react-fast-marquee";
import { GiNewspaper } from "react-icons/gi";

const HeadlineMarquee = () => {
  
  const newsHeadlines = [
    "Global Economy Faces New Challenges Amid Rising Middle East Tensions",
    "Tech Giants Unveil Groundbreaking AI Models: A New Era of Innovation Begins",
    "Global Stock Markets Hit Record Highs Following Positive Employment Data",
    "NASA's Mars Rover Successfully Discovers Signs of Ancient Water Reservoirs",
    "Renewable Energy Breakthrough: Scientists Achieve New Efficiency in Solar Power",
    "Champions League Update: High-Stakes Semi-Final Matches Announced for Next Week",
    "Cybersecurity Alert: New Global Data Protection Laws to Take Effect This Month",
    "Breakthrough in Medicine: New Vaccine Shows Promising Results Against Common Allergies"
];
  
  return (
    <div className="py-4 px-2.5 bg-zinc-100 flex">
<Button className=' rounded-lg bg-(--pink)'  size="lg" >Latest</Button>
<Marquee pauseOnHover={true}>
{newsHeadlines.map((n,inx)=><p key={inx} className="font-semibold mr-5 flex gap-1.5 items-center"><GiNewspaper className="text-xl text-(--dark-2)"/><span>{n}</span> </p>)}
</Marquee>      
    </div>
  );
};

export default HeadlineMarquee;
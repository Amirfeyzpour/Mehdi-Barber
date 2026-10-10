import SectionA from "./Section/Section-1";
import SectionB from "./Section/SectionB";
import SectionC from "./Section/SectionC";

const About = () => {
    return ( <div>
        <SectionA/>
        <SectionB/>
        <div  className="py-20 bg-black">
        <SectionC/>
        </div>
    </div> );
}
 
export default About;
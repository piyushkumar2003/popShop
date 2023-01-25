import HeroSection from './components/HeroSection'
import {useProductContext} from "./context/productcontext"
const About = () => {

  const {myName} = useProductContext();

  // const data ={
  //   name: "PopShop Ecommerce"
  // }
  return (
    <>
    {myName}
    <HeroSection title="PopShop Ecommerce"/>
    {/* <HeroSection myData = {data}/> */}
  
  
    </>
    )
}

export default About
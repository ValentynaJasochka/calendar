import { BasicForm } from "./BasicForm"
import { FeatureForm } from "./FeatureForm"
import { PricingBlockUI } from "./PriceBlockUa"

export const  PriceBlock=  () =>{
  return (
   <div>
    <h1> Форма для функцій в плані</h1>
   
   <FeatureForm/>
   <BasicForm/>
   <PricingBlockUI/>
   </div>)
}

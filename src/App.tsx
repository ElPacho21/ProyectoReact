// import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter"
// import { MiPrimerComponent } from "./components/MiPrimerComponent/MiPrimerComponent"
// import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect";
// import { FormComponent } from "./components/FormComponent/FormComponent";

import { AppProducts } from "./components/AppProduct/AppProducts"

export const App = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap:'2vh'}}>
        {/* <MiPrimerComponent text="Texto desde Propiedades" color="red" fontSize={5}/>
        <ComponentCounter />
        <ComponentUseEffect /> 
        <FormComponent /> */}
        <AppProducts />
    </div>
  )
}

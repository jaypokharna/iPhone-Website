import { Html, OrbitControls, PerspectiveCamera, View } from '@react-three/drei'
import React, { Suspense } from 'react'
import Lights from './Lights'
import IPhone from './PhoneModel'


const ModelView = ( index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item,
  size )=> {
  return (
    <View index={index}
    id={gsapType}
    className={` w-full h-full ${index === 2 ? 'right-[-100%]' :''}`}>

    // Ambient Light
      <ambientLight intensity={0.3}  /> 
      <PerspectiveCamera makeDefault position={[0,0,4]} />
      <Lights />
     <OrbitControls  />
    <group ref={groupRef} name={`${index === 1 ? 'small' : 'large'}`} position={[0,0,0]}>
    <Suspense fallback={<Html><div>Loading</div></Html>} >
        <IPhone />
      </Suspense>
    </group>

</View>
  )
}

export default React.forwardRef(ModelView)

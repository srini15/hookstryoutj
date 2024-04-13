import React from 'react'

const EffectIntro = () => {
    useEffect(() => {
        // Side effect code goes here


        return () => {
            console.log('Load Cleanup code executed!');
        };
        
      }, [dependencies]);
      
  return (
    <div>EffectIntro</div>
  )
}

export default EffectIntro
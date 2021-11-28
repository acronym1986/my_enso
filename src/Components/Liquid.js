import React, {useRef, useEffect} from 'react'
import hoverEffect from 'hover-effect'
import ensoTrans from '../Img/ensoTrans.png'
import futureTrans from '../Img/futureTrans.png'
import f1 from '../Img/f1.png'

function Liquid() {
    const container = useRef();
  
    useEffect(() => {
      console.log(container.current);
  
      new hoverEffect({
        parent: container.current,
        intensity: 0.3,
        image1: ensoTrans,
        image2: futureTrans ,
        displacementImage: f1,
        imagesRatio: 1080 / 1920
      });
    }, [container]);
  
    return (
      <div>
         
        <div
          className="parent"
          id="imgContainer"
          ref={container}
          style={{
            width: 890,
            height: 500,
          }}
        />
      </div>
    );
  }

export default Liquid
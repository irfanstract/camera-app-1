










const fillWithWhiteNoise = (
  function <FArray1 extends (Float32Array | Array<number>) >(
      buf : FArray1  , 
  ): (typeof buf) {
    buf.forEach((v0, i, S ) => {
        S[i] = (
          ((prbbl: number = Math.random() ) => (
              (2 * prbbl ) + -1
          ))()  
        ) ;
    });
    return buf ;
  }  
) ; 














export { fillWithWhiteNoise, }; 
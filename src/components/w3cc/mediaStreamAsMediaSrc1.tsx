















const mediaStreamAsMediaSrc = (
  function (...[mO, src, ] : ([
    MediaRecorderOptions ,
    MediaStream ,
  ]) ) {
    const s = (
      new MediaSource()
    ) ;
    console.log({ state : s.readyState, }, ) ;
    new Promise<void>(R => (
      setTimeout(() => R() , 2 * 1000 , )
    ) ).then(() => {
      ;
      const mR = (
        new MediaRecorder(src, {
          ...mO
        }, )
      ) ;
      console.log({ type : mR.mimeType, }, ) ;
      const sTrackBuf = (
        s.addSourceBuffer(mR.mimeType, )
      ) ;
      mR.addEventListener("error", (e) => void (
        console.warn(e.error, )
      ) ) ;
      mR.addEventListener("stop", (e) => void (
        console.warn(TypeError(`rec stopped`) , )
      ) ) ;
      mR.addEventListener("dataavailable", async (e) => {
        const { data: data, } = e ;
        const dataAsB = (
          (<A extends [unknown, unknown], >(v: A ) => v )((
            [data.type, await data.arrayBuffer(), ] 
          ))
        ) ;
        (
          sTrackBuf
          .appendBuffer(dataAsB[1] , )
        ) ;
      } ) ;
      if (1) {
        const I = (
          setInterval(() => { 
            console.log(`calling RequestData()`) ;
            mR.requestData() ;
          } , 3 * 1000 )
        ) ;
        mR.addEventListener("stop", () => void (
          clearInterval(I, )
        ) ) ;
      }
      mR.start() ;
      ;
    }) ;
    return s ;
  }
) ;






export {} ;
export default mediaStreamAsMediaSrc ;
export { mediaStreamAsMediaSrc, } ;





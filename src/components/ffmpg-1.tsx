




import downloadGivenBlob from 'components/files-dialogues/downloadGivenBlob';


















const {
  ffmpCheckLoadedElseThrow ,
} = (function <A1, >(c: (
  {}
  
  & {
    /**    
     * check `c.isLoaded()`
     */
    ffmpCheckLoadedElseThrow : (
      { (ffmpeg: typeof import("components/ffmpg").default, ) : A1 ; }
    ) ;
  }

)) { return c ; } )({

  ffmpCheckLoadedElseThrow: (
    function (...[ffmpeg,] : [
      typeof import("components/ffmpg").default ,
    ] ) {
      if ((
        ffmpeg.isLoaded()
      ) ) {
        // GOOD GOOD
      } else {
        throw TypeError(`Assertion Error. FFMPG Not Fully Loaded Despite The Blocking`) ;
      }
    }
  ) ,
  
}) ;
/**   
 * ideally exactly when ready
 * 
 * 
 */
const ffmpSvcInitialisedFuture = (async () => {
  const { init: ffmpegInit, default: ffmpeg, } = (
    await import("components/ffmpg")
  ) ;
  /**    
   * disabled ; it'd block the main-thread
   * 
   */
  if (0) {
    ;
    (
      ffmpeg.isLoaded()
      || await ffmpeg.load()
    ) ;
    ffmpCheckLoadedElseThrow(ffmpeg, )
    try {
      console.log(await (
        0 ?
        ffmpeg.run("-h")
        : ffmpeg.run()
      ) ) ;
    } finally {
      ffmpeg.exit()
    }
  }
  return {
    ffmpeg ,
    ffmpegInit ,
  } ;
} )() ;




export {
  ffmpCheckLoadedElseThrow ,
  ffmpSvcInitialisedFuture as ffmpSvcInitialisedFuture ,
} ;
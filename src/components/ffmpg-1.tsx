




import downloadGivenBlob from 'components/files-dialogues/downloadGivenBlob';


















const {
  ffmpCheckLoadedElseThrow ,
} = {
  /**    
   * check `c.isLoaded()`
   */
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
} ;
/**   
 * ideally exactly when ready
 */
const ffmpSvcInitialisedFuture = (async () => {
  const { init: ffmpegInit, default: ffmpeg, } = (
    await import("components/ffmpg")
  ) ;
  (
    ffmpeg.isLoaded()
    || await ffmpeg.load()
  ) ;
  ffmpCheckLoadedElseThrow(ffmpeg, )
  try {
    console.log(await ffmpeg.run("-h") ) ;
  } finally {
    ffmpeg.exit()
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
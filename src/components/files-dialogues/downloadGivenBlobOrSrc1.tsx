


// import  ;
















const triggerUsrSave = (
  function (...[src, ] : [
    src : MediaSource | Blob ,
  ] ) {
    const srcUrl = (
      URL.createObjectURL(src, )
    ) ;
    if ((
      true
      && 0 
      && src instanceof MediaStream
    ) ) {
      const v = document.createElement("video") ;
      v.src = srcUrl ;
      v.play() ;
    }
    const a = (
      document.createElement("a")
    ) ;
    /**   
     * configure the `href`
     */
    a.href = srcUrl ;
    /**   
     * enforces against currrent-tab overnav
     */
    a.target = "_blank" ;
    /**   
     * enforces "Download"/"Save"
     */
    a.download = "from_media" ;
    console["log"](a,) ;
    setTimeout(() => {
      ;
      a.click() ;
      /**   
       * schedule the call `URL.revokeObjectURL(srcUrl, )` ;
       * the right `timeoutMs` depends on the src type,
       * with anticipation towards the duration of the downloading (for remote sources) ;
       * 
       */
      setTimeout(() => {
        console.log(` URL.revokeObjectURL(${srcUrl}, )`,) ;
        URL.revokeObjectURL(srcUrl, )
      } , (
        (function implTimeoutSeconds() : number {
          /**   
           * for {@link Blob } 
           * we can make the timeout be as-short-as seconds
           */
          if (src instanceof Blob ) {
            return 15 ;
          }
          /**   
           * in general
           */
          {
            // TODO
            return 15 * 60 ;
          }
        } )()
        * 
        1000
      ) , ) ;
    } , 0.1 * 1000 , )
  }
) ;







export {} ;
export { triggerUsrSave, } ;






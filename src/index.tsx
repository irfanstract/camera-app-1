

import "window-polyfills" ; // INTEGRAL !!





(async() => {
  {
    const XW = (() => {
      ;
      try {
        return {
          // location ,
          document ,
          navigator ,
          requestAnimationFrame ,
          // focus ,
          // blur ,
          localStorage ,
          CanvasRenderingContext2D ,
        } ;
      } catch (z) {
        console["error"](z, ) ;
        return null ;
      }
    })() ;
    {
      ;
      const {
        CanvasRenderingContext2D ,
        localStorage ,
        requestAnimationFrame ,
      } = XW || { } ;
      if (requestAnimationFrame ) {
        ;
      } else {
        console["info"](`not in window`) ;
        return ;
      }
    }
  }
  {
    ;
    console["info"]((
      `loading the main app`
    )) ;
    return (
      await import("indexb1")
    ) ;
  }
} )() ;







import SS from "lodash" ;
import { Seq, List, Map, Set, } from "immutable";
import { Range, } from "immutable";
import { Stack, } from "immutable";
import React from 'react';
import * as ImgElemWithTimestamp1 from "components/ImgElemWithTimestamp1" ;
// import Lists from "components/useListEditing"; // better sticking to absolute paths
import documentNodeToPng from "components/documentNodeToPng";












const {
  BlobBasedTimestampedImgDisplay ,
} = ImgElemWithTimestamp1 ;
export const FutureBlobBasedImgElemWithTimestamp = (() => {
;
const asAdHocComponent = (
          async (...[pB,] : [Promise<Blob>,] ): (
            Promise<(
              React.FC<(
                { cRef : React.Ref<false | React.ReactElement > ; }
              )>
            )>
          ) => {
            try {
              const b = await pB ;
              const date = (
                b instanceof File ?
                b.lastModified : null
              ) ;
              return function CImplSuccess ({ cRef, }) {
                const e = (
                  React.useMemo(() => (
                    <BlobBasedTimestampedImgDisplay 
                    value={b }
                    />
                  ) , [b, date, ], )
                ) ;
                React.useImperativeHandle(cRef, () => e, [e, ], ) ;
                return e ;
              } ;
            } catch (z) {
              return function CImplFall({ cRef, }) {
                React.useImperativeHandle(cRef, () => false as const, [], ) ;
                return (
                  <div>
                    <p>Error</p>
                    <pre>
                      { (z instanceof Error ) ? z.stack : String(z) }
                    </pre>
                  </div>
                ) ;
              } ;
            }
          }
) ;
return (
  function FutureBlobBasedImgDisplayImpl({ value: pB, } : { value: Promise<Blob> ; } ) {
    /**     
     * ad-hoc {@link React.lazy }-based component.
     * 
     * requires ref, would be called with the elem itself.
     * 
     */
    const C = (
      React.useMemo(() => (
        React.lazy(async () => ({
          default: (
            await asAdHocComponent(pB,  )
          ) ,
        }) )
      ) , [pB, ] , )
    ) ;
    const [fallbackMarkup, cRef1, ] = (
      /**    
       * note that {@link  https://reactjs.org/docs/refs-and-the-dom.html unmounts will assign refs with `null`s as intermediate-state values }, so
       * there arises need to specially treat `null`s as such
       * 
       * @see https://reactjs.org/docs/refs-and-the-dom.html
       * 
       */
      React.useReducer((...[existingValue, newValue, ] : [
        v0: false | React.ReactElement ,
        v1 : null | (false | React.ReactElement) ,
      ] ) => {
        if (newValue === null ) {
          return existingValue ;
        }
        if (newValue || (typeof newValue === "boolean" ) ) {
          return newValue ;
        }
        return existingValue ;
      } , false, )
    ) ;
    return (
      <React.Suspense fallback={fallbackMarkup || <div /> } >
        <C cRef={cRef1} />
      </React.Suspense>
    ) ;
  }
) ;
} )();


const {
  useHScreenGrabbing1 ,
} = {
  // 
  useHScreenGrabbing1 : (
    function ({
      captureDeps ,
    } : (
      {}
      & { captureDeps : React.DependencyList ; }
    ) ) {
      const [eH, eRef, ] = (
        React.useState<null | Element >(null, )
      ) ;
      const eHCaptureP = (
        React.useMemo(() => (
          eH && (
            documentNodeToPng(eH, { output: { format: "png", } , } , )
          )
        ) , [eH, ...captureDeps, ] , )
      ) ;
      const eHCapturePreview = (
        eHCaptureP
        ?
        <FutureBlobBasedImgElemWithTimestamp 
        value={eHCaptureP} 
        />
        : null
      ) ;
      ;
      React.useDebugValue([{ captureDeps, eH, }, ]) ;
      return ( 
        <A1, /** must define at-least two, otherwise would be parsed as JSX tag. */ A2,>(v: [
          A1, 
          // React.Ref<typeof eH > ,
          typeof eRef ,
        ] ) => 
        v 
      )([{ eHCaptureP, eHCapturePreview, } , eRef, ] ) ;
    }
  ) ,
  } ;







export default (
  useHScreenGrabbing1
)  ;







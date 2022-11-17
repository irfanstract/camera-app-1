

import SS from "lodash" ;
import { Seq, List, Map, Set, } from "immutable";
import { Range, } from "immutable";
import { Stack, } from "immutable";
import React from 'react';
// import Lists from "components/useListEditing"; // better sticking to absolute paths














export const {
  useBlobObjAsEmbeddable ,
  BlobBasedTimestampedImgDisplay ,
} = (() => {
  const useBlobObjAsEmbeddable = (
    function useBlobObjUrlImpl(...[asBlob, ] : [
      src: Blob, 
      // srcDate: null | number, 
    ] ) {
      ;
      const [{ asUrl, }, setState, ] = (
        React.useState<(
          {}
          & (
            never
            | { asUrl: null ; captureDate ?: never ; }
            | { asUrl: string ; captureDate: null | number ; }
          )
        )>({ asUrl: null, }, )
      ) ;
      React["useLayoutEffect"](() => {
        const url = URL.createObjectURL(asBlob, ) ;
        setState(() => ({ asUrl: url, captureDate: (asBlob instanceof File ? asBlob.lastModified : null ) , }) ) ;
        return () => {
          setTimeout(() => {
            URL.revokeObjectURL(url, ) ;
          } , 30 * 1000 ) ;
        } ;
      } , [asBlob, ], ) ;
      ;
      return {
        asBlob ,
        asUrl ,
      } ;
    }
  ) ;
  return {
    useBlobObjAsEmbeddable: useBlobObjAsEmbeddable,
    BlobBasedTimestampedImgDisplay: (
      function CBlobBasedImgDisplayImpl(properties : (
        {}
        & { value: Blob ;  }
        // & {  mDate ?: number ; }
        & Pick<JSX.IntrinsicElements["div"] , "style" >
      ) ) {
        const { value: asBlob, } = properties ;
        const mDate = (
          asBlob instanceof File ?
          asBlob.lastModified
          : null
        ) ;
        const {
          asUrl ,
        } = (
          useBlobObjAsEmbeddable(asBlob, )
        ) ;
        const { 
          style: proposedStyling = {} , 
        } = properties ;
        return (
          <div
          style={{
            display: "flex" ,
            flexDirection: "column-reverse",
            ...proposedStyling,
          }}
          >
          <img 
          src={asUrl || "" }
          // controls
          style={{
            // inlineSize: `12em` ,
            // blockSize : `12em` ,
            // background: "white" ,
            maxWidth: "unset" ,
          }}
          />
          <div 
          style={{ 
            position: "sticky", 
            insetBlock: 0, 
            insetInlineStart: 0, 
            fontSize: "75%" ,
            backdropFilter: `blur(3px) ` ,
          }}
          >
          { (typeof mDate === "number") && (
            <p>
              grab taken at
              <i>{ new Date(mDate, ).toString() }</i>
            </p>
          ) } |
          </div>
          </div>
        ) ;
      }
    ) ,
  } ;
} )() ;




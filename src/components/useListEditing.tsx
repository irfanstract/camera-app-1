
import SS from "lodash" ;
import { Seq, List,  } from "immutable";
import { Map, Set, } from "immutable";
import React from 'react';













namespace Lists {
  export function useRenderAndEditorStateSupport<XClp extends string | object>(...[{ ItemHash, }] : [
    {
      ItemHash : (item: XClp, ) => React.Key ,
    } ,
  ] ) {
    ;
    const [{ focusedIndex, preEditItemValue = false, }, setFocusState, ] = (
      React.useState<(
        {}
        & (
          never
          | { focusedIndex: null ; preEditItemValue ?: never ; }
          | { focusedIndex: number ; preEditItemValue : XClp ; }
        )
      )>({ focusedIndex: null, })
    ) ;
    const {
      clearFocusState ,
    } = {
      clearFocusState : () => {
        setFocusState(() => ({ focusedIndex: null, }) ) ;
      } ,
    } ;
    const itemRenditionAt = (
      (...[{ itemValue: c, }, i, ] : [
        options: { itemValue: XClp ; }, 
        i: number ,
      ] ) => {
        ;
        const markFocused = () => {
          ;
          setFocusState((existingFocusState,) => {
            const { preEditItemValue = c, } = (
              (existingFocusState.focusedIndex === i ? existingFocusState : null )
              || { focusedIndex: i, }
            ) ;
            return ({
              focusedIndex: i,
              preEditItemValue: preEditItemValue,
            }) ;
          } ) ;
        } ;
        const referentialKey = (
          ItemHash((
            (focusedIndex === i ? preEditItemValue : false ) || c
          ))
        );
        const contentualKey = (
          ItemHash(c, )
        ) ;
        ;
        return {
          /**   
           * the item value.
           */
          value : c ,
          /**   
           * the item ordinal.
           */
          i,

          /**    
           * the machinery 
           * will need to use this value to identify the node's identity accross edits
           * (since edits will change {@link contentualKey } ) ;
           * we expect that
           * editing an item 
           * change {@link contentualKey} accordingly yet
           * leave {@link referentialKey} unchanged (until losing focus) ;
           * 
           */
          referentialKey: referentialKey ,
          /**    
           * the hash of the item value.
           * 
           */
          contentualKey: contentualKey ,
          
          /**    
           * obvious
           */
          switchFocusStateToThisItem: markFocused ,
        } ;
      }
    ) ;
    ;
    return {
      focusedIndex ,
      preEditItemValue ,
      clearFocusState ,
      itemRenditionAt: itemRenditionAt ,
    } ;
  }
}









export default (
  Lists
) ;

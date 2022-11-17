
import {
  EitherBothSetOrBothUnset ,
  EitherSetAndOthersUnset ,
  EitherSetOrBothUnset ,
} from "components/util/dicts-allOrNothing" ;
import SS, { identity, } from "lodash" ;
import { Seq, List,   } from "immutable";
import { Range, } from "immutable";
import { Stack, } from "immutable";
import {  Map, } from "immutable";
import {   Set, } from "immutable";
import { SortedMap, } from "components/util-immutable-datastructure";
import { SortedSet, } from "components/util-immutable-datastructure";
import Immutable from "immutable";
import React from 'react';
import { useUpdatedCallback, } from "components/useUpdatedCallback1";
import { useDepsChgCount, } from "components/useDepsChgCount";
import { useCallbackCount, } from "components/useCallbackCount1";


export {} ; // TS-1208













/**     
 * render two content(s) to be "compared pairwise".
 * 
 */
const renderPairwise = (
  function (...[e1, e2, ] : [
    e1: React.ReactElement ,
    e2: React.ReactElement ,
  ] ) {
    return (
      <div
      style={{
        display: "flex" ,
        flexDirection: "row" ,
      }}
      >
      { e1 }
      { e2 }
      </div>
    ) ;
  }
) ;

export { renderPairwise , } ;

/**    
 * given *the dbg markup* and-then *the main markup*,
 * render as appropriate
 * 
 */
const DbgAndMain = (
  function (...[{ children: [dbgElem, mainElem, ], }, ] : [
    (
      {}
      & { children: [dbgElem: React.ReactElement, mainElem: React.ReactElement ] ; }
    ) ,
  ] ) {
    return (
      <div>
        { mainElem }
        <div style={{ zoom: `0.75`, opacity: `0.35`, }}>
        { dbgElem }
        </div>
      </div>
    )
  }
) ;

export { DbgAndMain , } ;










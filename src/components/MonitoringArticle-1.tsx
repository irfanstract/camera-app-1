
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


















const DebuggingActivityArticle = (
  React.forwardRef((
    function XDbgSectionImpl(...[{ children: payload, }, ref, ] : [
      Required<React.PropsWithChildren > ,
      React.Ref<HTMLDivElement> ,
    ] ) {
      return ( 
        <div 
        ref={ref} 
        style={{
          // overflowBlock: "auto" ,
          overflow: "auto" ,
          maxBlockSize: `12em` , /* avoid `max-height` for being dir-specific */
        }}
        >
          { payload }
        </div>
      ) ;
    }
  ))
) ;









export { DebuggingActivityArticle, } ;










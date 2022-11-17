


import {
  EitherBothSetOrBothUnset ,
  EitherSetAndOthersUnset ,
  EitherSetOrBothUnset ,
} from "components/util/dicts-allOrNothing" ;
import SS from "lodash" ;
// import { Seq, List,   } from "immutable";
// import { Range, } from "immutable";
// import { Stack, } from "immutable";
// import {  Map, } from "immutable";
// import {   Set, } from "immutable";
// import { SortedMap, } from "components/util-immutable-datastructure";
// import { SortedSet, } from "components/util-immutable-datastructure";

import React, {
	ReactElement ,
	ReactNode ,
  Fragment ,
} from 'react';

export {} ; // TS-1208










const useUpdatedCallback = (
  function useUpdatedCallbackImpl<
    P extends readonly unknown[], 
    R, 
  >(cb: { (...a : P ): R ; } , ) {
    const ref = (
      React.useRef<typeof cb >(cb, )
    ) ;
    ref.current = cb ;
    return (
      React.useCallback( (...a : P ): R => (
        ref.current(...a, )
      ) , [ref, ] , )
    ) ;
  }
) ;


export { useUpdatedCallback, } ;







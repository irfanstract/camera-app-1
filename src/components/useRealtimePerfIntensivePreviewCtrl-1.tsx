
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
import React, {
	ReactElement ,
	ReactNode ,
  Fragment ,
} from 'react';
import { useUpdatedCallback, } from "components/useUpdatedCallback1";
import { useDepsChgCount, } from "components/useDepsChgCount";
import { useCallbackCount, } from "components/useCallbackCount1";

export {} ; // TS-1208

















/**      
 * debounce in timings appropriate for __realtime__, performance-intensive preview-renders.
 * 
 */
const useRealtimePerfIntensivePreviewCtrlDebouncedValue = (
  function useDebouncedValue<A>(...[newValue,] : [
    newValue: (
      never
      // | ((existingV ?: A, ) => A ) 
      | A 
    ), 
  ] ) {
    const [cachedValue, setCachedValueImmediately, ] = (
      React.useState(() => newValue, )
    ) ;
    const setCachedValueDebounced1 = (
      React.useCallback((
        SS.debounce(setCachedValueImmediately, 0.75 * 1000, )
      ) , [setCachedValueImmediately,] )
    ) ;
    React["useLayoutEffect"](() => {
      setCachedValueDebounced1(() => newValue ) ; 
    } , [setCachedValueDebounced1, newValue,] , )
    return cachedValue ;
  }
) ;






export { useRealtimePerfIntensivePreviewCtrlDebouncedValue , } ;








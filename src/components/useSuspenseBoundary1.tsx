


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












/**    
 * we take-over the `<React.Suspense>` decorative responsibility here
 * to simplify things
 * 
 */
const withImplicitSuspense = (
  <P extends {}, >(C: React.ExoticComponent<P> | React.FC<P>) => (
    (...[p,] : [P, ] ) => (
      <React.Suspense>
        <C {...p} />
      </React.Suspense>
    )
  )
) ;







export { withImplicitSuspense, } ;










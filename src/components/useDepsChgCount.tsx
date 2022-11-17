


import SS, { identity } from "lodash" ;
import { Seq, List, Map, Set, } from "immutable";
import { Range, } from "immutable";
import { Stack, } from "immutable";
import React from 'react';












const useDepsChgCount = (
  function (...[{}, deps, ] : [{}, React.DependencyList, ] ) {
    const [c, setC,] = (
      React.useState<number>(0, )
    ) ;
    React["useLayoutEffect"](() => {
      setC(v => (v + 1 ) ) ;
    } , deps, ) ;
    return c ;
  }
) ;


export { useDepsChgCount, } ;




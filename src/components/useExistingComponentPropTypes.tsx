

import SS, { identity } from "lodash" ;
import { Seq, List, Map, Set, } from "immutable";
import { Range, } from "immutable";
import { Stack, } from "immutable";
import React from 'react';

export {} ; // TS-1208









type ComponentProps<A> = (
  A extends { (a: infer Props) : unknown ; } ?
  (Props & object) : never
) ;
namespace ComponentProps { ; } // TS-1205



export { ComponentProps, } ;




























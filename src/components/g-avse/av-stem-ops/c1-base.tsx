

import {
  EitherBothSetOrBothUnset ,
  EitherSetAndOthersUnset ,
  EitherSetOrBothUnset ,
} from "components/util/dicts-allOrNothing" ;
import SS from "lodash" ;
import { Seq, List,   } from "immutable";
import { Range, } from "immutable";
import { Stack, } from "immutable";
import {  Map, } from "immutable";
import {   Set, } from "immutable";
import { SortedMap, } from "components/util-immutable-datastructure";
import { SortedSet, } from "components/util-immutable-datastructure";

import React from 'react';
import { useUpdatedCallback, } from "components/useUpdatedCallback1";
import { useDepsChgCount, } from "components/useDepsChgCount";
import { useCallbackCount, } from "components/useCallbackCount1";

import { ellipse, square, triangle } from 'ionicons/icons';
import { camera, image, film, play, pause, } from 'ionicons/icons';

import * as ReactDraft from 'draft-js';

import Lists from "components/useListEditing"; // better sticking to absolute paths















abstract class XClp {
  
  abstract toJson() : object ;
  toString(...[indentation , ] : [indentation : boolean ,] ) {
    return (
      JSON.stringify(this.toJson() , null , indentation ? 2 : 0 , )
    ) ;
  }
  /**    
   * `hashCode()` needs to be both fast and collision-free.
   */
  hashCode() : number | string {
    return this.toString(false, ) ;
  }

  static readonly UICLASS = Symbol() ;
  /**    
   * renders a UI for inspecting or, if `onChange` were given, editing.
   * 
   */
  renderUi<A extends XClp & XClpWithUi<A> >(...[p = {},] : [
    (
      {}
      & { onChange ?: { (newValue: A, ): void ; } ; }
      & Partial<(
        Required<Pick<(Parameters<A[typeof XClp.UICLASS ] >[0] ) , "onUpdatedRendered" >>
      )>
    ) ? ,
  ] ) {
    const this1 = this as XClp as A ;
    const C = this1[XClp.UICLASS] ;
    return (
      <C 
      {...{ value: this1, }} 
      onUpdatedRendered={(...[a, ]) => {
        if (a) {
          ;
          if (a instanceof Blob) {
            return console["log"](a, );
          }
          return (async () => {
            for await (const a1 of a) {
              return console["log"](a1, );
            }
          } )() ;
        }
      } }
      {...p} 
      />
    ) ;
  }
  /**    
   * for completeness, 
   * a subclass' implementation may allow undo-redo stacks (see {@link ReactDraft.EditorState } ) .
   * 
   * with added undo-redo stacks, 
   * would imply increased storage needs .
   * giving rise to the need for (optional) distillibility .
   * 
   * shall return exactly `this` or with trimmed-or-dropped undo-redo stack .
   * 
   */
  withTrimmedUndoStack(
    // props ?: {} ,
  ) : XClp {
    return this ;
  }

} ;
namespace XClp {
  ;
} // Ts-1205
interface XClpWithUi<A extends XClp & XClpWithUi<A> > extends XClp {
  
  /**     
   * this shall define the `Component` to render it.
   * 
   */
  [XClp.UICLASS] : (
    React.FC<(
      {}
      & { value : A ; }
      & Partial<{ onChange : { (newValue: A, ): void ; } ; }>
      & Partial<(
        { onUpdatedRendered : { (newValue: null | (Blob | XClpWithUi.RFor), ): void ; } ; }
      )>
    )>
  ) ;

  //
} ;
namespace XClpWithUi { ; } // TS-1205
namespace XClpWithUi {
  
  /**   
   * to be implemented as {@link AsyncGenerator async iterator of Blob(s) }.
   * 
   */
  export abstract class RFor {
    abstract [Symbol.asyncIterator ](): AsyncGenerator<Blob, unknown> ;
    get [Symbol.toStringTag]() {
      return "XClpWithUi.RFor" ;
    } ;
  } ;
  export function renderedsConcat(...[postrenderedChildSeq, ] : [readonly (null | Blob | RFor)[] ,] ) {
    return (
      new (class RenderedsConcatImpl extends XClpWithUi.RFor {
        toString() {
          return `[Rendereds Concat : ${postrenderedChildSeq }]` ;
        }
        [Symbol.asyncIterator] = async function* () { 
          let nullDetected : boolean ;
          nullDetected = false ;
          for (const c1 of postrenderedChildSeq ) {
            C :
            if (c1) {
              if (c1 instanceof Blob ) {
                yield c1 ;
                break C ;
              }
              {
                for await (const scn of c1) {
                  yield scn ;
                }
                break C ;
              }
            } else {
              nullDetected ||= true ;
            }
          };
          if (nullDetected ) {
            console["warn"](TypeError(`null detected`) ) ;
          }
        }
      }) 
    );
  }
  
}
abstract class XClpWithUi1<A extends XClpWithUi1<A > > extends XClp implements XClpWithUi<A> {
  
  /** 
   * it's a bit shame we need to duplicate the decl here `:D` . 
   * 
   */
  abstract [XClp.UICLASS] : (
    XClpWithUi<A>[typeof XClp.UICLASS ]
  ) ;

} ;











export { XClp, } ;
export { XClpWithUi , } ;

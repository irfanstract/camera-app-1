
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
import {
  useInputState ,
  WithInputState ,
} from "components/useInputElementOnchangeState1" ;
// import MapS;
import * as ImgElemWithTimestamp1 from "components/ImgElemWithTimestamp1" ;
import { FutureBlobBasedImgElemWithTimestamp, } from "components/useRefsBasedElemRasterisation1";
import Lists from "components/useListEditing"; // better sticking to absolute paths
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonPage ,
  IonContent ,
  IonHeader ,
  IonToolbar , 
  useIonToast ,
  useIonAlert ,
  useIonActionSheet ,
  useIonModal ,
  IonCard ,
  IonCardContent ,
  IonButton ,
  IonReorderGroup ,
  IonList ,
  IonItemSliding ,
  IonItemDivider ,
  IonItem ,
  IonReorder ,
} from '@ionic/react';
import { IonInput, } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { DebuggingActivityArticle, } from "components/MonitoringArticle-1";
import { ellipse, square, triangle } from 'ionicons/icons';
import { camera, image, film, play, pause, } from 'ionicons/icons';
import downloadGivenBlob from 'components/files-dialogues/downloadGivenBlob';
import 'draft-js/dist/Draft.css'; // integral CSS
import * as ReactDraft from 'draft-js';
import * as XDraftEditorUtil from "components/useDraftEditor1" ;
import documentNodeToPng from "components/documentNodeToPng";
import useHScreenGrabbing1 from "components/useRefsBasedElemRasterisation1";
import { newFfmpeg1, } from "components/ffmpg-pngtowebm-1" ;
import { pngAsWebm, } from "components/ffmpg-pngtowebm-1" ;

import { renderPairwise, } from "components/g-avse/av-stem-ops/c1-orderedmixc-1" ;
import { DbgAndMain, } from "components/g-avse/av-stem-ops/c1-orderedmixc-1" ;
import { XClp, XClpWithUi, } from "components/g-avse/av-stem-ops/c1-base" ;
import { XDbgArticle, } from "components/g-avse/av-stem-ops/c1-orderedmixc-1" ;
import { usePreviewPaneCtrlDebouncedValue, } from "components/g-avse/av-stem-ops/c1-orderedmixc-1" ;

import {
  ffmpSvcLd ,
  ffAppLd as ffRenderDemoSvcLd ,
} from "components/ffmpg-renderdemo1" ;
import { XClipSeqEditor, } from "./g-avse/clip-seq-editor/useItemRender1State1";

type ComponentProps<A> = (
  A extends { (a: infer Props) : unknown ; } ?
  Props : never
) ;

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

const {
  useBlobObjAsEmbeddable: useXBlobObjUrl ,
  BlobBasedTimestampedImgDisplay: XBlobBasedImgDisplay ,
} = ImgElemWithTimestamp1 ;
const {
  renderEditor: renderXDraftEditor ,
  renderEditorAndDebug: renderXDraftEditorAndDebug ,
  withTrimmedUndoRedoStacks: xDraftWithTrimmedUndoRedoStacks ,
} = XDraftEditorUtil ;

// eslint-disable-next-line import/first 
import {
  nllUnplayableBlob ,
  VView ,
  useXPreview ,
  useAvRenderFlatten ,
  XPReview ,
  useUsrShallPreview1 ,
} from "components/g-avse/avr1" ;

export {} ; // TS-1208

{}














abstract class CompoundClipOps<Aggregate1 extends CompoundClipOps<Aggregate1>> extends XClp implements XClpWithUi<Aggregate1> {

  abstract children : readonly XClp[] ;
  abstract WA : { 
    new (children: readonly XClp[], props ?: {} , ) : Aggregate1 ;
    getExample() : Aggregate1 ;
  } ; 
  
  abstract toJson() : object ;
  withItemReplacingAtIndex(newItem: XClp, i: number ): Aggregate1 {
    const p = this ;
    return (
      new p.WA((
        p.children
        .map((existingItem, i0 ) => (
          (i0 === i ) ?
          newItem : existingItem
        ) )
      )  )
    ) ;
  }
  withTrimmedUndoStack(): Aggregate1 {
    const p = this ;
    return (
      new p.WA((
        p.children
        .map((existingItem, i0 ) => (
          existingItem
          .withTrimmedUndoStack()
        ) )
      )  )
    ) ;
  }
  childrenToStringArray(...args : Parameters<XClp["toString"] > ) {
    const p = this ;
    return (
      p.children
      .map(v => v.toString(...args ) )
    ) ;
  } ;
  
  /**     
   * this shall define the `Component` to render it.
   * 
   */
  [XClp.UICLASS] !: (
    React.FC<(
      {}
      & { value : Aggregate1 ; }
      & Partial<{ onChange : { (newValue: Aggregate1, ): void ; } ; }>
    )>
  ) ;
  static RenderUi = function CompoundClipR<Aggregate10 extends CompoundClipOps<Aggregate10>>(...[{ value: p, onChange: onAggregateChange0, onUpdatedRendered: highLevelUpdatedRenderCbI = Object, }, ] : (
    Parameters<(
      XClpWithUi<Aggregate10>[typeof XClp.UICLASS ]
    )>
  ) ) {
    type  Aggregate1 = Aggregate10 ;
    const Aggregate1 = p.WA ;
    const {
      focusedIndex: assumedFocusedIndex ,
      preEditItemValue ,
      clearFocusState ,
      itemRenditionAt: itemRenditionAt ,
    } = (
      Lists.useRenderAndEditorStateSupport<XClp>({
        ItemHash: (c) => c.hashCode(  ) ,
      })
    ) ;
    const highLevelUpdatedRenderCb = (
      /**    
       * here was a bookkeeping indirection/wrap, but
       * now no longer (the wrap was removed for being a listener (`onYyy` etc) )
       * 
       */
      highLevelUpdatedRenderCbI
    ) ;
    /**   
     * {@link React.DependencyList }
     * 
     */ 
    const highLevelUpdatedRenderCb10 = (
      useUpdatedCallback(highLevelUpdatedRenderCb, )
    ) ;
    {}
    const {
      dbgDisableOnPrerender = false ,
    } : (
      {}
      & Partial<{ dbgDisableOnPrerender ?: boolean ; }>
    ) = {} ;
    const [
      { postrenderedChildMap1, setPostrenderedChildMap1, }, 
    ] = (
      CompoundClipOps.useChildrenPeRenderMapState<Aggregate10>(p, )
    ) ;
    /**   
     * make the mapping always contain given key (even if set to `null` ) -
     * see the UI render code somewhere below .
     * 
     */
    React["useLayoutEffect"](() => {
      {}
      /**   
       * make the mapping always contain given key (even if set to `null` ), 
       * 
       */
      setPostrenderedChildMap1(existingM => {
        0 && console["log"]({ p, existingM, }) ;
        const newM = (
          (
            List([...p.children], )
            .toMap() 
            .mapEntries(([i, v, ]) => [v, null,] )
            .mapEntries<XClp, ReturnType<typeof existingM.toArray>[number][1] >(pair => pair )
          )
          .mergeWith((v0, v1) => v1, existingM, )
        ) ;
        (newM.equals(existingM, ) ) || (
          console["log"]({ p, existingM, newM, })
        ) ;
        return (
          newM
        ) ;
      } ) ;
      ;
    } , [p, ] ) ;
    const postrenderedChildMapEntryUpdate = (
      React.useCallback((
        function postrenderedChildMapEntryUpdateImpl(...[c, newR, ] : Parameters<typeof postrenderedChildMap1.set > ) { 
          const { logMode = "debug" } : (
            {}
            & Partial<{ logMode : keyof Pick<Console, "log" | "debug"> }>
          ) = { } ;
          {
            console[logMode]("AVSeqEditor", postrenderedChildMapEntryUpdate.name, ) ;
            console[logMode](c.toString(false,), { newR, }, ) ;
          }
          if (dbgDisableOnPrerender) {
            return ;
          }
          // setPerItemRendered1({ i: i, }, newR,)
          setPostrenderedChildMap1(m => {
            console[logMode ]("AVSeqEditor", postrenderedChildMapEntryUpdate.name, "SPRC", ) ;
            console[logMode ](c.toString(false,), { newR, }, ) ;
            console[logMode ](`m.containsKey(c) ? ` , m.keySeq().contains(c, ), ) ;
            if ((
              false 
              // || m.size <= 0
              || (
                true 
                && (m.keySeq() ).contains(c, ) 
                && (List([...p.children,] ) ).contains(c, )
              )
              || !c 
            )) {
              {}
              0 && console["log"]({ m, c, newR, }) ;
              0 && console["log"](c.toString(false, ) ) ;
              0 && console["log"](newR, ) ;
              return (
                m.set(c, newR, )
              ) ;
            } else {
              throw TypeError((
                [
                  `onUpdatedRendered error.` ,
  
                  `nonexistent child '${c && c.toString(false) }'. ` ,
                  `the AOT rendering is supposed to cover every present children, but` ,
                  `given the submission with non-present key` ,
                  `the item's render-result will likely get discarded away. `,
  
                  JSON.stringify({ m: m.toObject(), c: c, } , null, 2, ) ,
                ].join("\n")
              )) ;
            }
          } ) ;
        } 
      ) , [
        // postrenderedChildMap1 ,
        dbgDisableOnPrerender ,
        setPostrenderedChildMap1 ,
        p ,
      ] ,)
    ) ;
    const prmcc = (
      useDepsChgCount({}, React.useDeferredValue([postrenderedChildMap1, ]))
    ) ;
    const postrenderedChildSeq = (
      React.useMemo(() => (
        p.children 
        .map(c => (
          postrenderedChildMap1
          .get(c, null, )
        ) )
      ) , [p, postrenderedChildMap1, ] , )
    ) ;
    const dcc1 = (
      React.useMemo(() => (
        /**   
         * concatenation
         * 
         */
        XClpWithUi.renderedsConcat(postrenderedChildSeq, )
      ), [React.useDeferredValue(postrenderedChildSeq, ), ] , )
    ) ;
    const prcc = (
      useDepsChgCount({}, React.useDeferredValue([postrenderedChildSeq, ]))
    ) ;
    const highLevelUpdatedRenderCb1 = (
      // React.useMemo(() => (
      //   SS.debounce(highLevelUpdatedRenderCb10, 0.5 * 1000 , )
      // ) , [highLevelUpdatedRenderCb10,] , )
      useUpdatedCallback((
        highLevelUpdatedRenderCb10
      ), )
    ) ;
    {}
    /**    
     * {@link postrenderedChildSeq } to {@link highLevelUpdatedRenderCb1 }
     * 
     */
    React["useLayoutEffect"](() => {
      highLevelUpdatedRenderCb1((
        dcc1
      )) ;
    } , [React.useDeferredValue(dcc1),] ) ;
    const xChildN = p.children.length ;
    const checkPNotStale = (
      useUpdatedCallback((
        (...[argumentedP, ] : [p: Aggregate10, ] ) => {
          if (argumentedP !== p ) {
            console["error"]({ 
              argumentedP: argumentedP ,
              upstreamP : p ,
            }) ;
            throw TypeError(`stale 'p' : (...) vs (...) `) ;
          }
        }
      ))
    ) ;
    // const ;
    const { 
      onAggregateChange, 
    } = (
      (onAggregateChange0 ? {
        onAggregateChange : ((...[
          newVal,
          { focus: focusBehv, } ,
        ] : [Aggregate1, { focus: "keep" | "blur", }, ]) => { 
          if (focusBehv === "blur" ) {
            clearFocusState() ;
          }
          {}
          return (
            onAggregateChange0(newVal, )
          ) ;
        } ) ,
      } : null )
      || {
        onAggregateChange : null ,
      }
    ) ;
    const applyDragBasedReorder = (
      onAggregateChange ?
      function (...[[srcIndex, finalINdex, ], ] : [[from: number , to: number ,], ]) {
        ;
        onAggregateChange((
          new Aggregate1((   
            p.children
            .map(function* (_, i) {
              if (i !== srcIndex ) {
                yield p.children[i]! ;
              }
              if (i === finalINdex ) {
                yield p.children[srcIndex]! ;
              }
            } ).flatMap(v => [...v, ] )
          ) , { } )
        ) , { focus: "blur", } ) ;
      }
      : null
    ) ;
    const [
      dccPreview1 ,
      { setShallPreview, previewToggleBtn, } ,
    ] = (
      useUsrShallPreview1({ 
        value: dcc1 ,
      })
    ) ;
    const dccPreview = (
      dccPreview1 
      ||
      <div 
      style={{ 
        display: "flex", 
        flexDirection: "row", 
        background: "black", 
      }}
      >
        { (
          postrenderedChildSeq
          .map((v) : null | React.ReactElement => {
            if (v instanceof Blob ) {
              return (
                <VView value={v} />
              ) ;
            }
            return null ;
          } )
        ) }
      </div>
    ) ;
    React["useEffect"](() => {
      console["log"](CompoundClipR.name ) ;
      console["log"]("p.children" ) ;
      console["log"](p.children ) ;
      console["log"](p.childrenToStringArray(false,) ) ;
    } , [p,] ) ;
    const [_, dbgThrowException, ] = (
      React.useReducer((...a: [void,] ): void => {
        throw new TypeError(`Deliberate Corruption`) ;
      } , void true )
    ) ;
    const debugSection = (
      React.useDeferredValue((
        <div>
          <pre>
            { JSON.stringify({ 
              childrenN: p.children.length, 
              children : (
                p
                .childrenToStringArray(false, )
              ) ,
              // lrccRewrapCount ,
              // lrccCallCount , 
              // spcsRewrapCount,
              // spcsCallCountGlb,
              // spcsCallCountLocl ,
              prmcc ,
              postrenderedChildMap1: (
                postrenderedChildMap1.entrySeq() 
                .map(([k, v]): [string, typeof v,] => (
                  [k.toString(false) , v,]
                ))
              ) ,
              prcc ,
              postrenderedChildSeq : (
                postrenderedChildSeq
                .map(v => {
                  if (v instanceof Blob ) {
                    const { type, size, } = v ;
                    const { 
                      name = "", 
                      webkitRelativePath = "" ,
                      lastModified = null , 
                    } = (v instanceof File ? v : null ) || {} ;
                    return { 
                      name, 
                      webkitRelativePath ,
                      type, 
                      size, 
                      lastModified,
                    } ;
                  }
                  if (v instanceof XClpWithUi.RFor ) {
                    return String(v, ) ;
                  }
                  return String(v, ) ;
                })
              ) ,
            }, null, 2, ) }
          </pre>
          <p>
            <IonButton type="button" onClick={() => dbgThrowException() } >
              !!! 
            </IonButton>
          </p>
        </div>
      ))
    ) ;
    const mainNonDebugSec = (() : React.ReactElement => {
      const bootstrappingSection = (
        onAggregateChange && (
          <div>
            { (
              (p.children.length <= 0 ) && ( 
                <IonButton 
                onClick={() => {
                  onAggregateChange((
                    Aggregate1.getExample()
                  ) , { focus: "blur", }, ) ;
                } } 
                >
                  Init Me
                </IonButton>
              )
            )}
          </div>
        )
      ) ;
      const reorderGroupBndProperties = (
        ((...[p] : Parameters<typeof IonReorderGroup> ) => p )((
          applyDragBasedReorder ?
          { 
            disabled: false ,
            onIonItemReorder: (e ) => {
              const { from: srcIndex, to: finalINdex, } = e.detail ;
              /**    
               * will be followed-up
               * 
               */
              e.detail.complete(false, ) ;
              applyDragBasedReorder([srcIndex, finalINdex, ], ) ;
            } ,
          }
          : {
            disabled: true ,
          }
        ))
      ) ;
      return (
        <div
        onBlur={(e) => (
          (e.target === e.currentTarget && (console.log(e), true ) ) 
          && clearFocusState()
        ) } 
        >
        <p>
          <IonIcon icon={film } />
          Aggregate of Clips
        </p>
        <div>
        { bootstrappingSection }
        </div>
        <div
        style={{
          zoom: `85%`,
        }}
        >
        <IonList>  
        <IonReorderGroup 
        {...(
          reorderGroupBndProperties
        ) }
        >
        { (
          p.children
          .map((c: XClp, i: number, pcs1, ) => {
            const {
              switchFocusStateToThisItem: markFocused ,
              referentialKey: referentialKey ,
              contentualKey: actualKey ,
            } = (
              itemRenditionAt({ itemValue: c, }, i, )
            ) ;
            const assumedToBeFocused = (
              assumedFocusedIndex === i
            ) ;
            const onBlur1 = (
              () => {
                if (onCurrentItemChange) {
                  console["log"](`Editing Timeout, Flushing`) ;
                  const { } = (
                    onCurrentItemChange.flush()
                    || { }
                  ) ;
                }
              }
            ) ;
            const onCurrentItemChange = (
              onAggregateChange
              && 
              SS.throttle((
                (newItem: XClp, ) => {
                  {
                    ;
                    console["log"](...Object.keys({ onCurrentItemChange, }) );
                    console.groupCollapsed("... the stack trace") ;
                    console["log"](TypeError(...Object.keys({ onCurrentItemChange, }) ) ) ;
                    console.groupEnd() ;
                    console["log"]({
                      actualKey ,
                      referentialKey ,
                    }) ;
                    console["log"]({
                      pChildren: p.children ,
                      c ,
                      newItem ,
                    }) ;
                    ;
                    0 && checkPNotStale(p, )
                  }
                  const implUpdate1 = function (p: Aggregate10 ) {
                    ;
                    onAggregateChange((
                      p.withItemReplacingAtIndex(newItem, i, )
                    ), { focus: "keep", }, );
                  } 
                  markFocused() ;
                  F: {
                    ;
                    // wrong ; race-condition
                    if (0) {
                      ;
                      implUpdate1(p) ;
                      break F ;
                    }
                    // TODO until get ability to updated ..
                    implUpdate1(p) ;
                  }
                  return ({
                    newItem: newItem ,
                  }) ;
                }
              ) , 0.5 * 1000 , { leading: true, trailing: true, } )
            ) ;
            const keyingDbgModeE = (() : null | React.ReactElement => {
              switch (0 as number ) {
                case 1 : 
                return (
                  <React.Fragment>
                  { <span>(referential key: {referentialKey})</span> }
                  { <span>(contentual key: {actualKey })</span> }
                  <span>{ assumedToBeFocused && "(editing)" }</span>
                  </React.Fragment>
                ) ;
                default :
                return null ;
              }
            })() ;
            const bulletOrReorderingHandle = (
              <IonReorder
              title={
                [
                  `#${i}` ,
                  `drag to reorder this.` ,
                  `=====================` ,
                  `referential hash: ${referentialKey }` ,
                  assumedToBeFocused ? "(active/editing)" : null ,
                  `contentual hash: ${actualKey }` ,
                ]
                .filter(lne => !!lne )
                .join("\n")
              }
              >
                #{i } 
                { keyingDbgModeE && (
                  <div style={{ display: "flex", flexDirection: "column", maxWidth: "5em", overflowX: "auto", }}>
                    { keyingDbgModeE }
                  </div>
                ) }
              </IonReorder>
            ) ;
            const mainContent = (
              <React.Fragment
              // key={i }
              >
              { (
                c.renderUi({ 
                  onChange: (
                    onCurrentItemChange || Object
                  ) ,
                  onUpdatedRendered: (...[newR, ]) => (
                    postrenderedChildMapEntryUpdate(c, newR, )
                  ) ,
                })
              )   }
              </React.Fragment>
            ) ;
            return (
              <React.Fragment 
              key={referentialKey }
              >
              <IonItem 
              onFocus={() => { markFocused() ; } }
              onBlur={(e) => {
                if ((e.target === e.currentTarget ) && (console.log(e), true ) ) {
                  onBlur1() ;
                }
              } }
              >
                { bulletOrReorderingHandle }
                <IonLabel>
                  <DbgAndMain>
                    { (() => {
                      ;
                      const variablesSection = (
                        <pre>
                          { JSON.stringify({
                            observedParentChildren : (
                              p.childrenToStringArray(false, ) 
                              .map(s => (
                                s.replace(/^([^]{1000,1000})[^]{50,}$/, "$1...")
                              ) )
                            ) ,
                          }, null, 2 ) }
                        </pre>
                      ) ;
                      const cVarValueSection = (
                        <div>
                          <p> 
                            <code>c</code>
                          </p>
                          { c.renderUi({}) }
                        </div>
                      ) ;
                      return (
                        <XDbgArticle>
                          { variablesSection }
                          { assumedToBeFocused && cVarValueSection }
                        </XDbgArticle>
                      ) ;
                    } )() }
                    { mainContent }
                  </DbgAndMain>
                </IonLabel>
              </IonItem>
              </React.Fragment>
            ) ;
          } )
        ) }
        </IonReorderGroup>
        </IonList>
        </div>
        <div>
          <div
          style={{ display: "flex", flexDirection: "column-reverse", }}
          >
          { dccPreview }
          <p> 
          { previewToggleBtn }
          </p>
          </div>
        </div>
        </div>
      ) ;
    } )() ;
    return (
      <DbgAndMain>
      <XDbgArticle>
        { true && debugSection }
      </XDbgArticle>
      { mainNonDebugSec }
      </DbgAndMain>
    ) ;
  } ;
  static useChildrenPeRenderMapState = (
    function usePRCMSImpl<Aggregate10 extends CompoundClipOps<Aggregate10> >(...[
      p,
    ] : [
      Aggregate10,
    ] ) {
      ; // TODO
      type PRCMS = (
        Map<XClp, (
          ReturnType<typeof XClipSeqEditor.useChildrenRenderState1>["postrenderedChildSeq"][number]
        ) > 
      ) ;
      const [postrenderedChildMap1, setPostrenderedChildMap1,] = (
        React.useState<(
          PRCMS
        )>((
          //
          // Map()
          List([...p.children ])
          .toMap()
          .mapEntries(([_, c,]) => [c, null ] )
        ))
      ) ;
      /**    
       * automatically elide the unused entries.
       * necessary to avoid OOME(s) (OutOfMemoryError(s) ).
       * 
       */
      React["useEffect"](() => {
        /**    
         * disabled .
         * 
         * if were this left enabled,
         * the actual timing 
         * could be after `p` have been updated elsewhere (hence the `p` here would effectively be 'stale').
         * 
         */
        if (0) {
          ;
          /**   
           * elide unused mappings.
           * 
           */
          setPostrenderedChildMap1(m => (
            m
            .filter((mEntryVal, mKey, ) => (
              List([...p.children], )
              .contains(mKey, )
            ) )
          ) );
        }
        ;
      } , [p, ] ) ;
      ;
      // 
      return (
        <A1 extends object, A2 , >(e: [A1, A2,]) => e
      )([
        {
          postrenderedChildMap1 ,
          setPostrenderedChildMap1 ,
        } ,
        {
        } ,
      ]) ;
    }
  ); 

  ["CompoundClipOps.MIXING" ] : { (src: Iterable<Blob> ) : Blob | XClpWithUi.RFor ; } = (
    (src) => {
      return (
        XClpWithUi.renderedsConcat([...src, ])
      ) ;
    }
  ) ;

}
namespace CompoundClipOps {
  ;
  export const MIXING : (
    never 
    | "MIXING"
    // | symbol
  ) = "MIXING";
} ;
class AggregatingClp extends CompoundClipOps<AggregatingClp> {
  // static readonly CHILDREN = "c" ;
  constructor(public children: readonly XClp[] , ...[p = {},] : [
    ({   }) ? ,
  ] ) {
    super() ;
    const {  } = p ;
  }

  WA = AggregatingClp ;
  toJson() {
    return (
      this.children
      .map(c => c.toJson() )
    ) ;
  }
  
  /**    
   * must
   */
  [XClp.UICLASS]: (
    React.FC<(
      Parameters<(
        XClpWithUi<AggregatingClp>[typeof XClp.UICLASS ]
      )>[0]
    )>
  ) = AggregatingClp.renderUi ;
  static renderUi = function (...[props,] : (
    Parameters<(
      XClpWithUi<AggregatingClp>[typeof XClp.UICLASS ]
    )>
  ) ): React.ReactElement {
    return (
      <AggregatingClp.RenderUi {...props} />
    ) ;
  }

}
namespace AggregatingClp {
  export const getExample = () => (
    new AggregatingClp([
      new AggregatingClp([], ) , 
      UtfClip.forText("[]", ) , 
      UtfClip.forText("maybe", ) , 
      UtfClip.forText("txtfile", ) , 
      UtfClip.forText((() => {
        const c0 = (
          ReactDraft.convertFromHTML((
            Range(0, 3, )
            .map(_ => (
              `<p> typing using <i>Draft.js</i> so fast <br/> so <b>in hurry</b> to finish the movie </p> <p> they <s>don't</s> do that </p> `
            ))
            .join("\n")
          ))
        ) ;
        const c = (
          ReactDraft.ContentState.createFromBlockArray(c0.contentBlocks, c0.entityMap, )
        ) ;
        return (
          ReactDraft.EditorState.createWithContent(c, )
        ) ;
      } )() , ) , 
      OverlayingClip.fromSeq([], ) , 
    ], )
  ) ;
}
const OverlayingClip = (
  class OvrlClp extends CompoundClipOps<OvrlClp> {
    // static readonly CHILDREN = "c" ;
    constructor(public children: readonly XClp[] , ...[p = {},] : [
      ({   }) ? ,
    ] ) {
      super() ;
      const {  } = p ;
    }
    static fromSeq(c: readonly XClp[] ) {
      return (
        new OvrlClp(c, )
      ) ;
    }
  
    WA = OvrlClp ;
    toJson() {
      return {
        "$$typeof" : "OverlNode" ,
        children: (
          this.children
          .map(c => c.toJson() )
        ) ,
      } ;
    }

    static getExample = () => (
      new OvrlClp([
        new OvrlClp([], ) , 
        UtfClip.forText("[]", ) , 
        UtfClip.forText("maybe", ) , 
      ], )
    ) ;
    
    /**    
     * must
     */
    [XClp.UICLASS]: (
      React.FC<(
        Parameters<(
          XClpWithUi<OvrlClp>[typeof XClp.UICLASS ]
        )>[0]
      )>
    ) = OvrlClp.renderUi ;
    static renderUi = function (...[props,] : (
      Parameters<(
        XClpWithUi<OvrlClp>[typeof XClp.UICLASS ]
      )>
    ) ): React.ReactElement {
      return (
        <OvrlClp.RenderUi {...props} />
      ) ;
    }
  
  }
) ;
interface TextualClipOps {
  "$$typeof" ?: string ;
  text : (
    null 
    | boolean 
    | number 
    | string 
    | object
  ) ;
}
namespace TextualClipOps {
  ;
}
const UtfClip = (
  class UtfClipImpl extends XClp implements XClpWithUi<UtfClipImpl> {
    // static readonly CHILDREN = "c" ;
    protected constructor(
      public value: (
        never 
        // | null 
        // | boolean 
        // | number 
        | string 
        // | object
        | (ReactDraft.EditorState )
        | (ReactDraft.ContentState )
      ) , 
      public durationSecs : number ,
    ) {
      super() ;
    }
    withProperty(a: (
      EitherSetAndOthersUnset<(
        Pick<UtfClipImpl, "durationSecs" | "value">
      )>
    ) ) {
      const { durationSecs = this.durationSecs , } = a ;
      const { value = this.value } = a ;
      return (
        new UtfClipImpl(value, durationSecs, )
      ) ;
    }
    static forText(v: UtfClipImpl["value"] ) {
      return (
        new UtfClipImpl(v, 8, )
      ) ;
    } ;

    toJson(): TextualClipOps {
      // TODO
      return (
        { 
          text : this.value , 
        }
      ) ;
    }
    hashCode(): string | number {
      const value = this.value ;
      if (typeof value === "string") {
        return this.toString(false, ) ;
      }
      if ((
        true
        && (
          false 
          || value instanceof ReactDraft.EditorState
          || value instanceof ReactDraft.ContentState
        )
      ) ) {
        return (
          JSON.stringify({
            content : (
              JSON.stringify((
                (() => {
                  if (value instanceof ReactDraft.EditorState ) {
                    return value.getCurrentContent() ;
                  }
                  if (value instanceof ReactDraft.ContentState ) {
                    return value ;
                  }
                  return value ;
                } )()
              ))
            ) ,
            undoStackSize : (
              (value instanceof ReactDraft.EditorState ) ?
              value.getUndoStack().size
              : 0
            ) ,
          } , null, 2, )
        ) ;
      }
      return "{ text: <content> , }" ;
    }

    /**    
     * must
     */
    [XClp.UICLASS] = UtfClipImpl.RenderUi ;
    static RenderUi: (
      React.FC<(
        ComponentProps<XClpWithUi<UtfClipImpl>[typeof XClp.UICLASS ] >
      )>
    ) = function TextualClipR(...uArgs : (
      Parameters<(
        XClpWithUi<UtfClipImpl>[typeof XClp.UICLASS ]
      )>
    ) ): React.ReactElement {
      const [
        { value: p, onChange, onUpdatedRendered: onUpdatedRendered0 = null, },
      ] = uArgs ;
      const {
        editorStateChangeWithMaintainedCOntentState = "propagate" ,
      } : (
        Partial<{ editorStateChangeWithMaintainedCOntentState : "elide" | "propagate" ; }>
      ) = {} ;
      const updatedP = (
        useUpdatedCallback(() => p )
      ) ;
      const { value, } = p ;
      const { durationSecs: clipDUrationSecs, } = p ;
      const occc  = useDepsChgCount({}, React.useDeferredValue([onChange, ]), ) ;
      const { 
        onTextContentChg1 = null ,
        onDurativePRopertyChg = null ,
      } = (
        React.useMemo(() => (
          onChange  
          ?
          {
            onTextContentChg1 : (
              function (e: ReactDraft.EditorState, ): void {
                console["log"](UtfClipImpl.name, TextualClipR.name, "onTextContentChg1", `typing detected`) ;
                console["log"]({ occc , }) ;
                onChange(p.withProperty({ value: e, }) ) ;
              }
            ) ,
            onDurativePRopertyChg : (
              function (e: number, ): void {
                onChange(p.withProperty({ durationSecs: e, }) ) ;
              }
            ) ,
          }
          : {}
        ) , [onChange, ] )
      ) ;
      const [
        editor, { editorState: actualEditorState = null, contentState: actualCOntentState = null, } = {},
      ] = React.useMemo(() => {
        return (
          false 
          || (
            UtfClipImpl.renderContentEditor(value, onTextContentChg1 && ((e: ReactDraft.EditorState) => {
              if ((
                editorStateChangeWithMaintainedCOntentState === "elide" 
                && e.getCurrentContent() === actualCOntentState 
              )) {
                return ;
              }
              return (
                onTextContentChg1(e)
              ) ;
            }), )
          ) 
          || [
            (
              <p>
                (unable to display the content)
              </p>
            ) ,
          ]
        ) ;
      } , [ value, onTextContentChg1, ], ) ;
      const { contentState: contentState1, } = ((): (
        {}
        & { contentState: Exclude<typeof value, ReactDraft.EditorState> ,  }
      ) => {
        if (value instanceof ReactDraft.EditorState ) {
          /**    
           * {@link ReactDraft.EditorState }s 
           * is effectively MSB (due to *undo-redo-stacks* etc) .
           * only use its `.getCurrentContent()` .
           * 
           */
          return { contentState: value.getCurrentContent(), } ;
        }
        if (value instanceof ReactDraft.ContentState ) {
          return { contentState: value, };
        }
        return { contentState: value, } ;
      } )() ;
      const editorStateChgCount        = useDepsChgCount({}, React.useDeferredValue([actualEditorState, ]), ) ;
      const valueChgCount              = useDepsChgCount({}, React.useDeferredValue([value, ]), ) ;
      const actualCOntentStateChgCOunt = useDepsChgCount({}, React.useDeferredValue([actualCOntentState, ]), ) ;
      const cscc = (
        useDepsChgCount({}, [contentState1, ], )
      ) ;
      const contentStateStringReprBrief = (
        String(contentState1)
        .replace(/^([^]{500,500})[^]{50,}$/ , "$1..." , )
      ) ;
      const durativePropertyDisplayLabel = (
        <WithInputState 
        value={clipDUrationSecs } 
        children={(...[dsbValue, dsbSldUpdate, dsbSlideClose,] ) => (
          <p>
            duration: {}
            <input 
            title={dsbValue.toFixed(3, ) }
            type={"range"}
            min={0 }
            max={60 }
            // step="any"
            step={0.25 }
            value={dsbValue }
            {...(
              onDurativePRopertyChg ?
              {
                onChange: (e) => (dsbSldUpdate(+e.target.value ) ) ,
                onPointerUp: () => {
                  onDurativePRopertyChg(dsbValue ) ;
                  dsbSlideClose() ;
                } ,
              }
              : {
                readOnly: true ,
              }
            )}
            style={{
              // minInlineSize: `85%` ,
            }}
            /> {}
            <code>{ dsbValue.toPrecision(2) }</code> {}
            seconds
          </p>
        )}
        />  
      ) ;
      const screengrabCallDeps: React.DependencyList = (
        usePreviewPaneCtrlDebouncedValue([
          contentState1 ,
          clipDUrationSecs ,
        ])
      ) ;
      const onUpdatedRendered01 = (
        React.useMemo(() => (
          onUpdatedRendered0 
          ?
          ((...a : Parameters<typeof onUpdatedRendered0 > ) => {
            if (updatedP() !== p ) {
              console["error"](`stale 'p' `) ;
            }
            return (
              onUpdatedRendered0(...a )
            ) ;
          })
          : null
        ) , [onUpdatedRendered0, ])
      ) ;
      const [
        {
          onUpdatedRendered ,
          oureCallCountGlb ,
          oureRewrapCount1 ,
          oureCallCountLcl ,
    
          oureRewrapCount ,
          orcbChgCOunt ,
    
          eHCaptureP ,
          eHCapturePreview , 
          ehcpChgCOunt ,
    
          rcm , 
          rcmChgCount ,
        } ,
        screengrabRef1 ,
      ] = (
        useRefStateRenderPreviewAndCallBack1({ 
          onUpdatedRendered0: onUpdatedRendered01, 
          contentStateStringReprBrief,
          originalEs: [p, ] ,
        })
      ) ;
      if (0 < editorStateChgCount && (editorStateChgCount % 1000 ) === 0 ) {
        console["error"]({ editorStateChgCount, });
        console["error"]((
          TypeError(`sniffed brute-force 'editorStateChgCount' refresh`)
        )) ;
      }
      if (0) {
        throw Error() ;
      }
      const debugSection = (
        ((
          <div>
          <pre>
          { JSON.stringify({ 
            valueChgCount ,
            occc ,
            editorStateChgCount ,
            actualCOntentStateChgCOunt ,
            cscc ,
            
            // ouro0RewrapCount ,
            // ouro0CallCount ,
            oureRewrapCount ,
            oureRewrapCount1,
            oureCallCountGlb ,
            oureCallCountLcl ,
            
            ehcpChgCOunt, 
            orcbChgCOunt, 
            rcmChgCount ,
            rcm ,

          }, null, 2, ) }
          </pre>
          </div>
        ))
      ) ;
      return (
        <DbgAndMain>
        <XDbgArticle>
          { null && debugSection }
        </XDbgArticle>
        <CWithTitleAndRasteriseTestPane 
        {...{
          title: (
            <p>
              Text-Reading
            </p>
          ) ,
          children: (
            <div>
              <div>
              { durativePropertyDisplayLabel }
              </div>
              <blockquote  >
               {editor }
              </blockquote>
            </div>
          ) ,
          generatedVideoDuration: (
            clipDUrationSecs
          ) ,
          scgbDeps: (
            screengrabCallDeps
          ) ,
          capturePreviewRef: (
            screengrabRef1
          ) ,
        }}
        />
        </DbgAndMain>
      ) ;
    }
    withTrimmedUndoStack(): UtfClipImpl {
      const { value, } = this ;
      if (value instanceof ReactDraft.EditorState ) {
        const s = value ;
        return (
          this.withProperty({
            value: (
              xDraftWithTrimmedUndoRedoStacks(s, )
            ) ,
          })
        ) ;
      }
      return this ;
    } 

    static renderContentEditor = (
      function renderContentEditorImpl(...[value, onChange1 = null, ] : [
        value : UtfClipImpl["value"] ,
        onChange ?: ((e: ReactDraft.EditorState) => void) | null ,
      ] ): (
        never
        | false
        | [
          React.ReactElement, 
          (
            {}
            & { contentState : ReactDraft.ContentState ;   }
            & { editorState : ReactDraft.EditorState ; }
          ), 
        ]
      ) {
        const renderXDE = (
          (...a : Parameters<typeof renderXDraftEditorAndDebug>): ReturnType<typeof renderContentEditorImpl> => {
            const [e, { editorState, }, ] = (
              renderXDraftEditorAndDebug(...a )
            ) ;
            return [
              e, 
              { 
                contentState: editorState.getCurrentContent(),  
                editorState: editorState ,
              } ,
            ] ;
          }
        ) ;
        if ((
          true
          && (
            false
            || value instanceof ReactDraft.EditorState 
            || value instanceof ReactDraft.ContentState 
          )
        )) {
          return (
            renderXDE({ 
              value: value, 
              onChange: onChange1, 
            })
          ) ;
        }
        if (typeof value === "string") {
          ;
          const valueAsDraftJsContentState = (
            ReactDraft.ContentState.createFromText(value, )
          ) ;
          return (
            renderXDE({
              value: (
                valueAsDraftJsContentState
              ) ,
              onChange: onChange1 ,
            })
          ) ;
        }
        return (
          false
        ) ;
      }
    ) ;
    
  }
) ; 
const useRefStateRenderPreviewAndCallBack1 = (
  (...pfrArgs : [
    (
      {}
      // ComponentProps<XClpWithUi<UtfClipImpl>[typeof XClp.UICLASS ] >
      & { 
        /**   
         * the `onUpdatedRendered` value as specified in the props, or
         * null if were left unset.
         * 
         */
        onUpdatedRendered0 : (
          null | 
          Required<ComponentProps<XClpWithUi<never>[typeof XClp.UICLASS ] > >["onUpdatedRendered"]
        ) ;
       }
      & { 
        /**   
         * brief summary of the rendered content for purpose of {@link Object.prototype.toString }
         * 
         */
        contentStateStringReprBrief: string ;
      }
      & { 
        /**    
         * this is necessary since 
         * multiple different models can give rise to equivalent rendering.
         * whenever this `DependencyList` changes then
         * this would make another call of `onUpdateRendered` with existing maintained rendering.
         * 
         */
        originalEs: React.DependencyList ;
      }
    ) ,
  ] ) => {
    const [
      { 
        onUpdatedRendered0, 
        contentStateStringReprBrief, 
        originalEs ,
      } ,
    ] = pfrArgs ;
    ;
    const [
      onUpdatedRendered, 
      oureCallCountGlb ,
      { 
        rewrapCount: oureRewrapCount1 ,
        perRewrapCallCount: oureCallCountLcl ,
      } ,
    ] = (
      (function useC1() {
        const cb = (
          /**    
           * the wrapped callback was from `OnYyy` props.
           * therefore,
           * expect the identities to be ill-defined
           * 
           */
          useUpdatedCallback(onUpdatedRendered0 || Object , )
          // onUpdatedRendered0
        ) ;
        return (
          // TODO remove this step
          useCallbackCount(cb, [cb, ])
        ) ;
      } )()
    ) ;
    /**    
     * note :
     * since the examined `function` originated from `useReducer`,
     * the return-value shall remain `1` or `2` (`2` due to {@link React.StrictMode }) .
     * 
     */
    const oureRewrapCount = (
      useDepsChgCount({}, [onUpdatedRendered, ] , )
    ) ;
    const orcbChgCOunt = (
      useDepsChgCount({} , [onUpdatedRendered, ], )
    ) ;
    ;
    const [screengrabResult1, screengrabRef1, ] = (
      React.useState<null | ReturnType<typeof useHScreenGrabbing1>[0] >(null, )
    ) ;
    const {
      eHCaptureP = null ,
      eHCapturePreview = null ,
    } = screengrabResult1 || {} ;
    const ehcpChgCOunt = (
      useDepsChgCount({} , [eHCaptureP, ], )
    ) ;
    const rcm = (
      React.useMemo(() => (
        // 1 ? (await eHCaptureP) :
        new (class T_EHCP extends XClpWithUi.RFor {
          toString() {
            const s = (
              contentStateStringReprBrief
            ) ;
            return `[${this[Symbol.toStringTag] } : ${s }]` ;
          }
          [Symbol.asyncIterator] = async function *() {
            eHCaptureP && (
              yield* [await eHCaptureP,]
            ) ;
          }
        } )
      ) , [eHCaptureP, ] , )
    ) ;
    const rcmChgCount = (
      useDepsChgCount({}, [rcm, ] , )
    ) ;
    { }
    /**    
     * can be deferred.
     * 
     */
    React["useEffect"](() => {
      onUpdatedRendered(rcm, ) ;
    } , [onUpdatedRendered, rcm , ...originalEs, ], ) ;
    ;
    {
      const ctrl = {
        // onUpdatedRendered, 
        // oureCallCountGlb ,
        // { 
        //   rewrapCount: oureRewrapCount1 ,
        //   perRewrapCallCount: oureCallCountLcl ,
        // } ,
        onUpdatedRendered ,
        /** DEBUGGING-ONLY */ oureCallCountGlb ,
        /** DEBUGGING-ONLY */ oureRewrapCount1 ,
        /** DEBUGGING-ONLY */ oureCallCountLcl ,
  
        /** DEBUGGING-ONLY */ oureRewrapCount ,
        /** DEBUGGING-ONLY */ orcbChgCOunt ,
  
        // screengrabRef1 ,
        eHCaptureP ,
        eHCapturePreview ,
        /** DEBUGGING-ONLY */
        ehcpChgCOunt ,
  
        rcm ,
        /** DEBUGGING-ONLY */
        rcmChgCount ,
      } ;
      return ((): [inferredValues: typeof ctrl, ref: typeof screengrabRef1, ] => (
        [ctrl, screengrabRef1, ]
      ) )() ;
    }
  }
) ;
const CWithTitleAndRasteriseTestPane = (() => {
  ;
  const main = (
  SS.identity<{
    (props : (
      React.PropsWithChildren<(
        {}
        & { title: React.ReactElement ; }
        & Partial<{ 
          /**    
           * {@link React.DependencyList } to signify when(ever) to tick another grab.
           * 
           */
          scgbDeps: React.DependencyList ;
        }>
        & Partial<{ capturePreviewRef: React.Dispatch<ReturnType<typeof useHScreenGrabbing1  >[0] > ; }>
        & Partial<{ generatedVideoDuration: number ; }>
      )>
    )): React.ReactElement ; 
  }>(function CWithTitleAndRasteriseTestPane ({ 
    children: main, 
    title, 
    scgbDeps : scgbDeps0 = null , 
    capturePreviewRef: capturePreviewCallbackRef0 ,
    generatedVideoDuration ,
  }) {
    const [
      capturePreviewCallbackRef ,
      cpcrCallCountGlb ,
      {
        rewrapCount : cpcrRewrapCount ,
        perRewrapCallCount: cpcrCallCountLcl ,
      } ,
    ] = (
      useCallbackCount(capturePreviewCallbackRef0 || Object, [capturePreviewCallbackRef0, ])
    ) ;
    const [fallbackIntervalRefreshKey1, {}, ] = useScgbDependenciesDefaultntervalRefresh() ;
    const scgbDeps = (
      /**    
       * explicit spec takes prescedence
       * 
       */
      scgbDeps0 || [
        [fallbackIntervalRefreshKey1, ] ,
      ]
    );
    const [{ eHCapturePreview, eHCaptureP, }, mref1, ] = (
      useHScreenGrabbing1({ 
        captureDeps: scgbDeps, 
      })
    ) ;
    React.useImperativeHandle((
      capturePreviewCallbackRef &&
      identity<React.Ref<ReturnType<typeof fromEhCp > > >(capturePreviewCallbackRef, )
    ), () => {
      const eHCapturePAsMv = (
        eHCaptureP &&
        ((() => {
          0 && console["log"](eHCaptureP, ) ;
          return (
            async (...[p0, ] : [Promise<File>, ]) => {
              const ffmpeg = (
                await newFfmpeg1()
              ) ;
              const p = await p0 ;
              return (
                await (
                  pngAsWebm(p, { 
                    generatedClipDurationSecs: generatedVideoDuration, 
                    impl: ffmpeg, 
                    quality: "realtime-preview", 
                  }, )
                )
              ) ;
              // TODO
            }
          ) ;
        } )() )(eHCaptureP, ) 
      ) ;
      return (
        fromEhCp(eHCapturePAsMv, )
      ) ;
    }, [eHCaptureP, ], )   ;
    const ehcpChangeCount = (
      useDepsChgCount({}, [eHCaptureP, ], )
    ) ;
    const debugSection = (
      React.useDeferredValue((
        <div>
          <pre>
            { JSON.stringify({ 
              cpcrRewrapCount ,
              cpcrCallCountGlb ,
              cpcrCallCountLcl ,
              ehcpChangeCount ,
            }, null, 2, ) }
          </pre>
        </div>
      ))
    ) ;
    const em1 = (
      renderPairwise((
        <div>
          <div>
            { title }
          </div>
          <div 
          style={{ 
            display: "flex", 
            flexDirection: "column", 
            // display: "block", 
            resize: "block", 
            // // height: "6.5em" ,
            // blockSize: "6.5em" ,
            // overflowY: "auto" ,
            overflowBlock: "auto" ,
            overflow: "auto" ,
            maxBlockSize: "12.5em" ,
            minBlockSize: "9em" ,
          }}
          >
            <div ref={mref1 }>
              { main }
            </div>
          
          </div>
        </div>
      ) , (
        <div 
        style={{ 
          overflow: "auto", 
          // inlineSize: `12em` ,
          // maxBlockSize : `12em `,
          blockSize : `12em `,
          display: "flex",
          flexDirection: "column",
        }}
        >
        { eHCapturePreview }
        </div>
      ))
    ) ;
    return (
      <DbgAndMain>
        <XDbgArticle>
        { null && debugSection }
        </XDbgArticle>
        <div>
        { em1 }
        </div>
      </DbgAndMain>
    ) ;
  } )
  ) ;
  const fromEhCp = (
    function (eHCaptureP: null | Promise<File>, ): ReturnType<typeof useHScreenGrabbing1  >[0] { 
      return (
        eHCaptureP 
        ?
        {
          eHCapturePreview: (
            <FutureBlobBasedImgElemWithTimestamp 
            value={eHCaptureP}
            />
          ) ,
          eHCaptureP: eHCaptureP ,
        }
        : { eHCapturePreview: null, eHCaptureP: null, }
      ) ;
  }
  ) ;
  const useScgbDependenciesDefaultntervalRefresh = (() => {
    // function implIncrement(v: symbol ) : symbol ;
    // function implIncrement(v: number ) : number ;
    function implIncrement(v: symbol | number ) {
      return (typeof v === "number" ? (v + 1 ) : Symbol() ) ;
    } ;
    return (
      function useIntervalRefresh() {
        const [c, increment, ] = (
          React.useReducer(implIncrement , Symbol() )
        ) ;
        React.useLayoutEffect(() => {
          const interval1 = setInterval(increment, (2 + Math.random() ) * 1000 , ) ;
          return () => { clearInterval(interval1, ) ; } ;
        } , [] , ) ;
        const ops = {} ;
        return ((): [typeof c, typeof ops,] => [c, ops,] )() ;
      }
    ) ;
  } )() ;;
  return (
    main
  ) ;
} )() ;




export {
  XClp ,
  XClpWithUi ,
} ;
export {
  AggregatingClp ,
  OverlayingClip ,
  UtfClip ,
} ;






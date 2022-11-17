
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
  withTrimmedUndoRedoStacks: xDraftWithTrimmedUndoRedoStacks ,
} = XDraftEditorUtil ;

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

      postrenderedChildSeq ,
      
      setPerItemRendered1 ,

      spcsCallCountGlb ,
      spcsRewrapCount ,
      spcsCallCountLocl ,
      
    } = (
      XClipSeqEditor.useChildrenRenderState1({ 
        actualChildrenArity: (
          p.children.length
        ), 
      }, )
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
    const debugSection = (
      React.useDeferredValue((
        <div>
          <pre>
            { JSON.stringify({ 
              childrenN: p.children.length, 
              // lrccRewrapCount ,
              // lrccCallCount , 
              spcsRewrapCount,
              spcsCallCountGlb,
              spcsCallCountLocl ,
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
              referentialKey: key ,
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
                  markFocused() ;
                  onAggregateChange((
                    p.withItemReplacingAtIndex(newItem, i, )
                  ), { focus: "keep", }, );
                  return ({
                    newItem: newItem ,
                  }) ;
                }
              ) , 0.5 * 1000 , { leading: true, } )
            ) ;
            const keyingDbgModeE = (() : null | React.ReactElement => {
              switch (0 as number ) {
                case 1 : 
                return (
                  <React.Fragment>
                  { <span>(referential key: {key})</span> }
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
                  `referential hash: ${key }` ,
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
              c.renderUi({ 
                onChange: (
                  onCurrentItemChange || Object
                ) ,
                onUpdatedRendered: (...[newR, ]) => {
                  setPerItemRendered1({ i: i, }, newR,)
                } ,
              })
            ) ;
            return (
              <React.Fragment 
              key={key }
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
                  { mainContent }
                </IonLabel>
              </IonItem>
              </React.Fragment>
            ) ;
          } )
        ) }
        </IonReorderGroup>
        </IonList>
        </div>
      ) ;
    } )() ;
    return (
      <DbgAndMain>
      <XDbgArticle>
        { debugSection }
      </XDbgArticle>
      { mainNonDebugSec }
      </DbgAndMain>
    ) ;
  } ;

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
      new UtfClip("[]", ) , 
      new UtfClip("maybe", ) , 
      new UtfClip("txtfile", ) , 
      new UtfClip((() => {
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
      new OverlayingClip([], ) , 
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
        new UtfClip("[]", ) , 
        new UtfClip("maybe", ) , 
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
    constructor(
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
    ) {
      super() ;
    }

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
        (
          Parameters<(
            XClpWithUi<UtfClipImpl>[typeof XClp.UICLASS ]
          )>
        )[0]
      )>
    ) = function TextualClipR(...uArgs : (
      Parameters<(
        XClpWithUi<UtfClipImpl>[typeof XClp.UICLASS ]
      )>
    ) ): React.ReactElement {
      const [
        { value: p, onChange, onUpdatedRendered: onUpdatedRendered0, },
      ] = uArgs ;
      const { value, } = p ;
      // TODO remove this
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
            useCallbackCount(cb, [cb, ])
          ) ;
        } )()
      ) ;
      const onChange1 = (
        onChange 
        ?
        function (e: ReactDraft.EditorState, ): void {
          onChange(new UtfClipImpl(e, ) ) ;
        }
        : null
      ) ;
      const [editor,] = (() => {
        return (
          false 
          || (
            UtfClipImpl.renderContentEditor(value, onChange1, )
          ) 
          || [
            (
              <p>
                (unable to display the content)
              </p>
            ) ,
          ]
        ) ;
      })() ;
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
      const contentStateStringReprBrief = (
        String(contentState1)
        .replace(/^([^]{500,500})[^]{50,}$/ , "$1..." , )
      ) ;
      const screengrabCallDeps = [
        usePreviewPaneCtrlDebouncedValue(contentState1, ) ,
      ] ;
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
      const [screengrabResult1, screengrabRef1, ] = (
        React.useState<null | ReturnType<typeof useHScreenGrabbing1>[0] >(null, )
      ) ;
      const {
        eHCaptureP ,
        eHCapturePreview ,
      } = screengrabResult1 || {} ;
      const ehcpChgCOunt = (
        useDepsChgCount({} , [eHCaptureP, ], )
      ) ;
      const rcm = (
        React.useMemo(() => (
          new (class T_EHCP extends XClpWithUi.RFor {
            toString() {
              const s = (
                contentStateStringReprBrief
              ) ;
              return `[T_EHCP : ${s }]` ;
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
      } , [onUpdatedRendered, rcm ,], ) ;
      const debugSection = (
        React.useDeferredValue((
          <div>
          <pre>
          { JSON.stringify({ 
            // ouro0RewrapCount ,
            // ouro0CallCount ,
            oureRewrapCount ,
            oureRewrapCount1,
            oureCallCountGlb ,
            oureCallCountLcl ,
            ehcpChgCOunt, 
            orcbChgCOunt, 
            rcmChgCount ,
          }, null, 2, ) }
          </pre>
          </div>
        ))
      ) ;
      return (
        <DbgAndMain>
        <XDbgArticle>
          { debugSection }
        </XDbgArticle>
        <CWithTitleAndRasteriseTestPane 
        {...{
          title: (
            <p>
              Text-Reading
            </p>
          ) ,
          children: (
            <blockquote  >
            {editor }
            </blockquote>
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
          new UtfClipImpl((
            xDraftWithTrimmedUndoRedoStacks(s, )
          ))
        ) ;
      }
      return this ;
    } 

    static renderContentEditor = (
      function (...[value, onChange1 = null, ] : [
        value : UtfClipImpl["value"] ,
        onChange ?: ((e: ReactDraft.EditorState) => void) | null ,
      ] ): (
        never
        | false
        | [React.ReactElement, { contentState : ReactDraft.ContentState ; }, ]
      ) {
        if ((
          true
          && (
            false
            || value instanceof ReactDraft.EditorState 
            || value instanceof ReactDraft.ContentState 
          )
        )) {
          return [
            (
              renderXDraftEditor({ 
                value: value, 
                onChange: onChange1, 
              })
            ) ,
            {
              contentState : (
                (value instanceof ReactDraft.EditorState ? value.getCurrentContent() : value )
              ) ,
            } ,
          ] ;
        }
        if (typeof value === "string") {
          ;
          const valueAsDraftJsContentState = (
            ReactDraft.ContentState.createFromText(value, )
          ) ;
          return [
            (
              renderXDraftEditor({
                value: (
                  valueAsDraftJsContentState
                ) ,
                onChange: onChange1 ,
              })
            ) ,
            { contentState: valueAsDraftJsContentState, } ,
          ] ;
        }
        return (
          false
        ) ;
      }
    ) ;
    
  }
) ; 
const CWithTitleAndRasteriseTestPane = (() => {
  ;
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
  return (
  SS.identity<{
    (props : (
      React.PropsWithChildren<(
        {}
        & { title: React.ReactElement ; }
        & Partial<{ scgbDeps: React.DependencyList ; }>
        & Partial<{ capturePreviewRef: React.Dispatch<ReturnType<typeof useHScreenGrabbing1  >[0] > ; }>
      )>
    )): React.ReactElement ; 
  }>(function CWithTitleAndRasteriseTestPane ({ 
    children: main, 
    title, 
    scgbDeps : scgbDeps0 = null , 
    capturePreviewRef: capturePreviewCallbackRef0 ,
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
          return (
            async (...[p0, ] : [Promise<File>, ]) => {
              const ffmpeg = (
                await newFfmpeg1()
              ) ;
              const p = await p0 ;
              return (
                await (
                  pngAsWebm(p, { impl: ffmpeg, quality: "realtime-preview", }, )
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
        { debugSection }
        </XDbgArticle>
        <div>
        { em1 }
        </div>
      </DbgAndMain>
    ) ;
  } )
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






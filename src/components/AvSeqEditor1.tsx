
import SS from "lodash" ;
import { Seq, List, Map, Set, } from "immutable";
import { Range, } from "immutable";
import { Stack, } from "immutable";
import React from 'react';
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
import { ellipse, square, triangle } from 'ionicons/icons';
import { camera, image, film, play, pause, } from 'ionicons/icons';
import downloadGivenBlob from 'components/files-dialogues/downloadGivenBlob';
import 'draft-js/dist/Draft.css'; // integral CSS
import * as ReactDraft from 'draft-js';
import * as XDraftEditorUtil from "components/useDraftEditor1" ;
import documentNodeToPng from "./documentNodeToPng";

import {
  ffmpSvcLd ,
  ffAppLd as ffRenderDemoSvcLd ,
} from "components/ffmpg-renderdemo1" ;

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
  renderUi<A extends XClp & XClpWithUi<A> >(...[p = {},] : [
    (
      {}
      & { onChange ?: { (newValue: A, ): void ; } ; }
    ) ? ,
  ] ) {
    const this1 = this as XClp as A ;
    const C = this1[XClp.UICLASS] ;
    return (
      <C {...{ value: this1, }} {...p} />
    ) ;
  }
  withTrimmedUndoStack(
    // props ?: {} ,
  ) : XClp {
    return this ;
  }

} ;
namespace XClp {
}
interface XClpWithUi<A extends XClp & XClpWithUi<A> > extends XClp {
  
  /**     
   * this shall define the `Component` to render it.
   * 
   */
  [XClp.UICLASS] : (
    React.FC<(
      {}
      & { value : A ; }
      & { onChange ?: { (newValue: A, ): void ; } ; }
    )>
  ) ;

  //
} ;
namespace XClpWithUi { ; } // TS-1205

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
      & { onChange ?: { (newValue: Aggregate1, ): void ; } ; }
    )>
  ) ;
  static RenderUi = function <Aggregate10 extends CompoundClipOps<Aggregate10>> (...[{ value: p, onChange: onAggregateChange0, },] : (
    Parameters<(
      XClpWithUi<Aggregate10>[typeof XClp.UICLASS ]
    )>
  ) ) {
    type  Aggregate1 = Aggregate10 ;
    const Aggregate1 = p.WA ;
    const {
      focusedIndex ,
      preEditItemValue ,
      clearFocusState ,
      itemRenditionAt: itemRenditionAt ,
    } = (
      Lists.useRenderAndEditorStateSupport<XClp>({
        ItemHash: (c) => c.hashCode(  ) ,
      })
    ) ;
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
      { bootstrappingSection }
      <IonList>  
      <IonReorderGroup 
      {...(
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
      ) }
      >
      { (
        p.children
        .map((c: XClp, i: number ) => {
          const {
            switchFocusStateToThisItem: markFocused ,
            referentialKey: key ,
            contentualKey: actualKey ,
          } = (
            itemRenditionAt({ itemValue: c, }, i, )
          ) ;
          const isFocused = (
            focusedIndex === i
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
          const keyingDbg = (() : null | React.ReactElement => {
            switch (0 as number ) {
              case 1 : 
              return (
                <React.Fragment>
                { <span>(referential key: {key})</span> }
                { <span>(contentual key: {actualKey })</span> }
                <span>{ isFocused && "(editing)" }</span>
                </React.Fragment>
              ) ;
              default :
              return null ;
            }
          })() ;
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
              <IonReorder
              title={
                [
                  `#${i}` ,
                  `drag to reorder this.` ,
                  `=====================` ,
                  `referential hash: ${key }` ,
                  isFocused ? "(active/editing)" : null ,
                  `contentual hash: ${actualKey }` ,
                ]
                .filter(lne => !!lne )
                .join("\n")
              }
              >
                #{i } 
                { keyingDbg && (
                  <div style={{ display: "flex", flexDirection: "column", maxWidth: "5em", overflowX: "auto", }}>
                    { keyingDbg }
                  </div>
                ) }
              </IonReorder>
              <IonLabel>
                { c.renderUi({ onChange: onCurrentItemChange || Object , }) }
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
  } ;

}
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
    ) = function (...[{ value: p, onChange, },] : (
      Parameters<(
        XClpWithUi<UtfClipImpl>[typeof XClp.UICLASS ]
      )>
    ) ) {
      const { value, } = p ;
      const editor = ((): React.ReactElement => {
        {
          const onChange1 = (
            onChange 
            ?
            function (e: ReactDraft.EditorState, ): void {
              onChange(new UtfClipImpl(e, ) ) ;
            }
            : null
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
              renderXDraftEditor({ 
                value: value, 
                onChange: onChange1, 
              })
            ) ;
          }
          if (typeof value === "string") {
            ;
            return (
              renderXDraftEditor({
                value: (
                  ReactDraft.ContentState.createFromText(value, )
                ) ,
                onChange: onChange1 ,
              })
            ) ;
          }
          return (
            <p>
              (unable to display the content)
            </p>
          ) ;
        }
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
      const screengrabCallDeps = [
        useXDebouncedValue(contentState1, ) ,
      ] ;
      return (
        <CWithTitleAndRasteriseTest 
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
        }}
        />
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
    
  }
) ; 
const CWithTitleAndRasteriseTest = (
  SS.identity<{
    (props : (
      React.PropsWithChildren<(
        {}
        & { title: React.ReactElement ; }
        & Partial<{ scgbDeps: React.DependencyList ; }>
      )>
    )): React.ReactElement ; 
  }>(function C1 ({ 
    children: main, 
    title, 
    scgbDeps : scgbDeps0 = null , 
  }) {
    const [intervalRefresh1, {}, ] = useXIntervalRefresh() ;
    const scgbDeps = (
      /**    
       * explicit spec takes prescedence
       * 
       */
      scgbDeps0 || [
        intervalRefresh1 ,
      ]
    );
    const [{ eHCapturePreview, }, mref1, ] = (
      useHScreenGrabbing1({ 
        captureDeps: scgbDeps, 
      })
    ) ;
    return (
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
  } )
) ;
const useHScreenGrabbing1 = (() => {
  const C1 = (
    function FutureBlobBasedImgDisplayImpl({ value: pB, } : { value: Promise<Blob> ; } ) {
      const C = (
        React.useMemo(() => (
          React.lazy(async () => ({
            default: await (async (): (
              Promise<(
                React.FC<(
                  { cRef : React.Ref<false | React.ReactElement > ; }
                )>
              )>
            ) => {
              try {
                const b = await pB ;
                const date = (
                  b instanceof File ?
                  b.lastModified : null
                ) ;
                return function CImplSuccess ({ cRef, }) {
                  const e = (
                    <XBlobBasedImgDisplay 
                    value={b }
                    {...(date ? { mDate: date, } : {} ) }
                    />
                  ) ;
                  React.useImperativeHandle(cRef, () => e, [], ) ;
                  return e ;
                } ;
              } catch (z) {
                return function CImplFall({ cRef, }) {
                  React.useImperativeHandle(cRef, () => false as const, [], ) ;
                  return (
                    <div>
                      <p>Error</p>
                      <pre>
                        { (z instanceof Error ) ? z.stack : String(z) }
                      </pre>
                    </div>
                  ) ;
                } ;
              }
            })() ,
          }) )
        ) , [pB, ] , )
      ) ;
      const [r1, cRef1, ] = (
        /**    
         * note that unmounts will assign refs with `null`s as intermediate-state values, so
         * there arises need to specially treat `null`s as such
         * 
         */
        React.useReducer((...[v0, v1, ] : [
          v0: false | React.ReactElement ,
          v1 : null | (false | React.ReactElement) ,
        ] ) => {
          if (v1 === null ) {
            return v0 ;
          }
          if (v1 || (typeof v1 === "boolean" ) ) {
            return v1 ;
          }
          return v0 ;
        } , false, )
      ) ;
      return (
        <React.Suspense fallback={r1 || <div /> } >
          <C cRef={cRef1} />
        </React.Suspense>
      ) ;
    }
  );
  return (
    function ({
      captureDeps ,
    } : (
      {}
      & { captureDeps : React.DependencyList ; }
    ) ) {
      const [eH, eRef, ] = (
        React.useState<null | Element >(null, )
      ) ;
      const eHCaptureP = (
        React.useMemo(() => (
          eH && (
            documentNodeToPng(eH, { output: { format: "png", } , } , )
          )
        ) , [eH, ...captureDeps, ] , )
      ) ;
      const eHCapturePreview = (
        eHCaptureP
        &&  <C1 value={eHCaptureP} />
      ) ;
      ;
      React.useDebugValue([{ captureDeps, eH, }, ]) ;
      return [{ eHCaptureP, eHCapturePreview, } , eRef, ] as const ;
    }
  ) ;
} )() ;
const useXDebouncedValue = (
  function useDebouncedValue<A>(proposedVal: A, ) {
    const [v, setV, ] = (
      React.useState(() => proposedVal, )
    ) ;
    const setV1 = (
      React.useMemo(() => (
        SS.debounce(setV, 0.55 * 1000, )
      ) , [setV,] )
    ) ;
    React["useLayoutEffect"](() => {
      setV1(proposedVal) ; 
    } , [setV, proposedVal,] , )
    return v ;
  }
) ;
const useXIntervalRefresh = (() => {
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
const useXBlobObjUrl = (
  function useBlobObjUrlImpl(...[asBlob, mDate,] : [
    src: Blob, 
    srcDate: null | number, 
  ] ) {
    ;
    const [{ asUrl, }, setState, ] = (
      React.useState<(
        {}
        & (
          never
          | { asUrl: null ; captureDate ?: never ; }
          | { asUrl: string ; captureDate: null | number ; }
        )
      )>({ asUrl: null, }, )
    ) ;
    React["useLayoutEffect"](() => {
      const url = URL.createObjectURL(asBlob, ) ;
      setState(() => ({ asUrl: url, captureDate: mDate, }) ) ;
      return () => {
        setTimeout(() => {
          URL.revokeObjectURL(url, ) ;
        } , 30 * 1000 ) ;
      } ;
    } , [asBlob, ], ) ;
    ;
    return {
      asBlob ,
      asUrl ,
    } ;
  }
) ;
const XBlobBasedImgDisplay = (
  function CBlobBasedImgDisplayImpl(properties : (
    {}
    & { value: Blob ;  }
    & {  mDate ?: number ; }
  ) ) {
    const { value: asBlob, mDate = null, } = properties ;
    const {
      asUrl ,
    } = (
      useXBlobObjUrl(asBlob, mDate, )
    ) ;
    return (
      <div
      style={{
        display: "flex" ,
        flexDirection: "column-reverse",
      }}
      >
      <img 
      src={asUrl || "" }
      style={{
        // inlineSize: `12em` ,
        // blockSize : `12em` ,
        // background: "white" ,
        maxWidth: "unset" ,
      }}
      />
      <div 
      style={{ 
        position: "sticky", 
        insetBlock: 0, 
        insetInlineStart: 0, 
        fontSize: "75%" ,
        backdropFilter: `blur(3px) ` ,
      }}
      >
      { (typeof mDate === "number") && (
        <p>
          grab taken at
          <i>{ new Date(mDate, ).toString() }</i>
        </p>
      ) } |
      </div>
      </div>
    ) ;
  }
) ;
const {
  renderEditor: renderXDraftEditor ,
  withTrimmedUndoRedoStacks: xDraftWithTrimmedUndoRedoStacks ,
} = XDraftEditorUtil ;




export {
  XClp ,
  XClpWithUi ,
} ;
export {
  AggregatingClp ,
  OverlayingClip ,
  UtfClip ,
} ;






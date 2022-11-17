

import SS from "lodash" ;
import { Seq, List, Map, Set, } from "immutable";
import { Range, } from "immutable";
import { Stack, } from "immutable";
import React from 'react';
import { useIonModal, IonModal, } from "@ionic/react";
import { useBlockingPopupElement, } from "components/ActionNeededPopup1";
import 'draft-js/dist/Draft.css'; // integral CSS
import * as ReactDraft from 'draft-js';
import { 
  documentNodeAsSvgStandaloneCode, 
} from "components/documentNodeAsSvgFile";
import {
  svgStandaloneCodeAsSvgDataUrl ,
  svgStandaloneCodeAsDataUrl,
  svgStandaloneCodeAsUrl , 
} from "components/svgFileFromCode1";
import * as SvgFileFromCode from "components/svgFileFromCode1" ;



















export const {
  renderEditor: renderEditor ,
  withTrimmedUndoRedoStacks: withTrimmedUndoRedoStacks ,
} = {
  renderEditor: (
    function (...[{ value, onChange: onChange1 = null , }] : [
      (
        {} 
        & Partial<{ onChange : null | ((e: ReactDraft.EditorState) => void ) ; }>
        & { value : (
          never
          | ReactDraft.ContentState
          | ReactDraft.EditorState
        ) ; }
      ) ,
    ] ) {
      ;
      const { 
        EditorState ,
        Editor ,
      } = ReactDraft ;
      const edS = (function (): (
        ReactDraft.EditorState
      ) {
        if (value instanceof ReactDraft.EditorState ) {
          return value ;
        }
        if (value instanceof ReactDraft.ContentState ) {
          return ReactDraft.EditorState.createWithContent(value, ) ;
        }
        return (
          ReactDraft.EditorState.createEmpty() 
        ) ;
      } )() ;
      if (onChange1) {
        ;
        const edS1 = (
          ReactDraft.EditorState.set(edS, {
            decorator : (() : ReactDraft.CompositeDecorator => {
              return new (ReactDraft.CompositeDecorator)([
                {
                  strategy: (searchedBlock, callbk, c, ) => {
                    const searchedTxt = (
                      searchedBlock.getText()
                    ) ;
                    const chrs = (
                      searchedBlock.getCharacterList()
                    ) ;
                    // for (const [i, chr,] of chrs.entries() ) {
                    //   if (chr.getStyle().contains("STRIKETHROUGH") ) {
                    //     callbk(i, i+1, ) ;
                    //   }
                    // };
                    for (const { start: startIdx, end: endIdx, } of (() => {
                      const whetherOn = (
                        chrs
                        .map(chr => (
                          chr.getStyle().contains("STRIKETHROUGH")
                        ) )
                        .toMap()
                      ) ;
                      return (
                        whetherOn
                        .map((_, i, srcLs, ) => (
                          (
                            true 
                            && !whetherOn.get(i + -1 , false, )
                            && whetherOn.get(i, false, )
                          ) ?
                          { start: i, }
                          : null
                        ) )
                        .toList()
                        .filter((v) : v is (object & typeof v) => v instanceof Object )
                        .map(({ start, }) => ({
                          start: start ,
                          end: (
                            Range(start + 1 )
                            .filterNot(i => whetherOn.get(i, false, ) )
                            .first(Number.MAX_SAFE_INTEGER, )
                          ) ,
                        }) )
                      ) ;
                    })() ) {
                      // TODO
                      callbk(startIdx, endIdx, ) ;
                    }
                  } ,
                  component : (
                    function ({ children: children, } : (
                      {}
                      & React.PropsWithChildren
                    ) ) {
                      return (
                        <button 
                        disabled
                        style={{ 
                          // color: "gray", 
                          // textDecoration: `line-through solid currentcolor` ,
                          // textDecorationThickness: `1ex` ,
                          userSelect: "none" ,
                        }} 
                        >
                          { children }
                        </button>
                      ) ;
                    }
                  ) ,
                } ,
              ]) ;
            } )() ,
          } )
        ) ;
        const PWrp = (
          function ({ children: children, } : (
            {}
            & React.PropsWithChildren
          ) ) {
            return (
              <div
              style={{
                display: "flex" ,
                flexDirection: "row",
              }}
              >
                <div
                title="a paragraph"
                style={{
                  display: "flex" ,
                  flexDirection: "row",
                  borderInlineEnd: `0.375em solid currentcolor` ,
                  marginInlineEnd: `0.375em` ,
                }}
                > 
                  <span>&#xB6;</span>
                  <div>
                    { null && (
                    <div
                    style={{
                      userSelect: "none",
                    }}
                    >
                    <button type="button">
                      Delete 
                    </button>
                    <span>
                      Webkit User Select
                    </span>
                    <button type="button">
                      Add 
                    </button>
                    </div>
                    ) }
                  </div>
                </div>
                <div
                >
                  <div
                  style={{
                    paddingBlock: `0.10em 0.75em` ,
                    paddingInline: `0.10em 0.75em` ,
                  }}
                  >
                  { children }
                  </div>
                </div>
              </div>
            ) ;
          }
        );
        /**    
         * Draft coalesced adjacent, same-type blocks into one.
         * will need to break them apart, via {@link React.Children }
         * 
         */
        const eSplitted = (
          function (...[payload, mp, ] : [
            React.ReactNode ,
            { (child: React.ReactNode, ): React.ReactNode ; } ,
          ] ): React.ReactElement {
            return (
              <React.Fragment>
              { (
                React.Children.toArray(payload, )
                .map((payload, key, ) => (
                  <React.Fragment key={key} >
                  { mp(payload, ) }
                  </React.Fragment>
                ))
              ) }
              </React.Fragment>
            ) ;
          }
        ) ;
        return (
          <div>
            <FDE>
            <Editor 
            editorState={edS1 }
            onChange={onChange1 }
            blockRenderMap={(
              ReactDraft.DefaultDraftBlockRenderMap
              .merge((
                Map((
                  SS.identity<{
                    [k: string ] : {
                      element : string ,
                      aliasedElements ?: [string, ...(string[])] ,
                      wrapper ?: string | React.ReactElement ,
                    } ,
                  }>({
                    "unstyled": {
                      element: "div",
                      aliasedElements: ['p'],
                      wrapper: (() => {
                        const PWrp1 = (
                          ({ children: payload, } : React.PropsWithChildren ) => (
                            eSplitted(payload, payload => (
                              <div 
                              style={{ 
                                marginBlockEnd: "1em" , 
                                // border: `0.05em dashed currentcolor`,
                              }}
                              >
                              <PWrp children={payload } />
                              </div>
                            ) )
                          )
                        ) ;
                        return (
                          <PWrp1 />
                        ) ;
                      })() ,
                    }
                  })
                ))
              ))
            )}
            blockRendererFn={(c, ) => {
              ;
            }}
            keyBindingFn={(e) => {
              if (e.keyCode === 96 + 12 && ReactDraft.KeyBindingUtil.hasCommandModifier(e,) ) {
                return "dump" ;
              }
              return ReactDraft.getDefaultKeyBinding(e) ;
            } }
            // handleKeyCommand={(e) => {
            //   if (e === "dump") {
            //     return "handled" ;
            //   }
            //   return "not-handled" ;
            // } }
            />
            </FDE>
          <div>
          </div>
          </div>
        ) ;
      }
      return (
        <Editor 
        editorState={edS }
        readOnly
        onChange={e => {} }
        />
      ) ;
    }
  ) ,
  withTrimmedUndoRedoStacks : (
    (
      function (...[s,] : [ReactDraft.EditorState, ] ) {
        const presentlyRev = s.getCurrentContent() ;
        const undoStack = s.getUndoStack() ;
        const redoStack = s.getRedoStack() ;
        const {
          earliestRev ,
          latestUndoneRev ,
        } = {
          earliestRev    : undoStack.first() ,
          latestUndoneRev: redoStack.first() ,
        } ;
        const s2 = (
          ReactDraft.EditorState.set(s, {
            redoStack : (
              Stack<ReactDraft.ContentState>()
              .push(latestUndoneRev ?? presentlyRev )
            ) ,
            undoStack : (
              Stack<ReactDraft.ContentState>()
              .push(earliestRev ?? presentlyRev )
            ) ,
          }, )
        ) ;
        return (
          s2
        ) ;
      }
    )
  ) ,
} ;
const xToSvgWithFOreignobj = (
  documentNodeAsSvgStandaloneCode
) ;
const {
  consoleLOgSvgStandalone: xSvgStandaloneCodeToConsoleLog ,
} = SvgFileFromCode ;
const FDE = (
  function ({ children: payload, } : React.PropsWithChildren ) {
    const [popupPortalImpl, { replacePopupElem, }, ] = (
      useBlockingPopupElement()
    ) ;
    const [payloadDisplHandle, payloadDisplRef, ] = (
      React.useState<null | HTMLElement>(null, )
    ) ;
    const btn = (
      <button 
      type="button" 
      onClick={() => {
        console["log"](TypeError() ) ;
        payloadDisplHandle && (() => {
          /**   
           * can't make this call async since
           * that would result in race-condition .
           * use `<Suspense>` and (one-off) `React.lazy` instead .
           * 
           */
          replacePopupElem(() => {
            const C = (
              React.lazy(async () => {
                const code = (
                  documentNodeAsSvgStandaloneCode(payloadDisplHandle,)
                ) ;
                const url = (
                  await SvgFileFromCode.svgStandaloneCodeAsPortableImgUrl(code, )
                ) ; 
                return {
                  default : () => (
                    <img 
                    src={url }
                    />
                  ) ,
                } ;
              } )
            ) ;
            return {
              allowPopupClose: true ,
              popupElem: (
                <div>
                  <p>Print Preview</p>
                  <React.Suspense>
                  <blockquote>
                    <C />
                  </blockquote>
                  </React.Suspense>
                </div>
              ) ,
            } ;
          } ) ;
        })() ;
      } } 
      >
        Print-Preview 
      </button>
    ) ;
    return (
      <div>
      { popupPortalImpl }
      <div>
        <div ref={payloadDisplRef } >
        { payload }
        </div>
        { btn }
      </div>
      </div>
    ) ;
  }
) ;
(async () => {
  const cmlog = (
    xSvgStandaloneCodeToConsoleLog
  ) ;
  if (0) {
    ;
    cmlog(documentNodeAsSvgStandaloneCode(new Image() ) ) ;
    cmlog(documentNodeAsSvgStandaloneCode(document.createElement("article") ) ) ;
    cmlog((
      documentNodeAsSvgStandaloneCode((() => {
        const c = document.createElement("canvas") ;
        c.width = 500 ;
        c.height = 500 ;
        return c ;
      } )() ) 
    )) ;
  }
} )() ;












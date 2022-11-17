import { Seq, List, Range, } from 'immutable';
import { fromMmeContentType, } from 'components/url-contenttypes-1';
import { concatAsFfConvArgs, } from 'components/ffmpg-concat-1';
import React from 'react';
import { withImplicitSuspense, } from 'components/useSuspenseBoundary1';
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
  IonLoading ,
  IonProgressBar ,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import { camera, image, film, play, pause, } from 'ionicons/icons';
import { BlobBasedTimestampedImgDisplay, } from 'components/ImgElemWithTimestamp1';
import { useBlobObjAsEmbeddable, } from 'components/ImgElemWithTimestamp1';
import downloadGivenBlob from 'components/files-dialogues/downloadGivenBlob';
import ZipFile from "jszip" ;
import { fileNamesContentsItrCompileAsArray1 , } from "components/zipfile-gen-1" ;
import { zipfileInitWithFilesListNc ,          } from "components/zipfile-gen-1" ;
import { newZipFileBuilder ,          } from "components/zipfile-gen-1" ;

import {
  ffmpSvcLd ,
  ffAppLd as ffRenderDemoSvcLd ,
} from "components/ffmpg-renderdemo1" ;
import * as avSeqEditingSUpport from "components/AvSeqEditor1";
import * as ffConcat101 from "components/g-avse/ffm/concat/b101";
import {
  avFileBlobGeneratorConcat ,
} from "components/useMediaFilePostproc1" ;

const useAsyncMemo = (
  // TODO
  function <R>(...[callback, deps, ] : [
    { (ctx: {} & { aS: AbortSignal ; } , ): Promise<R > ; } ,
    React.DependencyList ,
  ] ) {
    const [p, setP, ] = (
      React.useState<Promise<R> >(async () => (
        await new Promise(() => /** leave it hanging */ {} )
      ) )
    ) ;
    React["useLayoutEffect"](() => {
      const a = new AbortController() ;
      const { signal, } = a ;
      setP(() => (
        callback({ aS: signal, }, )
      ) ) ;
      return () => {
        a.abort((
          TypeError((
            `UseAsyncMemo refreshing . usually due to change in 'deps' . `
          ))
        )) ;
      } ;
    } , deps , ) ;
    return p ;
  }
) ;

const xExpand1: typeof fileNamesContentsItrCompileAsArray1 = (
  fileNamesContentsItrCompileAsArray1
) ;

const {
  zipfiled1: xAvBlobListZip ,
  ffConcat ,
} = ffConcat101 ;












if (0) {
  const ffcc = (
    new Worker(`${process.env.PUBLIC_URL}/bb.js`, {
      name: `The FFMP Daemon` ,
      type: "classic" ,
    }, )
  ) ;
  ffcc.postMessage("s") ;
  new Worker(`${process.env.PUBLIC_URL}/service-worker.js` , {
    type: "classic" ,
  } ,)
}
{
  // alert(`${process.env.PUBLIC_URL}`) ;
  const ffcc = (
    // `http://localhost:8100/static/js/bundle.js`
    // `/static/js/bundle.js`
    // new URL('./deep-thought.js', import.meta.url)
    new Worker(new URL("pages/ffmpgd/bb", import.meta.url, ) , {
      name: `The FFMP Daemon` ,
      type: "classic" ,
    }, )
  ) ;
  ffcc.postMessage("s") ; 
}

const { 
  AggregatingClp ,
  UtfClip ,
} = avSeqEditingSUpport ; 
// eslint-disable-next-line import/first
import XClp = avSeqEditingSUpport.XClp ;
// eslint-disable-next-line import/first
import XClpWithUi = avSeqEditingSUpport.XClpWithUi ;
const XClpStructureDumpElem = (
  function (...[{ value: acl0, }] : [{ value : XClp ; }] ) {
    ;
    const acl = (
      React.useDeferredValue(acl0, )
    ) ;
    const aclCode = (
      React.useMemo(() => (
        acl.toString(true, )
      ) , [acl,] )
    ) ;
    return (
      <div
      style={{
        display: "block" ,
        maxHeight: "20em" ,
        overflow: "auto" ,
      }}
      >
        <div 
        style={{ 
        }}
        >
        <div style={{ zoom: `75%`, }}>
        <pre>
          { aclCode }
        </pre>
        </div>
        </div>
      </div>
    ) ;
  }
) ;
/**    
 * 
 */
const AvGenApp1 = (() => {
  const useXPreview = (
    function (...[rendered110,] : [
      null | Promise<Blob> ,
    ] ) {
      /**   
       * an indirection 
       * to deal with inevitable careless coding forgetting to put-in {@link React.useMemo } step
       * .
       * 
       */
      const rendered11 = (
        React.useDeferredValue(rendered110, )
      ) ;
      return (
        React.useMemo(() => {
          const C2 = (
            React.lazy(async () => {
              const r = (
                rendered11 &&
                await (
                  rendered11
                  .catch(async (e) => (
                    console["error"](e, )
                    ,
                    null
                  ))
                )
              ) ;  
              ;
              return { 
                default: (() => {
                  const VView = (
                    (...[{ value: v, }] : [{} & { value: Blob ; } , ] ) => {
                      const { asUrl: vUrl, } = (
                        useBlobObjAsEmbeddable(v, )
                      ) ;
                      return (
                        <video 
                        src={ vUrl || "" }
                        controls
                        loop
                        style={{
                          maxBlockSize: `100%`,
                          maxInlineSize: `100%`,
                          height: `16em` ,
                          backgroundColor: "black" ,
                          borderRadius: `0.5em` ,
                        }}
                        />
                      ) ;
                    }
                  ) ;
                  return (
                    () => {
                      if (r) {
                        ;
                        const mainDispl = (
                          <VView value={r } />
                        ) ;
                        const dlButton = (
                          <button type="button" onClick={() => downloadGivenBlob(r, ) } >
                            Download
                          </button>
                        ) ;
                        return (
                          <div style={{ display: "flex", flexDirection: "column", }}>
                            <div 
                            style={{ 
                              display: "flex", 
                              flexDirection: "column", 
                              maxBlockSize: `12em` ,
                            }}
                            >
                            { mainDispl }
                            </div>
                            <p>
                              { dlButton }
                            </p>
                          </div>
                        ) ;
                      } else {
                        return <div /> ;
                      }
                    }
                  ) ;
                })() , 
              } ;
            } )
          );
          const C = (
            () => (
              <React.Suspense
              fallback={(
                <div>
                <p>
                  Please enjoy your groovie eh coffee {}
                  while this's still loading.
                </p>
                <IonProgressBar 
                type='indeterminate'
                // buffer={0.5 }
                value={0.5 }
                />
                </div>
              )}
              >
                <C2 />
              </React.Suspense>
            )
          ) ;
          return (
            <C />
          ) ;
        } , [rendered11,] , )
      ) ;
    }
  ) ;
  /**    
   * we take-over the `<React.Suspense>` decorative responsibility here
   * to simplify things
   * 
   */
  return withImplicitSuspense((
    React.lazy(async () => {
      const {
        ffmpeg ,
        runProd1 ,
      } = await ffRenderDemoSvcLd ;
      return {
        default: (
          function AvGenApp1({} : {}, ): React.ReactElement {
            const runTest1 = (
              async () => {
                runProd1() ;
              } 
            ) ;
            const [acl, setAC] = (
              React.useState<XClp  >((
                AggregatingClp.getExample()
              ))
            ) ;
            const [renderedM, renderRef,] = (
              React.useState<null | (Blob | XClpWithUi.RFor ) >(null, )
            ) ;
            const rendered = (
              React.useDeferredValue(renderedM, )
            ) ;
            {}
            const rendered11 = (
              useAsyncMemo(({ aS, }, ) => {
                type RFor = avSeqEditingSUpport.XClpWithUi.RFor ;
                return (
                  rendered ?
                  ((...[src1,] : [
                    src: Blob | RFor ,
                  ] ) => (
                    src1 instanceof Blob ?
                    Promise.resolve(src1, )
                    : 
                    (async (...[src, ] : [
                      src: RFor ,
                    ] ) => {
                      const files = () => (
                        src[Symbol.asyncIterator]()
                      ) ;
                      const files1 = (
                        /** pretend that it's finite-length. */
                        (async function* () { for await (const f of files() ) yield f ; } )
                      ) ;
                      const finalFile = (
                        await (
                          1 ?
                          ffConcat(files1, { aS: aS, } , )
                          : xAvBlobListZip(files1, )
                        )
                      ) ;
                      return (
                        finalFile
                      ) ;
                    } )(src1, )
                  ) )(rendered, )
                  : new Promise<Blob>(() => /** leave hanging */ {} )
                ) ;
              } , [rendered , ] )
            ) ;
            React["useEffect"](() => {
              // console["log"](rendered, ) ;
            } , [rendered, ] );
            React["useEffect"](() => {
              (async () => {
                (async () => {
                  const r = (
                    await rendered11
                  ) ;
                  console["log"](...[
                    r,
                    r && (
                      new (class extends Object {
                        get ["@# shallDownload1"]() {
                          return downloadGivenBlob(r, ) ;
                        }
                      } )
                    ) ,
                  ] ) ;
                })() ;
              } )() ;
            } , [rendered11 ] );
            const preview11 = (
              useXPreview(rendered11, )
            ) ;
            return (
              <div>
              <p>
                <button type="button" onClick={() => void runTest1() }>
                  Run Test 
                </button>
              </p>
              <div
              style={{
                // display 
              }}
              >
                <div>
                  <p>Preview</p>
                  <blockquote>
                    { preview11 }
                  </blockquote>
                </div>
                <div>
                  { (
                    acl
                    .renderUi({ 
                      onChange: (v: XClp,) => (
                        0 && console["log"]({ oldV: acl, newV: v, })
                        ,
                        setAC(v)
                      ),
                      onUpdatedRendered: renderRef ,
                    })
                  ) }
                  <XClpStructureDumpElem 
                  value={acl }
                  />
                </div>
              </div>
              </div>
            ) ;
          }
        ) ,
      } ;
    } )
  ), ) ;
})() ;
{}







export default (
  AvGenApp1
) ;






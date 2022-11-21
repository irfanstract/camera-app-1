



import { Seq, List, Range, } from 'immutable';
import { fromMmeContentType, } from 'components/url-contenttypes-1';
import { concatAsFfConvArgs, } from 'components/ffmpg-concat-1';
import React from 'react';
import { useAsyncMemo, } from 'components/useAsyncMemo1';
import { ComponentProps, } from 'components/util-jsx-props';
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
  IonToggle ,
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
import * as ffConcat101 from "components/g-avse/ffm/concat/b101";
import {
  avFileBlobGeneratorConcat ,
} from "components/useMediaFilePostproc1" ;
import { XClp, XClpWithUi, } from 'components/g-avse/av-stem-ops/c1-base';

const {
  zipfiled1: xAvBlobListZip ,
  ffConcat ,
} = ffConcat101 ;


export {} ; // TS-1208












;
const nllUnplayableBlob = (
  new Blob([])
) ;

export { nllUnplayableBlob , } ;

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
      onBlur={e => { e.target.pause() ; } }
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

export { VView , } ;

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
const useAvRenderFlatten = (
  function (...[renderedM,] : [
    Blob | XClpWithUi.RFor | null ,
  ] ) {
    /**    
     * resilience towards the careless programmers.
     * 
     */
    const rendered = (
      React.useDeferredValue(renderedM, )
    ) ;
    /**    
     * 
     */
    return (
      useAsyncMemo(({ aS, }, ) => {
        type RFor = XClpWithUi.RFor ;
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
              await (
                new Promise<void | Event >(R => {
                  setTimeout(R, 3 * 1000 ) ;
                  aS.addEventListener("abort", R, { once: true, } ) ;
                } )
              );
              if (aS.aborted ) {
                console["log"](`aborted . returning .`) ;
                return new Blob([]) ;
              }
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
  }
) ;
const XPReview = (
  function XPreviewImpl(...[{ value: rendered, }] : [
    {} & { value: Required<Parameters<typeof useAvRenderFlatten> >[0] ; }  ,
  ] ) {
    ;
    const rendered11 = (
      useAvRenderFlatten(rendered, )
    ) ;
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
    ;
    const preview11 = (
      useXPreview(rendered11, )
    ) ;
    React.useDeferredValue(true) ;
    ;
    return (
      preview11
    ) ;
  }
) ;

export { useXPreview , } ;
export { useAvRenderFlatten , } ;
export { XPReview , } ;

export const useUsrShallPreview1 = (
  (...spArgs : [
    ComponentProps<typeof XPReview> ,
  ]) => {
    const [previewCompProps, ] = spArgs ;
    ;
    const [shallPreview, setShallPreview,] = (
      React.useState<boolean>(false, )
    ) ;
    const preview11 = (
      shallPreview ?
      <XPReview 
      {...previewCompProps }
      />
      : null
    ) ;
    const previewToggleBtn1 = (
      <IonButton 
      type='button' 
      role='switch'
      onClick={() => (
        /**    
         * had choice to read latest value given in the callback, but
         * for a11y/usability reasons instead take the "stale state" .
         * 
         */
        setShallPreview(() => !shallPreview )
      ) } 
      >
        Toggle Preview
      </IonButton>
    );
    const previewToggleBtn = (
      <IonLabel>
      <IonToggle
      checked={shallPreview }
      onIonChange={e => { const s = e.target.checked ; ; setShallPreview(() => s ) ; } }
      // value={`Preview` } 
      />
      Preview
      </IonLabel>
    ) ;
    ;
    return [
      preview11, 
      (() => ({ shallPreview, setShallPreview, previewToggleBtn: previewToggleBtn, }) )(), 
    ] as const ;
  }
) ;


























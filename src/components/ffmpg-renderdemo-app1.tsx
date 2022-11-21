import { Seq, List, Range, } from 'immutable';
import { fromMmeContentType, } from 'components/url-contenttypes-1';
import { concatAsFfConvArgs, } from 'components/ffmpg-concat-1';
import React from 'react';
import { useAsyncMemo, } from 'components/useAsyncMemo1';
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
// eslint-disable-next-line import/first 
import {
  nllUnplayableBlob ,
  VView ,
  useXPreview ,
  useAvRenderFlatten ,
  XPReview ,
  useUsrShallPreview1 ,
} from "components/g-avse/avr1" ;
/**    
 * 
 */
const AvGenApp1 = (() => {
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
            React["useEffect"](() => {
              // console["log"](rendered, ) ;
            } , [rendered, ] );
            {}
            const [
              preview11 ,
              { shallPreview, setShallPreview, } ,
            ] = (
              useUsrShallPreview1({
                value: rendered,
              })
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
                <div style={{ display: `flex`, flexDirection: `column-reverse` }} >
                  { (
                    preview11 ? (
                      <div>
                      <p>Preview</p>
                      <blockquote>
                        <div 
                        style={{ 
                          blockSize: `15em` , 
                          minInlineSize: `15em` ,
                        }} 
                        >
                        { preview11 }
                        </div>
                      </blockquote>
                      </div>
                    ) : null
                  ) }
                  <p>
                  <IonButton 
                  type='button' 
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
                  </p>
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
                  { null && (
                  <XClpStructureDumpElem 
                  value={acl }
                  />
                  ) }
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






import React from 'react';
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

import {
  ffmpSvcLd ,
  ffAppLd as ffRenderDemoSvcLd ,
} from "components/ffmpg-renderdemo1" ;
import * as avSeqEditingSUpport from "components/AvSeqEditor1";

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
  AggregatingClp ,
  UtfClip ,
} = avSeqEditingSUpport ; 
// eslint-disable-next-line import/first
import XClp = avSeqEditingSUpport.XClp ;
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
            return (
              <div>
              <p>
                <button type="button" onClick={() => void runTest1() }>
                  Run Test 
                </button>
              </p>
              <div>
                { (
                  acl
                  .renderUi({ 
                    onChange: (v: XClp,) => (
                      0 && console["log"]({ oldV: acl, newV: v, })
                      ,
                      setAC(v)
                    ),
                  })
                ) }
                <XClpStructureDumpElem 
                value={acl }
                />
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






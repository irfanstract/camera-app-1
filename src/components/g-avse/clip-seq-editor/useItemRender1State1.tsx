
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
import Lists from "components/useListEditing"; // better sticking to absolute paths
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
import * as ReactDraft from 'draft-js';
import * as XDraftEditorUtil from "components/useDraftEditor1" ;
import { newFfmpeg1, } from "components/ffmpg-pngtowebm-1" ;
import { pngAsWebm, } from "components/ffmpg-pngtowebm-1" ;

import { renderPairwise, } from "components/g-avse/av-stem-ops/c1-orderedmixc-1" ;
import { DbgAndMain, } from "components/g-avse/av-stem-ops/c1-orderedmixc-1" ;
import { XClp, XClpWithUi, } from "components/g-avse/av-stem-ops/c1-base" ;
import { XDbgArticle, } from "components/g-avse/av-stem-ops/c1-orderedmixc-1" ;
import { usePreviewPaneCtrlDebouncedValue, } from "components/g-avse/av-stem-ops/c1-orderedmixc-1" ;

export {} ; // TS-1208
















namespace XClipSeqEditor {
  ;

  export const useChildrenRenderState1 = (
    (...[{ actualChildrenArity, }, ] : [
      {} & { actualChildrenArity : number ; } ,
    ] ) => {
      const [postrenderedChildSeq, setPostrenderedChildSeqI, ] = (
        React.useState<(null | Blob | XClpWithUi.RFor )[]>(() => (
          // Range(0, p.children.length, ).map(_ => null).toArray()
          []
        ) )
      ) ;
      const [
        setPostrenderedChildSeq, 
        spcsCallCountGlb, 
        { 
          rewrapCount: spcsRewrapCount ,
          // resetToZero: spcsCntReset,
          perRewrapCallCount: spcsCallCountLocl ,
        }, 
      ] = (
        useCallbackCount((
          setPostrenderedChildSeqI
        ), [setPostrenderedChildSeqI,] , )
      ) ;
      return {

        postrenderedChildSeq ,

        /** DEBUGGING-ONLY. */
        spcsCallCountGlb ,
        /** DEBUGGING-ONLY. */
        spcsRewrapCount ,
        /** DEBUGGING-ONLY. */
        spcsCallCountLocl ,
        
        setPerItemRendered1: (
          function (...[{ i, }, newR, ] : [
            { i: number ; } ,
            (
              Parameters<(
                (
                  Required<(
                    Required<Parameters<XClp["renderUi"] > >[0]
                  )>["onUpdatedRendered"]  
                ) 
              )>[0]
            ) ,
          ] ) {
            setPostrenderedChildSeq((existingSeq) => {
              if (newR === existingSeq[i] ) {
                return existingSeq ;
              }
              if (i < existingSeq.length ) {
                ;
                return (
                  List([...existingSeq] )
                  .set(i, newR, )
                  .toArray()
                ) ;
              }
              return (
                /*
                * needs to be aware of changes at/in/of `length`.
                * 
                */
                Range(0, actualChildrenArity, ).toList()
                .map((_, i, ) => (
                (existingSeq[i] ?? null )
                ) )
                .set(i, newR, )
                .toArray()
              ) ;
            } ) ;
          }
        ) ,

      } ;
    }
  ) ;

} ;











export { XClipSeqEditor, } ;













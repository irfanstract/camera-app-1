
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
import { useRealtimePerfIntensivePreviewCtrlDebouncedValue, } from "components/useRealtimePerfIntensivePreviewCtrl-1" ;
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

import {
  DbgAndMain ,
  renderPairwise ,
} from "components/g-avse/ComparativeAndDebuggingElement" ;

import { XClp, XClpWithUi, } from "components/g-avse/av-stem-ops/c1-base" ;













export { renderPairwise , } ;

export { DbgAndMain , } ;









const XDbgArticle: (
  React.FC<(
    Required<Parameters<typeof DebuggingActivityArticle > >[0]
  )>
) = (
  DebuggingActivityArticle
) ;

export {
  XDbgArticle , 
} ;
export { useRealtimePerfIntensivePreviewCtrlDebouncedValue, } ;
export { useRealtimePerfIntensivePreviewCtrlDebouncedValue as usePreviewPaneCtrlDebouncedValue , } ;




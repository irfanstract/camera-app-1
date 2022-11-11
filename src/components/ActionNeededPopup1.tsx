

import SS from "lodash" ;
import { Seq, List, Map, Set, } from "immutable";
import { Range, } from "immutable";
import { Stack, } from "immutable";
import React from 'react';
import { useIonModal, IonModal, } from "@ionic/react";
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














const useBlockingPopupElement = (
  function () {
    ;
    const [{ popupElem, allowPopupClose = false, }, replacePopupElem, ] = (
      React.useState<(
        never
        | { popupElem: null; allowPopupClose ?: never ; } 
        | { popupElem: React.ReactElement ; allowPopupClose : boolean ; }
      )>({ popupElem: null, }, )
    ) ;
    const popupPortalImpl = (
      popupElem ?
      (
        <IonModal
        canDismiss
        isOpen
        >
          <div style={{ display: "flex", flexDirection: "column-reverse", }}>
            <div>
            { popupElem }
            </div>
            <p>
              { allowPopupClose && (
                <button 
                type="button" 
                onClick={() => replacePopupElem(() => ({ popupElem: null, }) ) } 
                >
                  Close
                </button>
              ) }
            </p>
          </div>
        </IonModal>
      )
      : 
      <IonModal 
      canDismiss 
      isOpen={false } 
      />
      // null
    ) ;
    ;
    return [
      popupPortalImpl ,
      { replacePopupElem, } ,
    ] as const ;
  }
) ;
export { useBlockingPopupElement, } ;
;






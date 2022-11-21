





import {
  EitherBothSetOrBothUnset ,
  EitherSetAndOthersUnset ,
  EitherSetOrBothUnset ,
} from "components/util/dicts-allOrNothing" ;
import SS from "lodash" ;
import { Seq, List,   } from "immutable";
import { Range, } from "immutable";
import { Stack, } from "immutable";
import {  Map, } from "immutable";
import {   Set, } from "immutable";
import { SortedMap, } from "components/util-immutable-datastructure";
import { SortedSet, } from "components/util-immutable-datastructure";
import { newCompletableFuture, } from "components/util/CompletableFuture";

import ZipFile from "jszip" ;
import { fileNamesContentsItrCompileAsArray1 , } from "components/zipfile-gen-1" ;
import { zipfileInitWithFilesListNc ,          } from "components/zipfile-gen-1" ;
import { newZipFileBuilder ,          } from "components/zipfile-gen-1" ;

import { pairedWithIndex, } from "components/g-avse/ffm/pairedWithIndex";

export {} ; // TS-1208










/**    
 * upload/write all those src files into the unit.
 * 
 */
export const ffFsInitFromList1 = (
  function (...[ffmpeg, fileNames1, ] : [
    import("@ffmpeg/ffmpeg").FFmpeg ,
    (ReturnType<typeof fileNamesContentsItrCompileAsArray1> extends Promise<infer FileList1 > ? FileList1 : never ) ,
  ]) {
    return (
      fileNames1
      .asyncMap(async ([i, { fileNameExt, }, file, ]) => {
        if (0) {
        console["log"]((
          [i, { fileNameExt, }, file, ] as const
        )) ;
        }
        const fileNameFinal = (
          "" + i + fileNameExt
        );
        ffmpeg.FS("writeFile", fileNameFinal, (
          new Uint8Array(await file.arrayBuffer(), )
        ), ) ;
        return {
          i ,
          fileNameFinal ,
        } ;
      } )
    ) ;
  }
) ;






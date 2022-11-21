

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
import initMainthreadCommit1 from "components/g-avse/workerthreads/init-mainthread-commit-1";

import ZipFile from "jszip" ;
import { fileNamesContentsItrCompileAsArray1 , } from "components/zipfile-gen-1" ;
import { zipfileInitWithFilesListNc ,          } from "components/zipfile-gen-1" ;
import { newZipFileBuilder ,          } from "components/zipfile-gen-1" ;

import { pairedWithIndex, } from "components/g-avse/ffm/pairedWithIndex";
import type { FileLsIterable, } from "components/g-avse/ffm/concat/b101";

import { concatAsFfConvArgs, } from "components/ffmpg-concat-1";
import { FNF, } from "components/ffmpg-concat-1";

import { ffFsInitFromList1, } from "components/g-avse/ffmjs/fs-ops-1";
import { zipfiled1, } from "components/g-avse/ffm/concat/zb101";

export {} ; // TS-1208









type FFCP_FILELIST = (
  Required<Parameters<typeof ffFsInitFromList1>>[1]
) ;
namespace FFCP_FILELIST { ; } // TS-1205





export { FFCP_FILELIST, } ;






const ffConcatImplWithoutWaitingLoaded1 = (
  async (...args : [
    import("@ffmpeg/ffmpeg").FFmpeg ,
    FFCP_FILELIST ,
    null | AbortSignal ,
    (
      {}
      & Partial<{ videoRes : [number, number ?,] ; }>
    ) ? ,
  ] ) => {
    const [
      ffmpeg, 
      fileNames1, 
      aS, 
      { 
        videoRes: videoResSpec = null, 
      } = {}, 
    ] = args ;
    ;
    const videoRes = ((): [number, number,] => {
      const videoRes1 = videoResSpec || [320, 240, ] ;
      const [w, h = w , ] = videoRes1;
      return [w, h, ] ;
    } )() ;
    ;
    const concatAsFfConvArgs1: typeof concatAsFfConvArgs = concatAsFfConvArgs ;
    ;
    const d1 = (
      /**    
       * upload/write all those src files into the unit.
       * 
       */
      await (
        ffFsInitFromList1(ffmpeg, fileNames1, )
      )
    ) ;
    if (aS) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      (
        await new Promise<void>(R => queueMicrotask(R, ) )
        ,
        aS.throwIfAborted()
      ) ;
    }
    console["log"](d1, );
    await ((...args : Parameters<typeof concatAsFfConvArgs1 >  ) => {
      console.groupCollapsed(`FF-based concat`) ;
      try {
        ;
        return (
          ffmpeg.run(...(
            concatAsFfConvArgs1(...args, )
          ) )
        ) ;
      } finally {
        console.groupEnd() ;
      }
    } )([
      ...(
        d1
        .map(({ fileNameFinal, }): Required<Parameters<typeof concatAsFfConvArgs1 > >[0][number] => {
          if (1) {
            return (
              FNF([fileNameFinal,], { wh: videoRes, }, )
            ) ;
          }
          return ({
            path: fileNameFinal, 
          }) ;
        } )
      ) ,
    ] , { assumedWh: videoRes , } , ) ;
    ;
    const outf = ((): Blob => {
      try {
        return (
          new Blob([ffmpeg.FS("readFile", "o.webm", ) ], { type: "video/webm", }, )
        ) ;
      } catch (z) {
        console["warn"](z, ) ;
        return new Blob([], { type: "video/webm", }) ;
      }
    })() ;
    ;
    return {
      outf ,
    } ;
  }
) ;
const ffConcatImplLoadAndProcess1 = (
  async (...[ffmpeg, fileNames1, aS, ...otherArgs ] : Parameters<typeof ffConcatImplWithoutWaitingLoaded1> ) => {
    ffmpeg.isLoaded() || await ffmpeg.load() ;
    try {
      const { outf, } = (
        await (
          ffConcatImplWithoutWaitingLoaded1(ffmpeg, fileNames1, aS, ...otherArgs, )
        )
      ) ;
      ;
      return {
        outf ,
      } ;
    } finally {
      ;
      ffmpeg.exit( ) ;
    }
  }
) ;




export { ffConcatImplWithoutWaitingLoaded1, } ;
export { ffConcatImplLoadAndProcess1      , } ;













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

import { concatAsFfConvArgs, } from "components/ffmpg-concat-1";
import { FNF, } from "components/ffmpg-concat-1";

import { ffFsInitFromList1, } from "components/g-avse/ffmjs/fs-ops-1";
import { zipfiled1, } from "components/g-avse/ffm/concat/zb101";

import { FFCP_FILELIST, } from "components/g-avse/ffm/concat/b101a";
import * as FFCIM from "components/g-avse/ffm/concat/b101a";
import { ffConcatImplLoadAndProcess1, } from "components/g-avse/ffm/concat/b101a";

/**   
 * this shall not be instantiated generators since
 * instantiated generators cannot be reused.
 * 
 */
export type FileLsIterable = {
  (): AsyncGenerator<Blob, void > ;
} ;

export {} ; // TS-1208














const ffAsync = (
  import("components/ffmpg-pngtowebm-1")
) ;

export { zipfiled1, } ;

;
/**    
 * upload/write all those src files into the unit.
 * 
 */
export { ffFsInitFromList1, } ;
const { ffConcatImplWithoutWaitingLoaded1, } = FFCIM ;
export { ffConcatImplWithoutWaitingLoaded1, } ;
export const {
  ffConcat ,
} = (() => {
  return {
    ffConcat: (
      async (...ffArgs : [
        files: FileLsIterable ,
        etc ?: {} & { aS : AbortSignal ; } ,
      ] ) => {
        const [
          files,   
          { aS = null, } = {} ,
        ] = ffArgs ;
        const { newFfmpeg1, } = await ffAsync ;
        const concatAsFfConvArgs1: typeof concatAsFfConvArgs = concatAsFfConvArgs ;
        ;
        ;
        const fileNames1 = (
          await fileNamesContentsItrCompileAsArray1(pairedWithIndex(files, ) )
        ) ;
        ;
        // TODO
        const {
          outf ,
        } = (
          await (async (): ReturnType<typeof ffConcatImplLoadAndProcess1> => {
            if (0) {
              ;
              const ffmpeg = (
                await newFfmpeg1()
              ) ;
              ;
              return (  
                await ffConcatImplLoadAndProcess1(ffmpeg, fileNames1, aS, )
              ) ;
            }
            return (
              await ffConcat11(fileNames1, )
            ) ;
          })()
        ) ;
        // TODO
        return outf ;
      }
    ) ,
  } ;
} )() ;
export const {
  // initWorker ,
  submitWrk: ffConcat11 ,
} = (() => {
  type Submend = (
    FFCP_FILELIST
  ) ;
  const fwcMessagingAndTitleProperties = {
    ident: `--------&&&&&-S-`,
    tiitle: `The FFMP Concat Daemon` ,
  } ;
  const implSpawnNewWorkerAndSubmitBootMsgs = (
    async () => {
      const { FFMCP, } = (
        await import ("components/ffmpg")
      ) ;
      ;
      // alert(`${process.env.PUBLIC_URL}`) ;
      const ffcc = (
        // `http://localhost:8100/static/js/bundle.js`
        // `/static/js/bundle.js`
        // new URL('./deep-thought.js', import.meta.url)
        new Worker(new URL("components/g-avse/ffm/concat/b101", import.meta.url, ) , {
          name: fwcTitle ,
          type: "classic" , // see the Webpack docs
        }, )
      ) ;
      ffcc.postMessage(fwcMainObligativeMsg) ; 
      ffcc.postMessage([fwcMainPathSetupMsg, FFMCP[0].path , ]) ; 
      ;
      return ffcc ;
    }
  ) ;
  ;
  type FwcSubmend = (
    Submend
  ) ;
  const {
    ident: fwcDirectivePassphrase,
    tiitle: fwcTitle,
  } = (
    fwcMessagingAndTitleProperties
  ) ;
  /**    
   * shall be the same across the main-thread and the child-thread
   * 
   */
  const fwcMainObligativeMsg: string | number = (
    `${fwcDirectivePassphrase }\\W` 
  ) ;
  const fwcMainPathSetupMsg: string | number = (
    `${fwcDirectivePassphrase }\\WPathInit` 
  ) ;
  /**   
   * the `try` block is for the main-thread (needs to return value ; see above), while
   * the `finally` block is for the spawned thread.
   * 
   */
  try {
    const { initWorker, wRef1, } = (() => {
      /**    
       * avoiding spawnbombing
       * 
       */
      const [whenShallInitWorker, { resolve: initWorker, }, ] = (
        newCompletableFuture<void>()
      ) ;
      const wRef1 = (async () => {
        /**    
         * avoiding spawnbombing
         * 
         */
        await (
          whenShallInitWorker
        ) ;
        console["info"]((
          TypeError(`starting the workthred - ${fwcTitle } `)
        )) ;
        ;
        // alert(`${process.env.PUBLIC_URL}`) ;
        const ffcc = (
          await implSpawnNewWorkerAndSubmitBootMsgs()
        ) ;
        const {
          submitWrk ,
        } = initMainthreadCommit1<Submend, Blob>(ffcc, ) ;
        return [
          ffcc ,
          { submitWrk, } ,
        ] as const ;
      } )() ;
      return {
        initWorker ,
        wRef1 ,
      } ;
    })() ;
    return {
      submitWrk : async (...[v,] : [
        payload: Submend ,
      ] ): ReturnType<typeof ffConcatImplLoadAndProcess1> => {
        initWorker() ;
        const f = (
          await (
            (await wRef1 )[1].submitWrk(v, )
          )
        ) ;
        return {
          outf: f ,
        } ;
      } ,
    } ;
  } finally {
    ;
    const window = globalThis ;
    ;
    /**    
     * add the necessary `message` handler
     * 
     */
    window.addEventListener("message", async (e) => {
      const { data, } = e ;
      if (data === fwcMainObligativeMsg ) {
        ffConcatThreadMain() ;
      }
    } ) ;
    let donePathConfig : boolean ;
    donePathConfig = false ;
    async function ffConcatThreadMain(): Promise<void> {
      await import("window-polyfills") ;
      const { ffmpegNewInstance, FFMCP, } = (
        await import ("components/ffmpg")
      ) ;
      const newFfmpeg1 = ffmpegNewInstance ;
      const concatAsFfConvArgs1: typeof concatAsFfConvArgs = concatAsFfConvArgs ;
      ;
      ;
      window.addEventListener("message", async (e) => {
        const { data: data, } = e ;
        console.groupCollapsed(`ffConcatThreadMain - message`) ;
        try { 
          console["info"]((
            TypeError(JSON.stringify(data, ) )
          )) ;
        } finally { 
          console.groupEnd() ;
        }
        /**    
         * check if it's {@link fwcMainObligativeMsg }, and
         * 
         */
        if (data === fwcMainObligativeMsg ) {
          return ;
        }
        /**    
         * check if it's the special msg, and
         * run relevant things accordingle
         * 
         */
        if (data) {
          const [c1, c2, ] = (
            data as [
              cls: number | string ,
              value: unknown , 
            ]
          ) ;
          /**    
           * check if it's the "set the path(s)" msg, and
           * reassign {@link FFMCP[0] } accordingle
           * 
           */
          if (c1 === fwcMainPathSetupMsg ) {
            ;
            // TODO 
            if (typeof c2 === "string" && c2 ) {
              ;
              [FFMCP[0], ] = [
                {
                    "path": c2 ,
                    "mainName": "main" ,
                } ,
              ] ;
              donePathConfig = true ;
            } else {
              throw TypeError(`invalid cmd syntax: ${JSON.stringify([c1, c2, ]) }`) ;
            }
            return ;
          }
        }
        /**    
         * content
         * 
         */
        if (data) {
          const [callingIdent, fileNames1, ] = (
            data as [
              callingIdent: number | string, 
              value: Submend ,
            ]
          ) ;
          const aS = null ;
          postMessage([callingIdent, await (async () => {
            try {
              ;
              if (!donePathConfig ) {
                throw TypeError((
                  [
                    `no path-config step has taken place.` ,
                    `path needs config explicitly via appropriate wrk.postMessage(...) syntax .` ,
                    `please fix your code to add it.` ,
                  ].join("\n")
                )) ;
              }
              const ffmpeg = (
                await newFfmpeg1()
              ) ;
              const { outf, } = (
                await ffConcatImplLoadAndProcess1(ffmpeg, fileNames1, aS, )
              ) ;
              return outf ;
            } catch (z) {
              console["error"](z, ) ;
              return (
                new Blob([], {}, )
              ) ;
            }
          } )(), ] as const) ;
        }
      } ) ;
    }
  }  
} )() ;














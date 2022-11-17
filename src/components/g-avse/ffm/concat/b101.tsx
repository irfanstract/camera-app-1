

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

import { concatAsFfConvArgs, } from "components/ffmpg-concat-1";
import { FNF, } from "components/ffmpg-concat-1";

const pairedWithIndex = (
  function <Item, R> (...[files,] : [() => AsyncGenerator<Item, R> , ] ) {
    return (
      async function* () {
        let i = 0 ;
        for await (const f of files() ) {
          yield (
            (<A1, A2,>(...a: [index: number, file: typeof f, ]) => a )(i++, f, )
          ) ;
        }
      }
    ) ;
  }
) ;

/**   
 * this shall not be instantiated generators since
 * instantiated generators cannot be reused.
 * 
 */
type FileLsIterable = {
  (): AsyncGenerator<Blob, void > ;
} ;

export {} ; // TS-1208














const ffAsync = (
  import("components/ffmpg-pngtowebm-1")
) ;

export const zipfiled1 = (
  async (...[
    files, 
  ] : [
    files: FileLsIterable ,
  ] ) => {
    const readmeTxtContent = (
      [
        `` ,
        `*post-prod*` ,
        `` ,
      ].join("\r\n")
    ) ;
    const zipf1 = (
      newZipFileBuilder()
    ) ;
    zipf1.file(`README.md`, (
      readmeTxtContent
    ), {}, ) ;
    const fsrc = (
      zipf1.folder("src", )!
    ) ;
    const generateFileNameDataSeq = (
      pairedWithIndex(files, )
    ) ;
    await zipfileInitWithFilesListNc(fsrc, generateFileNameDataSeq, ) ;
    return (
      await (
        zipf1.generateAsync({ 
          type: "blob", 
          // mimeType: "", 
        })
      )
    ) ;
  }
) ;

;
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
        console["log"]((
          [i, { fileNameExt, }, file, ] as const
        )) ;
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
type FFCP_FILELIST = (
  Required<Parameters<typeof ffFsInitFromList1>>[1]
) ;
export const ffConcatImplWithoutWaitingLoaded1 = (
  async (...[ffmpeg, fileNames1, aS, ] : [
    import("@ffmpeg/ffmpeg").FFmpeg ,
    FFCP_FILELIST ,
    null | AbortSignal ,
    {} ? ,
  ] ) => {
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
              FNF([fileNameFinal,], { wh: [320, 240,], }, )
            ) ;
          }
          return ({
            path: fileNameFinal, 
          }) ;
        } )
      ) ,
    ] , { assumedWh: [320, 240, ] , } , ) ;
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
  ;
  /**    
   * shall be the same across the main-thread and the child-thread
   * 
   */
  const ffConcatMainObligativeMsg: string | number = (
    `src\\components\\g-avse\\ffm\\concat\\b101.tsx#W` 
  ) ;
  {
    ;
    const window = globalThis ;
    const ffConcatThreadMain = async () => {
      await import("window-polyfills") ;
      const { ffmpegNewInstance, FFMCP, } = (
        await import ("components/ffmpg")
      ) ;
      // TODO 
      [FFMCP[0], ] = [
        {
            "path": "http://localhost:8100/assets/js/ffmpeg-core.js",
            "mainName": "main" ,
        } ,
      ] ;
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
        if (data === ffConcatMainObligativeMsg ) {
          return ;
        }
        if (data) {
          const [callingIdent, fileNames1, ] = (
            data as [
              callingIdent: number | string, 
              value: FFCP_FILELIST ,
            ]
          ) ;
          const aS = null ;
          postMessage([callingIdent, await (async () => {
            try {
              ;
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
    } ;
    ;
    /**    
     * add the necessary `message` handler
     * 
     */
    window.addEventListener("message", async (e) => {
      const { data, } = e ;
      if (data === ffConcatMainObligativeMsg ) {
        ffConcatThreadMain() ;
      }
    } ) ;
  }
  {
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
          TypeError(`starting the FFConcat working-thread`)
        )) ;
        ;
        // alert(`${process.env.PUBLIC_URL}`) ;
        const ffcc = (
          // `http://localhost:8100/static/js/bundle.js`
          // `/static/js/bundle.js`
          // new URL('./deep-thought.js', import.meta.url)
          new Worker(new URL("components/g-avse/ffm/concat/b101", import.meta.url, ) , {
            name: `The FFMP Concat Daemon` ,
            type: "classic" , // see the Webpack docs
          }, )
        ) ;
        ffcc.postMessage(ffConcatMainObligativeMsg) ; 
        const {
          submitWrk ,
        } = initMainthreadCommit1<FFCP_FILELIST, Blob>(ffcc, ) ;
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
        payload: FFCP_FILELIST ,
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
  }
} )() ;














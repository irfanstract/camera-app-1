




import { ObjValue, } from "components/util/enum-namespaces";
import { 
  Enum, 
  EnumValue,  
} from "components/util/enum-namespaces";
import Immutable from "immutable";
import {
  EitherBothSetOrBothUnset ,
  EitherSetAndOthersUnset ,
  EitherSetOrBothUnset ,
} from "components/util/dicts-allOrNothing" ;
import SS from "lodash" ;
import { identity } from "lodash" ;
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

type PromiseReturn<A> = (
  A extends Promise<infer S> ?
  S : never
) ;
type AsyncReturnType<A extends (...a: any[] ) => any > = (
  PromiseReturn<ReturnType<A> >
) ;

namespace Ff {

  export type FilteringUnitDesc = string | ProFilteringUnitDesc1 ;
  export abstract class ProFilteringUnitDesc1 {} ;
  export type FilterChainDesc = [
    fChain: FilteringUnitDesc[], 
    fChainOptions ?: {}, 
  ] ;
  export const filterChainListStringify = (
    (...[src,] : [
      (
        never
        | Ff.FilterChainDesc[]
      ) ,
    ]  ) => (
      src
      .map(([c, options = {}, ]) => {
        return (
          c.join(",")
        ) ;
      } )
      .join(" ; ")
    )
  ) ;

  ; // TS-1205
}

export {} ; // TS-1208









/**   
 * will need to be async to defer `throw TypeError`s .
 * 
 */
const ffmpgImportAsync = (
  import ("components/ffmpg")
) ;



/**    
 * callers shall take care of the `.isLoaded()` thing.
 * 
 */
const newFfmpeg1 = (
  async () => {
    const {
      ffmpegNewInstance ,
    } = (
      await ffmpgImportAsync
    ) ;
    const ffmpeg = (
      ffmpegNewInstance()
    ) ;
    return ffmpeg ;
  }
) ;



type PngWebmConvArgs = [
  src: File, 
  options : (
    {} 
    & Partial<{ generatedClipDurationSecs : number ; }>
    & { 
      /**    
       * this parameter 
       * is very important to specify since 
       * (a) end-users dislike low-res products 
       * (b) HQ-and-HD will require work/load infeasible for real-time processing
       * 
       */
      quality: "realtime-preview" | "click-preview" | "classy" ; 
    }
    & Partial<{ 
      /**    
       * rather than having to deal-with complexities arising from needing to default the (relevant) streams,
       * it'd be important to introduce silent, fallback streams.
       * 
       * if specified to `false` then
       * the stream will not be defaulted.
       * 
       */
      audioStreamShall: boolean ; 
    }>
    & Partial<{ impl : import("@ffmpeg/ffmpeg").FFmpeg ; }>
    & Partial<{ verboseLog : boolean ; }>
  ) , 
] ;
const pngAsWebmOriginal = (
  async (...[p, options , ] : PngWebmConvArgs ) => {
    const { verboseLog = false , } = options ;
    const { impl: callerSpecifiedFf = null , } = options ;
    const { quality = "click-preview" , } = options ;
    const { audioStreamShall = true , } = options ;
    const { generatedClipDurationSecs = 8 , } = options ;
    const ffmpeg = ( 
      callerSpecifiedFf ||
      await newFfmpeg1()
    ) ;
    const { lastModified: assumedLastModifiedDate, } = p ;
    console[0 ? "log" : "debug"]({
      quality ,
      audioStreamShall ,
    }) ;
    ;
    const [f1a, ] = await (async () => {
      ;
      ffmpeg.isLoaded() || await ffmpeg.load() ;
      try {
        const srcfileDotJpg = (
          "p-a" + ((p.name.match(/\.\w+$/g) || [] )[0] ?? "" )
        );
        const finalFileDotJpg = "o.webm";
        ffmpeg.FS("writeFile", (
          srcfileDotJpg
        ) , new Uint8Array(await p.arrayBuffer() ), ) ;
        {
        ;
        console.groupCollapsed(`pngAsWebmOriginal(...) - ffmpeg.run(....) ;`);
        try {
        ;
        ffmpeg.run(...[
          /** the banners would be infeasible here */
          ...(
            verboseLog ?
            [ "-loglevel", "info", ]
            : 
            [ "-hide_banner" , ]
          ) ,  
          ...[
            "-loop", "1", // `image2` (demuxer) 
            "-framerate", "5", // `image2` (demuxer) 
            "-i", srcfileDotJpg,  
          ],
          ...(
            audioStreamShall ?
            [
              "-f", "lavfi",
              "-i", [`aevalsrc=0 [out${ 0 }] `, ].join(" ; ") ,
            ]
            : []
          ) ,
          ...[
            /**    
             * - advanced codecs typically would abort on transparency-enabled fmts
             * - prever YUV(s) over RGB(s) and HS*(s)
             * 
             */
            "-filter:v", (
              Ff.filterChainListStringify([ 
                [
                  [
                    (quality === "realtime-preview" ? `scale=256*256` : "null" ),
                    `format=pix_fmts=yuv420p` ,
                  ] ,
                ] ,
              ], )
            ) , 
            /**    
             * necessary, otherwise there'd be nothing to limit the duration/length.
             * 
             */
            "-t", (generatedClipDurationSecs ).toFixed(1), 
            "-format", "matroska", 
            "-c:v", "libvpx", 
            /**    
             * `Neither bitrate nor constrained quality specified, using default CRF of 32`
             * 
             */
            "-b:v", `${ 500E3.toFixed(0,) }`, 
            finalFileDotJpg ,
          ], 
        ]) ;
        } finally {
          ;
          console.groupEnd() ;
        }
        }
        const f1Bytes = (
          ffmpeg.FS("readFile", finalFileDotJpg, )
        ) ;
        const f1 = (
          new File([f1Bytes, ], `generated.webm`, { 
            lastModified: assumedLastModifiedDate, 
            type: "video/webm" ,
          } )
        ) ;
        return [f1, ] as const ;
        // TODO
      } finally {
        ffmpeg.exit() ;
      }
    } )() ;
    return f1a ;
  }
) ;
const pngAsWebm = (
  async (...a0 : PngWebmConvArgs ) => {
    const [f, { impl, ...optionsExcludingImpl }] = a0 ;
    const a = ((): PngWebmConvArgs => (
      [f, optionsExcludingImpl ]
    ) )() ;
    console["log"]("pngAsWebm", ...a ) ;
    return (
      (await pngAsWebm11(a ) )
      .outf
    ) ;
  }
) ;
const {
  submitWrk : pngAsWebm11
} = (() => {
  type Submend = (
    PngWebmConvArgs
  ) ;
  const fwcMessagingAndTitleProperties = {
    ident: `--------5&&&&&-S-`,
    tiitle: `The PNG-to-WEBM Conversion` ,
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
        new Worker(new URL("components/ffmpg-pngtowebm-1", import.meta.url, ) , {
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
      ] ): Promise<(
        {}
        & AsyncReturnType<typeof ffConcatImplLoadAndProcess1>
        & { [k in keyof Pick<AsyncReturnType<typeof ffConcatImplLoadAndProcess1> , "outf" > ]: File ; }
      )> => {
        initWorker() ;
        const f = (
          await (
            (await wRef1 )[1].submitWrk(v, )
          )
        ) ;
        return {
          outf: (
            f instanceof File ?
            f
            : new File([f,], "generated-video.webm", { type: f.type, }, )
          ) ,
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
    ;
    let donePathConfig : boolean ;
    donePathConfig = false ;
    async function ffConcatThreadMain(): Promise<void> {
      await import("window-polyfills") ;
      ;
      const { ffmpegNewInstance, FFMCP, } = (
        await import ("components/ffmpg")
      ) ;
      ;
      const newFfmpeg1 = ffmpegNewInstance ;
      const concatAsFfConvArgs1: typeof concatAsFfConvArgs = concatAsFfConvArgs ;
      ;
      window.addEventListener("message", async (e) => {
        const { data: data, } = e ;
        console.groupCollapsed(`pngtowebm - message`) ;
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
                const outf = (
                  await pngAsWebmOriginal(...fileNames1 )
                ) ;
                return outf ;
              } catch (z) {
                console["error"](z, ) ;
                return (
                  new File([], "video-failed.webm", { type: "video/webm", }, )
                ) ;
              }
            } )(), ] as const) ;
          }
        }
        ;
      } ) ;
    }
  }
} )() ;












export { ffmpgImportAsync, } ;
export { newFfmpeg1 , } ;
export { pngAsWebm , } ;




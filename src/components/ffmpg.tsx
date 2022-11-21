

import { createFFmpeg as officialCreateFFmpeg, fetchFile, } from '@ffmpeg/ffmpeg';
import { FfFsOpsList, } from 'components/ffmpg-fs-ops-list-1';















console["log"](process.env, ) ;
const FFMCP : [currentlyValue: { path: string ; mainName: string ; }, ] = [
  {
    path: (
      ((() => {
        try {
            return (
              document.baseURI 
            ) ;
        } catch (z) {
          console.group(`failed to infer value for 'FFMCP[0].path' `) ;
          console["error"](TypeError(
            [
              `failed to resolve 'document.baseURI'. ` ,
              `this could be because this is within Worker (WorkerGlobalScope ) where (the) DOM API(s) do not exist . ` ,
              `please code the assignment (in the Worker Thread's main-method ) yourself - 'FFMCP[0] = {...} ;' . ` ,
              `the stack-trace follows. ` ,
            ].join("\n")
          ), ) ;
          console["info"](z, ) ;
          console.groupEnd() ;
          return "data:application/x-notfound,/" ;
        }
      })())
      .replace(/\/?$/, () => "/assets/js/ffmpeg-core.js" )
    ) ,
    mainName : (
      "main"
    ),
  } as const ,
] ;

const {
  ffmpegNewInstance ,
} = ((): (
  {} 
  & { ffmpegNewInstance : (
    () => (
      {}
      // & Pick<ReturnType<typeof officialCreateFFmpeg>, "isLoaded" | "load" | "exit" | "FS" | "run" >
      & ReturnType<typeof officialCreateFFmpeg>
    )
  ) ; }
) => {
  return {
    ffmpegNewInstance: (
      () => {
        const [ffmpegCorePath, ] = FFMCP ;
        console[1 ? "log" : "debug"]({ ffmpegCorePath , }, ) ;
        return (
            officialCreateFFmpeg({ 
              corePath: ffmpegCorePath.path , 
              mainName: ffmpegCorePath.mainName , 
              log: true , 
              logger : ({ message }) => void console['warn'](message, ) , 
            })
        ) ;
      }
    ) ,
  } ;
} )() ;
const ffmpeg = (
   ffmpegNewInstance()
) ;
export const init: () => Promise<typeof ffmpeg> = (
  () => (
    (async () => (
        ffmpeg.isLoaded()
        || (await ffmpeg.load() )
        ,
        void true
    ) )()
    .then(_ => ffmpeg )
  )
) ;

export default (
   ffmpeg
) ;
export  { ffmpegNewInstance, };
export  { FFMCP , } ;
export  { FfFsOpsList as BufferedFsOps , } ;










export {} ; // TS-1208












import { createFFmpeg, fetchFile, } from '@ffmpeg/ffmpeg';















const ffmpegCore = {
   path: (
      document.baseURI
      .replace(/\/?$/, () => "/assets/js/ffmpeg-core.js" )
   ) ,
   mainName : (
      "main"
   ),
} as const ;

const ffmpeg = (
   createFFmpeg({ 
      corePath: ffmpegCore.path , 
      mainName: ffmpegCore.mainName , 
      log: true , 
      logger : ({ message }) => void console['error'](message, ) , 
   })
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










export {} ; // TS-1208










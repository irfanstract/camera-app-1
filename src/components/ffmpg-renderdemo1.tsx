




import downloadGivenBlob from 'components/files-dialogues/downloadGivenBlob';

import * as FFMP1 from "components/ffmpg-1" ;
import ffWebmOutputSpec from './ffmpg-webmoutputsppec1';


















const {
  ffmpCheckLoadedElseThrow ,
  ffmpSvcInitialisedFuture ,
} = FFMP1 ;
const ffAppLd0 = (async () => {
  ;
  const { ffmpeg, } = await ffmpSvcInitialisedFuture ;
  const runProd10 = async () : Promise<(
    {}
    & { data: null | File; }
  )> => {
    const generatedFName = (
      "video.webm"
    ) ;
    console["log"]({ generatedFName, }, [
      ffmpeg.isLoaded() ,
    ], );
    ffmpeg.isLoaded() || await ffmpeg.load() ;
    try {
      ;
      const { 
        path: srcPath, 
        format: srcFmt, 
        duration = null ,
      } = ((): (
        {}
        & { path : string ; }
        & { format : string ; }
        & { duration ?: null | number ; }
      ) => {
        // 
        switch (3 as (never | 1 | 3 )) {
          case 1 :
          {
            const patth = (
              "videoinput.webm"
            ) ;
            ffmpeg.FS("writeFile", patth, "<!doctype matroska >", ) ;
            return {
              path: patth ,
              format: "matroska" ,
              duration: null ,
            } ;
          }
          case 3 :
            return {
              format: "lavfi" ,
              path: (
                [`testsrc=duration=120:rate=30 [out0] ; sine [out1] `, ]
                .join(" ; ")
              ) ,
              duration: 15.3 ,
            } ;
        }
      } )() ;
      console["log"]({
        srcFmt ,
        srcPath ,
      });
      ;
      await ffmpeg.run(
        "-loglevel", `info`, 
        ...[
          "-f", srcFmt, 
          ...((typeof duration === "number") ? ["-t", (duration).toFixed(2), ] : [] ) ,
          "-i", srcPath ,
        ] ,
        ...ffWebmOutputSpec({ outPath: generatedFName, }) ,
      ) ;
      ;
      const fileBytes1 = (
        ffmpeg.FS("readFile", generatedFName, )
      ) ;
      console.log({ data: fileBytes1, }) ;
      const generatedVideoFile1 = (
        new File([fileBytes1, ], `generated-video.webm`, { 
          type: "video/webm", 
        }, )
      ) ;
      if (generatedVideoFile1.size ) {
        ;
        return {
          data: generatedVideoFile1 ,
        } ;
      } else {
        console["warn"]((
          TypeError(`transcoding appears to have failed and therefore no download can be made`)
        )) ;
        return {
          data : null ,
        } ;
      }
    } finally {
      ;
      console["log"](TypeError(`readdir: ${ffmpeg.FS("readdir", ".", ) } ;`));
      await ffmpeg.exit() ;
    }
  } ;
  const runProd1 = (async () => {
    const {
      data ,
    } = (
      await runProd10()
    ) ;
    data && (
      (function (file: File ) {
        (
          downloadGivenBlob((
            file
          ) , { name: file.name, } , )
        ) ;
      } )(data, )
    ) ;
  } ) ;
  return {
    ffmpeg ,
    runProd1 ,
  } ;
}) ;
const ffAppLd = (
  ffAppLd0()
) ;












export {
  ffmpSvcInitialisedFuture as ffmpSvcLd ,
  ffAppLd ,
} ;
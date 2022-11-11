
import SS from "lodash" ;
import { Seq, List, Map, Set, } from "immutable";










const ffWebmOutputSpec = (
  ({ 
    outPath: outPath, 
    timeoutSecs = 600, // TODO
    bitRate = 700E3 ,
  } : (
    {}
    & { outPath : string ; }
    & { timeoutSecs ?: null | number ; }
    & { bitRate ?: null | number ; }
  ) ): string[] => [
    "-f", `matroska`, 
    "-codec:v", `libvpx`, 
    ...(
      (typeof bitRate === "number") ? 
      ["-b:v", `${bitRate.toFixed(0, ) }`, ] : []
    ) ,
    "-codec:a", (
      // OPUS or AAC
      `aac`
    ), 
    ...(
      (typeof timeoutSecs === "number") ? 
      ["-t", `${timeoutSecs }`, ] : [] 
    ), 
    "-flush_packets", `1`, 
    outPath, 
  ]
) ;




export default (
  ffWebmOutputSpec
) ;






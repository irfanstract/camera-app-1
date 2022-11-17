

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









(async () => {
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
  const ffmpeg = ffmpegNewInstance() ;
  console["info"]((
    TypeError(`FFMPEG created successfully`)
  )) ;
  ffmpeg.exit( ) ;
} )() ;














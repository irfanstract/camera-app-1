


import SS from "lodash" ;
import { Seq, List, Map, Set, } from "immutable";
import { Range, } from "immutable";
import { Stack, } from "immutable";
import { 
  documentNodeAsSvgStandaloneCode, 
} from "components/documentNodeAsSvgFile";
import {
  svgStandaloneCodeAsSvgDataUrl ,
  svgStandaloneCodeAsDataUrl,
  svgStandaloneCodeAsUrl , 
} from "components/svgFileFromCode1";
import * as SvgFileFromCode from "components/svgFileFromCode1" ;
import { fromMmeContentType, } from "components/url-contenttypes-1";







type OutputConfig = (
  {}
  & Required<Parameters<typeof SvgFileFromCode.svgStandaloneCodeAsPortableImgBlob > >[1 ]
) ;
export default (
  async (...[srcElem , config = {}, ] : [
    Element ,
    (
      {}
      & Partial<{
        output : OutputConfig ;
      }>
    ) ? ,
  ] ) => {
    const {
      output: outputConfig ,
    } = config ;
    const date = Date.now() ;;
    const asSvgStdalone = (
      documentNodeAsSvgStandaloneCode(srcElem, )
    ) ;
    const blob0 = (
      await (
        SvgFileFromCode.svgStandaloneCodeAsPortableImgBlob(asSvgStdalone, outputConfig, )
      )
    ) ;
    return (
      new File([blob0,], `component-display` + ((...[tp,] : [type: string,] ) => {
        ;
        return (
          (fromMmeContentType(tp, ) || { fileNameExt: "" , } )
          .fileNameExt
        ) ;
      })(blob0.type, ) , { type: blob0.type, lastModified: date, } )
    ) ;
  }
) ;


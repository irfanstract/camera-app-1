


import {
  EitherBothSetOrBothUnset ,
  EitherSetAndOthersUnset ,
  EitherSetOrBothUnset ,
} from "components/util/dicts-allOrNothing" ;
import { ObjValue, } from "components/util/enum-namespaces";
import { 
  Enum, 
  EnumValue,  
} from "components/util/enum-namespaces";
import SS, { identity } from "lodash" ;
import { Seq, List, Map, Set, } from "immutable";
import { Range, } from "immutable";
import { Stack, } from "immutable";
import Immutable from "immutable";


import ZipFile from "jszip" ;
import { fromMmeContentType, } from 'components/url-contenttypes-1';













const fileNamesContentsItrCompileAsArray1 = (
  async function (...[
    generateFileNameDataSeq ,
  ] : [
    srcFiles: () => AsyncGenerator<[name: never | number | string, contents: Blob, ]> ,
  ] ) {
    return (
      (await [].appendedAllAsync(generateFileNameDataSeq() ) )
      .map(([i, file, ]) => {
        const {
          fileNameExt = "" ,
        } = fromMmeContentType(file.type, ) || {} ;
        return (
          (<A, A2>(...a: [  
            name: typeof i, 
            etc: A, 
            contents: typeof file,
          ] ) => a )(i, { fileNameExt, }, file, )
        ) ;
      } )
    ) ;
  }
) ;



const zipfileInitWithFilesListNc = (
  (async (...[
    fsrc ,
    generateFileNameDataSeq ,
  ] : [
    dest: ZipFile ,
    srcFiles: () => AsyncGenerator<[name: never | number | string, contents: Blob, ]> ,
  ] ) => {
    (
      (await fileNamesContentsItrCompileAsArray1(generateFileNameDataSeq, ) )
      .forEach(([i, { fileNameExt, }, file, ]) => {
        fsrc.file("" + (i).toString() + fileNameExt , file , {  } , ) ;
      } )
    ) ;
  } )
) ;
const newZipFileBuilder = (
  () => (
    new ZipFile()
  )
) ;













export { fileNamesContentsItrCompileAsArray1 , } ;
export { zipfileInitWithFilesListNc ,          } ;
export { newZipFileBuilder, } ;










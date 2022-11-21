





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

import ZipFile from "jszip" ;
import { fileNamesContentsItrCompileAsArray1 , } from "components/zipfile-gen-1" ;
import { zipfileInitWithFilesListNc ,          } from "components/zipfile-gen-1" ;
import { newZipFileBuilder ,          } from "components/zipfile-gen-1" ;

import { pairedWithIndex, } from "components/g-avse/ffm/pairedWithIndex";

// only import type
import type { FileLsIterable, } from "components/g-avse/ffm/concat/b101";

export {} ; // TS-1208








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












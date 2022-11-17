





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

import { createFFmpeg as officialCreateFFmpeg, fetchFile, } from '@ffmpeg/ffmpeg';

export {} ; // TS-1208













const DIRECTORY = Symbol() ;

type FileData = (
  string | Map<string, FileData>
) ;

class FfFsOpsList extends Object {

  protected readonly currentFilePathsAndValues !: Map<string, string | typeof DIRECTORY> ;

  static deriveDriveState = (
    (...[desc, ] : [FfFsOpsList["desc"] , ] ): FfFsOpsList["currentFilePathsAndValues"] => {
      const PCPB = (
        `please check for probable bugs in your module code.`
      ) ;
      if (desc ) {
        const [prevState, [opName, path, ..._1 ] ] = desc ;
        const {
          currentFilePathsAndValues : existingPathsContents ,
        } = prevState ;
        if (opName === "unlink" ) {
          if ((
            false 
            || (
              true 
              && existingPathsContents.get(path, null, ) !== null
            )
          )) {
            ;
          } else {
            throw (
              TypeError((
                `the ${opName} would exercise nonexistent path. ${PCPB } (${opName } '${path }). `
              ))
            ) ;
          }
          return (
            existingPathsContents
            .remove(path, )
          ) ;
        }
        if (opName === "mkdir" || opName === "readdir" ) {
          if ((
            existingPathsContents
            .get(path, DIRECTORY, )
            ===  
            DIRECTORY
          )) {
            return existingPathsContents ;
          } else { 
            throw (
              TypeError((
                `the '${opName } 'op would ${opName === "readdir" ? "probe" : "overwrite" } a regular file. ${PCPB } (${opName } '${path }). `
              ))
            ) ;
          }
        }
        if (opName === "readFile" || opName === "writeFile" ) {
          if ((
            false 
            || (
              true 
              && opName === "readFile"
              && existingPathsContents.get(path, DIRECTORY, ) === DIRECTORY
            )
          )) {
            throw (
              TypeError((
                `either the file does not exist or is not a regular file. ${PCPB } (${opName } '${path }'). `
              ))
            ) ;
          }
          if ((
            false 
            || (
              true 
              && opName === "writeFile"
              && existingPathsContents.get(path, null, ) !== null
            )
          )) {
            throw (
              TypeError((
                `the '${opName }' op would overwrite existing file-or-directory. ${PCPB } (${opName } '${path }'). `
              ))
            ) ;
          }
          return existingPathsContents ;
        }
        throw (
          TypeError((
            `Unrecognised Opcode. ${PCPB } ${JSON.stringify([opName, path, ..._1 ], ) }. `
          ))
        ) ;
      } 
      return (
        Map()
      ) ;
    }
  ) ;
    
  constructor(
    public readonly desc : (
      null  
      | [FfFsOpsList, FfFsOpsList.Item, ]
    ) ,
  ) {
    super() ;
    this.currentFilePathsAndValues = (
      // TODO
      FfFsOpsList.deriveDriveState(desc, )
    ) ;
  }
  toOpsArray(): FfFsOpsList.Item[] {
    if (this.desc ) {
      const [prevState, lastOp,] = (
        this.desc
      ) ;
      return [
        ...prevState.toOpsArray() ,
        lastOp ,
      ] ;
    } else {
      return [] ;
    }
  } ;
  presentlyFileNamesAndContents() {
    return (
      this.currentFilePathsAndValues
    ) ;
  }
  toJSON() {
    return {
      ops : (
        this.toOpsArray()
      ) ,
    } ;
  }

  /**    
   * new instance representing seq with appended.
   * 
   */
  withAddedOp(...[v,] : [FfFsOpsList.Item, ] ) {
    return (
      new FfFsOpsList([this, v, ])
    ) ;
  }

} ;
namespace FfFsOpsList {
  export type Item = (
    Parameters<ReturnType<typeof officialCreateFFmpeg>["FS"] > 
  ) ;
  ; // TS-1205, and to prevent out-of-sync in renaming
} ;








export { FfFsOpsList, } ;










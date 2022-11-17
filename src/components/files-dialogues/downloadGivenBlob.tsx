

import { 
   identity, 
} from "lodash";
import { 
   OptionsCouldBeOmittedAltogether,
} from "components/util/dict-argument-couldbeomitted";
import { 
   newCompletableFuture,
} from "components/util/CompletableFuture";
















export default (
   identity<(
      (...args : [
         data : Blob, 
         ...options: OptionsCouldBeOmittedAltogether<(
            {}
            & { name ?: string ; }
         )>, 
      ] ) => Promise<void>
   )>((
      async (data, { name, } = {} , ) => {
         const url = (
            URL.createObjectURL(data, ) 
         ) ;
         const aElem = (
            document.createElement("a")
         ) ;
         aElem.target = "_blank";
         aElem.href = (
            url
         ) ;
         aElem.download = (
            ""
            || (name ?? ``)
            || (data instanceof File ? data.name : "" )
            // || `saved`
         ) ;
         const [
            onClick, { resolve: confirmClick, }, 
         ] = newCompletableFuture<void>() ;
         aElem.addEventListener("click", () => confirmClick() ) ;
         aElem.click() ;
         setTimeout(() => {
            URL.revokeObjectURL(url, ) ;
         } , 60 * 1000, );
         // TODO
      }
   ))
) ;




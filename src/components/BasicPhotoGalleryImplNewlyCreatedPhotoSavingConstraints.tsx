


import type { 
   UserPhoto, 
} from "./BasicPhotoGalleryImpl";












// BasicPhotoGalleryImplNewlyCreatedPhotoSavingConstraints
namespace newlyCreatedPhotoSavingConstraints {
  ;
  export const SHALL_DROP_INLINEATTACHEDVERSION: boolean = true ;
  export const CONDITIONALLY_DROP_INLINEATTACHEDVER = (
    (v: UserPhoto, ): UserPhoto => {
      if (SHALL_DROP_INLINEATTACHEDVERSION ) {
        const { webviewPath, ...v1 } = v ;
        return v1 ;
      }
      return v ;
    }
  ) ;
}



export {
  newlyCreatedPhotoSavingConstraints ,
} ;


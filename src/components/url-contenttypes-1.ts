







const fromMmeContentType = (
  (...[tp, ] : [string,]): (
    never
    | null
    | (
      {}
      & { fileNameExt : string ; }
    )
  ) => {
    if (tp === ("image/png"  ) ) { return { fileNameExt: ( ".png"  ), } ; }
    if (tp === ("image/jpeg" ) ) { return { fileNameExt: ( ".jpeg" ), } ; }
    if (tp === ("video/webm" ) ) { return { fileNameExt: ( ".webm" ), } ; }
    if (tp === ("video/mp4"  ) ) { return { fileNameExt: ( ".mp4"  ), } ; }
    if (tp === ("video/ogg"  ) ) { return { fileNameExt: ( ".ogg"  ), } ; }
    if (tp === ("image/svg+xml"  ) ) { return { fileNameExt: ( ".svg"  ), } ; }
    return null ;
  }
) ;









export { fromMmeContentType, } ;

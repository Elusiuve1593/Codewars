function sc(floor){
    if(floor <= 1) {
      return ''
    } else if(floor <= 2) {
      return 'Aa~ Pa! Aa!'
    } else if(floor <= 6) {
      return 'Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!'
    } else if(floor <= 7) {
      return 'Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!'
    } else if(floor <= 10) {
      return 'Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!'
    }
  }
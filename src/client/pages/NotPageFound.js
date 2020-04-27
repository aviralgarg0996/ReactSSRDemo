import React from 'react'

const NotPageFound=({staticContext={}})=>{
    staticContext.notFound=true
    return(<h1>Page Not found</h1>)
}

export default {
    component:NotPageFound
}
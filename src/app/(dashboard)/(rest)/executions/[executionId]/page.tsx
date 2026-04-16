interface pageProps{
    params:Promise<{
        executionId:string
    }>
}

const Page=async ({params}:pageProps)=>{
    const {executionId}=await params;
    return(
        <p>executionId:{executionId}</p>
    )
}

export default Page;
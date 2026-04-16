interface pageProps{
    params:Promise<{
        workflowId:string
    }>
}

const Page=async ({params}:pageProps)=>{
    const {workflowId}=await params;
    return(
        <p>workflowId:{workflowId}</p>
    )
}

export default Page;
interface pageProps{
    params:Promise<{
        credentialId:string
    }>
}

const Page=async ({params}:pageProps)=>{
    const {credentialId}=await params;
    return(
        <p>CredentialId:{credentialId}</p>
    )
}

export default Page;
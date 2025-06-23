import { SignUp } from '@clerk/nextjs'
import React from 'react'

function Page() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <SignUp
                signInForceRedirectUrl={'/explore'}
                forceRedirectUrl="/explore"
            />
        </div>
    )
}

export default Page

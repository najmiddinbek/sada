import Image from 'next/image'
import React, { useTransition } from 'react'

export default function RasmCard({ url, onClick }) {
    const [isPending, startTransition] = useTransition()
    return (
        <div>
            <div className='border-2 border-white'>
                <Image src={url} width={100} height={100} alt='Image' priority />
            </div>
            <button onClick={() => startTransition(onClick)} type='button' disabled={isPending} className='bg-red-500 py-2 px-4 border- border-white mt-2'>
                {isPending ? 'O`chirilmoqda...' : 'O`chirish'}
            </button>
        </div>
    )
}

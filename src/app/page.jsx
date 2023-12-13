import UploadForm from '@/components/UploadForm'
import React from 'react'
import { getAllPhotos } from '../../actions/uploadAction'
import Rasmlar from '@/components/Rasmlar'

export default async function page() {
  const photos = await getAllPhotos()

  console.log(photos)


  return (
    <>
      <h1>Next js da rasm yuklash Developer </h1>
      <UploadForm />

      <h1>Barcha rasmlar</h1>
      <Rasmlar photos={photos || []} />
    </>
  )
}

'use client'
import { useRef, useState } from 'react'
import RasmCard from './RasmCard';
import ButtonSubmit from './ButtonSubmit';
import { revalidate, uploadPhoto } from '../../actions/uploadAction';

export default function UploadForm() {
    const formRef = useRef();
    const [files, setFiles] = useState([])

    async function handleInputFiles(e) {
        const files = e.target.files;

        const newFiles = [...files].filter(file => {
            if (file.size < 1024 * 1024 && file.type.startsWith('image/')) {
                return file;
            }
        })

        setFiles(prev => [...newFiles, ...prev]);

        formRef.current.reset();

    }

    async function handleDelete(index) {
        const newFiles = files.filter((__, i) => i !== index)
        setFiles(newFiles)
    }

    async function handleUpload() {
        if (!files.length)
            return alert("Hali rasm tanlamadingiz!")
        if (files.length > 2)
            return alert("Faqatgina 2 ta rasm yuklay olasiz")

        const formData = new FormData();

        files.forEach(file => {
            formData.append('files', file)
        })

        const res = await uploadPhoto(formData)

        if (res?.msg) alert(`Mufavvaqiyatli: ${res?.msg}`)
        if (res?.errorMessage) alert(`hatolik: ${res.errorMessage}`)

        setFiles([])
        formRef.current.reset()

        // revalidate("/")

    }

    return (
        <form action={handleUpload} ref={formRef}>
            <div className='bg-[#1111   ]'>
                <input type="file" accept='image/' multiple onChange={handleInputFiles} />

                <h5 className='text-red-500'>Faqat 2 ta rasm</h5>

                <div className='flex items-center gap-4'>
                    {files.map((file, index) => (
                        <RasmCard key={index} url={URL.createObjectURL(file)} onClick={() => handleDelete(index)} />
                    ))}
                </div>

            </div>

            <ButtonSubmit value={"Yuklash"} />

        </form>
    )
}

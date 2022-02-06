import { useState, useEffect } from 'react';

export default function Uploader() {
  const [ name, setName ] = useState('')
  const [ audioData, setAudioData ] = useState(null)

  function handleSubmit(e){
    e.preventDefault()

    const formData = new FormData()
    formData.append('name', name)
    formData.append('audio_data', setAudioData)

    debugger
    fetch(`${process.env.REACT_APP_BACKEND_URL}`, {
      method: 'POST',
      body: formData
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>name</h2>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
      <h2>upload mp3</h2>
      <input type='file' accept='audio/*' onChange={(e) => setAudioData(e.target.files[0])}/>
      <input type='submit' />
    </form>
  );
}

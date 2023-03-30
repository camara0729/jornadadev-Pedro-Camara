import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
    return (
        <div className='videoFooter'>
            <div className='videoFooterText'>
                <h4>@pedroluizsgc</h4>
                <p>Descrição do vídeo</p>
                <div className='videoFooterMusic'>
                    <MusicNoteIcon className='videoFooterIcon'/>
                    <div className='videoFooterMusicText'>
                        <p>Título da música</p>
                    </div>
                </div>
            </div>
            <img 
                className='videoFooterRecord'
                alt='Imagem de um vinil girando'
                src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png'
            />
        </div>
    )
}

export default VideoFooter
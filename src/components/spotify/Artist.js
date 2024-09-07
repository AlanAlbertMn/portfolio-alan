import React from 'react'
import { MdOutlineImageNotSupported } from "react-icons/md";

export const Artist = ({data}) => {
    const {profile, visuals, uri} = data;
    console.log(data);
  return (
    <div className='album-container'>
        <a href={uri} target='_blank' rel="noreferrer">
          {visuals.avatarImage != null 
          ? <img src={visuals?.avatarImage.sources[0].url} alt={profile.name}/> 
          : <MdOutlineImageNotSupported color='white'  size='300px'/>}
        </a> 
        <h2>{profile?.name}</h2>
    </div>
  )
}

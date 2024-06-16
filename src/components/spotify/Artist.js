import React from 'react'

export const Artist = ({data}) => {
    const {profile, visuals, uri} = data;
  return (
    <div className='album-container'>
        <a href={uri} target='_blank' rel="noreferrer"><img src={visuals?.avatarImage?.sources[0]?.url} alt={profile?.name}/></a>
        <h2>{profile?.name}</h2>
        <h3>{profile?.name}</h3>
    </div>
  )
}

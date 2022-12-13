import React  from 'react';


const ProfileImage = (props) => {
 return (
    <div>
        <img src= {props.src} alt={props.alt} width={props.width} height={props.height} />
        {props.children}
    </div>
 )
}
export default ProfileImage;
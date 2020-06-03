import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.background}>
                <img
                    src='https://avatars.mds.yandex.net/get-pdb/1211668/45e3ec41-bbc8-40b9-9eab-1f7e6a4e18f1/s1200?webp=false' />
            </div>
            <div className={s.descriptionBlock}>
                <img src = 'https://avatars.mds.yandex.net/get-pdb/2469852/058a9be3-4f96-41bb-9c57-8a4235b7e04f/s1200?webp=false'/>
</div>
        </div>
    )
}

export default ProfileInfo;
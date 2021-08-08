import React,{FC} from 'react';
import './LogInfo.scss'

interface LogInfoProps {
    isMobile:boolean
}
const LogInfo:FC<LogInfoProps> = ({isMobile}) => {
    // Берем данные пользователя из редакса (фамилию и имя)
    return (
        <div className={`log-info ${isMobile?'mobile':'desctop'}`}>
            <span>Имя Фамилия</span>
        </div>
    );
};

export default LogInfo;
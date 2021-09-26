import React from 'react';
import Pen from '../../assets/img/Pen.png';
import './NoticeBoard.scss';

function NoticeBoard(props) {
    const {value} = props;

  return (
    <div className="board">
        <div className="board--pen">
        <img className="board--pen-image" src={Pen} alt="image1" />
        </div>
        <div className="board--text">
            <p className="board--text-words">{value}</p>
        </div>
      
    </div>
  );
}

export default NoticeBoard;

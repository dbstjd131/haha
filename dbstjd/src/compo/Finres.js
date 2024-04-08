import React from "react";
import '../style/Finres.css';
import { res, icon } from '../asset/img/index';
const Finres = () => {
    return (
        <div className="Res">
            <div className="Top">
                <div className="wd">
                    <img className='res' alt='res' src={res} /><p className="word">회원가입</p>
                </div>
                <div className="secondword">
                    회원가입이 완료되었습니다.
                </div>
            </div>

            <div className="Complete">
                <div className="rescomplete">
                    <div className="Icon"><img className='icon' alt='icon' src={icon} /></div>
                    <div className="comword">FCTS &nbsp;<span className="mixword">회원가입이 완료</span>&nbsp;되었습니다.</div>
                    <div className="logword">회원님은 FCTS의 모든 기능을 이용하실 수 있습니다.&nbsp;로그인 후 이용해 주세요.</div>
                </div>
            </div>
            <div className="Button">
                <div className="home">홈으로</div>
                <div className="Login">로그인</div>
            </div>

            <div className="sangsae">
                <span className="dbstjd">상세한 이용 방법은 [홈] - [이용안내] 를 확인해주세요.<br /><br />
                본 회원 가입은 일반 회원 가입으로, 기업회원 전환 신청시 [이용안내] - [기업회원 전환 작성방법], [기업회원 전환 양식]<br />
                을 다운로드 하신 후 고객센터로 연락 바랍니다.<br /><br />
                이용에 불편사항이 있을경우 고객센터로 연락 부탁드립니다.</span>

            </div>
        </div>
    )
}

export default Finres;
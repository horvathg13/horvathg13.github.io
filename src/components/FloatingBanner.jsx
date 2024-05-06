import React from "react"
import PropTypes from "prop-types"
import {useTranslation} from "react-i18next";

export function FloatingBanner({onAccept, onDeny}){

    const{t}=useTranslation()
    return (
        <div className="banner-main-container flex">
            <div className="banner-header-container block">
                <div className="banner-header"> <h1>{t('cookies.header')}</h1></div>
                <div className="banner-message">
                    <h3>{t('cookies.message')}</h3>
                </div>
            </div>
            <div className="banner-buttons-container">
                    <button onClick={onAccept}>
                        {t('cookies.acceptText')}
                    </button>
                        <button onClick={onDeny}>
                            {t('cookies.denyText')}
                        </button>
            </div>
        </div>
    )
}

export default FloatingBanner
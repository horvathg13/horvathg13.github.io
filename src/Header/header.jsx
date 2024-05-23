import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {FaListUl} from "react-icons/fa";
import {useEffect, useState} from "react";
import ReactFlagsSelect from "react-flags-select";
import i18next from "i18next";
import {languageTransform} from "../index";
import {useTranslation} from "react-i18next";

const Header=()=>{
    const navigate=useNavigate()
    const [openMobileMenu, setOpenMobileMenu]=useState(false)
    const [language, setLanguage] = useState("HU");
    const {t}=useTranslation();
    const location=useLocation();

    useEffect(() => {
        i18next.changeLanguage(languageTransform(language)).then(()=>{
            document.title=t('document.title');
            console.log(location);
        });

    }, [language]);

    return(
        <div className="header-main flex">
            <div className="logo" onClick={() => navigate("/")}><h1>Portfol<span>io</span></h1></div>

            <div className="menu flex">
                <li onClick={() => navigate("/")}>{t('header.menu.Home.title')}</li>
                <NavLink to={t('header.menu.AboutMe.navLink')}>
                    <li>{t('header.menu.AboutMe.title')}</li>
                </NavLink>
                <NavLink to={t('header.menu.Projects.navLink')}>
                    <li>{t('header.menu.Projects.title')}</li>
                </NavLink>
                <NavLink to={t('header.menu.Research.navLink')}>
                    <li>{t('header.menu.Research.title')}</li>
                </NavLink>
                <NavLink to={t('header.menu.ContactMe.navLink')}>
                    <li>{t('header.menu.ContactMe.title')}</li>
                </NavLink>
            </div>

            <div className="lng-select">
                <ReactFlagsSelect
                    countries={["HU", "GB"]}
                    customLabels={{HU: "magyar", GB: "english"}}
                    placeholder="Select Language"
                    selected={language}
                    onSelect={(code) => setLanguage(code)}
                    className="menu-flags"
                />
            </div>
            <div className="mobile">
                <FaListUl onClick={() => {
                    setOpenMobileMenu(!openMobileMenu)
                }} className="mobile-open-icon"/>
                {openMobileMenu ? <div className="mobile-menu">
                    <li onClick={() => {
                        navigate("/");
                        setOpenMobileMenu(!openMobileMenu)
                    }}>{t('header.menu.Home.title')}</li>
                    <NavLink to={t('header.menu.AboutMe.navLink')}>
                        <li onClick={() => {
                            setOpenMobileMenu(!openMobileMenu)
                        }}>{t('header.menu.AboutMe.title')}</li>
                    </NavLink>
                    <NavLink to={t('header.menu.Projects.navLink')}>
                        <li onClick={() => {
                            setOpenMobileMenu(!openMobileMenu)
                        }}>{t('header.menu.Projects.title')}</li>
                    </NavLink>
                    <NavLink to={t('header.menu.Research.navLink')}>
                        <li onClick={() => {
                            setOpenMobileMenu(!openMobileMenu)
                        }}>{t('header.menu.Research.title')}</li>
                    </NavLink>
                    <NavLink to={t('header.menu.ContactMe.navLink')}>
                        <li onClick={() => {
                            setOpenMobileMenu(!openMobileMenu)
                        }}>{t('header.menu.ContactMe.title')}</li>
                    </NavLink>

                </div> : null}
            </div>
        </div>
    )
}
export default Header
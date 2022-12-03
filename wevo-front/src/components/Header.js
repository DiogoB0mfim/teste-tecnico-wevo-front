import * as S from "../styles/HeaderStyled"
import logo from "../assets/wevo-logo.png"
import github from "../assets/github-logo.png"

const Header = () => {
    return (
        <>
        <S.Header>
            <S.LogoHeader src={logo} alt="logo wevo"/>
            <a href="https://github.com/DiogoB0mfim" target="blank"><S.GithubHeader src={github} alt="logo github"/></a>
        </S.Header>
        </>
    )
}

export default Header;
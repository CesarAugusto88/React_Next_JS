import Link from 'next/link';

function Title(props) {
    return (
      <h1 style={{ color: props.color }}>{props.children}</h1>
    )
}

export default function Sobre() {
    return (
        <div>
            <header>
                <Title color="purple">Página Sobre</Title>

            </header>
            <header className="headerContainer">
                <Link href="https://cesaraugusto88.github.io/">
                <a target="_blank">
                    <h1>CesarAugusto88.github.io</h1>
                </a>
                </Link>
            </header>
            <Link href="/">
                <a>
                    Link para Home!
                </a>
            </Link>
        </div>
    )
}
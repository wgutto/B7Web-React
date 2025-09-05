const pegarDataAtual = () => {
    return new Intl.DateTimeFormat('pt-BR', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }).format(new Date())
}

type Props = {
    nome: string
    foto: string | undefined
    profissao: string
}

export const Pessoa = ({nome, foto = 'https://thumbs.dreamstime.com/z/vetor-de-%C3%ADcone-perfil-do-avatar-padr%C3%A3o-foto-usu%C3%A1rio-m%C3%ADdia-social-183042379.jpg?ct=jpeg', profissao}: Props) => {
    return (
        <div className="flex gap-10">
            
                <div className="flex flex-col items-center gap-2 text-gray-100">
                <h1 className="font-bold">{nome}</h1>

                <p>{pegarDataAtual()}</p>
                
                <img className="w-45 h-45 rounded-full" src={foto} alt={nome}/>

                <h2 className="underline">{profissao}</h2>
            </div>
        </div>
    )
}
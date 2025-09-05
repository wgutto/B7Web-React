import { PessoaType } from "@/types/pessoaType"

const pegarDataAtual = () => {
    return new Intl.DateTimeFormat('pt-BR', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }).format(new Date())
}

type Props = {
    pessoa: PessoaType[]
}

export const Pessoa = ({pessoa}: Props) => {
    return (
        <div className="flex gap-10">
            {pessoa.map((item) => (
                <div className="flex flex-col items-center gap-2 text-gray-100" key={item.id}>
                <h1 className="font-bold">{item.nome}</h1>

                <p>{pegarDataAtual()}</p>
                
                <img className="w-45 h-45 rounded-full" src={item.foto} alt={item.nome}/>

                <h2 className="underline">{item.profissao}</h2>
            </div>
            ))}
        </div>
    )
}
import { Pessoa } from "@/components/Pessoa"
import { pessoas } from "@/data/pessoas"


const Page = () => {
  return (
    <div className="w-screen h-screen bg-gray-800 flex items-center justify-center gap-2">
      {pessoas.map(pessoa => (
        <Pessoa 
          key={pessoa.id}
          nome={pessoa.nome}
          foto={pessoa.foto}
          profissao={pessoa.profissao}
        />
      ))}
    </div>
  )
}

export default Page
import { Pessoa } from "@/components/Pessoa"
import { pessoas } from "@/data/pessoas"


// NÁO FAZ SENTIDO FAZER ISSO
// FAZER O DA AULA PASSADA E O CORRETO
const Page = () => {
  return (
    <div className="w-screen h-screen bg-gray-800 flex items-center justify-center gap-2">
      <Pessoa 
        pessoa={pessoas}
      />
    </div>
  )
}

export default Page
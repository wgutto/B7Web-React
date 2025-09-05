import { Card } from "@/components/Card"

const Page = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col gap-2">
      <h1 className="text-2xl font-bold">Children do Componente</h1>
      <Card 
        frase="Este é o conteúdo do Card"
      >
      </Card>
    </div>
  )
}

export default Page
import { CarouselRoot, CarouselContent, CarouselItem, CarouselControls } from "@/components/customized/carousel/carousel-10";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const games = [
  {
    title: "Jogo da memória",
    description: "Descrição do jogo",
    image: "/jogo_da_memoria.png",
    link: "https://drive.google.com/file/d/1mtd3RTck9POdf2aSzrdmReKD6-jlUuvF/view?usp=drive_link",
  },
  {
    title: "Arraste a sílaba",
    description: "Descrição do jogo",
    image: "/arraste_a_silaba.png",
    link: "https://drive.google.com/file/d/10bh7q3paGECBpTVgCb3bORDNk20Dy3gX/view?usp=drive_link",
  },
  {
    title: "Encontre a sílaba",
    description: "Descrição do jogo",
    image: "/encontre_a_silaba.png",
    link: "https://drive.google.com/file/d/1qXrtQALWDXN8akXP2CCHvjk2IOtDMhuh/view?usp=drive_link",
  },
  {
    title: "Jogo do balão",
    description: "Descrição do jogo",
    image: "/jogo_do_balao.png",
    link: "https://drive.google.com/file/d/1mtd3RTck9POdf2aSzrdmReKD6-jlUuvF/view?usp=drive_link",
  },
  {
    title: "Jogo de pintar",
    description: "Descrição do jogo",
    image: "/jogo_pintar.png",
    link: "https://drive.google.com/file/d/1rJTv6TclCfj9Nc734aTJpXsliyAjcNus/view?usp=drive_link",
  },
  {
    title: "Acerte a sílaba",
    description: "Descrição do jogo",
    image: "/acerte_a_silaba.png",
    link: "https://drive.google.com/file/d/1XpefRPqQ-H3aWqPvLmbvTKyiKPbcvo_v/view?usp=drive_link",
  },
];

export default function Home() {
  return (
    <div className="font-sans grid items-center justify-items-center min-h-screen p-8">
      <h1 className="text-4xl font-bold">Jogos do NinoEdu!</h1>

      <CarouselRoot>
        <CarouselContent>
          {games.map((game, index) => (
            <CarouselItem key={index} basis="basis-2/3">
              <div className="bg-accent rounded-lg p-12 text-center w-full flex flex-col justify-center">
                <div className="mb-8 flex justify-center">
                  <Image 
                    src={game.image} 
                    alt={game.title} 
                    width={600} 
                    height={400}
                    className="rounded-lg object-cover shadow-lg"
                  />
                </div>
                <h2 className="text-4xl font-bold mb-6">{game.title}</h2>
                <Link href={game.link} target="_blank" rel="noopener noreferrer">
                   <Button className="bg-gradient-to-r from-blue-500 to-blue-800 hover:bg-blue-600 text-white text-lg px-8 py-3">
                     Baixar
                   </Button>
                 </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselControls />
      </CarouselRoot>
    </div>
  );
}

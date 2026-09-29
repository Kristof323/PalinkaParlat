import { Bevezeto } from './components/bevezeto';
import {Fejlec} from './components/header';
import { Kartya1, Kartya2, Kartya3 } from './components/kartyak';
import {Title} from './components/title';



function App() {
  return
  (
    <>
     <Fejlec cim={"Pálinka Parlát"} alcim={"A pálinka világa"} />
     <Title cim={"REACT gyakorlás: Komponensekre bontás"} alcim={"Téma: Pálinkák és gyümölcspárlatok"} />
     <Bevezeto cardHeader={"Bevezető a palinka vilagaba"} paragaph1={"A pálinka a gyümölcsökből készült, erjesztett és lepárolt ital, amelynek alkoholtartalma általában 40-50% között van."} paragaph2={"A pálinka készítése során a gyümölcsöket először erjesztik, majd lepárolják, hogy az alkoholtartalom növekedjen."} paragaph3={"A pálinka különböző gyümölcsökből készülhet, például szilvából, barackból, körtéből vagy almából."} />
     <Kartya1 cardHeader={"Gyakori Alapanyagok"} paragraph1={"Alma"} paragraph2={"Körte"} paragraph3={"Szilva"} paragraph4={"Meggy"} paragraph5={"KajsziBarack"} />
     <Kartya2 cardHeader={"Népszerű pálinkák"} paragraph1={"1. Szilvapálinka"} paragraph2={"2. Barackpálinka"} paragraph3={"3. Körtepálinka"} paragraph4={"4. Almapálinka"} paragraph5={"5. Birsalmapálinka"} />
     <Kartya3 cardHeader={"Íz- és illatjegyek"} paragraph1={"1. Gyümölcsös"} paragraph2={"2. Illatos"} paragraph3={"3. Érett gyümölcsre jellemző"} paragraph4={"4. Harmonikus"} paragraph5={"5. Tiszta lecsengésű"} />    </>
  )
}

export default App
import { Local } from "./Local";

export class Itinerario{
    nomeDoItinerario: string;
    /** {@link SentidoDoItinerario} */
    seIda: boolean;

    seuLocal: Local;

    parada1: Local;
    parada2: Local;
    parada3: Local;
    parada4: Local;
    parada5: Local;

    faculdadeDestino: Local;

    horaDeSaida: string;
}
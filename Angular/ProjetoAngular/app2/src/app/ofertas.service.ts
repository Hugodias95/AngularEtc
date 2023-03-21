import { Oferta } from "./shared/oferta.model"
import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import 'rxjs/operators'
import { firstValueFrom } from "rxjs"

@Injectable()
export class OfertasService {

    constructor(private http: HttpClient) { }


    public getOfertas(): Promise<Oferta[]> {
        //Efetuar uma requisição http
        //Observable to Promise
        return firstValueFrom(this.http.get('http://localhost:3000/ofertas?destaque=true'))
            .then((resposta: any) => resposta)
        //Retornar uma promessa contendo Oferta[]
    }

    public getOfertaPorCategoria(categoria: string): Promise<Oferta[]> {
        return firstValueFrom(this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`))
            .then((resposta: any) => resposta)
    }

    public getOfertaPorId(id: number): Promise<Oferta> {
        return firstValueFrom(this.http.get(`http://localhost:3000/ofertas?id=${id}`))
            .then((resposta: any) => resposta.shift())
    }









    /*public getOfertas2(): Promise<Oferta[]> {
        return new Promise((resolve, reject) => {
            //algum tipo de processamento que ao finalizar chama a função resolve ou reject
            let deu_certo: boolean = true

            if(deu_certo) {
                setTimeout(() => {
                    resolve(this.ofertas)
                }, 3000);
                
            } else {
                reject({codigo_erro: 404, mensagem_erro: 'Servidor não encontrado'})
            }
        })
        //exemplo de usos para o then que podem acontecer antes de retornar o valore para a requisição do ngOnInit do HomeComponent
        .then((ofertas: Oferta[]) => {
            //fazer alguma tratativa
            console.log('Primeiro then')
            return ofertas
        })
        .then((ofertas: Oferta[]) => {
            //fazer alguma outra tratativa
            console.log('Segundo then')
            return new Promise((resolve2,reject2) => {
                setTimeout(() => {
                    resolve2(ofertas)
                }, 5000);
            })
        })
        .then((ofertas: Oferta[]) => {
            console.log('Terceiro then executado após 5 segundos pois estava aguardando uma Promise ser resolvida')
            return ofertas
        })
    }*/
}
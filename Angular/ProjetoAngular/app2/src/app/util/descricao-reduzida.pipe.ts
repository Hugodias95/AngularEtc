import {Pipe} from '@angular/core'

@Pipe({
    name: 'descricaoReduzida'
})
export class DescricaoReduzida {
    transform(texto: string): string {
        if (texto.length > 15) {
            return texto.substring(0,15) + '... '
        }

        return texto
    }

}
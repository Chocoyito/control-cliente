import { Injectable } from "@angular/core";
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/compat/firestore'
import { Cliente } from "../models/cliente.model";
import { Observable, map } from 'rxjs'

@Injectable()
export class ClienteService{
    clientesColeccion: AngularFirestoreCollection<Cliente>
    clienteDoc: AngularFirestoreDocument<Cliente>

    clientes: Observable<Cliente[]>
    cliente: Observable<Cliente>

    constructor(private db: AngularFirestore){
        this.clientesColeccion = db.collection('cliente', ref => ref.orderBy('nombre', 'asc'))
    }

    getClientes(): Observable<Cliente[]>{
        // Obtener coleccion clientes
        this.clientes = this.clientesColeccion.snapshotChanges().pipe(
            map(cambios => {
                return cambios.map(accion => {
                    const datos = accion.payload.doc.data() as Cliente
                    datos.id = accion.payload.doc.id
                    return datos
                })
            })
        )
        return this.clientes
    }
}